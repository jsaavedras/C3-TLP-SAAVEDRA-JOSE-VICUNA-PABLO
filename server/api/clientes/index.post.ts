import prisma from '../../utils/prisma'

function puedeGestionarClientes(perfil: string) {
  return perfil === 'administrador' || perfil === 'ejecutivo'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (!puedeGestionarClientes(session.user.perfilNombre)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado para crear clientes' })
  }

  const body = await readBody(event) || {}
  const rut = String(body.rut || '').trim()
  const nombres = String(body.nombres || '').trim()
  const apellidos = String(body.apellidos || '').trim()
  const email = String(body.email || '').trim().toLowerCase()
  const telefono = String(body.telefono || '').trim()
  const direccion = String(body.direccion || '').trim()
  const licenciaConducir = String(body.licencia_conducir || '').trim()

  if (!rut || !nombres || !apellidos || !email || !telefono || !direccion || !licenciaConducir) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Todos los campos del cliente son obligatorios'
    })
  }

  try {
    const cliente = await prisma.clientes.create({
      data: {
        rut,
        nombres,
        apellidos,
        email,
        telefono,
        direccion,
        licencia_conducir: licenciaConducir,
        activo: true
      }
    })

    setResponseStatus(event, 201)

    return {
      ok: true,
      mensaje: 'Cliente creado exitosamente',
      cliente
    }
  }
  catch (error: any) {
    if (error?.code === 'P2002') {
      throw createError({ statusCode: 409, statusMessage: 'El RUT o el email ya están registrados' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al crear cliente' })
  }
})
