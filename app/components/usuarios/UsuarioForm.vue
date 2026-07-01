<template>
  <form class="grid gap-4" novalidate @submit.prevent="emitirGuardar">
    <div class="grid gap-4 md:grid-cols-2">
      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="usuario-perfil">
          Perfil
        </label>

        <select
          id="usuario-perfil"
          v-model.number="formulario.perfil_id"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        >
          <option :value="null">
            Selecciona un perfil
          </option>
          <option
            v-for="perfil in perfiles"
            :key="perfil.id"
            :value="perfil.id"
          >
            {{ getProfileLabel(perfil.nombre) }}
          </option>
        </select>

        <p v-if="errores.perfil_id" class="text-xs font-semibold text-red-700">
          {{ errores.perfil_id }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="usuario-rut">
          RUT
        </label>

        <input
          id="usuario-rut"
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
        <label class="text-sm font-bold text-slate-700" for="usuario-nombres">
          Nombres
        </label>

        <input
          id="usuario-nombres"
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
        <label class="text-sm font-bold text-slate-700" for="usuario-apellidos">
          Apellidos
        </label>

        <input
          id="usuario-apellidos"
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
        <label class="text-sm font-bold text-slate-700" for="usuario-email">
          Email
        </label>

        <input
          id="usuario-email"
          v-model.trim="formulario.email"
          type="email"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="usuario@sistema.cl"
        >

        <p v-if="errores.email" class="text-xs font-semibold text-red-700">
          {{ errores.email }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="usuario-password">
          Contrasena
        </label>

        <input
          id="usuario-password"
          v-model="formulario.password"
          type="password"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          :placeholder="modo === 'editar' ? 'Dejar vacia para no cambiar' : 'Minimo 8 caracteres'"
          autocomplete="new-password"
        >

        <p v-if="errores.password" class="text-xs font-semibold text-red-700">
          {{ errores.password }}
        </p>
      </div>
    </div>

    <label class="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-700">
      <input
        v-model="formulario.activo"
        type="checkbox"
        class="h-4 w-4 rounded border-slate-300 text-blue-600"
      >
      Usuario activo
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
import type { Perfil } from '~/types/perfil'
import type { Usuario } from '~/types/usuario'
import { getProfileLabel } from '~/utils/formatStyle'

type ModoFormulario = 'crear' | 'editar'

interface UsuarioFormData {
  perfil_id: number | null
  rut: string
  nombres: string
  apellidos: string
  email: string
  password?: string
  activo: boolean
}

const props = withDefaults(defineProps<{
  usuario?: Usuario | null
  perfiles?: Perfil[]
  guardando?: boolean
  modo?: ModoFormulario
}>(), {
  usuario: null,
  perfiles: () => [],
  guardando: false,
  modo: 'crear',
})

const emit = defineEmits<{
  guardar: [payload: UsuarioFormData]
  cancelar: []
}>()

const formulario = reactive<UsuarioFormData>({
  perfil_id: null,
  rut: '',
  nombres: '',
  apellidos: '',
  email: '',
  password: '',
  activo: true,
})

const errores = reactive<Record<string, string>>({})

watch(
  () => props.usuario,
  (usuario) => {
    cargarFormulario(usuario)
  },
  { immediate: true },
)

const textoBotonGuardar = computed(() => props.modo === 'editar' ? 'Guardar cambios' : 'Crear usuario')

function cargarFormulario(usuario?: Usuario | null) {
  formulario.perfil_id = usuario?.perfil_id ?? null
  formulario.rut = usuario?.rut ?? ''
  formulario.nombres = usuario?.nombres ?? ''
  formulario.apellidos = usuario?.apellidos ?? ''
  formulario.email = usuario?.email ?? ''
  formulario.password = ''
  formulario.activo = usuario?.activo ?? true
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

  if (!formulario.perfil_id) errores.perfil_id = 'El perfil es obligatorio'
  if (!formulario.rut.trim()) errores.rut = 'El RUT es obligatorio'
  if (!formulario.nombres.trim()) errores.nombres = 'Los nombres son obligatorios'
  if (!formulario.apellidos.trim()) errores.apellidos = 'Los apellidos son obligatorios'

  if (!formulario.email.trim()) {
    errores.email = 'El email es obligatorio'
  }
  else if (!emailValido(formulario.email)) {
    errores.email = 'El email no tiene un formato valido'
  }

  const password = formulario.password ?? ''
  if (props.modo === 'crear' && !password) {
    errores.password = 'La contrasena es obligatoria al crear'
  }
  else if (password && password.length < 8) {
    errores.password = 'La contrasena debe tener al menos 8 caracteres'
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

  const payload: UsuarioFormData = {
    perfil_id: Number(formulario.perfil_id),
    rut: formulario.rut.trim(),
    nombres: formulario.nombres.trim(),
    apellidos: formulario.apellidos.trim(),
    email: formulario.email.trim().toLowerCase(),
    activo: formulario.activo,
  }

  if (formulario.password) {
    payload.password = formulario.password
  }

  emit('guardar', payload)
}
</script>
