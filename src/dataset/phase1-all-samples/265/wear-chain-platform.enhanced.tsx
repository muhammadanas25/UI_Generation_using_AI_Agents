import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Cube, Lock, ShoppingBag, Tshirt, Sun, Moon, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function WearChainPlatform() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="sticky top-0 z-50 px-4 lg:px-6 h-16 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md">
          <Link className="flex items-center justify-center" href="#">
            <Tshirt className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
            <span className="ml-2 text-xl font-extrabold text-indigo-600 dark:text-indigo-400">WearChain</span>
          </Link>
          <nav className="hidden lg:flex gap-6">
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
              Explore
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
              Brands
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-800" />}
            </button>
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                aria-label="Open Menu"
              >
                <Menu className="h-5 w-5 text-gray-800 dark:text-gray-200" />
              </button>
              <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <DialogContent className="p-4 bg-white dark:bg-gray-900 min-w-[250px]">
                  <div className="flex items-center justify-between mb-4">
                    <Link className="flex items-center justify-center" href="#">
                      <Tshirt className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      <span className="ml-2 text-lg font-bold text-indigo-600 dark:text-indigo-400">WearChain</span>
                    </Link>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                      aria-label="Close Menu"
                    >
                      <X className="h-5 w-5 text-gray-800 dark:text-gray-200" />
                    </button>
                  </div>
                  <nav className="flex flex-col space-y-4">
                    <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
                      Explore
                    </Link>
                    <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
                      Brands
                    </Link>
                    <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
                      How It Works
                    </Link>
                    <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
                      About
                    </Link>
                  </nav>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-indigo-500 to-purple-600">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center animate-fadeIn">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                  Welcome to WearChain
                </h1>
                <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-white opacity-80">
                  The future of fashion meets blockchain technology. Own, trade, and wear your digital fashion as NFTs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button className="px-6 py-3 text-base" variant="default">
                    Explore Collections
                  </Button>
                  <Button className="px-6 py-3 text-base" variant="outline">
                    Connect Wallet
                  </Button>
                </div>
                <div className="mt-8 flex space-x-4">
                  <Image
                    src="/images/model1.png"
                    alt="WearChain Model 1"
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-white shadow-lg animate-bounce"
                  />
                  <Image
                    src="/images/model2.png"
                    alt="WearChain Model 2"
                    width={150}
                    height={150}
                    className="rounded-full border-4 border-white shadow-lg animate-bounce delay-200"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
                Featured Collections
              </h2>
              <Tabs defaultValue="all" className="w-full">
                <TabsList className="flex justify-center mb-8 space-x-2 overflow-x-auto">
                  <TabsTrigger value="all" className="whitespace-nowrap">
                    All
                  </TabsTrigger>
                  <TabsTrigger value="clothing" className="whitespace-nowrap">
                    Clothing
                  </TabsTrigger>
                  <TabsTrigger value="accessories" className="whitespace-nowrap">
                    Accessories
                  </TabsTrigger>
                  <TabsTrigger value="footwear" className="whitespace-nowrap">
                    Footwear
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Card key={i} className="transform hover:scale-105 transition-transform shadow-lg hover:shadow-2xl">
                      <CardHeader>
                        <Image
                          alt={`NFT Collection ${i}`}
                          className="aspect-square object-cover rounded-md"
                          height={300}
                          src={`/placeholder.svg?height=300&width=300`}
                          width={300}
                        />
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="text-xl font-semibold">Digital Denim #{i}</CardTitle>
                        <CardDescription className="text-gray-500 dark:text-gray-400">By FashionBrand{i}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" variant="secondary">
                          View Collection
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="grid gap-12 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <Cube className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4 transition-transform transform hover:scale-110" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">NFT-Backed Fashion</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Each piece of clothing is represented by a unique NFT, proving authenticity and ownership on the
                    blockchain.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <ShoppingBag className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4 transition-transform transform hover:scale-110" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Physical & Digital Twins</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Own both the physical garment and its digital counterpart, unlocking new possibilities in fashion.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <Lock className="h-12 w-12 text-indigo-600 dark:text-indigo-400 mb-4 transition-transform transform hover:scale-110" />
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">Secure Ownership</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Blockchain technology ensures your ownership is verifiable and transferable at any time.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join the Fashion Revolution</h2>
                <p className="max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300">
                  Be part of the future of fashion. Sign up for updates and early access to exclusive NFT drops.
                </p>
                <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4">
                  <Input
                    className="flex-1"
                    placeholder="Enter your email"
                    type="email"
                    required
                    aria-label="Email"
                  />
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  By subscribing, you agree to our <Link href="#" className="underline">Terms of Service</Link> and{" "}
                  <Link href="#" className="underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-100 dark:bg-gray-900 py-6">
          <div className="container px-4 md:px-6 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 WearChain. All rights reserved.</p>
            <nav className="flex space-x-4">
              <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
                Privacy
              </Link>
              <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
                Discord
              </Link>
              <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition" href="#">
                Twitter
              </Link>
            </nav>
          </div>
        </footer>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition hidden lg:block"
          aria-label="Back to Top"
        >
          ↑
        </button>
      </div>
    </div>
  )
}