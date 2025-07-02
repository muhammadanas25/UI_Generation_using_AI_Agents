import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, ChevronRight, Coins, Globe, Lock, Users, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function FundChainLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Coins className="h-6 w-6 text-blue-500" />
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
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </header>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center py-4 bg-gray-800">
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            Token
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            Community
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Decentralized Fundraising for the Future
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 text-sm sm:text-base md:text-xl">
                  FundChain revolutionizes crowdfunding with blockchain technology. Launch your ICO or IDO with ease and
                  security.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-blue-500 hover:bg-blue-600 w-full sm:w-auto">
                  Launch Your Project <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">Explore Projects</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12">
              Why Choose FundChain?
            </h2>
            <div className="grid gap-8 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3">
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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Ready to Launch Your Project?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 text-sm sm:text-base md:text-xl">
                  Join the future of decentralized fundraising. Start your journey with FundChain today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-gray-900"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-gray-900 text-white hover:bg-gray-800 w-full sm:w-auto" type="submit">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-200">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400 mb-4 sm:mb-0">© 2024 FundChain. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

