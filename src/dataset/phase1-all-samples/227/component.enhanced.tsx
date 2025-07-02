import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckIcon, CloudIcon, CodeIcon, LockIcon, ServerIcon, ZapIcon, MenuIcon, XIcon, TwitterIcon, GitHubIcon, LinkedInIcon } from "lucide-react"

export default function CloudNodeLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md transition-shadow duration-300">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="#" className="flex items-center space-x-2">
            <CloudIcon className="h-8 w-8 text-blue-500 animate-spin-slow" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">CloudNode</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">
              Features
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">
              Pricing
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">
              Documentation
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">
              Blog
            </Link>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 dark:text-gray-300 hover:text-blue-500 focus:outline-none transition-colors duration-200"
            >
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 space-y-2">
            <Link href="#" className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">
              Features
            </Link>
            <Link href="#" className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">
              Pricing
            </Link>
            <Link href="#" className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">
              Documentation
            </Link>
            <Link href="#" className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 transition-colors duration-200">
              Blog
            </Link>
          </nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-20 md:py-32 lg:py-40 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4 animate-fade-in-up">
                Decentralized Cloud Computing with CloudNode
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6 animate-fade-in-up delay-200">
                Harness the power of decentralized infrastructure. Deploy, scale, and manage your applications with
                unparalleled efficiency and cost-effectiveness.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4 animate-fade-in-up delay-400">
                <Button className="transition-transform transform hover:scale-105">Get Started</Button>
                <Button variant="outline" className="transition-transform transform hover:scale-105">Learn More</Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
              <Image
                src="/cloudnode-hero.svg"
                alt="CloudNode Illustration"
                width={500}
                height={500}
                className="animate-pulse-slow"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fade-in-up">
              Why Choose CloudNode?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <CloudIcon className="h-12 w-12 text-blue-500 mb-4" />
                  <CardTitle className="text-xl">Decentralized Infrastructure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Leverage a global network of providers for increased reliability, reduced latency, and enhanced data sovereignty.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <ZapIcon className="h-12 w-12 text-yellow-500 mb-4" />
                  <CardTitle className="text-xl">Cost-Effective Scaling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Pay only for the resources you use with our dynamic pricing model, significantly reducing your cloud expenses.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <LockIcon className="h-12 w-12 text-green-500 mb-4" />
                  <CardTitle className="text-xl">Enhanced Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Benefit from decentralized architecture and advanced encryption to protect your data and applications.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fade-in-up">
              CloudNode vs. Akash Network
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle className="text-xl">CloudNode</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Advanced workload orchestration
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Integrated developer tools
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      24/7 expert support
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Multi-region data replication
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <CardTitle className="text-xl">Akash Network</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Decentralized infrastructure
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Blockchain-based marketplace
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                      Open-source platform
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fade-in-up">
              Empower Your Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <ServerIcon className="h-12 w-12 text-purple-500 mb-4" />
                  <CardTitle className="text-xl">Web Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Deploy scalable web apps with global reach and minimal latency.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <ZapIcon className="h-12 w-12 text-yellow-500 mb-4" />
                  <CardTitle className="text-xl">Microservices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Build and manage distributed microservices architectures with ease.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
                <CardHeader className="flex flex-col items-center">
                  <CodeIcon className="h-12 w-12 text-green-500 mb-4" />
                  <CardTitle className="text-xl">DevOps & CI/CD</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    Streamline your development pipeline with our integrated tools and services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 animate-fade-in-up">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up delay-200">
              Join the decentralized revolution with CloudNode and experience the future of cloud computing today.
            </p>
            <div className="flex justify-center space-x-4 animate-fade-in-up delay-400">
              <Button size="lg" className="transition-transform transform hover:scale-105">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="transition-transform transform hover:scale-105">
                Schedule a Demo
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-200 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4 sm:mb-0">
            © 2024 CloudNode. All rights reserved.
          </p>
          <nav className="flex space-x-4">
            <Link href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
              <TwitterIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
              <GitHubIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-200">
              <LinkedInIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}