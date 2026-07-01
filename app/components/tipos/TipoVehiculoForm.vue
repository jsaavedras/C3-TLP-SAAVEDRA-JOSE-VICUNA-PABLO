<template>
  <form class="grid gap-4" novalidate @submit.prevent="emitirGuardar">
    <div class="grid gap-2">
      <label class="text-sm font-bold text-slate-700" for="tipo-nombre">
        Nombre
      </label>

      <input
        id="tipo-nombre"
        v-model.trim="formulario.nombre"
        type="text"
        class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        placeholder="Ej: Sedan"
      >

      <p v-if="errores.nombre" class="text-xs font-semibold text-red-700">
        {{ errores.nombre }}
      </p>
    </div>

    <div class="grid gap-2">
      <label class="text-sm font-bold text-slate-700" for="tipo-valor-diario">
        Valor diario
      </label>

      <input
        id="tipo-valor-diario"
        v-model.number="formulario.valor_diario"
        type="number"
        min="0"
        step="1"
        class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        placeholder="Ej: 35000"
      >

      <p v-if="errores.valor_diario" class="text-xs font-semibold text-red-700">
        {{ errores.valor_diario }}
      </p>
    </div>

    <div class="grid gap-2">
      <label class="text-sm font-bold text-slate-700" for="tipo-descripcion">
        Descripcion
      </label>

      <textarea
        id="tipo-descripcion"
        v-model.trim="formulario.descripcion"
        rows="4"
        class="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        placeholder="Describe las caracteristicas del tipo de vehiculo"
      />

      <p v-if="errores.descripcion" class="text-xs font-semibold text-red-700">
        {{ errores.descripcion }}
      </p>
    </div>

    <label class="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-700">
      <input
        v-model="formulario.activo"
        type="checkbox"
        class="h-4 w-4 rounded border-slate-300 text-blue-600"
      >
      Tipo activo
    </label>

    <footer class="flex flex-col-reverse gap-2 pt-2 sm:flex-row sm:justify-end">
      <button
        type="button"
        class="inline-flex min-h-10 items-center justify-center rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50"
        :disabled="guardando"
        @click="emitirCancelar"
      >
        Cancelar
      </button>

      <button
        type="submit"
        class="inline-flex min-h-10 items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        :disabled="guardando"
      >
        {{ guardando ? 'Guardando...' : textoBotonGuardar }}
      </button>
    </footer>
  </form>
</template>

<script setup lang="ts">
import type { TipoVehiculo } from '~/types/tipoVehiculo'

type ModoFormulario = 'crear' | 'editar'

interface TipoVehiculoFormData {
  nombre: string
  descripcion: string
  valor_diario: number | string | null
  activo: boolean
}

const props = withDefaults(defineProps<{
  modelo?: TipoVehiculo | null
  guardando?: boolean
  modo?: ModoFormulario
}>(), {
  modelo: null,
  guardando: false,
  modo: 'crear',
})

const emit = defineEmits<{
  guardar: [payload: TipoVehiculoFormData]
  cancelar: []
}>()

const formulario = reactive<TipoVehiculoFormData>({
  nombre: '',
  descripcion: '',
  valor_diario: null,
  activo: true,
})

const errores = reactive<Record<string, string>>({})

watch(
  () => props.modelo,
  (modelo) => {
    cargarFormulario(modelo)
  },
  { immediate: true },
)

const textoBotonGuardar = computed(() => props.modo === 'editar' ? 'Guardar cambios' : 'Crear tipo')

function cargarFormulario(modelo?: TipoVehiculo | null) {
  formulario.nombre = modelo?.nombre ?? ''
  formulario.descripcion = modelo?.descripcion ?? ''
  formulario.valor_diario = modelo?.valor_diario ?? null
  formulario.activo = modelo?.activo ?? true
  limpiarErrores()
}

function limpiarErrores() {
  for (const key of Object.keys(errores)) {
    delete errores[key]
  }
}

function validarFormulario(): boolean {
  limpiarErrores()

  if (!formulario.nombre.trim()) {
    errores.nombre = 'El nombre es obligatorio'
  }

  if (!formulario.descripcion.trim()) {
    errores.descripcion = 'La descripcion es obligatoria'
  }

  const valorDiario = Number(formulario.valor_diario)
  if (formulario.valor_diario === null || formulario.valor_diario === '' || !Number.isFinite(valorDiario) || valorDiario < 0) {
    errores.valor_diario = 'El valor diario debe ser mayor o igual a 0'
  }

  return Object.keys(errores).length === 0
}

function emitirCancelar() {
  emit('cancelar')
}

function emitirGuardar() {
  if (!validarFormulario()) {
    return
  }

  emit('guardar', {
    nombre: formulario.nombre.trim(),
    descripcion: formulario.descripcion.trim(),
    valor_diario: Math.trunc(Number(formulario.valor_diario)),
    activo: formulario.activo,
  })
}
</script>
