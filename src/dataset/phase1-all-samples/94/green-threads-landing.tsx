import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Recycle, Sun, Droplet, Menu, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function GreenThreadsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl sm:text-2xl font-bold text-gray-900">GreenThreads</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
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
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <Button variant="ghost" size="icon" className="absolute right-4 top-4" onClick={() => setIsMenuOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
            <nav className="flex flex-col gap-4 mt-8">
              <Link className="text-lg font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsMenuOpen(false)}>
                Shop
              </Link>
              <Link className="text-lg font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link className="text-lg font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsMenuOpen(false)}>
                Sustainability
              </Link>
              <Link className="text-lg font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">
                    Sustainable Fashion for a Better World
                  </h1>
                  <p className="max-w-[600px] text-gray-500 text-sm sm:text-base md:text-xl">
                    Discover eco-friendly clothing that doesn't compromise on style. Join us in making fashion sustainable.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="bg-green-600 hover:bg-green-700">Shop Now</Button>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <Image
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=550"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12">Our Commitment</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Recycle className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
                <h3 className="text-lg sm:text-xl font-bold">Recycled Materials</h3>
                <p className="text-sm sm:text-base text-gray-500">We use recycled materials in our products to reduce waste and environmental impact.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Sun className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
                <h3 className="text-lg sm:text-xl font-bold">Solar-Powered Production</h3>
                <p className="text-sm sm:text-base text-gray-500">Our factories are powered by renewable solar energy, minimizing our carbon footprint.</p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Droplet className="h-10 w-10 sm:h-12 sm:w-12 text-green-600" />
                <h3 className="text-lg sm:text-xl font-bold">Water Conservation</h3>
                <p className="text-sm sm:text-base text-gray-500">We employ innovative techniques to reduce water usage in our manufacturing process.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12">Featured Products</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    alt={`Product ${item}`}
                    className="object-cover w-full h-48 sm:h-60"
                    height="300"
                    src={`/placeholder.svg?height=300&width=400`}
                    width="400"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="font-semibold text-base sm:text-lg mb-2">Eco-Friendly Product {item}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">Made from 100% recycled materials</p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="bg-green-600 hover:bg-green-700">Shop Now</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Join Our Mission</h2>
                <p className="max-w-[900px] text-gray-500 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter and be part of the sustainable fashion revolution.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button className="bg-green-600 hover:bg-green-700 w-full sm:w-auto" type="submit">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our terms and privacy policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 GreenThreads. All rights reserved.</p>
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

