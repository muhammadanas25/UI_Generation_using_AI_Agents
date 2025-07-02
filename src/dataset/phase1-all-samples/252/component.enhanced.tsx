import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Coins, Lock, Zap, Globe, ShieldCheck, Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between bg-transparent fixed w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <Coins className="h-6 w-6 mr-2 text-white animate-bounce" />
          <span className="font-bold text-white text-xl">BetChain</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#">
            FAQ
          </Link>
          <Button variant="ghost" className="ml-4 text-white border border-white hover:bg-white hover:text-black transition-colors duration-300">
            Connect Wallet
          </Button>
        </nav>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
            {mobileMenuOpen ? <X className="h-6 w-6 text-white" /> : <Menu className="h-6 w-6 text-white" />}
          </button>
        </div>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-900 bg-opacity-95 py-6 animate-slide-down">
          <nav className="flex flex-col items-center gap-4">
            <Link className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#">
              Features
            </Link>
            <Link className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#">
              How It Works
            </Link>
            <Link className="text-lg font-medium text-gray-300 hover:text-white transition-colors duration-300" href="#">
              FAQ
            </Link>
            <Button variant="ghost" className="mt-4 text-white border border-white hover:bg-white hover:text-black transition-colors duration-300">
              Connect Wallet
            </Button>
          </nav>
        </div>
      )}
      <main className="flex-1 mt-16">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-cover bg-center" style={{ backgroundImage: 'url("/hero-background.jpg")' }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg animate-fade-in">
                Welcome to <span className="text-indigo-400">BetChain</span>
              </h1>
              <p className="mx-auto max-w-2xl text-gray-200 text-lg md:text-xl drop-shadow-md animate-fade-in-delay">
                The future of decentralized sports betting powered by blockchain technology and Chainlink oracles.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-indigo-500 text-white hover:bg-indigo-600 transition-transform transform hover:scale-105 flex items-center">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white transition-transform transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-12 animate-slide-up">
              Why Choose BetChain?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Lock className="h-12 w-12 mb-4 text-indigo-400 animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-2">Decentralized & Secure</h3>
                <p className="text-gray-400">Built on blockchain technology for maximum security and transparency.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Zap className="h-12 w-12 mb-4 text-indigo-400 animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400">Instant bets and payouts with low transaction fees.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <Globe className="h-12 w-12 mb-4 text-indigo-400 animate-pulse" />
                <h3 className="text-xl font-semibold text-white mb-2">Global Access</h3>
                <p className="text-gray-400">Bet from anywhere in the world without restrictions.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white animate-slide-left">How It Works</h2>
                <p className="text-gray-200 text-lg md:text-xl">
                  BetChain leverages Chainlink oracles to provide accurate and tamper-proof sports data for all bets.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Reliable Data</h3>
                      <p className="text-gray-200">
                        Chainlink oracles fetch real-time sports data from multiple trusted sources.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Coins className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Smart Contracts</h3>
                      <p className="text-gray-200">
                        Bets are executed and settled automatically based on oracle-provided data.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Zap className="h-8 w-8 text-white" />
                    <div>
                      <h3 className="text-xl font-semibold text-white">Instant Transactions</h3>
                      <p className="text-gray-200">
                        Enjoy swift transactions with minimal fees, ensuring a seamless betting experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative animate-fade-in">
                <Image
                  src="/how-it-works.png"
                  alt="How It Works"
                  width={500}
                  height={500}
                  className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 animate-slide-up">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <p className="text-gray-600 mb-4">"BetChain has revolutionized my betting experience with its transparency and speed."</p>
                <div className="flex items-center">
                  <Image src="/user1.jpg" alt="User 1" width={40} height={40} className="rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">John Doe</h4>
                    <p className="text-sm text-gray-500">Professional Bettor</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <p className="text-gray-600 mb-4">"The integration with Chainlink oracles ensures that every bet is fair and accurate."</p>
                <div className="flex items-center">
                  <Image src="/user2.jpg" alt="User 2" width={40} height={40} className="rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Jane Smith</h4>
                    <p className="text-sm text-gray-500">Crypto Enthusiast</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <p className="text-gray-600 mb-4">"With BetChain, I can bet on my favorite sports anytime, anywhere."</p>
                <div className="flex items-center">
                  <Image src="/user3.jpg" alt="User 3" width={40} height={40} className="rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Alex Johnson</h4>
                    <p className="text-sm text-gray-500">Sports Fan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter animate-slide-up">
                Ready to revolutionize your sports betting?
              </h2>
              <p className="mx-auto max-w-2xl text-gray-400 text-lg md:text-xl">
                Join BetChain today and experience the future of decentralized sports betting.
              </p>
              <Button className="bg-indigo-500 text-white hover:bg-indigo-600 transition-transform transform hover:scale-105 flex items-center">
                Sign Up Now
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-gray-900">
        <p className="text-xs text-gray-400">© 2024 BetChain. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-400 hover:text-white transition-colors duration-300" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-400 hover:text-white transition-colors duration-300" href="#">
            Privacy
          </Link>
          <Link className="text-xs text-gray-400 hover:text-white transition-colors duration-300" href="#">
            Contact
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link href="#">
            <Image src="/twitter.svg" alt="Twitter" width={20} height={20} className="hover:opacity-70 transition-opacity duration-300" />
          </Link>
          <Link href="#">
            <Image src="/facebook.svg" alt="Facebook" width={20} height={20} className="hover:opacity-70 transition-opacity duration-300" />
          </Link>
          <Link href="#">
            <Image src="/linkedin.svg" alt="LinkedIn" width={20} height={20} className="hover:opacity-70 transition-opacity duration-300" />
          </Link>
        </div>
      </footer>
    </div>
  )
}