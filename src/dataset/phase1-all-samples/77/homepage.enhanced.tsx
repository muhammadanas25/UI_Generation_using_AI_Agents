import Link from "next/link"
import { ShoppingBag, Search, User, Menu, Facebook, Twitter, Instagram } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <img src="/logo.svg" alt="StyleSquare Logo" className="h-8 w-8 animate-fadeIn" />
            <span className="text-2xl font-bold animate-slideIn">StyleSquare</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/women" className="hover:text-primary transition-colors">Women</Link>
            <Link href="/men" className="hover:text-primary transition-colors">Men</Link>
            <Link href="/accessories" className="hover:text-primary transition-colors">Accessories</Link>
            <Link href="/sale" className="hover:text-primary transition-colors">Sale</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4 ml-6">
            <Input placeholder="Search for products..." className="w-64 hidden md:block transition-all duration-300" />
          </div>
          <div className="flex-1" />
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="hover:bg-muted transition-colors">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted transition-colors">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-muted transition-colors">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden hover:bg-muted transition-colors">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="animate-slideDown">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link href="/women">Women</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/men">Men</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/accessories">Accessories</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/sale">Sale</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main>
        <section className="relative">
          <div className="container relative z-10 flex flex-col md:flex-row items-center py-24 text-white">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-5xl font-bold animate-fadeInUp">Summer Collection 2023</h1>
              <p className="text-xl">Discover the hottest trends of the season</p>
              <Button size="lg" variant="secondary" className="animate-pulse">Shop Now</Button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0">
              <img
                src="/hero-image.svg"
                alt="Summer Collection"
                className="w-full h-auto rounded-lg shadow-lg animate-float"
              />
            </div>
          </div>
        </section>
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Summer Essentials", "Workwear Edit", "Vacation Vibes"].map((collection) => (
                <div key={collection} className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt={collection}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="secondary" className="animate-bounce">{collection}</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8 text-center">Trending Now</h2>
            <div className="flex justify-end mb-4">
              <button className="text-sm text-primary hover:underline">Sort by: Popular</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Floral Maxi Dress",
                "Linen Blazer",
                "Strappy Sandals",
                "Oversized Sunglasses",
              ].map((item) => (
                <div key={item} className="space-y-4 group">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt={item}
                      className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300"
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-2 right-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                  <div className="text-center">
                    <h3 className="font-medium">{item}</h3>
                    <p className="text-sm text-muted-foreground">$99.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-background">
          <div className="container max-w-md mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
            <p className="mb-6">Stay updated with the latest trends and exclusive offers.</p>
            <form className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input type="email" placeholder="Your email address" required className="w-full sm:w-auto" />
              <Button type="submit" variant="primary">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 mt-16 bg-background">
        <div className="container flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2023 StyleSquare. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:underline">
              Contact Us
            </Link>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}