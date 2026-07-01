export function formatCurrency(valor: number | null | undefined): string {
  const valorSeguro = Number(valor ?? 0)

  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Number.isFinite(valorSeguro) ? valorSeguro : 0)
}
