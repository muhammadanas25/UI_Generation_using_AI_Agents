import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Database, Lock, Share2, ShieldCheck, Users, Menu } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function HealthChainLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <ShieldCheck className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">HealthChain</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <Button variant="ghost" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          <Menu className="h-6 w-6" />
        </Button>
      </header>
      {mobileMenuOpen && (
        <nav className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-100">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Secure, Decentralized Healthcare Data Sharing
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl text-sm sm:text-base">
                  HealthChain empowers patients and healthcare providers with blockchain technology for seamless, secure
                  data sharing and improved patient outcomes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-primary hover:bg-gray-200">Get Started</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/20">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <Database className="h-8 w-8 sm:h-10 sm:w-10 mb-2 text-primary" />
                  <CardTitle className="text-lg sm:text-xl">Decentralized Storage</CardTitle>
                </CardHeader>
                <CardContent className="text-sm sm:text-base">
                  Your health data is stored across a network of nodes, ensuring no single point of failure and
                  increased data availability.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="h-8 w-8 sm:h-10 sm:w-10 mb-2 text-primary" />
                  <CardTitle className="text-lg sm:text-xl">End-to-End Encryption</CardTitle>
                </CardHeader>
                <CardContent className="text-sm sm:text-base">
                  All data is encrypted and can only be accessed by authorized parties, maintaining the highest level of
                  privacy and security.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Share2 className="h-8 w-8 sm:h-10 sm:w-10 mb-2 text-primary" />
                  <CardTitle className="text-lg sm:text-xl">Seamless Data Sharing</CardTitle>
                </CardHeader>
                <CardContent className="text-sm sm:text-base">
                  Easily share your health records with healthcare providers, ensuring they have the most up-to-date
                  information for better care.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">
              HealthChain vs. Medicalchain
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">HealthChain</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500" />
                      Fully decentralized storage
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500" />
                      AI-powered health insights
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500" />
                      Integration with wearable devices
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500" />
                      Multi-language support
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Medicalchain</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500" />
                      Blockchain-based record keeping
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-green-500" />
                      Telemedicine services
                    </li>
                    <li className="flex items-center opacity-50">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Limited AI capabilities
                    </li>
                    <li className="flex items-center opacity-50">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      English-only interface
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 sm:mb-12">What Our Users Say</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardContent className="mt-4">
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    "HealthChain has revolutionized how I manage my health data. It's secure, easy to use, and gives me
                    peace of mind."
                  </p>
                  <p className="font-semibold text-sm sm:text-base">- Sarah J., Patient</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    "As a healthcare provider, HealthChain has streamlined our processes and improved patient care
                    significantly."
                  </p>
                  <p className="font-semibold text-sm sm:text-base">- Dr. Michael T., Cardiologist</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <p className="text-gray-600 mb-2 text-sm sm:text-base">
                    "The AI-powered insights have helped me make better decisions about my health. It's like having a
                    personal health assistant."
                  </p>
                  <p className="font-semibold text-sm sm:text-base">- Alex R., Fitness Enthusiast</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Join the HealthChain Revolution
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-200 text-sm sm:text-base md:text-xl">
                  Take control of your health data today and experience the future of healthcare.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="bg-white text-primary hover:bg-gray-200">Sign Up Now</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/20">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 HealthChain. All rights reserved.</p>
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

