import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { useState } from "react"
import { Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-2 sm:py-4 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">TechTrends</h1>
          <nav className="hidden sm:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">News</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Products</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-gray-900">Trends</Link></li>
            </ul>
          </nav>
          <button
            className="sm:hidden text-gray-600 hover:text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="sm:hidden bg-white border-t">
            <ul className="flex flex-col space-y-2 p-4">
              <li><Link href="#" className="block text-gray-600 hover:text-gray-900">Home</Link></li>
              <li><Link href="#" className="block text-gray-600 hover:text-gray-900">News</Link></li>
              <li><Link href="#" className="block text-gray-600 hover:text-gray-900">Products</Link></li>
              <li><Link href="#" className="block text-gray-600 hover:text-gray-900">Trends</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <section className="mb-8 sm:mb-12">
          <Card className="overflow-hidden">
            <div className="flex flex-col md:flex-row"> {/* Update 3 */}
              <div className="md:flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover sm:h-full sm:w-48"
                  src="/placeholder.svg?height=400&width=300"
                  alt="AI-powered smartphone"
                  width={300}
                  height={400}
                />
              </div>
              <CardContent className="p-4 sm:p-8"> {/* Update 3 */}
                <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  AI-Powered Smartphones: The Next Big Thing
                </CardTitle>
                <p className="text-gray-600 mb-4">
                  Discover how artificial intelligence is revolutionizing the smartphone industry,
                  with new features that adapt to your lifestyle and enhance productivity.
                </p>
                <Button>Read More</Button>
              </CardContent>
            </div>
          </Card>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Recent Posts</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"> {/* Update 4 */}
            {[
              {
                title: "5G Networks Expand Globally",
                excerpt: "The latest on 5G rollout and its impact on various industries.",
                image: "/placeholder.svg?height=200&width=300"
              },
              {
                title: "Quantum Computing Breakthroughs",
                excerpt: "Recent advancements in quantum computing and their potential applications.",
                image: "/placeholder.svg?height=200&width=300"
              },
              {
                title: "Sustainable Tech Innovations",
                excerpt: "How the tech industry is addressing environmental concerns through innovation.",
                image: "/placeholder.svg?height=200&width=300"
              }
            ].map((post, index) => (
              <Card key={index}>
                <Image
                  className="h-48 w-full object-cover"
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                />
                <CardHeader>
                  <CardTitle className="text-lg font-semibold text-gray-900">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Read Article</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 sm:py-8 mt-8 sm:mt-12">
        <div className="container mx-auto px-4">
          <p className="text-center">&copy; 2024 TechTrends. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

