import Link from 'next/link'
import { Menu, Search, User, X } from 'lucide-react'
import { useState } from 'react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-semibold text-gray-800">
            MinimalistMind
          </Link>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 right-0 bg-white md:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 shadow-md md:shadow-none`}>
            <Link href="/blog" className="text-gray-600 hover:text-gray-800">
              Blog
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-800">
              Resources
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-gray-800">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <button className="text-gray-600 hover:text-gray-800">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>
            <button
              className="md:hidden text-gray-600 hover:text-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-6 md:py-8 flex flex-col md:flex-row">
        <div className="md:w-2/3 md:pr-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Latest Posts</h1>
          <div className="space-y-6 md:space-y-8">
            {[1, 2, 3].map((post) => (
              <article key={post} className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  The Art of Decluttering: 5 Simple Steps
                </h2>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
                  Discover how to simplify your life and create more space with these easy decluttering techniques...
                </p>
                <Link href={`/blog/post-${post}`} className="text-sm md:text-base text-blue-600 hover:underline">
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
        <aside className="md:w-1/3 mt-6 md:mt-0 space-y-6">
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">About MinimalistMind</h2>
            <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4">
              Embracing simplicity and intentional living. Join us on a journey to declutter your space and mind.
            </p>
            <Link href="/about" className="text-sm md:text-base text-blue-600 hover:underline">
              Learn more
            </Link>
          </div>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 md:mb-4">Popular Categories</h2>
            <ul className="space-y-2">
              {['Decluttering', 'Minimalist Living', 'Intentional Habits', 'Sustainable Choices'].map((category) => (
                <li key={category}>
                  <Link href={`/category/${category.toLowerCase().replace(' ', '-')}`} className="text-sm md:text-base text-gray-600 hover:text-gray-800">
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </main>
      <footer className="bg-gray-100 mt-8 md:mt-12">
        <div className="container mx-auto px-4 py-4 md:py-6 text-center text-sm md:text-base text-gray-600">
          <p>&copy; 2023 MinimalistMind. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

