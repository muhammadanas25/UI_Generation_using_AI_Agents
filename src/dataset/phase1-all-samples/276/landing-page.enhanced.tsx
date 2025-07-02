import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bitcoin, Briefcase, Globe, LucideDollarSign, Shield, Star, Users, Menu, X } from "lucide-react"
import { useState } from "react"
import { Transition } from "@headlessui/react"

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="px-4 lg:px-6 py-4 bg-white shadow-md fixed w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          <Link className="flex items-center" href="#">
            <Bitcoin className="h-8 w-8 text-primary mr-2 animate-bounce" />
            <span className="text-2xl font-extrabold text-primary">GigChain</span>
          </Link>
          <nav className="hidden lg:flex space-x-6">
            <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-gray-700 hover:text-primary transition" href="#">
              Testimonials
            </Link>
            <Button variant="secondary" size="sm" className="ml-4">Get Started</Button>
          </nav>
          <div className="lg:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </button>
          </div>
        </div>
        <Transition
          show={isMobileMenuOpen}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          {(ref) => (
            <div ref={ref} className="lg:hidden mt-4">
              <nav className="flex flex-col space-y-4">
                <Link className="text-gray-700 hover:text-primary transition" href="#">
                  Features
                </Link>
                <Link className="text-gray-700 hover:text-primary transition" href="#">
                  How It Works
                </Link>
                <Link className="text-gray-700 hover:text-primary transition" href="#">
                  Testimonials
                </Link>
                <Button variant="secondary" size="sm">Get Started</Button>
              </nav>
            </div>
          )}
        </Transition>
      </header>
      <main className="flex-1 mt-20">
        <section className="w-full py-20 bg-gradient-to-r from-blue-500 to-indigo-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fadeIn">
              Welcome to GigChain
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn delay-200">
              The decentralized freelance platform where talent meets opportunity, powered by blockchain.
            </p>
            <div className="mt-8 flex justify-center space-x-4 animate-fadeIn delay-400">
              <Button variant="secondary" size="lg" className="hover:scale-105 transition-transform">Find Work</Button>
              <Button variant="outline" size="lg" className="hover:scale-105 transition-transform">Hire Talent</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">Why Choose GigChain?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  <LucideDollarSign className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold">Crypto Payments</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Get paid in various cryptocurrencies, ensuring fast and secure transactions.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  <Globe className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold">Global Opportunities</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Connect with clients and freelancers from around the world without borders.
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-col items-center">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl font-semibold">Secure Contracts</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-gray-600">
                  Smart contracts ensure that both parties are protected throughout the project.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-12">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Briefcase className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">1. Post a Job</h3>
                <p className="text-gray-600">Describe your project and set your budget in cryptocurrency.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Users className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">2. Choose a Freelancer</h3>
                <p className="text-gray-600">Review proposals and select the best fit for your project.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <Bitcoin className="h-12 w-12 text-primary mb-4 animate-pulse" />
                <h3 className="text-xl font-semibold mb-2">3. Get Work Done</h3>
                <p className="text-gray-600">Collaborate and pay securely using smart contracts.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg hover:bg-opacity-20 transition-opacity">
                <CardHeader className="flex flex-col items-center">
                  <Star className="h-6 w-6 text-yellow-400 mb-2" />
                  <CardTitle className="text-xl font-semibold">Amazing Platform</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white">
                  "GigChain has revolutionized how I work. The crypto payments are fast and secure!"
                  <p className="mt-4 font-semibold">- Alice, Freelance Developer</p>
                </CardContent>
              </Card>
              <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg hover:bg-opacity-20 transition-opacity">
                <CardHeader className="flex flex-col items-center">
                  <Star className="h-6 w-6 text-yellow-400 mb-2" />
                  <CardTitle className="text-xl font-semibold">Global Talent Pool</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white">
                  "As a business owner, I've found incredible talent from all over the world on GigChain."
                  <p className="mt-4 font-semibold">- Bob, Startup Founder</p>
                </CardContent>
              </Card>
              <Card className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-lg shadow-lg hover:bg-opacity-20 transition-opacity">
                <CardHeader className="flex flex-col items-center">
                  <Star className="h-6 w-6 text-yellow-400 mb-2" />
                  <CardTitle className="text-xl font-semibold">Secure and Trustworthy</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-white">
                  "The smart contracts give me peace of mind. I know my work and payments are protected."
                  <p className="mt-4 font-semibold">- Charlie, Graphic Designer</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 bg-gray-100">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-gray-800">Join GigChain Today</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're a freelancer looking for opportunities or a business seeking talent, GigChain connects you securely and globally.
            </p>
            <div className="flex justify-center space-x-4">
              <Button variant="secondary" size="lg">Get Started</Button>
              <Button variant="outline" size="lg">Learn More</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow-inner">
        <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© 2024 GigChain. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 sm:mt-0">
            <Link className="text-sm text-gray-600 hover:text-primary transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-600 hover:text-primary transition" href="#">
              Privacy
            </Link>
            <div className="flex space-x-2">
              <a href="#" className="text-gray-600 hover:text-primary transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724c-.951.555-2.005.959-3.127 1.184a4.916 4.916 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.708.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.918 4.918 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.918 4.918 0 004.588 3.417A9.867 9.867 0 010 19.54a13.945 13.945 0 007.548 2.212c9.058 0 14.01-7.507 14.01-14.01 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-primary transition">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.976 1.248 2.243 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.976.975-2.243 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.976-1.248-2.243-1.31-3.608C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608C4.52 2.497 5.787 2.224 7.153 2.163 8.419 2.105 8.799 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.603.392 3.675 1.319 2.749 2.245 2.488 3.417 2.429 4.694 2.37 5.974 2.383 6.383 2.383 12s-.013 6.026-.072 7.306c-.059 1.277-.32 2.449-1.246 3.375C1.392 21.603.131 21.864.072 23.143.013 24.423 0 24.832 0 30s.013 5.577.072 6.857c.059 1.277.32 2.449 1.246 3.375C1.392 34.603 2.554 34.864 3.831 34.923c1.28.059 1.689.072 6.857.072s5.577-.013 6.857-.072c1.277-.059 2.449-.32 3.375-1.246 0 0 .001-.001.001-.001s.001-.001.001-.001c.926-.926 1.187-2.098 1.246-3.375.059-1.28.072-1.689.072-6.857s-.013-5.577-.072-6.857c-.059-1.277-.32-2.449-1.246-3.375C19.449.392 18.277.131 17 .072 15.72.013 15.311 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

function Link({ href, children, ...props }) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  )
}