import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, ChevronRight, Menu, X } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-2 sm:py-4 flex justify-between items-center">
          <Link href="/">
            <a className="flex items-center space-x-2">
              <Image src="/logo.png" alt="GlowUp Logo" width={32} height={32} className="rounded-full sm:w-10 sm:h-10" />
              <h1 className="text-xl sm:text-2xl font-bold text-pink-600">GlowUp</h1>
            </a>
          </Link>
          <nav className={`absolute top-full left-0 w-full bg-white shadow md:shadow-none md:static md:w-auto md:flex md:space-x-4 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'}`}>
            <ul className="flex flex-col md:flex-row">
              <li><Link href="#"><a className="block px-4 py-2 text-sm sm:text-base text-gray-600 hover:text-pink-600 transition-colors">Home</a></Link></li>
              <li><Link href="#"><a className="block px-4 py-2 text-sm sm:text-base text-gray-600 hover:text-pink-600 transition-colors">Skincare</a></Link></li>
              <li><Link href="#"><a className="block px-4 py-2 text-sm sm:text-base text-gray-600 hover:text-pink-600 transition-colors">Makeup</a></Link></li>
              <li><Link href="#"><a className="block px-4 py-2 text-sm sm:text-base text-gray-600 hover:text-pink-600 transition-colors">Reviews</a></Link></li>
            </ul>
          </nav>
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-gray-600 hover:text-pink-600 focus:outline-none">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-20 sm:py-24">
        <section className="mb-8 sm:mb-16">
          <div className="relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <Image src="/featured.jpg" alt="Featured Post" layout="responsive" width={800} height={400} className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 p-4 sm:p-6 text-white">
              <h2 className="text-2xl sm:text-4xl font-bold mb-2">10 Steps to Achieve Glass Skin</h2>
              <Button variant="secondary" className="mt-2 sm:mt-4 animate-bounce text-sm sm:text-base">
                Read More <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 text-center">Latest Tutorials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="p-3 sm:p-4">
                <Image src="/skincare1.jpg" alt="Skincare Tutorial" width={600} height={400} className="rounded-lg" />
                <CardTitle className="mt-3 sm:mt-4 text-lg sm:text-xl">Skincare</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li><Link href="#"><a className="text-pink-600 hover:underline">Night-time Skincare Routine for Dry Skin</a></Link></li>
                  <li><Link href="#"><a className="text-pink-600 hover:underline">How to Layer Your Skincare Products</a></Link></li>
                  <li><Link href="#"><a className="text-pink-600 hover:underline">DIY Face Masks for Glowing Skin</a></Link></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="p-3 sm:p-4">
                <Image src="/makeup1.jpg" alt="Makeup Tutorial" width={600} height={400} className="rounded-lg" />
                <CardTitle className="mt-3 sm:mt-4 text-lg sm:text-xl">Makeup</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li><Link href="#"><a className="text-pink-600 hover:underline">5-Minute Everyday Makeup Look</a></Link></li>
                  <li><Link href="#"><a className="text-pink-600 hover:underline">Mastering the Smokey Eye</a></Link></li>
                  <li><Link href="#"><a className="text-pink-600 hover:underline">How to Apply False Lashes Like a Pro</a></Link></li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-2xl transition-shadow duration-300">
              <CardHeader className="p-3 sm:p-4">
                <Image src="/makeup2.jpg" alt="Makeup Tutorial" width={600} height={400} className="rounded-lg" />
                <CardTitle className="mt-3 sm:mt-4 text-lg sm:text-xl">Makeup</CardTitle>
              </CardHeader>
              <CardContent className="p-3 sm:p-4">
                <ul className="space-y-1 sm:space-y-2 text-sm sm:text-base">
                  <li><Link href="#"><a className="text-pink-600 hover:underline">Contour Like a Pro</a></Link></li>
                  <li><Link href="#"><a className="text-pink-600 hover:underline">Best Foundations for Oily Skin</a></Link></li>
                  <li><Link href="#"><a className="text-pink-600 hover:underline">Top 10 Lip Colors This Season</a></Link></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800 text-center">Product Reviews</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { name: "Glow Serum", brand: "LuminousBeauty", rating: 4.5, image: "/product1.jpg" },
              { name: "Matte Lipstick", brand: "ColorPop", rating: 4.0, image: "/product2.jpg" },
              { name: "Hydrating Moisturizer", brand: "AquaFresh", rating: 5.0, image: "/product3.jpg" },
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="p-3 sm:p-4">
                  <Image src={product.image} alt={product.name} width={600} height={400} className="rounded-lg" />
                  <CardTitle className="mt-3 sm:mt-4 text-lg sm:text-xl">{product.name}</CardTitle>
                  <CardDescription className="text-sm">{product.brand}</CardDescription>
                </CardHeader>
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 sm:h-5 sm:w-5 ${i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                          } transition-colors duration-200`}
                      />
                    ))}
                    <span className="ml-2 text-sm sm:text-base text-gray-600">{product.rating.toFixed(1)}</span>
                  </div>
                </CardContent>
                <CardFooter className="p-3 sm:p-4">
                  <Button variant="outline" className="w-full text-sm sm:text-base hover:bg-pink-50 transition-colors">Read Full Review</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-8 sm:mb-16">
          <Card className="bg-gradient-to-r from-pink-100 to-purple-100 p-4 sm:p-6 rounded-lg shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl font-bold text-gray-800">Subscribe to Our Newsletter</CardTitle>
              <CardDescription className="text-sm sm:text-base text-gray-600">Get the latest beauty tips and product reviews delivered to your inbox.</CardDescription>
            </CardHeader>
            <CardContent className="mt-3 sm:mt-4">
              <form className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <Input type="email" placeholder="Enter your email" className="flex-grow text-sm sm:text-base" required />
                <Button type="submit" className="w-full sm:w-auto text-sm sm:text-base">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
            <h2 className="text-center text-sm sm:text-base text-gray-700">&copy; {new Date().getFullYear()} GlowUp. All rights reserved.</h2>
          </Card>
        </section>
      </main>
    </div>
  )
}

