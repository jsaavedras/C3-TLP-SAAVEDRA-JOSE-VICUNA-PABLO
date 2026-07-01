<template>
  <!-- Página de clientes -->
  <section class="clientes-page">

    <!-- Encabezado -->
    <header class="clientes-header">
      <div>
        <h1 class="clientes-title">
          Clientes
        </h1>

        <p class="clientes-description">
          Gestiona los clientes registrados, sus datos de contacto, licencia de conducir y estado en el sistema.
        </p>
      </div>

      <div class="clientes-header-actions">
        <button type="button" class="clientes-primary-button" @click="abrirModalCrear">
          Nuevo cliente
        </button>
      </div>
    </header>

    <!-- Resumen -->
    <section class="clientes-summary-grid">

      <article class="clientes-summary-card">
        <span class="clientes-summary-label">
          Clientes activos
        </span>

        <strong class="clientes-summary-value">
          {{ clientesActivos }}
        </strong>

        <p class="clientes-summary-text">
          Clientes habilitados para arrendar
        </p>
      </article>

      <article class="clientes-summary-card">
        <span class="clientes-summary-label">
          Clientes inactivos
        </span>

        <strong class="clientes-summary-value">
          {{ clientesInactivos }}
        </strong>

        <p class="clientes-summary-text">
          Clientes desactivados del sistema
        </p>
      </article>

      <article class="clientes-summary-card">
        <span class="clientes-summary-label">
          Total clientes
        </span>

        <strong class="clientes-summary-value">
          {{ clientes.length }}
        </strong>

        <p class="clientes-summary-text">
          Registros históricos de clientes
        </p>
      </article>

    </section>

    <!-- Filtros -->
    <section class="clientes-filters-card">

      <div class="clientes-filters-grid">

        <div class="clientes-field">
          <label class="clientes-label">
            Buscar cliente
          </label>

          <input v-model="busqueda" type="text" class="clientes-input" placeholder="Buscar por RUT, nombre, apellido o correo">
        </div>

        <div class="clientes-field">
          <label class="clientes-label">
            Estado
          </label>

          <select v-model="filtroEstado" class="clientes-select">
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
      Cargando clientes...
    </section>

    <section v-else-if="clientesFiltrados.length > 0" class="clientes-table-card">
      <div class="clientes-table-wrapper">
        <table class="clientes-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>RUT</th>
              <th>Correo</th>
              <th>Telefono</th>
              <th>Licencia</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="cliente in clientesFiltrados" :key="cliente.id">
              <td>{{ cliente.nombres }} {{ cliente.apellidos }}</td>
              <td>{{ cliente.rut }}</td>
              <td>{{ cliente.email }}</td>
              <td>{{ cliente.telefono }}</td>
              <td>{{ cliente.licencia_conducir }}</td>
              <td>
                <BaseStatusBadge :tipo="cliente.activo ? 'activo' : 'inactivo'" />
              </td>
              <td>
                <div class="clientes-table-actions">
                  <NuxtLink :to="`/clientes/${cliente.id}`" class="clientes-secondary-link">
                    Ver detalle
                  </NuxtLink>

                  <button type="button" class="clientes-secondary-button" @click="abrirModalEditar(cliente)">
                    Editar
                  </button>

                  <button
                    v-if="cliente.activo"
                    type="button"
                    class="clientes-danger-button"
                    @click="pedirDesactivar(cliente)"
                  >
                    Desactivar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <BaseEmptyState
      v-else
      titulo="No hay clientes para mostrar"
      mensaje="Cuando registres clientes, apareceran en esta seccion."
      accion-texto="Nuevo cliente"
      @accion="abrirModalCrear"
    />

    <!-- Tabla de clientes -->
    <section v-if="false" class="clientes-table-card">

      <div class="clientes-table-wrapper">

        <table class="clientes-table">
          <thead>
            <tr>
              <th>Cliente</th>
              <th>RUT</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Licencia</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>

          <tbody>
            <!-- Fila de ejemplo: después se repetirá con v-for -->
            <tr>
              <td>
                Juan Pérez
              </td>

              <td>
                12.345.678-9
              </td>

              <td>
                juan@email.cl
              </td>

              <td>
                +56 9 1234 5678
              </td>

              <td>
                B123456
              </td>

              <td>
                <span class="clientes-status clientes-status-activo">
                  Activo
                </span>
              </td>

              <td>
                <div class="clientes-table-actions">
                  <NuxtLink to="/clientes/1" class="clientes-secondary-link">
                    Ver detalle
                  </NuxtLink>

                  <button type="button" class="clientes-secondary-button">
                    Editar
                  </button>

                  <button type="button" class="clientes-danger-button">
                    Desactivar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </section>

    <!-- Vista móvil -->
    <section v-if="false" class="clientes-mobile-list">

      <!-- Card de ejemplo: después se repetirá con v-for -->
      <article class="clientes-mobile-card">

        <header class="clientes-mobile-card-header">
          <div>
            <h2 class="clientes-mobile-card-title">
              Juan Pérez
            </h2>

            <p class="clientes-mobile-card-subtitle">
              12.345.678-9 · juan@email.cl
            </p>
          </div>

          <span class="clientes-status clientes-status-activo">
            Activo
          </span>
        </header>

        <div class="clientes-mobile-info-grid">

          <div class="clientes-mobile-info-item">
            <span class="clientes-mobile-info-label">
              Teléfono
            </span>

            <strong class="clientes-mobile-info-value">
              +56 9 1234 5678
            </strong>
          </div>

          <div class="clientes-mobile-info-item">
            <span class="clientes-mobile-info-label">
              Licencia
            </span>

            <strong class="clientes-mobile-info-value">
              B123456
            </strong>
          </div>

          <div class="clientes-mobile-info-item">
            <span class="clientes-mobile-info-label">
              Dirección
            </span>

            <strong class="clientes-mobile-info-value">
              Av. Principal 123
            </strong>
          </div>

        </div>

        <footer class="clientes-mobile-actions">
          <NuxtLink to="/clientes/1" class="clientes-secondary-link">
            Ver detalle
          </NuxtLink>

          <button type="button" class="clientes-secondary-button">
            Editar
          </button>

          <button type="button" class="clientes-danger-button">
            Desactivar
          </button>
        </footer>

      </article>

    </section>

    <!-- Estado vacío -->
    <section class="clientes-empty" hidden>
      <h2 class="clientes-empty-title">
        No hay clientes para mostrar
      </h2>

      <p class="clientes-empty-text">
        Cuando registres clientes, aparecerán en esta sección.
      </p>
    </section>

    <!-- Modal crear / editar cliente -->
    <section v-if="modalAbierto" class="clientes-modal-backdrop">
      <div class="clientes-modal">
        <header class="clientes-modal-header">
          <h2 class="clientes-modal-title">
            {{ modoFormulario === 'crear' ? 'Nuevo cliente' : 'Editar cliente' }}
          </h2>

          <button type="button" class="clientes-modal-close" @click="cerrarModal">
            x
          </button>
        </header>

        <div class="p-5">
          <ClienteForm
            :cliente="elementoSeleccionado"
            :guardando="guardando"
            :modo="modoFormulario"
            @guardar="guardarCliente"
            @cancelar="cerrarModal"
          />
        </div>
      </div>
    </section>

    <section class="clientes-modal-backdrop" hidden>
      <div class="clientes-modal">

        <header class="clientes-modal-header">
          <h2 class="clientes-modal-title">
            Nuevo cliente
          </h2>

          <button type="button" class="clientes-modal-close">
            ×
          </button>
        </header>

        <form class="clientes-form">

          <div class="clientes-field">
            <label class="clientes-label">
              RUT
            </label>

            <input type="text" class="clientes-input" placeholder="Ej: 12.345.678-9">
          </div>

          <div class="clientes-field">
            <label class="clientes-label">
              Nombres
            </label>

            <input type="text" class="clientes-input" placeholder="Ej: Juan">
          </div>

          <div class="clientes-field">
            <label class="clientes-label">
              Apellidos
            </label>

            <input type="text" class="clientes-input" placeholder="Ej: Pérez">
          </div>

          <div class="clientes-field">
            <label class="clientes-label">
              Correo electrónico
            </label>

            <input type="email" class="clientes-input" placeholder="Ej: cliente@email.cl">
          </div>

          <div class="clientes-field">
            <label class="clientes-label">
              Teléfono
            </label>

            <input type="text" class="clientes-input" placeholder="Ej: +56 9 1234 5678">
          </div>

          <div class="clientes-field">
            <label class="clientes-label">
              Licencia de conducir
            </label>

            <input type="text" class="clientes-input" placeholder="Ej: B123456">
          </div>

          <div class="clientes-field clientes-field-full">
            <label class="clientes-label">
              Dirección
            </label>

            <input type="text" class="clientes-input" placeholder="Ej: Av. Principal 123">
          </div>

        </form>

        <footer class="clientes-modal-actions">
          <button type="button" class="clientes-secondary-button">
            Cancelar
          </button>

          <button type="button" class="clientes-primary-button">
            Guardar cliente
          </button>
        </footer>

      </div>
    </section>

    <!-- Modal confirmar desactivación -->
    <section class="clientes-confirm-backdrop" hidden>
      <div class="clientes-confirm-modal">

        <header class="clientes-confirm-header">
          <h2 class="clientes-confirm-title">
            Confirmar desactivación
          </h2>
        </header>

        <p class="clientes-confirm-text">
          ¿Seguro que deseas desactivar este cliente? No se eliminará del sistema, pero quedará inactivo.
        </p>

        <footer class="clientes-confirm-actions">
          <button type="button" class="clientes-secondary-button">
            Cancelar
          </button>

          <button type="button" class="clientes-danger-button">
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
      @confirmar="desactivarCliente"
    />

  </section>
</template>

<script setup lang="ts">
import type { Cliente } from '~/types/cliente'
import { getApiErrorMessage } from '~/utils/getApiErrorMessage'

interface ClientePayload {
  rut: string
  nombres: string
  apellidos: string
  email: string
  telefono: string
  direccion: string
  licencia_conducir: string
  activo: boolean
}

const clientes = ref<Cliente[]>([])

const busqueda = ref('')
const filtroEstado = ref('')

const modalAbierto = ref(false)
const confirmacionAbierta = ref(false)
const modoFormulario = ref<'crear' | 'editar'>('crear')
const elementoSeleccionado = ref<Cliente | null>(null)

const cargando = ref(false)
const guardando = ref(false)
const mensajeError = ref('')
const mensajeExito = ref('')

const clientesFiltrados = computed(() => {
  const texto = busqueda.value.trim().toLowerCase()

  return clientes.value.filter((cliente) => {
    const nombreCompleto = `${cliente.nombres} ${cliente.apellidos}`.toLowerCase()
    const coincideTexto = !texto
      || cliente.rut.toLowerCase().includes(texto)
      || nombreCompleto.includes(texto)
      || cliente.email.toLowerCase().includes(texto)

    const coincideEstado = !filtroEstado.value
      || (filtroEstado.value === 'activo' && cliente.activo)
      || (filtroEstado.value === 'inactivo' && !cliente.activo)

    return coincideTexto && coincideEstado
  })
})

const clientesActivos = computed(() => clientes.value.filter((cliente) => cliente.activo).length)
const clientesInactivos = computed(() => clientes.value.filter((cliente) => !cliente.activo).length)

const mensajeConfirmacion = computed(() => {
  if (!elementoSeleccionado.value) {
    return 'Seguro que deseas desactivar este cliente?'
  }

  return `Seguro que deseas desactivar a ${elementoSeleccionado.value.nombres} ${elementoSeleccionado.value.apellidos}?`
})

async function cargarClientes() {
  cargando.value = true
  limpiarMensajes()

  try {
    clientes.value = await $fetch<Cliente[]>('/api/clientes')
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudieron cargar los clientes')
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

function abrirModalEditar(cliente: Cliente) {
  limpiarMensajes()
  modoFormulario.value = 'editar'
  elementoSeleccionado.value = cliente
  modalAbierto.value = true
}

function cerrarModal() {
  modalAbierto.value = false
  elementoSeleccionado.value = null
}

async function guardarCliente(payload: ClientePayload) {
  limpiarMensajes()
  guardando.value = true

  try {
    if (modoFormulario.value === 'crear') {
      await $fetch('/api/clientes', {
        method: 'POST',
        body: payload,
      })

      mensajeExito.value = 'Cliente creado correctamente'
    }
    else if (elementoSeleccionado.value) {
      await $fetch(`/api/clientes/${elementoSeleccionado.value.id}`, {
        method: 'PUT',
        body: payload,
      })

      mensajeExito.value = 'Cliente actualizado correctamente'
    }

    cerrarModal()
    await cargarClientes()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo guardar el cliente')
  }
  finally {
    guardando.value = false
  }
}

function pedirDesactivar(cliente: Cliente) {
  limpiarMensajes()
  elementoSeleccionado.value = cliente
  confirmacionAbierta.value = true
}

function cerrarConfirmacion() {
  confirmacionAbierta.value = false
  elementoSeleccionado.value = null
}

async function desactivarCliente() {
  if (!elementoSeleccionado.value) {
    return
  }

  guardando.value = true
  limpiarMensajes()

  try {
    await $fetch(`/api/clientes/${elementoSeleccionado.value.id}`, {
      method: 'DELETE',
    })

    mensajeExito.value = 'Cliente desactivado correctamente'
    cerrarConfirmacion()
    await cargarClientes()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo desactivar el cliente')
  }
  finally {
    guardando.value = false
  }
}

onMounted(() => {
  cargarClientes()
})
// Lógica pendiente para después:
//
// 1. Importar type Cliente.
// 2. Cargar clientes desde GET /api/clientes.
// 3. Filtrar por texto: rut, nombres, apellidos o email.
// 4. Filtrar por estado activo / inactivo.
// 5. Abrir modal para crear cliente.
// 6. Abrir modal para editar cliente.
// 7. Crear cliente con POST /api/clientes.
// 8. Editar cliente con PUT /api/clientes/:id.
// 9. Desactivar cliente con confirmación.
//
// Campos reales según schema.prisma:
// rut, nombres, apellidos, email, telefono,
// direccion, licencia_conducir, activo.
//
// Regla importante:
// - No se elimina físicamente el cliente.
// - Para darlo de baja se usa activo: false.
</script>
