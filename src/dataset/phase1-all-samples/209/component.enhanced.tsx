import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Coins, Share2, Users, Zap, ChevronDown, Search, Bell, Moon, Sun } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function LandingPage() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between shadow-md bg-white dark:bg-gray-900 fixed w-full z-50">
          <Link className="flex items-center justify-center" href="#">
            <Coins className="h-8 w-8 text-primary animate-bounce" />
            <span className="ml-2 text-2xl font-extrabold text-primary">SocialVerse</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-primary transition-colors duration-300" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors duration-300" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors duration-300" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors duration-300" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300"
            >
              {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-800" />}
            </button>
            <Button variant="ghost" className="hidden md:inline-flex">
              Sign In
            </Button>
            <Button className="hidden md:inline-flex">Get Started</Button>
            <button className="md:hidden p-2 rounded-md text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300">
              <ChevronDown className="h-6 w-6" />
            </button>
          </div>
        </header>
        <main className="flex-1 pt-20">
          <section className="w-full bg-cover bg-center py-20 md:py-32 lg:py-40" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
            <div className="container px-4 md:px-6 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-fadeIn">
                Welcome to <span className="text-primary">SocialVerse</span>
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl animate-fadeIn delay-200">
                The next-generation Web3 social media platform with tokenized content and decentralized ownership.
              </p>
              <div className="mt-8 flex justify-center space-x-4 animate-fadeIn delay-400">
                <Button className="px-6 py-3 text-base">Get Started</Button>
                <Button variant="outline" className="px-6 py-3 text-base">
                  Learn More
                </Button>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">
                Why Choose SocialVerse?
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                  <Coins className="h-12 w-12 text-primary mb-4 animate-spin" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Tokenized Content</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Turn your posts into valuable NFTs and monetize your creativity.
                  </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                  <Share2 className="h-12 w-12 text-primary mb-4 animate-pulse" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Decentralized Sharing</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Share content across multiple blockchain networks seamlessly.
                  </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2">
                  <Users className="h-12 w-12 text-primary mb-4 animate-bounce" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Community Governance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                    Participate in platform decisions through our DAO structure.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800 dark:text-white">
                SocialVerse vs. Lens Protocol
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex flex-col p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-primary">SocialVerse</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-green-500 mr-2 animate-bounce" />
                      Multi-chain support
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-green-500 mr-2 animate-bounce" />
                      Advanced content monetization
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-green-500 mr-2 animate-bounce" />
                      Integrated DeFi features
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-green-500 mr-2 animate-bounce" />
                      AI-powered content curation
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col p-6 bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-700 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-2xl font-bold mb-4 text-primary">Lens Protocol</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-red-500 mr-2 animate-pulse" />
                      Polygon-based platform
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-red-500 mr-2 animate-pulse" />
                      Basic content ownership
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-red-500 mr-2 animate-pulse" />
                      Follow-based economy
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-5 w-5 text-red-500 mr-2 animate-pulse" />
                      Open-source infrastructure
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-800 dark:text-white animate-fadeIn">
                    Join the SocialVerse Revolution
                  </h2>
                  <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300 text-lg md:text-xl animate-fadeIn delay-200">
                    Be part of the next generation of social media. Sign up now for early access and exclusive rewards.
                  </p>
                </div>
                <div className="w-full max-w-md space-y-4">
                  <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeIn delay-400">
                    <Input className="flex-1" placeholder="Enter your email" type="email" />
                    <Button className="w-full sm:w-auto">Sign Up</Button>
                  </form>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    By signing up, you agree to our{" "}
                    <Link className="underline underline-offset-2 text-primary" href="#">
                      Terms & Conditions
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-white dark:bg-gray-900 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 SocialVerse. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs hover:text-primary transition-colors duration-300" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:text-primary transition-colors duration-300" href="#">
              Privacy
            </Link>
            <Link className="text-xs hover:text-primary transition-colors duration-300" href="#">
              Sitemap
            </Link>
            <Link className="text-xs hover:text-primary transition-colors duration-300" href="#">
              Support
            </Link>
          </nav>
        </footer>
        <div className="fixed bottom-4 right-4">
          <Button variant="secondary" className="flex items-center space-x-2">
            <Search className="h-4 w-4" />
            <span className="hidden sm:inline">Search</span>
          </Button>
        </div>
      </div>
    </div>
  )
}