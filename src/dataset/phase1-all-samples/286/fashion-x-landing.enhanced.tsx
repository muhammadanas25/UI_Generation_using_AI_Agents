import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CuboidIcon as Cube, Zap, Shield, Coins, Menu, X, Twitter, DiscIcon as Discord, Instagram } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function FashionXLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="px-4 lg:px-6 py-4 flex items-center bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <Cube className="h-6 w-6 sm:h-8 sm:w-8 mr-2 text-purple-600 animate-spin-slow" />
          <span className="font-bold text-lg sm:text-xl text-purple-600">FashionX</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-6">
          <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
            Marketplace
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
            Create
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
            FAQ
          </Link>
        </nav>
        <div className="hidden md:flex ml-6 gap-4">
          <Button variant="ghost" className="flex items-center gap-2">
            <Zap className="h-5 w-5" />
            Connect Wallet
          </Button>
        </div>
        <button className="md:hidden ml-auto text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-white shadow-md z-40 animate-fade-in">
          <nav className="flex flex-col items-center gap-4 py-4">
            <Link className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              Marketplace
            </Link>
            <Link className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              Create
            </Link>
            <Link className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              About
            </Link>
            <Link className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              FAQ
            </Link>
            <Button variant="ghost" className="flex items-center gap-2 mt-4">
              <Zap className="h-5 w-5" />
              Connect Wallet
            </Button>
          </nav>
        </div>
      )}
      <main className="flex-1 mt-16 sm:mt-20">
        <section className="w-full py-12 sm:py-20 md:py-32 lg:py-40 bg-gradient-to-r from-purple-500 to-indigo-600 text-white overflow-hidden">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="flex flex-col space-y-4 sm:space-y-6 lg:w-1/2 text-center lg:text-left">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold animate-slide-in-left">
                  Welcome to the Future of Fashion
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-200 animate-fade-in">
                  Discover, collect, and wear unique NFT fashion items in the metaverse and beyond.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-transform transform hover:scale-105 animate-pop-in">
                    Explore Marketplace
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 transition-transform transform hover:scale-105 animate-pop-in delay-200">
                    Create NFT
                  </Button>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2 flex items-center justify-center">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96">
                  <Image
                    alt="Digital Fashion NFT"
                    className="rounded-full animate-bounce-slow"
                    src="/nft-hero.png"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                  <div className="absolute top-0 left-0 w-full h-full border-4 border-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">Featured NFTs</h2>
            <div className="swiper-container">
              <div className="swiper-wrapper grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div key={item} className="swiper-slide">
                    <div className="relative group bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
                      <Image
                        alt={`Featured NFT ${item}`}
                        className="w-full h-48 sm:h-60 object-cover"
                        src={`/nft-${item}.png`}
                        width={400}
                        height={400}
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                        <h3 className="text-base sm:text-lg font-bold text-white">Digital Couture #{item}</h3>
                        <p className="text-sm text-gray-300">0.5 ETH</p>
                      </div>
                      <Button
                        size="sm"
                        className="absolute top-4 right-4 bg-purple-600 text-white hover:bg-purple-700 transition-opacity opacity-0 group-hover:opacity-100"
                      >
                        Buy Now
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-2">
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-blue-500 animate-bounce" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Create or Buy</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Design your own digital fashion or purchase from top creators.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-2">
                <Cube className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-purple-500 rotate-icon" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Wear in the Metaverse</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Show off your unique style across various virtual worlds.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:translate-y-2">
                <Coins className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-yellow-500 spin-icon" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Trade and Collect</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Build your digital wardrobe and trade with other fashion enthusiasts.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-r from-pink-500 to-red-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="lg:w-1/2 space-y-4 sm:space-y-6 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Why Choose FashionX?</h2>
                <p className="text-base sm:text-lg lg:text-xl">
                  Experience the benefits of decentralized fashion and own truly unique digital assets.
                </p>
                <ul className="space-y-2 sm:space-y-4">
                  <li className="flex items-center justify-center lg:justify-start">
                    <Shield className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-white" />
                    <span className="text-sm sm:text-base">Secure ownership with blockchain technology</span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <Zap className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-white" />
                    <span className="text-sm sm:text-base">Instant trades and transfers</span>
                  </li>
                  <li className="flex items-center justify-center lg:justify-start">
                    <Coins className="h-5 w-5 sm:h-6 sm:w-6 mr-3 text-white" />
                    <span className="text-sm sm:text-base">Earn royalties from your creations</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2 flex items-center justify-center">
                <Image
                  alt="Digital Fashion Showcase"
                  className="rounded-xl shadow-lg animate-fade-in"
                  src="/fashion-showcase.png"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">Join the Fashion Revolution</h2>
                <p className="max-w-2xl text-gray-500 text-sm sm:text-base lg:text-lg">
                  Be the first to know about new drops, exclusive offers, and the latest in digital fashion.
                </p>
              </div>
              <div className="w-full max-w-md">
                <form className="flex flex-col sm:flex-row items-center gap-4">
                  <Input className="flex-1" placeholder="Enter your email" type="email" required />
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-400 mt-2">
                  By subscribing, you agree to our{" "}
                  <Link href="#" className="underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="#" className="underline">
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-gray-200 py-8">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">© 2024 FashionX. All rights reserved.</p>
          <nav className="flex flex-wrap items-center justify-center gap-4 mt-4 md:mt-0">
            <Link className="hover:text-white transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              Privacy
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              <Discord className="h-5 w-5" />
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              <Instagram className="h-5 w-5" />
            </Link>
          </nav>
        </div>
      </footer>
      <style jsx>{`
        /* Animations */
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-slide-in-left {
          animation: slide-in-left 1s ease-out forwards;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1.5s ease-out forwards;
        }
        @keyframes pop-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-pop-in {
          animation: pop-in 0.5s ease-out forwards;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes spin-icon {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .rotate-icon {
          animation: spin-icon 4s linear infinite;
        }
        @keyframes pulse {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
      `}</style>
    </div>
  )
}

