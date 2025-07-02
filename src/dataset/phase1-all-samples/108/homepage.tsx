import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ShoppingCart, Menu, Search, Facebook, Twitter, Instagram, X } from 'lucide-react'
import { useState } from "react"
import { motion } from "framer-motion"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold">EcoLiving</span>
          </Link>
          <nav className="flex items-center space-x-2 sm:space-x-4">
            <Link href="/kitchen" className="text-sm font-medium hover:underline hidden sm:inline-block">
              Kitchen
            </Link>
            <Link href="/bathroom" className="text-sm font-medium hover:underline hidden sm:inline-block">
              Bathroom
            </Link>
            <Link href="/living-room" className="text-sm font-medium hover:underline hidden sm:inline-block">
              Living Room
            </Link>
            <Button size="icon" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="sm:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Link href="/kitchen">Kitchen</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/bathroom">Bathroom</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/living-room">Living Room</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Sustainable Living Starts Here
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Discover eco-friendly home goods that make a difference. Shop our curated collection of sustainable products for your kitchen, bathroom, and living room.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Shop Now</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-8 text-center">
              Shop by Category
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {["Kitchen", "Bathroom", "Living Room", "Outdoor"].map((sport) => (
                <Card key={sport} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Image
                      src={`/placeholder.svg?height=200&width=200`}
                      alt={sport}
                      width={200}
                      height={200}
                      className="rounded-md object-cover w-full h-auto"
                    />
                  </CardHeader>
                  <CardFooter>
                    <CardTitle className="text-center w-full group-hover:underline text-sm md:text-base">
                      {sport}
                    </CardTitle>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Our Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { title: "Kitchen", description: "Sustainable cookware and utensils", href: "/kitchen" },
                { title: "Bathroom", description: "Plastic-free personal care items", href: "/bathroom" },
                { title: "Living Room", description: "Organic textiles and decor", href: "/living-room" },
              ].map((category) => (
                <div key={category.title} className="relative group">
                  <Link href={category.href} className="absolute inset-0 z-10">
                    <span className="sr-only">View {category.title} Products</span>
                  </Link>
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt={`Eco-friendly ${category.title.toLowerCase()} products`}
                    className="rounded-lg object-cover w-full aspect-[4/3] group-hover:opacity-50 transition-opacity"
                    width={600}
                    height={400}
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Commitment to Sustainability
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  At EcoLiving, we believe in creating a better future for our planet. Our products are carefully selected to minimize environmental impact and promote sustainable living.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-8">
                {[
                  "Eco-friendly materials",
                  "Plastic-free packaging",
                  "Ethical manufacturing",
                ].map((item) => (
                  <li key={item} className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-green-500"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              {
                title: "Shop",
                links: [
                  { href: "/kitchen", label: "Kitchen" },
                  { href: "/bathroom", label: "Bathroom" },
                  { href: "/living-room", label: "Living Room" },
                ],
              },
              {
                title: "About",
                links: [
                  { href: "/our-story", label: "Our Story" },
                  { href: "/sustainability", label: "Sustainability" },
                  { href: "/blog", label: "Blog" },
                ],
              },
              {
                title: "Customer Service",
                links: [
                  { href: "/contact", label: "Contact Us" },
                  { href: "/shipping", label: "Shipping" },
                  { href: "/returns", label: "Returns" },
                ],
              },
              {
                title: "Connect",
                links: [
                  { href: "https://facebook.com", label: "Facebook" },
                  { href: "https://instagram.com", label: "Instagram" },
                  { href: "https://twitter.com", label: "Twitter" },
                ],
              },
            ].map((section) => (
              <div key={section.title} className="space-y-2">
                <h4 className="font-semibold">{section.title}</h4>
                <ul className="space-y-1">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-sm hover:underline">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            © 2024 EcoLiving. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

