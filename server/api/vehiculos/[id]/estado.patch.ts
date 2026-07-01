import prisma from '../../../utils/prisma'

const ESTADOS_MANUALES_PERMITIDOS = ['disponible', 'en_mantenimiento', 'de_baja'] as const
type EstadoManualVehiculo = typeof ESTADOS_MANUALES_PERMITIDOS[number]

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (!['administrador', 'ejecutivo'].includes(session.user.perfilNombre)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'No autorizado para cambiar estados de vehículos'
    })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de vehículo inválido' })
  }

  const body = await readBody(event) || {}
  const estado = String(body.estado || '').trim()

  if (estado === 'arrendado') {
    throw createError({
      statusCode: 400,
      statusMessage: 'El estado arrendado solo se asigna al crear un arriendo'
    })
  }

  if (!ESTADOS_MANUALES_PERMITIDOS.includes(estado as EstadoManualVehiculo)) {
    throw createError({ statusCode: 400, statusMessage: 'Estado de vehículo inválido' })
  }

  const estadoManual = estado as EstadoManualVehiculo

  const vehiculo = await prisma.vehiculos.findUnique({
    where: { id },
    select: {
      id: true,
      estado: true,
      activo: true
    }
  })

  if (!vehiculo) {
    throw createError({ statusCode: 404, statusMessage: 'Vehiculo no encontrado' })
  }

  if (estadoManual !== 'de_baja' && (vehiculo.estado === 'de_baja' || !vehiculo.activo)) {
    throw createError({
      statusCode: 409,
      statusMessage: 'No se puede reactivar un vehículo dado de baja desde esta acción'
    })
  }

  const arriendoVigente = await prisma.arriendos.findFirst({
    where: {
      vehiculo_id: id,
      estado: 'vigente'
    },
    select: { id: true }
  })

  if (arriendoVigente) {
    throw createError({
      statusCode: 409,
      statusMessage: 'No se puede cambiar manualmente el estado de un vehículo con arriendo vigente'
    })
  }

  const vehiculoActualizado = await prisma.vehiculos.update({
    where: { id },
    data: estadoManual === 'de_baja'
      ? { estado: estadoManual, activo: false }
      : { estado: estadoManual, activo: true }
  })

  return {
    ok: true,
    mensaje: 'Estado de vehículo actualizado',
    vehiculo: vehiculoActualizado
  }
})
