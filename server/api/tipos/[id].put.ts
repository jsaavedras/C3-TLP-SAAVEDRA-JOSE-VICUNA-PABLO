import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (session.user.perfilNombre !== 'administrador') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Solo administradores pueden editar tipos de vehículo'
    })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de tipo inválido' })
  }

  const body = await readBody(event) || {}
  const data: any = {}

  if (body.nombre !== undefined) {
    const nombre = String(body.nombre || '').trim()
    if (!nombre) throw createError({ statusCode: 400, statusMessage: 'El nombre es obligatorio' })
    data.nombre = nombre
  }

  if (body.descripcion !== undefined) {
    data.descripcion = String(body.descripcion || '').trim()
  }

  if (body.valor_diario !== undefined) {
    const valor_diario = Number(body.valor_diario)
    if (!Number.isFinite(valor_diario) || valor_diario <= 0) {
      throw createError({ statusCode: 400, statusMessage: 'El valor diario debe ser mayor a 0' })
    }
    data.valor_diario = Math.trunc(valor_diario)
  }

  if (Object.keys(data).length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'No hay datos para actualizar' })
  }

  try {
    const tipo = await prisma.tipos_vehiculo.update({
      where: { id },
      data
    })

    return {
      ok: true,
      mensaje: 'Tipo de vehículo actualizado exitosamente',
      tipo
    }
  }
  catch (error: any) {
    if (error?.code === 'P2025') {
      throw createError({ statusCode: 404, statusMessage: 'Tipo de vehículo no encontrado' })
    }

    if (error?.code === 'P2002') {
      throw createError({ statusCode: 409, statusMessage: 'Ya existe un tipo de vehículo con ese nombre' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al actualizar tipo de vehículo' })
  }
})
