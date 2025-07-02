import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function PortfolioHomepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="InteriorImpressions logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="ml-2 text-lg font-semibold">InteriorImpressions</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Portfolio
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
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  InteriorImpressions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Transforming spaces into stunning, personalized sanctuaries.
                </p>
              </div>
              <div className="space-x-4">
                <Button>View Portfolio</Button>
                <Button variant="outline">Contact Me</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Room Designs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Room design ${i}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">Modern Living Room</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        A sleek and comfortable living space designed for modern families.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Mood Boards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={`/placeholder.svg?height=300&width=300`}
                      alt={`Mood board ${i}`}
                      width={300}
                      height={300}
                      className="object-cover w-full h-64"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">Coastal Retreat</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Serene blues and natural textures for a beachy vibe.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Style Inspirations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="p-0">
                    <Image
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Style inspiration ${i}`}
                      width={600}
                      height={400}
                      className="object-cover w-full h-64"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-2">Minimalist Chic</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Clean lines and a monochromatic palette for a sophisticated look.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 InteriorImpressions. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </footer>
    </div>
  )
}