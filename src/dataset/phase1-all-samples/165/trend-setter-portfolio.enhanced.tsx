import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Facebook, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

import { useState } from "react"

export default function TrendSetterPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalContent, setModalContent] = useState<{ title: string, description: string } | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 scroll-smooth">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md transition-shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-pink-600">TrendSetter</h1>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li><Link href="#editorials" className="text-gray-600 hover:text-pink-600 transition">Editorials</Link></li>
              <li><Link href="#collaborations" className="text-gray-600 hover:text-pink-600 transition">Collaborations</Link></li>
              <li><Link href="#tips" className="text-gray-600 hover:text-pink-600 transition">Style Tips</Link></li>
              <li><Link href="#contact" className="text-gray-600 hover:text-pink-600 transition">Contact</Link></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-600 hover:text-pink-600 transition">
              {menuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white/90">
            <ul className="flex flex-col space-y-4 px-4 pb-4">
              <li><Link href="#editorials" className="text-gray-600 hover:text-pink-600 transition">Editorials</Link></li>
              <li><Link href="#collaborations" className="text-gray-600 hover:text-pink-600 transition">Collaborations</Link></li>
              <li><Link href="#tips" className="text-gray-600 hover:text-pink-600 transition">Style Tips</Link></li>
              <li><Link href="#contact" className="text-gray-600 hover:text-pink-600 transition">Contact</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main>
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Fashion backdrop"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0 opacity-75 transition-opacity hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent"></div>
          <div className="relative z-10 text-center text-white px-4">
            <h2 className="text-5xl font-bold mb-4 animate-fadeInDown">Elevate Your Style</h2>
            <p className="text-xl mb-8 animate-fadeInUp">Fashion Stylist & Trend Forecaster</p>
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 transition transform hover:-translate-y-1 animate-bounce">Book a Consultation</Button>
          </div>
        </section>

        <section id="editorials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Fashion Editorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="overflow-hidden transform transition-transform hover:scale-105">
                  <Image
                    src={`/placeholder.svg?height=400&width=600&text=Editorial+${i}`}
                    alt={`Editorial ${i}`}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-4">
                    <h3 className="text-xl font-semibold mb-2">Vogue Summer Collection</h3>
                    <p className="text-gray-600">A vibrant showcase of this season's hottest trends.</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="collaborations" className="py-16 bg-gradient-to-r from-purple-100 to-pink-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Celebrity Collaborations</h2>
            <div className="flex overflow-x-auto space-x-6 py-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="flex-shrink-0 text-center">
                  <Image
                    src={`/placeholder.svg?height=150&width=150&text=Celebrity+${i}`}
                    alt={`Celebrity ${i}`}
                    width={150}
                    height={150}
                    className="rounded-full mb-4 border-4 border-pink-300 transition-transform hover:scale-110"
                  />
                  <p className="font-semibold">Celebrity Name {i}</p>
                  <p className="text-sm text-gray-600">Red Carpet Event</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="tips" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Style Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Accessorize with Confidence", description: "Complete your look with the right accessories to highlight your personal style." },
                { title: "Mix Patterns Like a Pro", description: "Learn how to combine different patterns seamlessly for a chic appearance." },
                { title: "The Perfect Fit is Everything", description: "Ensure your clothes fit perfectly to enhance your silhouette and comfort." },
              ].map((tip, i) => (
                <Card key={i} className="flex flex-col justify-between hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
                    <p className="text-gray-600">
                      {tip.description}
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">Read More</Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>{tip.title}</DialogTitle>
                          <DialogDescription>
                            {tip.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-8 md:space-y-0">
            <div>
              <h2 className="text-2xl font-bold mb-4">TrendSetter</h2>
              <p>Elevating fashion, one style at a time.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p>Email: <a href="mailto:hello@trendsetter.com" className="hover:text-pink-400 transition">hello@trendsetter.com</a></p>
              <p>Phone: <a href="tel:+11234567890" className="hover:text-pink-400 transition">(123) 456-7890</a></p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-pink-400 transition">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-pink-400 transition">
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link href="#" className="hover:text-pink-400 transition">
                  <Facebook className="w-6 h-6" />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <form className="flex flex-col sm:flex-row">
                <Input type="email" placeholder="Your email" className="mb-4 sm:mb-0 sm:mr-2" />
                <Button type="submit" className="bg-pink-600 hover:bg-pink-700 transition">Subscribe</Button>
              </form>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 TrendSetter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}