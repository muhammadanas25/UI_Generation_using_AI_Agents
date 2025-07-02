import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-green-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold text-green-800">PlantParenting</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-green-700 hover:text-green-900">Home</Link></li>
              <li><Link href="#" className="text-green-700 hover:text-green-900">Care Guides</Link></li>
              <li><Link href="#" className="text-green-700 hover:text-green-900">Indoor Gardening</Link></li>
              <li><Link href="#" className="text-green-700 hover:text-green-900">Green Living</Link></li>
            </ul>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden border-t border-green-100">
            <ul className="py-2">
              <li><Link href="#" className="block px-4 py-2 text-green-700 hover:bg-green-100">Home</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-green-700 hover:bg-green-100">Care Guides</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-green-700 hover:bg-green-100">Indoor Gardening</Link></li>
              <li><Link href="#" className="block px-4 py-2 text-green-700 hover:bg-green-100">Green Living</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <section className="mb-8 sm:mb-12">
          <Card className="bg-green-100">
            <CardContent className="p-4 sm:p-6">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">Welcome to PlantParenting</h2>
                  <p className="text-green-700 mb-4">Discover the joy of nurturing plants and creating your own indoor oasis. Our expert guides and tips will help you become a confident plant parent in no time!</p>
                  <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">Get Started</Button>
                </div>
                <div className="aspect-video rounded-lg overflow-hidden mt-4 md:mt-0">
                  <img
                    alt="Indoor plants"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/placeholder.svg?height=300&width=400"
                    width="400"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4 sm:mb-6">Recent Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              { title: "5 Low-Maintenance Plants for Beginners", category: "Care Guides" },
              { title: "Creating a Thriving Herb Garden Indoors", category: "Indoor Gardening" },
              { title: "How to Propagate Succulents", category: "Care Guides" },
              { title: "The Benefits of Plants in Your Home Office", category: "Green Living" },
              { title: "Understanding Plant Light Requirements", category: "Care Guides" },
              { title: "Eco-Friendly Pest Control for Houseplants", category: "Green Living" },
            ].map((post, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt={post.title}
                    className="w-full h-40 object-cover rounded-md mb-4"
                    height="160"
                    src={`/placeholder.svg?height=160&width=320`}
                    width="320"
                  />
                  <p className="text-sm text-green-600">{post.category}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8 sm:mb-12">
          <Card className="bg-green-100">
            <CardContent className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-green-800 mb-4">Join Our Newsletter</h2>
              <p className="text-green-700 mb-4">Get the latest plant care tips and green living advice delivered to your inbox!</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm sm:text-base">&copy; 2023 PlantParenting. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-green-300">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-green-300">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-green-300">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

