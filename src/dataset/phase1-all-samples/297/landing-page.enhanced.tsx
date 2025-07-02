import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Zap, Coins, BarChart3, ArrowRight, Sun, Wind, Menu, X, Twitter, Facebook, Linkedin } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Transition } from "@headlessui/react"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
      <header className="fixed top-0 left-0 right-0 z-50 px-4 lg:px-6 bg-white dark:bg-gray-900 shadow-md transition-colors duration-500">
        <div className="h-16 flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Zap className="h-8 w-8 text-green-600 animate-pulse" />
            <span className="ml-2 text-3xl font-extrabold text-gray-900 dark:text-white">EnergyChain</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-300" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-300" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-300" href="#">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-300" href="#">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-300 focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        <Transition
          show={isMenuOpen}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pt-2 pb-4 space-y-2">
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-300" href="#">
              Features
            </Link>
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-300" href="#">
              How It Works
            </Link>
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-300" href="#">
              About
            </Link>
            <Link className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 transition-colors duration-300" href="#">
              Contact
            </Link>
          </nav>
        </Transition>
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-green-500 to-green-300">
          <div className="container mx-auto px-4 md:px-6 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 animate-fadeInUp">
              Trade Renewable Energy Credits with EnergyChain
            </h1>
            <p className="mx-auto max-w-2xl text-lg sm:text-xl md:text-2xl mb-8 animate-fadeInUp delay-200">
              Empower the green energy revolution through blockchain technology. Buy, sell, and trade renewable energy credits securely and efficiently.
            </p>
            <div className="flex justify-center space-x-4 animate-fadeInUp delay-400">
              <Button className="px-6 py-3 text-lg">Get Started</Button>
              <Button variant="outline" className="px-6 py-3 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 opacity-20">
            <img src="/energy-bg.svg" alt="Energy Background" className="w-full h-full object-cover animate-float" />
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Battery className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle className="text-xl font-semibold">Renewable Energy Credits</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Trade verifiable renewable energy credits from various sources including solar, wind, and hydroelectric power.
                  </p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Coins className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle className="text-xl font-semibold">Blockchain-Powered</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Utilize secure, transparent, and immutable blockchain technology for all transactions and credit tracking.
                  </p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <BarChart3 className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle className="text-xl font-semibold">Real-Time Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Access comprehensive analytics and reporting tools to track your energy credit portfolio and market trends.
                  </p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Sun className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle className="text-xl font-semibold">Sustainable Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Contribute to a sustainable future by supporting renewable energy projects and reducing carbon footprints.
                  </p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Wind className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle className="text-xl font-semibold">Decentralized Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Enjoy a decentralized marketplace that ensures fairness, security, and accessibility for all users.
                  </p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Zap className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle className="text-xl font-semibold">24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Get round-the-clock support from our dedicated team to assist you with any queries or issues.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-700">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">How It Works</h2>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
              <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:translate-y-2 transition-transform duration-300">
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mb-4 animate-bounce">
                  <Sun className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">1. Generate</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Renewable energy producers generate clean energy and receive energy credits.
                </p>
              </div>
              <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:translate-y-2 transition-transform duration-300">
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mb-4 animate-pulse">
                  <Zap className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">2. Trade</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Users buy, sell, and trade energy credits on our secure blockchain platform.
                </p>
              </div>
              <div className="flex flex-col items-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transform hover:translate-y-2 transition-transform duration-300">
                <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full mb-4 animate-spin-slow">
                  <Wind className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">3. Offset</h3>
                <p className="text-gray-600 dark:text-gray-300 text-center">
                  Businesses and individuals use credits to offset their carbon footprint.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-green-600 to-green-400 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 animate-fadeInUp">
              Join the Green Energy Revolution
            </h2>
            <p className="mx-auto max-w-xl text-lg sm:text-xl md:text-2xl mb-8 animate-fadeInUp delay-200">
              Start trading renewable energy credits today and make a positive impact on the environment.
            </p>
            <Button className="px-8 py-4 text-lg flex items-center justify-center bg-white text-green-600 hover:bg-green-100 transition-colors duration-300">
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "EnergyChain has revolutionized the way we manage our renewable energy credits. The platform is secure, intuitive, and incredibly efficient."
                </p>
                <div className="flex items-center">
                  <img src="/user1.jpg" alt="User 1" className="h-10 w-10 rounded-full mr-4" />
                  <div>
                    <p className="text-gray-800 dark:text-white font-semibold">Jane Doe</p>
                    <p className="text-gray-500 dark:text-gray-400">Renewable Energy Producer</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "Trading energy credits has never been easier. The real-time analytics provide invaluable insights into the market trends."
                </p>
                <div className="flex items-center">
                  <img src="/user2.jpg" alt="User 2" className="h-10 w-10 rounded-full mr-4" />
                  <div>
                    <p className="text-gray-800 dark:text-white font-semibold">John Smith</p>
                    <p className="text-gray-500 dark:text-gray-400">Environmental Consultant</p>
                  </div>
                </div>
              </Card>
              <Card className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "The decentralized platform ensures that our transactions are secure and transparent. Highly recommend EnergyChain!"
                </p>
                <div className="flex items-center">
                  <img src="/user3.jpg" alt="User 3" className="h-10 w-10 rounded-full mr-4" />
                  <div>
                    <p className="text-gray-800 dark:text-white font-semibold">Alex Johnson</p>
                    <p className="text-gray-500 dark:text-gray-400">Sustainability Officer</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row md:justify-between items-center">
              <div className="mb-8 md:mb-0">
                <h3 className="text-2xl font-bold">Stay Updated</h3>
                <p className="text-gray-400">Subscribe to our newsletter for the latest updates.</p>
              </div>
              <form className="flex flex-col sm:flex-row items-center w-full max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-md text-gray-800"
                />
                <Button className="mt-4 sm:mt-0 sm:ml-4 px-6 py-2">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-900 py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center md:flex-row justify-between">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 EnergyChain. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors duration-300" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors duration-300" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors duration-300">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors duration-300">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors duration-300">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

<style jsx>{`
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fadeInUp {
    animation: fadeInUp 0.6s ease-out forwards;
  }

  .animate-fadeInUp.delay-200 {
    animation-delay: 0.2s;
  }

  .animate-fadeInUp.delay-400 {
    animation-delay: 0.4s;
  }

  @keyframes float {
    0% {
      transform: translatey(0px);
    }
    50% {
      transform: translatey(-20px);
    }
    100% {
      transform: translatey(0px);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  @keyframes bounceSlow {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  .animate-bounce-slow {
    animation: bounceSlow 3s infinite;
  }

  @keyframes spinSlow {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .animate-spin-slow {
    animation: spinSlow 8s linear infinite;
  }
`}</style>