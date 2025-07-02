import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Key, Wallet, Search, FileCheck, Users, Menu, X } from 'lucide-react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <a className="flex items-center justify-center" href="#">
          <Building className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">RentChain</span>
        </a>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Testimonials
          </a>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </header>
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-100 dark:bg-gray-800">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Testimonials
          </a>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to RentChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The future of real estate rentals. Secure, transparent, and efficient property management with blockchain technology.
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Key className="h-10 w-10 mb-2" />
                  <CardTitle>NFT-Based Properties</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Each property is represented as a unique NFT, ensuring authenticity and ownership.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Wallet className="h-10 w-10 mb-2" />
                  <CardTitle>Smart Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Automated rental agreements and payments through blockchain smart contracts.</p>
                </CardContent>
              </Card>
              <Card className="sm:col-span-2 lg:col-span-1">
                <CardHeader>
                  <Search className="h-10 w-10 mb-2" />
                  <CardTitle>Transparent Listings</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>View property history, previous tenants, and rental terms with full transparency.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-3">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. List Your Property</h3>
                <p>Create an NFT for your property and list it on RentChain.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-primary p-3">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Find Tenants</h3>
                <p>Connect with potential tenants through our decentralized platform.</p>
              </div>
              <div className="flex flex-col items-center text-center sm:col-span-2 lg:col-span-1">
                <div className="mb-4 rounded-full bg-primary p-3">
                  <Key className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Smart Contract Rental</h3>
                <p>Execute rental agreements and manage payments automatically.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Testimonials</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>John Doe</CardTitle>
                  <CardDescription>Property Owner</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>"RentChain has revolutionized how I manage my rental properties. The smart contracts make everything so much easier!"</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Jane Smith</CardTitle>
                  <CardDescription>Tenant</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>"As a tenant, I love the transparency RentChain provides. I can see the entire history of the property I'm renting."</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 RentChain. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

