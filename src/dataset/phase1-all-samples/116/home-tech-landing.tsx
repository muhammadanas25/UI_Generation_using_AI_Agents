import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Home, ChefHat, Smartphone, ShoppingCart, Menu } from 'lucide-react'
import { useState } from "react"

export default function HomeTechLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Home className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">HomeTech</span>
        </Link>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex absolute lg:relative top-14 left-0 right-0 bg-background lg:top-0 flex-col lg:flex-row gap-4 p-4 lg:p-0 shadow-md lg:shadow-none`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Kitchen Gadgets
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Smart Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to HomeTech
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground text-sm sm:text-base md:text-xl">
                  Discover the latest in kitchen gadgets and smart home technology. Upgrade your home today!
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
                <Button className="w-full sm:w-auto">Shop Now</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <ChefHat className="h-12 w-12 mb-2" />
                <h3 className="text-lg sm:text-xl font-bold">Smart Blender</h3>
                <p className="text-sm text-muted-foreground text-center">Blend your favorite smoothies with voice control</p>
                <Button className="w-full sm:w-auto">Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <Smartphone className="h-12 w-12 mb-2" />
                <h3 className="text-lg sm:text-xl font-bold">Smart Thermostat</h3>
                <p className="text-sm text-muted-foreground text-center">Control your home's temperature from anywhere</p>
                <Button className="w-full sm:w-auto">Add to Cart</Button>
              </div>
              <div className="flex flex-col items-center space-y-2 border p-4 rounded-lg">
                <ShoppingCart className="h-12 w-12 mb-2" />
                <h3 className="text-lg sm:text-xl font-bold">Smart Fridge</h3>
                <p className="text-sm text-muted-foreground text-center">Keep track of groceries and order automatically</p>
                <Button className="w-full sm:w-auto">Add to Cart</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-xl">
                  Subscribe to our newsletter for the latest product updates and exclusive offers.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 HomeTech. All rights reserved.</p>
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

