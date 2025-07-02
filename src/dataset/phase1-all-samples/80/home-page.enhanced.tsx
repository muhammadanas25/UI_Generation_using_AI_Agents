import Link from "next/link"
import { Menu, Search, ShoppingCart, User } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 flex-wrap">
          <Link className="flex items-center justify-center" href="/">
            <span className="font-bold text-xl">HomeEssence</span>
          </Link>
          <div className="flex items-center justify-between flex-grow lg:flex-grow-0 lg:w-auto">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
              <div className="hidden md:flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <ShoppingCart className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon">
                  <User className="h-4 w-4" />
                </Button>
              </div>
            </nav>
            <form className="flex items-center space-x-2 md:hidden">
              <Input
                className="w-full md:w-auto mb-2 md:mb-0"
                placeholder="Search..."
                type="text"
                prefix={<Search className="h-4 w-4 text-gray-500" />}
              />
            </form>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[url('/placeholder.svg')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg animate-fadeInDown">
                  Welcome to HomeEssence
                </h1>
                <p className="max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl text-white drop-shadow-lg animate-fadeInUp">
                  Discover comfort and style for every room in your home
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-sm md:text-base"
                    placeholder="Search for furniture..."
                    type="text"
                  />
                  <Button type="submit" className="text-sm md:text-base">Search</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12">
              Shop by Room
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {["Living Room", "Bedroom", "Dining Room", "Home Office", "Outdoor", "Kids Room"].map(
                (room) => (
                  <Card key={room} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <img
                        alt={`${room} furniture`}
                        className="object-cover w-full h-40 md:h-48"
                        height="200"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "350/200",
                          objectFit: "cover",
                        }}
                        width="350"
                      />
                    </CardHeader>
                    <CardContent className="p-4">
                      <CardTitle className="text-lg md:text-xl">{room}</CardTitle>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full text-sm md:text-base">Shop Now</Button>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12">
              Top Selling Items
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {[
                "Modern Sofa",
                "Ergonomic Office Chair",
                "Queen Size Bed",
                "Dining Table Set",
                "Bookshelf",
                "Coffee Table",
                "Wardrobe",
                "Floor Lamp",
              ].map((item) => (
                <Card key={item}>
                  <CardHeader className="p-0">
                    <img
                      alt={item}
                      className="object-cover w-full h-40 md:h-48"
                      height="200"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "200/200",
                        objectFit: "cover",
                      }}
                      width="200"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-base md:text-lg">{item}</CardTitle>
                    <CardDescription className="text-sm md:text-base">$299.99</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full text-sm md:text-base">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Customer Testimonials Section (Update 5) */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-center mb-8 md:mb-12">
              Customer Testimonials
            </h2>
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-6 px-4 md:px-0">
              {/* Testimonial Cards */}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">About Us</h3>
              <p className="text-sm">
                HomeEssence is your one-stop shop for quality furniture and home decor.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-sm">Email: info@homeessence.com</p>
              <p className="text-sm">Phone: (555) 123-4567</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-gray-300 text-sm">
                  Facebook
                </a>
                <a href="#" className="text-white hover:text-gray-300 text-sm">
                  Instagram
                </a>
                <a href="#" className="text-white hover:text-gray-300 text-sm">
                  Pinterest
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-xs md:text-sm">
            © 2023 HomeEssence. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

