import prisma from '../../utils/prisma'

function serializarFotos(valor: unknown) {
  if (Array.isArray(valor) || (valor && typeof valor === 'object')) {
    return JSON.stringify(valor)
  }

  return String(valor || '')
}

function esFechaInvalida(fecha: Date) {
  return Number.isNaN(fecha.getTime())
}

function obtenerFechaDia(valor: unknown) {
  const texto = String(valor || '').trim()
  if (!texto) return null

  const textoFecha = texto.slice(0, 10)
  const partes = /^(\d{4})-(\d{2})-(\d{2})$/.exec(textoFecha)
  if (!partes) return new Date(texto)

  const anio = Number(partes[1])
  const mes = Number(partes[2])
  const dia = Number(partes[3])
  const fecha = new Date(anio, mes - 1, dia)

  if (
    fecha.getFullYear() !== anio
    || fecha.getMonth() !== mes - 1
    || fecha.getDate() !== dia
  ) {
    return new Date('')
  }

  return fecha
}

function inicioDia(fecha: Date) {
  return new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate())
}

function calcularDias(fecha_inicio: Date, fecha_termino: Date) {
  const milisegundosPorDia = 1000 * 60 * 60 * 24
  return Math.ceil((fecha_termino.getTime() - fecha_inicio.getTime()) / milisegundosPorDia)
}

function puedeGestionarArriendos(perfil: string) {
  return perfil === 'administrador' || perfil === 'ejecutivo'
}

export default defineEventHandler(async (event) => {
  const session = await requireUserSession(event)

  if (!puedeGestionarArriendos(session.user.perfilNombre)) {
    throw createError({ statusCode: 403, statusMessage: 'No autorizado para crear arriendos' })
  }

  const body = await readBody(event) || {}

  const cliente_id = Number(body.cliente_id)
  const vehiculo_id = Number(body.vehiculo_id)
  const fecha_inicio = obtenerFechaDia(body.fecha_inicio)
  const fecha_termino = obtenerFechaDia(body.fecha_termino)
  const fecha_hora_entrega = body.fecha_hora_entrega ? new Date(body.fecha_hora_entrega) : new Date()

  if (!cliente_id || Number.isNaN(cliente_id)) {
    throw createError({ statusCode: 400, statusMessage: 'Cliente inválido' })
  }

  if (!vehiculo_id || Number.isNaN(vehiculo_id)) {
    throw createError({ statusCode: 400, statusMessage: 'Vehículo inválido' })
  }

  if (!fecha_inicio || !fecha_termino || esFechaInvalida(fecha_inicio) || esFechaInvalida(fecha_termino) || esFechaInvalida(fecha_hora_entrega)) {
    throw createError({ statusCode: 400, statusMessage: 'Fechas inválidas' })
  }

  if (fecha_inicio < inicioDia(new Date())) {
    throw createError({
      statusCode: 400,
      statusMessage: 'fecha_inicio no puede ser anterior a la fecha actual'
    })
  }

  if (fecha_termino <= fecha_inicio) {
    throw createError({
      statusCode: 400,
      statusMessage: 'fecha_termino debe ser mayor que fecha_inicio'
    })
  }

  const dias_arriendo = calcularDias(fecha_inicio, fecha_termino)

  try {
    const arriendo = await prisma.$transaction(async (tx) => {
      const cliente = await tx.clientes.findFirst({
        where: {
          id: cliente_id,
          activo: true
        },
        select: { id: true }
      })

      if (!cliente) {
        throw createError({ statusCode: 400, statusMessage: 'Cliente no existe o está inactivo' })
      }

      const vehiculo = await tx.vehiculos.findFirst({
        where: {
          id: vehiculo_id,
          activo: true
        },
        include: { tipos_vehiculo: true }
      })

      if (!vehiculo) {
        throw createError({ statusCode: 400, statusMessage: 'Vehículo no existe o está inactivo' })
      }

      if (vehiculo.estado !== 'disponible') {
        throw createError({ statusCode: 400, statusMessage: 'El vehículo no está disponible' })
      }

      const valor_diario_aplicado = vehiculo.tipos_vehiculo.valor_diario
      const valor_total = valor_diario_aplicado * dias_arriendo

      const nuevoArriendo = await tx.arriendos.create({
        data: {
          cliente_id,
          vehiculo_id,
          usuario_id: Number(session.user.id),
          fecha_inicio,
          fecha_termino,
          fecha_hora_entrega,
          valor_diario_aplicado,
          dias_arriendo,
          valor_total,
          estado: 'vigente',
          fotos_entrega: serializarFotos(body.fotos_entrega),
          vehiculo_activo_id: vehiculo_id
        }
      })

      await tx.vehiculos.update({
        where: { id: vehiculo_id },
        data: {
          estado: 'arrendado',
          activo: true
        }
      })

      return nuevoArriendo
    })

    setResponseStatus(event, 201)

    return {
      ok: true,
      mensaje: 'Arriendo creado correctamente',
      arriendo
    }
  }
  catch (error: any) {
    if (error?.statusCode) {
      throw error
    }

    if (error?.code === 'P2002') {
      throw createError({ statusCode: 409, statusMessage: 'El vehículo ya tiene un arriendo vigente' })
    }

    throw createError({ statusCode: 500, statusMessage: 'Error interno al crear arriendo' })
  }
})
