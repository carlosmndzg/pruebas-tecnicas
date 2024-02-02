import { Link, useLocation } from 'react-router-dom'

function PageNotFound() {
  const location = useLocation()

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center text-stone-700">
        <p className="mb-4 text-9xl font-semibold">404</p>
        <p className="mb-4 text-3xl font-semibold">Not Found</p>
        <p className="mb-2">
          La página <code>{location.pathname}</code> no fue encontrada.
        </p>
        <p>
          Puedes volver a nuestra{' '}
          <Link to="/" className="text-pink-500 underline">
            página del bazar de inicio
          </Link>{' '}
          y volver a buscar.
        </p>
      </div>
    </div>
  )
}

export default PageNotFound
