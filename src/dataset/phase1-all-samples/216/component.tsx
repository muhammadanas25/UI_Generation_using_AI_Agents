import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CheckCircle, ArrowRight, LockIcon, BarChart3Icon, ZapIcon, Menu } from 'lucide-react'

export default function VoteChainLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <LockIcon className="h-6 w-6" />
          <span>VoteChain</span>
        </div>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
        </nav>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <a className="text-lg font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </a>
              <a className="text-lg font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsMobileMenuOpen(false)}>
                How It Works
              </a>
              <a className="text-lg font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsMobileMenuOpen(false)}>
                Pricing
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Secure Web3 Voting for the Digital Age
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  VoteChain revolutionizes decision-making with blockchain technology. Transparent, secure, and
                  decentralized voting for organizations of all sizes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <LockIcon className="w-8 h-8 mb-2" />
                  <CardTitle>Blockchain Security</CardTitle>
                </CardHeader>
                <CardContent>
                  Immutable and transparent voting records secured by blockchain technology.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <ZapIcon className="w-8 h-8 mb-2" />
                  <CardTitle>Instant Results</CardTitle>
                </CardHeader>
                <CardContent>
                  Real-time vote counting and result verification for immediate insights.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3Icon className="w-8 h-8 mb-2" />
                  <CardTitle>Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  Comprehensive voting data analysis and visualization tools.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">VoteChain vs Competitors</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>VoteChain</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 flex-shrink-0" /> <span>Blockchain-based security</span></li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 flex-shrink-0" /> <span>Instant result verification</span></li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 flex-shrink-0" /> <span>Advanced analytics dashboard</span></li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 flex-shrink-0" /> <span>Multi-chain support</span></li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 flex-shrink-0" /> <span>Customizable voting mechanisms</span></li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Snapshot</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 flex-shrink-0" /> <span>Off-chain voting</span></li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 flex-shrink-0" /> <span>Basic result display</span></li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 flex-shrink-0" /> <span>Limited analytics</span></li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 flex-shrink-0" /> <span>Single-chain focus</span></li>
                    <li className="flex items-center"><CheckCircle className="text-green-500 mr-2 flex-shrink-0" /> <span>Fixed voting mechanisms</span></li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">1</div>
                <h3 className="text-xl font-bold mb-2">Create a Proposal</h3>
                <p className="text-gray-500">Set up your voting proposal with custom parameters and options.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">2</div>
                <h3 className="text-xl font-bold mb-2">Voters Participate</h3>
                <p className="text-gray-500">Eligible voters cast their votes securely through Web3 wallets.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center mb-4">3</div>
                <h3 className="text-xl font-bold mb-2">Results Verified</h3>
                <p className="text-gray-500">Votes are tallied in real-time with blockchain-backed verification.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Revolutionize Your Voting Process?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join VoteChain today and experience the future of decentralized decision-making.
                </p>
              </div>
              <Button className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 VoteChain. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
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

