import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import Image from "next/image"
import { Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-indigo-600 animate-fadeIn">InkFlow</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <Link href="#">
                  <a className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Home</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Stories</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">Poems</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="text-gray-700 hover:text-indigo-600 transition-colors duration-300">About</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <Input placeholder="Search..." className="w-48" />
          </div>
          <Button variant="ghost" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden border-t">
            <ul className="py-2">
              <li><Link href="#"><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a></Link></li>
              <li><Link href="#"><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Stories</a></Link></li>
              <li><Link href="#"><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Poems</a></Link></li>
              <li><Link href="#"><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">About</a></Link></li>
            </ul>
            <div className="px-4 py-2">
              <Input placeholder="Search..." className="w-full" />
            </div>
          </nav>
        )}
      </header>

      <motion.main
        className="flex-grow container mx-auto px-4 py-6 sm:py-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <section className="mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-gray-800">Featured Post</h2>
          <Card className="flex flex-col md:flex-row shadow-lg hover:shadow-2xl transition-shadow duration-300">
            <div className="w-full md:w-2/5 relative">
              <Image
                src="/placeholder.svg?height=250&width=400"
                alt="The Whisper of the Willow"
                width={400}
                height={250}
                layout="responsive"
                className="rounded-t-lg md:rounded-l-lg md:rounded-r-none"
              />
            </div>
            <div className="p-4 sm:p-6 flex flex-col justify-between w-full md:w-3/5">
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3 text-indigo-600">The Whisper of the Willow</h3>
                <p className="text-gray-600 mb-4 sm:mb-5 text-sm sm:text-base">In the quiet of the evening, as the sun dipped below the horizon, the old willow tree began to whisper its secrets...</p>
              </div>
              <Button variant="default" className="self-start">Read More</Button>
            </div>
          </Card>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">Recent Posts</h2>
            <Button variant="link">View All</Button>
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Echoes of Silence", type: "Poem", img: "/placeholder.svg?height=300&width=500" },
              { title: "The Forgotten Key", type: "Short Story", img: "/placeholder.svg?height=300&width=500" },
              { title: "Moonlit Sonata", type: "Poem", img: "/placeholder.svg?height=300&width=500" },
              { title: "The Last Page", type: "Short Story", img: "/placeholder.svg?height=300&width=500" },
              { title: "Whispers in the Wind", type: "Poem", img: "/placeholder.svg?height=300&width=500" },
              { title: "The Clockwork Heart", type: "Short Story", img: "/placeholder.svg?height=300&width=500" },
            ].map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full pt-[60%]">
                  <Image
                    src={post.img}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-indigo-600">{post.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{post.type}</p>
                  <Button variant="ghost">Read</Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </motion.main>

      <footer className="bg-white shadow-inner mt-8">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm sm:text-base mb-4 md:mb-0">&copy; 2024 InkFlow. All rights reserved.</p>
          <div className="flex flex-wrap justify-center space-x-4">
            <Link href="#">
              <a className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm sm:text-base">Privacy Policy</a>
            </Link>
            <Link href="#">
              <a className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm sm:text-base">Terms of Service</a>
            </Link>
            <Link href="#">
              <a className="text-gray-600 hover:text-indigo-600 transition-colors duration-300 text-sm sm:text-base">Contact</a>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

