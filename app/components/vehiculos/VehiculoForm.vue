<template>
  <form class="grid gap-4" novalidate @submit.prevent="emitirGuardar">
    <div class="grid gap-4 md:grid-cols-2">
      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="vehiculo-tipo">
          Tipo de vehiculo
        </label>

        <select
          id="vehiculo-tipo"
          v-model.number="formulario.tipo_id"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        >
          <option :value="null">
            Selecciona un tipo
          </option>
          <option
            v-for="tipo in tipos"
            :key="tipo.id"
            :value="tipo.id"
          >
            {{ tipo.nombre }}
          </option>
        </select>

        <p v-if="errores.tipo_id" class="text-xs font-semibold text-red-700">
          {{ errores.tipo_id }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="vehiculo-patente">
          Patente
        </label>

        <input
          id="vehiculo-patente"
          v-model.trim="formulario.patente"
          type="text"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm uppercase text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Ej: ABCD12"
        >

        <p v-if="errores.patente" class="text-xs font-semibold text-red-700">
          {{ errores.patente }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="vehiculo-marca">
          Marca
        </label>

        <input
          id="vehiculo-marca"
          v-model.trim="formulario.marca"
          type="text"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Ej: Toyota"
        >

        <p v-if="errores.marca" class="text-xs font-semibold text-red-700">
          {{ errores.marca }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="vehiculo-modelo">
          Modelo
        </label>

        <input
          id="vehiculo-modelo"
          v-model.trim="formulario.modelo"
          type="text"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Ej: Corolla"
        >

        <p v-if="errores.modelo" class="text-xs font-semibold text-red-700">
          {{ errores.modelo }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="vehiculo-anio">
          Anio
        </label>

        <input
          id="vehiculo-anio"
          v-model.number="formulario.anio"
          type="number"
          min="1900"
          :max="anioMaximo"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Ej: 2022"
        >

        <p v-if="errores.anio" class="text-xs font-semibold text-red-700">
          {{ errores.anio }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="vehiculo-color">
          Color
        </label>

        <input
          id="vehiculo-color"
          v-model.trim="formulario.color"
          type="text"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          placeholder="Ej: Blanco"
        >

        <p v-if="errores.color" class="text-xs font-semibold text-red-700">
          {{ errores.color }}
        </p>
      </div>

      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700" for="vehiculo-estado">
          Estado
        </label>

        <select
          id="vehiculo-estado"
          v-model="formulario.estado"
          class="min-h-11 rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        >
          <option value="disponible">
            Disponible
          </option>
          <option value="en_mantenimiento">
            En mantenimiento
          </option>
          <option value="de_baja">
            De baja
          </option>
          <option v-if="formulario.estado === 'arrendado'" value="arrendado" disabled>
            Arrendado
          </option>
        </select>

        <p v-if="errores.estado" class="text-xs font-semibold text-red-700">
          {{ errores.estado }}
        </p>
      </div>

      <label class="flex items-center gap-3 rounded-lg border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-bold text-slate-700">
        <input
          v-model="formulario.activo"
          type="checkbox"
          class="h-4 w-4 rounded border-slate-300 text-blue-600"
        >
        Vehiculo activo
      </label>
    </div>

    <div class="grid gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
      <div class="grid gap-2">
        <label class="text-sm font-bold text-slate-700">
          Fotografia del vehiculo
        </label>

        <!-- Si NuxtUI cambia el nombre del componente, ajustar UFileUpload aqui. -->
        <UFileUpload
          v-model="fotoSeleccionada"
          accept="image/png,image/jpeg,image/webp"
          class="w-full"
        />

        <p class="text-xs text-slate-500">
          El componente solo selecciona el archivo. La pagina debe subirlo y guardar la URL.
        </p>

        <p v-if="errores.foto" class="text-xs font-semibold text-red-700">
          {{ errores.foto }}
        </p>
      </div>

      <div v-if="formulario.foto_url" class="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <img
          :src="formulario.foto_url"
          alt="Fotografia actual del vehiculo"
          class="h-48 w-full object-cover"
        >
      </div>

      <p v-if="formulario.fotoFile" class="text-sm font-semibold text-slate-700">
        Archivo seleccionado: {{ formulario.fotoFile.name }}
      </p>
    </div>

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
import type { EstadoVehiculo, Vehiculo } from '~/types/vehiculo'

type ModoFormulario = 'crear' | 'editar'
type ArchivoSeleccionado = File | null

interface VehiculoFormData {
  tipo_id: number | null
  patente: string
  marca: string
  modelo: string
  anio: number | null
  color: string
  estado: EstadoVehiculo
  foto_url: string
  fotoFile: File | null
  activo: boolean
}

const props = withDefaults(defineProps<{
  vehiculo?: Vehiculo | null
  tipos?: TipoVehiculo[]
  guardando?: boolean
  modo?: ModoFormulario
}>(), {
  vehiculo: null,
  tipos: () => [],
  guardando: false,
  modo: 'crear',
})

const emit = defineEmits<{
  guardar: [payload: VehiculoFormData]
  cancelar: []
}>()

const formulario = reactive<VehiculoFormData>({
  tipo_id: null,
  patente: '',
  marca: '',
  modelo: '',
  anio: null,
  color: '',
  estado: 'disponible',
  foto_url: '',
  fotoFile: null,
  activo: true,
})

const errores = reactive<Record<string, string>>({})
const fotoSeleccionada = ref<ArchivoSeleccionado>(null)

watch(
  () => props.vehiculo,
  (vehiculo) => {
    cargarFormulario(vehiculo)
  },
  { immediate: true },
)

watch(fotoSeleccionada, (valor) => {
  formulario.fotoFile = obtenerPrimerArchivo(valor)
})

const anioMaximo = computed(() => new Date().getFullYear() + 1)
const textoBotonGuardar = computed(() => props.modo === 'editar' ? 'Guardar cambios' : 'Crear vehiculo')

function cargarFormulario(vehiculo?: Vehiculo | null) {
  formulario.tipo_id = vehiculo?.tipo_id ?? null
  formulario.patente = vehiculo?.patente ?? ''
  formulario.marca = vehiculo?.marca ?? ''
  formulario.modelo = vehiculo?.modelo ?? ''
  formulario.anio = vehiculo?.anio ?? null
  formulario.color = vehiculo?.color ?? ''
  formulario.estado = vehiculo?.estado ?? 'disponible'
  formulario.foto_url = vehiculo?.foto_url ?? ''
  formulario.fotoFile = null
  formulario.activo = vehiculo?.activo ?? true
  fotoSeleccionada.value = null
  limpiarErrores()
}

function limpiarErrores() {
  for (const key of Object.keys(errores)) {
    delete errores[key]
  }
}

function obtenerPrimerArchivo(valor: unknown): File | null {
  const fileConstructor = typeof File !== 'undefined' ? File : null
  const fileListConstructor = typeof FileList !== 'undefined' ? FileList : null

  if (!valor) {
    return null
  }

  if (fileConstructor && valor instanceof fileConstructor) {
    return valor
  }

  if (fileListConstructor && valor instanceof fileListConstructor) {
    return valor.item(0)
  }

  if (Array.isArray(valor)) {
    return valor[0] ?? null
  }

  return null
}

function validarFormulario(): boolean {
  limpiarErrores()

  if (!formulario.tipo_id) {
    errores.tipo_id = 'El tipo de vehiculo es obligatorio'
  }

  if (!formulario.patente.trim()) {
    errores.patente = 'La patente es obligatoria'
  }

  if (!formulario.marca.trim()) {
    errores.marca = 'La marca es obligatoria'
  }

  if (!formulario.modelo.trim()) {
    errores.modelo = 'El modelo es obligatorio'
  }

  const anio = Number(formulario.anio)
  if (!Number.isInteger(anio) || anio < 1900 || anio > anioMaximo.value) {
    errores.anio = `El anio debe estar entre 1900 y ${anioMaximo.value}`
  }

  if (!formulario.color.trim()) {
    errores.color = 'El color es obligatorio'
  }

  if (!['disponible', 'en_mantenimiento', 'de_baja', 'arrendado'].includes(formulario.estado)) {
    errores.estado = 'Estado de vehiculo invalido'
  }

  if (props.modo === 'crear' && !formulario.foto_url && !formulario.fotoFile) {
    errores.foto = 'La fotografia del vehiculo es obligatoria'
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
    tipo_id: Number(formulario.tipo_id),
    patente: formulario.patente.trim().toUpperCase(),
    marca: formulario.marca.trim(),
    modelo: formulario.modelo.trim(),
    anio: Number(formulario.anio),
    color: formulario.color.trim(),
    estado: formulario.estado,
    foto_url: formulario.foto_url.trim(),
    fotoFile: formulario.fotoFile,
    activo: formulario.activo,
  })
}
</script>
