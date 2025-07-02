import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Coins, Lock, Users, Menu, Sun, Moon } from 'lucide-react'
import { Switch } from "@/components/ui/switch"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-20 flex items-center justify-between shadow-md dark:shadow-gray-800 bg-white dark:bg-gray-900 transition-colors duration-500">
        <Link className="flex items-center justify-center space-x-2" href="#">
          <Building2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400 animate-pulse" />
          <span className="text-xl font-bold text-gray-800 dark:text-white">HomeChain</span>
        </Link>
        <div className="flex items-center space-x-4">
          <Switch
            checked={darkMode}
            onCheckedChange={() => setDarkMode(!darkMode)}
            className="mr-2"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Moon className="h-4 w-4 text-gray-200" /> : <Sun className="h-4 w-4 text-yellow-500" />}
          </Switch>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-600 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <nav className={`${isMenuOpen ? 'flex' : 'hidden'
            } lg:flex flex-col lg:flex-row absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 lg:relative lg:top-0 shadow-md lg:shadow-none p-4 lg:p-0 z-50`}>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition py-2 lg:py-0 lg:mr-4" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition py-2 lg:py-0 lg:mr-4" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition py-2 lg:py-0 lg:mr-4" href="#">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition py-2 lg:py-0" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl animate-fadeIn">
                Welcome to HomeChain
              </h1>
              <p className="mx-auto max-w-[700px] text-base sm:text-lg md:text-xl text-gray-200">
                Revolutionizing real estate investment through blockchain technology. Invest in properties with ease,
                transparency, and security.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-indigo-100 transition transform hover:scale-105">
                  Get Started
                </Button>
                <Button variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-indigo-600 transition transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
              Key Features
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader>
                  <Coins className="h-6 w-6 mb-2" />
                  <CardTitle>Fractional Ownership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Invest in high-value properties with as little as $50.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-6 w-6 mb-2" />
                  <CardTitle>Blockchain Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Immutable records and smart contracts ensure transparency and security.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-6 w-6 mb-2" />
                  <CardTitle>Global Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Invest in real estate worldwide, breaking geographical barriers.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Building2 className="h-6 w-6 mb-2" />
                  <CardTitle>Diverse Portfolio</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access a wide range of properties, from residential to commercial.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
              How It Works
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50">1</span>
                <h3 className="text-xl font-bold">Sign Up</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">Create your account and complete the KYC process.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50">2</span>
                <h3 className="text-xl font-bold">Browse Properties</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">Explore our curated list of tokenized properties.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50">3</span>
                <h3 className="text-xl font-bold">Invest</h3>
                <p className="text-center text-gray-500 dark:text-gray-400">Purchase tokens representing fractional ownership in properties.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
              Benefits
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>For Investors</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Low barrier to entry</li>
                    <li>Diversify your portfolio</li>
                    <li>Earn passive income through rent distributions</li>
                    <li>Potential for capital appreciation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>For Property Owners</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-4 space-y-2">
                    <li>Unlock liquidity from your real estate assets</li>
                    <li>Streamlined property management</li>
                    <li>Access to a global pool of investors</li>
                    <li>Simplified compliance and reporting</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center bg-indigo-600 dark:bg-indigo-700 p-6 sm:p-12 rounded-lg shadow-lg animate-pulse">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white md:text-4xl">Ready to Get Started?</h2>
              <p className="mx-auto max-w-xl text-base sm:text-lg text-gray-200">
                Join HomeChain today and start building your real estate portfolio with the power of blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-indigo-100 transition transform hover:scale-105">
                  Sign Up Now
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-indigo-600 transition transform hover:scale-105">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 px-4 md:px-6 bg-gray-200 dark:bg-gray-800 transition-colors duration-500">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 HomeChain. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center sm:justify-end space-x-4">
              <Link className="text-sm text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                Terms of Service
              </Link>
              <Link className="text-sm text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                Privacy
              </Link>
              <Link className="text-sm text-gray-600 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

