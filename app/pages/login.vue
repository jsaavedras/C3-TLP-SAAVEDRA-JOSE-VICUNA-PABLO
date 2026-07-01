<template>
  <!-- Página de inicio de sesión -->
  <section class="login-page">

    <!-- Contenedor principal de la página de inicio de sesión -->
    <div class="login-layout">

      <!-- Parte de texto -->
      <div class="login-info">

        <!-- Caja de información -->
        <div class="login-info-box">


          <!-- Título de la información -->
          <h1 class="login-info-title">
            Arriendo de vehículos
          </h1>

          <!-- Texto de la información -->
          <p class="login-info-text">
            Sistema de gestión para administradores y ejecutivos.
          </p>

        </div>

      </div>

      <!-- Parte del formulario -->
      <div class="login-form-side">


        <!-- Tarjeta de inicio de sesión -->
        <div class="login-card">


          <!-- Título de inicio de sesión -->
          <h2 class="login-title">
            Iniciar sesión
          </h2>

          <!-- Formulario de inicio de sesión -->
          <form @submit.prevent="iniciarSesion">


            <!-- Campo de correo electrónico -->
            <div class="login-field">

              <!-- label es el texto que se muestra al usuario para indicar qué debe ingresar en el campo de correo electrónico -->
              <label for="email" class="login-label">
                Correo electrónico
              </label>


              <!-- v-model= Conexión a la variable email y input es el campo de entrada -->
              <input class="login-input" id="email" v-model="email" type="email" placeholder="Ingrese su correo"
                required autocomplete="email">
            </div>


            <!-- Campo de contraseña -->
            <div class="login-field">


              <!-- label es el texto que se muestra al usuario para indicar qué debe ingresar en el campo de contraseña -->
              <label for="password" class="login-label">
                Contraseña
              </label>

              <!-- v-model= Conexión a la variable password y input es el campo de entrada -->
              <input class="login-input" id="password" v-model="password" type="password"
                placeholder="Ingrese su contraseña" required autocomplete="current-password">
            </div>


            <!-- Muestra el mensaje de error si existe -->
            <p v-if="error" class="login-error">
              {{ error }}
            </p>


            <!-- Botón de inicio de sesión -->
            <button class="login-button" type="submit" :disabled="cargando">
              <!-- Muestra un mensaje diferente en el botón dependiendo de si se está procesando la solicitud de inicio de sesión o no -->
              {{ cargando ? 'Iniciando sesión...' : 'Iniciar sesión' }}

            </button>


          </form>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">

definePageMeta({
  layout: 'auth'
})

const email = ref('') // Variable para almacenar el correo electrónico ingresado por el usuario
const password = ref('') // Variable para almacenar la contraseña ingresada por el usuario
const error = ref('') // Variable para almacenar el mensaje de error en caso de que las credenciales sean inválidas
const cargando = ref(false) // Variable para indicar si se está procesando la solicitud de inicio de sesión
const { fetch: fetchSession } = useUserSession() // Función para actualizar la sesión del usuario después de iniciar sesión

// Función para manejar el inicio de sesión
async function iniciarSesion() {

  error.value = '' // Reinicia el mensaje de error antes de intentar iniciar sesión
  cargando.value = true // Indica que se está procesando la solicitud de inicio de sesión


  // Realiza la solicitud de inicio de sesión al servidor
  try {
    // Llamada a la API para iniciar sesión
    await $fetch('/api/auth/login', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value
      }
    })
    await fetchSession() // Actualiza la sesión del usuario después de iniciar sesión
    await navigateTo('/dashboard') // Redirige al usuario a la página principal después de iniciar sesión
  }
  // Maneja los errores de inicio de sesión
  catch { error.value = 'Credenciales inválidas' }

  // Asegura que la variable cargando se establezca en false para que el usuario pueda volver a intentar iniciar sesión
  finally { cargando.value = false }
}
</script>