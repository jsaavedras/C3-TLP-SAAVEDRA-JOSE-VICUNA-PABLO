<template>
  <article class="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
    <header class="flex items-start justify-between gap-4">
      <div class="min-w-0">
        <h2 class="truncate text-lg font-bold text-slate-900">
          {{ tipo.nombre }}
        </h2>

        <p class="mt-1 text-sm leading-6 text-slate-500">
          {{ tipo.descripcion }}
        </p>
      </div>

      <BaseStatusBadge :tipo="tipo.activo ? 'activo' : 'inactivo'" />
    </header>

    <dl class="mt-5 grid gap-3">
      <div class="rounded-lg bg-slate-50 p-3">
        <dt class="text-xs font-bold uppercase text-slate-500">
          Valor diario
        </dt>

        <dd class="mt-1 text-lg font-black text-slate-900">
          {{ formatCurrency(tipo.valor_diario) }}
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
        v-if="tipo.activo"
        type="button"
        class="inline-flex min-h-10 items-center justify-center rounded-lg bg-red-600 px-4 py-2 text-sm font-bold text-white hover:bg-red-700"
        @click="emitirDesactivar"
      >
        Desactivar
      </button>

      <button
        v-else
        type="button"
        class="inline-flex min-h-10 items-center justify-center rounded-lg bg-green-600 px-4 py-2 text-sm font-bold text-white hover:bg-green-700"
        @click="emitirActivar"
      >
        Activar
      </button>
    </footer>
  </article>
</template>

<script setup lang="ts">
import type { TipoVehiculo } from '~/types/tipoVehiculo'
import { formatCurrency } from '~/utils/formatCurrency'

const props = defineProps<{
  tipo: TipoVehiculo
}>()

const emit = defineEmits<{
  editar: [tipo: TipoVehiculo]
  desactivar: [tipo: TipoVehiculo]
  activar: [tipo: TipoVehiculo]
}>()

function emitirEditar() {
  emit('editar', props.tipo)
}

function emitirDesactivar() {
  emit('desactivar', props.tipo)
}

function emitirActivar() {
  emit('activar', props.tipo)
}
</script>
