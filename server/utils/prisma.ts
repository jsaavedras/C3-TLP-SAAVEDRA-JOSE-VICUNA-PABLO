import { PrismaClient } from '~~/generated/prisma/client'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

// Usamos un nombre distinto al export (`__prisma`) para que el global del
// caché de HMR no choque con el auto-import `prisma` de Nuxt.
const globalForPrisma = globalThis as unknown as {
  __prisma?: PrismaClient
}

function createPrismaClient() {
  const databaseUrl = process.env.DATABASE_URL

  if (!databaseUrl) {
    throw new Error('DATABASE_URL no está definida en el archivo .env')
  }

  const url = new URL(databaseUrl)

  const adapter = new PrismaMariaDb({
    host: url.hostname,
    port: Number(url.port) || 3306,
    user: decodeURIComponent(url.username),
    password: decodeURIComponent(url.password),
    database: url.pathname.slice(1),
    connectionLimit: 5,
  })

  return new PrismaClient({
    adapter,
    log: ['error', 'warn'],
  })
}

export const prisma: PrismaClient =
  globalForPrisma.__prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.__prisma = prisma
}

export default prisma
