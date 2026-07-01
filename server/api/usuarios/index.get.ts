import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (session.user.perfilNombre !== 'administrador') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Solo administradores pueden listar usuarios'
    })
  }

  return await prisma.usuarios.findMany({
    select: {
      id: true,
      perfil_id: true,
      rut: true,
      nombres: true,
      apellidos: true,
      email: true,
      activo: true,
      created_at: true,
      updated_at: true,
      perfiles: {
        select: {
          id: true,
          nombre: true
        }
      }
    },
    orderBy: { id: 'desc' }
  })
})
