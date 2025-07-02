import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Shield, Users, Wallet, Menu } from 'lucide-react'
import Link from "next/link"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-2 sm:px-4 lg:px-6 py-3 sm:py-4 bg-white shadow-md fixed w-full z-50"> {/* Update 1 */}
        <Link className="flex items-center justify-center" href="#">
          <Wallet className="h-6 w-6 text-primary" />
          <span className="sr-only">RideChain</span>
          <span className="ml-2 text-lg font-bold">RideChain</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#comparison">
            Comparison
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#join">
            Join
          </Link>
        </nav>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link className="text-lg font-medium" href="#features" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link className="text-lg font-medium" href="#comparison" onClick={() => setMobileMenuOpen(false)}>
                Comparison
              </Link>
              <Link className="text-lg font-medium" href="#join" onClick={() => setMobileMenuOpen(false)}>
                Join
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 sm:py-20 bg-gradient-to-r from-primary to-indigo-600"> {/* Update 2 */}
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tighter text-white animate-fade-in-up"> {/* Update 3 */}
                  Welcome to RideChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  The future of decentralized ride-sharing. Empowering drivers and riders with blockchain technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  className="w-full sm:w-auto inline-flex h-10 sm:h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                  href="#join"
                >
                  Get Started
                </Link>
                <Link
                  className="w-full sm:w-auto inline-flex h-10 sm:h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 text-primary"
                  href="#features"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 sm:py-16 bg-white"> {/* Update 4 */}
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Why Choose RideChain?</h2>
            <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Shield className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold text-center">Secure & Transparent</h3>
                <p className="text-gray-500 text-center">Blockchain-powered transactions ensure security and transparency.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Wallet className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold text-center">Lower Fees</h3>
                <p className="text-gray-500 text-center">Decentralized platform means lower fees for both drivers and riders.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-200 p-4 rounded-lg">
                <Users className="h-10 w-10 text-primary" />
                <h3 className="text-xl font-bold text-center">Community Driven</h3>
                <p className="text-gray-500 text-center">Governed by the community, for the community.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="comparison" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">RideChain vs. Uber</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="flex flex-col space-y-2 border-2 border-primary p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-primary">RideChain</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" /> Decentralized platform</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" /> Lower fees</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" /> Community governance</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-primary flex-shrink-0" /> Transparent pricing</li>
                </ul>
              </div>
              <div className="flex flex-col space-y-2 border-2 border-gray-200 p-4 rounded-lg">
                <h3 className="text-2xl font-bold text-gray-700">Uber</h3>
                <ul className="space-y-2">
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" /> Centralized control</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" /> Higher fees</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" /> Corporate decisions</li>
                  <li className="flex items-center"><ChevronRight className="h-4 w-4 mr-2 text-gray-400 flex-shrink-0" /> Surge pricing</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="join" className="w-full py-12 sm:py-16 bg-primary"> {/* Update 7 */}
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Join RideChain Today</h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed">
                  Whether you're a driver looking for better opportunities or a rider seeking fair prices, RideChain is here for you.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  className="w-full sm:w-auto inline-flex h-10 sm:h-9 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-primary shadow transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50"
                  href="#"
                >
                  Sign Up as Driver
                </Link>
                <Link
                  className="w-full sm:w-auto inline-flex h-10 sm:h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 text-primary"
                  href="#"
                >
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-300 py-6 sm:py-8"> {/* Update 8 */}
        <p className="text-xs text-gray-500 mb-4 sm:mb-0">© 2024 RideChain. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
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

