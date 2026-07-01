import prisma from '../../utils/prisma'

function puedeGestionarClientes(perfil: string) {
  return perfil === 'administrador' || perfil === 'ejecutivo'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (!puedeGestionarClientes(session.user.perfilNombre)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado para editar clientes' })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de cliente inválido' })
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

  const email = body.email ? String(body.email).trim().toLowerCase() : undefined
  if (body.email !== undefined) {
    if (!email) throw createError({ statusCode: 400, statusMessage: 'Email inválido' })
    data.email = email
  }

  if (body.telefono !== undefined) {
    const telefono = String(body.telefono || '').trim()
    if (!telefono) throw createError({ statusCode: 400, statusMessage: 'Teléfono inválido' })
    data.telefono = telefono
  }

  if (body.direccion !== undefined) {
    const direccion = String(body.direccion || '').trim()
    if (!direccion) throw createError({ statusCode: 400, statusMessage: 'Dirección inválida' })
    data.direccion = direccion
  }

  if (body.licencia_conducir !== undefined) {
    const licenciaConducir = String(body.licencia_conducir || '').trim()
    if (!licenciaConducir) throw createError({ statusCode: 400, statusMessage: 'Licencia de conducir inválida' })
    data.licencia_conducir = licenciaConducir
  }

  if (Object.keys(data).length === 0) {
    throw createError({ statusCode: 400, statusMessage: 'No hay datos para actualizar' })
  }

  try {
    const cliente = await prisma.clientes.update({
      where: { id },
      data
    })

    return {
      ok: true,
      mensaje: 'Cliente actualizado exitosamente',
      cliente
    }
  }
  catch (error: any) {
    if (error?.code === 'P2025') {
      throw createError({ statusCode: 404, statusMessage: 'Cliente no encontrado' })
    }

    if (error?.code === 'P2002') {
      throw createError({ statusCode: 409, statusMessage: 'El RUT o el email ya están registrados' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al actualizar cliente' })
  }
})
