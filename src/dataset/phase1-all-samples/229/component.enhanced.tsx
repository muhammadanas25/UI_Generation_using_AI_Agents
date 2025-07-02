import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Building2, Coins, Lock, TrendingUp, Users, Menu, X, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function PropTokenLanding() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Building2 className="h-6 w-6 mr-2 text-purple-600 animate-bounce" />
            <span className="font-bold text-xl text-purple-600">PropToken</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors" href="#">
              Contact
            </Link>
            <Button variant="ghost" className="text-purple-600 border-purple-600 hover:bg-purple-100">
              Sign In
            </Button>
          </nav>
          <button
            className="md:hidden text-gray-700 hover:text-purple-600 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 space-y-2">
              <Link className="block text-gray-700 hover:text-purple-600 transition-colors" href="#">
                Features
              </Link>
              <Link className="block text-gray-700 hover:text-purple-600 transition-colors" href="#">
                How It Works
              </Link>
              <Link className="block text-gray-700 hover:text-purple-600 transition-colors" href="#">
                About
              </Link>
              <Link className="block text-gray-700 hover:text-purple-600 transition-colors" href="#">
                Contact
              </Link>
              <Button variant="ghost" className="w-full text-purple-600 border-purple-600 hover:bg-purple-100">
                Sign In
              </Button>
            </div>
          </nav>
        )}
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/hero-bg.svg"
              alt="Hero Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white animate-fadeIn">
                Invest in Real Estate with NFTs
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl animate-fadeIn delay-200">
                PropToken revolutionizes property investment by tokenizing real estate assets. Invest in premium
                properties with ease and transparency.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6 animate-fadeIn delay-400">
                <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-colors">
                  Get Started
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10 transition-colors">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="mt-10 flex justify-center animate-pulse">
              <Image src="/hero-image.png" alt="Real Estate NFT" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2">
                <Coins className="h-10 w-10 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">Fractional Ownership</h3>
                <p className="text-gray-600">
                  Invest in high-value properties with minimal capital, diversifying your portfolio effortlessly.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2">
                <Lock className="h-10 w-10 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">Blockchain Security</h3>
                <p className="text-gray-600">
                  Transparent and secure transactions powered by blockchain technology ensure your investments are safe.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2">
                <TrendingUp className="h-10 w-10 mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">Liquidity</h3>
                <p className="text-gray-600">
                  Trade your property tokens easily on our marketplace, providing flexibility and quick access to your funds.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold mb-4 animate-bounce">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Browse Properties</h3>
                <p className="text-gray-600">
                  Explore our curated selection of premium real estate opportunities across various locations.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold mb-4 animate-bounce delay-200">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Purchase Tokens</h3>
                <p className="text-gray-600">
                  Buy NFT tokens representing your shares in chosen properties, securing your investment digitally.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center text-2xl font-bold mb-4 animate-bounce delay-400">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Earn Returns</h3>
                <p className="text-gray-600">
                  Receive rental income and benefit from property value appreciation, maximizing your investment returns.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-12">What Our Investors Say</h2>
            <div className="flex overflow-x-auto space-x-8">
              <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <Image src="/avatar1.jpg" alt="Sarah K." width={50} height={50} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">Sarah K.</p>
                    <p className="text-sm text-gray-500">Tech Entrepreneur</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "PropToken has made real estate investing accessible and exciting. I love being able to diversify my
                  portfolio with ease."
                </p>
              </div>
              <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <Image src="/avatar2.jpg" alt="Michael R." width={50} height={50} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">Michael R.</p>
                    <p className="text-sm text-gray-500">Financial Advisor</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "The transparency and liquidity offered by PropToken are game-changers in the real estate market."
                </p>
              </div>
              <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-2">
                <div className="flex items-center mb-4">
                  <Image src="/avatar3.jpg" alt="Emma L." width={50} height={50} className="rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">Emma L.</p>
                    <p className="text-sm text-gray-500">Retired Teacher</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  "I've seen consistent returns on my investments through PropToken. It's a innovative approach to property
                  investment."
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image
              src="/cta-bg.svg"
              alt="CTA Background"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </div>
          <div className="container relative z-10 px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-white animate-fadeIn">
                Ready to Start Investing?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl animate-fadeIn delay-200">
                Join PropToken today and revolutionize your real estate investment strategy.
              </p>
              <div className="w-full max-w-md space-y-4">
                <form className="flex flex-col sm:flex-row items-center sm:space-x-2 space-y-2 sm:space-y-0">
                  <Input
                    className="flex-1 bg-white text-gray-900 rounded-md shadow-sm"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-white text-purple-600 hover:bg-gray-100 transition-colors w-full sm:w-auto">
                    Sign Up
                  </Button>
                </form>
                <p className="text-xs text-gray-200">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
            <div className="mt-10 flex justify-center animate-pulse">
              <Image src="/cta-image.png" alt="Join Now" width={500} height={300} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-8 w-full shrink-0 items-center px-4 md:px-6 bg-gray-800">
        <p className="text-xs text-gray-400">© 2024 PropToken. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
            Privacy
          </Link>
          <Link className="text-xs text-gray-400 hover:text-white transition-colors" href="#">
            <Star className="inline-block h-4 w-4 mr-1" />
            Rate Us
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            <Image src="/icon-facebook.svg" alt="Facebook" width={20} height={20} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            <Image src="/icon-twitter.svg" alt="Twitter" width={20} height={20} />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-white transition-colors">
            <Image src="/icon-linkedin.svg" alt="LinkedIn" width={20} height={20} />
          </Link>
        </div>
      </footer>
    </div>
  )
}