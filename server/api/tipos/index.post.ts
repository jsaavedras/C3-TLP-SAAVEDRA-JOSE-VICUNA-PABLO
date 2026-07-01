import prisma from '../../utils/prisma'

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (session.user.perfilNombre !== 'administrador') {
    throw createError({
      statusCode: 403,
      statusMessage: 'Solo administradores pueden crear tipos de vehículo'
    })
  }

  const body = await readBody(event) || {}
  const nombre = String(body.nombre || '').trim()
  const descripcion = String(body.descripcion || '').trim()
  const valor_diario = Number(body.valor_diario)

  if (!nombre) {
    throw createError({ statusCode: 400, statusMessage: 'El nombre es obligatorio' })
  }

  if (!Number.isFinite(valor_diario) || valor_diario <= 0) {
    throw createError({ statusCode: 400, statusMessage: 'El valor diario debe ser mayor a 0' })
  }

  try {
    const tipo = await prisma.tipos_vehiculo.create({
      data: {
        nombre,
        descripcion,
        valor_diario: Math.trunc(valor_diario),
        activo: true
      }
    })

    setResponseStatus(event, 201)

    return {
      ok: true,
      mensaje: 'Tipo de vehículo creado exitosamente',
      tipo
    }
  }
  catch (error: any) {
    if (error?.code === 'P2002') {
      throw createError({ statusCode: 409, statusMessage: 'Ya existe un tipo de vehículo con ese nombre' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al crear tipo de vehículo' })
  }
})
