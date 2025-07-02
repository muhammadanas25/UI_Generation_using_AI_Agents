import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">InkFlow</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Stories</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">Poems</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-800">About</Link></li>
            </ul>
          </nav>
          <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden border-t">
            <ul className="py-2">
              <li><Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Stories</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">Poems</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-6 sm:py-8">
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Featured Post</h2>
          <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">The Whisper of the Willow</h3>
            <p className="text-gray-600 mb-4 text-sm sm:text-base">In the quiet of the evening, as the sun dipped below the horizon, the old willow tree began to whisper its secrets...</p>
            <Button variant="outline">Read More</Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Recent Posts</h2>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Echoes of Silence", type: "Poem" },
              { title: "The Forgotten Key", type: "Short Story" },
              { title: "Moonlit Sonata", type: "Poem" },
              { title: "The Last Page", type: "Short Story" },
              { title: "Whispers in the Wind", type: "Poem" },
              { title: "The Clockwork Heart", type: "Short Story" },
            ].map((post, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-sm">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">{post.type}</p>
                <Button variant="ghost">Read</Button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 border-t">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 text-sm sm:text-base">
          <p>&copy; 2024 InkFlow. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

