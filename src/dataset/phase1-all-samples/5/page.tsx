import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">ShutterStories</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Home</Link></li>
              <li><Link href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Portfolio</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">About</Link></li>
              <li><Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
            </ul>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col space-y-4 mt-6">
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-lg">Home</Link>
                <Link href="#portfolio" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-lg">Portfolio</Link>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-lg">About</Link>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-lg">Contact</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Latest Stories</h2>
          <div className="space-y-8 md:space-y-12">
            {[1, 2, 3].map((post) => (
              <article key={post} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                <div className="relative h-64 md:h-96 lg:h-[32rem]">
                  <Image
                    src={`/placeholder.svg?height=800&width=1200`}
                    alt={`Photo post ${post}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-gray-900 dark:text-white">Capturing the Moment</h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.
                  </p>
                  <Button variant="outline">Read More</Button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 md:h-64">
                    <Image
                      src={`/placeholder.svg?height=400&width=600`}
                      alt={`Portfolio item ${item}`}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white dark:bg-gray-800 shadow-md mt-12">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4 md:mb-0 text-center md:text-left">&copy; 2023 ShutterStories. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Instagram className="w-5 h-5 md:w-6 md:h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <Twitter className="w-5 h-5 md:w-6 md:h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

