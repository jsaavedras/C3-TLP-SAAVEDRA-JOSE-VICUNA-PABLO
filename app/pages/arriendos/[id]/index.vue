<template>
  <!-- Página detalle de arriendo -->
  <section class="arriendo-detail-page">

    <!-- Encabezado -->
    <header class="arriendo-detail-header">
      <div>
        <h1 class="arriendo-detail-title">
          Detalle del arriendo
        </h1>

        <p class="arriendo-detail-description">
          Revisa la información completa del arriendo, cliente, vehículo, fechas, valores y evidencias.
        </p>
      </div>

      <div class="arriendo-detail-header-actions">
        <NuxtLink to="/arriendos" class="arriendo-detail-secondary-link">
          Volver a arriendos
        </NuxtLink>

        <NuxtLink v-if="arriendo?.estado === 'vigente'" :to="`/arriendos/${id}/devolucion`" class="arriendo-detail-warning-link">
          Registrar devolución
        </NuxtLink>
      </div>
    </header>

    <div v-if="mensajeError" class="mb-4 rounded-lg bg-red-50 p-4 text-sm font-bold text-red-800">
      {{ mensajeError }}
    </div>

    <section v-if="cargando" class="rounded-lg bg-white p-6 text-center text-sm font-bold text-slate-600">
      Cargando detalle del arriendo...
    </section>

    <BaseEmptyState
      v-else-if="!arriendo"
      titulo="Arriendo no encontrado"
      mensaje="No fue posible cargar el arriendo solicitado."
      accion-texto="Volver a arriendos"
      @accion="volverAlListado"
    />

    <section v-else class="grid gap-6 xl:grid-cols-[1fr_360px]">
      <div class="space-y-6">
        <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <div class="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <span class="text-xs font-bold uppercase tracking-wide text-slate-500">
                Estado del arriendo
              </span>

              <h2 class="mt-1 text-xl font-bold text-slate-900">
                {{ estadoTexto }}
              </h2>

              <p class="mt-1 text-sm text-slate-600">
                {{ arriendo.estado === 'vigente' ? 'Este arriendo todavia no ha sido finalizado.' : 'Este arriendo ya fue cerrado con recepcion registrada.' }}
              </p>
            </div>

            <BaseStatusBadge :tipo="arriendo.estado" />
          </div>
        </article>

        <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <header class="mb-4">
            <h2 class="text-lg font-bold text-slate-900">
              Datos del cliente
            </h2>
            <p class="text-sm text-slate-600">
              Informacion del cliente asociado al arriendo.
            </p>
          </header>

          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">Nombre completo</span>
              <p class="font-bold text-slate-900">{{ nombreCliente }}</p>
            </div>
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">RUT</span>
              <p class="font-bold text-slate-900">{{ arriendo.clientes?.rut || 'Sin RUT' }}</p>
            </div>
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">Correo</span>
              <p class="font-bold text-slate-900">{{ arriendo.clientes?.email || 'Sin correo' }}</p>
            </div>
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">Telefono</span>
              <p class="font-bold text-slate-900">{{ arriendo.clientes?.telefono || 'Sin telefono' }}</p>
            </div>
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">Licencia</span>
              <p class="font-bold text-slate-900">{{ arriendo.clientes?.licencia_conducir || 'Sin licencia' }}</p>
            </div>
            <div>
              <span class="text-xs font-bold uppercase text-slate-500">Direccion</span>
              <p class="font-bold text-slate-900">{{ arriendo.clientes?.direccion || 'Sin direccion' }}</p>
            </div>
          </div>
        </article>

        <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <header class="mb-4">
            <h2 class="text-lg font-bold text-slate-900">
              Datos del vehiculo
            </h2>
            <p class="text-sm text-slate-600">
              Vehiculo entregado al cliente durante el arriendo.
            </p>
          </header>

          <div class="grid gap-5 lg:grid-cols-[260px_1fr]">
            <div class="aspect-video overflow-hidden rounded-lg bg-slate-100">
              <img
                v-if="arriendo.vehiculos?.foto_url"
                :src="arriendo.vehiculos.foto_url"
                :alt="nombreVehiculo"
                class="h-full w-full object-cover"
              >
              <div v-else class="flex h-full items-center justify-center text-sm font-bold text-slate-500">
                Sin fotografia
              </div>
            </div>

            <div class="grid gap-4 sm:grid-cols-2">
              <div>
                <span class="text-xs font-bold uppercase text-slate-500">Vehiculo</span>
                <p class="font-bold text-slate-900">{{ nombreVehiculo }}</p>
              </div>
              <div>
                <span class="text-xs font-bold uppercase text-slate-500">Patente</span>
                <p class="font-bold text-slate-900">{{ arriendo.vehiculos?.patente || 'Sin patente' }}</p>
              </div>
              <div>
                <span class="text-xs font-bold uppercase text-slate-500">Tipo</span>
                <p class="font-bold text-slate-900">{{ arriendo.vehiculos?.tipos_vehiculo?.nombre || 'Sin tipo' }}</p>
              </div>
              <div>
                <span class="text-xs font-bold uppercase text-slate-500">Anio</span>
                <p class="font-bold text-slate-900">{{ arriendo.vehiculos?.anio || 'Sin anio' }}</p>
              </div>
              <div>
                <span class="text-xs font-bold uppercase text-slate-500">Color</span>
                <p class="font-bold text-slate-900">{{ arriendo.vehiculos?.color || 'Sin color' }}</p>
              </div>
              <div>
                <span class="text-xs font-bold uppercase text-slate-500">Estado actual</span>
                <p class="font-bold text-slate-900">{{ arriendo.vehiculos?.estado || 'Sin estado' }}</p>
              </div>
            </div>
          </div>
        </article>

        <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <header class="mb-4">
            <h2 class="text-lg font-bold text-slate-900">
              Evidencias del arriendo
            </h2>
            <p class="text-sm text-slate-600">
              Fotos registradas en la entrega y recepcion del vehiculo.
            </p>
          </header>

          <div class="grid gap-6 lg:grid-cols-2">
            <section>
              <h3 class="mb-3 text-sm font-bold uppercase text-slate-600">
                Fotos de entrega
              </h3>

              <div v-if="fotosEntrega.length > 0" class="grid gap-3 sm:grid-cols-2">
                <img
                  v-for="foto in fotosEntrega"
                  :key="foto"
                  :src="foto"
                  alt="Foto de entrega"
                  class="aspect-video w-full rounded-lg object-cover"
                >
              </div>

              <p v-else class="rounded-lg bg-slate-50 p-4 text-sm font-bold text-slate-500">
                No hay fotos de entrega registradas.
              </p>
            </section>

            <section>
              <h3 class="mb-3 text-sm font-bold uppercase text-slate-600">
                Fotos de recepcion
              </h3>

              <div v-if="fotosRecepcion.length > 0" class="grid gap-3 sm:grid-cols-2">
                <img
                  v-for="foto in fotosRecepcion"
                  :key="foto"
                  :src="foto"
                  alt="Foto de recepcion"
                  class="aspect-video w-full rounded-lg object-cover"
                >
              </div>

              <p v-else class="rounded-lg bg-slate-50 p-4 text-sm font-bold text-slate-500">
                Todavia no existen fotos de recepcion.
              </p>
            </section>
          </div>
        </article>
      </div>

      <aside class="space-y-6">
        <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 class="mb-4 text-lg font-bold text-slate-900">
            Resumen del arriendo
          </h2>

          <div class="space-y-3 text-sm">
            <div class="flex justify-between gap-4">
              <span class="text-slate-500">Fecha inicio</span>
              <strong class="text-right text-slate-900">{{ formatDate(arriendo.fecha_inicio) }}</strong>
            </div>
            <div class="flex justify-between gap-4">
              <span class="text-slate-500">Fecha termino</span>
              <strong class="text-right text-slate-900">{{ formatDate(arriendo.fecha_termino) }}</strong>
            </div>
            <div class="flex justify-between gap-4">
              <span class="text-slate-500">Entrega</span>
              <strong class="text-right text-slate-900">{{ formatDateTime(arriendo.fecha_hora_entrega) }}</strong>
            </div>
            <div class="flex justify-between gap-4">
              <span class="text-slate-500">Recepcion</span>
              <strong class="text-right text-slate-900">{{ formatDateTime(arriendo.fecha_hora_recepcion) }}</strong>
            </div>
            <div class="flex justify-between gap-4">
              <span class="text-slate-500">Dias</span>
              <strong class="text-right text-slate-900">{{ arriendo.dias_arriendo }} dias</strong>
            </div>
            <div class="flex justify-between gap-4">
              <span class="text-slate-500">Valor diario</span>
              <strong class="text-right text-slate-900">{{ formatCurrency(arriendo.valor_diario_aplicado) }}</strong>
            </div>
            <div class="border-t border-slate-200 pt-3">
              <span class="text-slate-500">Valor total</span>
              <strong class="mt-1 block text-2xl text-slate-900">{{ formatCurrency(arriendo.valor_total) }}</strong>
            </div>
          </div>
        </article>

        <article class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <h2 class="mb-4 text-lg font-bold text-slate-900">
            Registrado por
          </h2>

          <div class="space-y-3 text-sm">
            <div>
              <span class="text-slate-500">Usuario</span>
              <strong class="block text-slate-900">{{ nombreUsuario }}</strong>
            </div>
            <div>
              <span class="text-slate-500">Correo</span>
              <strong class="block text-slate-900">{{ arriendo.usuarios?.email || 'Sin correo' }}</strong>
            </div>
          </div>
        </article>
      </aside>
    </section>

    <!-- Estado general -->
    <section v-if="false" class="arriendo-detail-status-card">

      <div>
        <span class="arriendo-detail-status-label">
          Estado del arriendo
        </span>

        <strong class="arriendo-detail-status-title">
          Arriendo vigente
        </strong>

        <p class="arriendo-detail-status-text">
          Este arriendo todavía no ha sido finalizado.
        </p>
      </div>

      <span class="arriendo-detail-status-badge arriendo-detail-status-vigente">
        Vigente
      </span>

    </section>

    <!-- Contenido principal -->
    <section v-if="false" class="arriendo-detail-layout">

      <!-- Columna principal -->
      <div class="arriendo-detail-main">

        <!-- Datos del cliente -->
        <article class="arriendo-detail-card">
          <header class="arriendo-detail-card-header">
            <h2 class="arriendo-detail-card-title">
              Datos del cliente
            </h2>

            <p class="arriendo-detail-card-description">
              Información del cliente asociado al arriendo.
            </p>
          </header>

          <div class="arriendo-detail-info-grid">

            <div class="arriendo-detail-info-item">
              <span class="arriendo-detail-info-label">
                Nombre completo
              </span>

              <strong class="arriendo-detail-info-value">
                Juan Pérez
              </strong>
            </div>

            <div class="arriendo-detail-info-item">
              <span class="arriendo-detail-info-label">
                RUT
              </span>

              <strong class="arriendo-detail-info-value">
                12.345.678-9
              </strong>
            </div>

            <div class="arriendo-detail-info-item">
              <span class="arriendo-detail-info-label">
                Correo
              </span>

              <strong class="arriendo-detail-info-value">
                juan@email.cl
              </strong>
            </div>

            <div class="arriendo-detail-info-item">
              <span class="arriendo-detail-info-label">
                Teléfono
              </span>

              <strong class="arriendo-detail-info-value">
                +56 9 1234 5678
              </strong>
            </div>

            <div class="arriendo-detail-info-item">
              <span class="arriendo-detail-info-label">
                Licencia de conducir
              </span>

              <strong class="arriendo-detail-info-value">
                B123456
              </strong>
            </div>

            <div class="arriendo-detail-info-item">
              <span class="arriendo-detail-info-label">
                Dirección
              </span>

              <strong class="arriendo-detail-info-value">
                Av. Principal 123
              </strong>
            </div>

          </div>
        </article>

        <!-- Datos del vehículo -->
        <article class="arriendo-detail-card">
          <header class="arriendo-detail-card-header">
            <h2 class="arriendo-detail-card-title">
              Datos del vehículo
            </h2>

            <p class="arriendo-detail-card-description">
              Vehículo entregado al cliente durante el arriendo.
            </p>
          </header>

          <div class="arriendo-detail-vehicle">

            <div class="arriendo-detail-vehicle-image">
              <span class="arriendo-detail-vehicle-image-text">
                Imagen del vehículo
              </span>
            </div>

            <div class="arriendo-detail-info-grid">

              <div class="arriendo-detail-info-item">
                <span class="arriendo-detail-info-label">
                  Vehículo
                </span>

                <strong class="arriendo-detail-info-value">
                  Toyota Corolla
                </strong>
              </div>

              <div class="arriendo-detail-info-item">
                <span class="arriendo-detail-info-label">
                  Patente
                </span>

                <strong class="arriendo-detail-info-value">
                  ABCD12
                </strong>
              </div>

              <div class="arriendo-detail-info-item">
                <span class="arriendo-detail-info-label">
                  Tipo
                </span>

                <strong class="arriendo-detail-info-value">
                  Sedán
                </strong>
              </div>

              <div class="arriendo-detail-info-item">
                <span class="arriendo-detail-info-label">
                  Año
                </span>

                <strong class="arriendo-detail-info-value">
                  2022
                </strong>
              </div>

              <div class="arriendo-detail-info-item">
                <span class="arriendo-detail-info-label">
                  Color
                </span>

                <strong class="arriendo-detail-info-value">
                  Blanco
                </strong>
              </div>

              <div class="arriendo-detail-info-item">
                <span class="arriendo-detail-info-label">
                  Estado actual
                </span>

                <strong class="arriendo-detail-info-value">
                  Arrendado
                </strong>
              </div>

            </div>

          </div>
        </article>

        <!-- Evidencias -->
        <article class="arriendo-detail-card">
          <header class="arriendo-detail-card-header">
            <h2 class="arriendo-detail-card-title">
              Evidencias del arriendo
            </h2>

            <p class="arriendo-detail-card-description">
              Fotos registradas en la entrega y recepción del vehículo.
            </p>
          </header>

          <div class="arriendo-detail-evidence-grid">

            <!-- Fotos de entrega -->
            <section class="arriendo-detail-evidence-section">
              <h3 class="arriendo-detail-evidence-title">
                Fotos de entrega
              </h3>

              <div class="arriendo-detail-photo-grid">

                <div class="arriendo-detail-photo-box">
                  <span class="arriendo-detail-photo-text">
                    Foto entrega
                  </span>
                </div>

                <div class="arriendo-detail-photo-box">
                  <span class="arriendo-detail-photo-text">
                    Foto entrega
                  </span>
                </div>

              </div>
            </section>

            <!-- Fotos de recepción -->
            <section class="arriendo-detail-evidence-section">
              <h3 class="arriendo-detail-evidence-title">
                Fotos de recepción
              </h3>

              <div class="arriendo-detail-photo-empty">
                Todavía no existen fotos de recepción.
              </div>
            </section>

          </div>
        </article>

      </div>

      <!-- Columna lateral -->
      <aside class="arriendo-detail-sidebar">

        <!-- Resumen del arriendo -->
        <article class="arriendo-detail-summary-card">
          <header class="arriendo-detail-card-header">
            <h2 class="arriendo-detail-card-title">
              Resumen del arriendo
            </h2>
          </header>

          <div class="arriendo-detail-summary-list">

            <div class="arriendo-detail-summary-item">
              <span class="arriendo-detail-summary-label">
                Fecha inicio
              </span>

              <strong class="arriendo-detail-summary-value">
                2026-01-01
              </strong>
            </div>

            <div class="arriendo-detail-summary-item">
              <span class="arriendo-detail-summary-label">
                Fecha término
              </span>

              <strong class="arriendo-detail-summary-value">
                2026-01-05
              </strong>
            </div>

            <div class="arriendo-detail-summary-item">
              <span class="arriendo-detail-summary-label">
                Fecha y hora entrega
              </span>

              <strong class="arriendo-detail-summary-value">
                2026-01-01 10:00
              </strong>
            </div>

            <div class="arriendo-detail-summary-item">
              <span class="arriendo-detail-summary-label">
                Fecha y hora recepción
              </span>

              <strong class="arriendo-detail-summary-value">
                Pendiente
              </strong>
            </div>

            <div class="arriendo-detail-summary-item">
              <span class="arriendo-detail-summary-label">
                Días de arriendo
              </span>

              <strong class="arriendo-detail-summary-value">
                4 días
              </strong>
            </div>

            <div class="arriendo-detail-summary-item">
              <span class="arriendo-detail-summary-label">
                Valor diario aplicado
              </span>

              <strong class="arriendo-detail-summary-value">
                $35.000
              </strong>
            </div>

            <div class="arriendo-detail-summary-total">
              <span class="arriendo-detail-summary-total-label">
                Valor total
              </span>

              <strong class="arriendo-detail-summary-total-value">
                $140.000
              </strong>
            </div>

          </div>
        </article>

        <!-- Usuario responsable -->
        <article class="arriendo-detail-summary-card">
          <header class="arriendo-detail-card-header">
            <h2 class="arriendo-detail-card-title">
              Registrado por
            </h2>
          </header>

          <div class="arriendo-detail-summary-list">

            <div class="arriendo-detail-summary-item">
              <span class="arriendo-detail-summary-label">
                Usuario
              </span>

              <strong class="arriendo-detail-summary-value">
                Ejecutivo Demo
              </strong>
            </div>

            <div class="arriendo-detail-summary-item">
              <span class="arriendo-detail-summary-label">
                Correo
              </span>

              <strong class="arriendo-detail-summary-value">
                ejecutivo@sistema.cl
              </strong>
            </div>

          </div>
        </article>

      </aside>

    </section>

  </section>
</template>

<script setup lang="ts">
import type { Arriendo } from '~/types/arriendo'
import { formatCurrency } from '~/utils/formatCurrency'
import { formatDate, formatDateTime } from '~/utils/formatDate'
import { getRentalStatusLabel } from '~/utils/formatStyle'
import { getApiErrorMessage } from '~/utils/getApiErrorMessage'
import { leerUrlsDesdeJson } from '~/utils/uploadImagenes'

const route = useRoute()
const id = Number(route.params.id)

const arriendo = ref<Arriendo | null>(null)

const cargando = ref(false)
const mensajeError = ref('')

const fotosEntrega = computed(() => leerUrlsDesdeJson(arriendo.value?.fotos_entrega))
const fotosRecepcion = computed(() => leerUrlsDesdeJson(arriendo.value?.fotos_recepcion))

const nombreCliente = computed(() => {
  if (!arriendo.value?.clientes) {
    return 'Sin cliente'
  }

  return `${arriendo.value.clientes.nombres} ${arriendo.value.clientes.apellidos}`
})

const nombreVehiculo = computed(() => {
  if (!arriendo.value?.vehiculos) {
    return 'Sin vehiculo'
  }

  return `${arriendo.value.vehiculos.marca} ${arriendo.value.vehiculos.modelo}`
})

const nombreUsuario = computed(() => {
  if (!arriendo.value?.usuarios) {
    return 'Sin usuario'
  }

  return `${arriendo.value.usuarios.nombres} ${arriendo.value.usuarios.apellidos}`
})

const estadoTexto = computed(() => {
  if (!arriendo.value) {
    return 'Sin estado'
  }

  return getRentalStatusLabel(arriendo.value.estado)
})

async function cargarArriendo() {
  cargando.value = true
  mensajeError.value = ''

  try {
    arriendo.value = await $fetch<Arriendo>(`/api/arriendos/${id}`)
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo cargar el detalle del arriendo')
    arriendo.value = null
  }
  finally {
    cargando.value = false
  }
}

function volverAlListado() {
  navigateTo('/arriendos')
}

onMounted(() => {
  cargarArriendo()
})
// Lógica pendiente para después:
//
// 1. Obtener el id desde la ruta:
// const route = useRoute()
// const id = Number(route.params.id)
//
// 2. Cargar el arriendo desde GET /api/arriendos/:id.
//
// 3. Mostrar datos relacionados:
// - clientes
// - vehiculos
// - usuarios
//
// 4. Mostrar botón "Registrar devolución" solo si:
// estado === 'vigente'
//
// 5. Ocultar botón "Registrar devolución" si:
// estado === 'finalizado'
//
// Campos reales del arriendo:
// id, cliente_id, vehiculo_id, usuario_id,
// fecha_inicio, fecha_termino,
// fecha_hora_entrega, fecha_hora_recepcion,
// valor_diario_aplicado, dias_arriendo,
// valor_total, estado,
// fotos_entrega, fotos_recepcion,
// vehiculo_activo_id.
</script>
