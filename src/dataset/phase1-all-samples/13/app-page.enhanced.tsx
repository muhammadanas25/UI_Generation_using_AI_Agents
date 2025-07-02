import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from 'react'

const poems = [
  { id: 1, title: "Whispers of Dawn", author: "Emily Frost", excerpt: "Soft hues paint the sky..." },
  { id: 2, title: "Urban Symphony", author: "Michael Stone", excerpt: "Concrete jungles hum..." },
  { id: 3, title: "Oceanic Dreams", author: "Sophia Waters", excerpt: "Waves crash, dreams unfold..." },
]

export default function Home() {
  const [search, setSearch] = useState('')

  const filteredPoems = poems.filter(poem =>
    poem.title.toLowerCase().includes(search.toLowerCase()) ||
    poem.author.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-50">
      <header className="py-6 bg-white shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-4xl font-serif font-bold text-gray-800">VerseVault</h1>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Home</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors duration-200">Contact</Link>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button can be added here */}
          </div>
        </div>
      </header>
      <section className="bg-white py-12 shadow-inner">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-700 mb-4">Welcome to VerseVault</h2>
          <p className="text-gray-600 mb-6">Discover and share beautiful poetry.</p>
          <div className="flex justify-center items-center flex-col md:flex-row">
            <Input
              placeholder="Search poems..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-64 md:w-96 mb-4 md:mb-0"
            />
            <Button className="ml-0 md:ml-4">Search</Button>
          </div>
        </div>
      </section>
      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredPoems.map((poem) => (
            <Card
              key={poem.id}
              className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 rounded-lg"
            >
              <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-t-lg">
                <CardTitle className="font-serif text-xl">{poem.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <p className="text-sm text-gray-500 mb-2">by {poem.author}</p>
                <p className="text-gray-700 mb-4">{poem.excerpt}</p>
                <Link
                  href={`/poem/${poem.id}`}
                  className="text-blue-600 hover:underline transition-colors duration-200"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="bg-white py-6 shadow-inner">
        <div className="container mx-auto px-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} VerseVault. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

