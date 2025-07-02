import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Box, Link, Shield, Zap, Sun, Moon, Menu, X } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (typeof window !== "undefined") {
      if (darkMode) {
        document.documentElement.classList.remove("dark")
      } else {
        document.documentElement.classList.add("dark")
      }
    }
  }

  return (
    <div className={`${darkMode ? "dark" : ""} flex flex-col min-h-screen bg-gradient-to-b from-primary/10 to-primary/5 transition-colors duration-500`}>
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white dark:bg-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
        <a className="flex items-center justify-center" href="#">
          <Box className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold text-primary">TrackChain</span>
        </a>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
          <Button variant="ghost" onClick={toggleDarkMode} className="ml-4">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>
        <div className="md:hidden flex items-center">
          <Button variant="ghost" onClick={toggleDarkMode} className="mr-2">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        {menuOpen && (
          <nav className="absolute top-16 right-4 bg-white dark:bg-gray-800 rounded-md shadow-lg py-4 px-6 flex flex-col gap-4 md:hidden">
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Features
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Pricing
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              About
            </a>
            <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
              Contact
            </a>
          </nav>
        )}
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-20 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center" style={{ backgroundImage: "url('/hero-background.svg')" }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center animate-fadeIn">
              <Image src="/hero-illustration.svg" alt="TrackChain Illustration" width={200} height={200} className="mb-4" />
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                  Revolutionize Your Supply Chain with TrackChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
                  Harness the power of blockchain technology to bring unprecedented transparency, security, and
                  efficiency to your supply chain management.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition transform hover:-translate-y-1">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-24 lg:py-32 bg-primary/5">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose TrackChain?
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Zap className="h-8 w-8 text-primary mb-2 animate-bounce" />
                  <CardTitle>Real-time Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  Monitor your assets and products in real-time as they move through the supply chain, ensuring complete
                  visibility and control.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Shield className="h-8 w-8 text-primary mb-2 animate-pulse" />
                  <CardTitle>Immutable Records</CardTitle>
                </CardHeader>
                <CardContent>
                  Leverage blockchain technology to create tamper-proof records, enhancing trust and accountability
                  across your entire supply network.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Link className="h-8 w-8 text-primary mb-2 animate-spin-slow" />
                  <CardTitle>Smart Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  Automate processes and payments with smart contracts, reducing delays and increasing efficiency in
                  your supply chain operations.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Supply Chain?
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-600 dark:text-gray-400 md:text-xl">
                  Join the growing number of businesses leveraging TrackChain to optimize their operations and gain a
                  competitive edge.
                </p>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 transition transform hover:-translate-y-1">
                Start Your Free Trial
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid gap-8 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "TrackChain has completely transformed our supply chain visibility. The real-time tracking is a game-changer."
                  </p>
                  <div className="mt-4 flex items-center">
                    <Image src="/client1.jpg" alt="Client 1" width={40} height={40} className="rounded-full mr-3" />
                    <div>
                      <p className="font-semibold">Jane Doe</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CEO, Global Logistics</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "The immutable records feature has increased our trust with partners exponentially."
                  </p>
                  <div className="mt-4 flex items-center">
                    <Image src="/client2.jpg" alt="Client 2" width={40} height={40} className="rounded-full mr-3" />
                    <div>
                      <p className="font-semibold">John Smith</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">CTO, FreshFoods Inc.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "Smart contracts have automated our payments, saving us time and reducing errors."
                  </p>
                  <div className="mt-4 flex items-center">
                    <Image src="/client3.jpg" alt="Client 3" width={40} height={40} className="rounded-full mr-3" />
                    <div>
                      <p className="font-semibold">Emily Clark</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Operations Manager, BuildIt</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white dark:bg-gray-800">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TrackChain. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            <Image src="/social/twitter.svg" alt="Twitter" width={16} height={16} />
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            <Image src="/social/linkedin.svg" alt="LinkedIn" width={16} height={16} />
          </a>
        </nav>
      </footer>
    </div>
  )
}