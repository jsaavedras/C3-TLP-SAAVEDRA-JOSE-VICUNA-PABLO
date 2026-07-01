<template>
  <!-- Página detalle de cliente -->
  <section class="cliente-detail-page">

    <!-- Encabezado -->
    <header class="cliente-detail-header">
      <div>
        <h1 class="cliente-detail-title">
          Detalle del cliente
        </h1>

        <p class="cliente-detail-description">
          Revisa la información personal, datos de contacto, licencia de conducir e historial de arriendos del cliente.
        </p>
      </div>

      <div class="cliente-detail-header-actions">
        <NuxtLink to="/clientes" class="cliente-detail-secondary-link">
          Volver a clientes
        </NuxtLink>

        <button v-if="cliente" type="button" class="cliente-detail-primary-button" @click="abrirModalEditar">
          Editar cliente
        </button>

        <button v-if="cliente?.activo" type="button" class="cliente-detail-danger-button" @click="pedirDesactivar">
          Desactivar cliente
        </button>
      </div>
    </header>

    <div v-if="mensajeError" class="mb-4 rounded-lg bg-red-50 p-4 text-sm font-bold text-red-800">
      {{ mensajeError }}
    </div>

    <div v-if="mensajeExito" class="mb-4 rounded-lg bg-green-50 p-4 text-sm font-bold text-green-800">
      {{ mensajeExito }}
    </div>

    <section v-if="cargando" class="rounded-lg bg-white p-6 text-center text-sm font-bold text-slate-600">
      Cargando detalle del cliente...
    </section>

    <BaseEmptyState
      v-else-if="!cliente"
      titulo="Cliente no encontrado"
      mensaje="No fue posible cargar el cliente solicitado."
      accion-texto="Volver a clientes"
      @accion="volverAlListado"
    />

    <section v-else class="grid gap-6 xl:grid-cols-[1fr_320px]">
      <div class="space-y-6">
        <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wide text-slate-500">
                Estado del cliente
              </span>

              <h2 class="mt-1 text-xl font-bold text-slate-900">
                {{ cliente.activo ? 'Cliente activo' : 'Cliente inactivo' }}
              </h2>

              <p class="mt-1 text-sm text-slate-600">
                {{ cliente.activo ? 'Este cliente esta habilitado para realizar arriendos.' : 'Este cliente esta desactivado.' }}
              </p>
            </div>

            <BaseStatusBadge :tipo="cliente.activo ? 'activo' : 'inactivo'" />
          </div>
        </article>

        <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <header class="mb-4">
            <h2 class="text-lg font-bold text-slate-900">
              Informacion del cliente
            </h2>
            <p class="text-sm text-slate-600">
              Datos principales registrados para identificar y contactar al cliente.
            </p>
          </header>

          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">Nombres</span>
              <p class="font-bold text-slate-900">{{ cliente.nombres }}</p>
            </div>
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">Apellidos</span>
              <p class="font-bold text-slate-900">{{ cliente.apellidos }}</p>
            </div>
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">RUT</span>
              <p class="font-bold text-slate-900">{{ cliente.rut }}</p>
            </div>
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">Licencia</span>
              <p class="font-bold text-slate-900">{{ cliente.licencia_conducir }}</p>
            </div>
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">Correo</span>
              <p class="font-bold text-slate-900">{{ cliente.email }}</p>
            </div>
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">Telefono</span>
              <p class="font-bold text-slate-900">{{ cliente.telefono }}</p>
            </div>
            <div class="sm:col-span-2">
              <span class="text-xs font-bold uppercase text-slate-500">Direccion</span>
              <p class="font-bold text-slate-900">{{ cliente.direccion }}</p>
            </div>
          </div>
        </article>

        <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <header class="mb-4">
            <h2 class="text-lg font-bold text-slate-900">
              Historial de arriendos
            </h2>
            <p class="text-sm text-slate-600">
              Arriendos vigentes y finalizados asociados a este cliente.
            </p>
          </header>

          <div v-if="arriendosCliente.length > 0" class="grid gap-4">
            <ArriendoCard
              v-for="arriendo in arriendosCliente"
              :key="arriendo.id"
              :arriendo="arriendo"
              @ver-detalle="verArriendo"
              @registrar-devolucion="registrarDevolucion"
            />
          </div>

          <BaseEmptyState
            v-else
            titulo="Sin arriendos registrados"
            mensaje="Este cliente todavia no tiene arriendos asociados."
          />
        </article>
      </div>

      <aside class="space-y-6">
        <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 class="mb-4 text-lg font-bold text-slate-900">
            Resumen
          </h2>

          <div class="space-y-3 text-sm">
            <div class="flex justify-between gap-4">
              <span class="text-slate-500">Arriendos vigentes</span>
              <strong class="text-slate-900">{{ resumen.vigentes }}</strong>
            </div>
            <div class="flex justify-between gap-4">
              <span class="text-slate-500">Arriendos finalizados</span>
              <strong class="text-slate-900">{{ resumen.finalizados }}</strong>
            </div>
            <div class="flex justify-between gap-4">
              <span class="text-slate-500">Total de arriendos</span>
              <strong class="text-slate-900">{{ arriendosCliente.length }}</strong>
            </div>
            <div class="border-t border-slate-200 pt-3">
              <span class="text-slate-500">Total historico</span>
              <strong class="mt-1 block text-2xl text-slate-900">{{ formatCurrency(resumen.totalHistorico) }}</strong>
            </div>
          </div>
        </article>

        <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 class="mb-4 text-lg font-bold text-slate-900">
            Registro
          </h2>

          <div class="space-y-3 text-sm">
            <div>
              <span class="text-slate-500">Creado el</span>
              <strong class="block text-slate-900">{{ formatDate(cliente.created_at) }}</strong>
            </div>
            <div>
              <span class="text-slate-500">Actualizado el</span>
              <strong class="block text-slate-900">{{ formatDate(cliente.updated_at) }}</strong>
            </div>
          </div>
        </article>
      </aside>
    </section>

    <section v-if="modalAbierto" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
      <div class="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
        <header class="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-slate-900">
              Editar cliente
            </h2>
            <p class="text-sm text-slate-600">
              Actualiza los datos principales del cliente.
            </p>
          </div>

          <button type="button" class="text-2xl font-bold text-slate-500 hover:text-slate-900" @click="cerrarModal">
            x
          </button>
        </header>

        <ClienteForm
          :cliente="cliente"
          modo="editar"
          :guardando="guardando"
          @guardar="guardarCliente"
          @cancelar="cerrarModal"
        />
      </div>
    </section>

    <BaseConfirmModal
      :abierto="confirmacionAbierta"
      titulo="Desactivar cliente"
      mensaje="Seguro que deseas desactivar este cliente? No se eliminara del sistema."
      texto-confirmar="Desactivar"
      tipo="danger"
      :cargando="guardando"
      @cancelar="cerrarConfirmacion"
      @confirmar="desactivarCliente"
    />

    <!-- Estado general del cliente -->
    <section v-if="false" class="cliente-detail-status-card">

      <div>
        <span class="cliente-detail-status-label">
          Estado del cliente
        </span>

        <strong class="cliente-detail-status-title">
          Cliente activo
        </strong>

        <p class="cliente-detail-status-text">
          Este cliente está habilitado para realizar arriendos en el sistema.
        </p>
      </div>

      <span class="cliente-detail-status-badge cliente-detail-status-activo">
        Activo
      </span>

    </section>

    <!-- Contenido principal -->
    <section v-if="false" class="cliente-detail-layout">

      <!-- Columna principal -->
      <div class="cliente-detail-main">

        <!-- Información del cliente -->
        <article class="cliente-detail-card">
          <header class="cliente-detail-card-header">
            <h2 class="cliente-detail-card-title">
              Información del cliente
            </h2>

            <p class="cliente-detail-card-description">
              Datos principales registrados para identificar y contactar al cliente.
            </p>
          </header>

          <div class="cliente-detail-info-grid">

            <div class="cliente-detail-info-item">
              <span class="cliente-detail-info-label">
                Nombres
              </span>

              <strong class="cliente-detail-info-value">
                Juan
              </strong>
            </div>

            <div class="cliente-detail-info-item">
              <span class="cliente-detail-info-label">
                Apellidos
              </span>

              <strong class="cliente-detail-info-value">
                Pérez
              </strong>
            </div>

            <div class="cliente-detail-info-item">
              <span class="cliente-detail-info-label">
                RUT
              </span>

              <strong class="cliente-detail-info-value">
                12.345.678-9
              </strong>
            </div>

            <div class="cliente-detail-info-item">
              <span class="cliente-detail-info-label">
                Licencia de conducir
              </span>

              <strong class="cliente-detail-info-value">
                B123456
              </strong>
            </div>

            <div class="cliente-detail-info-item">
              <span class="cliente-detail-info-label">
                Correo electrónico
              </span>

              <strong class="cliente-detail-info-value">
                juan@email.cl
              </strong>
            </div>

            <div class="cliente-detail-info-item">
              <span class="cliente-detail-info-label">
                Teléfono
              </span>

              <strong class="cliente-detail-info-value">
                +56 9 1234 5678
              </strong>
            </div>

            <div class="cliente-detail-info-item cliente-detail-info-full">
              <span class="cliente-detail-info-label">
                Dirección
              </span>

              <strong class="cliente-detail-info-value">
                Av. Principal 123, Viña del Mar
              </strong>
            </div>

          </div>
        </article>

        <!-- Historial de arriendos -->
        <article class="cliente-detail-card">
          <header class="cliente-detail-card-header">
            <h2 class="cliente-detail-card-title">
              Historial de arriendos
            </h2>

            <p class="cliente-detail-card-description">
              Arriendos asociados a este cliente dentro del sistema.
            </p>
          </header>

          <!-- Tabla historial -->
          <div class="cliente-detail-table-wrapper">

            <table class="cliente-detail-table">
              <thead>
                <tr>
                  <th>Vehículo</th>
                  <th>Patente</th>
                  <th>Inicio</th>
                  <th>Término</th>
                  <th>Estado</th>
                  <th>Total</th>
                  <th>Acción</th>
                </tr>
              </thead>

              <tbody>
                <!-- Fila de ejemplo: después se repetirá con v-for -->
                <tr>
                  <td>
                    Toyota Corolla
                  </td>

                  <td>
                    ABCD12
                  </td>

                  <td>
                    2026-01-01
                  </td>

                  <td>
                    2026-01-05
                  </td>

                  <td>
                    <span class="cliente-detail-rental-status cliente-detail-rental-vigente">
                      Vigente
                    </span>
                  </td>

                  <td>
                    $140.000
                  </td>

                  <td>
                    <NuxtLink to="/arriendos/1" class="cliente-detail-small-link">
                      Ver arriendo
                    </NuxtLink>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>

          <!-- Vista móvil historial -->
          <section class="cliente-detail-mobile-rentals">

            <article class="cliente-detail-mobile-rental-card">
              <header class="cliente-detail-mobile-rental-header">
                <div>
                  <h3 class="cliente-detail-mobile-rental-title">
                    Toyota Corolla
                  </h3>

                  <p class="cliente-detail-mobile-rental-subtitle">
                    ABCD12 · 2026-01-01 al 2026-01-05
                  </p>
                </div>

                <span class="cliente-detail-rental-status cliente-detail-rental-vigente">
                  Vigente
                </span>
              </header>

              <div class="cliente-detail-mobile-rental-info">
                <span class="cliente-detail-mobile-rental-label">
                  Total
                </span>

                <strong class="cliente-detail-mobile-rental-value">
                  $140.000
                </strong>
              </div>

              <footer class="cliente-detail-mobile-rental-actions">
                <NuxtLink to="/arriendos/1" class="cliente-detail-small-link">
                  Ver arriendo
                </NuxtLink>
              </footer>
            </article>

          </section>

          <!-- Estado vacío historial -->
          <section class="cliente-detail-empty-rentals" hidden>
            <h3 class="cliente-detail-empty-title">
              Sin arriendos registrados
            </h3>

            <p class="cliente-detail-empty-text">
              Este cliente todavía no tiene arriendos asociados.
            </p>
          </section>
        </article>

      </div>

      <!-- Columna lateral -->
      <aside class="cliente-detail-sidebar">

        <!-- Resumen -->
        <article class="cliente-detail-summary-card">
          <header class="cliente-detail-card-header">
            <h2 class="cliente-detail-card-title">
              Resumen
            </h2>
          </header>

          <div class="cliente-detail-summary-list">

            <div class="cliente-detail-summary-item">
              <span class="cliente-detail-summary-label">
                Arriendos vigentes
              </span>

              <strong class="cliente-detail-summary-value">
                1
              </strong>
            </div>

            <div class="cliente-detail-summary-item">
              <span class="cliente-detail-summary-label">
                Arriendos finalizados
              </span>

              <strong class="cliente-detail-summary-value">
                0
              </strong>
            </div>

            <div class="cliente-detail-summary-item">
              <span class="cliente-detail-summary-label">
                Total de arriendos
              </span>

              <strong class="cliente-detail-summary-value">
                1
              </strong>
            </div>

            <div class="cliente-detail-summary-total">
              <span class="cliente-detail-summary-total-label">
                Total histórico
              </span>

              <strong class="cliente-detail-summary-total-value">
                $140.000
              </strong>
            </div>

          </div>
        </article>

        <!-- Fechas del registro -->
        <article class="cliente-detail-summary-card">
          <header class="cliente-detail-card-header">
            <h2 class="cliente-detail-card-title">
              Registro
            </h2>
          </header>

          <div class="cliente-detail-summary-list">

            <div class="cliente-detail-summary-item">
              <span class="cliente-detail-summary-label">
                Creado el
              </span>

              <strong class="cliente-detail-summary-value">
                2026-01-01
              </strong>
            </div>

            <div class="cliente-detail-summary-item">
              <span class="cliente-detail-summary-label">
                Actualizado el
              </span>

              <strong class="cliente-detail-summary-value">
                2026-01-01
              </strong>
            </div>

          </div>
        </article>

      </aside>

    </section>

    <!-- Modal editar cliente: después se controla con v-if -->
    <section v-if="false" class="cliente-detail-modal-backdrop" hidden>
      <div class="cliente-detail-modal">

        <header class="cliente-detail-modal-header">
          <h2 class="cliente-detail-modal-title">
            Editar cliente
          </h2>

          <button type="button" class="cliente-detail-modal-close">
            ×
          </button>
        </header>

        <form class="cliente-detail-form">

          <div class="cliente-detail-field">
            <label class="cliente-detail-label">
              RUT
            </label>

            <input type="text" class="cliente-detail-input" placeholder="Ej: 12.345.678-9">
          </div>

          <div class="cliente-detail-field">
            <label class="cliente-detail-label">
              Nombres
            </label>

            <input type="text" class="cliente-detail-input" placeholder="Ej: Juan">
          </div>

          <div class="cliente-detail-field">
            <label class="cliente-detail-label">
              Apellidos
            </label>

            <input type="text" class="cliente-detail-input" placeholder="Ej: Pérez">
          </div>

          <div class="cliente-detail-field">
            <label class="cliente-detail-label">
              Correo electrónico
            </label>

            <input type="email" class="cliente-detail-input" placeholder="Ej: cliente@email.cl">
          </div>

          <div class="cliente-detail-field">
            <label class="cliente-detail-label">
              Teléfono
            </label>

            <input type="text" class="cliente-detail-input" placeholder="Ej: +56 9 1234 5678">
          </div>

          <div class="cliente-detail-field">
            <label class="cliente-detail-label">
              Licencia de conducir
            </label>

            <input type="text" class="cliente-detail-input" placeholder="Ej: B123456">
          </div>

          <div class="cliente-detail-field cliente-detail-field-full">
            <label class="cliente-detail-label">
              Dirección
            </label>

            <input type="text" class="cliente-detail-input" placeholder="Ej: Av. Principal 123">
          </div>

        </form>

        <footer class="cliente-detail-modal-actions">
          <button type="button" class="cliente-detail-secondary-button">
            Cancelar
          </button>

          <button type="button" class="cliente-detail-primary-button">
            Guardar cambios
          </button>
        </footer>

      </div>
    </section>

    <!-- Modal confirmar desactivación -->
    <section v-if="false" class="cliente-detail-confirm-backdrop" hidden>
      <div class="cliente-detail-confirm-modal">

        <header class="cliente-detail-confirm-header">
          <h2 class="cliente-detail-confirm-title">
            Confirmar desactivación
          </h2>
        </header>

        <p class="cliente-detail-confirm-text">
          ¿Seguro que deseas desactivar este cliente? No se eliminará del sistema, pero quedará inactivo.
        </p>

        <footer class="cliente-detail-confirm-actions">
          <button type="button" class="cliente-detail-secondary-button">
            Cancelar
          </button>

          <button type="button" class="cliente-detail-danger-button">
            Confirmar desactivación
          </button>
        </footer>

      </div>
    </section>

  </section>
</template>

<script setup lang="ts">
import type { Arriendo } from '~/types/arriendo'
import type { Cliente } from '~/types/cliente'
import { formatCurrency } from '~/utils/formatCurrency'
import { formatDate } from '~/utils/formatDate'
import { getApiErrorMessage } from '~/utils/getApiErrorMessage'

interface ClienteDetalle extends Cliente {
  arriendos?: Arriendo[]
}

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

const route = useRoute()
const id = Number(route.params.id)

const cliente = ref<ClienteDetalle | null>(null)

const cargando = ref(false)
const guardando = ref(false)
const mensajeError = ref('')
const mensajeExito = ref('')
const modalAbierto = ref(false)
const confirmacionAbierta = ref(false)

const arriendosCliente = computed(() => cliente.value?.arriendos ?? [])

const resumen = computed(() => {
  return {
    vigentes: arriendosCliente.value.filter((arriendo) => arriendo.estado === 'vigente').length,
    finalizados: arriendosCliente.value.filter((arriendo) => arriendo.estado === 'finalizado').length,
    totalHistorico: arriendosCliente.value.reduce((total, arriendo) => total + arriendo.valor_total, 0),
  }
})

async function cargarCliente() {
  cargando.value = true
  mensajeError.value = ''

  try {
    cliente.value = await $fetch<ClienteDetalle>(`/api/clientes/${id}`)
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo cargar el cliente')
    cliente.value = null
  }
  finally {
    cargando.value = false
  }
}

function abrirModalEditar() {
  limpiarMensajes()
  modalAbierto.value = true
}

function cerrarModal() {
  modalAbierto.value = false
}

async function guardarCliente(datos: ClienteFormData) {
  if (!cliente.value) {
    return
  }

  guardando.value = true
  limpiarMensajes()

  try {
    const { activo: _activo, ...payload } = datos

    await $fetch(`/api/clientes/${cliente.value.id}`, {
      method: 'PUT',
      body: payload,
    })

    mensajeExito.value = 'Cliente actualizado correctamente'
    cerrarModal()
    await cargarCliente()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo actualizar el cliente')
  }
  finally {
    guardando.value = false
  }
}

function pedirDesactivar() {
  limpiarMensajes()
  confirmacionAbierta.value = true
}

function cerrarConfirmacion() {
  confirmacionAbierta.value = false
}

async function desactivarCliente() {
  if (!cliente.value) {
    return
  }

  guardando.value = true
  limpiarMensajes()

  try {
    await $fetch(`/api/clientes/${cliente.value.id}`, {
      method: 'DELETE',
    })

    mensajeExito.value = 'Cliente desactivado correctamente'
    cerrarConfirmacion()
    await navigateTo('/clientes')
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo desactivar el cliente')
  }
  finally {
    guardando.value = false
  }
}

function limpiarMensajes() {
  mensajeError.value = ''
  mensajeExito.value = ''
}

function verArriendo(arriendo: Arriendo) {
  navigateTo(`/arriendos/${arriendo.id}`)
}

function registrarDevolucion(arriendo: Arriendo) {
  navigateTo(`/arriendos/${arriendo.id}/devolucion`)
}

function volverAlListado() {
  navigateTo('/clientes')
}

onMounted(() => {
  cargarCliente()
})
// Lógica pendiente para después:
//
// 1. Obtener el id desde la ruta:
// const route = useRoute()
// const id = Number(route.params.id)
//
// 2. Cargar cliente desde GET /api/clientes/:id.
//
// 3. Cargar o recibir sus arriendos relacionados.
//
// 4. Mostrar:
// - datos personales del cliente
// - estado activo / inactivo
// - historial de arriendos
// - resumen de arriendos vigentes y finalizados
//
// 5. Abrir modal para editar cliente.
//
// 6. Enviar PUT a /api/clientes/:id.
//
// 7. Desactivar cliente con confirmación.
//
// Campos reales según schema.prisma:
// rut, nombres, apellidos, email, telefono,
// direccion, licencia_conducir, activo,
// created_at, updated_at.
//
// Regla importante:
// - El cliente no se elimina físicamente.
// - Para desactivarlo se usa activo: false.
</script>
