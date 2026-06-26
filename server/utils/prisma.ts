import { PrismaClient } from '@prisma/client'

declare global {
  // Evita crear muchas conexiones nuevas en desarrollo por el hot reload
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined
}

const prisma = globalThis.__prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = prisma
}

export default prisma