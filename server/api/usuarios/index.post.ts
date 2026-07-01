import prisma from '../../utils/prisma'
import { hash } from 'bcryptjs'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (session.user.perfilNombre !== 'administrador') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Solo administradores pueden crear usuarios'
    })
  }

  const body = await readBody(event) || {}
  const rut = String(body.rut || '').trim()
  const nombres = String(body.nombres || '').trim()
  const apellidos = String(body.apellidos || '').trim()
  const email = String(body.email || '').trim().toLowerCase()
  const password = String(body.password || '')
  const perfilId = Number(body.perfil_id)

  if (!rut || !nombres || !apellidos || !email || !password || !perfilId || Number.isNaN(perfilId)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'RUT, nombres, apellidos, email, contraseña y perfil son obligatorios'
    })
  }

  if (password.length < 8) {
    throw createError({ statusCode: 400, statusMessage: 'La contrasena debe tener al menos 8 caracteres' })
  }

  const perfil = await prisma.perfiles.findUnique({
    where: { id: perfilId },
    select: { id: true }
  })

  if (!perfil) {
    throw createError({ statusCode: 400, statusMessage: 'Perfil inválido' })
  }

  const passwordHash = await hash(password, 10)

  try {
    const usuario = await prisma.usuarios.create({
      data: {
        rut,
        nombres,
        apellidos,
        email,
        password_hash: passwordHash,
        perfil_id: perfilId,
        activo: true
      },
      select: {
        id: true,
        perfil_id: true,
        rut: true,
        nombres: true,
        apellidos: true,
        email: true,
        activo: true,
        perfiles: {
          select: {
            id: true,
            nombre: true
          }
        }
      }
    })

    setResponseStatus(event, 201)

    return {
      ok: true,
      mensaje: 'Usuario creado exitosamente',
      usuario
    }
  }
  catch (error: any) {
    if (error?.code === 'P2002') {
      throw createError({ statusCode: 409, statusMessage: 'El RUT o el email ya están registrados' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al crear usuario' })
  }
})
