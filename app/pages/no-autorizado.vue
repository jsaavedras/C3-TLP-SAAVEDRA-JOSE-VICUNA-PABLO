<template>
  <!-- Página de acceso no autorizado -->
  <section class="unauthorized-page">

    <!-- Tarjeta principal -->
    <article class="unauthorized-card">

      <!-- Ícono visual -->
      <div class="unauthorized-icon">
        🔒
      </div>

      <!-- Título principal -->
      <h1 class="unauthorized-title">
        Acceso no autorizado
      </h1>

      <!-- Mensaje explicativo -->
      <p class="unauthorized-text">
        No tienes permisos para acceder a esta sección del sistema.
      </p>

      <!-- Acción principal -->
      <NuxtLink to="/dashboard" class="unauthorized-button">
        Volver al dashboard
      </NuxtLink>

    </article>

  </section>
</template>

<script setup lang="ts">
// Aquí irá la lógica si después queremos:
// - Verificar usuario logueado
// - Redirigir automáticamente después de unos segundos
// - Mostrar mensaje personalizado según el perfil
</script>