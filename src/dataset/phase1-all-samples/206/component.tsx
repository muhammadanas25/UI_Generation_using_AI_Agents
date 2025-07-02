import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, ChevronRightIcon, MenuIcon, XIcon } from 'lucide-react'
import Link from "next/link"

export default function GovHubLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white dark:bg-gray-800 shadow-md fixed w-full z-50">
        <Link href="#" className="flex items-center justify-center">
          <MountainIcon className="h-6 w-6 text-primary" />
          <span className="sr-only">GovHub</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </header>
      {mobileMenuOpen && (
        <nav className="md:hidden px-4 py-2 bg-white dark:bg-gray-800 border-b fixed top-16 left-0 right-0 z-40">
          <Link href="#" className="block py-2 text-sm font-medium hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="#" className="block py-2 text-sm font-medium hover:underline underline-offset-4">
            Pricing
          </Link>
          <Link href="#" className="block py-2 text-sm font-medium hover:underline underline-offset-4">
            About
          </Link>
          <Link href="#" className="block py-2 text-sm font-medium hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>
      )}
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Simplify DAO Governance with GovHub
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Streamline your governance token management and empower your community with our intuitive DAO management tool.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Token Management</CardTitle>
                </CardHeader>
                <CardContent>Easily create, distribute, and manage governance tokens for your DAO.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Voting System</CardTitle>
                </CardHeader>
                <CardContent>Implement secure and transparent voting mechanisms for community decisions.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Proposal Tracking</CardTitle>
                </CardHeader>
                <CardContent>Efficiently manage and track proposals from creation to execution.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">GovHub vs. Competitors</h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>GovHub</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-green-500" /> Intuitive user interface</li>
                    <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-green-500" /> Customizable governance models</li>
                    <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-green-500" /> Advanced analytics and reporting</li>
                    <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-green-500" /> Seamless integration with popular blockchains</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Aragon</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-green-500" /> Established platform</li>
                    <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-green-500" /> Basic governance features</li>
                    <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-red-500" /> Limited customization options</li>
                    <li className="flex items-center"><CheckIcon className="mr-2 h-4 w-4 text-red-500" /> Steeper learning curve</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">What Our Users Say</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="pt-4">
                  <blockquote className="italic">
                    "GovHub has revolutionized how we manage our DAO. The intuitive interface and powerful features have made governance a breeze."
                  </blockquote>
                  <p className="mt-2 font-semibold">- Alex Chen, DAO Founder</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-4">
                  <blockquote className="italic">
                    "Since switching to GovHub, we've seen a 50% increase in community participation. It's been a game-changer for us."
                  </blockquote>
                  <p className="mt-2 font-semibold">- Sarah Johnson, Community Manager</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Simplify Your DAO Management?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of DAOs already benefiting from GovHub's powerful tools and intuitive interface.
                </p>
              </div>
              <div>
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Now
                  <ChevronRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">© 2024 GovHub. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Terms of Service
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

