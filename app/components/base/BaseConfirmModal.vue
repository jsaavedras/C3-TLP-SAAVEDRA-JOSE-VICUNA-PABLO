<template>
  <div
    v-if="abierto"
    class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4"
    @click.self="emitirCancelar"
  >
    <article class="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl">
      <header class="border-b border-slate-200 px-5 py-4">
        <h2 class="text-lg font-bold text-slate-900">
          {{ titulo }}
        </h2>
      </header>

      <div class="px-5 py-4">
        <p class="text-sm leading-6 text-slate-600">
          {{ mensaje }}
        </p>
      </div>

      <footer class="flex flex-col-reverse gap-2 border-t border-slate-200 px-5 py-4 sm:flex-row sm:justify-end">
        <button
          type="button"
          class="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
          :disabled="cargando"
          @click="emitirCancelar"
        >
          {{ textoCancelar }}
        </button>

        <button
          type="button"
          :class="clasesBotonConfirmar"
          :disabled="cargando"
          @click="emitirConfirmar"
        >
          {{ cargando ? 'Procesando...' : textoConfirmar }}
        </button>
      </footer>
    </article>
  </div>
</template>

<script setup lang="ts">
type TipoConfirmacion = 'danger' | 'warning' | 'primary'

const props = withDefaults(defineProps<{
  abierto: boolean
  titulo: string
  mensaje: string
  textoCancelar?: string
  textoConfirmar?: string
  tipo?: TipoConfirmacion
  cargando?: boolean
}>(), {
  textoCancelar: 'Cancelar',
  textoConfirmar: 'Confirmar',
  tipo: 'primary',
  cargando: false,
})

const emit = defineEmits<{
  cancelar: []
  confirmar: []
}>()

const clasesBotonConfirmar = computed(() => {
  const base = 'inline-flex min-h-10 items-center justify-center rounded-lg px-4 py-2 text-sm font-bold text-white disabled:cursor-not-allowed disabled:opacity-60'

  if (props.tipo === 'danger') {
    return `${base} bg-red-600 hover:bg-red-700`
  }

  if (props.tipo === 'warning') {
    return `${base} bg-yellow-500 text-slate-950 hover:bg-yellow-600`
  }

  return `${base} bg-blue-600 hover:bg-blue-700`
})

function emitirCancelar() {
  if (!props.cargando) {
    emit('cancelar')
  }
}

function emitirConfirmar() {
  if (!props.cargando) {
    emit('confirmar')
  }
}
</script>
