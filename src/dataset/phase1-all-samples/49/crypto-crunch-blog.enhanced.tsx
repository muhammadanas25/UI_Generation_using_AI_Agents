import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Bitcoin, DollarSign, Newspaper, Search, TrendingUp, Menu, X, Sun, Moon } from 'lucide-react'
import { Transition } from "@headlessui/react"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  return (
    <div className={`${darkMode ? "dark" : ""} min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500`}>
      <header className="bg-white dark:bg-gray-800 shadow fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <Bitcoin className="h-8 w-8 text-yellow-500 mr-2 animate-pulse" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">CryptoCrunch</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300" href="#">
              News
            </Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300" href="#">
              Blockchain
            </Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300" href="#">
              Tokens
            </Link>
            <Link className="text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300" href="#">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center">
              <Input className="mr-2" placeholder="Search..." type="search" />
              <Button size="icon" variant="ghost" className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                <Search className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                <span className="sr-only">Search</span>
              </Button>
            </div>
            <Button size="icon" variant="ghost" onClick={toggleDarkMode} className="md:hidden">
              {darkMode ? <Sun className="h-4 w-4 text-yellow-500" /> : <Moon className="h-4 w-4 text-gray-600" />}
              <span className="sr-only">Toggle Dark Mode</span>
            </Button>
            <Button size="icon" variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              {mobileMenuOpen ? <X className="h-4 w-4 text-gray-600 dark:text-gray-300" /> : <Menu className="h-4 w-4 text-gray-600 dark:text-gray-300" />}
              <span className="sr-only">Open Menu</span>
            </Button>
          </div>
        </div>
        <Transition
          show={mobileMenuOpen}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {(ref) => (
            <div ref={ref} className="md:hidden bg-white dark:bg-gray-800 shadow-md">
              <nav className="px-4 pt-2 pb-4 space-y-2">
                <Link className="block text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300" href="#">
                  News
                </Link>
                <Link className="block text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300" href="#">
                  Blockchain
                </Link>
                <Link className="block text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300" href="#">
                  Tokens
                </Link>
                <Link className="block text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300" href="#">
                  About
                </Link>
                <div className="mt-4 flex items-center">
                  <Input className="mr-2" placeholder="Search..." type="search" />
                  <Button size="icon" variant="ghost" className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
                    <Search className="h-4 w-4 text-gray-600 dark:text-gray-300" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </Transition>
      </header>
      <main className="container mx-auto px-4 py-16 md:py-24">
        <section className="mb-12">
          <Card className="overflow-hidden transform hover:scale-105 transition-transform duration-300 shadow-lg">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/3 p-4">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl hover:text-yellow-500 transition-colors duration-300 cursor-pointer">Bitcoin Surges Past $50,000 Mark</CardTitle>
                  <CardDescription>The world's leading cryptocurrency reaches new heights</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    In a stunning turn of events, Bitcoin has surpassed the $50,000 mark, setting a new all-time high. This
                    surge comes amidst increasing institutional adoption and growing mainstream acceptance of
                    cryptocurrencies.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="primary" className="animate-bounce">Read More</Button>
                </CardFooter>
              </div>
              <div className="w-full md:w-1/3">
                <img
                  alt="Bitcoin chart"
                  className="h-48 md:h-full w-full object-cover transform hover:scale-110 transition-transform duration-500"
                  src="/bitcoin-chart.svg"
                  style={{
                    aspectRatio: "400/300",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          </Card>
        </section>
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Recent Posts</h2>
            <Button variant="link" className="flex items-center text-yellow-500 hover:underline">
              View All
              <TrendingUp className="h-4 w-4 ml-1" />
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl hover:text-yellow-500 transition-colors duration-300 cursor-pointer">Ethereum 2.0: The Future of Decentralized Finance</CardTitle>
                <CardDescription>Exploring the potential impact of Ethereum's upgrade</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  With Ethereum 2.0 on the horizon, the cryptocurrency community is buzzing with excitement. This major
                  upgrade promises to bring increased scalability, improved security, and enhanced sustainability to the
                  Ethereum network.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-300">Read More</Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl hover:text-yellow-500 transition-colors duration-300 cursor-pointer">NFTs: Digital Art Revolution or Bubble?</CardTitle>
                <CardDescription>Analyzing the explosive growth of non-fungible tokens</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Non-fungible tokens (NFTs) have taken the art world by storm, with digital artworks selling for millions
                  of dollars. But is this a lasting revolution in the art market, or just another speculative bubble?
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-300">Read More</Button>
              </CardFooter>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl hover:text-yellow-500 transition-colors duration-300 cursor-pointer">Decentralized Exchanges: The Future of Trading</CardTitle>
                <CardDescription>How DEXs are challenging traditional cryptocurrency exchanges</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Decentralized exchanges (DEXs) are gaining traction in the cryptocurrency world, offering users greater
                  control over their assets and improved security. We explore the pros and cons of this emerging technology.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-colors duration-300">Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </section>
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-white">Trending Topics</h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-4">
            <Button variant="ghost" className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 hover:bg-yellow-200 dark:hover:bg-yellow-800 transition-colors duration-300">
              <TrendingUp className="h-4 w-4 mr-2" />
              Market Analysis
            </Button>
            <Button variant="ghost" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-300">
              <DollarSign className="h-4 w-4 mr-2" />
              Token Reviews
            </Button>
            <Button variant="ghost" className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 hover:bg-green-200 dark:hover:bg-green-800 transition-colors duration-300">
              <Bitcoin className="h-4 w-4 mr-2" />
              Blockchain News
            </Button>
            <Button variant="ghost" className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-800 transition-colors duration-300">
              <Newspaper className="h-4 w-4 mr-2" />
              Latest Articles
            </Button>
          </div>
        </section>
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 md:mb-0">© 2023 CryptoCrunch. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4">
              <Button size="sm" variant="ghost" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                <Newspaper className="h-4 w-4 mr-2" />
                Subscribe
              </Button>
              <Button size="sm" variant="ghost" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300">
                <TrendingUp className="h-4 w-4 mr-2" />
                Market Data
              </Button>
              <Button size="sm" variant="ghost" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors duration-300">
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

