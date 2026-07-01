<template>
  <!-- Página crear arriendo -->
  <section class="arriendo-create-page">

    <!-- Encabezado -->
    <header class="arriendo-create-header">
      <div>
        <h1 class="arriendo-create-title">
          Nuevo arriendo
        </h1>

        <p class="arriendo-create-description">
          Registra un nuevo arriendo seleccionando el cliente, el vehículo disponible y las fechas correspondientes.
        </p>
      </div>

      <div class="arriendo-create-header-actions">
        <NuxtLink to="/arriendos" class="arriendo-create-secondary-link">
          Volver a arriendos
        </NuxtLink>
      </div>
    </header>

    <div v-if="mensajeError" class="mb-4 rounded-lg bg-red-50 p-4 text-sm font-bold text-red-800">
      {{ mensajeError }}
    </div>

    <div v-if="mensajeExito" class="mb-4 rounded-lg bg-green-50 p-4 text-sm font-bold text-green-800">
      {{ mensajeExito }}
    </div>

    <!-- Contenido principal -->
    <section class="arriendo-create-layout">

      <!-- Formulario principal -->
      <article class="arriendo-create-form-card">

        <header class="arriendo-create-card-header">
          <h2 class="arriendo-create-card-title">
            Datos del arriendo
          </h2>

          <p class="arriendo-create-card-description">
            Completa la información necesaria para iniciar el arriendo.
          </p>
        </header>

        <form class="arriendo-create-form" @submit.prevent="crearArriendo">

          <!-- Cliente -->
          <div class="arriendo-create-field">
            <label class="arriendo-create-label">
              Cliente
            </label>

            <select v-model.number="formulario.cliente_id" class="arriendo-create-select">
              <option value="">
                Selecciona un cliente activo
              </option>
              <option v-for="cliente in clientes" :key="cliente.id" :value="cliente.id">
                {{ cliente.nombres }} {{ cliente.apellidos }} - {{ cliente.rut }}
              </option>
            </select>

            <select v-if="false" class="arriendo-create-select">
              <option value="">
                Selecciona un cliente activo
              </option>
              <option value="1">
                Juan Pérez · 12.345.678-9
              </option>
            </select>

            <p class="arriendo-create-help">
              Solo se deben mostrar clientes activos.
            </p>
          </div>

          <!-- Vehículo -->
          <div class="arriendo-create-field">
            <label class="arriendo-create-label">
              Vehículo
            </label>

            <select v-model.number="formulario.vehiculo_id" class="arriendo-create-select">
              <option value="">
                Selecciona un vehiculo disponible
              </option>
              <option v-for="vehiculo in vehiculosDisponibles" :key="vehiculo.id" :value="vehiculo.id">
                {{ vehiculo.marca }} {{ vehiculo.modelo }} - {{ vehiculo.patente }} - {{ formatCurrency(vehiculo.tipos_vehiculo?.valor_diario) }}
              </option>
            </select>

            <select v-if="false" class="arriendo-create-select">
              <option value="">
                Selecciona un vehículo disponible
              </option>
              <option value="1">
                Toyota Corolla · ABCD12 · $35.000 diario
              </option>
            </select>

            <p class="arriendo-create-help">
              Solo se deben mostrar vehículos activos y disponibles.
            </p>
          </div>

          <!-- Fecha inicio -->
          <div class="arriendo-create-field">
            <label class="arriendo-create-label">
              Fecha de inicio
            </label>

            <input v-model="formulario.fecha_inicio" type="date" class="arriendo-create-input">
          </div>

          <!-- Fecha término -->
          <div class="arriendo-create-field">
            <label class="arriendo-create-label">
              Fecha de término
            </label>

            <input v-model="formulario.fecha_termino" type="date" class="arriendo-create-input">
          </div>

          <!-- Fecha y hora de entrega -->
          <div class="arriendo-create-field">
            <label class="arriendo-create-label">
              Fecha y hora de entrega
            </label>

            <input v-model="formulario.fecha_hora_entrega" type="datetime-local" class="arriendo-create-input">

            <p class="arriendo-create-help">
              Si no se completa, después podemos hacer que el sistema use la fecha y hora actual.
            </p>
          </div>

          <!-- Fotos de entrega -->
          <div class="arriendo-create-field">
            <label class="arriendo-create-label">
              Fotos de entrega
            </label>

            <UFileUpload
              v-model="fotosEntrega"
              multiple
              accept="image/png,image/jpeg,image/webp"
              class="w-full"
            />

            <p class="arriendo-create-help">
              Estas fotos dejan evidencia del estado del vehículo al momento de entregarlo.
            </p>
          </div>

        </form>

        <!-- Acciones del formulario -->
        <footer class="arriendo-create-form-actions">
          <NuxtLink to="/arriendos" class="arriendo-create-secondary-link">
            Cancelar
          </NuxtLink>

          <button type="button" class="arriendo-create-primary-button" :disabled="guardando" @click="crearArriendo">
            {{ guardando ? 'Creando...' : 'Crear arriendo' }}
          </button>
        </footer>

      </article>

      <!-- Resumen lateral -->
      <aside class="arriendo-create-summary-card">

        <header class="arriendo-create-card-header">
          <h2 class="arriendo-create-card-title">
            Resumen
          </h2>

          <p class="arriendo-create-card-description">
            Vista previa del arriendo antes de guardarlo.
          </p>
        </header>

        <div class="arriendo-create-summary-list">

          <div class="arriendo-create-summary-item">
            <span class="arriendo-create-summary-label">
              Cliente
            </span>

            <strong class="arriendo-create-summary-value">
              {{ clienteSeleccionado ? `${clienteSeleccionado.nombres} ${clienteSeleccionado.apellidos}` : 'No seleccionado' }}
            </strong>
          </div>

          <div class="arriendo-create-summary-item">
            <span class="arriendo-create-summary-label">
              Vehículo
            </span>

            <strong class="arriendo-create-summary-value">
              {{ vehiculoSeleccionado ? `${vehiculoSeleccionado.marca} ${vehiculoSeleccionado.modelo} - ${vehiculoSeleccionado.patente}` : 'No seleccionado' }}
            </strong>
          </div>

          <div class="arriendo-create-summary-item">
            <span class="arriendo-create-summary-label">
              Valor diario
            </span>

            <strong class="arriendo-create-summary-value">
              {{ formatCurrency(vehiculoSeleccionado?.tipos_vehiculo?.valor_diario) }}
            </strong>
          </div>

          <div class="arriendo-create-summary-item">
            <span class="arriendo-create-summary-label">
              Días de arriendo
            </span>

            <strong class="arriendo-create-summary-value">
              {{ diasArriendo }}
            </strong>
          </div>

          <div class="arriendo-create-summary-total">
            <span class="arriendo-create-summary-total-label">
              Total estimado
            </span>

            <strong class="arriendo-create-summary-total-value">
              {{ formatCurrency(totalEstimado) }}
            </strong>
          </div>

        </div>

        <div class="arriendo-create-warning-box">
          <h3 class="arriendo-create-warning-title">
            Importante
          </h3>

          <p class="arriendo-create-warning-text">
            El total mostrado aquí es solo una vista previa. El backend calculará oficialmente los días, el valor diario
            aplicado y el valor total.
          </p>
        </div>

      </aside>

    </section>

  </section>
</template>

<script setup lang="ts">
import type { Cliente } from '~/types/cliente'
import type { Vehiculo } from '~/types/vehiculo'
import { formatCurrency } from '~/utils/formatCurrency'
import { getApiErrorMessage } from '~/utils/getApiErrorMessage'
import { convertirUrlsAJson, subirImagenes } from '~/utils/uploadImagenes'

interface FormularioArriendo {
  cliente_id: number | null
  vehiculo_id: number | null
  fecha_inicio: string
  fecha_termino: string
  fecha_hora_entrega: string
}

type ArchivosEntrega = File[] | null

const clientes = ref<Cliente[]>([])
const vehiculos = ref<Vehiculo[]>([])

const formulario = reactive<FormularioArriendo>({
  cliente_id: null,
  vehiculo_id: null,
  fecha_inicio: '',
  fecha_termino: '',
  fecha_hora_entrega: '',
})

const fotosEntrega = ref<ArchivosEntrega>(null)

const cargando = ref(false)
const guardando = ref(false)
const mensajeError = ref('')
const mensajeExito = ref('')

const vehiculosDisponibles = computed(() => {
  return vehiculos.value.filter((vehiculo) => vehiculo.activo && vehiculo.estado === 'disponible')
})

const clienteSeleccionado = computed(() => {
  return clientes.value.find((cliente) => cliente.id === formulario.cliente_id) ?? null
})

const vehiculoSeleccionado = computed(() => {
  return vehiculos.value.find((vehiculo) => vehiculo.id === formulario.vehiculo_id) ?? null
})

const diasArriendo = computed(() => {
  if (!formulario.fecha_inicio || !formulario.fecha_termino) {
    return 0
  }

  return calcularDias(formulario.fecha_inicio, formulario.fecha_termino)
})

const totalEstimado = computed(() => {
  const valorDiario = vehiculoSeleccionado.value?.tipos_vehiculo?.valor_diario ?? 0
  return valorDiario * diasArriendo.value
})

async function cargarDatos() {
  cargando.value = true
  limpiarMensajes()

  try {
    await Promise.all([
      cargarClientes(),
      cargarVehiculos(),
    ])
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudieron cargar los datos')
  }
  finally {
    cargando.value = false
  }
}

async function cargarClientes() {
  clientes.value = await $fetch<Cliente[]>('/api/clientes')
}

async function cargarVehiculos() {
  vehiculos.value = await $fetch<Vehiculo[]>('/api/vehiculos')
}

function limpiarMensajes() {
  mensajeError.value = ''
  mensajeExito.value = ''
}

function validarFormulario() {
  const archivos = obtenerFotosSeleccionadas()

  if (!formulario.cliente_id) {
    mensajeError.value = 'Debes seleccionar un cliente'
    return false
  }

  if (!formulario.vehiculo_id) {
    mensajeError.value = 'Debes seleccionar un vehiculo disponible'
    return false
  }

  if (!formulario.fecha_inicio || !formulario.fecha_termino) {
    mensajeError.value = 'Debes ingresar fecha de inicio y termino'
    return false
  }

  if (new Date(formulario.fecha_termino) <= new Date(formulario.fecha_inicio)) {
    mensajeError.value = 'La fecha de termino debe ser posterior a la fecha de inicio'
    return false
  }

  if (!formulario.fecha_hora_entrega) {
    mensajeError.value = 'Debes ingresar la fecha y hora de entrega'
    return false
  }

  if (archivos.length === 0) {
    mensajeError.value = 'Debes adjuntar al menos una foto de entrega'
    return false
  }

  return true
}

async function crearArriendo() {
  limpiarMensajes()

  if (!validarFormulario()) {
    return
  }

  guardando.value = true

  try {
    const urlsFotos = await subirImagenes(obtenerFotosSeleccionadas())

    await $fetch('/api/arriendos', {
      method: 'POST',
      body: {
        cliente_id: formulario.cliente_id,
        vehiculo_id: formulario.vehiculo_id,
        fecha_inicio: formulario.fecha_inicio,
        fecha_termino: formulario.fecha_termino,
        fecha_hora_entrega: formulario.fecha_hora_entrega,
        fotos_entrega: convertirUrlsAJson(urlsFotos),
      },
    })

    mensajeExito.value = 'Arriendo creado correctamente'
    await navigateTo('/arriendos')
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo crear el arriendo')
  }
  finally {
    guardando.value = false
  }
}

function obtenerFotosSeleccionadas(): File[] {
  if (!fotosEntrega.value) {
    return []
  }

  return fotosEntrega.value
}

function calcularDias(fechaInicio: string, fechaTermino: string) {
  const inicio = new Date(fechaInicio)
  const termino = new Date(fechaTermino)
  const milisegundosPorDia = 1000 * 60 * 60 * 24
  const diferencia = termino.getTime() - inicio.getTime()

  if (Number.isNaN(diferencia) || diferencia <= 0) {
    return 0
  }

  return Math.ceil(diferencia / milisegundosPorDia)
}

onMounted(() => {
  cargarDatos()
})
// Lógica pendiente para después:
//
// 1. Importar types Cliente, Vehiculo y Arriendo si corresponde.
// 2. Cargar clientes activos desde GET /api/clientes.
// 3. Cargar vehículos activos y disponibles desde GET /api/vehiculos.
// 4. Crear refs para cliente_id, vehiculo_id, fecha_inicio, fecha_termino,
//    fecha_hora_entrega y fotos_entrega.
// 5. Mostrar vista previa de valor diario, días y total.
// 6. Enviar POST a /api/arriendos.
//
// Datos que esta página debe enviar al backend:
// - cliente_id
// - vehiculo_id
// - fecha_inicio
// - fecha_termino
// - fecha_hora_entrega
// - fotos_entrega
//
// Datos que NO debe decidir oficialmente el frontend:
// - dias_arriendo
// - valor_diario_aplicado
// - valor_total
//
// Esos datos los calcula el backend según las reglas ya corregidas.
//
// Reglas importantes:
// - El cliente debe estar activo.
// - El vehículo debe estar activo y disponible.
// - fecha_termino debe ser mayor que fecha_inicio.
// - No se deben crear arriendos con vehículo arrendado, en mantenimiento o de baja.
</script>
