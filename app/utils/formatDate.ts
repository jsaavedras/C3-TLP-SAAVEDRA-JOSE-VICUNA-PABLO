function normalizarFecha(fecha: string | Date | null | undefined): Date | null {
  if (!fecha) {
    return null
  }

  const fechaNormalizada = fecha instanceof Date ? fecha : new Date(fecha)

  if (Number.isNaN(fechaNormalizada.getTime())) {
    return null
  }

  return fechaNormalizada
}

export function formatDate(fecha: string | Date | null | undefined): string {
  const fechaNormalizada = normalizarFecha(fecha)

  if (!fechaNormalizada) {
    return 'Sin fecha'
  }

  return new Intl.DateTimeFormat('es-CL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(fechaNormalizada)
}

export function formatDateTime(fecha: string | Date | null | undefined): string {
  const fechaNormalizada = normalizarFecha(fecha)

  if (!fechaNormalizada) {
    return 'Sin fecha'
  }

  return new Intl.DateTimeFormat('es-CL', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(fechaNormalizada)
}
