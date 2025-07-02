import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Key, Wallet, Search, FileCheck, Users, ArrowRight, ChevronDown } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function LandingPage() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50 transition-colors duration-300">
        <a className="flex items-center justify-center" href="#">
          <Building className="h-8 w-8 text-blue-500" />
          <span className="ml-2 text-2xl font-extrabold text-gray-800 dark:text-white">RentChain</span>
        </a>
        <nav className="hidden lg:flex gap-6">
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
            Features
          </a>
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
            How It Works
          </a>
          <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
            Testimonials
          </a>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            Connect Wallet <Wallet className="h-4 w-4" />
          </Button>
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setIsNavOpen(!isNavOpen)} className="text-gray-700 dark:text-gray-300 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isNavOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </header>
      {isNavOpen && (
        <nav className="lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-md py-4 flex flex-col items-center space-y-4 transition-all duration-300">
          <a className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
            Features
          </a>
          <a className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
            How It Works
          </a>
          <a className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
            Testimonials
          </a>
          <Button variant="ghost" size="sm" className="flex items-center gap-2">
            Connect Wallet <Wallet className="h-4 w-4" />
          </Button>
        </nav>
      )}
      <main className="flex-1 mt-16">
        <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900 py-20 md:py-24 lg:py-32 xl:py-40">
          <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white mb-4 animate-fadeInUp">
                Welcome to RentChain
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg md:text-xl mb-6 animate-fadeInUp delay-200">
                The future of real estate rentals. Secure, transparent, and efficient property management with blockchain technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fadeInUp delay-400">
                <Button className="px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2">
                  Get Started <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" className="px-6 py-3 flex items-center gap-2">
                  Learn More <ChevronDown className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <Image
                src="/hero-image.png"
                alt="RentChain"
                className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fadeIn">
              Features
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-shadow duration-300 animate-slideInLeft">
                <CardHeader className="flex flex-col items-center">
                  <Key className="h-10 w-10 text-blue-500 mb-4" />
                  <CardTitle className="text-xl">NFT-Based Properties</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300 text-center">
                  <p>Each property is represented as a unique NFT, ensuring authenticity and ownership.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 animate-slideInUp">
                <CardHeader className="flex flex-col items-center">
                  <Wallet className="h-10 w-10 text-blue-500 mb-4" />
                  <CardTitle className="text-xl">Smart Contracts</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300 text-center">
                  <p>Automated rental agreements and payments through blockchain smart contracts.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 animate-slideInRight">
                <CardHeader className="flex flex-col items-center">
                  <Search className="h-10 w-10 text-blue-500 mb-4" />
                  <CardTitle className="text-xl">Transparent Listings</CardTitle>
                </CardHeader>
                <CardContent className="text-gray-600 dark:text-gray-300 text-center">
                  <p>View property history, previous tenants, and rental terms with full transparency.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fadeIn">
              How It Works
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center animate-slideInLeft">
                <div className="mb-4 rounded-full bg-blue-500 p-4">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">1. List Your Property</h3>
                <p className="text-gray-600 dark:text-gray-300">Create an NFT for your property and list it on RentChain.</p>
              </div>
              <div className="flex flex-col items-center text-center animate-slideInUp">
                <div className="mb-4 rounded-full bg-blue-500 p-4">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">2. Find Tenants</h3>
                <p className="text-gray-600 dark:text-gray-300">Connect with potential tenants through our decentralized platform.</p>
              </div>
              <div className="flex flex-col items-center text-center animate-slideInRight">
                <div className="mb-4 rounded-full bg-blue-500 p-4">
                  <Key className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">3. Smart Contract Rental</h3>
                <p className="text-gray-600 dark:text-gray-300">Execute rental agreements and manage payments automatically.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fadeIn">
              Testimonials
            </h2>
            <div className="grid gap-8 lg:grid-cols-2">
              <Card className="flex flex-col items-start p-6 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 animate-slideInLeft">
                <CardHeader className="flex flex-col items-center w-full">
                  <Image
                    src="/john-doe.jpg"
                    alt="John Doe"
                    className="rounded-full w-16 h-16 mb-4"
                    width={64}
                    height={64}
                  />
                  <CardTitle className="text-xl text-gray-800 dark:text-white">John Doe</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">Property Owner</CardDescription>
                </CardHeader>
                <CardContent className="mt-4 text-gray-700 dark:text-gray-200">
                  <p>"RentChain has revolutionized how I manage my rental properties. The smart contracts make everything so much easier!"</p>
                </CardContent>
              </Card>
              <Card className="flex flex-col items-start p-6 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-300 animate-slideInRight">
                <CardHeader className="flex flex-col items-center w-full">
                  <Image
                    src="/jane-smith.jpg"
                    alt="Jane Smith"
                    className="rounded-full w-16 h-16 mb-4"
                    width={64}
                    height={64}
                  />
                  <CardTitle className="text-xl text-gray-800 dark:text-white">Jane Smith</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">Tenant</CardDescription>
                </CardHeader>
                <CardContent className="mt-4 text-gray-700 dark:text-gray-200">
                  <p>"As a tenant, I love the transparency RentChain provides. I can see the entire history of the property I'm renting."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fadeIn">Join RentChain Today</h2>
            <div className="flex justify-center">
              <Button className="px-8 py-4 text-lg bg-blue-500 hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2">
                Get Started <ArrowRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row justify-between items-center py-6 w-full bg-white dark:bg-gray-900 transition-colors duration-300">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 RentChain. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <a className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200" href="#">
            Terms of Service
          </a>
          <a className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200" href="#">
            Privacy
          </a>
          <a className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200" href="#">
            Contact
          </a>
        </nav>
      </footer>
    </div>
  )
}