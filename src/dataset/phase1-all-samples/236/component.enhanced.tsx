import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Database, Lock, Share2, ShieldCheck, Users, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md fixed top-0 left-0 right-0 bg-white z-50">
        <div className="flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <ShieldCheck className="h-8 w-8 text-primary animate-pulse" />
            <span className="ml-2 text-2xl font-bold text-primary">HealthChain</span>
          </Link>
        </div>
        <nav className="ml-auto hidden lg:flex gap-6">
          <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#">
            Contact
          </Link>
        </nav>
        <div className="lg:hidden ml-auto">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-primary transition">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      {isOpen && (
        <nav className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md flex flex-col items-center space-y-4 py-4 animate-slide-down">
          <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#">
            Contact
          </Link>
        </nav>
      )}
      <main className="flex-1 pt-16">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                Secure, Decentralized Healthcare Data Sharing
              </h1>
              <p className="max-w-2xl text-lg md:text-xl text-gray-200">
                HealthChain empowers patients and healthcare providers with blockchain technology for seamless, secure data sharing and improved patient outcomes.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-white text-primary hover:bg-gray-100 transition transform hover:scale-105">
                  Get Started
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10 transition transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition transform hover:scale-105">
                <CardHeader className="flex flex-col items-center">
                  <Database className="h-12 w-12 text-primary mb-4 animate-bounce" />
                  <CardTitle className="text-xl font-semibold">Decentralized Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  Your health data is stored across a network of nodes, ensuring no single point of failure and increased data availability.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:scale-105">
                <CardHeader className="flex flex-col items-center">
                  <Lock className="h-12 w-12 text-primary mb-4 animate-bounce" />
                  <CardTitle className="text-xl font-semibold">End-to-End Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  All data is encrypted and can only be accessed by authorized parties, maintaining the highest level of privacy and security.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:scale-105">
                <CardHeader className="flex flex-col items-center">
                  <Share2 className="h-12 w-12 text-primary mb-4 animate-bounce" />
                  <CardTitle className="text-xl font-semibold">Seamless Data Sharing</CardTitle>
                </CardHeader>
                <CardContent>
                  Easily share your health records with healthcare providers, ensuring they have the most up-to-date information for better care.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:scale-105">
                <CardHeader className="flex flex-col items-center">
                  <Users className="h-12 w-12 text-primary mb-4 animate-bounce" />
                  <CardTitle className="text-xl font-semibold">User Management</CardTitle>
                </CardHeader>
                <CardContent>
                  Manage user permissions and access levels with ease, ensuring that only authorized individuals can view or modify sensitive data.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:scale-105">
                <CardHeader className="flex flex-col items-center">
                  <ShieldCheck className="h-12 w-12 text-primary mb-4 animate-bounce" />
                  <CardTitle className="text-xl font-semibold">Compliance & Security</CardTitle>
                </CardHeader>
                <CardContent>
                  Adheres to global healthcare regulations and standards, providing a secure and compliant platform for data management.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:scale-105">
                <CardHeader className="flex flex-col items-center">
                  <CheckCircle className="h-12 w-12 text-primary mb-4 animate-bounce" />
                  <CardTitle className="text-xl font-semibold">24/7 Support</CardTitle>
                </CardHeader>
                <CardContent>
                  Our dedicated support team is available around the clock to assist you with any issues or inquiries.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 animate-slide-up">
              HealthChain vs. Medicalchain
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="hover:shadow-2xl transition transform hover:scale-105">
                <CardHeader className="bg-primary text-white">
                  <CardTitle>HealthChain</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 animate-pulse" />
                      Fully decentralized storage
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 animate-pulse" />
                      AI-powered health insights
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 animate-pulse" />
                      Integration with wearable devices
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 animate-pulse" />
                      Multi-language support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 animate-pulse" />
                      24/7 customer support
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="hover:shadow-2xl transition transform hover:scale-105">
                <CardHeader className="bg-gray-200 text-gray-800">
                  <CardTitle>Medicalchain</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-center opacity-50">
                      <CheckCircle className="h-5 w-5 mr-2 text-gray-400" />
                      Blockchain-based record keeping
                    </li>
                    <li className="flex items-center opacity-50">
                      <CheckCircle className="h-5 w-5 mr-2 text-gray-400" />
                      Telemedicine services
                    </li>
                    <li className="flex items-center opacity-50">
                      <CheckCircle className="h-5 w-5 mr-2 text-gray-400" />
                      Limited AI capabilities
                    </li>
                    <li className="flex items-center opacity-50">
                      <CheckCircle className="h-5 w-5 mr-2 text-gray-400" />
                      English-only interface
                    </li>
                    <li className="flex items-center opacity-50">
                      <CheckCircle className="h-5 w-5 mr-2 text-gray-400" />
                      Limited support hours
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-12 animate-slide-up">
              What Our Users Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="hover:shadow-xl transition transform hover:scale-105">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-gray-600 mb-4 italic text-sm sm:text-base">
                    "HealthChain has revolutionized how I manage my health data. It's secure, easy to use, and gives me peace of mind."
                  </p>
                  <div className="flex items-center">
                    <img src="/avatars/sarah.jpg" alt="Sarah J." className="h-8 w-8 sm:h-10 sm:w-10 rounded-full mr-3 sm:mr-4" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Sarah J.</p>
                      <p className="text-xs sm:text-sm text-gray-500">Patient</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:scale-105">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-gray-600 mb-4 italic text-sm sm:text-base">
                    "As a healthcare provider, HealthChain has streamlined our processes and improved patient care significantly."
                  </p>
                  <div className="flex items-center">
                    <img src="/avatars/michael.jpg" alt="Dr. Michael T." className="h-8 w-8 sm:h-10 sm:w-10 rounded-full mr-3 sm:mr-4" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Dr. Michael T.</p>
                      <p className="text-xs sm:text-sm text-gray-500">Cardiologist</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition transform hover:scale-105">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-gray-600 mb-4 italic text-sm sm:text-base">
                    "The AI-powered insights have helped me make better decisions about my health. It's like having a personal health assistant."
                  </p>
                  <div className="flex items-center">
                    <img src="/avatars/alex.jpg" alt="Alex R." className="h-8 w-8 sm:h-10 sm:w-10 rounded-full mr-3 sm:mr-4" />
                    <div>
                      <p className="font-semibold text-sm sm:text-base">Alex R.</p>
                      <p className="text-xs sm:text-sm text-gray-500">Fitness Enthusiast</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-6 animate-fade-in">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold">
                Join the HealthChain Revolution
              </h2>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl">
                Take control of your health data today and experience the future of healthcare.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 transition transform hover:scale-105">
                  Sign Up Now
                </Button>
                <Button variant="outline" className="w-full sm:w-auto text-white border-white hover:bg-white/10 transition transform hover:scale-105">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-800 text-gray-300 py-6">
        <div className="container mx-auto px-4 flex flex-col items-center md:flex-row md:justify-between">
          <p className="text-sm">© 2024 HealthChain. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link className="text-sm hover:text-white transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-white transition" href="#">
              Privacy
            </Link>
            <Link className="text-sm hover:text-white transition" href="#">
              Careers
            </Link>
            <Link className="text-sm hover:text-white transition" href="#">
              Blog
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

