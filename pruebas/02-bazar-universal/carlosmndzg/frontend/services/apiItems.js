const API_ENDPOINT = 'http://192.168.1.46:8008/api'

export async function getItems({ query = '' }) {
  const res = await fetch(`${API_ENDPOINT}/items?q=${query}`)

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }

  const data = await res.json()
  const { items } = data.data

  return items
}

export async function getItem({ id }) {
  const res = await fetch(`${API_ENDPOINT}/items/${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }

  const data = await res.json()
  const { item } = data.data

  return item
}
