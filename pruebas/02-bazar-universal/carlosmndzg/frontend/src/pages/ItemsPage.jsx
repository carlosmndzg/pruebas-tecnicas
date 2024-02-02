import { useLoaderData, useSearchParams } from 'react-router-dom'
import { getItems } from '../../services/apiItems'
import Item from '../components/Item'

function ItemsPage() {
  const items = useLoaderData()
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q')

  // return <Rating score={2.8} />

  return (
    <div>
      {query && (
        <p className="font-semibold">
          Resultados de búsqueda de &ldquo;{query}&ldquo;: {items.length}
        </p>
      )}
      <ul className="grid grid-cols-1 gap-8 divide-y-2">
        {items.map(item => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  )
}

export async function loader({ request }) {
  const url = new URL(request.url)
  const query = url.searchParams.get('q') ?? ''

  return await getItems({ query })
}

export default ItemsPage
