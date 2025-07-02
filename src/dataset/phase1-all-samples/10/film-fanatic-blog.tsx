import Image from "next/image"
import Link from "next/link"
import { InstagramIcon, TwitterIcon, FacebookIcon, Menu, X } from 'lucide-react'
import { useState } from "react"

export default function StyleStoryLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const outfitPosts = [
    { id: 1, title: "Summer Chic", image: "/placeholder.svg?height=400&width=300" },
    { id: 2, title: "Autumn Layers", image: "/placeholder.svg?height=400&width=300" },
    { id: 3, title: "Winter Warmth", image: "/placeholder.svg?height=400&width=300" },
    { id: 4, title: "Spring Florals", image: "/placeholder.svg?height=400&width=300" },
    { id: 5, title: "Casual Friday", image: "/placeholder.svg?height=400&width=300" },
    { id: 6, title: "Evening Glamour", image: "/placeholder.svg?height=400&width=300" },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">StyleStory</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">About</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Categories</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Contact</Link></li>
            </ul>
          </nav>
          <button
            className="md:hidden text-gray-600 hover:text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white">
            <ul className="flex flex-col space-y-2 px-4 py-2">
              <li><Link href="#" className="block py-2 text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link href="#" className="block py-2 text-gray-600 hover:text-gray-800">About</Link></li>
              <li><Link href="#" className="block py-2 text-gray-600 hover:text-gray-800">Categories</Link></li>
              <li><Link href="#" className="block py-2 text-gray-600 hover:text-gray-800">Contact</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-6 md:py-8">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4 md:mb-6">Latest Outfit Posts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {outfitPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                width={300}
                height={400}
                className="w-full h-48 md:h-64 object-cover"
              />
              <div className="p-3 md:p-4">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">{post.title}</h3>
                <Link href="#" className="mt-2 inline-block text-blue-600 hover:text-blue-800 text-sm md:text-base">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-gray-100 mt-6 md:mt-8">
        <div className="container mx-auto px-4 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p className="text-gray-600 text-sm md:text-base">&copy; 2023 StyleStory. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <InstagramIcon className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <TwitterIcon className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <FacebookIcon className="w-5 h-5 md:w-6 md:h-6" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

