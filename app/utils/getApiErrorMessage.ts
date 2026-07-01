type ErrorConDatos = {
  message?: unknown
  statusMessage?: unknown
  data?: {
    message?: unknown
    statusMessage?: unknown
  }
}

function obtenerTexto(valor: unknown): string | null {
  return typeof valor === 'string' && valor.trim() ? valor.trim() : null
}

export function getApiErrorMessage(error: unknown, fallback = 'Error inesperado'): string {
  const errorNormalizado = error as ErrorConDatos

  return (
    obtenerTexto(errorNormalizado?.data?.statusMessage)
    ?? obtenerTexto(errorNormalizado?.data?.message)
    ?? obtenerTexto(errorNormalizado?.statusMessage)
    ?? obtenerTexto(errorNormalizado?.message)
    ?? fallback
  )
}
