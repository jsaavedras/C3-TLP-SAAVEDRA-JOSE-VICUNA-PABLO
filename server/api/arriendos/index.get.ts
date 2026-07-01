import prisma from '../../utils/prisma'

function puedeGestionarArriendos(perfil: string) {
  return perfil === 'administrador' || perfil === 'ejecutivo'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (!puedeGestionarArriendos(session.user.perfilNombre)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado para listar arriendos' })
  }

  return await prisma.arriendos.findMany({
    include: {
      clientes: true,
      vehiculos: {
        include: { tipos_vehiculo: true }
      },
      usuarios: {
        select: {
          id: true,
          rut: true,
          nombres: true,
          apellidos: true,
          email: true,
          perfil_id: true
        }
      }
    },
    orderBy: { id: 'desc' }
  })
})
