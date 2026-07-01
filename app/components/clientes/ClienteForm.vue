<template>
  <form class="grid gap-4" novalidate @submit.prevent="emitirGuardar">
    <div class="grid gap-4 md:grid-cols-2">
      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="cliente-rut">
          RUT
        </label>

        <input
          id="cliente-rut"
          v-model.trim="formulario.rut"
          type="text"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Ej: 12.345.678-9"
        >

        <p v-if="errores.rut" class="text-xs font-semibold text-red-700">
          {{ errores.rut }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="cliente-email">
          Email
        </label>

        <input
          id="cliente-email"
          v-model.trim="formulario.email"
          type="email"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="cliente@email.cl"
        >

        <p v-if="errores.email" class="text-xs font-semibold text-red-700">
          {{ errores.email }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="cliente-nombres">
          Nombres
        </label>

        <input
          id="cliente-nombres"
          v-model.trim="formulario.nombres"
          type="text"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Ej: Juan"
        >

        <p v-if="errores.nombres" class="text-xs font-semibold text-red-700">
          {{ errores.nombres }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="cliente-apellidos">
          Apellidos
        </label>

        <input
          id="cliente-apellidos"
          v-model.trim="formulario.apellidos"
          type="text"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Ej: Perez"
        >

        <p v-if="errores.apellidos" class="text-xs font-semibold text-red-700">
          {{ errores.apellidos }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="cliente-telefono">
          Telefono
        </label>

        <input
          id="cliente-telefono"
          v-model.trim="formulario.telefono"
          type="text"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Ej: +56 9 1234 5678"
        >

        <p v-if="errores.telefono" class="text-xs font-semibold text-red-700">
          {{ errores.telefono }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="cliente-licencia">
          Licencia de conducir
        </label>

        <input
          id="cliente-licencia"
          v-model.trim="formulario.licencia_conducir"
          type="text"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Ej: B123456"
        >

        <p v-if="errores.licencia_conducir" class="text-xs font-semibold text-red-700">
          {{ errores.licencia_conducir }}
        </p>
      </div>

      <div class="grid gap-2 md:col-span-2">
        <label class="text-sm font-bold text-slate-700" for="cliente-direccion">
          Direccion
        </label>

        <input
          id="cliente-direccion"
          v-model.trim="formulario.direccion"
          type="text"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Ej: Av. Principal 123"
        >

        <p v-if="errores.direccion" class="text-xs font-semibold text-red-700">
          {{ errores.direccion }}
        </p>
      </div>
    </div>

    <label class="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-700">
      <input
        v-model="formulario.activo"
        type="checkbox"
        class="h-4 w-4 rounded border-slate-300 text-blue-600"
      >
      Cliente activo
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
import type { Cliente } from '~/types/cliente'

type ModoFormulario = 'crear' | 'editar'

interface ClienteFormData {
  rut: string
  nombres: string
  apellidos: string
  email: string
  telefono: string
  direccion: string
  licencia_conducir: string
  activo: boolean
}

const props = withDefaults(defineProps<{
  cliente?: Cliente | null
  guardando?: boolean
  modo?: ModoFormulario
}>(), {
  cliente: null,
  guardando: false,
  modo: 'crear',
})

const emit = defineEmits<{
  guardar: [payload: ClienteFormData]
  cancelar: []
}>()

const formulario = reactive<ClienteFormData>({
  rut: '',
  nombres: '',
  apellidos: '',
  email: '',
  telefono: '',
  direccion: '',
  licencia_conducir: '',
  activo: true,
})

const errores = reactive<Record<string, string>>({})

watch(
  () => props.cliente,
  (cliente) => {
    cargarFormulario(cliente)
  },
  { immediate: true },
)

const textoBotonGuardar = computed(() => props.modo === 'editar' ? 'Guardar cambios' : 'Crear cliente')

function cargarFormulario(cliente?: Cliente | null) {
  formulario.rut = cliente?.rut ?? ''
  formulario.nombres = cliente?.nombres ?? ''
  formulario.apellidos = cliente?.apellidos ?? ''
  formulario.email = cliente?.email ?? ''
  formulario.telefono = cliente?.telefono ?? ''
  formulario.direccion = cliente?.direccion ?? ''
  formulario.licencia_conducir = cliente?.licencia_conducir ?? ''
  formulario.activo = cliente?.activo ?? true
  limpiarErrores()
}

function limpiarErrores() {
  for (const key of Object.keys(errores)) {
    delete errores[key]
  }
}

function emailValido(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validarFormulario(): boolean {
  limpiarErrores()

  if (!formulario.rut.trim()) errores.rut = 'El RUT es obligatorio'
  if (!formulario.nombres.trim()) errores.nombres = 'Los nombres son obligatorios'
  if (!formulario.apellidos.trim()) errores.apellidos = 'Los apellidos son obligatorios'
  if (!formulario.telefono.trim()) errores.telefono = 'El telefono es obligatorio'
  if (!formulario.direccion.trim()) errores.direccion = 'La direccion es obligatoria'
  if (!formulario.licencia_conducir.trim()) errores.licencia_conducir = 'La licencia es obligatoria'

  if (!formulario.email.trim()) {
    errores.email = 'El email es obligatorio'
  }
  else if (!emailValido(formulario.email)) {
    errores.email = 'El email no tiene un formato valido'
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
    rut: formulario.rut.trim(),
    nombres: formulario.nombres.trim(),
    apellidos: formulario.apellidos.trim(),
    email: formulario.email.trim().toLowerCase(),
    telefono: formulario.telefono.trim(),
    direccion: formulario.direccion.trim(),
    licencia_conducir: formulario.licencia_conducir.trim(),
    activo: formulario.activo,
  })
}
</script>
