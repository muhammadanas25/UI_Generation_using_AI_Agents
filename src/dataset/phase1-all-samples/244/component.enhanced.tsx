import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LockIcon, ShieldIcon, UserIcon, FileTextIcon, SearchIcon, RefreshCwIcon, MenuIcon, XIcon } from 'lucide-react'
import { motion } from "framer-motion"

const features = [
  { icon: LockIcon, title: "Secure Storage", description: "Your medical records are encrypted and stored on a decentralized network, ensuring maximum security and privacy." },
  { icon: UserIcon, title: "Patient Control", description: "You have full control over who can access your medical records, granting and revoking permissions as needed." },
  { icon: SearchIcon, title: "Easy Access", description: "Access your medical records anytime, anywhere, from any device. Share them securely with healthcare providers when needed." },
  { icon: ShieldIcon, title: "Data Integrity", description: "Ensures that your medical records are tamper-proof and maintain their integrity over time." },
  { icon: RefreshCwIcon, title: "Continuous Updates", description: "Keep your medical records up-to-date with seamless integrations from healthcare providers and apps." },
  { icon: FileTextIcon, title: "Comprehensive Documentation", description: "Store a wide range of medical documents, including prescriptions, lab results, and doctor's notes." },
];

const howItWorks = [
  { icon: ShieldIcon, title: "1. Secure Your Account", description: "Create your MedChain account with strong encryption to ensure your data remains private." },
  { icon: FileTextIcon, title: "2. Upload Your Records", description: "Easily upload your existing medical records or connect with healthcare providers to import them directly." },
  { icon: RefreshCwIcon, title: "3. Manage & Share", description: "Control access to your records, keep them updated, and share them securely with healthcare providers as needed." },
];

const testimonials = [
  { quote: "MedChain has revolutionized the way I manage my medical records. It's secure, easy to use, and incredibly reliable.", name: "Jane Doe", title: "Software Engineer", avatar: "/user1.jpg" },
  { quote: "The level of security and control MedChain offers is unparalleled. I feel confident knowing my medical information is safe.", name: "John Smith", title: "Health Consultant", avatar: "/user2.jpg" },
  { quote: "Managing and sharing my medical records has never been easier. MedChain is a game-changer in healthcare technology.", name: "Alice Johnson", title: "Healthcare Provider", avatar: "/user3.jpg" },
];

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between bg-gradient-to-r from-indigo-500 to-purple-600 shadow-md">
        <Link className="flex items-center justify-center text-white" href="#">
          <FileTextIcon className="h-8 w-8 animate-pulse" />
          <span className="ml-2 text-2xl font-bold">MedChain</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition duration-200" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition duration-200" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition duration-200" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-white hover:underline underline-offset-4 transition duration-200" href="#">
            Contact
          </Link>
        </nav>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <nav className="md:hidden bg-indigo-600 text-white px-4 pb-4 transition-all duration-300">
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="block py-2 text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="container px-4 md:px-6">
            <motion.div
              className="flex flex-col items-center space-y-4 text-center bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 p-6 md:p-8 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-gray-800 dark:text-white">
                Secure Your Medical Records with MedChain
              </h1>
              <p className="mx-auto max-w-[600px] text-gray-600 dark:text-gray-300 text-sm md:text-base lg:text-lg">
                MedChain is a decentralized platform that puts you in control of your medical records. Secure, accessible, and always up-to-date.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105">
                  Get Started
                </Button>
                <Button variant="outline" className="w-full sm:w-auto text-indigo-600 border-indigo-600 hover:bg-indigo-50 transition-transform transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-white">
              Key Features
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <Card key={index} className="transform hover:scale-105 transition-transform duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <feature.icon className="w-12 h-12 mb-4 text-indigo-600" />
                    <CardTitle className="text-xl font-semibold text-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-600 dark:text-gray-300 text-center text-sm">
                    {feature.description}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-gray-800 dark:text-white">
              How It Works
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <step.icon className="w-12 h-12 mb-4 text-indigo-600" />
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-gray-800 dark:text-white">
                  Take Control of Your Medical Records Today
                </h2>
                <p className="mx-auto max-w-2xl text-gray-600 dark:text-gray-300 md:text-lg">
                  Join MedChain and experience the future of secure, accessible, and patient-controlled medical record management.
                </p>
              </motion.div>
              <Button className="bg-indigo-600 hover:bg-indigo-700 transition-transform transform hover:scale-105 text-white">
                Get Started with MedChain
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">
              What Our Users Say
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">
                      {testimonial.quote}
                    </p>
                    <div className="flex items-center">
                      <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                      <div>
                        <p className="text-gray-800 dark:text-white font-semibold">{testimonial.name}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{testimonial.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 px-4 md:px-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:mb-0">© 2024 MedChain. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 transition duration-200" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 text-gray-600 dark:text-gray-400 transition duration-200" href="#">
              Privacy
            </Link>
            <Link className="text-sm hover:text-indigo-600 dark:hover:text-purple-400 transition duration-200" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.242-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.07 5.772.127 4.633.403 3.678 1.357 2.722 2.313 2.446 3.452 2.389 4.732 2.332 6.012 2.319 6.421 2.319 12s.013 6.988.07 8.268c.057 1.28.333 2.419 1.289 3.375.956.956 2.095 1.232 3.375 1.289 1.28.057 1.689.07 8.268.07s6.988-.013 8.268-.07c1.28-.057 2.419-.333 3.375-1.289.956-.956 1.232-2.095 1.289-3.375.057-1.28.07-1.689.07-8.268s-.013-6.988-.07-8.268c-.057-1.28-.333-2.419-1.289-3.375C20.617.403 19.478.127 18.198.07 16.918.013 16.509 0 12 0z" />
                <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
              </svg>
            </Link>
            <Link className="text-sm hover:text-indigo-600 dark:hover:text-purple-400 transition duration-200" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

