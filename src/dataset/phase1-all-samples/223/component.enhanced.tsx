import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Disc3, Music2, Users, Wallet, Zap, Menu, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import Link from "next/link"
import { motion } from "framer-motion"

export default function TuneChainLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-lg transition-all duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center text-white hover:text-gray-300 transition-colors duration-200" href="#">
            <Disc3 className="h-6 w-6 mr-2 animate-spin-slow" />
            <span className="font-bold text-xl">TuneChain</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200" href="#">
              Artists
            </Link>
            <Link className="text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200" href="#">
              Listeners
            </Link>
            <Link className="text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200" href="#">
              About
            </Link>
          </nav>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gray-800">
              <nav className="flex flex-col gap-4">
                <Link className="text-lg font-medium text-white hover:text-gray-300 transition-colors duration-200" href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  Features
                </Link>
                <Link className="text-lg font-medium text-white hover:text-gray-300 transition-colors duration-200" href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  Artists
                </Link>
                <Link className="text-lg font-medium text-white hover:text-gray-300 transition-colors duration-200" href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  Listeners
                </Link>
                <Link className="text-lg font-medium text-white hover:text-gray-300 transition-colors duration-200" href="#" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-24 md:py-32 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="container px-4 md:px-6 flex flex-col items-center text-center">
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4"
            >
              Welcome to TuneChain
            </motion.h1>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-2xl text-gray-300 text-base sm:text-lg md:text-xl mb-8"
            >
              The future of decentralized music streaming. Empower artists, reward listeners, and revolutionize the industry.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-colors duration-300">
                Get Started
              </Button>
              <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-black transition-colors duration-300">
                Learn More
              </Button>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
              Why Choose TuneChain?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Wallet className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Fair Compensation</h3>
                <p className="text-gray-600 text-sm sm:text-base">Artists earn more with our blockchain-based royalty system.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Community Governance</h3>
                <p className="text-gray-600 text-sm sm:text-base">Users have a say in platform decisions through token voting.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Lightning-Fast Streaming</h3>
                <p className="text-gray-600 text-sm sm:text-base">Enjoy high-quality, buffer-free music powered by decentralized networks.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
              How TuneChain Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Upload Your Music</h3>
                <p className="text-gray-600 text-sm sm:text-base">Artists can easily upload and tokenize their tracks on the blockchain.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Stream and Earn</h3>
                <p className="text-gray-600 text-sm sm:text-base">Listeners enjoy music while earning tokens for their engagement.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Participate in Governance</h3>
                <p className="text-gray-600 text-sm sm:text-base">Use your tokens to vote on platform upgrades and feature proposals.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Music2 className="h-12 w-12 mb-4" />
              <blockquote className="text-xl sm:text-2xl font-semibold italic">
                "TuneChain has revolutionized how I connect with my fans and earn from my music. It's the future of the
                industry!"
              </blockquote>
              <p className="text-base sm:text-lg">- Alex Harmony, Indie Artist</p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                  Join the Music Revolution
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 text-sm sm:text-base md:text-lg">
                  Be part of the decentralized future of music. Sign up now to start streaming, earning, and empowering
                  artists.
                </p>
              </div>
              <form className="w-full max-w-md flex flex-col sm:flex-row items-center gap-4">
                <Input
                  className="w-full sm:flex-1"
                  placeholder="Enter your email"
                  type="email"
                  required
                  aria-label="Email Address"
                />
                <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-colors duration-300">
                  Sign Up
                </Button>
              </form>
              <p className="text-xs text-gray-500">
                By signing up, you agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-400 py-6">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs mb-4 md:mb-0">© 2024 TuneChain. All rights reserved.</p>
          <nav className="flex flex-col md:flex-row items-center gap-4">
            <Link className="text-xs hover:text-white transition-colors duration-200" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:text-white transition-colors duration-200" href="#">
              Privacy
            </Link>
            <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-4">
              <Link href="#" className="hover:text-white transition-colors duration-200">
                <Facebook className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                <Instagram className="h-4 w-4" />
              </Link>
              <Link href="#" className="hover:text-white transition-colors duration-200">
                <Linkedin className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

