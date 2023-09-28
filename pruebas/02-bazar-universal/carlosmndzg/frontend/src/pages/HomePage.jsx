import { useState } from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'
import Spinner from '../components/Spinner'

function HomePage() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  const handleForm = e => {
    e.preventDefault()

    if (!search) {
      console.log('here')
      navigate('/items')
    } else {
      navigate(`/items?q=${search}`)
    }
  }

  if (isLoading) {
    return <Spinner />
  }

  return (
    <div className="h-[100dvh] bg-stone-50 px-12 text-stone-950">
      <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center">
        <h1 className="mb-24 text-center text-5xl font-bold">Bazar Online</h1>
        <form onSubmit={handleForm} className="relative flex self-stretch">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            className="w-full rounded-xl bg-stone-200 px-8 py-4 text-xl transition-[box-shadow] duration-300 focus:outline-none focus:ring-2 focus:ring-stone-400"
            placeholder="Laptops, smartphones..."
          />
          <input
            type="submit"
            value="Buscar"
            className="absolute right-0 top-0 h-full cursor-pointer self-center rounded-r-xl bg-pink-300 px-8 py-3 text-2xl font-semibold text-pink-950 transition-all duration-300 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </form>
      </div>
    </div>
  )
}

export default HomePage
