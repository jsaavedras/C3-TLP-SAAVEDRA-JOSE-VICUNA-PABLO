import prisma from '../../utils/prisma'
import { hash } from 'bcryptjs'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (session.user.perfilNombre !== 'administrador') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Solo administradores pueden editar usuarios'
    })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de usuario inválido' })
  }

  const body = await readBody(event) || {}
  const data: any = {}

  if (body.rut !== undefined) {
    const rut = String(body.rut || '').trim()
    if (!rut) throw createError({ statusCode: 400, statusMessage: 'RUT inválido' })
    data.rut = rut
  }

  if (body.nombres !== undefined) {
    const nombres = String(body.nombres || '').trim()
    if (!nombres) throw createError({ statusCode: 400, statusMessage: 'Nombres inválidos' })
    data.nombres = nombres
  }

  if (body.apellidos !== undefined) {
    const apellidos = String(body.apellidos || '').trim()
    if (!apellidos) throw createError({ statusCode: 400, statusMessage: 'Apellidos inválidos' })
    data.apellidos = apellidos
  }

  if (body.email !== undefined) {
    const email = String(body.email || '').trim().toLowerCase()
    if (!email) throw createError({ statusCode: 400, statusMessage: 'Email inválido' })
    data.email = email
  }

  if (body.perfil_id !== undefined) {
    if (Number(session.user.id) === id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No puedes cambiar tu propio perfil desde gestion de usuarios'
      })
    }

    const perfilId = Number(body.perfil_id)
    if (!perfilId || Number.isNaN(perfilId)) {
      throw createError({ statusCode: 400, statusMessage: 'Perfil inválido' })
    }

    const perfil = await prisma.perfiles.findUnique({
      where: { id: perfilId },
      select: { id: true }
    })

    if (!perfil) {
      throw createError({ statusCode: 400, statusMessage: 'Perfil inválido' })
    }

    data.perfil_id = perfilId
  }

  if (typeof body.activo === 'boolean') {
    if (Number(session.user.id) === id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'No puedes cambiar el estado activo de tu propia cuenta'
      })
    }

    data.activo = body.activo
  }

  const passwordNueva = body.passwordNueva ?? body.password
  if (passwordNueva !== undefined && String(passwordNueva).trim() !== '') {
    const password = String(passwordNueva)
    if (password.length < 8) {
      throw createError({ statusCode: 400, statusMessage: 'La contraseña debe tener al menos 8 caracteres' })
    }
    data.password_hash = await hash(password, 10)
  }

  if (Object.keys(data).length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'No hay datos para actualizar' })
  }

  try {
    const usuario = await prisma.usuarios.update({
      where: { id },
      data,
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

    return {
      ok: true,
      mensaje: 'Usuario actualizado exitosamente',
      usuario
    }
  }
  catch (error: any) {
    if (error?.code === 'P2025') {
      throw createError({ statusCode: 404, statusMessage: 'Usuario no encontrado' })
    }

    if (error?.code === 'P2002') {
      throw createError({ statusCode: 409, statusMessage: 'El RUT o el email ya están registrados' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al actualizar usuario' })
  }
})
