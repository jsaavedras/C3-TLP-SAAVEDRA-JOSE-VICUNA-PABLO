<template>
  <!-- Página tipos de vehículo -->
  <section class="tipos-page">

    <!-- Encabezado -->
    <header class="tipos-header">
      <div>
        <h1 class="tipos-title">
          Tipos de vehículo
        </h1>

        <p class="tipos-description">
          Administra las categorías de vehículos, su descripción, valor diario y estado dentro del sistema.
        </p>
      </div>

      <div class="tipos-header-actions">
        <button type="button" class="tipos-primary-button" @click="abrirModalCrear">
          Nuevo tipo
        </button>
      </div>
    </header>

    <!-- Resumen -->
    <section class="tipos-summary-grid">

      <article class="tipos-summary-card">
        <span class="tipos-summary-label">
          Tipos activos
        </span>

        <strong class="tipos-summary-value">
          {{ tiposActivos }}
        </strong>

        <p class="tipos-summary-text">
          Tipos disponibles para asignar vehículos
        </p>
      </article>

      <article class="tipos-summary-card">
        <span class="tipos-summary-label">
          Tipos inactivos
        </span>

        <strong class="tipos-summary-value">
          {{ tiposInactivos }}
        </strong>

        <p class="tipos-summary-text">
          Tipos desactivados del sistema
        </p>
      </article>

      <article class="tipos-summary-card">
        <span class="tipos-summary-label">
          Total tipos
        </span>

        <strong class="tipos-summary-value">
          {{ tipos.length }}
        </strong>

        <p class="tipos-summary-text">
          Categorías registradas históricamente
        </p>
      </article>

    </section>

    <!-- Filtros -->
    <section class="tipos-filters-card">

      <div class="tipos-filters-grid">

        <div class="tipos-field">
          <label class="tipos-label">
            Buscar tipo
          </label>

          <input v-model="busqueda" type="text" class="tipos-input" placeholder="Buscar por nombre o descripción">
        </div>

        <div class="tipos-field">
          <label class="tipos-label">
            Estado
          </label>

          <select v-model="filtroEstado" class="tipos-select">
            <option value="">
              Todos los estados
            </option>
            <option value="activo">
              Activo
            </option>
            <option value="inactivo">
              Inactivo
            </option>
          </select>
        </div>

      </div>

    </section>

    <div v-if="mensajeError" class="mb-4 rounded-lg bg-red-50 p-4 text-sm font-bold text-red-800">
      {{ mensajeError }}
    </div>

    <div v-if="mensajeExito" class="mb-4 rounded-lg bg-green-50 p-4 text-sm font-bold text-green-800">
      {{ mensajeExito }}
    </div>

    <section v-if="cargando" class="rounded-lg bg-white p-6 text-center text-sm font-bold text-slate-600">
      Cargando tipos de vehiculo...
    </section>

    <section v-else-if="tiposFiltrados.length > 0" class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <TipoVehiculoCard
        v-for="tipo in tiposFiltrados"
        :key="tipo.id"
        :tipo="tipo"
        @editar="abrirModalEditar"
        @desactivar="pedirDesactivar"
        @activar="mostrarPendienteActivar"
      />
    </section>

    <BaseEmptyState
      v-else
      titulo="No hay tipos de vehiculo para mostrar"
      mensaje="Cuando registres tipos de vehiculo, apareceran en esta seccion."
      accion-texto="Nuevo tipo"
      @accion="abrirModalCrear"
    />

    <!-- Listado de tipos -->
    <section v-if="false" class="tipos-grid">

      <!-- Card de ejemplo: después se repetirá con v-for -->
      <article class="tipos-card">

        <header class="tipos-card-header">
          <div>
            <h2 class="tipos-card-title">
              Sedán
            </h2>

            <p class="tipos-card-description">
              Vehículo compacto para uso diario y viajes cortos.
            </p>
          </div>

          <span class="tipos-status tipos-status-activo">
            Activo
          </span>
        </header>

        <div class="tipos-info-list">

          <div class="tipos-info-item">
            <span class="tipos-info-label">
              Valor diario
            </span>

            <strong class="tipos-info-value">
              $35.000
            </strong>
          </div>

          <div class="tipos-info-item">
            <span class="tipos-info-label">
              Vehículos asociados
            </span>

            <strong class="tipos-info-value">
              0
            </strong>
          </div>

        </div>

        <footer class="tipos-card-actions">
          <button type="button" class="tipos-secondary-button">
            Editar
          </button>

          <button type="button" class="tipos-danger-button">
            Desactivar
          </button>
        </footer>

      </article>

    </section>

    <!-- Estado vacío -->
    <section class="tipos-empty" hidden>
      <h2 class="tipos-empty-title">
        No hay tipos de vehículo para mostrar
      </h2>

      <p class="tipos-empty-text">
        Cuando registres tipos de vehículo, aparecerán en esta sección.
      </p>
    </section>

    <section v-if="modalAbierto" class="tipos-modal-backdrop">
      <div class="tipos-modal">
        <header class="tipos-modal-header">
          <h2 class="tipos-modal-title">
            {{ modoFormulario === 'crear' ? 'Nuevo tipo de vehiculo' : 'Editar tipo de vehiculo' }}
          </h2>

          <button type="button" class="tipos-modal-close" @click="cerrarModal">
            x
          </button>
        </header>

        <div class="p-5">
          <TipoVehiculoForm
            :modelo="elementoSeleccionado"
            :guardando="guardando"
            :modo="modoFormulario"
            @guardar="guardarTipo"
            @cancelar="cerrarModal"
          />
        </div>
      </div>
    </section>

    <!-- Modal crear / editar tipo -->
    <section class="tipos-modal-backdrop" hidden>
      <div class="tipos-modal">

        <header class="tipos-modal-header">
          <h2 class="tipos-modal-title">
            Nuevo tipo de vehículo
          </h2>

          <button type="button" class="tipos-modal-close">
            ×
          </button>
        </header>

        <form class="tipos-form">

          <div class="tipos-field">
            <label class="tipos-label">
              Nombre
            </label>

            <input type="text" class="tipos-input" placeholder="Ej: Sedán">
          </div>

          <div class="tipos-field">
            <label class="tipos-label">
              Valor diario
            </label>

            <input type="number" class="tipos-input" placeholder="Ej: 35000" min="0">
          </div>

          <div class="tipos-field tipos-field-full">
            <label class="tipos-label">
              Descripción
            </label>

            <textarea class="tipos-textarea" placeholder="Describe las características del tipo de vehículo" />
          </div>

          <div class="tipos-field">
            <label class="tipos-label">
              Estado
            </label>

            <select class="tipos-select">
              <option value="true">
                Activo
              </option>

              <option value="false">
                Inactivo
              </option>
            </select>
          </div>

        </form>

        <footer class="tipos-modal-actions">
          <button type="button" class="tipos-secondary-button">
            Cancelar
          </button>

          <button type="button" class="tipos-primary-button">
            Guardar tipo
          </button>
        </footer>

      </div>
    </section>

    <!-- Modal confirmar desactivación -->
    <section class="tipos-confirm-backdrop" hidden>
      <div class="tipos-confirm-modal">

        <header class="tipos-confirm-header">
          <h2 class="tipos-confirm-title">
            Confirmar desactivación
          </h2>
        </header>

        <p class="tipos-confirm-text">
          ¿Seguro que deseas desactivar este tipo de vehículo? No se eliminará del sistema, pero dejará de estar
          disponible para nuevos registros.
        </p>

        <footer class="tipos-confirm-actions">
          <button type="button" class="tipos-secondary-button">
            Cancelar
          </button>

          <button type="button" class="tipos-danger-button">
            Confirmar desactivación
          </button>
        </footer>

      </div>
    </section>

    <BaseConfirmModal
      :abierto="confirmacionAbierta"
      titulo="Confirmar desactivacion"
      :mensaje="mensajeConfirmacion"
      texto-confirmar="Desactivar"
      tipo="danger"
      :cargando="guardando"
      @cancelar="cerrarConfirmacion"
      @confirmar="desactivarTipo"
    />

  </section>
</template>

<script setup lang="ts">
import TipoVehiculoCard from '~/components/tipos/TipoVehiculoCard.vue'
import TipoVehiculoForm from '~/components/tipos/TipoVehiculoForm.vue'
import type { TipoVehiculo } from '~/types/tipoVehiculo'
import { getApiErrorMessage } from '~/utils/getApiErrorMessage'

interface TipoVehiculoPayload {
  nombre: string
  descripcion: string
  valor_diario: number | string | null
  activo: boolean
}

const tipos = ref<TipoVehiculo[]>([])

const busqueda = ref('')
const filtroEstado = ref('')

const modalAbierto = ref(false)
const confirmacionAbierta = ref(false)
const modoFormulario = ref<'crear' | 'editar'>('crear')
const elementoSeleccionado = ref<TipoVehiculo | null>(null)

const cargando = ref(false)
const guardando = ref(false)
const mensajeError = ref('')
const mensajeExito = ref('')

const tiposFiltrados = computed(() => {
  const texto = busqueda.value.trim().toLowerCase()

  return tipos.value.filter((tipo) => {
    const coincideTexto = !texto
      || tipo.nombre.toLowerCase().includes(texto)
      || tipo.descripcion.toLowerCase().includes(texto)

    const coincideEstado = !filtroEstado.value
      || (filtroEstado.value === 'activo' && tipo.activo)
      || (filtroEstado.value === 'inactivo' && !tipo.activo)

    return coincideTexto && coincideEstado
  })
})

const tiposActivos = computed(() => tipos.value.filter((tipo) => tipo.activo).length)
const tiposInactivos = computed(() => tipos.value.filter((tipo) => !tipo.activo).length)

const mensajeConfirmacion = computed(() => {
  if (!elementoSeleccionado.value) {
    return 'Seguro que deseas desactivar este tipo de vehiculo?'
  }

  return `Seguro que deseas desactivar "${elementoSeleccionado.value.nombre}"?`
})

async function cargarTipos() {
  cargando.value = true
  limpiarMensajes()

  try {
    tipos.value = await $fetch<TipoVehiculo[]>('/api/tipos?incluirInactivos=true')
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudieron cargar los tipos de vehiculo')
  }
  finally {
    cargando.value = false
  }
}

function limpiarMensajes() {
  mensajeError.value = ''
  mensajeExito.value = ''
}

function abrirModalCrear() {
  limpiarMensajes()
  modoFormulario.value = 'crear'
  elementoSeleccionado.value = null
  modalAbierto.value = true
}

function abrirModalEditar(tipo: TipoVehiculo) {
  limpiarMensajes()
  modoFormulario.value = 'editar'
  elementoSeleccionado.value = tipo
  modalAbierto.value = true
}

function cerrarModal() {
  modalAbierto.value = false
  elementoSeleccionado.value = null
}

async function guardarTipo(payload: TipoVehiculoPayload) {
  limpiarMensajes()
  guardando.value = true

  try {
    const body = {
      nombre: payload.nombre,
      descripcion: payload.descripcion,
      valor_diario: Number(payload.valor_diario),
    }

    if (modoFormulario.value === 'crear') {
      await $fetch('/api/tipos', {
        method: 'POST',
        body,
      })

      mensajeExito.value = 'Tipo de vehiculo creado correctamente'
    }
    else if (elementoSeleccionado.value) {
      await $fetch(`/api/tipos/${elementoSeleccionado.value.id}`, {
        method: 'PUT',
        body,
      })

      mensajeExito.value = 'Tipo de vehiculo actualizado correctamente'
    }

    cerrarModal()
    await cargarTipos()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo guardar el tipo de vehiculo')
  }
  finally {
    guardando.value = false
  }
}

function pedirDesactivar(tipo: TipoVehiculo) {
  limpiarMensajes()
  elementoSeleccionado.value = tipo
  confirmacionAbierta.value = true
}

function cerrarConfirmacion() {
  confirmacionAbierta.value = false
  elementoSeleccionado.value = null
}

async function desactivarTipo() {
  if (!elementoSeleccionado.value) {
    return
  }

  guardando.value = true
  limpiarMensajes()

  try {
    await $fetch(`/api/tipos/${elementoSeleccionado.value.id}`, {
      method: 'DELETE',
    })

    mensajeExito.value = 'Tipo de vehiculo desactivado correctamente'
    cerrarConfirmacion()
    await cargarTipos()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo desactivar el tipo de vehiculo')
  }
  finally {
    guardando.value = false
  }
}

function mostrarPendienteActivar() {
  mensajeError.value = 'El backend actual no tiene endpoint para reactivar tipos de vehiculo'
}

onMounted(() => {
  cargarTipos()
})
// Lógica pendiente para después:
//
// 1. Importar type TipoVehiculo.
// 2. Verificar que solo el administrador pueda entrar a esta página.
// 3. Cargar tipos desde GET /api/tipos.
// 4. Filtrar por nombre o descripción.
// 5. Filtrar por estado activo / inactivo.
// 6. Abrir modal para crear tipo.
// 7. Abrir modal para editar tipo.
// 8. Crear tipo con POST /api/tipos.
// 9. Editar tipo con PUT /api/tipos/:id.
// 10. Desactivar tipo usando activo: false.
//
// Campos reales según schema.prisma:
// nombre, descripcion, valor_diario, activo.
//
// Regla importante:
// - No se elimina físicamente el tipo de vehículo.
// - Para desactivarlo se usa activo: false.
// - valor_diario debe ser un número mayor o igual a 0.
</script>
