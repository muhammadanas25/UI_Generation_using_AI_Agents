import Image from "next/image"
import Link from "next/link"
import { Instagram, Twitter, Facebook } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function TrendSetterPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <header className="sticky top-0 z-10 backdrop-blur-md bg-white/30 border-b border-pink-100">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-pink-600">TrendSetter</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="#editorials" className="text-gray-600 hover:text-pink-600 transition">Editorials</Link></li>
              <li><Link href="#collaborations" className="text-gray-600 hover:text-pink-600 transition">Collaborations</Link></li>
              <li><Link href="#tips" className="text-gray-600 hover:text-pink-600 transition">Style Tips</Link></li>
              <li><Link href="#contact" className="text-gray-600 hover:text-pink-600 transition">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative h-[70vh] flex items-center justify-center">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Fashion backdrop"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
          <div className="relative z-1 text-center text-white">
            <h2 className="text-5xl font-bold mb-4">Elevate Your Style</h2>
            <p className="text-xl mb-8">Fashion Stylist & Trend Forecaster</p>
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700">Book a Consultation</Button>
          </div>
        </section>

        <section id="editorials" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Fashion Editorials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
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
            <div className="flex flex-wrap justify-center gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="text-center">
                  <Image
                    src={`/placeholder.svg?height=150&width=150&text=Celebrity+${i}`}
                    alt={`Celebrity ${i}`}
                    width={150}
                    height={150}
                    className="rounded-full mb-4"
                  />
                  <p className="font-semibold">Celebrity Name</p>
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
                "Accessorize with Confidence",
                "Mix Patterns Like a Pro",
                "The Perfect Fit is Everything",
              ].map((tip, i) => (
                <Card key={i} className="flex flex-col justify-between">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">{tip}</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="outline" className="w-full">Read More</Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">TrendSetter</h2>
              <p>Elevating fashion, one style at a time.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <p>Email: hello@trendsetter.com</p>
              <p>Phone: (123) 456-7890</p>
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
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2024 TrendSetter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}