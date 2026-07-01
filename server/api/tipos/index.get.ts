import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  await requireUserSession(event)
  const query = getQuery(event)
  const incluirInactivos = query.incluirInactivos === 'true'

  return await prisma.tipos_vehiculo.findMany({
    where: incluirInactivos ? undefined : { activo: true },
    orderBy: { id: 'desc' }
  })
})
