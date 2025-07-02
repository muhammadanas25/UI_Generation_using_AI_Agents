import Link from 'next/link'
import { Menu, Search, User, Sun, Moon, X } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-white dark:bg-gray-800 shadow-md fixed w-full z-10">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-white transition-colors duration-300">
              MinimalistMind
            </Link>
            <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 md:top-auto bg-white dark:bg-gray-800 md:bg-transparent md:dark:bg-transparent p-4 md:p-0 space-y-4 md:space-y-0 md:space-x-6 shadow-md md:shadow-none`}>
              <Link href="/blog" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
                Blog
              </Link>
              <Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
                About
              </Link>
              <Link href="/resources" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
                Resources
              </Link>
              <Link href="/contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <button onClick={toggleDarkMode} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                <span className="sr-only">Toggle Dark Mode</span>
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
                <Search className="h-5 w-5" />
                <span className="sr-only">Search</span>
              </button>
              <button className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
                <User className="h-5 w-5" />
                <span className="sr-only">Account</span>
              </button>
              <button onClick={toggleMenu} className="md:hidden text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </div>
        </header>
        <main className="container mx-auto px-4 pt-24 pb-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-2/3 md:pr-8 space-y-8">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-6 transition-colors duration-300">Latest Posts</h1>
              {[1, 2, 3].map((post) => (
                <article key={post} className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <Image src={`/placeholder.svg?height=400&width=600`} alt="Post Image" width={600} height={400} className="rounded-md mb-4 w-full h-auto" />
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 dark:text-white mb-2 transition-colors duration-300">
                    The Art of Decluttering: 5 Simple Steps
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                    Discover how to simplify your life and create more space with these easy decluttering techniques...
                  </p>
                  <Link href={`/blog/post-${post}`} className="inline-block text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300">
                    Read more
                  </Link>
                </article>
              ))}
            </div>
            <aside className="md:w-1/3 mt-8 md:mt-0 space-y-6">
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">About MinimalistMind</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-300">
                  Embracing simplicity and intentional living. Join us on a journey to declutter your space and mind.
                </p>
                <Link href="/about" className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-300">
                  Learn more
                </Link>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Popular Categories</h2>
                <ul className="space-y-2">
                  {['Decluttering', 'Minimalist Living', 'Intentional Habits', 'Sustainable Choices'].map((category) => (
                    <li key={category}>
                      <Link href={`/category/${category.toLowerCase().replace(' ', '-')}`} className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors duration-300">
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-4 transition-colors duration-300">Subscribe to our Newsletter</h2>
                <form className="flex flex-col space-y-4">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-gray-700 dark:text-white transition-colors duration-300"
                  />
                  <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                    Subscribe
                  </button>
                </form>
              </div>
            </aside>
          </div>
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 mt-12">
          <div className="container mx-auto px-4 py-6 text-center text-gray-600 dark:text-gray-300 transition-colors duration-300">
            <p>&copy; 2023 MinimalistMind. All rights reserved.</p>
            <div className="mt-2 space-x-4">
              <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
              <Link href="/terms" className="hover:underline">Terms of Service</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

