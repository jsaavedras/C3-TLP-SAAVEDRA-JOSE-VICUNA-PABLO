import prisma from '../../utils/prisma'

function puedeGestionarClientes(perfil: string) {
  return perfil === 'administrador' || perfil === 'ejecutivo'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  const query = getQuery(event)
  const incluirInactivos = query.incluirInactivos === 'true'

  if (!puedeGestionarClientes(session.user.perfilNombre)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado para listar clientes' })
  }

  return await prisma.clientes.findMany({
    where: incluirInactivos ? undefined : { activo: true },
    orderBy: { id: 'desc' }
  })
})
