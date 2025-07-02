import Image from "next/image"
import Link from "next/link"
import { InstagramIcon, TwitterIcon, FacebookIcon } from "lucide-react"
import { useState } from "react"
import { Dialog } from "@headlessui/react"

export default function StyleStoryLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const outfitPosts = [
    { id: 1, title: "Summer Chic", image: "/placeholder.svg?height=400&width=300" },
    { id: 2, title: "Autumn Layers", image: "/placeholder.svg?height=400&width=300" },
    { id: 3, title: "Winter Warmth", image: "/placeholder.svg?height=400&width=300" },
    { id: 4, title: "Spring Florals", image: "/placeholder.svg?height=400&width=300" },
    { id: 5, title: "Casual Friday", image: "/placeholder.svg?height=400&width=300" },
    { id: 6, title: "Evening Glamour", image: "/placeholder.svg?height=400&width=300" },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <a className="text-2xl font-bold text-gray-800 hover:text-gray-600 transition-colors">
              StyleStory
            </a>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li>
                <Link href="#">
                  <a className="text-gray-600 hover:text-gray-800 transition-colors">Home</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-600 hover:text-gray-800 transition-colors">About</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-600 hover:text-gray-800 transition-colors">Categories</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <Dialog
          open={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-50 md:hidden"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <div className="fixed top-0 right-0 w-3/4 bg-white h-full shadow-lg p-6">
            <button
              className="mb-6 text-gray-600 hover:text-gray-800 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <nav>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link href="#">
                    <a className="text-gray-600 hover:text-gray-800 transition-colors">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-gray-600 hover:text-gray-800 transition-colors">About</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-gray-600 hover:text-gray-800 transition-colors">Categories</a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-gray-600 hover:text-gray-800 transition-colors">Contact</a>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </Dialog>
      </header>

      <main className="flex-grow container mx-auto px-4 py-24">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fadeIn">Discover Your Style</h2>
          <p className="text-gray-600 max-w-2xl mx-auto animate-fadeIn delay-200">
            Explore the latest trends, fashion tips, and outfit inspirations to elevate your wardrobe.
          </p>
          <div className="mt-6 flex justify-center">
            <Link href="#latest-posts">
              <a className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-lg">
                Get Started
              </a>
            </Link>
          </div>
        </section>

        <section id="latest-posts">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Latest Outfit Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {outfitPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative group">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link href="#">
                      <a className="text-white bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
                        View Post
                      </a>
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <Link href="#">
                    <a className="text-blue-600 hover:text-blue-800 transition-colors">
                      Read More &rarr;
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-12 bg-white p-8 rounded-lg shadow-md animate-slideUp">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Subscribe to Our Newsletter</h3>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition"
            />
            <button
              type="submit"
              className="mt-4 sm:mt-0 sm:ml-4 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors shadow"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-100 mt-8">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">&copy; 2023 StyleStory. All rights reserved.</p>
            <div className="flex space-x-6">
              <Link href="#">
                <a className="text-gray-600 hover:text-gray-800 transition-colors transform hover:scale-110">
                  <InstagramIcon className="w-6 h-6" />
                  <span className="sr-only">Instagram</span>
                </a>
              </Link>
              <Link href="#">
                <a className="text-gray-600 hover:text-gray-800 transition-colors transform hover:scale-110">
                  <TwitterIcon className="w-6 h-6" />
                  <span className="sr-only">Twitter</span>
                </a>
              </Link>
              <Link href="#">
                <a className="text-gray-600 hover:text-gray-800 transition-colors transform hover:scale-110">
                  <FacebookIcon className="w-6 h-6" />
                  <span className="sr-only">Facebook</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

<style jsx global>{`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }

  .animate-fadeIn.delay-200 {
    animation: fadeIn 1s ease-out 0.2s forwards;
  }

  .animate-slideUp {
    animation: slideUp 1s ease-out forwards;
  }
`}</style>