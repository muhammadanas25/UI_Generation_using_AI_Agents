import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, XIcon, MenuIcon, SunIcon, MoonIcon } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = () => setDarkMode(!darkMode)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between shadow-md bg-white dark:bg-gray-800 transition-colors duration-300">
          <a className="flex items-center justify-center" href="#">
            <GlobeIcon className="h-6 w-6 text-blue-500 animate-spin-slow" />
            <span className="ml-2 text-2xl font-bold text-gray-800 dark:text-white">GovernX</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
              Features
            </a>
            <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
              Pricing
            </a>
            <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
              About
            </a>
            <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
              {darkMode ? <SunIcon className="h-5 w-5 text-yellow-500" /> : <MoonIcon className="h-5 w-5 text-gray-800" />}
            </button>
            <button className="md:hidden p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
              <MenuIcon className="h-5 w-5 text-gray-800 dark:text-white" />
            </button>
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-20 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-800 dark:to-gray-900">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white animate-fade-in-up">
                    Empower Your DAO with GovernX
                  </h1>
                  <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                    Advanced tooling for decentralized governance. Create, manage, and grow your DAO with ease.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="animate-bounce">Get Started</Button>
                  <Button variant="outline" className="hover:bg-blue-50 dark:hover:bg-gray-700">Learn More</Button>
                </div>
                <div className="mt-8 flex space-x-4 animate-fade-in">
                  <img src="/dao-illustration.svg" alt="DAO Illustration" className="w-64 md:w-80" />
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Key Features</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <svg className="h-6 w-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-6a2 2 0 012-2h2a2 2 0 012 2v6m-6 0h6" />
                      </svg>
                      Smart Contract Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Easily deploy and manage smart contracts for your DAO's governance and treasury.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <svg className="h-6 w-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                      Voting System
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Secure and transparent voting mechanism with customizable parameters and real-time results.
                    </p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-300">
                  <CardHeader>
                    <CardTitle className="flex items-center text-xl">
                      <svg className="h-6 w-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Treasury Management
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Efficiently manage and allocate your DAO's funds with multi-signature wallets and detailed analytics.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-16">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">GovernX vs Aragon</h2>
              <div className="grid gap-8 sm:grid-cols-2">
                <Card className="bg-blue-50 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-blue-600 dark:text-blue-300">GovernX</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                        Advanced voting mechanisms
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                        Integrated DeFi tools
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                        Cross-chain compatibility
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                        AI-powered governance insights
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-red-50 dark:bg-gray-700 hover:bg-red-100 dark:hover:bg-gray-600 transition-colors duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-red-600 dark:text-red-300">Aragon</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                        Basic voting system
                      </li>
                      <li className="flex items-center">
                        <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                        Token management
                      </li>
                      <li className="flex items-center">
                        <XIcon className="h-5 w-5 text-red-500 mr-2" />
                        Limited cross-chain support
                      </li>
                      <li className="flex items-center">
                        <XIcon className="h-5 w-5 text-red-500 mr-2" />
                        No AI-powered features
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="space-y-4">
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 dark:text-white animate-fade-in-up">
                    Ready to Revolutionize Your DAO?
                  </h2>
                  <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                    Join the future of decentralized governance with GovernX. Start building your DAO today.
                  </p>
                </div>
                <Button className="px-6 py-3 text-lg animate-pulse">Get Started Now</Button>
              </div>
            </div>
          </section>
          <section className="w-full py-16">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Testimonials</h2>
              <div className="flex flex-col md:flex-row gap-8">
                <Card className="flex-1 hover:shadow-xl transition-shadow duration-300">
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      "GovernX has transformed the way our DAO operates. The intuitive interface and powerful tools have made governance seamless."
                    </p>
                    <div className="flex items-center">
                      <img src="/user1.jpg" alt="User 1" className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <p className="text-gray-800 dark:text-white font-semibold">Jane Doe</p>
                        <p className="text-gray-500 dark:text-gray-400">DAO Founder</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="flex-1 hover:shadow-xl transition-shadow duration-300">
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      "The AI-powered insights feature is a game-changer. It provides us with the data we need to make informed decisions."
                    </p>
                    <div className="flex items-center">
                      <img src="/user2.jpg" alt="User 2" className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <p className="text-gray-800 dark:text-white font-semibold">John Smith</p>
                        <p className="text-gray-500 dark:text-gray-400">Community Manager</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>
        <footer className="bg-gray-100 dark:bg-gray-800 py-6">
          <div className="container px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 GovernX. All rights reserved.</p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <a className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
                Terms of Service
              </a>
              <a className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
                Privacy
              </a>
              <a className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200" href="#">
                Careers
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </div>
  )
}

function GlobeIcon(props) {
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
      className="animate-spin-slow"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}