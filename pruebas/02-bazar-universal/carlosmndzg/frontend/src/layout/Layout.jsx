import { useState } from 'react'
import { Link, Outlet, useNavigate, useNavigation } from 'react-router-dom'
import Spinner from '../components/Spinner'

function Layout() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  const handleForm = e => {
    e.preventDefault()
    navigate(`/items?q=${search}`)
  }

  return (
    <div className="grid min-h-screen grid-rows-[auto_1fr] bg-stone-50 text-stone-950">
      <header className="border-stone-150 border-b px-16 py-6 md:px-4">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 md:flex-row md:justify-between">
          <h1 className="text-4xl font-bold">
            <Link to="/" className="hover:underline">
              Bazar Online
            </Link>
          </h1>
          <form
            onSubmit={handleForm}
            className="relative flex flex-grow self-stretch md:max-w-lg"
          >
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              type="text"
              className="w-full rounded-xl bg-stone-200 px-4 py-2 text-lg transition-[box-shadow] duration-300 focus:outline-none focus:ring-2 focus:ring-stone-400 md:px-8 md:py-4 md:text-xl"
              placeholder="Laptops, smartphones..."
            />
            <input
              type="submit"
              value="Buscar"
              className="absolute right-0 top-0 h-full cursor-pointer self-center rounded-r-xl bg-pink-300 px-4 py-2 text-lg font-semibold text-pink-950 transition-all duration-300 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 md:px-8 md:py-3 md:text-2xl"
            />
          </form>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-8 py-8">
        {isLoading ? <Spinner /> : <Outlet />}
      </main>
    </div>
  )
}

export default Layout
