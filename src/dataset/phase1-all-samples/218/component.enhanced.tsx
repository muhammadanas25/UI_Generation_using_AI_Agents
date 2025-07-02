import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, CheckCircle, Lock, Search, Zap, Users, Menu, X, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export default function CodeSafeLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-8 w-8 text-blue-400 animate-pulse" />
          <span className="ml-2 text-2xl font-extrabold animate-bounce">CodeSafe</span>
        </Link>
        <nav className="hidden lg:flex gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition duration-300" href="#">
            Services
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition duration-300" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 transition duration-300" href="#">
            Contact
          </Link>
          <Button className="ml-4 bg-blue-500 hover:bg-blue-600 transition duration-300 flex items-center">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </nav>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>
      <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <DialogContent className="bg-gray-800 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <Link className="flex items-center justify-center" href="#">
              <Shield className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-2xl font-extrabold">CodeSafe</span>
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link className="text-lg font-medium hover:underline underline-offset-4 transition duration-300" href="#">
              Services
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4 transition duration-300" href="#">
              About
            </Link>
            <Link className="text-lg font-medium hover:underline underline-offset-4 transition duration-300" href="#">
              Contact
            </Link>
            <Button className="bg-blue-500 hover:bg-blue-600 transition duration-300 flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </DialogContent>
      </Dialog>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-cover bg-center" style={{ backgroundImage: 'url("/hero-background.jpg")' }}>
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center animate-fadeIn">
              <Shield className="h-16 w-16 text-blue-400 animate-spin-slow" />
              <div className="space-y-2">
                <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Secure Your Smart Contracts with CodeSafe
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-2xl">
                  Industry-leading audit services to protect your blockchain projects from vulnerabilities and ensure
                  maximum security.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-500 hover:bg-blue-600 transition transform hover:scale-105">
                  Get Started
                </Button>
                <Button variant="outline" className="hover:bg-gray-700 transition transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 animate-slideIn">
              Why Choose CodeSafe?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <CheckCircle className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Comprehensive Audits</h3>
                <p className="text-gray-300">Thorough analysis of your smart contracts to identify vulnerabilities.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <Lock className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                <p className="text-gray-300">Implement best practices to fortify your blockchain projects.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <Search className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Advanced Tools</h3>
                <p className="text-gray-300">Cutting-edge technology for in-depth code analysis and verification.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Rapid Turnaround</h3>
                <p className="text-gray-300">Quick and efficient audit process without compromising quality.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <Users className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-300">Seasoned professionals with extensive blockchain security experience.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <Shield className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-300">Continuous assistance and guidance throughout your project lifecycle.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 animate-slideIn">
              Trusted by Industry Leaders
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  src="/client1.jpg"
                  alt="Client"
                  className="rounded-full mb-4 w-20 h-20 object-cover border-2 border-blue-400"
                />
                <p className="text-gray-300 mb-4 italic">
                  "CodeSafe's audit service gave us the confidence to launch our DeFi platform. Their thorough analysis
                  and recommendations were invaluable."
                </p>
                <p className="font-bold">Jane Doe, CEO of DeFi Solutions</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  src="/client2.jpg"
                  alt="Client"
                  className="rounded-full mb-4 w-20 h-20 object-cover border-2 border-blue-400"
                />
                <p className="text-gray-300 mb-4 italic">
                  "We've been using CodeSafe for all our smart contract audits. Their expertise and attention to detail
                  are unmatched in the industry."
                </p>
                <p className="font-bold">John Smith, CTO of Blockchain Innovations</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                <img
                  src="/client3.jpg"
                  alt="Client"
                  className="rounded-full mb-4 w-20 h-20 object-cover border-2 border-blue-400"
                />
                <p className="text-gray-300 mb-4 italic">
                  "The team at CodeSafe not only identified critical vulnerabilities but also provided clear solutions.
                  They're an essential partner for any blockchain project."
                </p>
                <p className="font-bold">Alice Johnson, Founder of CryptoSecure</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-fadeInUp">
                  Ready to Secure Your Smart Contracts?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team of experts and start your journey towards bulletproof smart contracts.
                </p>
              </div>
              <div className="w-full max-w-md space-y-4">
                <form className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="flex-1 bg-white text-gray-900 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-gray-900 text-white hover:bg-gray-800 transition duration-300 w-full sm:w-auto">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-200 text-center">
                  By subscribing, you agree to our <Link href="#" className="underline hover:text-white">Terms of Service</Link> and <Link href="#" className="underline hover:text-white">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700 bg-gray-900">
        <p className="text-xs text-gray-400">© 2024 CodeSafe. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 transition duration-300" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400 transition duration-300" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300 hidden lg:block"
        title="Back to top"
      >
        <ArrowRight className="transform rotate-45" />
      </button>
    </div>
  )
}