import { useLoaderData } from 'react-router-dom'
import { getItem } from '../../services/apiItems'
import { formatCurrency } from '../utils/helpers'

function ItemPage() {
  const { title, description, price, rating, thumbnail } = useLoaderData()

  return (
    <div>
      <img
        src={thumbnail}
        alt={`Image of a ${title}`}
        className="mb-4 max-w-full"
      />
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <p className="mb-6 text-center text-xl font-semibold">
        {formatCurrency(price)}
      </p>
      <p>{description}</p>
    </div>
  )
}

export async function loader({ params }) {
  const { id } = params

  return await getItem({ id })
}

export default ItemPage
