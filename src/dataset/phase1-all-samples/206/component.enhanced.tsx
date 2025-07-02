import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, ChevronRightIcon } from 'lucide-react'
import { motion } from "framer-motion"
import Image from "next/image"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed w-full z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center space-x-2">
            <MountainIcon className="h-8 w-8 text-indigo-600 animate-pulse" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">GovHub</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300">
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-300">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Button variant="ghost" className="hidden md:inline-block">
              Sign In
            </Button>
            <Button className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1 mt-16">
        <section className="relative w-full bg-gradient-to-r from-indigo-500 to-purple-600 py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Simplify DAO Governance with GovHub
              </motion.h1>
              <motion.p
                className="max-w-2xl text-base md:text-lg text-gray-200"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Streamline your governance token management and empower your community with our intuitive DAO management tool.
              </motion.p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="px-6 py-3 bg-white text-indigo-600 hover:bg-gray-100 transition transform hover:-translate-y-1"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-6 py-3 border-white text-white hover:bg-indigo-600 hover:border-indigo-600 hover:text-white transition transform hover:-translate-y-1"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex justify-center">
                  <FeatureIcon name="token" />
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-xl font-semibold mb-2">Token Management</CardTitle>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    Easily create, distribute, and manage governance tokens for your DAO.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex justify-center">
                  <FeatureIcon name="voting" />
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-xl font-semibold mb-2">Voting System</CardTitle>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    Implement secure and transparent voting mechanisms for community decisions.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex justify-center">
                  <FeatureIcon name="proposal" />
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="text-xl font-semibold mb-2">Proposal Tracking</CardTitle>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    Efficiently manage and track proposals from creation to execution.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              GovHub vs. Competitors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="bg-indigo-600 text-white">
                  <CardTitle>GovHub</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Intuitive user interface</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Customizable governance models</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Advanced analytics and reporting</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Seamless integration with popular blockchains</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="bg-red-600 text-white">
                  <CardTitle>Aragon</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm md:text-base">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Established platform</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span>Basic governance features</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                      <span>Limited customization options</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                      <span>Steeper learning curve</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center text-center">
                  <Image src="/avatars/alex.jpg" alt="Alex Chen" width={80} height={80} className="rounded-full mb-4" />
                  <blockquote className="italic text-sm md:text-base text-gray-600 dark:text-gray-300">
                    "GovHub has revolutionized how we manage our DAO. The intuitive interface and powerful features have made governance a breeze."
                  </blockquote>
                  <p className="mt-4 font-semibold text-gray-800 dark:text-white">- Alex Chen, DAO Founder</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center text-center">
                  <Image src="/avatars/sarah.jpg" alt="Sarah Johnson" width={80} height={80} className="rounded-full mb-4" />
                  <blockquote className="italic text-sm md:text-base text-gray-600 dark:text-gray-300">
                    "Since switching to GovHub, we've seen a 50% increase in community participation. It's been a game-changer for us."
                  </blockquote>
                  <p className="mt-4 font-semibold text-gray-800 dark:text-white">- Sarah Johnson, Community Manager</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-6">
              <motion.h2
                className="text-2xl md:text-3xl font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Ready to Simplify Your DAO Management?
              </motion.h2>
              <motion.p
                className="max-w-2xl text-base md:text-lg text-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Join thousands of DAOs already benefiting from GovHub's powerful tools and intuitive interface.
              </motion.p>
              <Button
                size="lg"
                className="flex items-center bg-white text-indigo-600 hover:bg-gray-100 transition transform hover:-translate-y-1"
              >
                Get Started Now
                <ChevronRightIcon className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">© 2024 GovHub. All rights reserved.</p>
          <nav className="flex space-x-4">
            <Link href="#" className="text-xs text-gray-600 dark:text-gray-300 hover:underline transition-colors duration-300">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-gray-600 dark:text-gray-300 hover:underline transition-colors duration-300">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-gray-600 dark:text-gray-300 hover:underline transition-colors duration-300">
              FAQ
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function Link({ href, children, ...props }) {
  return <a href={href} {...props}>{children}</a>
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      fill="currentColor"
    >
      <path d="M32 2L2 30h8v32h44V30h8z" />
      <path d="M32 2v60" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function FeatureIcon({ name }) {
  switch (name) {
    case "token":
      return (
        <svg className="h-12 w-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-2.21 0-4 1.79-4 4 0 1.09.36 2.09 1 2.91V20h6v-5.09c.64-.82 1-1.82 1-2.91 0-2.21-1.79-4-4-4z" />
        </svg>
      )
    case "voting":
      return (
        <svg className="h-12 w-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m2 0a2 2 0 100-4 2 2 0 000 4zm-8 0h4" />
        </svg>
      )
    case "proposal":
      return (
        <svg className="h-12 w-12 text-indigo-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    default:
      return null
  }
}

