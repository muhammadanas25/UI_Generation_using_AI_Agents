import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Coins, Share2, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Coins className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">SocialVerse</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
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
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to SocialVerse
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The next-generation Web3 social media platform with tokenized content and decentralized ownership.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Why Choose SocialVerse?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Coins className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Tokenized Content</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Turn your posts into valuable NFTs and monetize your creativity.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Share2 className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Decentralized Sharing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Share content across multiple blockchain networks seamlessly.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                <Users className="h-12 w-12 text-primary" />
                <h3 className="text-xl font-bold">Community Governance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Participate in platform decisions through our DAO structure.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              SocialVerse vs. Lens Protocol
            </h2>
            <div className="grid gap-6 items-stretch md:grid-cols-2">
              <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <h3 className="text-2xl font-bold mb-4">SocialVerse</h3>
                <ul className="space-y-2 flex-1">
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-green-500" />
                    Multi-chain support
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-green-500" />
                    Advanced content monetization
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-green-500" />
                    Integrated DeFi features
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-green-500" />
                    AI-powered content curation
                  </li>
                </ul>
              </div>
              <div className="flex flex-col p-6 bg-white shadow-lg rounded-lg dark:bg-gray-800">
                <h3 className="text-2xl font-bold mb-4">Lens Protocol</h3>
                <ul className="space-y-2 flex-1">
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-green-500" />
                    Polygon-based platform
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-green-500" />
                    Basic content ownership
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-green-500" />
                    Follow-based economy
                  </li>
                  <li className="flex items-center">
                    <Zap className="h-4 w-4 mr-2 text-green-500" />
                    Open-source infrastructure
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the SocialVerse Revolution
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Be part of the next generation of social media. Sign up now for early access and exclusive rewards.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 SocialVerse. All rights reserved.</p>
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