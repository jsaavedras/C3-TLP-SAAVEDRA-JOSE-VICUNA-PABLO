import prisma from '../../utils/prisma'

const ESTADOS_INICIALES_VALIDOS = ['disponible', 'en_mantenimiento', 'de_baja'] as const
type EstadoInicialVehiculo = typeof ESTADOS_INICIALES_VALIDOS[number]

function puedeGestionarVehiculos(perfil: string) {
  return perfil === 'administrador' || perfil === 'ejecutivo'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (!puedeGestionarVehiculos(session.user.perfilNombre)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado para crear vehículos' })
  }

  const body = await readBody(event) || {}
  const tipo_id = Number(body.tipo_id)
  const patente = String(body.patente || '').trim().toUpperCase()
  const marca = String(body.marca || '').trim()
  const modelo = String(body.modelo || '').trim()
  const anio = Number(body.anio)
  const color = String(body.color || '').trim()
  const foto_url = String(body.foto_url || '').trim()
  const estado = String(body.estado || 'disponible').trim()

  if (!tipo_id || Number.isNaN(tipo_id)) {
    throw createError({ statusCode: 400, statusMessage: 'Tipo de vehículo inválido' })
  }

  if (!patente || !marca || !modelo || !color) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Patente, marca, modelo y color son obligatorios'
    })
  }

  if (!Number.isInteger(anio) || anio < 1900 || anio > new Date().getFullYear() + 1) {
    throw createError({ statusCode: 400, statusMessage: 'Año de vehículo inválido' })
  }

  if (estado === 'arrendado') {
    throw createError({
      statusCode: 400,
      statusMessage: 'El estado arrendado solo se asigna al crear un arriendo'
    })
  }

  if (!ESTADOS_INICIALES_VALIDOS.includes(estado as EstadoInicialVehiculo)) {
    throw createError({ statusCode: 400, statusMessage: 'Estado de vehículo inválido' })
  }

  const estadoInicial = estado as EstadoInicialVehiculo

  const tipo = await prisma.tipos_vehiculo.findFirst({
    where: {
      id: tipo_id,
      activo: true
    },
    select: { id: true }
  })

  if (!tipo) {
    throw createError({ statusCode: 400, statusMessage: 'Tipo de vehículo no existe o está inactivo' })
  }

  try {
    const vehiculo = await prisma.vehiculos.create({
      data: {
        tipo_id,
        patente,
        marca,
        modelo,
        anio,
        color,
        estado: estadoInicial,
        foto_url,
        activo: estadoInicial !== 'de_baja'
      },
      include: { tipos_vehiculo: true }
    })

    setResponseStatus(event, 201)

    return {
      ok: true,
      mensaje: 'Vehículo creado exitosamente',
      vehiculo
    }
  }
  catch (error: any) {
    if (error?.code === 'P2002') {
      throw createError({ statusCode: 409, statusMessage: 'La patente ya está registrada' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al crear vehículo' })
  }
})
