import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, X, SearchIcon } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold">SportsNation</h1>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-16 left-0 right-0 bg-blue-600 md:bg-transparent`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 p-4 md:p-0">
              <li><Link href="#" className="block hover:text-blue-200">Home</Link></li>
              <li><Link href="#" className="block hover:text-blue-200">Analysis</Link></li>
              <li><Link href="#" className="block hover:text-blue-200">Interviews</Link></li>
              <li><Link href="#" className="block hover:text-blue-200">Highlights</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-6 sm:py-8">
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Featured Story</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Featured story image"
                  width={600}
                  height={400}
                  className="h-48 w-full object-cover md:h-full md:w-48"
                />
              </div>
              <div className="p-4 sm:p-6 md:p-8">
                <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Analysis</div>
                <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">The Rise of Young Talent in This Year's Basketball Season</Link>
                <p className="mt-2 text-gray-500">A deep dive into the emerging stars who are reshaping the landscape of professional basketball.</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4">Recent Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Exclusive Interview: Star Quarterback Opens Up About Recent Trade", category: "Interviews", image: "/placeholder.svg?height=200&width=300" },
              { title: "Top 10 Plays of the Week: Jaw-Dropping Moments", category: "Highlights", image: "/placeholder.svg?height=200&width=300" },
              { title: "The Science of Sports: How Analytics is Changing the Game", category: "Analysis", image: "/placeholder.svg?height=200&width=300" },
              { title: "Rising Stars: 5 Rookies to Watch This Season", category: "Analysis", image: "/placeholder.svg?height=200&width=300" },
              { title: "Behind the Scenes: A Day in the Life of a Pro Athlete", category: "Interviews", image: "/placeholder.svg?height=200&width=300" },
              { title: "Game-Changing Moments: Plays That Defined the Season", category: "Highlights", image: "/placeholder.svg?height=200&width=300" },
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">{article.category}</div>
                  <Link href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{article.title}</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-4 py-6 sm:py-8">
          <div className="flex flex-wrap justify-between">
            <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg sm:text-xl font-bold mb-2">SportsNation</h3>
              <p className="text-sm sm:text-base text-gray-400">Your go-to source for sports analysis, interviews, and highlights.</p>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 mb-6 md:mb-0">
              <h4 className="text-base sm:text-lg font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><Link href="#" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h4 className="text-base sm:text-lg font-semibold mb-2">Subscribe to Our Newsletter</h4>
              <form className="flex flex-col sm:flex-row">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow mb-2 sm:mb-0 sm:mr-2"
                />
                <Button type="submit" variant="secondary" className="w-full sm:w-auto">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-gray-400">
            <p>&copy; 2024 SportsNation. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

