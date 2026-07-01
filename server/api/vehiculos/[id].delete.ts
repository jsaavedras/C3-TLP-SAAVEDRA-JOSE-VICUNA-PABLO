import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (session.user.perfilNombre !== 'administrador') {
    throw createError({ statusCode: 403, statusMessage: 'Solo administradores pueden dar de baja vehículos' })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de vehículo inválido' })
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
      statusMessage: 'No se puede dar de baja un vehículo con arriendo vigente'
    })
  }

  try {
    const vehiculo = await prisma.vehiculos.update({
      where: { id },
      data: {
        activo: false,
        estado: 'de_baja'
      }
    })

    return {
      ok: true,
      mensaje: 'Vehículo dado de baja exitosamente',
      vehiculo
    }
  }
  catch (error: any) {
    if (error?.code === 'P2025') {
      throw createError({ statusCode: 404, statusMessage: 'Vehículo no encontrado' })
    }

    throw error
  }
})
