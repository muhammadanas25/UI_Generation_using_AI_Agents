import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Gamepad2, Coins, Users, TrendingUp, CheckCircle, Menu, X, Twitter, DiscIcon as Discord, Globe } from 'lucide-react'
import Link from "next/link"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-background text-primary-foreground">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 right-0 z-50">
        <Link className="flex items-center space-x-2" href="#">
          <Gamepad2 className="h-8 w-8 text-primary animate-spin-slow" />
          <span className="text-2xl font-bold text-primary transition-transform transform hover:scale-110">PlayMint</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#comparison">
            Comparison
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#faq">
            FAQ
          </Link>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-blue-500 transition-colors" />
            </Link>
            <Link href="#" aria-label="Discord">
              <Discord className="h-5 w-5 hover:text-indigo-500 transition-colors" />
            </Link>
            <Link href="#" aria-label="Website">
              <Globe className="h-5 w-5 hover:text-green-500 transition-colors" />
            </Link>
          </div>
        </nav>
        <div className="md:hidden">
          <Dialog>
            <DialogTrigger onClick={() => setIsMenuOpen(true)}>
              <Menu className="h-6 w-6 text-primary" />
            </DialogTrigger>
            <DialogContent className="p-6 bg-white rounded-lg shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <Link className="flex items-center space-x-2" href="#">
                  <Gamepad2 className="h-8 w-8 text-primary" />
                  <span className="text-2xl font-bold text-primary">PlayMint</span>
                </Link>
                <X className="h-6 w-6 text-primary cursor-pointer" onClick={() => setIsMenuOpen(false)} />
              </div>
              <nav className="flex flex-col space-y-4">
                <Link className="text-lg font-medium hover:text-primary transition-colors" href="#features" onClick={() => setIsMenuOpen(false)}>
                  Features
                </Link>
                <Link className="text-lg font-medium hover:text-primary transition-colors" href="#how-it-works" onClick={() => setIsMenuOpen(false)}>
                  How It Works
                </Link>
                <Link className="text-lg font-medium hover:text-primary transition-colors" href="#comparison" onClick={() => setIsMenuOpen(false)}>
                  Comparison
                </Link>
                <Link className="text-lg font-medium hover:text-primary transition-colors" href="#faq" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </Link>
                <div className="flex space-x-4 mt-4">
                  <Link href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5 hover:text-blue-500 transition-colors" />
                  </Link>
                  <Link href="#" aria-label="Discord">
                    <Discord className="h-5 w-5 hover:text-indigo-500 transition-colors" />
                  </Link>
                  <Link href="#" aria-label="Website">
                    <Globe className="h-5 w-5 hover:text-green-500 transition-colors" />
                  </Link>
                </div>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <main className="flex-1 mt-20">
        <section className="w-full py-20 md:py-32 bg-gradient-to-r from-primary to-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-center bg-cover opacity-20" style={{ backgroundImage: 'url("/images/hero-bg.svg")' }}></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fade-in-up">
                Play, Earn, and Thrive in the PlayMint Universe
              </h1>
              <p className="max-w-2xl text-gray-200 text-base sm:text-lg md:text-xl animate-fade-in-up delay-200">
                Join the revolution of GameFi. Earn real tokens while enjoying your favorite games on PlayMint.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 transition-transform transform hover:scale-105 animate-pulse">
                  Get Started
                </Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary transition-transform transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Why Choose PlayMint?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <Coins className="h-12 w-12 text-primary mb-4 animate-bounce" />
                <h3 className="text-xl font-semibold mb-2 text-center">Earn Real Tokens</h3>
                <p className="text-center text-muted-foreground">
                  Convert your gaming skills into valuable tokens you can trade or cash out.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <Users className="h-12 w-12 text-primary mb-4 animate-pulse" />
                <h3 className="text-xl font-semibold mb-2 text-center">Vibrant Community</h3>
                <p className="text-center text-muted-foreground">
                  Join thousands of players in a thriving ecosystem of games and challenges.
                </p>
              </div>
              <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <TrendingUp className="h-12 w-12 text-primary mb-4 animate-bounce" />
                <h3 className="text-xl font-semibold mb-2 text-center">Growing Ecosystem</h3>
                <p className="text-center text-muted-foreground">
                  New games and features added regularly to keep the experience fresh and exciting.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-16 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">1</div>
                  <p className="ml-4 text-base sm:text-lg font-medium">Sign up for a PlayMint account</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">2</div>
                  <p className="ml-4 text-base sm:text-lg font-medium">Choose from our selection of play-to-earn games</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">3</div>
                  <p className="ml-4 text-base sm:text-lg font-medium">Play games and complete challenges to earn tokens</p>
                </div>
                <div className="flex items-center">
                  <div className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">4</div>
                  <p className="ml-4 text-base sm:text-lg font-medium">Trade or cash out your earned tokens</p>
                </div>
              </div>
              <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4">Start Earning Now!</h3>
                <form className="space-y-4">
                  <Input placeholder="Email" type="email" required className="focus:ring-primary focus:border-primary" />
                  <Input placeholder="Password" type="password" required className="focus:ring-primary focus:border-primary" />
                  <Button className="w-full bg-primary hover:bg-primary-600">Create Account</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section id="comparison" className="w-full py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center mb-12">PlayMint vs Competitors</h2>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[300px] table-auto border-collapse">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="border px-2 sm:px-4 py-2 text-left">Feature</th>
                    <th className="border px-2 sm:px-4 py-2 text-center">PlayMint</th>
                    <th className="border px-2 sm:px-4 py-2 text-center">Axie Infinity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">Variety of Games</td>
                    <td className="border px-2 sm:px-4 py-2 text-center">
                      <CheckCircle className="inline h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    </td>
                    <td className="border px-2 sm:px-4 py-2 text-center">
                      <CheckCircle className="inline h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">Low Entry Barrier</td>
                    <td className="border px-2 sm:px-4 py-2 text-center">
                      <CheckCircle className="inline h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    </td>
                    <td className="border px-2 sm:px-4 py-2 text-center">-</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">Multiple Token Support</td>
                    <td className="border px-2 sm:px-4 py-2 text-center">
                      <CheckCircle className="inline h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    </td>
                    <td className="border px-2 sm:px-4 py-2 text-center">-</td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">Regular New Content</td>
                    <td className="border px-2 sm:px-4 py-2 text-center">
                      <CheckCircle className="inline h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    </td>
                    <td className="border px-2 sm:px-4 py-2 text-center">
                      <CheckCircle className="inline h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-100 transition-colors">
                    <td className="border px-2 sm:px-4 py-2 text-sm sm:text-base">Community Engagement</td>
                    <td className="border px-2 sm:px-4 py-2 text-center">
                      <CheckCircle className="inline h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    </td>
                    <td className="border px-2 sm:px-4 py-2 text-center">
                      <CheckCircle className="inline h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-16 md:py-24 bg-gradient-to-r from-primary to-primary-foreground text-white text-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fade-in">Ready to Play and Earn?</h2>
            <p className="max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              Join thousands of players already earning tokens on PlayMint. Start your journey today and be part of the GameFi revolution!
            </p>
            <Button className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 transition-transform transform hover:scale-105">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white shadow-inner">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 sm:mb-0">© 2024 PlayMint. All rights reserved.</p>
          <nav className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <div className="flex space-x-4">
              <Link className="text-xs hover:text-primary transition-colors" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs hover:text-primary transition-colors" href="#">
                Privacy
              </Link>
              <Link className="text-xs hover:text-primary transition-colors" href="#">
                Contact
              </Link>
            </div>
            <div className="flex space-x-3">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-4 w-4 hover:text-blue-500 transition-colors" />
              </Link>
              <Link href="#" aria-label="Discord">
                <Discord className="h-4 w-4 hover:text-indigo-500 transition-colors" />
              </Link>
              <Link href="#" aria-label="Website">
                <Globe className="h-4 w-4 hover:text-green-500 transition-colors" />
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

