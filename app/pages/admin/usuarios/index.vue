<template>
  <!-- Página usuarios -->
  <section class="usuarios-page">

    <!-- Encabezado -->
    <header class="usuarios-header">
      <div>
        <h1 class="usuarios-title">
          Usuarios
        </h1>

        <p class="usuarios-description">
          Administra las cuentas de acceso al sistema, sus perfiles, estado y datos principales.
        </p>
      </div>

      <div class="usuarios-header-actions">
        <button type="button" class="usuarios-primary-button" @click="abrirModalCrear">
          Nuevo usuario
        </button>
      </div>
    </header>

    <!-- Resumen -->
    <section class="usuarios-summary-grid">

      <article class="usuarios-summary-card">
        <span class="usuarios-summary-label">
          Usuarios activos
        </span>

        <strong class="usuarios-summary-value">
          {{ resumen.activos }}
        </strong>

        <p class="usuarios-summary-text">
          Cuentas habilitadas para ingresar
        </p>
      </article>

      <article class="usuarios-summary-card">
        <span class="usuarios-summary-label">
          Usuarios inactivos
        </span>

        <strong class="usuarios-summary-value">
          {{ resumen.inactivos }}
        </strong>

        <p class="usuarios-summary-text">
          Cuentas desactivadas del sistema
        </p>
      </article>

      <article class="usuarios-summary-card">
        <span class="usuarios-summary-label">
          Administradores
        </span>

        <strong class="usuarios-summary-value">
          {{ resumen.administradores }}
        </strong>

        <p class="usuarios-summary-text">
          Usuarios con permisos completos
        </p>
      </article>

      <article class="usuarios-summary-card">
        <span class="usuarios-summary-label">
          Ejecutivos
        </span>

        <strong class="usuarios-summary-value">
          {{ resumen.ejecutivos }}
        </strong>

        <p class="usuarios-summary-text">
          Usuarios operativos del sistema
        </p>
      </article>

    </section>

    <!-- Filtros -->
    <section class="usuarios-filters-card">

      <div class="usuarios-filters-grid">

        <div class="usuarios-field">
          <label class="usuarios-label">
            Buscar usuario
          </label>

          <input v-model="busqueda" type="text" class="usuarios-input" placeholder="Buscar por RUT, nombre, apellido o correo">
        </div>

        <div class="usuarios-field">
          <label class="usuarios-label">
            Perfil
          </label>

          <select v-model="filtroPerfil" class="usuarios-select">
            <option value="">
              Todos los perfiles
            </option>

            <option value="administrador">
              Administrador
            </option>

            <option value="ejecutivo">
              Ejecutivo
            </option>
          </select>
        </div>

        <div class="usuarios-field">
          <label class="usuarios-label">
            Estado
          </label>

          <select v-model="filtroEstado" class="usuarios-select">
            <option value="">
              Todos los estados
            </option>

            <option value="activo">
              Activo
            </option>

            <option value="inactivo">
              Inactivo
            </option>
          </select>
        </div>

      </div>

    </section>

    <div v-if="mensajeError" class="mb-4 rounded-lg bg-red-50 p-4 text-sm font-bold text-red-800">
      {{ mensajeError }}
    </div>

    <div v-if="mensajeExito" class="mb-4 rounded-lg bg-green-50 p-4 text-sm font-bold text-green-800">
      {{ mensajeExito }}
    </div>

    <section v-if="cargando" class="rounded-lg bg-white p-6 text-center text-sm font-bold text-slate-600">
      Cargando usuarios...
    </section>

    <section v-else-if="usuariosFiltrados.length > 0" class="rounded-lg border border-slate-200 bg-white shadow-sm">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-slate-200 text-sm">
          <thead class="bg-slate-50">
            <tr>
              <th class="px-4 py-3 text-left font-bold text-slate-600">Usuario</th>
              <th class="px-4 py-3 text-left font-bold text-slate-600">RUT</th>
              <th class="px-4 py-3 text-left font-bold text-slate-600">Correo</th>
              <th class="px-4 py-3 text-left font-bold text-slate-600">Perfil</th>
              <th class="px-4 py-3 text-left font-bold text-slate-600">Estado</th>
              <th class="px-4 py-3 text-left font-bold text-slate-600">Creado</th>
              <th class="px-4 py-3 text-right font-bold text-slate-600">Acciones</th>
            </tr>
          </thead>

          <tbody class="divide-y divide-slate-100">
            <tr v-for="usuario in usuariosFiltrados" :key="usuario.id">
              <td class="px-4 py-3 font-bold text-slate-900">
                {{ usuario.nombres }} {{ usuario.apellidos }}
              </td>
              <td class="px-4 py-3 text-slate-700">
                {{ usuario.rut }}
              </td>
              <td class="px-4 py-3 text-slate-700">
                {{ usuario.email }}
              </td>
              <td class="px-4 py-3">
                <BaseStatusBadge :tipo="usuario.perfiles?.nombre || 'ejecutivo'" />
              </td>
              <td class="px-4 py-3">
                <BaseStatusBadge :tipo="usuario.activo ? 'activo' : 'inactivo'" />
              </td>
              <td class="px-4 py-3 text-slate-700">
                {{ formatDate(usuario.created_at) }}
              </td>
              <td class="px-4 py-3">
                <div class="flex justify-end gap-2">
                  <button type="button" class="usuarios-secondary-button" @click="abrirModalEditar(usuario)">
                    Editar
                  </button>

                  <button
                    v-if="puedeDesactivar(usuario)"
                    type="button"
                    class="usuarios-danger-button"
                    @click="pedirDesactivar(usuario)"
                  >
                    Desactivar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <BaseEmptyState
      v-else
      titulo="No hay usuarios para mostrar"
      mensaje="Cuando registres usuarios, apareceran en esta seccion."
      accion-texto="Nuevo usuario"
      @accion="abrirModalCrear"
    />

    <section v-if="modalAbierto" class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4">
      <div class="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-white p-6 shadow-xl">
        <header class="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 class="text-xl font-bold text-slate-900">
              {{ modoFormulario === 'crear' ? 'Nuevo usuario' : 'Editar usuario' }}
            </h2>
            <p class="text-sm text-slate-600">
              Asigna datos de acceso y perfil del sistema.
            </p>
          </div>

          <button type="button" class="text-2xl font-bold text-slate-500 hover:text-slate-900" @click="cerrarModal">
            x
          </button>
        </header>

        <UsuarioForm
          :usuario="elementoSeleccionado"
          :perfiles="perfiles"
          :modo="modoFormulario"
          :guardando="guardando"
          @guardar="guardarUsuario"
          @cancelar="cerrarModal"
        />

        <p v-if="elementoSeleccionado && esUsuarioActual(elementoSeleccionado)" class="mt-3 rounded-lg bg-yellow-50 p-3 text-sm font-bold text-yellow-800">
          Tu propia cuenta no puede cambiar perfil ni estado desde esta pantalla.
        </p>
      </div>
    </section>

    <BaseConfirmModal
      :abierto="confirmacionAbierta"
      titulo="Desactivar usuario"
      :mensaje="mensajeConfirmacion"
      texto-confirmar="Desactivar"
      tipo="danger"
      :cargando="guardando"
      @cancelar="cerrarConfirmacion"
      @confirmar="desactivarUsuario"
    />

    <!-- Tabla de usuarios -->
    <section v-if="false" class="usuarios-table-card">

      <div class="usuarios-table-wrapper">

        <table class="usuarios-table">
          <thead>
            <tr>
              <th>Usuario</th>
              <th>RUT</th>
              <th>Correo</th>
              <th>Perfil</th>
              <th>Estado</th>
              <th>Creado</th>
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
                12.345.678-9
              </td>

              <td>
                juan@sistema.cl
              </td>

              <td>
                <span class="usuarios-profile usuarios-profile-admin">
                  Administrador
                </span>
              </td>

              <td>
                <span class="usuarios-status usuarios-status-activo">
                  Activo
                </span>
              </td>

              <td>
                2026-01-01
              </td>

              <td>
                <div class="usuarios-table-actions">
                  <button type="button" class="usuarios-secondary-button">
                    Editar
                  </button>

                  <button type="button" class="usuarios-danger-button">
                    Desactivar
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>

      </div>

    </section>

    <!-- Vista móvil -->
    <section v-if="false" class="usuarios-mobile-list">

      <!-- Card de ejemplo: después se repetirá con v-for -->
      <article class="usuarios-mobile-card">

        <header class="usuarios-mobile-card-header">
          <div>
            <h2 class="usuarios-mobile-card-title">
              Juan Pérez
            </h2>

            <p class="usuarios-mobile-card-subtitle">
              12.345.678-9 · juan@sistema.cl
            </p>
          </div>

          <span class="usuarios-status usuarios-status-activo">
            Activo
          </span>
        </header>

        <div class="usuarios-mobile-info-grid">

          <div class="usuarios-mobile-info-item">
            <span class="usuarios-mobile-info-label">
              Perfil
            </span>

            <strong class="usuarios-mobile-info-value">
              Administrador
            </strong>
          </div>

          <div class="usuarios-mobile-info-item">
            <span class="usuarios-mobile-info-label">
              Fecha creación
            </span>

            <strong class="usuarios-mobile-info-value">
              2026-01-01
            </strong>
          </div>

        </div>

        <footer class="usuarios-mobile-actions">
          <button type="button" class="usuarios-secondary-button">
            Editar
          </button>

          <button type="button" class="usuarios-danger-button">
            Desactivar
          </button>
        </footer>

      </article>

    </section>

    <!-- Estado vacío -->
    <section v-if="false" class="usuarios-empty" hidden>
      <h2 class="usuarios-empty-title">
        No hay usuarios para mostrar
      </h2>

      <p class="usuarios-empty-text">
        Cuando registres usuarios, aparecerán en esta sección.
      </p>
    </section>

    <!-- Modal crear / editar usuario -->
    <section v-if="false" class="usuarios-modal-backdrop" hidden>
      <div class="usuarios-modal">

        <header class="usuarios-modal-header">
          <h2 class="usuarios-modal-title">
            Nuevo usuario
          </h2>

          <button type="button" class="usuarios-modal-close">
            ×
          </button>
        </header>

        <form class="usuarios-form">

          <div class="usuarios-field">
            <label class="usuarios-label">
              Perfil
            </label>

            <select class="usuarios-select">
              <option value="">
                Selecciona un perfil
              </option>

              <option value="1">
                Administrador
              </option>

              <option value="2">
                Ejecutivo
              </option>
            </select>
          </div>

          <div class="usuarios-field">
            <label class="usuarios-label">
              RUT
            </label>

            <input type="text" class="usuarios-input" placeholder="Ej: 12.345.678-9">
          </div>

          <div class="usuarios-field">
            <label class="usuarios-label">
              Nombres
            </label>

            <input type="text" class="usuarios-input" placeholder="Ej: Juan">
          </div>

          <div class="usuarios-field">
            <label class="usuarios-label">
              Apellidos
            </label>

            <input type="text" class="usuarios-input" placeholder="Ej: Pérez">
          </div>

          <div class="usuarios-field usuarios-field-full">
            <label class="usuarios-label">
              Correo electrónico
            </label>

            <input type="email" class="usuarios-input" placeholder="Ej: usuario@sistema.cl">
          </div>

          <div class="usuarios-field">
            <label class="usuarios-label">
              Contraseña
            </label>

            <input type="password" class="usuarios-input" placeholder="Mínimo 8 caracteres">

            <p class="usuarios-help">
              Al crear usuario, la contraseña es obligatoria. Al editar, puede quedar vacía si no se desea cambiar.
            </p>
          </div>

          <div class="usuarios-field">
            <label class="usuarios-label">
              Estado
            </label>

            <select class="usuarios-select">
              <option value="true">
                Activo
              </option>

              <option value="false">
                Inactivo
              </option>
            </select>
          </div>

        </form>

        <footer class="usuarios-modal-actions">
          <button type="button" class="usuarios-secondary-button">
            Cancelar
          </button>

          <button type="button" class="usuarios-primary-button">
            Guardar usuario
          </button>
        </footer>

      </div>
    </section>

    <!-- Modal confirmar desactivación -->
    <section v-if="false" class="usuarios-confirm-backdrop" hidden>
      <div class="usuarios-confirm-modal">

        <header class="usuarios-confirm-header">
          <h2 class="usuarios-confirm-title">
            Confirmar desactivación
          </h2>
        </header>

        <div class="usuarios-confirm-body">
          <p class="usuarios-confirm-text">
            ¿Seguro que deseas desactivar este usuario? No se eliminará del sistema, pero no podrá iniciar sesión.
          </p>

          <p class="usuarios-confirm-warning">
            Un administrador no debería desactivar su propia cuenta desde esta acción.
          </p>
        </div>

        <footer class="usuarios-confirm-actions">
          <button type="button" class="usuarios-secondary-button">
            Cancelar
          </button>

          <button type="button" class="usuarios-danger-button">
            Confirmar desactivación
          </button>
        </footer>

      </div>
    </section>

  </section>
</template>

<script setup lang="ts">
import type { Perfil } from '~/types/perfil'
import type { Usuario } from '~/types/usuario'
import { formatDate } from '~/utils/formatDate'
import { getApiErrorMessage } from '~/utils/getApiErrorMessage'

type ModoFormulario = 'crear' | 'editar'

interface UsuarioFormData {
  perfil_id: number | null
  rut: string
  nombres: string
  apellidos: string
  email: string
  password?: string
  activo: boolean
}

interface UsuarioRespuesta {
  usuario: Usuario
}

const { user } = useUserSession()

const usuarios = ref<Usuario[]>([])
const perfiles = ref<Perfil[]>([
  { id: 1, nombre: 'administrador' },
  { id: 2, nombre: 'ejecutivo' },
])

const busqueda = ref('')
const filtroPerfil = ref('')
const filtroEstado = ref('')

const modalAbierto = ref(false)
const confirmacionAbierta = ref(false)
const modoFormulario = ref<ModoFormulario>('crear')
const elementoSeleccionado = ref<Usuario | null>(null)
const cargando = ref(false)
const guardando = ref(false)
const mensajeError = ref('')
const mensajeExito = ref('')

const usuariosFiltrados = computed(() => {
  const texto = busqueda.value.trim().toLowerCase()

  return usuarios.value.filter((usuario) => {
    const nombreCompleto = `${usuario.nombres} ${usuario.apellidos}`.toLowerCase()
    const perfil = usuario.perfiles?.nombre ?? ''
    const estado = usuario.activo ? 'activo' : 'inactivo'

    const coincideTexto = !texto
      || usuario.rut.toLowerCase().includes(texto)
      || nombreCompleto.includes(texto)
      || usuario.email.toLowerCase().includes(texto)

    const coincidePerfil = !filtroPerfil.value || perfil === filtroPerfil.value
    const coincideEstado = !filtroEstado.value || estado === filtroEstado.value

    return coincideTexto && coincidePerfil && coincideEstado
  })
})

const resumen = computed(() => {
  return {
    activos: usuarios.value.filter((usuario) => usuario.activo).length,
    inactivos: usuarios.value.filter((usuario) => !usuario.activo).length,
    administradores: usuarios.value.filter((usuario) => usuario.perfiles?.nombre === 'administrador').length,
    ejecutivos: usuarios.value.filter((usuario) => usuario.perfiles?.nombre === 'ejecutivo').length,
  }
})

const mensajeConfirmacion = computed(() => {
  if (!elementoSeleccionado.value) {
    return 'Seguro que deseas desactivar este usuario?'
  }

  return `Seguro que deseas desactivar a ${elementoSeleccionado.value.nombres} ${elementoSeleccionado.value.apellidos}?`
})

async function cargarUsuarios() {
  cargando.value = true
  mensajeError.value = ''

  try {
    usuarios.value = await $fetch<Usuario[]>('/api/usuarios')
    cargarPerfilesDesdeUsuarios()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudieron cargar los usuarios')
  }
  finally {
    cargando.value = false
  }
}

function cargarPerfilesDesdeUsuarios() {
  const perfilesPorNombre = new Map<string, Perfil>()

  for (const usuario of usuarios.value) {
    if (usuario.perfiles) {
      perfilesPorNombre.set(usuario.perfiles.nombre, usuario.perfiles)
    }
  }

  for (const perfil of perfiles.value) {
    if (!perfilesPorNombre.has(perfil.nombre)) {
      perfilesPorNombre.set(perfil.nombre, perfil)
    }
  }

  perfiles.value = Array.from(perfilesPorNombre.values())
}

function abrirModalCrear() {
  limpiarMensajes()
  modoFormulario.value = 'crear'
  elementoSeleccionado.value = null
  modalAbierto.value = true
}

function abrirModalEditar(usuario: Usuario) {
  limpiarMensajes()
  modoFormulario.value = 'editar'
  elementoSeleccionado.value = usuario
  modalAbierto.value = true
}

function cerrarModal() {
  modalAbierto.value = false
  elementoSeleccionado.value = null
}

async function guardarUsuario(datos: UsuarioFormData) {
  guardando.value = true
  limpiarMensajes()

  try {
    if (modoFormulario.value === 'crear') {
      const respuesta = await $fetch<UsuarioRespuesta>('/api/usuarios', {
        method: 'POST',
        body: {
          perfil_id: datos.perfil_id,
          rut: datos.rut,
          nombres: datos.nombres,
          apellidos: datos.apellidos,
          email: datos.email,
          password: datos.password,
        },
      })

      if (!datos.activo && respuesta.usuario?.id) {
        await $fetch(`/api/usuarios/${respuesta.usuario.id}`, {
          method: 'PUT',
          body: { activo: false },
        })
      }

      mensajeExito.value = 'Usuario creado correctamente'
    }
    else if (elementoSeleccionado.value) {
      const payload: Record<string, unknown> = {
        rut: datos.rut,
        nombres: datos.nombres,
        apellidos: datos.apellidos,
        email: datos.email,
      }

      if (!esUsuarioActual(elementoSeleccionado.value)) {
        payload.perfil_id = datos.perfil_id
        payload.activo = datos.activo
      }

      if (datos.password) {
        payload.password = datos.password
      }

      await $fetch(`/api/usuarios/${elementoSeleccionado.value.id}`, {
        method: 'PUT',
        body: payload,
      })

      mensajeExito.value = 'Usuario actualizado correctamente'
    }

    cerrarModal()
    await cargarUsuarios()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo guardar el usuario')
  }
  finally {
    guardando.value = false
  }
}

function pedirDesactivar(usuario: Usuario) {
  limpiarMensajes()
  elementoSeleccionado.value = usuario
  confirmacionAbierta.value = true
}

function cerrarConfirmacion() {
  confirmacionAbierta.value = false
  elementoSeleccionado.value = null
}

async function desactivarUsuario() {
  if (!elementoSeleccionado.value) {
    return
  }

  guardando.value = true
  limpiarMensajes()

  try {
    await $fetch(`/api/usuarios/${elementoSeleccionado.value.id}`, {
      method: 'DELETE',
    })

    mensajeExito.value = 'Usuario desactivado correctamente'
    cerrarConfirmacion()
    await cargarUsuarios()
  }
  catch (error) {
    mensajeError.value = getApiErrorMessage(error, 'No se pudo desactivar el usuario')
  }
  finally {
    guardando.value = false
  }
}

function puedeDesactivar(usuario: Usuario): boolean {
  return usuario.activo && !esUsuarioActual(usuario)
}

function esUsuarioActual(usuario: Usuario): boolean {
  return Number(user.value?.id) === usuario.id
}

function limpiarMensajes() {
  mensajeError.value = ''
  mensajeExito.value = ''
}

onMounted(() => {
  cargarUsuarios()
})
// Lógica pendiente para después:
//
// 1. Importar type Usuario.
// 2. Importar type Perfil.
// 3. Verificar que solo el administrador pueda entrar a esta página.
// 4. Cargar usuarios desde GET /api/usuarios.
// 5. Cargar perfiles desde GET /api/perfiles si existe endpoint.
// 6. Filtrar por texto: rut, nombres, apellidos o email.
// 7. Filtrar por perfil: administrador / ejecutivo.
// 8. Filtrar por estado activo / inactivo.
// 9. Abrir modal para crear usuario.
// 10. Abrir modal para editar usuario.
// 11. Crear usuario con POST /api/usuarios.
// 12. Editar usuario con PUT /api/usuarios/:id.
// 13. Desactivar usuario con confirmación.
//
// Campos reales según schema.prisma:
// perfil_id, rut, nombres, apellidos, email,
// password_hash, activo, created_at, updated_at.
//
// Importante:
// - El frontend nunca envía password_hash.
// - El frontend envía password normal y el backend genera el hash.
// - El backend no debe devolver password_hash.
// - Un usuario no debería cambiarse a sí mismo perfil_id ni activo.
// - No se elimina físicamente el usuario.
// - Para desactivarlo se usa activo: false.
</script>
