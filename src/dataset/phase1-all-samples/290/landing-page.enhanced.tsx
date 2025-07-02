import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Coins, FileText, Shield, Star, Users, Menu, X } from "lucide-react"

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <Link href="#" className="flex items-center">
          <Shield className="h-8 w-8 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">ReviewChain</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="#features" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300">
            How It Works
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300">
            About
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-300">
            Contact
          </Link>
          <Button variant="secondary" className="ml-4">
            Sign Up
          </Button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-700 hover:text-primary focus:outline-none transition-colors duration-300"
            aria-label="Open Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          {isMobileMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
              <div className="absolute top-0 right-0 w-3/4 max-w-sm bg-white h-full shadow-lg p-6 overflow-y-auto">
                <div className="flex justify-end">
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-gray-700 hover:text-primary focus:outline-none transition-colors duration-300"
                    aria-label="Close Menu"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                <nav className="flex flex-col mt-8 space-y-4">
                  <Link href="#features" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300">
                    Features
                  </Link>
                  <Link href="#how-it-works" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300">
                    How It Works
                  </Link>
                  <Link href="#" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300">
                    About
                  </Link>
                  <Link href="#" className="text-lg font-medium text-gray-700 hover:text-primary transition-colors duration-300">
                    Contact
                  </Link>
                  <Button variant="secondary" className="mt-4">
                    Sign Up
                  </Button>
                </nav>
              </div>
            </div>
          )}
        </div>
      </header>
      <main className="flex-1 mt-20">
        <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-r from-primary to-blue-500 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse lg:flex-row items-center">
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-fadeIn">
                Earn Tokens for Honest Reviews
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-lg animate-fadeIn delay-200">
                Join ReviewChain, the decentralized platform where your opinions are valued and rewarded.
              </p>
              <form className="mt-8 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn delay-400">
                <Input
                  className="w-full sm:w-auto flex-1 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary transition focus:outline-none"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button className="bg-white text-primary hover:bg-gray-200 transition-colors duration-300">
                  Join Waitlist
                </Button>
              </form>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img
                src="/images/hero-illustration.svg"
                alt="ReviewChain Illustration"
                className="w-full max-w-md animate-slideIn"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-20 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12 animate-fadeIn">
              Why Choose ReviewChain?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <Coins className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Earn Tokens</h3>
                <p className="text-gray-600">
                  Get rewarded with tokens for every quality review you submit.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Decentralized Trust</h3>
                <p className="text-gray-600">
                  Blockchain technology ensures the integrity of all reviews.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Community-Driven</h3>
                <p className="text-gray-600">
                  Join a network of honest reviewers and make informed decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-20 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12 animate-fadeIn">
              How It Works
            </h2>
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2">
                <img
                  src="/images/how-it-works.svg"
                  alt="How It Works"
                  className="w-full max-w-md mx-auto animate-slideIn"
                />
              </div>
              <div className="lg:w-1/2 mt-10 lg:mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mr-4 animate-bounce">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Sign Up</h3>
                      <p className="text-gray-600">Create your account on ReviewChain.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mr-4 animate-bounce">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Write Reviews</h3>
                      <p className="text-gray-600">Share your honest opinions about products and services.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mr-4 animate-bounce">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Earn Tokens</h3>
                      <p className="text-gray-600">Get rewarded with tokens for your contributions.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-lg font-bold mr-4 animate-bounce">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1">Redeem Rewards</h3>
                      <p className="text-gray-600">Use your tokens for discounts or cash them out.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-r from-blue-500 to-primary text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 animate-fadeIn">Ready to Start Earning?</h2>
            <p className="mx-auto max-w-2xl text-lg md:text-xl mb-8 animate-fadeIn delay-200">
              Join ReviewChain today and become part of the future of decentralized reviews.
            </p>
            <Button className="bg-white text-primary hover:bg-gray-200 transition-colors duration-300 px-6 py-3 text-lg rounded-full shadow-lg transform hover:scale-105">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">© 2024 ReviewChain. All rights reserved.</p>
          <nav className="flex items-center mt-4 md:mt-0 space-x-4">
            <Link href="#" className="text-sm hover:text-primary transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors duration-300">
              Privacy
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.86 8.13 6.8 9.47v-6.6h-2.05v-2.87h2.05V9.69c0-2 1.19-3.11 3.05-3.11.88 0 1.81.16 1.81.16v2h-1.04c-1.03 0-1.35.64-1.35 1.3v1.56h2.3l-.37 2.87h-1.93v6.6c3.94-1.34 6.8-5.07 6.8-9.47 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M21 6.5a8.38 8.38 0 0 1-2.36.64 4.18 4.18 0 0 0 1.82-2.3 8.34 8.34 0 0 1-2.65 1.02 4.17 4.17 0 0 0-7.1 3.8A11.8 11.8 0 0 1 3 4.5a4.17 4.17 0 0 0 1.29 5.57 4.15 4.15 0 0 1-1.89-.52v.05a4.17 4.17 0 0 0 3.35 4.08 4.2 4.2 0 0 1-1.88.07 4.18 4.18 0 0 0 3.9 2.9A8.37 8.37 0 0 1 2 18.58a11.8 11.8 0 0 0 6.29 1.84c7.55 0 11.67-6.26 11.67-11.67 0-.18-.01-.35-.02-.53A8.36 8.36 0 0 0 21 6.5z" />
              </svg>
            </Link>
            <Link href="#" className="text-sm hover:text-primary transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.4 2.86 8.13 6.8 9.47v-6.6h-2.05v-2.87h2.05V9.69c0-2 1.19-3.11 3.05-3.11.88 0 1.81.16 1.81.16v2h-1.04c-1.03 0-1.35.64-1.35 1.3v1.56h2.3l-.37 2.87h-1.93v6.6c3.94-1.34 6.8-5.07 6.8-9.47 0-5.5-4.46-9.96-9.96-9.96z" />
              </svg>
            </Link>
          </nav>
        </div>
      </footer>
      <style jsx>{`
        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 1s forwards;
        }

        .animate-fadeIn.delay-200 {
          animation-delay: 0.2s;
        }

        .animate-fadeIn.delay-400 {
          animation-delay: 0.4s;
        }

        .animate-slideIn {
          transform: translateX(-50px);
          opacity: 0;
          animation: slideIn 1s forwards;
        }

        .animate-bounce {
          animation: bounce 2s infinite;
        }

        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </div>
  )
}