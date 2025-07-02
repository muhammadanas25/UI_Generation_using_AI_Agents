import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShirtIcon as Tshirt, Sparkles, ShoppingBag, Palette, Menu, X, Instagram, Twitter, DiscIcon as Discord } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function WearNFTLanding() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link className="flex items-center space-x-2" href="#">
            <Tshirt className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500 animate-pulse" />
            <span className="text-lg sm:text-xl font-bold text-gray-800">WearNFT</span>
          </Link>
          <nav className="hidden md:flex space-x-4 lg:space-x-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-blue-500 transition" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-blue-500 transition" href="#">
              For Brands
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-blue-500 transition" href="#">
              Marketplace
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-blue-500 transition" href="#">
              About
            </Link>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <div className="flex flex-col space-y-4 py-4 px-6">
              <Link className="text-sm font-medium text-gray-700 hover:text-blue-500 transition" href="#">
                How It Works
              </Link>
              <Link className="text-sm font-medium text-gray-700 hover:text-blue-500 transition" href="#">
                For Brands
              </Link>
              <Link className="text-sm font-medium text-gray-700 hover:text-blue-500 transition" href="#">
                Marketplace
              </Link>
              <Link className="text-sm font-medium text-gray-700 hover:text-blue-500 transition" href="#">
                About
              </Link>
            </div>
          </nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-12 sm:py-20 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fade-in">Welcome to WearNFT</h1>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl mb-8 animate-fade-in delay-200">
              The ultimate Web3 fashion marketplace. Tokenize, collect, and wear digital fashion like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-md shadow-lg hover:bg-gray-100 transition transform hover:scale-105"
                href="#"
              >
                Explore Marketplace
              </Link>
              <Link
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-white text-white font-semibold rounded-md shadow-lg hover:bg-white hover:text-blue-600 transition transform hover:scale-105"
                href="#"
              >
                For Brands
              </Link>
            </div>
            <Image src="/hero-image.png" alt="Digital Fashion" className="mt-10 w-full max-w-4xl animate-slide-in" width={800} height={600} />
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2">
                <Sparkles className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">Unique Digital Fashion</h3>
                <p className="text-gray-600 text-center">
                  Collect and own one-of-a-kind digital fashion pieces as NFTs.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2">
                <ShoppingBag className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">Seamless Marketplace</h3>
                <p className="text-gray-600 text-center">
                  Buy, sell, and trade digital fashion with ease on our secure platform.
                </p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition transform hover:-translate-y-2">
                <Palette className="h-12 w-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">Brand Collaborations</h3>
                <p className="text-gray-600 text-center">
                  Exclusive collections from top fashion brands and designers.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-14 w-14 bg-blue-500 text-white rounded-full mb-4 animate-bounce">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Connect Wallet</h3>
                <p className="text-gray-600">
                  Link your Web3 wallet to start your digital fashion journey.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-14 w-14 bg-green-500 text-white rounded-full mb-4 animate-bounce delay-200">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Browse & Collect</h3>
                <p className="text-gray-600">
                  Explore unique digital fashion pieces and build your collection.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-14 w-14 bg-purple-500 text-white rounded-full mb-4 animate-bounce delay-400">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Wear & Showcase</h3>
                <p className="text-gray-600">
                  Display your NFTs in virtual worlds or on social media.
                </p>
              </div>
            </div>
            <Image src="/how-it-works.png" alt="How It Works" className="mt-10 w-full max-w-3xl mx-auto animate-fade-in" width={600} height={400} />
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12">Featured Brands</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-white rounded-lg shadow hover:shadow-2xl transition transform hover:scale-105">
                  <Image src={`/brands/brand${i}.png`} alt={`Brand ${i}`} className="h-16 w-16 sm:h-24 sm:w-24 object-contain" width={96} height={96} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
          <div className="container mx-auto px-4 flex flex-col items-center text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Join the Digital Fashion Revolution</h2>
            <p className="max-w-xl text-base sm:text-lg md:text-xl mb-8">
              Be the first to know about new drops, exclusive offers, and platform updates.
            </p>
            <form className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md">
              <Input
                className="w-full sm:w-auto flex-1"
                placeholder="Enter your email"
                type="email"
                required
              />
              <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 transition transform hover:scale-105" type="submit">
                Subscribe
              </Button>
            </form>
            <p className="text-sm mt-4">
              By subscribing, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
            </p>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm mb-4 md:mb-0">© 2024 WearNFT. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            <Link className="text-sm hover:text-white transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-white transition" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-white transition">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-white transition">
              <Discord className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

