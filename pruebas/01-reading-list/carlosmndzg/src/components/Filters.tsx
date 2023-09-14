import { useId } from 'react'
import { MAX_PAGES, FILTERS } from '../consts'
import { Book } from '../types'

interface Props {
  pages: number
  setPages: (pages: number) => void
  genre: Book['genre']
  setGenre: (genre: Book['genre']) => void
}

const Filters: React.FC<Props> = ({ pages, setPages, genre, setGenre }) => {
  const id = useId()

  return (
    <div className="p-4 flex justify-between">
      <div className="flex flex-col gap-2">
        <label htmlFor={`filterPages-${id}`}>Filtrar por páginas</label>
        <div>
          <input
            type="range"
            id={`filterPages-${id}`}
            min={1}
            max={MAX_PAGES}
            value={pages}
            onChange={e => setPages(Number(e.target.value))}
          />
          <span>{pages}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor={`filterGenre-${id}`}>Filtrar por género</label>
        <select
          id={`filterGenre-${id}`}
          className="border-black border-2 rounded-xl px-2"
          value={genre}
          onChange={e => setGenre(e.target.value)}
        >
          {Object.values(FILTERS).map(filter => (
            <option value={filter}>{filter}</option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default Filters
