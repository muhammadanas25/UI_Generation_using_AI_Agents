import Link from "next/link"
import { ShoppingBag, Search, User, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-2xl font-bold">StyleSquare</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/women">Women</Link>
            <Link href="/men">Men</Link>
            <Link href="/accessories">Accessories</Link>
            <Link href="/sale">Sale</Link>
          </nav>
          <div className="flex-1" />
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Women</DropdownMenuItem>
                <DropdownMenuItem>Men</DropdownMenuItem>
                <DropdownMenuItem>Accessories</DropdownMenuItem>
                <DropdownMenuItem>Sale</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <main>
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-50" />
          <div className="container relative z-10 py-24 text-white">
            <h1 className="text-5xl font-bold mb-4">Summer Collection 2023</h1>
            <p className="text-xl mb-8">Discover the hottest trends of the season</p>
            <Button size="lg" variant="secondary">Shop Now</Button>
          </div>
          <img
            src="/placeholder.svg?height=600&width=1600"
            alt="Summer Collection"
            className="absolute inset-0 object-cover w-full h-full"
          />
        </section>
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {["Summer Essentials", "Workwear Edit", "Vacation Vibes"].map((collection) => (
                <div key={collection} className="relative group overflow-hidden rounded-lg">
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt={collection}
                    className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button variant="secondary">{collection}</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 bg-muted">
          <div className="container">
            <h2 className="text-3xl font-bold mb-8">Trending Now</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Floral Maxi Dress",
                "Linen Blazer",
                "Strappy Sandals",
                "Oversized Sunglasses",
              ].map((item) => (
                <div key={item} className="space-y-4">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <img
                      src="/placeholder.svg?height=300&width=300"
                      alt={item}
                      className="w-full h-full object-cover"
                    />
                    <Button
                      variant="secondary"
                      size="icon"
                      className="absolute top-2 right-2 rounded-full"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span className="sr-only">Add to cart</span>
                    </Button>
                  </div>
                  <div>
                    <h3 className="font-medium">{item}</h3>
                    <p className="text-sm text-muted-foreground">$99.99</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-8 mt-16">
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
        </div>
      </footer>
    </div>
  )
}