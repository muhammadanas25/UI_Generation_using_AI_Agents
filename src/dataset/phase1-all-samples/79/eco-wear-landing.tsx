import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, ShoppingBag, Recycle, Sun, Menu } from 'lucide-react'
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6" />
          <span className="sr-only">EcoWear</span>
        </Link>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-14 left-0 right-0 bg-white lg:bg-transparent shadow-md lg:shadow-none z-50 lg:ml-auto gap-4 p-4 lg:p-0`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Shop
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Sustainability
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  EcoWear: Sustainable Fashion for a Better World
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover our eco-friendly clothing line made from sustainable materials. Look good, feel good, and help the planet.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Shop Now</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Organic Cotton Tee", price: "$29.99", image: "/placeholder.svg?height=400&width=300" },
                { name: "Recycled Denim Jeans", price: "$79.99", image: "/placeholder.svg?height=400&width=300" },
                { name: "Hemp Blend Sweater", price: "$59.99", image: "/placeholder.svg?height=400&width=300" },
              ].map((product) => (
                <div key={product.name} className="flex flex-col items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-60 mb-4"
                    width={300}
                    height={400}
                  />
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  <Button className="mt-2 w-full sm:w-auto">Add to Cart</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Sustainable Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <ShoppingBag className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Organic Cotton</h3>
                <p className="text-gray-600">Grown without harmful pesticides or synthetic fertilizers, our organic cotton is soft, breathable, and kind to the environment.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Recycle className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Recycled Materials</h3>
                <p className="text-gray-600">We use recycled polyester and nylon made from post-consumer plastic bottles, reducing waste and conserving resources.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Sun className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Hemp</h3>
                <p className="text-gray-600">A versatile and sustainable fiber that requires minimal water and no pesticides to grow, hemp is durable and gets softer with each wash.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 EcoWear. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

