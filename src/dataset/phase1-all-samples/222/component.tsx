import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ArrowRight, Droplet, Lock, TrendingUp, Wallet, Menu } from 'lucide-react'

export default function LiquidityMaxLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Droplet className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">LiquidityMax</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pools
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Docs
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Community
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
              <Link className="text-lg font-medium hover:underline underline-offset-4" href="#" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link className="text-lg font-medium hover:underline underline-offset-4" href="#" onClick={() => setMobileMenuOpen(false)}>
                Pools
              </Link>
              <Link className="text-lg font-medium hover:underline underline-offset-4" href="#" onClick={() => setMobileMenuOpen(false)}>
                Docs
              </Link>
              <Link className="text-lg font-medium hover:underline underline-offset-4" href="#" onClick={() => setMobileMenuOpen(false)}>
                Community
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Maximize Your Crypto Earnings with LiquidityMax
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 text-sm sm:text-base md:text-xl">
                  Dive into the world of decentralized finance and earn rewards by providing liquidity to Uniswap pools.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-primary">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8 sm:mb-12">
              Why Choose LiquidityMax?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">High Yields</h3>
                <p className="text-gray-600 text-sm sm:text-base">Earn competitive returns on your crypto assets through liquidity provision.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Enhanced Security</h3>
                <p className="text-gray-600 text-sm sm:text-base">Your assets are protected by advanced smart contract technology.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Wallet className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">User-Friendly Interface</h3>
                <p className="text-gray-600 text-sm sm:text-base">Easily manage your liquidity positions with our intuitive platform.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <ArrowRight className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">Instant Rewards</h3>
                <p className="text-gray-600 text-sm sm:text-base">Start earning immediately after providing liquidity to Uniswap pools.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8 sm:mb-12">
              Popular Uniswap Pools
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "ETH/USDT", apy: "8.5%", tvl: "$1.2B" },
                { name: "BTC/ETH", apy: "7.2%", tvl: "$890M" },
                { name: "LINK/ETH", apy: "12.1%", tvl: "$450M" },
                { name: "UNI/ETH", apy: "15.3%", tvl: "$320M" },
                { name: "DAI/USDC", apy: "5.8%", tvl: "$780M" },
                { name: "AAVE/ETH", apy: "9.7%", tvl: "$210M" },
              ].map((pool) => (
                <div key={pool.name} className="flex flex-col p-6 bg-white rounded-lg shadow-md">
                  <h3 className="text-lg sm:text-xl font-bold mb-2">{pool.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-4">Provide liquidity and earn rewards</p>
                  <div className="mt-auto">
                    <p className="font-semibold text-sm sm:text-base">APY: <span className="text-green-600">{pool.apy}</span></p>
                    <p className="font-semibold text-sm sm:text-base">TVL: {pool.tvl}</p>
                  </div>
                  <Button className="mt-4 w-full">Add Liquidity</Button>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">
                  Ready to Maximize Your Liquidity?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 text-sm sm:text-base md:text-lg">
                  Join LiquidityMax today and start earning rewards on your crypto assets.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="w-full bg-white text-gray-900 placeholder-gray-500"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100" type="submit">
                    Sign Up
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
      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 mb-4 sm:mb-0">© 2024 LiquidityMax. All rights reserved.</p>
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

