import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, ShieldCheck, TrendingUp, Lock } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl sm:text-2xl font-bold text-primary">LoanBase</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Docs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 px-4 sm:px-6">
              <div className="animate-fade-in-up max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
                  Decentralized Lending Made Simple
                </h1>
                <p className="mt-4 text-base sm:text-lg text-zinc-200">
                  LoanBase provides secure, efficient, and flexible lending solutions with innovative flash loan capabilities.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Button className="w-full sm:w-auto bg-white text-primary shadow-lg hover:bg-gray-100 transition">
                  Launch App
                </Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary transition">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-0">
              <div className="flex flex-col items-center text-center">
                <ShieldCheck className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Secure Lending</h3>
                <p className="text-sm sm:text-base text-zinc-600">Your assets are protected by industry-leading security measures.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Competitive Rates</h3>
                <p className="text-sm sm:text-base text-zinc-600">Enjoy some of the best lending and borrowing rates in DeFi.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-10 w-10 sm:h-12 sm:w-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Flash Loans</h3>
                <p className="text-sm sm:text-base text-zinc-600">Execute complex DeFi strategies with our flash loan feature.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12 px-4 sm:px-6">
              <div className="lg:w-1/2 space-y-6 animate-fade-in-left mb-8 lg:mb-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Flash Loans</h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Unlock the power of flash loans with LoanBase. Execute complex arbitrage, collateral swaps, and self-liquidations in a single transaction.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 transition">Try Flash Loans</Button>
                  <Button variant="outline" className="w-full sm:w-auto text-primary border-primary hover:bg-primary hover:text-white transition">
                    Read Documentation
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 animate-fade-in-right">
                <img src="/images/flash-loans.png" alt="Flash Loans" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12 px-4 sm:px-6">
              <div className="lg:w-1/2 space-y-6 animate-fade-in-left mb-8 lg:mb-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Security First</h2>
                <p className="text-gray-600 text-base sm:text-lg">
                  Your security is our top priority. LoanBase smart contracts are audited by leading blockchain security firms and our code is open source.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90 transition">View Audits</Button>
                  <Button variant="outline" className="w-full sm:w-auto text-primary border-primary hover:bg-primary hover:text-white transition">
                    Explore Code
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 animate-fade-in-right">
                <img src="/images/security.png" alt="Security" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center lg:space-x-12 px-4 sm:px-6">
              <div className="lg:w-1/2 space-y-6 mb-8 lg:mb-0">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center lg:text-left">Ready to dive into DeFi?</h2>
                <p className="text-gray-600 text-base sm:text-lg text-center lg:text-left">
                  Join thousands of users already benefiting from LoanBase's secure and efficient lending protocol.
                </p>
              </div>
              <div className="lg:w-1/2 w-full">
                <form className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full">
                  <Input className="w-full sm:flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                </form>
                <p className="mt-2 text-sm text-gray-500 text-center sm:text-left">
                  By subscribing, you agree to our <Link href="#" className="text-primary hover:underline">Terms of Service</Link> and <Link href="#" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <p className="text-xs text-center md:text-left">&copy; 2024 LoanBase. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link className="text-xs hover:underline" href="#">Terms of Service</Link>
            <Link className="text-xs hover:underline" href="#">Privacy</Link>
            <Link className="text-xs hover:underline" href="#">Contact</Link>
            <Link className="text-xs hover:underline" href="#">Careers</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

