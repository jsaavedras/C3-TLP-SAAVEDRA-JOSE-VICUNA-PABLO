import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (session.user.perfilNombre !== 'administrador') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Solo administradores pueden desactivar usuarios'
    })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de usuario inválido' })
  }

  if (Number(session.user.id) === id) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No puedes desactivar tu propia cuenta'
    })
  }

  try {
    const usuario = await prisma.usuarios.update({
      where: { id },
      data: { activo: false },
      select: {
        id: true,
        rut: true,
        nombres: true,
        apellidos: true,
        email: true,
        activo: true
      }
    })

    return {
      ok: true,
      mensaje: 'Usuario desactivado exitosamente',
      usuario
    }
  }
  catch (error: any) {
    if (error?.code === 'P2025') {
      throw createError({ statusCode: 404, statusMessage: 'Usuario no encontrado' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al desactivar usuario' })
  }
})
