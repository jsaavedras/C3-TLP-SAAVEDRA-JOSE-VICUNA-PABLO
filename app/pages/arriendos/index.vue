<template>
  <!-- Página de arriendos -->
  <section class="arriendos-page">

    <!-- Encabezado -->
    <header class="arriendos-header">
      <div>
        <h1 class="arriendos-title">
          Arriendos
        </h1>

        <p class="arriendos-description">
          Revisa los arriendos vigentes y finalizados registrados en el sistema.
        </p>
      </div>

      <div class="arriendos-header-actions">
        <NuxtLink to="/arriendos/crear" class="arriendos-primary-link">
          Nuevo arriendo
        </NuxtLink>
      </div>
    </header>

    <!-- Resumen de arriendos -->
    <section class="arriendos-summary-grid">

      <article class="arriendos-summary-card">
        <span class="arriendos-summary-label">
          Arriendos vigentes
        </span>

        <strong class="arriendos-summary-value">
          {{ resumen.vigentes }}
        </strong>

        <p class="arriendos-summary-text">
          Vehículos actualmente arrendados
        </p>
      </article>

      <article class="arriendos-summary-card">
        <span class="arriendos-summary-label">
          Arriendos finalizados
        </span>

        <strong class="arriendos-summary-value">
          {{ resumen.finalizados }}
        </strong>

        <p class="arriendos-summary-text">
          Arriendos cerrados correctamente
        </p>
      </article>

      <article class="arriendos-summary-card">
        <span class="arriendos-summary-label">
          Total de arriendos
        </span>

        <strong class="arriendos-summary-value">
          {{ arriendos.length }}
        </strong>

        <p class="arriendos-summary-text">
          Registros históricos del sistema
        </p>
      </article>

      <article class="arriendos-summary-card">
        <span class="arriendos-summary-label">
          Ingresos estimados
        </span>

        <strong class="arriendos-summary-value">
          {{ formatCurrency(resumen.ingresos) }}
        </strong>

        <p class="arriendos-summary-text">
          Suma total de arriendos registrados
        </p>
      </article>

    </section>

    <!-- Filtros -->
    <section class="arriendos-filters-card">

      <div class="arriendos-filters-grid">

        <!-- Buscador -->
        <div class="arriendos-field">
          <label class="arriendos-label">
            Buscar arriendo
          </label>

          <input v-model="busqueda" type="text" class="arriendos-input" placeholder="Buscar por cliente, patente, marca o modelo">
        </div>

        <!-- Filtro estado -->
        <div class="arriendos-field">
          <label class="arriendos-label">
            Estado
          </label>

          <select v-model="filtroEstado" class="arriendos-select">
            <option value="">
              Todos los estados
            </option>
            <option value="vigente">
              Vigente
            </option>
            <option value="finalizado">
              Finalizado
            </option>
          </select>
        </div>

      </div>

    </section>

    <div v-if="mensajeError" class="mb-4 rounded-lg bg-red-50 p-4 text-sm font-bold text-red-800">
      {{ mensajeError }}
    </div>

    <section v-if="cargando" class="rounded-lg bg-white p-6 text-center text-sm font-bold text-slate-600">
      Cargando arriendos...
    </section>

    <section v-else-if="arriendosFiltrados.length > 0" class="grid gap-4">
      <ArriendoCard
        v-for="arriendo in arriendosFiltrados"
        :key="arriendo.id"
        :arriendo="arriendo"
        @ver-detalle="verDetalle"
        @registrar-devolucion="registrarDevolucion"
      />
    </section>

    <BaseEmptyState
      v-else
      titulo="No hay arriendos para mostrar"
      mensaje="Cuando se registren arriendos, apareceran en esta seccion."
      accion-texto="Nuevo arriendo"
      @accion="irCrearArriendo"
    />

    <!-- Tabla de arriendos -->
    <section v-if="false" class="arriendos-table-card">

      <div class="arriendos-table-wrapper">

        <table class="arriendos-table">

          <thead>
            <tr>
              <th>Cliente</th>
              <th>Vehículo</th>
              <th>Patente</th>
              <th>Inicio</th>
              <th>Término</th>
              <th>Estado</th>
              <th>Total</th>
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
                <span class="arriendos-status arriendos-status-vigente">
                  Vigente
                </span>
              </td>

              <td>
                $140.000
              </td>

              <td>
                <div class="arriendos-table-actions">
                  <NuxtLink to="/arriendos/1" class="arriendos-secondary-link">
                    Ver detalle
                  </NuxtLink>

                  <NuxtLink to="/arriendos/1/devolucion" class="arriendos-warning-link">
                    Devolución
                  </NuxtLink>
                </div>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </section>

    <!-- Versión card para pantallas pequeñas -->
    <section v-if="false" class="arriendos-mobile-list">

      <!-- Card de ejemplo: después se repetirá con v-for -->
      <article class="arriendos-mobile-card">

        <header class="arriendos-mobile-card-header">
          <div>
            <h2 class="arriendos-mobile-card-title">
              Juan Pérez
            </h2>

            <p class="arriendos-mobile-card-subtitle">
              Toyota Corolla · ABCD12
            </p>
          </div>

          <span class="arriendos-status arriendos-status-vigente">
            Vigente
          </span>
        </header>

        <div class="arriendos-mobile-info-grid">

          <div class="arriendos-mobile-info-item">
            <span class="arriendos-mobile-info-label">
              Fecha inicio
            </span>

            <strong class="arriendos-mobile-info-value">
              2026-01-01
            </strong>
          </div>

          <div class="arriendos-mobile-info-item">
            <span class="arriendos-mobile-info-label">
              Fecha término
            </span>

            <strong class="arriendos-mobile-info-value">
              2026-01-05
            </strong>
          </div>

          <div class="arriendos-mobile-info-item">
            <span class="arriendos-mobile-info-label">
              Días
            </span>

            <strong class="arriendos-mobile-info-value">
              4
            </strong>
          </div>

          <div class="arriendos-mobile-info-item">
            <span class="arriendos-mobile-info-label">
              Total
            </span>

            <strong class="arriendos-mobile-info-value">
              $140.000
            </strong>
          </div>

        </div>

        <footer class="arriendos-mobile-actions">
          <NuxtLink to="/arriendos/1" class="arriendos-secondary-link">
            Ver detalle
          </NuxtLink>

          <NuxtLink to="/arriendos/1/devolucion" class="arriendos-warning-link">
            Registrar devolución
          </NuxtLink>
        </footer>

      </article>

    </section>

    <!-- Estado vacío: después se mostrará con v-if -->
    <section class="arriendos-empty" hidden>
      <h2 class="arriendos-empty-title">
        No hay arriendos para mostrar
      </h2>

      <p class="arriendos-empty-text">
        Cuando se registren arriendos, aparecerán en esta sección.
      </p>
    </section>

  </section>
</template>

<script setup lang="ts">
import ArriendoCard from '~/components/arriendos/ArriendoCard.vue'
import type { Arriendo } from '~/types/arriendo'
import { formatCurrency } from '~/utils/formatCurrency'
import { getApiErrorMessage } from '~/utils/getApiErrorMessage'

const arriendos = ref<Arriendo[]>([])

const busqueda = ref('')
const filtroEstado = ref('')

const cargando = ref(false)
const mensajeError = ref('')

const arriendosFiltrados = computed(() => {
  const texto = busqueda.value.trim().toLowerCase()

  return arriendos.value.filter((arriendo) => {
    const cliente = arriendo.clientes
      ? `${arriendo.clientes.nombres} ${arriendo.clientes.apellidos}`.toLowerCase()
      : ''

    const vehiculo = arriendo.vehiculos
      ? `${arriendo.vehiculos.marca} ${arriendo.vehiculos.modelo} ${arriendo.vehiculos.patente}`.toLowerCase()
      : ''

    const coincideTexto = !texto || cliente.includes(texto) || vehiculo.includes(texto)
    const coincideEstado = !filtroEstado.value || arriendo.estado === filtroEstado.value

    return coincideTexto && coincideEstado
  })
})

const resumen = computed(() => {
  return {
    vigentes: arriendos.value.filter((arriendo) => arriendo.estado === 'vigente').length,
    finalizados: arriendos.value.filter((arriendo) => arriendo.estado === 'finalizado').length,
    ingresos: arriendos.value.reduce((total, arriendo) => total + arriendo.valor_total, 0),
  }
})

async function cargarArriendos() {
  cargando.value = true
  mensajeError.value = ''

  try {
    arriendos.value = await $fetch<Arriendo[]>('/api/arriendos')
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudieron cargar los arriendos')
  }
  finally {
    cargando.value = false
  }
}

function verDetalle(arriendo: Arriendo) {
  navigateTo(`/arriendos/${arriendo.id}`)
}

function registrarDevolucion(arriendo: Arriendo) {
  navigateTo(`/arriendos/${arriendo.id}/devolucion`)
}

function irCrearArriendo() {
  navigateTo('/arriendos/crear')
}

onMounted(() => {
  cargarArriendos()
})
// Lógica pendiente para después:
//
// 1. Importar type Arriendo.
// 2. Cargar arriendos desde GET /api/arriendos.
// 3. Filtrar por cliente, patente, marca o modelo.
// 4. Filtrar por estado: vigente / finalizado.
// 5. Calcular resumen de arriendos vigentes.
// 6. Calcular resumen de arriendos finalizados.
// 7. Calcular ingresos totales.
// 8. Mostrar botón de devolución solo si estado === 'vigente'.
//
// Campos reales según schema.prisma:
// cliente_id, vehiculo_id, usuario_id,
// fecha_inicio, fecha_termino,
// fecha_hora_entrega, fecha_hora_recepcion,
// valor_diario_aplicado, dias_arriendo, valor_total,
// estado, fotos_entrega, fotos_recepcion.
//
// Relaciones esperadas:
// clientes, vehiculos, usuarios.
</script>
