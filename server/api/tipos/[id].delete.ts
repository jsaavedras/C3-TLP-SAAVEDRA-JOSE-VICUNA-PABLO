import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (session.user.perfilNombre !== 'administrador') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Solo administradores pueden desactivar tipos de vehículo'
    })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de tipo inválido' })
  }

  const vehiculoActivo = await prisma.vehiculos.findFirst({
    where: {
      tipo_id: id,
      activo: true
    },
    select: { id: true }
  })

  if (vehiculoActivo) {
    throw createError({
      statusCode: 409,
      statusMessage: 'No se puede desactivar un tipo con vehículos activos asociados'
    })
  }

  try {
    const tipo = await prisma.tipos_vehiculo.update({
      where: { id },
      data: { activo: false }
    })

    return {
      ok: true,
      mensaje: 'Tipo de vehículo desactivado exitosamente',
      tipo
    }
  }
  catch (error: any) {
    if (error?.code === 'P2025') {
      throw createError({ statusCode: 404, statusMessage: 'Tipo de vehículo no encontrado' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al desactivar tipo de vehículo' })
  }
})
