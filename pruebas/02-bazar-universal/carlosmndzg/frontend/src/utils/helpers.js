export function formatCurrency(value) {
  return new Intl.NumberFormat('es', {
    style: 'currency',
    currency: 'EUR',
  }).format(value)
}

export function getFirstWords(text, size) {
  return `${text.split(' ').slice(0, size).join(' ')}...`
}
