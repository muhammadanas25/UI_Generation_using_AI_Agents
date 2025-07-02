import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Zap, Coins, BarChart3, ArrowRight, Sun, Wind } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">EnergyChain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
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
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Trade Renewable Energy Credits with EnergyChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Empower the green energy revolution through blockchain technology. Buy, sell, and trade renewable energy credits securely and efficiently.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Battery className="h-8 w-8 mb-2 text-green-600" />
                  <CardTitle>Renewable Energy Credits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Trade verifiable renewable energy credits from various sources including solar, wind, and hydroelectric power.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Coins className="h-8 w-8 mb-2 text-green-600" />
                  <CardTitle>Blockchain-Powered</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Utilize secure, transparent, and immutable blockchain technology for all transactions and credit tracking.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <BarChart3 className="h-8 w-8 mb-2 text-green-600" />
                  <CardTitle>Real-Time Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access comprehensive analytics and reporting tools to track your energy credit portfolio and market trends.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <Sun className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">1. Generate</h3>
                <p>Renewable energy producers generate clean energy and receive energy credits.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">2. Trade</h3>
                <p>Users buy, sell, and trade energy credits on our secure blockchain platform.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="rounded-full bg-green-100 p-3 mb-4">
                  <Wind className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">3. Offset</h3>
                <p>Businesses and individuals use credits to offset their carbon footprint.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join the Green Energy Revolution
                </h2>
                <p className="mx-auto max-w-[600px] text-green-100 md:text-xl">
                  Start trading renewable energy credits today and make a positive impact on the environment.
                </p>
              </div>
              <Button className="bg-white text-green-600 hover:bg-green-100">
                Sign Up Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 EnergyChain. All rights reserved.</p>
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