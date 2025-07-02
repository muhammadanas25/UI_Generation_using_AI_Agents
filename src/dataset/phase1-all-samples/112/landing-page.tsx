import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Search, ShoppingBag, Heart, Gift, Users, Menu } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <ShoppingBag className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">ArtisanShop</span>
        </Link>
        <button className="lg:hidden" aria-label="Open menu">
          <Menu className="h-6 w-6" />
        </button>
        <nav className="hidden lg:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Shop
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Sell
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white">
                  Discover Unique Handmade Treasures
                </h1>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base text-gray-200 md:text-lg">
                  ArtisanShop connects you with talented creators offering one-of-a-kind handcrafted goods.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white" placeholder="Search items..." type="text" />
                  <Button type="submit" variant="secondary">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <Card key={item}>
                  <CardContent className="p-4">
                    <img
                      alt="Handmade product"
                      className="w-full h-48 sm:h-60 object-cover rounded-lg mb-4"
                      height="240"
                      src={`/placeholder.svg?height=240&width=360`}
                      style={{
                        aspectRatio: "360/240",
                        objectFit: "cover",
                      }}
                      width="360"
                    />
                    <h3 className="font-semibold text-lg mb-2">Handcrafted Item {item}</h3>
                    <p className="text-sm text-gray-500 mb-2">By Artisan Name</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">$49.99</span>
                      <Button size="sm" variant="outline">
                        Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-center mb-8">Why Choose ArtisanShop?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Heart className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Support Independent Creators</h3>
                <p className="text-sm sm:text-base text-gray-500">Every purchase directly supports talented artisans and their craft.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Gift className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Unique, Handmade Products</h3>
                <p className="text-sm sm:text-base text-gray-500">Discover one-of-a-kind items you won't find anywhere else.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Vibrant Community</h3>
                <p className="text-sm sm:text-base text-gray-500">Join a community of creators and art enthusiasts.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">Join Our Creative Community</h2>
                <p className="mx-auto max-w-[600px] text-sm sm:text-base text-gray-200 md:text-lg">
                  Whether you're a creator or a buyer, there's a place for you at ArtisanShop.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="secondary">Start Selling</Button>
                <Button variant="outline">Start Shopping</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 ArtisanShop. All rights reserved.</p>
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

