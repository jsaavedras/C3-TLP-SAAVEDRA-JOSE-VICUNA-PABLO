export default defineNuxtRouteMiddleware(async (to) => {
  // Obtener la sesión del usuario desde el composable useUserSession
  const { user, fetch: fetchSession } = useUserSession()

  await fetchSession()

  const rutasPublicas = [
    '/login',
    '/no-autorizado'
  ]

  // Verificar si la ruta actual es pública
  const esRutaPublica = rutasPublicas.includes(to.path)

   // Redirigir a la página de inicio de sesión si el usuario no está autenticado y la ruta no es pública
  if (!user.value && !esRutaPublica) {
    return navigateTo('/login')
  }

  // Redirigir a la página de dashboard si el usuario está autenticado y la ruta es la página de inicio de sesión
  if (user.value && to.path === '/login') {
    return navigateTo('/dashboard')
  }

  // Normalizar el nombre del perfil del usuario para comparaciones
  const perfil = user.value?.perfilNombre
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()

  // Verificar si el usuario tiene un perfil de administrador
  const esAdministrador = perfil === 'administrador' || perfil === 'admin'

  // Definir las rutas que solo pueden ser accedidas por administradores
  const rutasSoloAdministrador = [
    '/admin/usuarios',
    '/admin/tipos'
  ]

  // Verificar si la ruta actual es una ruta que solo puede ser accedida por administradores
  const esRutaSoloAdministrador = rutasSoloAdministrador.some((ruta) => {
    return to.path === ruta || to.path.startsWith(`${ruta}/`) // Permitir subrutas
  })

  if (user.value && esRutaSoloAdministrador && !esAdministrador) {
    return navigateTo('/no-autorizado')
  }
})