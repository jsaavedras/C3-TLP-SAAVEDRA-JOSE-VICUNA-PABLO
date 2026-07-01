<template>
  <!-- Menú lateral principal del sistema -->
  <aside class="app-sidebar">

    <!-- Encabezado del sidebar -->
    <div class="app-sidebar-header">
      <span class="app-sidebar-title">
        Panel
      </span>

      <span class="app-sidebar-subtitle">
        Menú principal
      </span>
    </div>

    <!-- Navegación del sistema -->
    <nav class="app-sidebar-nav">

      <!-- Enlaces visibles según el perfil del usuario -->
      <NuxtLink v-for="item in menuVisible" :key="item.to" :to="item.to" class="app-sidebar-link"
        :class="{ 'app-sidebar-link-active': esRutaActiva(item.to) }">
        <span class="app-sidebar-icon">
          {{ item.icon }}
        </span>

        <span class="app-sidebar-text">
          {{ item.label }}
        </span>
      </NuxtLink>

    </nav>

    <!-- Información inferior -->
    <div class="app-sidebar-footer">
      <span class="app-sidebar-footer-label">
        Perfil actual
      </span>

      <span class="app-sidebar-footer-role">
        {{ user?.perfilNombre }}
      </span>
    </div>

  </aside>
</template>

<script setup lang="ts">
type PerfilUsuario = 'administrador' | 'ejecutivo'

interface MenuItem {
  label: string
  to: string
  icon: string
  perfiles: PerfilUsuario[]
}

const route = useRoute()
const { user } = useUserSession()

const menuItems: MenuItem[] = [
  {
    label: 'Dashboard',
    to: '/dashboard',
    icon: '🏠',
    perfiles: ['administrador', 'ejecutivo']
  },
  {
    label: 'Usuarios',
    to: '/admin/usuarios',
    icon: '👥',
    perfiles: ['administrador']
  },
  {
    label: 'Tipos de vehículos',
    to: '/admin/tipos',
    icon: '🏷️',
    perfiles: ['administrador']
  },
  {
    label: 'Vehículos',
    to: '/vehiculos',
    icon: '🚗',
    perfiles: ['administrador', 'ejecutivo']
  },
  {
    label: 'Clientes',
    to: '/clientes',
    icon: '🪪',
    perfiles: ['administrador', 'ejecutivo']
  },
  {
    label: 'Arriendos',
    to: '/arriendos',
    icon: '📄',
    perfiles: ['administrador', 'ejecutivo']
  },
  {
    label: 'Cuenta',
    to: '/cuenta',
    icon: '⚙️',
    perfiles: ['administrador', 'ejecutivo']
  }
]

const perfilActual = computed<PerfilUsuario | null>(() => {
  const perfil = user.value?.perfilNombre
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()

  if (perfil === 'administrador' || perfil === 'admin') {
    return 'administrador'
  }

  if (perfil === 'ejecutivo') {
    return 'ejecutivo'
  }

  return null
})

 // Filtra los elementos del menú según el perfil del usuario
const menuVisible = computed(() => {
  // Si no hay perfil actual, no mostramos ningún elemento del menú
  if (!perfilActual.value) {
    return []
  }

  // Filtramos los elementos del menú según el perfil del usuario
  return menuItems.filter((item) => {
    return item.perfiles.includes(perfilActual.value!)
  })
})
// Función para determinar si una ruta está activa
function esRutaActiva(path: string) {
  // Verifica si la ruta actual coincide con el enlace del menú o si es una subruta
  return route.path === path || route.path.startsWith(`${path}/`)
}
</script>