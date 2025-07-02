import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Lock, Zap, BarChart3, Award, Menu, X, Shield, RefreshCw } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function StakeItLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="fixed w-full bg-white shadow z-50">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link className="flex items-center" href="#">
            <Lock className="h-6 w-6 text-pink-600" />
            <span className="ml-2 text-2xl font-bold text-gray-900">StakeIt</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-600 transition" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-600 transition" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-600 transition" href="#">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-pink-600 transition" href="#">
              Contact
            </Link>
          </nav>
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4">
                <Link className="text-lg font-medium text-gray-700 hover:text-pink-600 transition" href="#" onClick={() => setIsMenuOpen(false)}>
                  Features
                </Link>
                <Link className="text-lg font-medium text-gray-700 hover:text-pink-600 transition" href="#" onClick={() => setIsMenuOpen(false)}>
                  How It Works
                </Link>
                <Link className="text-lg font-medium text-gray-700 hover:text-pink-600 transition" href="#" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
                <Link className="text-lg font-medium text-gray-700 hover:text-pink-600 transition" href="#" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-12 sm:py-20 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 text-center text-white animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                Stake Your DOT, Earn Rewards with StakeIt
              </h1>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl">
                Maximize your Polkadot returns with our secure and easy-to-use staking platform. Start earning rewards today!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="w-full sm:w-auto flex items-center justify-center bg-white text-pink-600 hover:bg-zinc-200 transition">
                  Start Staking
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full sm:w-auto flex items-center justify-center border-white text-white hover:bg-white hover:text-pink-600 transition">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-20 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Why Choose StakeIt?</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <Zap className="h-10 w-10 text-pink-600 mb-4" />
                  <CardTitle className="text-xl">High Rewards</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Earn competitive returns on your DOT tokens with our optimized staking strategies.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <Lock className="h-10 w-10 text-pink-600 mb-4" />
                  <CardTitle className="text-xl">Secure Platform</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Rest easy knowing your assets are protected by industry-leading security measures.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <BarChart3 className="h-10 w-10 text-pink-600 mb-4" />
                  <CardTitle className="text-xl">Real-time Analytics</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Track your earnings and performance with our intuitive dashboard and reporting tools.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <Award className="h-10 w-10 text-pink-600 mb-4" />
                  <CardTitle className="text-xl">Community Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Join a vibrant community of Polkadot enthusiasts and get support whenever you need it.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <Shield className="h-10 w-10 text-pink-600 mb-4" />
                  <CardTitle className="text-xl">Asset Protection</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Your assets are safeguarded with multi-layered security protocols and regular audits.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <RefreshCw className="h-10 w-10 text-pink-600 mb-4" />
                  <CardTitle className="text-xl">Flexible Staking</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Enjoy flexible staking options tailored to your investment strategy and risk tolerance.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800">How It Works</h2>
            <div className="flex flex-col md:flex-row items-center md:space-x-12 space-y-8 md:space-y-0">
              <div className="md:w-1/2">
                <img src="/staking-process.svg" alt="Staking Process" className="w-full rounded-lg shadow-lg transform hover:scale-105 transition" />
              </div>
              <div className="md:w-1/2">
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Lock className="h-8 w-8 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Secure Your Assets</h3>
                      <p className="text-gray-600">Deposit your DOT tokens into our secure platform with multiple layers of protection.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Zap className="h-8 w-8 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Stake Easily</h3>
                      <p className="text-gray-600">Use our intuitive dashboard to start staking your DOT with just a few clicks.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <Award className="h-8 w-8 text-pink-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Earn Rewards</h3>
                      <p className="text-gray-600">Automatically earn and track your staking rewards in real-time.</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-6 w-full sm:w-auto bg-pink-600 text-white hover:bg-pink-700 transition">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-20 bg-pink-600">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-6 text-center text-white">
              <Award className="h-16 w-16 animate-pulse" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">Ready to Start Earning?</h2>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl">
                Join thousands of Polkadot enthusiasts who trust StakeIt for their staking needs. It only takes a few minutes to get started.
              </p>
              <Button className="w-full sm:w-auto flex items-center justify-center bg-white text-pink-600 hover:bg-zinc-200 transition">
                Create Your Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-20 bg-zinc-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Testimonials</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">"StakeIt has transformed the way I manage my DOT assets. The rewards are fantastic and the platform is incredibly user-friendly."</p>
                  <div className="flex items-center space-x-2">
                    <img src="/user1.jpg" alt="User 1" className="h-10 w-10 rounded-full" />
                    <div>
                      <p className="font-semibold">Alice Johnson</p>
                      <p className="text-sm text-gray-500">Blockchain Enthusiast</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">"The real-time analytics feature is a game-changer. I can track my earnings effortlessly and make informed staking decisions."</p>
                  <div className="flex items-center space-x-2">
                    <img src="/user2.jpg" alt="User 2" className="h-10 w-10 rounded-full" />
                    <div>
                      <p className="font-semibold">Mark Davis</p>
                      <p className="text-sm text-gray-500">Crypto Investor</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition">
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">"Security is my top priority, and StakeIt delivers. I feel confident knowing my assets are protected."</p>
                  <div className="flex items-center space-x-2">
                    <img src="/user3.jpg" alt="User 3" className="h-10 w-10 rounded-full" />
                    <div>
                      <p className="font-semibold">Linda Martinez</p>
                      <p className="text-sm text-gray-500">DeFi Developer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white py-6 shadow-inner">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-zinc-500 mb-4 sm:mb-0">© 2024 StakeIt. All rights reserved.</p>
          <nav className="flex space-x-4">
            <Link className="text-xs text-zinc-500 hover:text-pink-600 transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-zinc-500 hover:text-pink-600 transition" href="#">
              Privacy
            </Link>
            <Link className="text-xs text-zinc-500 hover:text-pink-600 transition" href="#">
              Support
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

