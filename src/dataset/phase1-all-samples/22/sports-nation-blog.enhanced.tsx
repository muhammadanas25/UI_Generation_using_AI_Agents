import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MenuIcon, X, SearchIcon, SunIcon, MoonIcon } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Transition } from '@headlessui/react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className={`bg-blue-600 text-white shadow-md transition-colors duration-500 ${isDarkMode ? 'bg-blue-800' : 'bg-blue-600'}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">SportsNation</h1>
          <div className="flex items-center">
            <button onClick={toggleDarkMode} className="mr-2 focus:outline-none">
              {isDarkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
            </button>
            <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none">
              <MenuIcon className="w-6 h-6" />
            </button>
            <nav className="hidden md:flex space-x-4 lg:space-x-6">
              <Link href="#" className="hover:text-blue-200 transition-colors duration-300">Home</Link>
              <Link href="#" className="hover:text-blue-200 transition-colors duration-300">Analysis</Link>
              <Link href="#" className="hover:text-blue-200 transition-colors duration-300">Interviews</Link>
              <Link href="#" className="hover:text-blue-200 transition-colors duration-300">Highlights</Link>
            </nav>
          </div>
        </div>
        <Transition
          show={isMobileMenuOpen}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <nav className="md:hidden bg-blue-700 px-4 py-2">
            <ul className="flex flex-col space-y-2">
              <li><Link href="#" className="block py-1 hover:text-blue-200 transition-colors duration-300">Home</Link></li>
              <li><Link href="#" className="block py-1 hover:text-blue-200 transition-colors duration-300">Analysis</Link></li>
              <li><Link href="#" className="block py-1 hover:text-blue-200 transition-colors duration-300">Interviews</Link></li>
              <li><Link href="#" className="block py-1 hover:text-blue-200 transition-colors duration-300">Highlights</Link></li>
            </ul>
          </nav>
        </Transition>
      </header>

      <main className="flex-grow container mx-auto px-4 py-6 sm:py-8">
        <section className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-100">Featured Story</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="flex flex-col md:flex-row">
              <div className="md:flex-shrink-0">
                <Image
                  src="/featured-image.jpg"
                  alt="Featured story image"
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover md:h-full md:w-64"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Analysis</div>
                <Link href="#" className="block mt-1 sm:mt-2 text-lg sm:text-xl leading-tight font-semibold text-gray-900 dark:text-white hover:underline transition-colors duration-300">The Rise of Young Talent in This Year's Basketball Season</Link>
                <p className="mt-2 sm:mt-3 text-gray-600 dark:text-gray-300">A deep dive into the emerging stars who are reshaping the landscape of professional basketball.</p>
                <Button href="#" className="mt-3 sm:mt-4" variant="primary">Read More</Button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">Recent Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              { title: "Exclusive Interview: Star Quarterback Opens Up About Recent Trade", category: "Interviews", image: "/placeholder.svg?height=200&width=300" },
              { title: "Top 10 Plays of the Week: Jaw-Dropping Moments", category: "Highlights", image: "/placeholder.svg?height=200&width=300" },
              { title: "The Science of Sports: How Analytics is Changing the Game", category: "Analysis", image: "/placeholder.svg?height=200&width=300" },
              { title: "Rising Stars: 5 Rookies to Watch This Season", category: "Analysis", image: "/placeholder.svg?height=200&width=300" },
              { title: "Behind the Scenes: A Day in the Life of a Pro Athlete", category: "Interviews", image: "/placeholder.svg?height=200&width=300" },
              { title: "Game-Changing Moments: Plays That Defined the Season", category: "Highlights", image: "/placeholder.svg?height=200&width=300" },
            ].map((article, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold">{article.category}</div>
                  <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-gray-900 dark:text-white hover:underline">{article.title}</Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-gray-800 dark:text-gray-100">Trending Topics</h2>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {["Football", "Basketball", "Baseball", "Tennis", "Soccer", "Hockey", "Cricket", "Golf"].map((topic, idx) => (
              <Link key={idx} href="#" className="px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors duration-300">
                {topic}
              </Link>
            ))}
          </div>
        </section>
      </main>

      <footer className={`bg-gray-800 text-white transition-colors duration-500 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'}`}>
        <div className="container mx-auto px-4 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">SportsNation</h3>
              <p className="text-gray-400 mb-4">Your go-to source for sports analysis, interviews, and highlights.</p>
              <div className="flex space-x-4">
                {/* ... (keep existing social media links) ... */}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
              <form className="flex flex-col sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow mb-2 sm:mb-0 sm:mr-2"
                />
                <Button type="submit" variant="secondary" className="w-full sm:w-auto">Subscribe</Button>
              </form>
              <p className="mt-4 text-sm text-gray-400">Stay updated with the latest sports news and exclusive content.</p>
            </div>
          </div>
          <div className="mt-8 sm:mt-12 border-t border-gray-700 pt-6 text-center">
            <p className="text-sm text-gray-400">&copy; 2024 SportsNation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

