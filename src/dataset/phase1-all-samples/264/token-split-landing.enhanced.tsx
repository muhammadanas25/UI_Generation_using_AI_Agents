import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Coins, Lock, Menu, Share2, Sparkles, Users, X } from "lucide-react"

export default function TokenSplitLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-shadow duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <a className="flex items-center transition-transform transform hover:scale-105" href="#">
            <Coins className="h-6 w-6 mr-2 text-indigo-600 dark:text-indigo-400 animate-bounce" />
            <span className="font-bold text-xl text-indigo-600 dark:text-indigo-400">TokenSplit</span>
          </a>
          <nav className="hidden md:flex gap-6">
            <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" href="#">
              Features
            </a>
            <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" href="#">
              How It Works
            </a>
            <a className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" href="#">
              Pricing
            </a>
            <Button variant="ghost" className="ml-4">Login</Button>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 animate-fadeIn">
            <a className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2 transition-colors duration-300" href="#">
              Features
            </a>
            <a className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2 transition-colors duration-300" href="#">
              How It Works
            </a>
            <a className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 py-2 transition-colors duration-300" href="#">
              Pricing
            </a>
            <Button variant="ghost" className="mt-2 w-full">Login</Button>
          </nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 dark:text-white transition-transform duration-500 transform hover:scale-105">
                Fractionalize NFTs for Shared Ownership
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                TokenSplit makes it easy to divide NFT ownership, enabling broader participation and liquidity in the digital art market.
              </p>
              <div className="space-x-4">
                <Button className="transition-transform transform hover:scale-105">Get Started</Button>
                <Button variant="outline" className="transition-transform transform hover:scale-105">Learn More</Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <div className="relative">
                <Sparkles className="absolute -top-5 -left-5 w-20 h-20 text-indigo-300 animate-pulse" />
                <Sparkles className="absolute bottom-5 right-5 w-20 h-20 text-purple-300 animate-pulse" />
                <img src="/nft-illustration.svg" alt="NFT Illustration" className="w-full rounded-lg shadow-lg transform hover:rotate-3 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Key Features</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <CardHeader>
                  <Share2 className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <CardTitle className="text-xl">Fractionalize Any NFT</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Split ownership of valuable NFTs into tradable tokens, increasing liquidity and accessibility.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <CardHeader>
                  <Users className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <CardTitle className="text-xl">Community Ownership</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Enable groups to collectively own and manage high-value NFTs through democratic processes.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <CardHeader>
                  <Lock className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <CardTitle className="text-xl">Secure Smart Contracts</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Our battle-tested smart contracts ensure the safety and integrity of fractional ownership.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <CardHeader>
                  <CheckCircle className="w-8 h-8 text-green-500 mb-4" />
                  <CardTitle className="text-xl">Lower Fees</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Enjoy competitive pricing with lower transaction fees compared to other platforms.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <CardHeader>
                  <Sparkles className="w-8 h-8 text-purple-500 mb-4" />
                  <CardTitle className="text-xl">Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Gain insights into your fractionalized assets with our comprehensive analytics dashboard.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
                <CardHeader>
                  <Lock className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <CardTitle className="text-xl">24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Our dedicated support team is available around the clock to assist you with any queries.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">How It Works</h2>
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600 text-white mb-4 transition-transform duration-300 transform hover:scale-110">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Select Your NFT</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Choose the NFT you want to fractionalize from your wallet.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600 text-white mb-4 transition-transform duration-300 transform hover:scale-110">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Set Parameters</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Define the number of fractions and initial pricing for your NFT shares.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-600 text-white mb-4 transition-transform duration-300 transform hover:scale-110">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Trade & Manage</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Buy, sell, and manage fractional ownership through our intuitive platform.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Why Choose TokenSplit?</h2>
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">TokenSplit</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Lower fees than competitors</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Support for multiple blockchains</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Advanced governance features</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Integrated secondary market</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">Competitors (e.g., Fractional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Higher transaction fees</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Limited blockchain support</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Basic governance options</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-gray-400 flex-shrink-0 mr-3" />
                      <span className="text-gray-700 dark:text-gray-300">Reliance on third-party marketplaces</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Testimonials</h2>
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <Card className="flex-1 hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "TokenSplit has revolutionized the way we manage our NFT investments. The platform is intuitive and secure."
                  </p>
                  <div className="flex items-center">
                    <img src="/user1.jpg" alt="User 1" className="w-10 h-10 rounded-full mr-4" />
                    <div>
                      <p className="text-gray-800 dark:text-white font-semibold">Jane Doe</p>
                      <p className="text-gray-500 dark:text-gray-400">Art Collector</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex-1 hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "The community ownership feature allows us to collaborate and make decisions collectively. Highly recommend!"
                  </p>
                  <div className="flex items-center">
                    <img src="/user2.jpg" alt="User 2" className="w-10 h-10 rounded-full mr-4" />
                    <div>
                      <p className="text-gray-800 dark:text-white font-semibold">John Smith</p>
                      <p className="text-gray-500 dark:text-gray-400">Blockchain Enthusiast</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="flex-1 hover:shadow-xl transition-shadow duration-300">
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    "With TokenSplit, we've been able to increase the liquidity of our NFT assets significantly. The platform is top-notch."
                  </p>
                  <div className="flex items-center">
                    <img src="/user3.jpg" alt="User 3" className="w-10 h-10 rounded-full mr-4" />
                    <div>
                      <p className="text-gray-800 dark:text-white font-semibold">Alice Johnson</p>
                      <p className="text-gray-500 dark:text-gray-400">Digital Artist</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TokenSplit. All rights reserved.</p>
          <nav className="flex mt-2 sm:mt-0 gap-4 sm:gap-6">
            <a className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" href="#">
              Terms of Service
            </a>
            <a className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" href="#">
              Privacy
            </a>
            <a className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" href="#">
              Contact
            </a>
          </nav>
        </div>
        <div className="container mx-auto px-4 md:px-6 mt-4 flex justify-center space-x-4">
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.723 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573A4.902 4.902 0 0 1 .96 9.1v.062a4.916 4.916 0 0 0 3.946 4.814 4.902 4.902 0 0 1-2.212.084 4.916 4.916 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.637A10.012 10.012 0 0 0 24 4.557z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.676V1.325C24 .597 23.403 0 22.675 0z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.976 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.976.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.976-1.248-2.242-1.31-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.976-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.633.422 3.678 1.377 2.722 2.333 2.431 3.475 2.372 4.752 2.313 6.032 2.3 6.441 2.3 12s.013 5.968.072 7.248c.059 1.277.35 2.419 1.305 3.374.955.955 2.097 1.246 3.374 1.305 1.28.059 1.689.072 7.248.072s5.968-.013 7.248-.072c1.277-.059 2.419-.35 3.374-1.305.955-.955 1.246-2.097 1.305-3.374.059-1.28.072-1.689.072-7.248s-.013-5.968-.072-7.248c-.059-1.277-.35-2.419-1.305-3.374C19.419.422 18.277.131 17 .072 15.719.013 15.31 0 12 0z"/>
              <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"/>
              <circle cx="18.406" cy="5.594" r="1.44"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}