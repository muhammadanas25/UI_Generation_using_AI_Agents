import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ShoppingCart, User, Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">BookNest</span>
          <Image
            src="/placeholder.svg"
            width={32}
            height={32}
            alt="BookNest Logo"
            className="h-6 w-6"
          />
          <span className="ml-2 text-2xl font-bold">BookNest</span>
        </Link>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex absolute top-14 left-0 right-0 bg-white shadow-md lg:shadow-none lg:static flex-col lg:flex-row gap-4 p-4 lg:p-0`}>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Categories
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Bestsellers
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-4 w-4" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
              <span className="sr-only">User Account</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to BookNest
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Discover your next favorite book in our cozy online bookstore.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Search for books..." type="search" />
                  <Button type="submit" className="w-full sm:w-auto">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Book Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {["Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Romance", "Biography"].map((category) => (
                <Card key={category} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{category}</h3>
                    <p className="text-gray-500">Explore our collection of {category.toLowerCase()} books.</p>
                    <Button className="mt-4 w-full sm:w-auto" variant="outline">
                      Browse {category}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f8f9fa]">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Bestsellers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((book) => (
                <Card key={book} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-4">
                    <Image
                      src={`/placeholder.svg?height=200&width=150`}
                      alt={`Book ${book}`}
                      width={150}
                      height={200}
                      className="w-full h-[200px] object-cover mb-4"
                    />
                    <h3 className="font-bold mb-2">Book Title {book}</h3>
                    <p className="text-sm text-gray-500 mb-2">Author Name</p>
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                      <span className="font-bold">$19.99</span>
                      <Button size="sm" className="w-full sm:w-auto">Add to Cart</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 BookNest. All rights reserved.</p>
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

