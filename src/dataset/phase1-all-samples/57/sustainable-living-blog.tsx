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
    <div className="flex flex-col min-h-screen bg-green-50">
      <header className="sticky top-0 z-10 bg-green-800 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6" />
            <span className="text-xl font-bold">SustainableLiving</span>
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/eco-tips" className="hover:text-green-300">
              Eco Tips
            </Link>
            <Link href="/green-products" className="hover:text-green-300">
              Green Products
            </Link>
            <Link href="/sustainable-home" className="hover:text-green-300">
              Sustainable Home
            </Link>
            <Link href="/zero-waste" className="hover:text-green-300">
              Zero Waste
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden md:flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="w-64 bg-green-700 text-white placeholder-green-300 border-green-600"
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

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="md:flex md:space-x-8">
          <div className="md:w-2/3">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-green-800">Latest Posts</h1>
            <div className="space-y-8">
              {[1, 2, 3].map((post) => (
                <article key={post} className="bg-white rounded-lg shadow-md p-4 md:p-6">
                  <img
                    src={`/placeholder.svg?height=200&width=400`}
                    alt="Blog post cover"
                    className="w-full h-48 object-cover rounded-md mb-4"
                  />
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 text-green-800">
                    Sustainable Living Tip #{post}
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                  <Link
                    href={`/post/${post}`}
                    className="text-green-600 hover:text-green-800 font-semibold text-sm md:text-base"
                  >
                    Read More →
                  </Link>
                </article>
              ))}
            </div>
          </div>
          <aside className="md:w-1/3 mt-8 md:mt-0">
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6 mb-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4 text-green-800">Categories</h2>
              <ul className="space-y-2">
                <li>
                  <Link href="/category/eco-tips" className="text-green-600 hover:text-green-800 text-sm md:text-base">
                    Eco Tips
                  </Link>
                </li>
                <li>
                  <Link href="/category/green-products" className="text-green-600 hover:text-green-800 text-sm md:text-base">
                    Green Products
                  </Link>
                </li>
                <li>
                  <Link href="/category/sustainable-home" className="text-green-600 hover:text-green-800 text-sm md:text-base">
                    Sustainable Home
                  </Link>
                </li>
                <li>
                  <Link href="/category/zero-waste" className="text-green-600 hover:text-green-800 text-sm md:text-base">
                    Zero Waste
                  </Link>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold mb-4 text-green-800">Popular Posts</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/post/1" className="text-green-600 hover:text-green-800 text-sm md:text-base">
                    10 Easy Ways to Reduce Your Carbon Footprint
                  </Link>
                </li>
                <li>
                  <Link href="/post/2" className="text-green-600 hover:text-green-800 text-sm md:text-base">
                    The Ultimate Guide to Composting at Home
                  </Link>
                </li>
                <li>
                  <Link href="/post/3" className="text-green-600 hover:text-green-800 text-sm md:text-base">
                    Sustainable Fashion: Eco-Friendly Clothing Brands
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">About SustainableLiving</h3>
              <p className="text-sm">
                Empowering individuals to make eco-friendly choices for a better planet.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
              <ul className="text-sm space-y-1">
                <li>
                  <Link href="/about" className="hover:text-green-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-green-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-green-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center text-xs md:text-sm">
            <p>&copy; 2023 SustainableLiving. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

