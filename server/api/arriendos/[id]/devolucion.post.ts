import prisma from '../../../utils/prisma'

const ESTADOS_FINALES_VALIDOS = ['disponible', 'en_mantenimiento', 'de_baja'] as const
type EstadoFinalVehiculo = typeof ESTADOS_FINALES_VALIDOS[number]

function normalizarEstadoFinal(valor: unknown): EstadoFinalVehiculo {
  const estado = String(valor || '').trim()

  if (!ESTADOS_FINALES_VALIDOS.includes(estado as EstadoFinalVehiculo)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Estado final de vehículo inválido'
    })
  }

  return estado as EstadoFinalVehiculo
}

function serializarFotos(valor: unknown) {
  if (Array.isArray(valor) || (valor && typeof valor === 'object')) {
    return JSON.stringify(valor)
  }

  return String(valor || '')
}

function obtenerFechaHora(valor: unknown) {
  const texto = String(valor || '').trim()
  if (!texto) return null

  const partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(texto)
  if (partes) {
    const anio = Number(partes[1])
    const mes = Number(partes[2])
    const dia = Number(partes[3])
    return new Date(anio, mes - 1, dia)
  }

  return new Date(texto)
}

function esFechaInvalida(fecha: Date) {
  return Number.isNaN(fecha.getTime())
}

function puedeGestionarArriendos(perfil: string) {
  return perfil === 'administrador' || perfil === 'ejecutivo'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (!puedeGestionarArriendos(session.user.perfilNombre)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado para registrar devoluciones' })
  }

  const id = Number(getRouterParam(event, 'id'))
  if (!id || Number.isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'ID de arriendo inválido' })
  }

  const body = await readBody(event) || {}
  const estadoFinal = normalizarEstadoFinal(body.estado_vehiculo_final)
  const fecha_hora_recepcion = obtenerFechaHora(body.fecha_hora_recepcion)

  if (!fecha_hora_recepcion || esFechaInvalida(fecha_hora_recepcion)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'fecha_hora_recepcion es obligatoria y debe ser valida'
    })
  }

  try {
    return await prisma.$transaction(async (tx) => {
      const arriendo = await tx.arriendos.findUnique({
        where: { id },
        select: {
          id: true,
          estado: true,
          vehiculo_id: true
        }
      })

      if (!arriendo || arriendo.estado !== 'vigente') {
        throw createError({ statusCode: 400, statusMessage: 'Arriendo no vigente o inexistente' })
      }

      const arriendoFinalizado = await tx.arriendos.update({
        where: { id },
        data: {
          estado: 'finalizado',
          fecha_hora_recepcion,
          fotos_recepcion: serializarFotos(body.fotos_recepcion),
          vehiculo_activo_id: null
        }
      })

      await tx.vehiculos.update({
        where: { id: arriendo.vehiculo_id },
        data: estadoFinal === 'de_baja'
          ? { estado: estadoFinal, activo: false }
          : { estado: estadoFinal, activo: true }
      })

      return {
        ok: true,
        mensaje: 'Devolución registrada correctamente',
        arriendo: arriendoFinalizado
      }
    })
  }
  catch (error: any) {
    if (error?.statusCode) {
      throw error
    }

    if (error?.code === 'P2025') {
      throw createError({ statusCode: 404, statusMessage: 'Arriendo o vehículo no encontrado' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al registrar devolución' })
  }
})
