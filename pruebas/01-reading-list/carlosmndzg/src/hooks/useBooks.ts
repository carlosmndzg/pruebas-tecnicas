import { BooksContext } from '../context/BooksProvider'
import { useContext } from 'react'

export default function useBooks() {
  const contextValues = useContext(BooksContext)

  if (contextValues === undefined) {
    throw new Error('useBooks must be called inside a BooksProvider')
  }

  return contextValues
}
