<template>
  <!-- Layout principal del sistema -->
  <div class="admin-layout">

    <!-- Botón para abrir el sidebar en pantallas pequeñas y medianas -->
    <button class="mobile-sidebar-button" type="button" aria-label="Abrir menú lateral" @click="abrirMenuMovil">
      ☰
    </button>

    <!-- Fondo oscuro cuando el sidebar móvil está abierto -->
    <div v-if="menuMovilAbierto" class="mobile-sidebar-backdrop" @click="cerrarMenuMovil" />

    <!-- Sidebar lateral -->
    <aside class="admin-sidebar" :class="{ 'admin-sidebar-open': menuMovilAbierto }">
      
      <AppSidebar />
      
    </aside>

    <!-- Contenido principal del sistema -->
    <div class="admin-content">

      <!-- Barra superior -->
      <AppNavbar />

      <!-- Contenido de cada página -->
      <main class="admin-page">
        <slot />
      </main>

    </div>
  </div>
</template>

<script setup lang="ts">
// Obtenemos la ruta actual para cerrar el menú cuando el usuario navegue
const route = useRoute()

// Estado que controla si el sidebar móvil está abierto
const menuMovilAbierto = ref(false)

// Abre el sidebar en pantallas pequeñas y medianas
function abrirMenuMovil() {
  menuMovilAbierto.value = true
}

// Cierra el sidebar
function cerrarMenuMovil() {
  menuMovilAbierto.value = false
}

// Cada vez que cambia la ruta, cerramos el sidebar automáticamente
watch(
  () => route.fullPath,
  () => {
    cerrarMenuMovil()
  }
)
</script>