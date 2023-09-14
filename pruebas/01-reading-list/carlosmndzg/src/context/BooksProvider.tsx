import { createContext } from 'react'
import defaultBooks from '../../books.json'
import { Book } from '../types'
import useLocalStorageSynchronized from '../hooks/useLocalStorageSynchronized'

interface Props {
  children: React.ReactNode
}

interface BooksContextContent {
  getPendingToReadBooks: () => Book[]
  getNotPendingToReadBooks: () => Book[]
  switchPendingToRead: (ISBN: Book['ISBN']) => void
  filterByPages: (books: Book[], pages: Book['pages']) => Book[]
  filterByGenre: (books: Book[], filter: Book['genre']) => Book[]
}

export const BooksContext = createContext<BooksContextContent | undefined>(
  undefined
)

export const BooksProvider: React.FC<Props> = ({ children }) => {
  const [books, setBooks] = useLocalStorageSynchronized<Book[]>('books', () => {
    const { library } = defaultBooks
    const books = library.map(({ book }) => {
      return {
        ...book,
        pendingToRead: false
      }
    })

    return books
  })

  const switchPendingToRead = (ISBN: Book['ISBN']) => {
    const newBooks = books.map(book => {
      if (book.ISBN !== ISBN) return book

      return {
        ...book,
        pendingToRead: !book.pendingToRead
      }
    })
    setBooks(newBooks)
  }

  const getPendingToReadBooks = () => {
    return books.filter(book => book.pendingToRead)
  }

  const getNotPendingToReadBooks = () => {
    return books.filter(book => !book.pendingToRead)
  }

  const filterByPages = (books: Book[], pages: Book['pages']) => {
    return books.filter(book => book.pages <= pages)
  }

  const filterByGenre = (books: Book[], filter: Book['genre']) => {
    return books.filter(book => book.genre === filter)
  }

  return (
    <BooksContext.Provider
      value={{
        getPendingToReadBooks,
        getNotPendingToReadBooks,
        switchPendingToRead,
        filterByPages,
        filterByGenre
      }}
    >
      {children}
    </BooksContext.Provider>
  )
}

export default BooksProvider
