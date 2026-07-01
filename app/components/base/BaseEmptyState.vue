<template>
  <section class="rounded-lg border border-dashed border-slate-300 bg-white px-6 py-10 text-center">
    <h2 class="text-lg font-bold text-slate-900">
      {{ titulo }}
    </h2>

    <p v-if="mensaje" class="mx-auto mt-2 max-w-xl text-sm leading-6 text-slate-500">
      {{ mensaje }}
    </p>

    <button
      v-if="accionTexto"
      type="button"
      class="mt-5 inline-flex min-h-10 items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700"
      @click="emitirAccion"
    >
      {{ accionTexto }}
    </button>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  titulo: string
  mensaje?: string
  accionTexto?: string
}>()

const emit = defineEmits<{
  accion: []
}>()

function emitirAccion() {
  emit('accion')
}
</script>
