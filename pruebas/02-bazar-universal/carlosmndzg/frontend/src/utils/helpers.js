export function formatCurrency(value) {
  return new Intl.NumberFormat('es', {
    style: 'currency',
    currency: 'EUR'
  }).format(value)
}
