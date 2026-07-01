import prisma from '../../utils/prisma'
import { compare, hash } from 'bcryptjs'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)
  const body = await readBody(event) || {}

  const passwordActual = String(body.passwordActual || '')
  const passwordNueva = String(body.passwordNueva || '')

  if (!passwordActual || !passwordNueva) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Debes ingresar tu contraseña actual y la nueva'
    })
  }

  if (passwordNueva.length < 8) {
    throw createError({
      statusCode: 400,
      statusMessage: 'La nueva contraseña debe tener al menos 8 caracteres'
    })
  }

  const usuario = await prisma.usuarios.findUnique({
    where: { id: Number(session.user.id) }
  })

  if (!usuario || !usuario.activo) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Usuario no encontrado o inactivo'
    })
  }

  const passwordValida = await compare(passwordActual, usuario.password_hash)
  if (!passwordValida) {
    throw createError({
      statusCode: 401,
      statusMessage: 'La contraseña actual es incorrecta'
    })
  }

  const passwordNuevaIgualActual = await compare(passwordNueva, usuario.password_hash)
  if (passwordNuevaIgualActual) {
    throw createError({
      statusCode: 400,
      statusMessage: 'La nueva contrasena debe ser distinta de la actual'
    })
  }

  const passwordHash = await hash(passwordNueva, 10)

  await prisma.usuarios.update({
    where: { id: usuario.id },
    data: { password_hash: passwordHash }
  })

  return {
    ok: true,
    mensaje: 'Contraseña actualizada exitosamente'
  }
})
