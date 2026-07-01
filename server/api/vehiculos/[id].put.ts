import prisma from '../../utils/prisma'

const ESTADOS_EDITABLES_VALIDOS = ['disponible', 'en_mantenimiento', 'de_baja'] as const
type EstadoEditableVehiculo = typeof ESTADOS_EDITABLES_VALIDOS[number]

function puedeGestionarVehiculos(perfil: string) {
  return perfil === 'administrador' || perfil === 'ejecutivo'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  const esAdministrador = session.user.perfilNombre === 'administrador'

  if (!puedeGestionarVehiculos(session.user.perfilNombre)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado para editar vehículos' })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de vehículo inválido' })
  }

  const body = await readBody(event) || {}
  const data: any = {}

  if (!esAdministrador) {
    const camposRestringidos = ['tipo_id', 'patente', 'estado', 'activo']
    const campoRestringido = camposRestringidos.find((campo) => body[campo] !== undefined)

    if (campoRestringido) {
      throw createError({
        statusCode: 403,
        statusMessage: 'Ejecutivos solo pueden editar marca, modelo, anio, color y foto_url'
      })
    }
  }

  if (body.tipo_id !== undefined) {
    const tipo_id = Number(body.tipo_id)
    if (!tipo_id || Number.isNaN(tipo_id)) {
      throw createError({ statusCode: 400, statusMessage: 'Tipo de vehículo inválido' })
    }

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

    data.tipo_id = tipo_id
  }

  if (body.patente !== undefined) {
    const patente = String(body.patente || '').trim().toUpperCase()
    if (!patente) throw createError({ statusCode: 400, statusMessage: 'Patente inválida' })
    data.patente = patente
  }

  if (body.marca !== undefined) {
    const marca = String(body.marca || '').trim()
    if (!marca) throw createError({ statusCode: 400, statusMessage: 'Marca inválida' })
    data.marca = marca
  }

  if (body.modelo !== undefined) {
    const modelo = String(body.modelo || '').trim()
    if (!modelo) throw createError({ statusCode: 400, statusMessage: 'Modelo inválido' })
    data.modelo = modelo
  }

  if (body.anio !== undefined) {
    const anio = Number(body.anio)
    if (!Number.isInteger(anio) || anio < 1900 || anio > new Date().getFullYear() + 1) {
      throw createError({ statusCode: 400, statusMessage: 'Año de vehículo inválido' })
    }
    data.anio = anio
  }

  if (body.color !== undefined) {
    const color = String(body.color || '').trim()
    if (!color) throw createError({ statusCode: 400, statusMessage: 'Color inválido' })
    data.color = color
  }

  if (body.foto_url !== undefined) {
    data.foto_url = String(body.foto_url || '').trim()
  }

  if (body.estado !== undefined) {
    const estado = String(body.estado || '').trim()

    if (estado === 'arrendado') {
      throw createError({
        statusCode: 400,
        statusMessage: 'El estado arrendado solo se asigna al crear un arriendo'
      })
    }

    if (!ESTADOS_EDITABLES_VALIDOS.includes(estado as EstadoEditableVehiculo)) {
      throw createError({ statusCode: 400, statusMessage: 'Estado de vehículo inválido' })
    }

    const estadoEditable = estado as EstadoEditableVehiculo
    const vehiculoActual = await prisma.vehiculos.findUnique({
      where: { id },
      select: {
        id: true,
        estado: true,
        activo: true
      }
    })

    if (!vehiculoActual) {
      throw createError({ statusCode: 404, statusMessage: 'Vehículo no encontrado' })
    }

    if (estadoEditable !== 'de_baja' && (vehiculoActual.estado === 'de_baja' || !vehiculoActual.activo)) {
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
        statusMessage: 'No se puede cambiar el estado de un vehículo con arriendo vigente'
      })
    }

    data.estado = estadoEditable
    data.activo = estadoEditable === 'de_baja' ? false : true
  }

  if (Object.keys(data).length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'No hay datos para actualizar' })
  }

  try {
    const vehiculo = await prisma.vehiculos.update({
      where: { id },
      data,
      include: { tipos_vehiculo: true }
    })

    return {
      ok: true,
      mensaje: 'Vehículo actualizado exitosamente',
      vehiculo
    }
  }
  catch (error: any) {
    if (error?.code === 'P2025') {
      throw createError({ statusCode: 404, statusMessage: 'Vehículo no encontrado' })
    }

    if (error?.code === 'P2002') {
      throw createError({ statusCode: 409, statusMessage: 'La patente ya está registrada' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al actualizar vehículo' })
  }
})
