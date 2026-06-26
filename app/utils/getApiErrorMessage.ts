export function getApiErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }

  return 'Error inesperado'
}
