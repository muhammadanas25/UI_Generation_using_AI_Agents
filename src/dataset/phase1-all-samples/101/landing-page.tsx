import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingBag, Instagram, Facebook, Twitter, Menu } from 'lucide-react'
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <ShoppingBag className="h-6 w-6 mr-2" />
          <span className="text-lg font-bold">AccessorizeMe</span>
        </Link>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6" />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-16 left-0 w-full lg:w-auto bg-background lg:bg-transparent p-4 lg:p-0 gap-4 lg:gap-6 shadow-md lg:shadow-none z-50`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Shop
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Collections
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
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Featured accessory"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Elevate Your Style
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover the perfect accessories to complement your unique style. From elegant to edgy, we have
                    something for every fashion enthusiast.
                  </p>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link href="#" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto">Shop Now</Button>
                  </Link>
                  <Link href="#" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full sm:w-auto">View Collections</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Trending Accessories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <Image
                      alt={`Trending accessory ${i}`}
                      className="aspect-square object-cover w-full rounded-lg"
                      height="300"
                      src={`/placeholder.svg?height=300&width=300&text=Accessory+${i}`}
                      width="300"
                    />
                    <h3 className="text-lg font-bold mt-2">Trendy Accessory {i}</h3>
                    <p className="text-sm text-muted-foreground">The must-have piece for this season</p>
                    <Button className="w-full mt-4">Add to Cart</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Style Inspiration</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardContent className="p-4">
                    <Image
                      alt={`Style inspiration ${i}`}
                      className="aspect-[3/4] object-cover w-full rounded-lg"
                      height="400"
                      src={`/placeholder.svg?height=400&width=300&text=Style+${i}`}
                      width="300"
                    />
                    <h3 className="text-lg font-bold mt-2">Style Look {i}</h3>
                    <p className="text-sm text-muted-foreground">Get inspired by our curated looks</p>
                    <Button variant="outline" className="w-full mt-4">See Details</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground text-center">© 2024 AccessorizeMe. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-4 mt-4">
          <Link href="#" aria-label="Instagram">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Facebook">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter className="h-6 w-6" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

