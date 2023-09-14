import useBooks from '../hooks/useBooks'

const Header = () => {
  const { getPendingToReadBooks, getNotPendingToReadBooks } = useBooks()

  const pendingAmount = getPendingToReadBooks().length
  const notPendingAmount = getNotPendingToReadBooks().length

  return (
    <div className="text-center py-12">
      <p className="text-4xl">
        <span className="underline">{notPendingAmount}</span> libros disponibles
      </p>
      <p className="text-2xl">{pendingAmount} en la lista de espera</p>
    </div>
  )
}

export default Header
