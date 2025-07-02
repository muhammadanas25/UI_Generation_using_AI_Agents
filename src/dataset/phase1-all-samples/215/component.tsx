import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Lock, Zap, BarChart3, Award, Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function StakeItLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">StakeIt</span>
          <Lock className="h-6 w-6 text-pink-600" />
          <span className="ml-2 text-xl sm:text-2xl font-bold text-gray-900">StakeIt</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsMobileMenuOpen(false)}>
                Features
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsMobileMenuOpen(false)}>
                How It Works
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link className="text-sm font-medium hover:underline underline-offset-4" href="#" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Stake Your DOT, Earn Rewards with StakeIt
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 text-sm sm:text-base md:text-xl">
                  Maximize your Polkadot returns with our secure and easy-to-use staking platform. Start earning rewards today!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto bg-white text-pink-600 hover:bg-zinc-200">
                  Start Staking
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full sm:w-auto bg-transparent border-white text-white hover:bg-white hover:text-pink-600">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl text-center mb-8">Why Choose StakeIt?</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Zap className="h-8 w-8 text-pink-600 mb-2" />
                  <CardTitle>High Rewards</CardTitle>
                </CardHeader>
                <CardContent>
                  Earn competitive returns on your DOT tokens with our optimized staking strategies.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 text-pink-600 mb-2" />
                  <CardTitle>Secure Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  Rest easy knowing your assets are protected by industry-leading security measures.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 text-pink-600 mb-2" />
                  <CardTitle>Real-time Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  Track your earnings and performance with our intuitive dashboard and reporting tools.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-pink-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
              <Award className="h-12 w-12 sm:h-16 sm:w-16 mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">Ready to Start Earning?</h2>
              <p className="mx-auto max-w-[600px] text-zinc-200 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Join thousands of Polkadot enthusiasts who trust StakeIt for their staking needs. It only takes a few minutes to get started.
              </p>
              <Button className="w-full sm:w-auto bg-white text-pink-600 hover:bg-zinc-200">
                Create Your Account
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">© 2024 StakeIt. All rights reserved.</p>
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

