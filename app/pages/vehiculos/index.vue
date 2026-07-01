<template>
  <!-- Página de vehículos -->
  <section class="vehicles-page">

    <!-- Encabezado de la página -->
    <header class="vehicles-header">
      <div>
        <h1 class="vehicles-title">
          Vehículos
        </h1>

        <p class="vehicles-description">
          Gestiona los vehículos del sistema, su disponibilidad, mantenimiento y estado de baja.
        </p>
      </div>

      <!-- Acción principal -->
      <div class="vehicles-header-actions">
        <button v-if="esAdministrador" type="button" class="vehicles-primary-button" @click="abrirModalCrear">
          Nuevo vehículo
        </button>
      </div>
    </header>

    <!-- Tarjetas resumen -->
    <section class="vehicles-summary-grid">

      <article class="vehicles-summary-card">
        <span class="vehicles-summary-label">
          Disponibles
        </span>

        <strong class="vehicles-summary-value">
          {{ resumen.disponible }}
        </strong>

        <p class="vehicles-summary-text">
          Vehículos listos para arriendo
        </p>
      </article>

      <article class="vehicles-summary-card">
        <span class="vehicles-summary-label">
          Arrendados
        </span>

        <strong class="vehicles-summary-value">
          {{ resumen.arrendado }}
        </strong>

        <p class="vehicles-summary-text">
          Vehículos con arriendo vigente
        </p>
      </article>

      <article class="vehicles-summary-card">
        <span class="vehicles-summary-label">
          En mantenimiento
        </span>

        <strong class="vehicles-summary-value">
          {{ resumen.en_mantenimiento }}
        </strong>

        <p class="vehicles-summary-text">
          Vehículos no disponibles temporalmente
        </p>
      </article>

      <article class="vehicles-summary-card">
        <span class="vehicles-summary-label">
          De baja
        </span>

        <strong class="vehicles-summary-value">
          {{ resumen.de_baja }}
        </strong>

        <p class="vehicles-summary-text">
          Vehículos inactivos del sistema
        </p>
      </article>

    </section>

    <!-- Filtros -->
    <section class="vehicles-filters-card">

      <div class="vehicles-filters-grid">

        <!-- Buscador -->
        <div class="vehicles-field">
          <label class="vehicles-label">
            Buscar vehículo
          </label>

          <input v-model="busqueda" type="text" class="vehicles-input" placeholder="Buscar por patente, marca o modelo">
        </div>

        <!-- Filtro estado -->
        <div class="vehicles-field">
          <label class="vehicles-label">
            Estado
          </label>

          <select v-model="filtroEstado" class="vehicles-select">
            <option value="">
              Todos los estados
            </option>
            <option value="disponible">
              Disponible
            </option>
            <option value="arrendado">
              Arrendado
            </option>
            <option value="en_mantenimiento">
              En mantenimiento
            </option>
            <option value="de_baja">
              De baja
            </option>
          </select>
        </div>

      </div>

    </section>

    <!-- Listado de vehículos -->
    <div v-if="mensajeError" class="mb-4 rounded-lg bg-red-50 p-4 text-sm font-bold text-red-800">
      {{ mensajeError }}
    </div>

    <div v-if="mensajeExito" class="mb-4 rounded-lg bg-green-50 p-4 text-sm font-bold text-green-800">
      {{ mensajeExito }}
    </div>

    <section v-if="cargando" class="rounded-lg bg-white p-6 text-center text-sm font-bold text-slate-600">
      Cargando vehiculos...
    </section>

    <section v-else-if="vehiculosFiltrados.length > 0" class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <VehiculoCard
        v-for="vehiculo in vehiculosFiltrados"
        :key="vehiculo.id"
        :vehiculo="vehiculo"
        @editar="abrirModalEditar"
        @cambiar-estado="pedirCambioEstado"
        @dar-baja="pedirDarBaja"
      />
    </section>

    <BaseEmptyState
      v-else
      titulo="No hay vehiculos para mostrar"
      mensaje="Cuando registres vehiculos, apareceran en esta seccion."
      accion-texto="Nuevo vehiculo"
      @accion="abrirModalCrear"
    />

    <section v-if="false" class="vehicles-grid">

      <!-- Card de ejemplo: luego se repetirá con v-for -->
      <article class="vehicles-card">

        <!-- Imagen -->
        <div class="vehicles-card-image">
          <span class="vehicles-card-image-text">
            Imagen del vehículo
          </span>
        </div>

        <!-- Contenido -->
        <div class="vehicles-card-content">

          <!-- Cabecera de la card -->
          <div class="vehicles-card-header">
            <div>
              <h2 class="vehicles-card-title">
                Toyota Corolla
              </h2>

              <p class="vehicles-card-subtitle">
                Patente: ABCD12
              </p>
            </div>

            <span class="vehicles-status vehicles-status-disponible">
              Disponible
            </span>
          </div>

          <!-- Datos principales -->
          <div class="vehicles-info-grid">

            <div class="vehicles-info-item">
              <span class="vehicles-info-label">
                Marca
              </span>

              <strong class="vehicles-info-value">
                Toyota
              </strong>
            </div>

            <div class="vehicles-info-item">
              <span class="vehicles-info-label">
                Modelo
              </span>

              <strong class="vehicles-info-value">
                Corolla
              </strong>
            </div>

            <div class="vehicles-info-item">
              <span class="vehicles-info-label">
                Año
              </span>

              <strong class="vehicles-info-value">
                2022
              </strong>
            </div>

            <div class="vehicles-info-item">
              <span class="vehicles-info-label">
                Color
              </span>

              <strong class="vehicles-info-value">
                Blanco
              </strong>
            </div>

            <div class="vehicles-info-item">
              <span class="vehicles-info-label">
                Tipo
              </span>

              <strong class="vehicles-info-value">
                Sedán
              </strong>
            </div>

            <div class="vehicles-info-item">
              <span class="vehicles-info-label">
                Valor diario
              </span>

              <strong class="vehicles-info-value">
                $35.000
              </strong>
            </div>

          </div>

          <!-- Acciones de la card -->
          <div class="vehicles-card-actions">

            <button type="button" class="vehicles-secondary-button">
              Editar
            </button>

            <button type="button" class="vehicles-warning-button">
              Mantenimiento
            </button>

            <button type="button" class="vehicles-danger-button">
              Dar de baja
            </button>

          </div>

        </div>

      </article>

    </section>

    <!-- Estado vacío: después se mostrará con v-if cuando no haya datos -->
    <section class="vehicles-empty" hidden>
      <h2 class="vehicles-empty-title">
        No hay vehículos para mostrar
      </h2>

      <p class="vehicles-empty-text">
        Cuando registres vehículos, aparecerán en esta sección.
      </p>
    </section>

    <!-- Modal crear / editar vehículo: después se controla con v-if -->
    <section v-if="modalAbierto" class="vehicles-modal-backdrop">
      <div class="vehicles-modal">
        <header class="vehicles-modal-header">
          <h2 class="vehicles-modal-title">
            {{ modoFormulario === 'crear' ? 'Nuevo vehiculo' : 'Editar vehiculo' }}
          </h2>

          <button type="button" class="vehicles-modal-close" @click="cerrarModal">
            x
          </button>
        </header>

        <div class="p-5">
          <VehiculoForm
            :vehiculo="elementoSeleccionado"
            :tipos="tipos"
            :guardando="guardando"
            :modo="modoFormulario"
            @guardar="guardarVehiculo"
            @cancelar="cerrarModal"
          />
        </div>
      </div>
    </section>

    <section v-if="estadoModalAbierto" class="vehicles-modal-backdrop">
      <div class="vehicles-confirm-modal">
        <header class="vehicles-confirm-header">
          <h2 class="vehicles-confirm-title">
            Cambiar estado
          </h2>
        </header>

        <div class="p-5">
          <label class="vehicles-label" for="nuevo-estado">
            Nuevo estado del vehiculo
          </label>

          <select id="nuevo-estado" v-model="nuevoEstado" class="vehicles-select mt-2">
            <option value="disponible">
              Disponible
            </option>
            <option value="en_mantenimiento">
              En mantenimiento
            </option>
            <option value="de_baja">
              De baja
            </option>
          </select>
        </div>

        <footer class="vehicles-confirm-actions">
          <button type="button" class="vehicles-secondary-button" :disabled="guardando" @click="cerrarEstadoModal">
            Cancelar
          </button>

          <button type="button" class="vehicles-warning-button" :disabled="guardando" @click="cambiarEstado">
            {{ guardando ? 'Guardando...' : 'Guardar estado' }}
          </button>
        </footer>
      </div>
    </section>

    <section class="vehicles-modal-backdrop" hidden>
      <div class="vehicles-modal">

        <header class="vehicles-modal-header">
          <h2 class="vehicles-modal-title">
            Nuevo vehículo
          </h2>

          <button type="button" class="vehicles-modal-close">
            ×
          </button>
        </header>

        <form class="vehicles-form">

          <!-- Tipo de vehículo -->
          <div class="vehicles-field">
            <label class="vehicles-label">
              Tipo de vehículo
            </label>

            <select class="vehicles-select">
              <option value="">
                Selecciona un tipo
              </option>
            </select>
          </div>

          <!-- Patente -->
          <div class="vehicles-field">
            <label class="vehicles-label">
              Patente
            </label>

            <input type="text" class="vehicles-input" placeholder="Ej: ABCD12">
          </div>

          <!-- Marca -->
          <div class="vehicles-field">
            <label class="vehicles-label">
              Marca
            </label>

            <input type="text" class="vehicles-input" placeholder="Ej: Toyota">
          </div>

          <!-- Modelo -->
          <div class="vehicles-field">
            <label class="vehicles-label">
              Modelo
            </label>

            <input type="text" class="vehicles-input" placeholder="Ej: Corolla">
          </div>

          <!-- Año -->
          <div class="vehicles-field">
            <label class="vehicles-label">
              Año
            </label>

            <input type="number" class="vehicles-input" placeholder="Ej: 2022">
          </div>

          <!-- Color -->
          <div class="vehicles-field">
            <label class="vehicles-label">
              Color
            </label>

            <input type="text" class="vehicles-input" placeholder="Ej: Blanco">
          </div>

          <!-- Estado -->
          <div class="vehicles-field">
            <label class="vehicles-label">
              Estado
            </label>

            <select class="vehicles-select">
              <option value="disponible">
                Disponible
              </option>
              <option value="en_mantenimiento">
                En mantenimiento
              </option>
              <option value="de_baja">
                De baja
              </option>
            </select>
          </div>

          <!-- Foto -->
          <div class="vehicles-field">
            <label class="vehicles-label">
              Foto del vehículo
            </label>

            <input type="file" class="vehicles-input" accept="image/png, image/jpeg, image/webp">
          </div>

        </form>

        <footer class="vehicles-modal-actions">
          <button type="button" class="vehicles-secondary-button">
            Cancelar
          </button>

          <button type="button" class="vehicles-primary-button">
            Guardar vehículo
          </button>
        </footer>

      </div>
    </section>

    <!-- Modal confirmar baja: después se controla con v-if -->
    <section class="vehicles-confirm-backdrop" hidden>
      <div class="vehicles-confirm-modal">

        <header class="vehicles-confirm-header">
          <h2 class="vehicles-confirm-title">
            Confirmar baja
          </h2>
        </header>

        <p class="vehicles-confirm-text">
          ¿Seguro que deseas dar de baja este vehículo? Esta acción no lo elimina, pero lo dejará inactivo.
        </p>

        <footer class="vehicles-confirm-actions">
          <button type="button" class="vehicles-secondary-button">
            Cancelar
          </button>

          <button type="button" class="vehicles-danger-button">
            Confirmar baja
          </button>
        </footer>

      </div>
    </section>

    <BaseConfirmModal
      :abierto="confirmacionAbierta"
      titulo="Confirmar baja"
      :mensaje="mensajeConfirmacion"
      texto-confirmar="Dar de baja"
      tipo="danger"
      :cargando="guardando"
      @cancelar="cerrarConfirmacion"
      @confirmar="darBajaVehiculo"
    />

  </section>
</template>

<script setup lang="ts">
import VehiculoCard from '~/components/vehiculos/VehiculoCard.vue'
import VehiculoForm from '~/components/vehiculos/VehiculoForm.vue'
import type { TipoVehiculo } from '~/types/tipoVehiculo'
import type { EstadoVehiculo, Vehiculo } from '~/types/vehiculo'
import { getApiErrorMessage } from '~/utils/getApiErrorMessage'
import { isAdmin } from '~/utils/permissions'
import { subirImagen } from '~/utils/uploadImagenes'

interface VehiculoPayload {
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

const { user } = useUserSession()

const vehiculos = ref<Vehiculo[]>([])
const tipos = ref<TipoVehiculo[]>([])

const busqueda = ref('')
const filtroEstado = ref('')

const modalAbierto = ref(false)
const estadoModalAbierto = ref(false)
const confirmacionAbierta = ref(false)
const modoFormulario = ref<'crear' | 'editar'>('crear')
const elementoSeleccionado = ref<Vehiculo | null>(null)
const nuevoEstado = ref<EstadoVehiculo>('disponible')

const cargando = ref(false)
const guardando = ref(false)
const mensajeError = ref('')
const mensajeExito = ref('')

const esAdministrador = computed(() => isAdmin(user.value))

const vehiculosFiltrados = computed(() => {
  const texto = busqueda.value.trim().toLowerCase()

  return vehiculos.value.filter((vehiculo) => {
    const coincideTexto = !texto
      || vehiculo.patente.toLowerCase().includes(texto)
      || vehiculo.marca.toLowerCase().includes(texto)
      || vehiculo.modelo.toLowerCase().includes(texto)

    const coincideEstado = !filtroEstado.value || vehiculo.estado === filtroEstado.value

    return coincideTexto && coincideEstado
  })
})

const resumen = computed(() => {
  return {
    disponible: contarPorEstado('disponible'),
    arrendado: contarPorEstado('arrendado'),
    en_mantenimiento: contarPorEstado('en_mantenimiento'),
    de_baja: contarPorEstado('de_baja'),
  }
})

const mensajeConfirmacion = computed(() => {
  if (!elementoSeleccionado.value) {
    return 'Seguro que deseas dar de baja este vehiculo?'
  }

  return `Seguro que deseas dar de baja ${elementoSeleccionado.value.marca} ${elementoSeleccionado.value.modelo}?`
})

async function cargarDatos() {
  cargando.value = true
  limpiarMensajes()

  try {
    await Promise.all([
      cargarVehiculos(),
      cargarTipos(),
    ])
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudieron cargar los datos')
  }
  finally {
    cargando.value = false
  }
}

async function cargarVehiculos() {
  vehiculos.value = await $fetch<Vehiculo[]>('/api/vehiculos')
}

async function cargarTipos() {
  tipos.value = await $fetch<TipoVehiculo[]>('/api/tipos')
}

function limpiarMensajes() {
  mensajeError.value = ''
  mensajeExito.value = ''
}

function abrirModalCrear() {
  limpiarMensajes()

  if (!esAdministrador.value) {
    mensajeError.value = 'Solo el administrador puede crear vehiculos'
    return
  }

  modoFormulario.value = 'crear'
  elementoSeleccionado.value = null
  modalAbierto.value = true
}

function abrirModalEditar(vehiculo: Vehiculo) {
  limpiarMensajes()

  if (!esAdministrador.value) {
    mensajeError.value = 'Solo el administrador puede editar vehiculos'
    return
  }

  modoFormulario.value = 'editar'
  elementoSeleccionado.value = vehiculo
  modalAbierto.value = true
}

function cerrarModal() {
  modalAbierto.value = false
  elementoSeleccionado.value = null
}

async function guardarVehiculo(payload: VehiculoPayload) {
  limpiarMensajes()
  guardando.value = true

  try {
    let fotoUrl = payload.foto_url

    if (payload.fotoFile) {
      fotoUrl = await subirImagen(payload.fotoFile)
    }

    const body = {
      tipo_id: payload.tipo_id,
      patente: payload.patente,
      marca: payload.marca,
      modelo: payload.modelo,
      anio: payload.anio,
      color: payload.color,
      estado: payload.estado,
      foto_url: fotoUrl,
      activo: payload.activo,
    }

    if (modoFormulario.value === 'crear') {
      await $fetch('/api/vehiculos', {
        method: 'POST',
        body,
      })

      mensajeExito.value = 'Vehiculo creado correctamente'
    }
    else if (elementoSeleccionado.value) {
      await $fetch(`/api/vehiculos/${elementoSeleccionado.value.id}`, {
        method: 'PUT',
        body,
      })

      mensajeExito.value = 'Vehiculo actualizado correctamente'
    }

    cerrarModal()
    await cargarVehiculos()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo guardar el vehiculo')
  }
  finally {
    guardando.value = false
  }
}

function pedirCambioEstado(vehiculo: Vehiculo) {
  limpiarMensajes()
  elementoSeleccionado.value = vehiculo
  nuevoEstado.value = vehiculo.estado === 'arrendado' ? 'disponible' : vehiculo.estado
  estadoModalAbierto.value = true
}

function cerrarEstadoModal() {
  estadoModalAbierto.value = false
  elementoSeleccionado.value = null
}

async function cambiarEstado() {
  if (!elementoSeleccionado.value) {
    return
  }

  guardando.value = true
  limpiarMensajes()

  try {
    await $fetch(`/api/vehiculos/${elementoSeleccionado.value.id}/estado`, {
      method: 'PATCH',
      body: {
        estado: nuevoEstado.value,
      },
    })

    mensajeExito.value = 'Estado del vehiculo actualizado'
    cerrarEstadoModal()
    await cargarVehiculos()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo cambiar el estado del vehiculo')
  }
  finally {
    guardando.value = false
  }
}

function pedirDarBaja(vehiculo: Vehiculo) {
  limpiarMensajes()

  if (!esAdministrador.value) {
    mensajeError.value = 'Solo el administrador puede dar de baja vehiculos'
    return
  }

  elementoSeleccionado.value = vehiculo
  confirmacionAbierta.value = true
}

function cerrarConfirmacion() {
  confirmacionAbierta.value = false
  elementoSeleccionado.value = null
}

async function darBajaVehiculo() {
  if (!elementoSeleccionado.value) {
    return
  }

  guardando.value = true
  limpiarMensajes()

  try {
    await $fetch(`/api/vehiculos/${elementoSeleccionado.value.id}`, {
      method: 'DELETE',
    })

    mensajeExito.value = 'Vehiculo dado de baja correctamente'
    cerrarConfirmacion()
    await cargarVehiculos()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo dar de baja el vehiculo')
  }
  finally {
    guardando.value = false
  }
}

function contarPorEstado(estado: EstadoVehiculo) {
  return vehiculos.value.filter((vehiculo) => vehiculo.estado === estado).length
}

onMounted(() => {
  cargarDatos()
})
// Lógica pendiente para después:
//
// 1. Importar el type Vehiculo.
// 2. Obtener la sesión con useUserSession().
// 3. Detectar si el usuario es administrador o ejecutivo.
// 4. Cargar vehículos desde GET /api/vehiculos.
// 5. Cargar tipos de vehículo para el formulario.
// 6. Filtrar por texto y estado.
// 7. Abrir modal para crear vehículo.
// 8. Abrir modal para editar vehículo.
// 9. Crear vehículo con POST /api/vehiculos.
// 10. Editar vehículo con PUT /api/vehiculos/:id.
// 11. Cambiar estado con PATCH /api/vehiculos/:id/estado.
// 12. Dar de baja con DELETE /api/vehiculos/:id.
//
// Campos reales según schema.prisma:
// tipo_id, patente, marca, modelo, anio, color, estado, foto_url, activo.
//
// Reglas importantes:
// - Ejecutivo no puede cambiar patente, tipo_id, estado ni activo.
// - Administrador no puede poner estado arrendado manualmente.
// - Vehículo de_baja no se reactiva desde esta página.
</script>
