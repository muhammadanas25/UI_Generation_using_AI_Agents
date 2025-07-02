import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ArrowRight, Droplet, Lock, TrendingUp, Wallet, Menu } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LiquidityMaxLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Droplet className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">LiquidityMax</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
            Pools
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
            Docs
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
            Community
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link className="text-lg font-medium" href="#">Features</Link>
              <Link className="text-lg font-medium" href="#">Pools</Link>
              <Link className="text-lg font-medium" href="#">Docs</Link>
              <Link className="text-lg font-medium" href="#">Community</Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground overflow-hidden">
          <motion.div
            className="container px-4 md:px-6"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
                  Maximize Your Crypto Earnings with LiquidityMax
                </h1>
                <p className="max-w-[600px] mx-auto text-base sm:text-lg md:text-xl text-gray-200">
                  Dive into the world of decentralized finance and earn rewards by providing liquidity to Uniswap pools.
                </p>
              </motion.div>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <Button className="w-full sm:w-auto px-6 py-3 bg-white text-primary hover:bg-gray-100 shadow-lg transition">
                  Get Started
                </Button>
                <Button variant="outline" className="w-full sm:w-auto px-6 py-3 text-white border-white hover:bg-white hover:text-primary shadow-lg transition">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section className="w-full py-12 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Why Choose LiquidityMax?
            </motion.h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
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
        <section className="w-full py-12 md:py-24 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800 dark:text-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Popular Uniswap Pools
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
        <section className="w-full py-12 md:py-24 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  Ready to Maximize Your Liquidity?
                </h2>
                <p className="max-w-[600px] mx-auto text-base sm:text-lg md:text-xl text-gray-200">
                  Join LiquidityMax today and start earning rewards on your crypto assets.
                </p>
              </motion.div>
              <motion.div
                className="w-full max-w-md space-y-4"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <form className="flex flex-col sm:flex-row items-center gap-4">
                  <Input
                    className="w-full sm:flex-1 bg-white text-gray-900 placeholder-gray-500 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="w-full sm:w-auto px-6 py-2 bg-white text-primary hover:bg-gray-100 rounded-full shadow-lg transition">
                    Sign Up
                  </Button>
                </form>
                <p className="text-sm text-gray-200">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 LiquidityMax. All rights reserved.</p>
            <nav className="flex gap-4">
              <Link className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                Terms of Service
              </Link>
              <Link className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                Privacy
              </Link>
              <Link className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
                Support
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

