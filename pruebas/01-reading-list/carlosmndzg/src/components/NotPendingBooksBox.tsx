import useBooks from '../hooks/useBooks'
import { useMemo } from 'react'
import { FILTERS, MAX_PAGES } from '../consts'
import useLocalStorageSynchronized from '../hooks/useLocalStorageSynchronized'
import Filters from './Filters'

const NotPendingBooksBox = () => {
  const {
    getNotPendingToReadBooks,
    switchPendingToRead,
    filterByGenre,
    filterByPages
  } = useBooks()
  const [pages, setPages] = useLocalStorageSynchronized('pages', MAX_PAGES)
  const [genre, setGenre] = useLocalStorageSynchronized('filter', FILTERS.ALL)

  const books = useMemo(() => {
    let ans = getNotPendingToReadBooks()

    if (genre !== FILTERS.ALL) {
      ans = filterByGenre(ans, genre)
    }

    ans = filterByPages(ans, pages)

    return ans
  }, [filterByGenre, filterByPages, getNotPendingToReadBooks, genre, pages])

  return (
    <div className="w-2/3">
      <Filters
        pages={pages}
        setPages={setPages}
        genre={genre}
        setGenre={setGenre}
      />
      <div className="grid grid-cols-4 gap-4 h-[600px] overflow-y-scroll cursor-pointer">
        {books.map(book => (
          <div key={book.ISBN} onClick={() => switchPendingToRead(book.ISBN)}>
            <img className="h-72" src={book.cover} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default NotPendingBooksBox
