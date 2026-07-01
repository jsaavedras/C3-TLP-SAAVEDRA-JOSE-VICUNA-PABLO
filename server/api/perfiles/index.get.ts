import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (session.user.perfilNombre !== 'administrador') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Solo administradores pueden listar perfiles'
    })
  }

  return await prisma.perfiles.findMany({
    select: {
      id: true,
      nombre: true
    },
    orderBy: {
      id: 'asc'
    }
  })
})
