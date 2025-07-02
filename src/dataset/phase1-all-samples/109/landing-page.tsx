import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingBag, Search, Menu, X } from 'lucide-react'
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <ShoppingBag className="h-6 w-6" />
            <span className="font-bold text-xl">BagCharm</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Collections
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              New Arrivals
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
          </nav>
          <div className="flex md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <nav className="flex flex-col space-y-4 p-4 bg-background border-t">
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                Collections
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                New Arrivals
              </Link>
              <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
                About
              </Link>
              <Button variant="ghost" size="sm" className="justify-start px-0">
                <Search className="h-5 w-5 mr-2" />
                Search
              </Button>
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Luxury handbag showcase"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg?height=550&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                    Elevate Your Style with BagCharm
                  </h1>
                  <p className="max-w-[600px] text-gray-300 md:text-xl">
                    Discover our exquisite collection of designer handbags. Timeless elegance meets contemporary fashion.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button className="bg-white text-black hover:bg-gray-200">Shop New Arrivals</Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    Explore Collections
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">New Arrivals</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="group relative overflow-hidden rounded-lg bg-white shadow-lg">
                  <img
                    alt={`New arrival ${i}`}
                    className="h-60 w-full object-cover transition-transform group-hover:scale-105"
                    height="240"
                    src={`/placeholder.svg?height=240&width=360&text=New+Arrival+${i}`}
                    width="360"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold">Designer Bag {i}</h3>
                    <p className="text-sm text-gray-500">Elegant and stylish</p>
                    <p className="mt-2 font-bold">$1,299.99</p>
                  </div>
                  <Link className="absolute inset-0" href="#">
                    <span className="sr-only">View Designer Bag {i}</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Designer Collections</h2>
            <div className="mt-8 grid gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
              {["Chanel", "Gucci", "Louis Vuitton", "Hermès"].map((brand) => (
                <div key={brand} className="group relative overflow-hidden rounded-lg bg-gray-100">
                  <img
                    alt={`${brand} collection`}
                    className="h-40 sm:h-60 w-full object-cover transition-transform group-hover:scale-105"
                    height="240"
                    src={`/placeholder.svg?height=240&width=360&text=${brand}`}
                    width="360"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 transition-opacity group-hover:opacity-75" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-lg sm:text-2xl font-bold text-white text-center px-2">{brand}</h3>
                  </div>
                  <Link className="absolute inset-0" href="#">
                    <span className="sr-only">View {brand} collection</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Stay in Style</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for exclusive offers, new arrivals, and fashion insights.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Shop</h3>
              <ul className="space-y-1">
                <li><Link className="text-sm hover:underline" href="#">New Arrivals</Link></li>
                <li><Link className="text-sm hover:underline" href="#">Best Sellers</Link></li>
                <li><Link className="text-sm hover:underline" href="#">Sale</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">About</h3>
              <ul className="space-y-1">
                <li><Link className="text-sm hover:underline" href="#">Our Story</Link></li>
                <li><Link className="text-sm hover:underline" href="#">Careers</Link></li>
                <li><Link className="text-sm hover:underline" href="#">Press</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Support</h3>
              <ul className="space-y-1">
                <li><Link className="text-sm hover:underline" href="#">FAQ</Link></li>
                <li><Link className="text-sm hover:underline" href="#">Shipping</Link></li>
                <li><Link className="text-sm hover:underline" href="#">Returns</Link></li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-1">
                <li><Link className="text-sm hover:underline" href="#">Email</Link></li>
                <li><Link className="text-sm hover:underline" href="#">Phone</Link></li>
                <li><Link className="text-sm hover:underline" href="#">Store Locator</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
            © 2024 BagCharm. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

