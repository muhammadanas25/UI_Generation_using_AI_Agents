import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle, Globe, Lock, Newspaper, Shield, Users, Menu, X, Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"
import { Dialog } from "@/components/ui/dialog"

export default function TruthChainLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Shield className="h-8 w-8 text-primary animate-pulse" />
            <span className="ml-2 text-2xl font-bold text-primary">TruthChain</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-primary transition" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition" href="#how-it-works">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition" href="#token">
              Token
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition" href="#about">
              About
            </Link>
            <Button variant="ghost" className="ml-4">Login</Button>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <Dialog.Content className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6">
            <div className="flex items-center justify-between mb-8">
              <Link className="flex items-center justify-center" href="#">
                <Shield className="h-8 w-8 text-primary animate-pulse" />
                <span className="ml-2 text-2xl font-bold text-primary">TruthChain</span>
              </Link>
              <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </Button>
            </div>
            <nav className="flex flex-col gap-4">
              <Link className="text-base font-medium hover:text-primary transition" href="#features" onClick={() => setIsMenuOpen(false)}>
                Features
              </Link>
              <Link className="text-base font-medium hover:text-primary transition" href="#how-it-works" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </Link>
              <Link className="text-base font-medium hover:text-primary transition" href="#token" onClick={() => setIsMenuOpen(false)}>
                Token
              </Link>
              <Link className="text-base font-medium hover:text-primary transition" href="#about" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Button variant="ghost" className="mt-4" onClick={() => setIsMenuOpen(false)}>Login</Button>
            </nav>
          </Dialog.Content>
        </Dialog>
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in-up">
              Welcome to TruthChain
            </h1>
            <p className="max-w-2xl mx-auto text-lg sm:text-xl mb-8 animate-fade-in-up delay-200">
              The decentralized news platform that rewards truth and transparency. Join the revolution in
              fact-checked, community-driven journalism.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
              <Button variant="secondary" className="transition transform hover:scale-105">
                Get Started
              </Button>
              <Button variant="outline" className="transition transform hover:scale-105">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2">
                <Globe className="h-12 w-12 mb-4 text-primary mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">Decentralized Platform</h3>
                <p className="text-muted-foreground text-center">No central authority controls the news. The power is in your hands.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2">
                <CheckCircle className="h-12 w-12 mb-4 text-primary mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">Fact-Checking Rewards</h3>
                <p className="text-muted-foreground text-center">Earn tokens for verifying information and maintaining truth.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2">
                <Users className="h-12 w-12 mb-4 text-primary mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">Community-Driven</h3>
                <p className="text-muted-foreground text-center">News by the people, for the people. Your voice matters.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2">
                <Lock className="h-12 w-12 mb-4 text-primary mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">Blockchain Security</h3>
                <p className="text-muted-foreground text-center">Immutable records ensure the integrity of all published content.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2">
                <Newspaper className="h-12 w-12 mb-4 text-primary mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">Diverse Content</h3>
                <p className="text-muted-foreground text-center">Access a wide range of news categories and perspectives.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition transform hover:-translate-y-2">
                <Shield className="h-12 w-12 mb-4 text-primary mx-auto" />
                <h3 className="text-xl font-semibold mb-2 text-center">Transparency</h3>
                <p className="text-muted-foreground text-center">Clear tracking of sources, edits, and fact-checks for all articles.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 animate-bounce">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Create an Account</h3>
                <p className="text-muted-foreground">Sign up and join the TruthChain community.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 animate-bounce delay-200">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Read and Publish</h3>
                <p className="text-muted-foreground">Access news or contribute your own articles.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 animate-bounce delay-400">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Fact-Check and Verify</h3>
                <p className="text-muted-foreground">Participate in the fact-checking process.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 animate-bounce delay-600">
                  4
                </div>
                <h3 className="text-xl font-semibold mb-2">Earn Tokens</h3>
                <p className="text-muted-foreground">Get rewarded for your contributions to truth.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 animate-bounce delay-800">
                  5
                </div>
                <h3 className="text-xl font-semibold mb-2">Build Reputation</h3>
                <p className="text-muted-foreground">Gain trust and influence within the community.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mb-4 animate-bounce delay-1000">
                  6
                </div>
                <h3 className="text-xl font-semibold mb-2">Shape the Future</h3>
                <p className="text-muted-foreground">Participate in governance and platform decisions.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="token" className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">TruthToken Rewards</h2>
                <p className="text-muted-foreground text-lg">
                  Our innovative token system incentivizes truth and quality journalism. Earn TruthTokens for:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                    Publishing verified articles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                    Fact-checking and verifying information
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                    Identifying and reporting misinformation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                    Contributing to community discussions
                  </li>
                </ul>
                <Button variant="secondary" className="mt-4">Learn About Tokenomics</Button>
              </div>
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-muted px-4 py-2 text-sm">Tokenomics</div>
                <p className="text-muted-foreground text-lg">
                  TruthTokens can be used for:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                    Boosting visibility of your articles
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                    Accessing premium content
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                    Participating in governance decisions
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-3 h-6 w-6 text-primary" />
                    Trading on decentralized exchanges
                  </li>
                </ul>
                <Button variant="outline" className="mt-4">View Token Details</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center text-white space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">Join the TruthChain Revolution</h2>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl">
                Be part of a community that values truth, transparency, and quality journalism.
              </p>
              <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Input
                  className="max-w-md w-full"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit" variant="secondary">Get Started</Button>
              </form>
              <p className="text-sm">
                By signing up, you agree to our{" "}
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-16 md:py-24 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="lg:w-1/2">
                <img src="/images/about-illustration.svg" alt="About TruthChain" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">About TruthChain</h2>
                <p className="text-lg text-muted-foreground">
                  TruthChain is dedicated to transforming the way news is consumed and shared. By leveraging blockchain technology, we ensure that every piece of information is verified, transparent, and free from censorship. Our platform empowers users to contribute, fact-check, and earn rewards, fostering a community-driven ecosystem of trustworthy journalism.
                </p>
                <Button variant="outline">Read Our Story</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12">Testimonials</h2>
            <div className="flex overflow-x-auto space-x-6">
              <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg">
                <p className="text-muted-foreground mb-4">"TruthChain has revolutionized the way I consume news. I feel confident knowing that the information I read is verified and trustworthy."</p>
                <div className="flex items-center">
                  <img src="/images/user1.jpg" alt="User 1" className="h-10 w-10 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">Jane Doe</p>
                    <p className="text-sm text-muted-foreground">Journalist</p>
                  </div>
                </div>
              </div>
              <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg">
                <p className="text-muted-foreground mb-4">"Earning tokens for fact-checking has made me more engaged and responsible as a reader and contributor."</p>
                <div className="flex items-center">
                  <img src="/images/user2.jpg" alt="User 2" className="h-10 w-10 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">John Smith</p>
                    <p className="text-sm text-muted-foreground">Editor</p>
                  </div>
                </div>
              </div>
              <div className="min-w-[300px] bg-white p-6 rounded-lg shadow-lg">
                <p className="text-muted-foreground mb-4">"The transparency and community-driven approach of TruthChain ensure that I always have access to unbiased and accurate news."</p>
                <div className="flex items-center">
                  <img src="/images/user3.jpg" alt="User 3" className="h-10 w-10 rounded-full mr-4" />
                  <div>
                    <p className="font-semibold">Alice Johnson</p>
                    <p className="text-sm text-muted-foreground">Content Creator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-gray-200 py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row justify-between items-center">
          <p className="text-sm">&copy; 2024 TruthChain. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 lg:mt-0">
            <Link className="hover:text-primary transition" href="#">Terms of Service</Link>
            <Link className="hover:text-primary transition" href="#">Privacy</Link>
            <Link className="hover:text-primary transition" href="#">Contact</Link>
          </nav>
          <div className="flex space-x-4 mt-4 lg:mt-0">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-primary transition" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 hover:text-primary transition" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-primary transition" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}