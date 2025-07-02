import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Leaf, Search, Twitter, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">EcoGarden</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Articles
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      {isMenuOpen && (
        <nav className="md:hidden border-b p-4">
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Articles
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to EcoGarden
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover sustainable gardening practices and permaculture techniques to create your own eco-friendly paradise.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Read Articles</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Article</h2>
            <div className="mt-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl sm:text-2xl">The Benefits of Companion Planting in Permaculture</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">
                    Discover how companion planting can enhance your garden's productivity, reduce pest problems, and create a
                    harmonious ecosystem in your backyard.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Recent Articles</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Creating a Water-Wise Garden</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Learn techniques for conserving water while maintaining a thriving garden.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">The Art of Composting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Turn your kitchen scraps and yard waste into black gold for your garden.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Attracting Beneficial Insects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">Discover how to create a garden that welcomes helpful bugs and pollinators.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 EcoGarden. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="#">
            <Facebook className="h-4 w-4" />
          </Link>
          <Link href="#">
            <Twitter className="h-4 w-4" />
          </Link>
          <Link href="#">
            <Instagram className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </div>
  )
}

