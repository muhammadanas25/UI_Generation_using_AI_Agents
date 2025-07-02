import Link from "next/link"
import { Leaf, Search, Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function SustainableLivingBlog() {
  return (
    <div className="flex flex-col min-h-screen bg-green-50 dark:bg-gray-100">
      <header className="sticky top-0 z-50 bg-green-800 dark:bg-gray-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-2 md:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-5 w-5 md:h-6 md:w-6 animate-bounce" />
            <span className="text-lg md:text-xl font-bold">SustainableLiving</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/eco-tips" className="hover:text-green-300 dark:hover:text-green-300">
              Eco Tips
            </Link>
            <Link href="/green-products" className="hover:text-green-300 dark:hover:text-green-300">
              Green Products
            </Link>
            <Link href="/sustainable-home" className="hover:text-green-300 dark:hover:text-green-300">
              Sustainable Home
            </Link>
            <Link href="/zero-waste" className="hover:text-green-300 dark:hover:text-green-300">
              Zero Waste
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden md:flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 bg-green-700 text-white placeholder-green-300 border-green-600 dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400 dark:border-gray-600"
              />
              <Button type="submit" variant="ghost" size="icon" className="ml-2">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
            </form>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link href="/eco-tips">Eco Tips</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/green-products">Green Products</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/sustainable-home">Sustainable Home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/zero-waste">Zero Waste</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-4 md:py-8">
        <section className="mb-8 md:mb-12">
          {/* hero section content */}
        </section>
        <div className="md:flex md:space-x-8">
          <div className="md:w-2/3">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-green-800 dark:text-green-300">Latest Posts</h2>
            <div className="space-y-6 md:space-y-8">
              {[1, 2, 3].map((post) => (
                <article
                  key={post}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 transform hover:translate-y-1 transition-transform duration-300"
                >
                  <img
                    src={`/placeholder-${post}.jpg`}
                    alt="Blog post cover"
                    className="w-full h-40 md:h-48 object-cover rounded-md mb-3 md:mb-4"
                  />
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 text-green-800 dark:text-green-300">
                    Sustainable Living Tip #{post}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-3 md:mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Link
                    href={`/post/${post}`}
                    className="inline-flex items-center text-sm md:text-base text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 font-semibold transition-colors duration-300"
                  >
                    Read More <span className="ml-1 md:ml-2">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
          <aside className="mt-8 md:mt-0 md:w-1/3 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 transform hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-green-800 dark:text-green-300">Categories</h2>
              <ul className="space-y-1 md:space-y-2">
                <li>
                  <Link href="/category/eco-tips" className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm md:text-base">
                    Eco Tips
                  </Link>
                </li>
                <li>
                  <Link href="/category/green-products" className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm md:text-base">
                    Green Products
                  </Link>
                </li>
                <li>
                  <Link href="/category/sustainable-home" className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm md:text-base">
                    Sustainable Home
                  </Link>
                </li>
                <li>
                  <Link href="/category/zero-waste" className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm md:text-base">
                    Zero Waste
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 md:p-6 transform hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-green-800 dark:text-green-300">Popular Posts</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/post/1" className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm md:text-base">
                    10 Easy Ways to Reduce Your Carbon Footprint
                  </Link>
                </li>
                <li>
                  <Link href="/post/2" className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm md:text-base">
                    The Ultimate Guide to Composting at Home
                  </Link>
                </li>
                <li>
                  <Link href="/post/3" className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-300 text-sm md:text-base">
                    Sustainable Fashion: Eco-Friendly Clothing Brands
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-green-800 dark:bg-gray-800 text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">About SustainableLiving</h3>
              <p className="text-sm">
                Empowering individuals to make eco-friendly choices for a better planet.
              </p>
              <div className="flex space-x-4 mt-4">
                {/* social media links */}
              </div>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-6">
              <div className="mb-4 md:mb-0">
                <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
                <ul className="text-sm space-y-1">
                  <li>
                    <Link href="/about" className="hover:text-green-300 dark:hover:text-green-300">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-green-300 dark:hover:text-green-300">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link href="/privacy" className="hover:text-green-300 dark:hover:text-green-300">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Resources</h3>
                <ul className="text-sm space-y-1">
                  {/* resources */}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 md:mt-8 text-center text-xs md:text-sm">
            <p>&copy; {new Date().getFullYear()} SustainableLiving. All rights reserved.</p>
            <p className="mt-1 md:mt-2">Designed with ❤️ for a greener future.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

