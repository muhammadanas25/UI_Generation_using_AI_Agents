import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ChevronRight, Coins, Globe, Lock, Users, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { motion } from 'framer-motion'

export default function FundChainLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-gray-800 shadow-md fixed top-0 left-0 w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <Coins className="h-6 w-6 text-blue-500 animate-pulse" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">FundChain</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Token
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </header>
      {isMobileMenuOpen && (
        <nav className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center space-y-4 py-4 md:hidden animate-fadeIn">
          <Link className="text-base sm:text-lg font-medium hover:underline underline-offset-4 transition" href="#">
            Features
          </Link>
          <Link className="text-base sm:text-lg font-medium hover:underline underline-offset-4 transition" href="#">
            How It Works
          </Link>
          <Link className="text-base sm:text-lg font-medium hover:underline underline-offset-4 transition" href="#">
            Token
          </Link>
          <Link className="text-base sm:text-lg font-medium hover:underline underline-offset-4 transition" href="#">
            Community
          </Link>
          <Button variant="ghost" className="mt-2">Login</Button>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-16 sm:py-20 bg-gradient-to-r from-blue-800 to-purple-700">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="space-y-3"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  Decentralized Fundraising for the Future
                </h1>
                <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-200">
                  FundChain revolutionizes crowdfunding with blockchain technology. Launch your ICO or IDO with ease and security.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <Button className="bg-blue-500 hover:bg-blue-600 transition flex items-center justify-center w-full sm:w-auto">
                  Launch Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="transition flex items-center justify-center w-full sm:w-auto">
                  Explore Projects <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 sm:py-20 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Why Choose FundChain?
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Lock className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Secure & Transparent</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Built on blockchain technology, ensuring full transparency and security for all transactions.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Global Access</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Connect with investors and projects from around the world, breaking down geographical barriers.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Community-Driven</h3>
                <p className="text-gray-400 text-sm sm:text-base">
                  Empower the community to participate in project vetting and decision-making processes.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 sm:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              How It Works
            </motion.h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Submit Your Project</h3>
                <p className="text-gray-400 text-sm sm:text-base">Create your project profile and set your fundraising goals.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Get Approved</h3>
                <p className="text-gray-400 text-sm sm:text-base">Our community reviews and approves quality projects.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Launch & Fundraise</h3>
                <p className="text-gray-400 text-sm sm:text-base">Start your ICO or IDO and connect with global investors.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 sm:py-20 bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Testimonials
            </motion.h2>
            <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
              {/* ... testimonial items ... */}
            </div>
          </div>
        </section>
        <section className="w-full py-16 sm:py-20 bg-blue-600">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to Launch Your Project?
                </h2>
                <p className="mx-auto max-w-xl text-base sm:text-lg text-gray-200">
                  Join the future of decentralized fundraising. Start your journey with FundChain today.
                </p>
              </motion.div>
              <motion.div
                className="w-full max-w-md space-y-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <form className="flex flex-col sm:flex-row gap-4">
                  <Input
                    className="flex-1 bg-white text-gray-900"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <Button className="bg-gray-900 text-white hover:bg-gray-800 transition w-full sm:w-auto" type="submit">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-200">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full bg-gray-800 text-gray-400 px-4 md:px-6">
        <p className="text-xs text-center sm:text-left">© 2024 FundChain. All rights reserved.</p>
        <nav className="flex flex-wrap justify-center gap-4 sm:ml-auto">
          <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
            Privacy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
            Contact
          </Link>
        </nav>
        <div className="flex justify-center space-x-4 sm:justify-start">
          {/* ... social media icons ... */}
        </div>
      </footer>
    </div>
  )
}

