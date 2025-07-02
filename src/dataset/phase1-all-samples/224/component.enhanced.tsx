import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CheckCircle, Gamepad2, Coins, Code, Users, Menu } from 'lucide-react'

export default function PlayNodeLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Gamepad2 className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">PlayNode</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Developers
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Gamers
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
                Developers
              </Link>
              <Link className="text-lg font-medium" href="#" onClick={() => setMobileMenuOpen(false)}>
                Gamers
              </Link>
              <Link className="text-lg font-medium" href="#" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter text-white animate-fade-in-up">
                  Welcome to PlayNode: The Future of Web3 Gaming
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 text-sm sm:text-base md:text-xl">
                  Revolutionize your gaming experience with blockchain technology. Create, trade, and own in-game assets
                  as NFTs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto bg-white text-primary hover:bg-zinc-200">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8 sm:mb-12">Why Choose PlayNode?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card>
                <CardHeader>
                  <Coins className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>True Ownership</CardTitle>
                </CardHeader>
                <CardContent>
                  Own your in-game assets as NFTs, tradeable across games and platforms.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Code className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Developer-Friendly</CardTitle>
                </CardHeader>
                <CardContent>
                  Easy-to-use SDKs and APIs for seamless blockchain integration in your games.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Thriving Community</CardTitle>
                </CardHeader>
                <CardContent>
                  Join a growing ecosystem of gamers, developers, and blockchain enthusiasts.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8 sm:mb-12">How It Works</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">For Gamers</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>Connect your wallet to PlayNode</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>Browse and play Web3-enabled games</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>Earn, trade, and truly own your in-game assets</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold">For Developers</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>Integrate our SDK into your game</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>Define and mint in-game NFTs</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                    <span>Leverage blockchain for unique gameplay mechanics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8 sm:mb-12">
              PlayNode vs. Competitors
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>PlayNode</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span>Multi-chain support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span>Lower fees</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span>Advanced NFT features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enjin</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zinc-400 mr-2 flex-shrink-0" />
                      <span>Limited chain support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zinc-400 mr-2 flex-shrink-0" />
                      <span>Higher fees</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zinc-400 mr-2 flex-shrink-0" />
                      <span>Basic NFT features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Others</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zinc-400 mr-2 flex-shrink-0" />
                      <span>Varying chain support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zinc-400 mr-2 flex-shrink-0" />
                      <span>Inconsistent fees</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-zinc-400 mr-2 flex-shrink-0" />
                      <span>Limited NFT features</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-white">
                  Ready to Join the Web3 Gaming Revolution?
                </h2>
                <p className="mx-auto max-w-[700px] text-zinc-200 text-sm sm:text-base md:text-lg">
                  Whether you're a gamer looking for the next big thing or a developer ready to create the future of
                  gaming, PlayNode is your gateway to Web3.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto bg-white text-primary hover:bg-zinc-200">Start Gaming</Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10">
                  Develop with Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t bg-white dark:bg-gray-800 transition-colors duration-300">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">© 2024 PlayNode. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
            Privacy
          </Link>
          <Link className="text-xs text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
            Support
          </Link>
        </nav>
      </footer>
    </div>
  )
}

