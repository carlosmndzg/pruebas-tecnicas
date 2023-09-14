import useBooks from '../hooks/useBooks'

const PendingBooksBox = () => {
  const { getPendingToReadBooks, switchPendingToRead } = useBooks()
  return (
    <div className="w-1/3 border-black border-2">
      <h2 className="text-center py-4 text-xl font-bold">Lista de lectura</h2>
      <div className="grid grid-cols-2 p-8 h-[500px] gap-4 overflow-y-auto cursor-pointer">
        {getPendingToReadBooks().map(book => (
          <div key={book.ISBN} onClick={() => switchPendingToRead(book.ISBN)}>
            <img src={book.cover} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PendingBooksBox
