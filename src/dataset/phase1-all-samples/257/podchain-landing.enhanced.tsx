import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Database,
  HardDrive,
  Share2,
  Upload,
  Menu,
  X,
  Twitter,
  Linkedin,
  Github,
  PlayCircle,
} from "lucide-react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50 transition-colors duration-300">
        <a className="flex items-center justify-center space-x-2" href="#">
          <HardDrive className="h-6 w-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
          <span className="text-2xl font-bold text-gray-800 dark:text-white">
            PodChain
          </span>
        </a>
        <nav className="hidden md:flex space-x-6">
          <a
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            href="#features"
          >
            Features
          </a>
          <a
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            href="#pricing"
          >
            Pricing
          </a>
          <a
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            href="#about"
          >
            About
          </a>
          <a
            className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            href="#contact"
          >
            Contact
          </a>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 focus:outline-none transition-colors duration-200"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-40 animate-slide-down">
          <nav className="flex flex-col items-center space-y-4 py-4">
            <a
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              href="#about"
            >
              About
            </a>
            <a
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
              href="#contact"
            >
              Contact
            </a>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
              <Button size="sm">Get Started</Button>
            </div>
          </nav>
        </div>
      )}
      <main className="flex-1 mt-20">
        <section className="w-full py-20 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 dark:text-white animate-fade-in-up">
                Welcome to PodChain
              </h1>
              <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up delay-200">
                The decentralized podcast hosting platform powered by IPFS. Host
                your podcasts with true ownership and global distribution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
                <Button size="lg" className="transition-transform transform hover:scale-105">
                  Get Started
                </Button>
                <Button variant="outline" size="lg" className="transition-transform transform hover:scale-105">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fade-in-up">
              Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Database className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4 animate-bounce" />
                  <CardTitle>Decentralized Storage</CardTitle>
                  <CardDescription className="text-center">
                    Store your podcasts on the IPFS network for enhanced security and
                    censorship resistance.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Share2 className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4 animate-bounce" />
                  <CardTitle>Global Distribution</CardTitle>
                  <CardDescription className="text-center">
                    Reach listeners worldwide with efficient content delivery powered
                    by IPFS.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Upload className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4 animate-bounce" />
                  <CardTitle>Easy Upload</CardTitle>
                  <CardDescription className="text-center">
                    Seamlessly upload your podcast episodes with our user-friendly
                    interface.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <HardDrive className="h-8 w-8 text-indigo-600 dark:text-indigo-400 mb-4 animate-bounce" />
                  <CardTitle>Reliable Backup</CardTitle>
                  <CardDescription className="text-center">
                    Ensure your content is always available with our reliable backup
                    solutions.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="featured"
          className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fade-in-up">
              Featured Podcasts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="hover:scale-105 transition-transform duration-300 relative group"
                >
                  <div className="relative">
                    <img
                      alt={`Tech Talk ${i} cover`}
                      className="w-full h-48 object-cover rounded-t-md"
                      src={`/placeholder.svg?height=300&width=600`}
                    />
                    <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 rounded-t-md">
                      <PlayCircle className="h-12 w-12 text-white animate-pulse" />
                    </button>
                  </div>
                  <CardContent>
                    <CardTitle className="text-xl font-semibold">
                      Tech Talk {i}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      The latest in tech news and innovations.
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section
          id="about"
          className="w-full py-16 md:py-24 lg:py-32 bg-white dark:bg-gray-900 transition-colors duration-300"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fade-in-up">
              Why Choose PodChain?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Database className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <CardTitle>Decentralized Storage</CardTitle>
                  <CardDescription className="text-center">
                    Your podcasts are stored on the IPFS network, ensuring data
                    persistence and censorship resistance.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Share2 className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <CardTitle>Global Distribution</CardTitle>
                  <CardDescription className="text-center">
                    Leverage the power of IPFS for efficient content delivery to
                    listeners worldwide.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card className="hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Upload className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4" />
                  <CardTitle>Easy Upload</CardTitle>
                  <CardDescription className="text-center">
                    Simple interface for uploading your podcast episodes directly
                    to the decentralized network.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>
        <section
          id="pricing"
          className="w-full py-16 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-5xl font-bold text-center text-gray-800 dark:text-white mb-12 animate-fade-in-up">
              Pricing
            </h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <Card className="w-full md:w-1/3 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Ideal for beginners
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    $0
                    <span className="text-base font-medium">/month</span>
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>Up to 5 Podcasts</li>
                    <li>Basic Analytics</li>
                    <li>Community Support</li>
                  </ul>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card className="w-full md:w-1/3 p-6 shadow-lg border-2 border-indigo-600 dark:border-indigo-400 hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    For growing podcasters
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    $29
                    <span className="text-base font-medium">/month</span>
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>Unlimited Podcasts</li>
                    <li>Advanced Analytics</li>
                    <li>Priority Support</li>
                  </ul>
                  <Button className="w-full">Choose Plan</Button>
                </CardContent>
              </Card>
              <Card className="w-full md:w-1/3 p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300">
                    Custom solutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
                    Contact Us
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li>Custom Integrations</li>
                    <li>Dedicated Support</li>
                    <li>Scalable Solutions</li>
                  </ul>
                  <Button className="w-full">Get in Touch</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section
          className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-50 to-purple-100 dark:from-gray-800 dark:to-gray-900 transition-colors duration-300"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-white animate-fade-in-up">
                Start Hosting Today
              </h2>
              <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300 animate-fade-in-up delay-200">
                Join the decentralized revolution and take control of your podcast
                distribution.
              </p>
              <Button size="lg" className="transition-transform transform hover:scale-105 animate-fade-in-up delay-400">
                Sign Up Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              © 2024 PodChain. All rights reserved.
            </p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              <a
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                href="#"
              >
                Terms of Service
              </a>
              <a
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                href="#"
              >
                Privacy
              </a>
              <a
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
                href="#"
              >
                Help
              </a>
            </nav>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translate3d(0, 40px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  )
}