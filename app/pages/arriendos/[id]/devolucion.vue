<template>
  <!-- Página devolución de arriendo -->
  <section class="arriendo-devolucion-page">

    <!-- Encabezado -->
    <header class="arriendo-devolucion-header">
      <div>
        <h1 class="arriendo-devolucion-title">
          Registrar devolución
        </h1>

        <p class="arriendo-devolucion-description">
          Finaliza el arriendo registrando la fecha de recepción, el estado final del vehículo y las fotos de
          devolución.
        </p>
      </div>

      <div class="arriendo-devolucion-header-actions">
        <NuxtLink :to="`/arriendos/${id}`" class="arriendo-devolucion-secondary-link">
          Volver al detalle
        </NuxtLink>
      </div>
    </header>

    <div v-if="mensajeError" class="mb-4 rounded-lg bg-red-50 p-4 text-sm font-bold text-red-800">
      {{ mensajeError }}
    </div>

    <div v-if="mensajeExito" class="mb-4 rounded-lg bg-green-50 p-4 text-sm font-bold text-green-800">
      {{ mensajeExito }}
    </div>

    <!-- Aviso importante -->
    <section class="arriendo-devolucion-alert">
      <h2 class="arriendo-devolucion-alert-title">
        Antes de finalizar
      </h2>

      <p class="arriendo-devolucion-alert-text">
        Al registrar la devolución, el arriendo quedará finalizado y el vehículo cambiará al estado final seleccionado.
      </p>
    </section>

    <!-- Contenido principal -->
    <section class="arriendo-devolucion-layout">

      <!-- Formulario -->
      <article class="arriendo-devolucion-form-card">

        <header class="arriendo-devolucion-card-header">
          <h2 class="arriendo-devolucion-card-title">
            Datos de la devolución
          </h2>

          <p class="arriendo-devolucion-card-description">
            Completa la información recibida al momento de devolver el vehículo.
          </p>
        </header>

        <form class="arriendo-devolucion-form" @submit.prevent="registrarDevolucion">

          <!-- Fecha y hora de recepción -->
          <div class="arriendo-devolucion-field">
            <label class="arriendo-devolucion-label">
              Fecha y hora de recepción
            </label>

            <input v-model="formulario.fecha_hora_recepcion" type="datetime-local" class="arriendo-devolucion-input">

            <p class="arriendo-devolucion-help">
              Corresponde al momento en que el cliente devuelve el vehículo.
            </p>
          </div>

          <!-- Estado final del vehículo -->
          <div class="arriendo-devolucion-field">
            <label class="arriendo-devolucion-label">
              Estado final del vehículo
            </label>

            <select v-model="formulario.estado_vehiculo_final" class="arriendo-devolucion-select">
              <option value="">
                Selecciona el estado final
              </option>

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

            <p class="arriendo-devolucion-help">
              El estado elegido determinará si el vehículo puede volver a arrendarse o no.
            </p>
          </div>

          <!-- Fotos de recepción -->
          <div class="arriendo-devolucion-field arriendo-devolucion-field-full">
            <label class="arriendo-devolucion-label">
              Fotos de recepción
            </label>

            <UFileUpload
              v-model="fotosRecepcion"
              multiple
              accept="image/png,image/jpeg,image/webp"
              class="w-full"
            />

            <p class="arriendo-devolucion-help">
              Estas fotos dejan evidencia del estado en que el vehículo fue devuelto.
            </p>
          </div>

          <!-- Observación visual -->
          <div class="arriendo-devolucion-note arriendo-devolucion-field-full">
            <h3 class="arriendo-devolucion-note-title">
              Revisión del vehículo
            </h3>

            <p class="arriendo-devolucion-note-text">
              Si el vehículo está en buenas condiciones, puedes dejarlo como disponible. Si requiere revisión,
              selecciona en mantenimiento. Si no seguirá operativo, selecciona de baja.
            </p>
          </div>

        </form>

        <!-- Acciones -->
        <footer class="arriendo-devolucion-form-actions">
          <NuxtLink :to="`/arriendos/${id}`" class="arriendo-devolucion-secondary-link">
            Cancelar
          </NuxtLink>

          <button type="button" class="arriendo-devolucion-primary-button" :disabled="guardando" @click="registrarDevolucion">
            {{ guardando ? 'Finalizando...' : 'Finalizar arriendo' }}
          </button>
        </footer>

      </article>

      <!-- Resumen lateral -->
      <aside class="arriendo-devolucion-summary-card">

        <header class="arriendo-devolucion-card-header">
          <h2 class="arriendo-devolucion-card-title">
            Resumen del arriendo
          </h2>

          <p class="arriendo-devolucion-card-description">
            Información del arriendo que será finalizado.
          </p>
        </header>

        <div class="arriendo-devolucion-summary-list">

          <div class="arriendo-devolucion-summary-item">
            <span class="arriendo-devolucion-summary-label">
              Cliente
            </span>

            <strong class="arriendo-devolucion-summary-value">
              {{ nombreCliente }}
            </strong>
          </div>

          <div class="arriendo-devolucion-summary-item">
            <span class="arriendo-devolucion-summary-label">
              Vehículo
            </span>

            <strong class="arriendo-devolucion-summary-value">
              {{ nombreVehiculo }}
            </strong>
          </div>

          <div class="arriendo-devolucion-summary-item">
            <span class="arriendo-devolucion-summary-label">
              Patente
            </span>

            <strong class="arriendo-devolucion-summary-value">
              {{ arriendo?.vehiculos?.patente || 'Sin patente' }}
            </strong>
          </div>

          <div class="arriendo-devolucion-summary-item">
            <span class="arriendo-devolucion-summary-label">
              Fecha inicio
            </span>

            <strong class="arriendo-devolucion-summary-value">
              {{ formatDate(arriendo?.fecha_inicio) }}
            </strong>
          </div>

          <div class="arriendo-devolucion-summary-item">
            <span class="arriendo-devolucion-summary-label">
              Fecha término
            </span>

            <strong class="arriendo-devolucion-summary-value">
              {{ formatDate(arriendo?.fecha_termino) }}
            </strong>
          </div>

          <div class="arriendo-devolucion-summary-item">
            <span class="arriendo-devolucion-summary-label">
              Valor total
            </span>

            <strong class="arriendo-devolucion-summary-value">
              {{ formatCurrency(arriendo?.valor_total) }}
            </strong>
          </div>

          <div class="arriendo-devolucion-summary-status">
            <span class="arriendo-devolucion-summary-status-label">
              Estado actual
            </span>

            <strong class="arriendo-devolucion-summary-status-value">
              {{ arriendo?.estado || 'Sin estado' }}
            </strong>
          </div>

        </div>

      </aside>

    </section>

    <!-- Modal confirmar devolución: después se controla con v-if -->
    <section class="arriendo-devolucion-confirm-backdrop" hidden>
      <div class="arriendo-devolucion-confirm-modal">

        <header class="arriendo-devolucion-confirm-header">
          <h2 class="arriendo-devolucion-confirm-title">
            Confirmar devolución
          </h2>
        </header>

        <div class="arriendo-devolucion-confirm-body">
          <p class="arriendo-devolucion-confirm-text">
            ¿Seguro que deseas finalizar este arriendo? Después de confirmar, el arriendo quedará finalizado.
          </p>

          <p class="arriendo-devolucion-confirm-warning">
            Si seleccionaste estado “De baja”, el vehículo quedará inactivo y no podrá reactivarse desde esta página.
          </p>
        </div>

        <footer class="arriendo-devolucion-confirm-actions">
          <button type="button" class="arriendo-devolucion-secondary-button">
            Cancelar
          </button>

          <button type="button" class="arriendo-devolucion-danger-button">
            Confirmar devolución
          </button>
        </footer>

      </div>
    </section>

  </section>
</template>

<script setup lang="ts">
import type { Arriendo } from '~/types/arriendo'
import type { EstadoVehiculo } from '~/types/vehiculo'
import { formatCurrency } from '~/utils/formatCurrency'
import { formatDate } from '~/utils/formatDate'
import { getApiErrorMessage } from '~/utils/getApiErrorMessage'
import { convertirUrlsAJson, subirImagenes } from '~/utils/uploadImagenes'

interface FormularioDevolucion {
  fecha_hora_recepcion: string
  estado_vehiculo_final: Exclude<EstadoVehiculo, 'arrendado'> | ''
}

const route = useRoute()
const id = Number(route.params.id)

const arriendo = ref<Arriendo | null>(null)

const formulario = reactive<FormularioDevolucion>({
  fecha_hora_recepcion: '',
  estado_vehiculo_final: '',
})

const fotosRecepcion = ref<File[] | null>(null)

const cargando = ref(false)
const guardando = ref(false)
const mensajeError = ref('')
const mensajeExito = ref('')

const nombreCliente = computed(() => {
  const cliente = arriendo.value?.clientes
  return cliente ? `${cliente.nombres} ${cliente.apellidos}` : 'Sin cliente'
})

const nombreVehiculo = computed(() => {
  const vehiculo = arriendo.value?.vehiculos
  return vehiculo ? `${vehiculo.marca} ${vehiculo.modelo}` : 'Sin vehiculo'
})

async function cargarArriendo() {
  cargando.value = true
  limpiarMensajes()

  try {
    arriendo.value = await $fetch<Arriendo>(`/api/arriendos/${id}`)
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo cargar el arriendo')
  }
  finally {
    cargando.value = false
  }
}

function limpiarMensajes() {
  mensajeError.value = ''
  mensajeExito.value = ''
}

function validarFormulario() {
  const fotos = obtenerFotosSeleccionadas()

  if (!arriendo.value) {
    mensajeError.value = 'No hay arriendo cargado'
    return false
  }

  if (arriendo.value.estado !== 'vigente') {
    mensajeError.value = 'Solo se puede devolver un arriendo vigente'
    return false
  }

  if (!formulario.fecha_hora_recepcion) {
    mensajeError.value = 'Debes ingresar fecha y hora de recepcion'
    return false
  }

  if (new Date(formulario.fecha_hora_recepcion) < new Date(arriendo.value.fecha_hora_entrega)) {
    mensajeError.value = 'La recepcion no puede ser anterior a la entrega'
    return false
  }

  if (!formulario.estado_vehiculo_final) {
    mensajeError.value = 'Debes seleccionar el estado final del vehiculo'
    return false
  }

  if (fotos.length === 0) {
    mensajeError.value = 'Debes adjuntar al menos una foto de recepcion'
    return false
  }

  return true
}

async function registrarDevolucion() {
  limpiarMensajes()

  if (!validarFormulario()) {
    return
  }

  guardando.value = true

  try {
    const urlsFotos = await subirImagenes(obtenerFotosSeleccionadas())

    await $fetch(`/api/arriendos/${id}/devolucion`, {
      method: 'POST',
      body: {
        fecha_hora_recepcion: formulario.fecha_hora_recepcion,
        estado_vehiculo_final: formulario.estado_vehiculo_final,
        fotos_recepcion: convertirUrlsAJson(urlsFotos),
      },
    })

    mensajeExito.value = 'Devolucion registrada correctamente'
    await navigateTo(`/arriendos/${id}`)
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo registrar la devolucion')
  }
  finally {
    guardando.value = false
  }
}

function obtenerFotosSeleccionadas(): File[] {
  return fotosRecepcion.value ?? []
}

onMounted(() => {
  cargarArriendo()
})
// Lógica pendiente para después:
//
// 1. Obtener el id del arriendo desde la ruta:
// const route = useRoute()
// const id = Number(route.params.id)
//
// 2. Cargar el arriendo desde GET /api/arriendos/:id.
//
// 3. Crear refs para:
// - fecha_hora_recepcion
// - estado_vehiculo_final
// - fotos_recepcion
//
// 4. Enviar POST a:
// /api/arriendos/:id/devolucion
//
// Datos que esta página debe enviar:
// - fecha_hora_recepcion
// - estado_vehiculo_final
// - fotos_recepcion
//
// Estados finales permitidos para el vehículo:
// - disponible
// - en_mantenimiento
// - de_baja
//
// Reglas importantes:
// - Solo se debe devolver un arriendo vigente.
// - Al devolver, el arriendo pasa a estado finalizado.
// - Si estado_vehiculo_final es disponible, el vehículo vuelve a estar disponible.
// - Si estado_vehiculo_final es en_mantenimiento, el vehículo no queda disponible para arriendo.
// - Si estado_vehiculo_final es de_baja, el vehículo queda activo:false y estado: de_baja.
// - Un vehículo de_baja no se reactiva desde esta página.
</script>
