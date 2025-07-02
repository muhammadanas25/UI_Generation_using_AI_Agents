import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Wallet, Search, GamepadIcon as GameController, Coins, ShieldCheck, Zap } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"

export default function GameXMarketplace() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex flex-wrap items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <GameController className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">GameX</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block" href="#">
            Marketplace
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block" href="#">
            Games
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block" href="#">
            About
          </Link>
          <Button variant="outline" size="sm">
            <Wallet className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Connect Wallet</span>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none">
                  Welcome to GameX Marketplace
                </h1>
                <p className="mx-auto max-w-[700px] text-sm sm:text-base text-gray-400 md:text-lg">
                  Trade, own, and profit from in-game assets across multiple blockchain games.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white/10" placeholder="Search assets, games..." type="text" />
                  <Button type="submit" variant="secondary">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Featured Assets</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Legendary Sword</CardTitle>
                  <CardDescription>Rare weapon from CryptoQuest</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Legendary Sword"
                    className="w-full h-[200px] object-cover rounded-md"
                    width={300}
                    height={200}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-2xl font-bold">0.5 ETH</span>
                  <Button>Buy Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dragon Egg</CardTitle>
                  <CardDescription>Mythical item from DragonVerse</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Dragon Egg"
                    className="w-full h-[200px] object-cover rounded-md"
                    width={300}
                    height={200}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-2xl font-bold">1.2 ETH</span>
                  <Button>Buy Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Cyber Armor</CardTitle>
                  <CardDescription>Futuristic gear from NeoWorld</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt="Cyber Armor"
                    className="w-full h-[200px] object-cover rounded-md"
                    width={300}
                    height={200}
                  />
                </CardContent>
                <CardFooter className="flex justify-between">
                  <span className="text-2xl font-bold">0.8 ETH</span>
                  <Button>Buy Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Wallet className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Connect Your Wallet</h3>
                <p className="text-gray-500">Link your crypto wallet to start trading on GameX.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Search className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Discover Assets</h3>
                <p className="text-gray-500">Browse through a wide range of in-game items and collectibles.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Coins className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Trade Securely</h3>
                <p className="text-gray-500">Buy, sell, or auction your assets with confidence on our platform.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Why Choose GameX?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShieldCheck className="h-6 w-6 mr-2 text-primary" />
                    Secure Transactions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our blockchain-based system ensures that all trades are secure, transparent, and immutable.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="h-6 w-6 mr-2 text-primary" />
                    Instant Transfers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Experience lightning-fast asset transfers across different games and platforms.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <GameController className="h-6 w-6 mr-2 text-primary" />
                    Multi-Game Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Trade assets from various blockchain games, all in one convenient marketplace.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Coins className="h-6 w-6 mr-2 text-primary" />
                    Low Fees
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Enjoy competitive trading fees that maximize your profits and minimize costs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Start Trading?</h2>
                <p className="mx-auto max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of gamers already trading on GameX. Connect your wallet and dive into the future of
                  gaming assets.
                </p>
              </div>
              <Button className="bg-white text-black hover:bg-gray-200" size="lg">
                Connect Wallet
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 GameX Inc. All rights reserved.</p>
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

