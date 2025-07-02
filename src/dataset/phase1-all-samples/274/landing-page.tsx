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
        <nav className="container mx-auto p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-4 sm:mb-0">NFTSwap</h1>
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">Home</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">About</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">FAQ</a>
              <Button variant="outline" className="mt-2 sm:mt-0">Connect Wallet</Button>
            </div>
          </div>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8 sm:py-16">
        <section className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800 dark:text-white">Swap NFTs Across Chains</h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">Low-fee NFT swaps between Ethereum and Solana</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">Start Swapping</Button>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose CrowdChain?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
            <div className="w-full md:w-1/3">
              <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">NFTSwap</h2>
              <p className="text-gray-600 dark:text-gray-300">Revolutionizing cross-chain NFT swaps</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">FAQ</a></li>
                <li><a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">Terms of Service</a></li>
              </ul>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">Twitter</a>
                <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">Discord</a>
                <a href="#" className="text-gray-600 hover:text-purple-600 dark:text-gray-300 dark:hover:text-purple-400">Telegram</a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600 dark:text-gray-300">
            © 2023 NFTSwap. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

