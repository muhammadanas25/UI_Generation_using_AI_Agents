import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bitcoin, DollarSign, Newspaper, Search, TrendingUp, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Bitcoin className="h-6 w-6 sm:h-8 sm:w-8 text-yellow-500 mr-2" />
              <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">CryptoCrunch</h1>
            </div>
            <nav className="hidden md:flex space-x-4">
              <Link className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="#">
                News
              </Link>
              <Link className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="#">
                Blockchain
              </Link>
              <Link className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="#">
                Tokens
              </Link>
              <Link className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="#">
                About
              </Link>
            </nav>
            <div className="flex items-center">
              <Input className="mr-2 hidden sm:inline-flex" placeholder="Search..." type="search" />
              <Button size="icon" variant="ghost" className="hidden sm:inline-flex">
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </Button>
              <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <div className="container mx-auto px-4 py-2">
              <Link className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="#">
                News
              </Link>
              <Link className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="#">
                Blockchain
              </Link>
              <Link className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="#">
                Tokens
              </Link>
              <Link className="block py-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white" href="#">
                About
              </Link>
              <div className="mt-2">
                <Input className="w-full" placeholder="Search..." type="search" />
              </div>
            </div>
          </nav>
        )}
      </header>
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <section className="mb-8 sm:mb-12">
          <Card className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-2/3">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl">Bitcoin Surges Past $50,000 Mark</CardTitle>
                  <CardDescription>The world's leading cryptocurrency reaches new heights</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    In a stunning turn of events, Bitcoin has surpassed the $50,000 mark, setting a new all-time high. This
                    surge comes amidst increasing institutional adoption and growing mainstream acceptance of
                    cryptocurrencies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full sm:w-auto">Read More</Button>
                </CardFooter>
              </div>
              <div className="md:w-1/3">
                <img
                  alt="Bitcoin chart"
                  className="h-48 sm:h-full w-full object-cover"
                  height="300"
                  src="/placeholder.svg?height=300&width=400"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                  width="400"
                />
              </div>
            </div>
          </Card>
        </section>
        <section>
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">Recent Posts</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Ethereum 2.0: The Future of Decentralized Finance</CardTitle>
                <CardDescription>Exploring the potential impact of Ethereum's upgrade</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  With Ethereum 2.0 on the horizon, the cryptocurrency community is buzzing with excitement. This major
                  upgrade promises to bring increased scalability, improved security, and enhanced sustainability to the
                  Ethereum network.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full sm:w-auto">Read More</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">NFTs: Digital Art Revolution or Bubble?</CardTitle>
                <CardDescription>Analyzing the explosive growth of non-fungible tokens</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Non-fungible tokens (NFTs) have taken the art world by storm, with digital artworks selling for millions
                  of dollars. But is this a lasting revolution in the art market, or just another speculative bubble?
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full sm:w-auto">Read More</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Decentralized Exchanges: The Future of Trading</CardTitle>
                <CardDescription>How DEXs are challenging traditional cryptocurrency exchanges</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  Decentralized exchanges (DEXs) are gaining traction in the cryptocurrency world, offering users greater
                  control over their assets and improved security. We explore the pros and cons of this emerging technology.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full sm:w-auto">Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow mt-8 sm:mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4 sm:mb-0">© 2023 CryptoCrunch. All rights reserved.</p>
            <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-4">
              <Button size="sm" variant="ghost">
                <Newspaper className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
              <Button size="sm" variant="ghost">
                <TrendingUp className="h-4 w-4 mr-2" />
                Market Data
              </Button>
              <Button size="sm" variant="ghost">
                <DollarSign className="h-4 w-4 mr-2" />
                Donate
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

