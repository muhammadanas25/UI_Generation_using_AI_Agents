import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Coins, Lock, Users, Menu } from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Building2 className="h-6 w-6" />
          <span className="ml-2 text-lg font-bold">HomeChain</span>
        </Link>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'
          } lg:flex flex-col lg:flex-row absolute lg:relative top-14 lg:top-0 left-0 right-0 bg-white dark:bg-gray-800 lg:bg-transparent z-50 shadow-md lg:shadow-none p-4 lg:p-0 gap-4`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to HomeChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Revolutionizing real estate investment through blockchain technology. Invest in properties with ease,
                  transparency, and security.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Key Features</h2>
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
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">How It Works</h2>
            <div className="grid gap-6 lg:grid-cols-3">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Benefits</h2>
            <div className="grid gap-6 sm:grid-cols-2">
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join HomeChain today and start building your real estate portfolio with the power of blockchain technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="w-full sm:w-auto">Sign Up Now</Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 HomeChain. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
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

