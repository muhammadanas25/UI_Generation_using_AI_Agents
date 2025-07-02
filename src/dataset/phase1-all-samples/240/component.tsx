import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Globe, Lock, Newspaper, Shield, Users, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function TruthChainLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl sm:text-2xl font-bold text-primary">TruthChain</span>
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
            About
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
        <nav className="md:hidden flex flex-col items-center py-4 bg-background">
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
            About
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to TruthChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 text-sm sm:text-base md:text-xl">
                  The decentralized news platform that rewards truth and transparency. Join the revolution in
                  fact-checked, community-driven journalism.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button variant="secondary" className="w-full sm:w-auto">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Key Features</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Globe className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Decentralized Platform</h3>
                <p className="text-sm sm:text-base text-muted-foreground">No central authority controls the news. The power is in your hands.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Fact-Checking Rewards</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Earn tokens for verifying information and maintaining truth.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Community-Driven</h3>
                <p className="text-sm sm:text-base text-muted-foreground">News by the people, for the people. Your voice matters.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Blockchain Security</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Immutable records ensure the integrity of all published content.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Newspaper className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Diverse Content</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Access a wide range of news categories and perspectives.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-10 w-10 sm:h-12 sm:w-12 mb-4 text-primary" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Transparency</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Clear tracking of sources, edits, and fact-checks for all articles.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">How It Works</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold mb-4">1</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Create an Account</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Sign up and join the TruthChain community.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold mb-4">2</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Read and Publish</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Access news or contribute your own articles.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold mb-4">3</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Fact-Check and Verify</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Participate in the fact-checking process.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold mb-4">4</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Earn Tokens</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Get rewarded for your contributions to truth.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold mb-4">5</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Build Reputation</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Gain trust and influence within the community.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-lg sm:text-xl font-bold mb-4">6</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Shape the Future</h3>
                <p className="text-sm sm:text-base text-muted-foreground">Participate in governance and platform decisions.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-4 sm:px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">TruthToken Rewards</h2>
                <p className="max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our innovative token system incentivizes truth and quality journalism. Earn TruthTokens for:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Publishing verified articles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Fact-checking and verifying information
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Identifying and reporting misinformation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Contributing to community discussions
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Tokenomics</div>
                <p className="max-w-[600px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  TruthTokens can be used for:
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Boosting visibility of your articles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Accessing premium content
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Participating in governance decisions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                    Trading on decentralized exchanges
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Join the TruthChain Revolution
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Be part of a community that values truth, transparency, and quality journalism.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-primary"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit" variant="secondary" className="w-full sm:w-auto">
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
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2024 TruthChain. All rights reserved.</p>
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

