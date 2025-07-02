import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BarChart3, Lock, Zap, Sun, Moon, Menu, X, Twitter, DiscIcon as Discord, GitlabIcon as GitHub } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function Component() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setIsDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (typeof window !== "undefined") {
      if (!isDarkMode) {
        document.documentElement.classList.add("dark")
        localStorage.setItem('darkMode', 'true')
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem('darkMode', 'false')
      }
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-8 w-8 text-blue-600 animate-bounce" />
          <span className="ml-2 text-2xl font-bold text-gray-800 dark:text-white">YieldBot</span>
        </Link>
        <nav className="hidden lg:flex gap-6 items-center">
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
            Contact
          </Link>
          <Button variant="ghost" onClick={toggleDarkMode}>
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button className="ml-4 bg-blue-600 hover:bg-blue-700 transition" href="#">
            Login
          </Button>
        </nav>
        <div className="lg:hidden flex items-center">
          <Button variant="ghost" onClick={toggleDarkMode} className="mr-2">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost">
                <Menu className="h-6 w-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-full sm:max-w-[425px]">
              <div className="flex justify-between items-center mb-8">
                <Link className="flex items-center justify-center" href="#">
                  <Zap className="h-8 w-8 text-blue-600 animate-bounce" />
                  <span className="ml-2 text-2xl font-bold text-gray-800 dark:text-white">YieldBot</span>
                </Link>
                <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4">
                <Link className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                  Features
                </Link>
                <Link className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                  How It Works
                </Link>
                <Link className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                  About
                </Link>
                <Link className="text-lg font-medium text-gray-700 dark:text-gray-200 hover:underline underline-offset-4 transition" href="#">
                  Contact
                </Link>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700 transition" href="#">
                  Login
                </Button>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <main className="flex-1 mt-20">
        <section className="w-full py-12 sm:py-20 md:py-32 lg:py-40 bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <Image src="/hero-illustration.png" alt="YieldBot Illustration" width={300} height={300} className="animate-float w-full max-w-[200px] sm:max-w-[300px]" />
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
                  Maximize Your DeFi Yields with YieldBot
                </h1>
                <p className="mx-auto max-w-2xl text-base sm:text-lg text-gray-200">
                  Automate your yield farming and optimize returns across multiple DeFi protocols. Let YieldBot do the heavy lifting while you reap the rewards.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 transition flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white hover:text-blue-600 transition">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-16 text-gray-800 dark:text-white">
              Why Choose YieldBot?
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <BarChart3 className="h-12 w-12 mb-4 text-blue-600" />
                  <CardTitle className="text-xl">Optimized Yields</CardTitle>
                  <CardDescription className="text-center">
                    Our advanced algorithms continuously scan and rebalance your portfolio for maximum returns.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Lock className="h-12 w-12 mb-4 text-blue-600" />
                  <CardTitle className="text-xl">Enhanced Security</CardTitle>
                  <CardDescription className="text-center">
                    Your funds are protected by industry-leading security measures and smart contract audits.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Zap className="h-12 w-12 mb-4 text-blue-600" />
                  <CardTitle className="text-xl">Automated Strategies</CardTitle>
                  <CardDescription className="text-center">
                    Set it and forget it. YieldBot automatically executes the best yield farming strategies for you.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-16 text-gray-800 dark:text-white">
              How YieldBot Works
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white mb-4 animate-bounce">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Deposit</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                  Deposit your crypto assets into YieldBot's smart contracts.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white mb-4 animate-bounce delay-200">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Optimize</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                  Our algorithms analyze and allocate your funds across the best-performing DeFi protocols.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white mb-4 animate-bounce delay-400">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Earn</h3>
                <p className="text-gray-600 dark:text-gray-300 max-w-xs">
                  Sit back and watch your yields grow as YieldBot maximizes your returns.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter">
                Ready to Supercharge Your Yields?
              </h2>
              <p className="mx-auto max-w-2xl text-base sm:text-lg">
                Join thousands of users who are already maximizing their DeFi returns with YieldBot.
              </p>
              <Button className="w-full sm:w-auto bg-white text-blue-600 hover:bg-gray-100 transition flex items-center justify-center">
                Launch App
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8 sm:mb-12 text-gray-800 dark:text-white">
              Testimonials
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  <Image src="/user1.jpg" alt="User 1" width={80} height={80} className="rounded-full mb-4" />
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                    "YieldBot has transformed my DeFi investments. The automated strategies are top-notch!"
                  </p>
                  <h4 className="font-semibold text-gray-800 dark:text-white">- Alex Johnson</h4>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  <Image src="/user2.jpg" alt="User 2" width={80} height={80} className="rounded-full mb-4" />
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                    "Enhanced security and optimized yields. I trust YieldBot with all my assets."
                  </p>
                  <h4 className="font-semibold text-gray-800 dark:text-white">- Maria Garcia</h4>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center p-6">
                  <Image src="/user3.jpg" alt="User 3" width={80} height={80} className="rounded-full mb-4" />
                  <p className="text-center text-gray-600 dark:text-gray-300 mb-4">
                    "The best DeFi aggregator I've used. Consistent returns and excellent support."
                  </p>
                  <h4 className="font-semibold text-gray-800 dark:text-white">- Li Wei</h4>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-center mb-8">
              Subscribe to Our Newsletter
            </h2>
            <form className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-1/3 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800"
              />
              <Button className="w-full sm:w-auto bg-white text-indigo-600 hover:bg-gray-100 transition">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full py-8 bg-gray-900 text-gray-300">
        <div className="container px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs mb-4 sm:mb-0">&copy; 2024 YieldBot. All rights reserved.</p>
          <nav className="flex flex-col sm:flex-row gap-4 items-center">
            <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 transition" href="#">
              Privacy
            </Link>
            <div className="flex gap-2 mt-2 sm:mt-0">
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <Discord className="h-4 w-4" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                <GitHub className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

