import { useLoaderData } from 'react-router-dom'
import { getItem } from '../../services/apiItems'
import { formatCurrency } from '../utils/helpers'

function ItemPage() {
  const { title, description, price, rating, thumbnail } = useLoaderData()
  const priceBefore =
    Math.pow(10, String(Math.trunc(price * 0.05)).length) + price

  return (
    <div className="flex h-full items-center justify-center">
      <div className="grid gap-8 md:grid-cols-[400px_1fr]">
        <img
          src={thumbnail}
          alt={`Image of a ${title}`}
          className="h-96 w-full max-w-full object-cover object-center md:w-auto"
        />
        <div className="flex h-full flex-col py-4">
          <h1 className="mb-4 text-5xl font-bold">{title}</h1>
          <div className="flex gap-4">
            <p className="text-xl line-through">
              {formatCurrency(priceBefore)}
            </p>
            <p className="text-xl font-semibold text-red-500">
              {formatCurrency(price)}
            </p>
          </div>

          <div className="mt-8 md:mt-auto">
            <p className="mb-8">{description}</p>
            <button className="w-full rounded-full bg-pink-300 py-4 text-xl hover:bg-pink-400">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export async function loader({ params }) {
  const { id } = params

  return await getItem({ id })
}

export default ItemPage
