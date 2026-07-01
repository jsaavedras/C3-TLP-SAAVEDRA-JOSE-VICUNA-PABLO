import prisma from '../../utils/prisma'

function puedeGestionarClientes(perfil: string) {
  return perfil === 'administrador' || perfil === 'ejecutivo'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (!puedeGestionarClientes(session.user.perfilNombre)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado para dar de baja clientes' })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de cliente inválido' })
  }

  const arriendoVigente = await prisma.arriendos.findFirst({
    where: {
      cliente_id: id,
      estado: 'vigente'
    },
    select: { id: true }
  })

  if (arriendoVigente) {
    throw createError({
      statusCode: 409,
      statusMessage: 'No se puede dar de baja un cliente con arriendo vigente'
    })
  }

  try {
    const cliente = await prisma.clientes.update({
      where: { id },
      data: { activo: false }
    })

    return {
      ok: true,
      mensaje: 'Cliente dado de baja exitosamente',
      cliente
    }
  }
  catch (error: any) {
    if (error?.code === 'P2025') {
      throw createError({ statusCode: 404, statusMessage: 'Cliente no encontrado' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al dar de baja cliente' })
  }
})
