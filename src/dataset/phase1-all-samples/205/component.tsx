import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeftRight, Zap, Lock, Coins, ChevronRight, Menu, X } from 'lucide-react'
import Link from "next/link"

export default function ChainFlowLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <ArrowLeftRight className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl sm:text-2xl font-bold text-primary">ChainFlow</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>
      {mobileMenuOpen && (
        <nav className="md:hidden px-4 py-2 bg-background border-b">
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#features" onClick={() => setMobileMenuOpen(false)}>
            Features
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
            How It Works
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#contact" onClick={() => setMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Seamless Cross-Chain Transactions
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Bridge assets between Ethereum and Binance Smart Chain with ease. Fast, secure, and cost-effective.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-center mb-8 sm:mb-12">Why Choose ChainFlow?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Complete cross-chain transactions in minutes, not hours.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Secure & Trustless</h3>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Built on advanced cryptography for maximum security.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Coins className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Low Fees</h3>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Enjoy competitive rates for all your cross-chain transfers.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter text-center mb-8 sm:mb-12">How ChainFlow Works</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">1</div>
                  <p className="text-sm sm:text-base">Connect your wallet (MetaMask or Binance Chain Wallet)</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">2</div>
                  <p className="text-sm sm:text-base">Select the source chain and destination chain</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">3</div>
                  <p className="text-sm sm:text-base">Enter the amount and asset you want to transfer</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">4</div>
                  <p className="text-sm sm:text-base">Confirm the transaction and wait for completion</p>
                </div>
              </div>
              <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-lg sm:text-xl font-bold mb-4">Supported Chains & Assets</h3>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>Ethereum (ETH, ERC-20 tokens)</li>
                  <li>Binance Smart Chain (BNB, BEP-20 tokens)</li>
                  <li>Popular tokens: USDT, USDC, DAI, BUSD, and more</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                  Ready to Bridge the Gap?
                </h2>
                <p className="mx-auto max-w-[600px] text-primary-foreground/80 text-sm sm:text-base md:text-lg">
                  Join thousands of users already enjoying seamless cross-chain transactions with ChainFlow.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-primary-foreground text-primary"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-background text-primary hover:bg-background/90 w-full sm:w-auto" type="submit">
                    Get Early Access
                  </Button>
                </form>
                <p className="text-xs text-primary-foreground/60">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 ChainFlow. All rights reserved.
        </p>
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

