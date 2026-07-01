<template>
  <!-- Página principal del panel administrativo -->
  <section class="dashboard-page">

    <!-- Encabezado de la página -->
    <header class="dashboard-header">

      <!-- Título y descripción -->
      <div class="dashboard-header-left">
        <h1 class="dashboard-title">
          Dashboard
        </h1>

        <p class="dashboard-description">
          Bienvenido al sistema de arriendo de vehículos.
        </p>
      </div>

    </header>

    <div v-if="mensajeError" class="mb-4 rounded-lg bg-red-50 p-4 text-sm font-bold text-red-800">
      {{ mensajeError }}
    </div>

    <section v-if="cargando" class="rounded-lg bg-white p-6 text-center text-sm font-bold text-slate-600">
      Cargando dashboard...
    </section>

    <!-- Resumen general del sistema -->
    <section class="dashboard-summary-grid">

      <!-- Vehículos totales -->
      <article class="dashboard-summary-card">
        <p class="dashboard-summary-label">
          Vehículos totales
        </p>

        <h2 class="dashboard-summary-value">
          {{ resumen.vehiculosTotales }}
        </h2>

        <p class="dashboard-summary-text">
          Vehículos registrados en el sistema
        </p>
      </article>

      <!-- Vehículos disponibles -->
      <article class="dashboard-summary-card">
        <p class="dashboard-summary-label">
          Vehículos disponibles
        </p>

        <h2 class="dashboard-summary-value">
          {{ resumen.vehiculosDisponibles }}
        </h2>

        <p class="dashboard-summary-text">
          Listos para ser arrendados
        </p>
      </article>

      <!-- Arriendos vigentes -->
      <article class="dashboard-summary-card">
        <p class="dashboard-summary-label">
          Arriendos vigentes
        </p>

        <h2 class="dashboard-summary-value">
          {{ resumen.arriendosVigentes }}
        </h2>

        <p class="dashboard-summary-text">
          Arriendos actualmente activos
        </p>
      </article>

      <!-- Clientes activos -->
      <article class="dashboard-summary-card">
        <p class="dashboard-summary-label">
          Clientes activos
        </p>

        <h2 class="dashboard-summary-value">
          {{ resumen.clientesActivos }}
        </h2>

        <p class="dashboard-summary-text">
          Clientes habilitados para arrendar
        </p>
      </article>

    </section>

    <!-- Contenido inferior del dashboard -->
    <section class="dashboard-grid">

      <!-- Estado de vehículos -->
      <article class="dashboard-panel">

        <h2 class="dashboard-panel-title">
          Estado de vehículos
        </h2>

        <div class="dashboard-status-list">

          <div class="dashboard-status-item">
            <div>
              <h3 class="dashboard-status-title">
                Disponibles
              </h3>

              <p class="dashboard-status-text">
                Vehículos listos para arriendo
              </p>
            </div>

            <span class="dashboard-status-badge dashboard-status-disponible">
              {{ estadoVehiculos.disponible }}
            </span>
          </div>

          <div class="dashboard-status-item">
            <div>
              <h3 class="dashboard-status-title">
                Arrendados
              </h3>

              <p class="dashboard-status-text">
                Vehículos con arriendo vigente
              </p>
            </div>

            <span class="dashboard-status-badge dashboard-status-arrendado">
              {{ estadoVehiculos.arrendado }}
            </span>
          </div>

          <div class="dashboard-status-item">
            <div>
              <h3 class="dashboard-status-title">
                En mantenimiento
              </h3>

              <p class="dashboard-status-text">
                Vehículos no disponibles temporalmente
              </p>
            </div>

            <span class="dashboard-status-badge dashboard-status-mantenimiento">
              {{ estadoVehiculos.en_mantenimiento }}
            </span>
          </div>

          <div class="dashboard-status-item">
            <div>
              <h3 class="dashboard-status-title">
                De baja
              </h3>

              <p class="dashboard-status-text">
                Vehículos desactivados del sistema
              </p>
            </div>

            <span class="dashboard-status-badge dashboard-status-baja">
              {{ estadoVehiculos.de_baja }}
            </span>
          </div>

        </div>

      </article>

      <!-- Últimos arriendos -->
      <article class="dashboard-panel">

        <h2 class="dashboard-panel-title">
          Últimos arriendos
        </h2>

        <div class="dashboard-rentals-list">

          <article
            v-for="arriendo in ultimosArriendos"
            :key="arriendo.id"
            class="dashboard-rental-card"
          >
            <header class="dashboard-rental-header">
              <div>
                <h3 class="dashboard-rental-title">
                  {{ nombreCliente(arriendo) }}
                </h3>

                <p class="dashboard-rental-subtitle">
                  {{ nombreVehiculo(arriendo) }}
                </p>
              </div>

              <BaseStatusBadge :tipo="arriendo.estado" />
            </header>

            <div class="dashboard-rental-body">
              <div class="dashboard-rental-field">
                <span class="dashboard-rental-label">
                  Inicio
                </span>

                <span class="dashboard-rental-value">
                  {{ formatDate(arriendo.fecha_inicio) }}
                </span>
              </div>

              <div class="dashboard-rental-field">
                <span class="dashboard-rental-label">
                  Termino
                </span>

                <span class="dashboard-rental-value">
                  {{ formatDate(arriendo.fecha_termino) }}
                </span>
              </div>

              <div class="dashboard-rental-field">
                <span class="dashboard-rental-label">
                  Total
                </span>

                <span class="dashboard-rental-value">
                  {{ formatCurrency(arriendo.valor_total) }}
                </span>
              </div>
            </div>

            <footer class="mt-3 flex justify-end">
              <NuxtLink :to="`/arriendos/${arriendo.id}`" class="text-sm font-bold text-blue-700 hover:text-blue-900">
                Ver detalle
              </NuxtLink>
            </footer>
          </article>

          <!-- Arriendo de ejemplo -->
          <article v-if="false" class="dashboard-rental-card">

            <header class="dashboard-rental-header">
              <div>
                <h3 class="dashboard-rental-title">
                  Cliente de ejemplo
                </h3>

                <p class="dashboard-rental-subtitle">
                  Toyota Corolla · AB-CD-12
                </p>
              </div>

              <span class="dashboard-status-badge dashboard-status-disponible">
                Vigente
              </span>
            </header>

            <div class="dashboard-rental-body">

              <div class="dashboard-rental-field">
                <span class="dashboard-rental-label">
                  Inicio
                </span>

                <span class="dashboard-rental-value">
                  2026-01-01
                </span>
              </div>

              <div class="dashboard-rental-field">
                <span class="dashboard-rental-label">
                  Término
                </span>

                <span class="dashboard-rental-value">
                  2026-01-05
                </span>
              </div>

              <div class="dashboard-rental-field">
                <span class="dashboard-rental-label">
                  Total
                </span>

                <span class="dashboard-rental-value">
                  $0
                </span>
              </div>

            </div>

          </article>

          <!-- Mensaje cuando no existan arriendos -->
          <section v-if="ultimosArriendos.length === 0 && !cargando" class="dashboard-empty">
            <h3 class="dashboard-empty-title">
              Sin arriendos recientes
            </h3>

            <p class="dashboard-empty-text">
              Cuando se registren arriendos, aparecerán en esta sección.
            </p>
          </section>

        </div>

      </article>

    </section>

  </section>
</template>

<script setup lang="ts">
import type { Arriendo } from '~/types/arriendo'
import type { Cliente } from '~/types/cliente'
import type { Vehiculo } from '~/types/vehiculo'
import { formatCurrency } from '~/utils/formatCurrency'
import { formatDate } from '~/utils/formatDate'
import { getApiErrorMessage } from '~/utils/getApiErrorMessage'

const vehiculos = ref<Vehiculo[]>([])
const clientes = ref<Cliente[]>([])
const arriendos = ref<Arriendo[]>([])

const cargando = ref(false)
const mensajeError = ref('')

const estadoVehiculos = computed(() => {
  return {
    disponible: contarVehiculosPorEstado('disponible'),
    arrendado: contarVehiculosPorEstado('arrendado'),
    en_mantenimiento: contarVehiculosPorEstado('en_mantenimiento'),
    de_baja: contarVehiculosPorEstado('de_baja'),
  }
})

const resumen = computed(() => {
  return {
    vehiculosTotales: vehiculos.value.length,
    vehiculosDisponibles: estadoVehiculos.value.disponible,
    arriendosVigentes: arriendos.value.filter((arriendo) => arriendo.estado === 'vigente').length,
    clientesActivos: clientes.value.length,
  }
})

const ultimosArriendos = computed(() => arriendos.value.slice(0, 5))

async function cargarDatos() {
  cargando.value = true
  mensajeError.value = ''

  try {
    await cargarVehiculos()
    await cargarClientes()
    await cargarArriendos()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudieron cargar los datos del dashboard')
  }
  finally {
    cargando.value = false
  }
}

async function cargarVehiculos() {
  vehiculos.value = await $fetch<Vehiculo[]>('/api/vehiculos')
}

async function cargarClientes() {
  clientes.value = await $fetch<Cliente[]>('/api/clientes')
}

async function cargarArriendos() {
  arriendos.value = await $fetch<Arriendo[]>('/api/arriendos')
}

function contarVehiculosPorEstado(estado: string): number {
  return vehiculos.value.filter((vehiculo) => vehiculo.estado === estado).length
}

function nombreCliente(arriendo: Arriendo): string {
  if (!arriendo.clientes) {
    return `Cliente #${arriendo.cliente_id}`
  }

  return `${arriendo.clientes.nombres} ${arriendo.clientes.apellidos}`
}

function nombreVehiculo(arriendo: Arriendo): string {
  if (!arriendo.vehiculos) {
    return `Vehiculo #${arriendo.vehiculo_id}`
  }

  return `${arriendo.vehiculos.marca} ${arriendo.vehiculos.modelo} - ${arriendo.vehiculos.patente}`
}

onMounted(() => {
  cargarDatos()
})
// Aquí irá la lógica del dashboard:
//
// 1. Obtener resumen de vehículos.
// 2. Obtener arriendos vigentes.
// 3. Obtener clientes activos.
// 4. Cargar últimos arriendos.
//
// Por ahora esta página queda como estructura visual.
</script>
