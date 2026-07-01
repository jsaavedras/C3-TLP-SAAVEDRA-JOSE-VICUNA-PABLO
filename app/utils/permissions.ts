export type NormalizedProfile = 'administrador' | 'ejecutivo'

function getUserProfile(user?: any): string | null {
  if (!user) {
    return null
  }

  if (typeof user === 'string') {
    return user
  }

  return (
    user.perfilNombre
    ?? user.perfil
    ?? user.perfil_nombre
    ?? user.perfiles?.nombre
    ?? null
  )
}

export function normalizeProfile(perfil?: string | null): NormalizedProfile | null {
  const normalizado = perfil
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()

  if (normalizado === 'administrador' || normalizado === 'admin') {
    return 'administrador'
  }

  if (normalizado === 'ejecutivo') {
    return 'ejecutivo'
  }

  return null
}

export function isAdmin(user?: any): boolean {
  return normalizeProfile(getUserProfile(user)) === 'administrador'
}

export function isExecutive(user?: any): boolean {
  return normalizeProfile(getUserProfile(user)) === 'ejecutivo'
}

export function canAccessAdmin(user?: any): boolean {
  return isAdmin(user)
}

export function canManageOperationalData(user?: any): boolean {
  return isAdmin(user) || isExecutive(user)
}

export const permissions = {
  normalizeProfile,
  isAdmin,
  isExecutive,
  canAccessAdmin,
  canManageOperationalData,
}
