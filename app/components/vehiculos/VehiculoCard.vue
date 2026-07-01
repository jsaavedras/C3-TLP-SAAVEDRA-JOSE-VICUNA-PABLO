<template>
  <article class="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
    <div class="aspect-video bg-slate-100">
      <img
        v-if="vehiculo.foto_url"
        :src="vehiculo.foto_url"
        :alt="nombreVehiculo"
        class="h-full w-full object-cover"
      >

      <div v-else class="flex h-full items-center justify-center text-sm font-semibold text-slate-400">
        Sin fotografia
      </div>
    </div>

    <div class="flex flex-1 flex-col p-5">
      <header class="flex items-start justify-between gap-4">
        <div class="min-w-0">
          <h2 class="truncate text-lg font-bold text-slate-900">
            {{ nombreVehiculo }}
          </h2>

          <p class="mt-1 text-sm font-semibold text-slate-500">
            Patente: {{ vehiculo.patente }}
          </p>
        </div>

        <BaseStatusBadge :estado="vehiculo.estado" />
      </header>

      <dl class="mt-5 grid grid-cols-2 gap-3 text-sm">
        <div class="rounded-lg bg-slate-50 p-3">
          <dt class="text-xs font-bold uppercase text-slate-500">
            Tipo
          </dt>
          <dd class="mt-1 font-bold text-slate-900">
            {{ vehiculo.tipos_vehiculo?.nombre ?? 'Sin tipo' }}
          </dd>
        </div>

        <div class="rounded-lg bg-slate-50 p-3">
          <dt class="text-xs font-bold uppercase text-slate-500">
            Anio
          </dt>
          <dd class="mt-1 font-bold text-slate-900">
            {{ vehiculo.anio }}
          </dd>
        </div>

        <div class="rounded-lg bg-slate-50 p-3">
          <dt class="text-xs font-bold uppercase text-slate-500">
            Color
          </dt>
          <dd class="mt-1 font-bold text-slate-900">
            {{ vehiculo.color }}
          </dd>
        </div>

        <div class="rounded-lg bg-slate-50 p-3">
          <dt class="text-xs font-bold uppercase text-slate-500">
            Registro
          </dt>
          <dd class="mt-1">
            <BaseStatusBadge :tipo="vehiculo.activo ? 'activo' : 'inactivo'" />
          </dd>
        </div>
      </dl>

      <footer class="mt-auto flex flex-wrap justify-end gap-2 pt-5">
        <button
          type="button"
          class="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
          @click="emitirEditar"
        >
          Editar
        </button>

        <button
          type="button"
          class="inline-flex min-h-10 items-center justify-center rounded-lg bg-yellow-500 px-4 py-2 text-sm font-bold text-slate-950 hover:bg-yellow-600"
          @click="emitirCambiarEstado"
        >
          Cambiar estado
        </button>

        <button
          type="button"
          class="inline-flex min-h-10 items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
          @click="emitirDarBaja"
        >
          Dar de baja
        </button>
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Vehiculo } from '~/types/vehiculo'

const props = defineProps<{
  vehiculo: Vehiculo
}>()

const emit = defineEmits<{
  editar: [vehiculo: Vehiculo]
  cambiarEstado: [vehiculo: Vehiculo]
  darBaja: [vehiculo: Vehiculo]
}>()

const nombreVehiculo = computed(() => `${props.vehiculo.marca} ${props.vehiculo.modelo}`.trim())

function emitirEditar() {
  emit('editar', props.vehiculo)
}

function emitirCambiarEstado() {
  emit('cambiarEstado', props.vehiculo)
}

function emitirDarBaja() {
  emit('darBaja', props.vehiculo)
}
</script>
