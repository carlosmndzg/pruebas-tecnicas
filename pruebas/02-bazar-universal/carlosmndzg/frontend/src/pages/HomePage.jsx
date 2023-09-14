import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function HomePage() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleForm = e => {
    e.preventDefault()

    if (!search) {
      console.log('here')
      navigate('/items')
    } else {
      navigate(`/items?q=${search}`)
    }
  }

  return (
    <div className="h-[100dvh] bg-stone-50 px-12 text-stone-950">
      <div className="mx-auto flex h-full max-w-sm flex-col items-center justify-center">
        <h1 className="mb-6 text-center text-4xl font-bold">Bazar Online</h1>
        <form onSubmit={handleForm} className="flex flex-col">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            className="mb-6 rounded-xl bg-stone-200 px-8 py-4 text-xl focus:outline-none focus:ring focus:ring-stone-400"
            placeholder="Laptops, smartphones..."
          />
          <input
            type="submit"
            value="Buscar"
            className="cursor-pointer self-center rounded-full bg-pink-300 px-16 py-3 text-2xl font-semibold text-pink-950 hover:bg-pink-400 focus:outline-none focus:ring focus:ring-pink-500"
          />
        </form>
      </div>
    </div>
  )
}

export default HomePage
