<template>
  <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
    <header class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div class="min-w-0">
        <h2 class="truncate text-lg font-bold text-slate-900">
          {{ nombreCliente }}
        </h2>

        <p class="mt-1 text-sm font-semibold text-slate-500">
          {{ nombreVehiculo }}
        </p>
      </div>

      <BaseStatusBadge :estado="arriendo.estado" />
    </header>

    <dl class="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-lg bg-slate-50 p-3">
        <dt class="text-xs font-bold uppercase text-slate-500">
          Inicio
        </dt>
        <dd class="mt-1 font-bold text-slate-900">
          {{ formatDate(arriendo.fecha_inicio) }}
        </dd>
      </div>

      <div class="rounded-lg bg-slate-50 p-3">
        <dt class="text-xs font-bold uppercase text-slate-500">
          Termino
        </dt>
        <dd class="mt-1 font-bold text-slate-900">
          {{ formatDate(arriendo.fecha_termino) }}
        </dd>
      </div>

      <div class="rounded-lg bg-slate-50 p-3">
        <dt class="text-xs font-bold uppercase text-slate-500">
          Dias
        </dt>
        <dd class="mt-1 font-bold text-slate-900">
          {{ arriendo.dias_arriendo }}
        </dd>
      </div>

      <div class="rounded-lg bg-blue-50 p-3">
        <dt class="text-xs font-bold uppercase text-blue-700">
          Valor total
        </dt>
        <dd class="mt-1 text-lg font-black text-blue-900">
          {{ formatCurrency(arriendo.valor_total) }}
        </dd>
      </div>
    </dl>

    <footer class="mt-5 flex flex-wrap justify-end gap-2">
      <button
        type="button"
        class="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
        @click="emitirVerDetalle"
      >
        Ver detalle
      </button>

      <button
        v-if="arriendo.estado === 'vigente'"
        type="button"
        class="inline-flex min-h-10 items-center justify-center rounded-lg bg-yellow-500 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-yellow-600"
        @click="emitirRegistrarDevolucion"
      >
        Registrar devolucion
      </button>
    </footer>
  </article>
</template>

<script setup lang="ts">
import type { Arriendo } from '~/types/arriendo'
import { formatCurrency } from '~/utils/formatCurrency'
import { formatDate } from '~/utils/formatDate'

const props = defineProps<{
  arriendo: Arriendo
}>()

const emit = defineEmits<{
  verDetalle: [arriendo: Arriendo]
  registrarDevolucion: [arriendo: Arriendo]
}>()

const nombreCliente = computed(() => {
  const cliente = props.arriendo.clientes

  if (!cliente) {
    return `Cliente #${props.arriendo.cliente_id}`
  }

  return `${cliente.nombres} ${cliente.apellidos}`.trim()
})

const nombreVehiculo = computed(() => {
  const vehiculo = props.arriendo.vehiculos

  if (!vehiculo) {
    return `Vehiculo #${props.arriendo.vehiculo_id}`
  }

  return `${vehiculo.marca} ${vehiculo.modelo} - ${vehiculo.patente}`.trim()
})

function emitirVerDetalle() {
  emit('verDetalle', props.arriendo)
}

function emitirRegistrarDevolucion() {
  emit('registrarDevolucion', props.arriendo)
}
</script>
