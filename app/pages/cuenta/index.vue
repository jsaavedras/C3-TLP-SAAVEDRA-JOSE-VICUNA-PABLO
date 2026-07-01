<template>
  <!-- Página cuenta -->
  <section class="cuenta-page">

    <!-- Encabezado -->
    <header class="cuenta-header">
      <div>
        <h1 class="cuenta-title">
          Mi cuenta
        </h1>

        <p class="cuenta-description">
          Revisa tus datos de usuario y cambia tu contraseña de acceso al sistema.
        </p>
      </div>
    </header>

    <!-- Contenido principal -->
    <section class="cuenta-layout">

      <!-- Datos de la cuenta -->
      <article class="cuenta-profile-card">

        <header class="cuenta-card-header">
          <h2 class="cuenta-card-title">
            Datos del usuario
          </h2>

          <p class="cuenta-card-description">
            Información asociada a tu sesión actual.
          </p>
        </header>

        <div class="cuenta-profile-grid">

          <div class="cuenta-profile-item">
            <span class="cuenta-profile-label">
              Nombres
            </span>

            <strong class="cuenta-profile-value">
              {{ user?.nombres || 'Sin nombres' }}
            </strong>
          </div>

          <div class="cuenta-profile-item">
            <span class="cuenta-profile-label">
              Apellidos
            </span>

            <strong class="cuenta-profile-value">
              {{ user?.apellidos || 'Sin apellidos' }}
            </strong>
          </div>

          <div class="cuenta-profile-item">
            <span class="cuenta-profile-label">
              RUT
            </span>

            <strong class="cuenta-profile-value">
              {{ user?.rut || 'Sin RUT' }}
            </strong>
          </div>

          <div class="cuenta-profile-item">
            <span class="cuenta-profile-label">
              Correo electrónico
            </span>

            <strong class="cuenta-profile-value">
              {{ user?.email || 'Sin correo' }}
            </strong>
          </div>

          <div class="cuenta-profile-item">
            <span class="cuenta-profile-label">
              Perfil
            </span>

            <strong class="cuenta-profile-value">
              {{ perfilUsuario }}
            </strong>
          </div>

          <div class="cuenta-profile-item">
            <span class="cuenta-profile-label">
              Estado
            </span>

            <span class="cuenta-status cuenta-status-activo">
              Activo
            </span>
          </div>

        </div>

      </article>

      <!-- Cambio de contraseña -->
      <article class="cuenta-password-card">

        <header class="cuenta-card-header">
          <h2 class="cuenta-card-title">
            Cambiar contraseña
          </h2>

          <p class="cuenta-card-description">
            Actualiza tu contraseña actual por una nueva contraseña segura.
          </p>
        </header>

        <form class="cuenta-password-form" @submit.prevent="cambiarPassword">

          <!-- Contraseña actual -->
          <div class="cuenta-field">
            <label class="cuenta-label">
              Contraseña actual
            </label>

            <input
              v-model="formulario.passwordActual"
              type="password"
              class="cuenta-input"
              placeholder="Ingresa tu contraseña actual"
              autocomplete="current-password"
            >
          </div>

          <!-- Nueva contraseña -->
          <div class="cuenta-field">
            <label class="cuenta-label">
              Nueva contraseña
            </label>

            <input
              v-model="formulario.passwordNueva"
              type="password"
              class="cuenta-input"
              placeholder="Mínimo 8 caracteres"
              autocomplete="new-password"
            >

            <p class="cuenta-help">
              La nueva contraseña debe tener al menos 8 caracteres.
            </p>
          </div>

          <!-- Confirmar nueva contraseña -->
          <div class="cuenta-field">
            <label class="cuenta-label">
              Confirmar nueva contraseña
            </label>

            <input
              v-model="formulario.passwordConfirmacion"
              type="password"
              class="cuenta-input"
              placeholder="Repite la nueva contraseña"
              autocomplete="new-password"
            >
          </div>

          <!-- Mensaje de error -->
          <div v-if="mensajeError" class="cuenta-message cuenta-message-error">
            {{ mensajeError }}
          </div>

          <!-- Mensaje de éxito -->
          <div v-if="mensajeExito" class="cuenta-message cuenta-message-success">
            {{ mensajeExito }}
          </div>

        </form>

        <footer class="cuenta-password-actions">
          <button type="button" class="cuenta-primary-button" :disabled="guardando" @click="cambiarPassword">
            {{ guardando ? 'Guardando...' : 'Guardar nueva contraseña' }}
          </button>
        </footer>

      </article>

    </section>

    <!-- Información de seguridad -->
    <section class="cuenta-info-card">
      <h2 class="cuenta-info-title">
        Seguridad de la cuenta
      </h2>

      <p class="cuenta-info-text">
        Por seguridad, el sistema no muestra tu contraseña actual. Si cambias la contraseña, deberás usar la nueva en tu
        próximo inicio de sesión.
      </p>
    </section>

  </section>
</template>

<script setup lang="ts">
import { getProfileLabel } from '~/utils/formatStyle'
import { getApiErrorMessage } from '~/utils/getApiErrorMessage'

interface FormularioPassword {
  passwordActual: string
  passwordNueva: string
  passwordConfirmacion: string
}

const { user } = useUserSession()

const formulario = reactive<FormularioPassword>({
  passwordActual: '',
  passwordNueva: '',
  passwordConfirmacion: '',
})

const guardando = ref(false)
const mensajeError = ref('')
const mensajeExito = ref('')

const perfilUsuario = computed(() => {
  return user.value?.perfilNombre ? getProfileLabel(user.value.perfilNombre) : 'Sin perfil'
})

function limpiarMensajes() {
  mensajeError.value = ''
  mensajeExito.value = ''
}

function limpiarFormulario() {
  formulario.passwordActual = ''
  formulario.passwordNueva = ''
  formulario.passwordConfirmacion = ''
}

function validarFormulario() {
  if (!formulario.passwordActual) {
    mensajeError.value = 'Debes ingresar tu contraseña actual'
    return false
  }

  if (!formulario.passwordNueva) {
    mensajeError.value = 'Debes ingresar una nueva contraseña'
    return false
  }

  if (formulario.passwordNueva.length < 8) {
    mensajeError.value = 'La nueva contraseña debe tener al menos 8 caracteres'
    return false
  }

  if (formulario.passwordNueva !== formulario.passwordConfirmacion) {
    mensajeError.value = 'La confirmación no coincide con la nueva contraseña'
    return false
  }

  return true
}

async function cambiarPassword() {
  limpiarMensajes()

  if (!validarFormulario()) {
    return
  }

  guardando.value = true

  try {
    await $fetch('/api/cuenta/password', {
      method: 'PUT',
      body: {
        passwordActual: formulario.passwordActual,
        passwordNueva: formulario.passwordNueva,
      },
    })

    limpiarFormulario()
    mensajeExito.value = 'Contraseña actualizada correctamente'
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo cambiar la contraseña')
  }
  finally {
    guardando.value = false
  }
}

// Lógica pendiente para después:
//
// 1. Obtener usuario de sesión:
// const { user } = useUserSession()
//
// 2. Mostrar datos reales:
// user.value?.nombres
// user.value?.apellidos
// user.value?.rut
// user.value?.email
// user.value?.perfilNombre
//
// 3. Crear refs para:
// - passwordActual
// - passwordNueva
// - passwordConfirmacion
// - mensajeError
// - mensajeExito
// - cargando
//
// 4. Validar antes de enviar:
// - contraseña actual obligatoria
// - nueva contraseña obligatoria
// - nueva contraseña mínimo 8 caracteres
// - confirmación debe coincidir con nueva contraseña
//
// 5. Enviar PUT a:
// /api/cuenta/password
//
// Datos que esta página debe enviar:
// - password_actual
// - password_nueva
//
// Reglas importantes:
// - El frontend nunca trabaja con password_hash.
// - El backend valida la contraseña actual.
// - El backend no permite reutilizar la contraseña actual.
// - El backend genera el nuevo hash.
</script>
