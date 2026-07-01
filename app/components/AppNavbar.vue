<template>
  <!-- Barra de navegación superior de la aplicación. -->
  <header class="app-navbar">


    <!-- Marca de la aplicación. -->
    <div class="app-navbar-brand">
      Arriendo de vehículos
    </div>

    <!-- Información del usuario y botón de cierre de sesión. -->
    <div class="app-navbar-user">


      <!-- Información del usuario: nombre completo y rol. -->
      <div class="app-navbar-user-info">

        <!-- Nombre completo del usuario. -->
        <span class="app-navbar-user-name">
          {{ user?.nombres }} {{ user?.apellidos }}
        </span>

        <!-- Rol del usuario. -->
        <span class="app-navbar-user-role">
          {{ user?.perfilNombre }}
        </span>

      </div>

      <!-- Botón de cierre de sesión. -->
      <button class="app-navbar-button" type="button" @click="cerrarSesion" :disabled="cerrandoSesion">
        {{ cerrandoSesion ? 'Cerrando sesión...' : 'Cerrar sesión' }}
      </button>


    </div>


  </header>
</template>

<script setup lang="ts">


const { user, fetch: fetchSession } = useUserSession()
const cerrandoSesion = ref(false)

async function cerrarSesion() {
  cerrandoSesion.value = true

  try {
    await $fetch('/api/auth/logout', {
      method: 'POST'
    })
    await fetchSession()
    await navigateTo('/login')
  }
  finally {
    cerrandoSesion.value = false
  }
}
</script>