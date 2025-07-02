import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Instagram, Twitter, Menu } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function StyleCraftHomepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="StyleCraft logo"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <span className="ml-2 text-xl sm:text-2xl font-bold">StyleCraft</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Designs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Lookbooks
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Runway
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to StyleCraft
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 text-sm sm:text-base md:text-xl">
                  Redefining fashion with bold designs and timeless elegance.
                </p>
              </div>
              <div className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto bg-white text-black hover:bg-gray-200">
                  Explore Collections
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Designs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Featured design ${i}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-[200px] sm:h-[300px]"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">Design Collection {i}</h3>
                      <p className="text-sm text-gray-500">Explore our latest creations that blend style and comfort.</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Lookbooks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={`/placeholder.svg?height=600&width=800`}
                      alt={`Lookbook ${i}`}
                      width={800}
                      height={600}
                      className="object-cover w-full h-[300px] sm:h-[400px]"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">Season Lookbook {i}</h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Discover the essence of our latest collection through captivating visuals.
                      </p>
                      <Button variant="outline" className="w-full sm:w-auto">
                        View Lookbook
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Runway Shows</h2>
            <div className="grid grid-cols-1 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0 flex flex-col md:flex-row">
                    <Image
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Runway show ${i}`}
                      width={600}
                      height={400}
                      className="object-cover w-full md:w-1/2 h-[200px] sm:h-[300px]"
                    />
                    <div className="p-4 md:w-1/2">
                      <h3 className="font-semibold text-lg mb-2">Fashion Week {2023 + i}</h3>
                      <p className="text-sm text-gray-500 mb-4">
                        Experience the glamour and innovation of our latest runway collection.
                      </p>
                      <Button className="w-full sm:w-auto">Watch Show</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 StyleCraft. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 flex-wrap justify-center">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4 sm:ml-auto">
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}

