import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { PawPrintIcon as Paw, Heart, ShoppingBag, Mail, Menu, X } from 'lucide-react'

export default function PetPalsBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Paw className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">PetPals</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pet Care
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Reviews
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Adoption Stories
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-800 p-4">
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Pet Care
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Reviews
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Adoption Stories
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/placeholder.svg')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to PetPals
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your go-to resource for pet care, product reviews, and heartwarming adoption stories.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Latest Articles</Button>
                <Button variant="outline" className="w-full sm:w-auto">About Us</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Posts</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">10 Essential Tips for New Pet Owners</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Learn the basics of pet care to ensure your new furry friend feels right at home.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="w-full sm:w-auto">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">Top 5 Pet Toys of 2023</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Discover the best toys to keep your pets entertained and active throughout the year.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="w-full sm:w-auto">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">From Shelter to Forever Home: Max's Story</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">A heartwarming tale of how Max found his perfect family after months in a local shelter.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="w-full sm:w-auto">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Explore Our Categories</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Heart className="w-8 h-8 mb-2" />
                  <CardTitle className="text-xl sm:text-2xl">Pet Care</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Expert advice on nutrition, health, and well-being for your beloved pets.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full sm:w-auto">View Articles</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <ShoppingBag className="w-8 h-8 mb-2" />
                  <CardTitle className="text-xl sm:text-2xl">Product Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Honest reviews of the latest pet products to help you make informed decisions.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full sm:w-auto">Read Reviews</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <Paw className="w-8 h-8 mb-2" />
                  <CardTitle className="text-xl sm:text-2xl">Adoption Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Heartwarming tales of pets finding their forever homes and changing lives.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full sm:w-auto">Read Stories</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Subscribe to our newsletter for the latest pet care tips, product reviews, and adoption stories.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="w-full sm:max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                    <Mail className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 PetPals. All rights reserved.</p>
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

