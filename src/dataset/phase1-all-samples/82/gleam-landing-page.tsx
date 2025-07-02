import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Twitter } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"

export default function GleamLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">Gleam Jewelry</span>
          <span className="font-bold text-2xl">Gleam</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <Image
                alt="Luxury diamond necklace"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Exquisite Elegance
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover our collection of timeless jewelry pieces, crafted with precision and passion.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg">Shop Now</Button>
                  <Button size="lg" variant="outline">
                    View Collections
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
            <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Diamond ring"
                    className="w-full h-60 object-cover rounded-lg"
                    height="240"
                    src="/placeholder.svg?height=240&width=360"
                    width="360"
                  />
                  <h3 className="text-lg font-bold mt-4">Radiant Solitaire Ring</h3>
                  <p className="text-sm text-muted-foreground">A stunning 2-carat diamond set in 18k white gold.</p>
                  <p className="font-bold mt-2">$5,999</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Pearl necklace"
                    className="w-full h-60 object-cover rounded-lg"
                    height="240"
                    src="/placeholder.svg?height=240&width=360"
                    width="360"
                  />
                  <h3 className="text-lg font-bold mt-4">Elegant Pearl Strand</h3>
                  <p className="text-sm text-muted-foreground">Lustrous Akoya pearls on an 18-inch gold chain.</p>
                  <p className="font-bold mt-2">$2,499</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    alt="Sapphire earrings"
                    className="w-full h-60 object-cover rounded-lg"
                    height="240"
                    src="/placeholder.svg?height=240&width=360"
                    width="360"
                  />
                  <h3 className="text-lg font-bold mt-4">Sapphire Drop Earrings</h3>
                  <p className="text-sm text-muted-foreground">Brilliant blue sapphires surrounded by diamonds.</p>
                  <p className="font-bold mt-2">$3,799</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              What Our Customers Say
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      alt="Customer"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <h3 className="font-semibold">Emily R.</h3>
                      <p className="text-sm text-muted-foreground">Verified Buyer</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "The quality of my new necklace is outstanding. It's even more beautiful in person!"
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      alt="Customer"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <h3 className="font-semibold">Michael T.</h3>
                      <p className="text-sm text-muted-foreground">Verified Buyer</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "I was amazed by the attention to detail in my custom-designed ring. Truly exceptional craftsmanship."
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Image
                      alt="Customer"
                      className="rounded-full"
                      height="40"
                      src="/placeholder.svg?height=40&width=40"
                      style={{
                        aspectRatio: "40/40",
                        objectFit: "cover",
                      }}
                      width="40"
                    />
                    <div>
                      <h3 className="font-semibold">Sophia L.</h3>
                      <p className="text-sm text-muted-foreground">Verified Buyer</p>
                    </div>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    "The customer service was impeccable, and my earrings arrived beautifully packaged. Highly recommend!"
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 Gleam Jewelry. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link className="text-muted-foreground hover:text-foreground" href="#">
            <Facebook className="h-4 w-4" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="#">
            <Instagram className="h-4 w-4" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="#">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}

