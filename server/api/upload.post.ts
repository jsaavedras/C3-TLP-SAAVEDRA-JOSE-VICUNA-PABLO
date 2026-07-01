import { mkdir, writeFile } from 'fs/promises'
import { randomUUID } from 'crypto'
import { extname, join } from 'path'

const TIPOS_PERMITIDOS = ['image/jpeg', 'image/png', 'image/webp']
const TAMANO_MAXIMO_BYTES = 5 * 1024 * 1024

function extensionPorTipo(tipo: string) {
  if (tipo === 'image/jpeg') return '.jpg'
  if (tipo === 'image/png') return '.png'
  return '.webp'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (!['administrador', 'ejecutivo'].includes(session.user.perfilNombre)) {
    throw createError({
      statusCode: 403,
      statusMessage: 'No autorizado para subir archivos'
    })
  }

  const formData = await readMultipartFormData(event)
  if (!formData || formData.length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'No se recibió ningún archivo' })
  }

  const uploadedFile = formData.find((field) => field.name === 'file')
  if (!uploadedFile || !uploadedFile.filename || !uploadedFile.data) {
    throw createError({ statusCode: 400, statusMessage: 'Archivo inválido' })
  }

  const tipoArchivo = uploadedFile.type || ''
  if (!TIPOS_PERMITIDOS.includes(tipoArchivo)) {
    throw createError({ statusCode: 400, statusMessage: 'Tipo de imagen no permitido' })
  }

  if (uploadedFile.data.length > TAMANO_MAXIMO_BYTES) {
    throw createError({ statusCode: 413, statusMessage: 'La imagen no puede superar los 5 MB' })
  }

  const extensionOriginal = extname(uploadedFile.filename).toLowerCase()
  const extension = extensionPorTipo(tipoArchivo)
  const nombreBase = uploadedFile.filename
    .replace(extensionOriginal, '')
    .trim()
    .replace(/[^a-zA-Z0-9._-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '') || 'imagen'

  const nombreArchivo = `${Date.now()}-${randomUUID()}-${nombreBase}${extension}`
  const carpetaUploads = join(process.cwd(), 'public', 'uploads')
  const rutaDestino = join(carpetaUploads, nombreArchivo)

  await mkdir(carpetaUploads, { recursive: true })
  await writeFile(rutaDestino, uploadedFile.data)

  return {
    ok: true,
    url: `/uploads/${nombreArchivo}`
  }
})
