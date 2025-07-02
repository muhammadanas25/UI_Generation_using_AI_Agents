import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Blocks, ShieldCheck, Coins, Users, Menu } from 'lucide-react'
import { useState } from "react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Blocks className="h-6 w-6 mr-2" />
          <span className="font-bold">CrowdChain</span>
        </Link>
        <button
          className="ml-auto lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex absolute top-14 left-0 right-0 bg-white dark:bg-gray-800 flex-col lg:flex-row lg:static lg:ml-auto items-center gap-4 p-4 lg:p-0`}>
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
          <div className="container mx-auto px-4 lg:px-6 flex flex-col lg:flex-row items-center justify-between">
            <div className="space-y-2">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 animate-fade-in-up">
                Decentralized Fundraising with CrowdChain
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-white mb-6 animate-fade-in-up delay-200">
                Empower your projects with blockchain-based crowdfunding. Transparent, secure, and trustless fund distribution through smart contracts.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="w-full sm:w-auto">Start a Campaign</Button>
              <Button variant="outline" className="w-full sm:w-auto">Explore Projects</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose CrowdChain?
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <ShieldCheck className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Trustless Transactions</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Smart contracts ensure automatic and secure fund distribution without intermediaries.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Coins className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Transparent Funding</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  All transactions are recorded on the blockchain, providing full transparency and traceability.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-10 w-10 mb-2" />
                <h3 className="text-xl font-bold">Global Community</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Connect with backers and creators from around the world, fostering innovation and collaboration.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              How It Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-2">1</div>
                <h3 className="text-xl font-bold">Create a Campaign</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Set up your project, funding goals, and milestones.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-2">2</div>
                <h3 className="text-xl font-bold">Attract Backers</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Share your campaign and engage with the community.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-2">3</div>
                <h3 className="text-xl font-bold">Reach Milestones</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  As you achieve goals, smart contracts release funds automatically.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg mb-2">4</div>
                <h3 className="text-xl font-bold">Deliver & Grow</h3>
                <p className="text-gray-500 dark:text-gray-400 text-center">
                  Complete your project and build your reputation on CrowdChain.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0 text-center lg:text-left">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Ready to Launch Your Project?
                  </h2>
                  <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    Join CrowdChain today and experience the future of decentralized fundraising.
                  </p>
                </div>
              </div>
              <div className="w-full max-w-sm lg:w-1/2 space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  By signing up, you agree to our <Link className="underline underline-offset-2" href="#">Terms & Conditions</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto px-4 lg:px-6 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 py-6 w-full shrink-0 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CrowdChain. All rights reserved.</p>
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

