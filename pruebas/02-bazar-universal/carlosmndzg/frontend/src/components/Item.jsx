import { Link } from 'react-router-dom'
import { formatCurrency, getFirstWords } from '../utils/helpers'

function Item({ item }) {
  const { id, title, description, price, rating, thumbnail } = item

  return (
    <li className="flex pt-8">
      <div className="h-28 w-28 shrink-0">
        <img
          src={thumbnail}
          alt={`Image of a ${title}`}
          className="h-full w-full rounded-full object-cover object-center"
        />
      </div>
      <div className="space-y-2 pl-8">
        <h2 className="text-xl font-semibold">
          <Link to={`/items/${id}`}>{title}</Link>
        </h2>
        <p>{getFirstWords(description, 15)}</p>
        <p className="text-lg font-semibold">{formatCurrency(price)}</p>
      </div>
    </li>
  )
}

export default Item
