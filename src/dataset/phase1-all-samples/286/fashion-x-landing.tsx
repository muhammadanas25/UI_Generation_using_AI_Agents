import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CuboidIcon as Cube, Zap, Shield, Coins, Menu } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState } from 'react'

export default function FashionXLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Cube className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">FashionX</span>
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden">
          <Menu className="h-6 w-6" />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-14 lg:top-0 left-0 right-0 bg-white lg:bg-transparent z-50 p-4 lg:p-0 gap-4 lg:ml-auto`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Marketplace
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Create
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            FAQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">
                    Welcome to the Future of Fashion
                  </h1>
                  <p className="max-w-[600px] text-sm sm:text-base md:text-lg text-gray-300">
                    Discover, collect, and wear unique NFT fashion items in the metaverse and beyond.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="bg-white text-black hover:bg-gray-200">Explore Marketplace</Button>
                  <Button variant="outline">Create NFT</Button>
                </div>
              </div>
              <div className="flex items-center justify-center mt-6 lg:mt-0">
                <Image
                  alt="Digital Fashion NFT"
                  className="aspect-[1/1] overflow-hidden rounded-xl object-cover w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px]"
                  height="600"
                  src="/placeholder.svg?height=600&width=600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12">Featured NFTs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="relative group">
                  <Image
                    alt={`Featured NFT ${item}`}
                    className="aspect-[1/1] overflow-hidden rounded-xl object-cover transition-all duration-300 group-hover:scale-105 w-full"
                    height="400"
                    src={`/placeholder.svg?height=400&width=400&text=NFT ${item}`}
                    width="400"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <h3 className="font-bold text-sm sm:text-base">Digital Couture #{item}</h3>
                    <p className="text-xs sm:text-sm">0.5 ETH</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: Zap, title: "Create or Buy", description: "Design your own digital fashion or purchase from top creators." },
                { icon: Cube, title: "Wear in the Metaverse", description: "Show off your unique style across various virtual worlds." },
                { icon: Coins, title: "Trade and Collect", description: "Build your digital wardrobe and trade with other fashion enthusiasts." }
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <item.icon className="h-12 w-12 mb-4 text-blue-500" />
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Why Choose FashionX?</h2>
                  <p className="max-w-[600px] text-sm sm:text-base md:text-lg">
                    Experience the benefits of decentralized fashion and own truly unique digital assets.
                  </p>
                </div>
                <ul className="grid gap-4 mt-6 sm:mt-8">
                  {[
                    { icon: Shield, text: "Secure ownership with blockchain technology" },
                    { icon: Zap, text: "Instant trades and transfers" },
                    { icon: Coins, text: "Earn royalties from your creations" }
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 mr-3 sm:mr-4" />
                      <span className="text-sm sm:text-base">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center mt-6 lg:mt-0">
                <Image
                  alt="Digital Fashion Showcase"
                  className="aspect-[4/3] overflow-hidden rounded-xl object-cover w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px]"
                  height="400"
                  src="/placeholder.svg?height=400&width=600"
                  width="600"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">Join the Fashion Revolution</h2>
                <p className="max-w-[900px] text-sm sm:text-base text-gray-500 md:text-lg">
                  Be the first to know about new drops, exclusive offers, and the latest in digital fashion.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 mb-4 sm:mb-0">© 2024 FashionX. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 sm:ml-auto">
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

