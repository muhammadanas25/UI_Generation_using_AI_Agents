import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Menu, X } from 'lucide-react'

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">ShineBright</span>
        </Link>
        <nav className={`${mobileMenuOpen ? 'flex' : 'hidden'} absolute top-14 left-0 right-0 bg-white z-20 flex-col items-center pb-4 md:pb-0 md:static md:flex md:flex-row md:ml-auto md:gap-4 sm:gap-6`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            Collections
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            Gifts
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            Customize
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            About
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-white">
                  Shine Bright with Exquisite Jewelry
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 text-sm sm:text-base md:text-lg">
                  Discover our stunning collections, perfect gifts, and create your own unique pieces.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-black hover:bg-gray-200">Shop Now</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Our Collections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Elegant Necklaces"
                    className="rounded-lg object-cover w-full aspect-[4/3]"
                    height={300}
                    width={400}
                  />
                  <h3 className="text-xl sm:text-2xl font-bold mt-4">Elegant Necklaces</h3>
                  <p className="text-gray-500 mt-2 text-sm sm:text-base">Timeless pieces for every occasion</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Sparkling Rings"
                    className="rounded-lg object-cover w-full aspect-[4/3]"
                    height={300}
                    width={400}
                  />
                  <h3 className="text-xl sm:text-2xl font-bold mt-4">Sparkling Rings</h3>
                  <p className="text-gray-500 mt-2 text-sm sm:text-base">From engagement to eternity</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Dazzling Earrings"
                    className="rounded-lg object-cover w-full aspect-[4/3]"
                    height={300}
                    width={400}
                  />
                  <h3 className="text-xl sm:text-2xl font-bold mt-4">Dazzling Earrings</h3>
                  <p className="text-gray-500 mt-2 text-sm sm:text-base">Add a touch of sparkle to your look</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Gift Ideas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Birthday Gifts"
                    className="rounded-full object-cover w-24 h-24 sm:w-40 sm:h-40 mx-auto"
                    height={200}
                    width={200}
                  />
                  <h3 className="text-lg sm:text-xl font-bold mt-4 text-center">Birthday</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Anniversary Gifts"
                    className="rounded-full object-cover w-24 h-24 sm:w-40 sm:h-40 mx-auto"
                    height={200}
                    width={200}
                  />
                  <h3 className="text-lg sm:text-xl font-bold mt-4 text-center">Anniversary</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Wedding Gifts"
                    className="rounded-full object-cover w-24 h-24 sm:w-40 sm:h-40 mx-auto"
                    height={200}
                    width={200}
                  />
                  <h3 className="text-lg sm:text-xl font-bold mt-4 text-center">Wedding</h3>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
                    alt="Graduation Gifts"
                    className="rounded-full object-cover w-24 h-24 sm:w-40 sm:h-40 mx-auto"
                    height={200}
                    width={200}
                  />
                  <h3 className="text-lg sm:text-xl font-bold mt-4 text-center">Graduation</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Create Your Own Masterpiece</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg">
                  Design a unique piece that tells your story. Our expert jewelers will bring your vision to life.
                </p>
              </div>
              <Button className="bg-black text-white hover:bg-gray-800">Start Designing</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Stay Connected</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-lg">
                  Subscribe to our newsletter for exclusive offers and the latest jewelry trends.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 ShineBright Jewelry. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Instagram className="h-4 w-4" />
          </Link>
          <Link className="text-gray-500 hover:text-gray-700" href="#">
            <Twitter className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

