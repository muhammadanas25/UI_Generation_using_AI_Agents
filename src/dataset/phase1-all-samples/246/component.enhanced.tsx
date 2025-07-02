import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Wallet, Search, PaintBrush, ShieldCheck, Zap, Sun, Moon, Twitter, Discord, Instagram } from "lucide-react"
import { useState, useEffect } from "react"
import { Switch } from "@/components/ui/switch"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <header className="px-4 lg:px-6 h-20 flex items-center shadow-md bg-white dark:bg-gray-800 fixed w-full z-10 transition-colors duration-500">
        <a className="flex items-center justify-center" href="#">
          <PaintBrush className="h-8 w-8 text-primary-500" />
          <span className="ml-2 text-3xl font-extrabold text-gray-800 dark:text-white">ArtChain</span>
        </a>
        <nav className="ml-auto flex gap-6 items-center">
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition-colors duration-300" href="#">
            Explore
          </a>
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition-colors duration-300" href="#">
            Create
          </a>
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition-colors duration-300" href="#">
            Community
          </a>
          <Button className="ml-4 flex items-center" variant="outline">
            <Wallet className="mr-2 h-5 w-5" />
            Connect Wallet
          </Button>
          <div className="flex items-center ml-4">
            <Sun className="h-5 w-5 text-yellow-400" />
            <Switch checked={darkMode} onCheckedChange={setDarkMode} className="mx-2" />
            <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
          </div>
        </nav>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-purple-500 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center animate-fadeIn">
              <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">
                Welcome to ArtChain
              </h1>
              <p className="max-w-2xl text-lg text-gray-200 md:text-2xl">
                Discover, collect, and sell extraordinary NFTs on the world's first decentralized art marketplace.
              </p>
              <div className="w-full max-w-md">
                <form className="flex space-x-2">
                  <Input className="flex-1" placeholder="Search artworks, collections, or artists" type="search" />
                  <Button type="submit" variant="primary" className="flex items-center justify-center">
                    <Search className="h-5 w-5 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center text-gray-800 dark:text-white sm:text-4xl md:text-5xl mb-12">
              Featured Artworks
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <Card key={i} className="transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Artwork #{i}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={`Artwork #${i}`}
                      className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                      height="200"
                      src={`/placeholder.svg?height=200&width=300`}
                      style={{
                        aspectRatio: "300/200",
                        objectFit: "cover",
                      }}
                      width="300"
                    />
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <span className="text-sm text-gray-500 dark:text-gray-400">By Artist {i}</span>
                    <span className="font-bold text-indigo-600 dark:text-indigo-400">0.{i} ETH</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="primary" className="flex items-center">
                Load More
                <Zap className="ml-2 h-5 w-5 animate-bounce" />
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter text-center text-gray-800 dark:text-white sm:text-4xl md:text-5xl mb-12">
              Why Choose ArtChain?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-12 w-12 mb-4 text-indigo-600 dark:text-indigo-400 animate-pulse" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Secure Transactions</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our blockchain technology ensures safe and transparent transactions for all users.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-indigo-600 dark:text-indigo-400 animate-bounce" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Instant Payouts</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Artists receive payments instantly when their artworks are sold.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <PaintBrush className="h-12 w-12 mb-4 text-indigo-600 dark:text-indigo-400 animate-spin" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Creator-First Platform</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We prioritize artists' rights and provide tools to help them thrive in the digital art world.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 ArtChain. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-2 sm:mt-0">
            <a className="text-xs text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition-colors duration-300" href="#">
              Terms of Service
            </a>
            <a className="text-xs text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition-colors duration-300" href="#">
              Privacy
            </a>
          </nav>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300">
              <Discord className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors duration-300">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}