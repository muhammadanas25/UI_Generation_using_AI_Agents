import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mountain, Tent, Map, Search, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Mountain className="h-6 w-6 sm:h-8 sm:w-8" />
              <span className="text-xl sm:text-2xl font-bold">AdventureTales</span>
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="/guides" className="hover:underline">Guides</Link>
              <Link href="/hiking" className="hover:underline">Hiking</Link>
              <Link href="/camping" className="hover:underline">Camping</Link>
              <Link href="/about" className="hover:underline">About</Link>
            </nav>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="md:hidden">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
              <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                <span className="sr-only">Menu</span>
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden border-t border-primary-foreground/10 px-4 py-2">
            <Link href="/guides" className="block py-2 hover:underline">Guides</Link>
            <Link href="/hiking" className="block py-2 hover:underline">Hiking</Link>
            <Link href="/camping" className="block py-2 hover:underline">Camping</Link>
            <Link href="/about" className="block py-2 hover:underline">About</Link>
          </nav>
        )}
      </header>

      <main className="flex-grow">
        <section className="bg-muted py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">Discover Your Next Adventure</h1>
                <p className="text-base sm:text-lg mb-6">Explore our curated guides for outdoor enthusiasts, from beginner-friendly hikes to advanced camping techniques.</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="w-full sm:w-auto">
                    <Map className="mr-2 h-4 w-4" /> Explore Guides
                  </Button>
                  <Button variant="outline" className="w-full sm:w-auto">
                    <Tent className="mr-2 h-4 w-4" /> Camping Tips
                  </Button>
                </div>
              </div>
              <div className="relative h-64 sm:h-80 md:h-96 mt-6 md:mt-0">
                <Image
                  src="/placeholder.svg?height=384&width=640"
                  alt="Featured adventure"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Recent Adventures</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-card text-card-foreground rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Adventure+${i}`}
                    alt={`Adventure ${i}`}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Adventure Title {i}</h3>
                    <p className="text-sm text-muted-foreground mb-4">A brief description of the adventure, highlighting key points and attractions.</p>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">Read More</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted py-8 sm:py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Stay Updated on New Adventures</h2>
            <p className="text-base sm:text-lg mb-6">Subscribe to our newsletter for the latest guides, tips, and outdoor inspiration.</p>
            <form className="flex flex-col sm:flex-row max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-grow mb-2 sm:mb-0" />
              <Button type="submit" className="sm:ml-2">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground mt-8 sm:mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About AdventureTales</h3>
              <p className="text-sm">Inspiring outdoor enthusiasts with expert guides, hiking routes, and camping tips since 2023.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guides" className="hover:underline">Adventure Guides</Link></li>
                <li><Link href="/hiking" className="hover:underline">Hiking Routes</Link></li>
                <li><Link href="/camping" className="hover:underline">Camping Tips</Link></li>
                <li><Link href="/gear" className="hover:underline">Gear Reviews</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:underline">Facebook</Link></li>
                <li><Link href="#" className="hover:underline">Instagram</Link></li>
                <li><Link href="#" className="hover:underline">Twitter</Link></li>
                <li><Link href="#" className="hover:underline">YouTube</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:underline">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm">
            <p>&copy; 2023 AdventureTales. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

