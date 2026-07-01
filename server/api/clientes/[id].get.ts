import prisma from '../../utils/prisma'

function puedeGestionarClientes(perfil: string) {
  return perfil === 'administrador' || perfil === 'ejecutivo'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (!puedeGestionarClientes(session.user.perfilNombre)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado para ver clientes' })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de cliente inválido' })
  }

  const cliente = await prisma.clientes.findFirst({
    where: {
      id,
      activo: true
    },
    include: {
      arriendos: {
        include: {
          vehiculos: {
            include: { tipos_vehiculo: true }
          },
          usuarios: {
            select: {
              id: true,
              nombres: true,
              apellidos: true,
              email: true
            }
          }
        },
        orderBy: { fecha_inicio: 'desc' }
      }
    }
  })

  if (!cliente) {
    throw createError({ statusCode: 404, statusMessage: 'Cliente no encontrado' })
  }

  return cliente
})
