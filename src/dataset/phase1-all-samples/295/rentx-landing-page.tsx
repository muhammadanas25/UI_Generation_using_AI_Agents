import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Key, Lock, Search, Shield, Wallet } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Building2 className="h-6 w-6 mr-2" />
          <span className="font-bold">RentX</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to RentX
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  The future of decentralized real estate rentals. Secure, transparent, and efficient with NFT-based
                  agreements.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="outline">Get Started</Button>
                <Button>Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Wallet className="w-8 h-8 mb-2" />
                  <CardTitle>NFT-Based Agreements</CardTitle>
                </CardHeader>
                <CardContent>
                  Rental agreements as unique NFTs, providing unparalleled security and transparency.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Search className="w-8 h-8 mb-2" />
                  <CardTitle>Decentralized Listings</CardTitle>
                </CardHeader>
                <CardContent>
                  Browse and list properties on a decentralized network, free from intermediaries.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="w-8 h-8 mb-2" />
                  <CardTitle>Smart Contract Security</CardTitle>
                </CardHeader>
                <CardContent>
                  Automated, secure transactions and agreements powered by blockchain technology.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
              <div className="space-y-4">
                <h3 className="text-xl font-bold">For Landlords:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Building2 className="w-5 h-5 mr-2" />
                    List your property on our decentralized platform
                  </li>
                  <li className="flex items-center">
                    <Key className="w-5 h-5 mr-2" />
                    Create unique NFT-based rental agreements
                  </li>
                  <li className="flex items-center">
                    <Wallet className="w-5 h-5 mr-2" />
                    Receive secure, automated payments
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold">For Tenants:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Search className="w-5 h-5 mr-2" />
                    Browse decentralized property listings
                  </li>
                  <li className="flex items-center">
                    <Lock className="w-5 h-5 mr-2" />
                    Sign secure, NFT-based rental agreements
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Enjoy transparent, trustless transactions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose RentX?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Benefits for Landlords</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Reduced intermediary fees</li>
                    <li>Automated, secure rent collection</li>
                    <li>Immutable record of rental history</li>
                    <li>Access to a global pool of verified tenants</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Benefits for Tenants</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Transparent rental terms and conditions</li>
                    <li>Reduced security deposit risks</li>
                    <li>Verifiable rental history for future applications</li>
                    <li>Access to a wider range of global properties</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to revolutionize your rental experience?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl">
                  Join RentX today and be part of the future of decentralized real estate rentals.
                </p>
              </div>
              <div className="space-x-4">
                <Button variant="outline">Sign Up Now</Button>
                <Button>Contact Sales</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 RentX. All rights reserved.</p>
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