import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Shield, CheckCircle, Lock, Search, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function CodeSafeLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="px-4 lg:px-6 h-16 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-6 w-6 text-blue-400" />
          <span className="ml-2 text-2xl font-bold">CodeSafe</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Services
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Secure Your Smart Contracts with CodeSafe
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Industry-leading audit services to protect your blockchain projects from vulnerabilities and ensure
                  maximum security.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-500 hover:bg-blue-600">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Why Choose CodeSafe?
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Comprehensive Audits</h3>
                <p className="text-gray-300">Thorough analysis of your smart contracts to identify vulnerabilities.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Enhanced Security</h3>
                <p className="text-gray-300">Implement best practices to fortify your blockchain projects.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Search className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Advanced Tools</h3>
                <p className="text-gray-300">Cutting-edge technology for in-depth code analysis and verification.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Rapid Turnaround</h3>
                <p className="text-gray-300">Quick and efficient audit process without compromising quality.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                <p className="text-gray-300">Seasoned professionals with extensive blockchain security experience.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">Ongoing Support</h3>
                <p className="text-gray-300">Continuous assistance and guidance throughout your project lifecycle.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Trusted by Industry Leaders
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Client"
                  className="rounded-full mb-4"
                  width={100}
                  height={100}
                />
                <p className="text-gray-300 mb-4">
                  "CodeSafe's audit service gave us the confidence to launch our DeFi platform. Their thorough analysis
                  and recommendations were invaluable."
                </p>
                <p className="font-bold">Jane Doe, CEO of DeFi Solutions</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Client"
                  className="rounded-full mb-4"
                  width={100}
                  height={100}
                />
                <p className="text-gray-300 mb-4">
                  "We've been using CodeSafe for all our smart contract audits. Their expertise and attention to detail
                  are unmatched in the industry."
                </p>
                <p className="font-bold">John Smith, CTO of Blockchain Innovations</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-lg">
                <img
                  src="/placeholder.svg?height=100&width=100"
                  alt="Client"
                  className="rounded-full mb-4"
                  width={100}
                  height={100}
                />
                <p className="text-gray-300 mb-4">
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
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Secure Your Smart Contracts?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team of experts and start your journey towards bulletproof smart contracts.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-white text-gray-900"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-gray-900 text-white hover:bg-gray-800" type="submit">
                    Get Started
                  </Button>
                </form>
                <p className="text-xs text-gray-200">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© 2024 CodeSafe. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}