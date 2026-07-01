import prisma from '../../utils/prisma'

function puedeGestionarArriendos(perfil: string) {
  return perfil === 'administrador' || perfil === 'ejecutivo'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (!puedeGestionarArriendos(session.user.perfilNombre)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado para ver arriendos' })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de arriendo inválido' })
  }

  const arriendo = await prisma.arriendos.findUnique({
    where: { id },
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
    }
  })

  if (!arriendo) {
    throw createError({ statusCode: 404, statusMessage: 'Arriendo no encontrado' })
  }

  return arriendo
})
