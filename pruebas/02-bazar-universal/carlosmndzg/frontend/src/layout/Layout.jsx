import { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

function Layout() {
  const [search, setSearch] = useState('')
  const navigate = useNavigate()

  const handleForm = e => {
    e.preventDefault()
    navigate(`/items?q=${search}`)
  }

  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <header className="border-stone-150 flex flex-col items-center justify-center gap-2 border-b px-4 py-6">
        <h1 className="text-xl font-bold">
          <Link to="/" className="hover:underline">
            Bazar Online
          </Link>
        </h1>
        <form onSubmit={handleForm} className="flex flex-col">
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            type="text"
            className="bg-stone-200 px-8 py-2"
            placeholder="Laptops, smartphones..."
          />
        </form>
      </header>
      <main className="mx-auto max-w-4xl px-8 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
