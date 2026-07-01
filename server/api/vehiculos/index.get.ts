import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  await requireUserSession(event)

  return await prisma.vehiculos.findMany({
    where: { activo: true },
    include: { tipos_vehiculo: true },
    orderBy: { id: 'desc' }
  })
})
