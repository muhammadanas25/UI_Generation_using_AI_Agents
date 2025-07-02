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
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl/none text-white">
                  Decentralized Lending Made Simple
                </h1>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base text-zinc-200 md:text-xl">
                  LoanBase provides secure, efficient, and flexible lending solutions with flash loan capabilities.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto bg-white text-primary hover:bg-zinc-200">Launch App</Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Flash Loans</h2>
                <p className="text-sm sm:text-base text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Unlock the power of flash loans with LoanBase. Execute complex arbitrage, collateral swaps, and self-liquidations in a single transaction.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 lg:justify-end">
                <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90">Try Flash Loans</Button>
                <Button variant="outline" className="w-full sm:w-auto">Read Documentation</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Security First</h2>
                <p className="max-w-[900px] text-sm sm:text-base text-zinc-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Your security is our top priority. LoanBase smart contracts are audited by leading blockchain security firms and our code is open source.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button className="w-full sm:w-auto bg-primary text-white hover:bg-primary/90">View Audits</Button>
                <Button variant="outline" className="w-full sm:w-auto">Explore Code</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-4 sm:px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to dive into DeFi?
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 md:text-xl">
                  Join thousands of users already benefiting from LoanBase's secure and efficient lending protocol.
                </p>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full">
                  <Input className="w-full sm:max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                </form>
                <p className="text-xs text-zinc-600">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row gap-2 py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-600">© 2024 LoanBase. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 sm:ml-auto">
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

