import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Disc3, Music2, Users, Wallet, Zap, Menu } from 'lucide-react'
import Link from "next/link"

export default function TuneChainLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Disc3 className="h-6 w-6 mr-2" />
          <span className="font-bold">TuneChain</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Artists
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Listeners
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link className="text-lg font-medium" href="#" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link className="text-lg font-medium" href="#" onClick={() => setMobileMenuOpen(false)}>
                Artists
              </Link>
              <Link className="text-lg font-medium" href="#" onClick={() => setMobileMenuOpen(false)}>
                Listeners
              </Link>
              <Link className="text-lg font-medium" href="#" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to TuneChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 text-sm sm:text-base md:text-xl">
                  The future of decentralized music streaming. Empower artists, reward listeners, and revolutionize the
                  industry.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto bg-white text-black hover:bg-gray-200">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
              Why Choose TuneChain?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Wallet className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Fair Compensation</h3>
                <p className="text-gray-600 text-sm sm:text-base">Artists earn more with our blockchain-based royalty system.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Community Governance</h3>
                <p className="text-gray-600 text-sm sm:text-base">Users have a say in platform decisions through token voting.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Lightning-Fast Streaming</h3>
                <p className="text-gray-600 text-sm sm:text-base">Enjoy high-quality, buffer-free music powered by decentralized networks.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">
              How TuneChain Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Upload Your Music</h3>
                <p className="text-gray-600 text-sm sm:text-base">Artists can easily upload and tokenize their tracks on the blockchain.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Stream and Earn</h3>
                <p className="text-gray-600 text-sm sm:text-base">Listeners enjoy music while earning tokens for their engagement.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Participate in Governance</h3>
                <p className="text-gray-600 text-sm sm:text-base">Use your tokens to vote on platform upgrades and feature proposals.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <Music2 className="h-12 w-12 mb-4" />
              <blockquote className="text-xl sm:text-2xl font-semibold italic">
                "TuneChain has revolutionized how I connect with my fans and earn from my music. It's the future of the
                industry!"
              </blockquote>
              <p className="text-base sm:text-lg">- Alex Harmony, Indie Artist</p>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                  Join the Music Revolution
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 text-sm sm:text-base md:text-lg">
                  Be part of the decentralized future of music. Sign up now to start streaming, earning, and empowering
                  artists.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input className="w-full max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Sign Up</Button>
                </form>
                <p className="text-xs text-gray-500">
                  By signing up, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 mb-4 sm:mb-0">© 2024 TuneChain. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
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

