const baseBadgeClass = 'inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold'

const statusClassMap: Record<string, string> = {
  activo: 'border-green-200 bg-green-100 text-green-800',
  inactivo: 'border-slate-200 bg-slate-100 text-slate-700',
  disponible: 'border-green-200 bg-green-100 text-green-800',
  arrendado: 'border-blue-200 bg-blue-100 text-blue-800',
  en_mantenimiento: 'border-yellow-200 bg-yellow-100 text-yellow-800',
  de_baja: 'border-red-200 bg-red-100 text-red-800',
  vigente: 'border-blue-200 bg-blue-100 text-blue-800',
  finalizado: 'border-slate-200 bg-slate-100 text-slate-700',
  admin: 'border-purple-200 bg-purple-100 text-purple-800',
  administrador: 'border-purple-200 bg-purple-100 text-purple-800',
  ejecutivo: 'border-sky-200 bg-sky-100 text-sky-800',
  warning: 'border-yellow-200 bg-yellow-100 text-yellow-800',
  danger: 'border-red-200 bg-red-100 text-red-800',
  primary: 'border-blue-200 bg-blue-100 text-blue-800',
}

export function getVehicleStatusLabel(estado: string): string {
  const labels: Record<string, string> = {
    disponible: 'Disponible',
    arrendado: 'Arrendado',
    en_mantenimiento: 'En mantenimiento',
    de_baja: 'De baja',
  }

  return labels[estado] ?? estado
}

export function getRentalStatusLabel(estado: string): string {
  const labels: Record<string, string> = {
    vigente: 'Vigente',
    finalizado: 'Finalizado',
  }

  return labels[estado] ?? estado
}

export function getActiveStatusLabel(activo: boolean): string {
  return activo ? 'Activo' : 'Inactivo'
}

export function getProfileLabel(perfil: string): string {
  const labels: Record<string, string> = {
    administrador: 'Administrador',
    admin: 'Administrador',
    ejecutivo: 'Ejecutivo',
  }

  return labels[perfil] ?? perfil
}

export function getStatusClasses(tipo: string): string {
  const normalizado = tipo
    ?.toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim()

  return `${baseBadgeClass} ${statusClassMap[normalizado] ?? 'border-slate-200 bg-slate-100 text-slate-700'}`
}
