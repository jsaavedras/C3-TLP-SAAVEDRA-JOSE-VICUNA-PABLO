export function formatDate(value: string | Date): string {
  return new Intl.DateTimeFormat('es-CL').format(new Date(value))
}
