import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Leaf, Recycle, Menu } from 'lucide-react'
import { useState } from 'react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-amber-50">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/placeholder.svg?height=32&width=32"
            width={32}
            height={32}
            alt="RetroRevive logo"
            className="h-8 w-8"
          />
          <span className="ml-2 text-xl sm:text-2xl font-bold text-amber-900">RetroRevive</span>
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6 text-amber-900" />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'
          } md:flex absolute md:relative top-16 left-0 right-0 bg-amber-50 md:bg-transparent flex-col md:flex-row items-center gap-4 p-4 md:p-0 md:top-0 md:ml-auto`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-amber-900" href="#">
            Shop
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-amber-900" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-amber-900" href="#">
            Sustainability
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 text-amber-900" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-amber-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900">
                  Revive Your Style, Sustainably
                </h1>
                <p className="mx-auto max-w-[700px] text-amber-800 text-sm sm:text-base md:text-xl">
                  Discover timeless fashion with a modern twist. Shop our curated collection of vintage clothing and
                  accessories.
                </p>
              </div>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto bg-amber-600 text-white hover:bg-amber-700">Shop Now</Button>
                <Button variant="outline" className="w-full sm:w-auto border-amber-600 text-amber-600 hover:bg-amber-100">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8 text-amber-900">
              Featured Styles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative group overflow-hidden rounded-lg">
                  <Image
                    src={`/placeholder.svg?height=400&width=300`}
                    alt={`Featured item ${item}`}
                    width={300}
                    height={400}
                    className="object-cover w-full h-[300px] sm:h-[400px] transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="bg-white text-amber-900 hover:bg-amber-100">View Item</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8 text-amber-900">
              Our Commitment to Sustainability
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Recycle className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-900">Circular Fashion</h3>
                <p className="text-sm sm:text-base text-amber-800">We promote the reuse and recycling of clothing to reduce waste.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Leaf className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-900">Eco-Friendly Practices</h3>
                <p className="text-sm sm:text-base text-amber-800">Our operations prioritize minimal environmental impact.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-amber-600 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-amber-900">Timeless Style</h3>
                <p className="text-sm sm:text-base text-amber-800">We curate pieces that stand the test of time, reducing fast fashion.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-amber-900">
                  Join the RetroRevive Community
                </h2>
                <p className="mx-auto max-w-[600px] text-amber-800 text-sm sm:text-base md:text-xl">
                  Subscribe to our newsletter for exclusive offers, style tips, and sustainability insights.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-amber-300 bg-white px-3 py-2 text-sm placeholder:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" className="w-full sm:w-auto bg-amber-600 text-white hover:bg-amber-700">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-amber-300">
        <p className="text-xs text-amber-800">© 2024 RetroRevive. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-amber-800" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-amber-800" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

