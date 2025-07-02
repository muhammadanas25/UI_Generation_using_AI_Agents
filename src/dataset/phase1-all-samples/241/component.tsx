import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShirtIcon as Tshirt, Sparkles, ShoppingBag, Palette, Menu, X } from 'lucide-react'
import Link from "next/link"

export default function WearNFTLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Tshirt className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">WearNFT</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            For Brands
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Marketplace
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center py-4 bg-gray-100">
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            For Brands
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            Marketplace
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            About
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to WearNFT
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 text-sm sm:text-base md:text-xl">
                  The ultimate Web3 fashion marketplace. Tokenize, collect, and wear digital fashion like never before.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Explore Marketplace
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-800 bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  For Brands
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <Sparkles className="h-10 w-10 text-blue-500" />
                <h3 className="text-xl font-bold">Unique Digital Fashion</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  Collect and own one-of-a-kind digital fashion pieces as NFTs.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <ShoppingBag className="h-10 w-10 text-green-500" />
                <h3 className="text-xl font-bold">Seamless Marketplace</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  Buy, sell, and trade digital fashion with ease on our secure platform.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <Palette className="h-10 w-10 text-purple-500" />
                <h3 className="text-xl font-bold">Brand Collaborations</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  Exclusive collections from top fashion brands and designers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">How It Works</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white">1</div>
                <h3 className="text-xl font-bold">Connect Wallet</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  Link your Web3 wallet to start your digital fashion journey.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">2</div>
                <h3 className="text-xl font-bold">Browse & Collect</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  Explore unique digital fashion pieces and build your collection.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-white">3</div>
                <h3 className="text-xl font-bold">Wear & Showcase</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  Display your NFTs in virtual worlds or on social media.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Featured Brands</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm sm:text-base">
                    Brand {i}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Join the Digital Fashion Revolution</h2>
                <p className="mx-auto max-w-[600px] text-gray-400 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be the first to know about new drops, exclusive offers, and platform updates.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-black"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-white text-black hover:bg-gray-200" type="submit">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 WearNFT. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

