import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Rocket, Shield, Zap, BarChart3, Users, Menu, X, ArrowRight, Download } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function StartTokenLanding() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center" href="#">
            <Rocket className="h-8 w-8 text-primary animate-bounce" />
            <span className="ml-2 text-2xl font-bold text-primary">StartToken</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Tokens
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              About
            </Link>
            <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition" href="#">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex gap-4">
            <Button variant="ghost" className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download
            </Button>
            <Button>Login</Button>
          </div>
          <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden bg-white dark:bg-gray-900 px-4 pb-4 shadow-lg">
            <Link className="block py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition" href="#">
              Features
            </Link>
            <Link className="block py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition" href="#">
              Tokens
            </Link>
            <Link className="block py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition" href="#">
              About
            </Link>
            <Link className="block py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition" href="#">
              Contact
            </Link>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="ghost" className="w-full flex items-center justify-center gap-2">
                <Download className="h-4 w-4" />
                Download
              </Button>
              <Button className="w-full">Login</Button>
            </div>
          </nav>
        )}
      </header>
      <main className="flex-1 mt-16">
        <section className="w-full py-20 bg-cover bg-center" style={{ backgroundImage: 'url("/hero-background.jpg")' }}>
          <div className="bg-black bg-opacity-50 py-20">
            <div className="container mx-auto px-4 lg:px-6 text-center text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 animate-fadeInDown">Launch Your Token with Confidence</h1>
              <p className="text-lg md:text-2xl mb-8 max-w-2xl mx-auto">
                StartToken provides a secure and efficient platform for token sales and ICOs. Start your journey to a successful launch today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button className="px-6 py-3 text-lg shadow-lg hover:scale-105 transition-transform">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="px-6 py-3 text-lg shadow-lg hover:scale-105 transition-transform">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Choose StartToken?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                  <Shield className="h-12 w-12 text-primary animate-pulse" />
                  <h3 className="text-xl font-semibold">Secure Platform</h3>
                  <p className="text-gray-600 dark:text-gray-400">State-of-the-art security measures to protect your tokens and investors.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                  <Zap className="h-12 w-12 text-primary animate-bounce" />
                  <h3 className="text-xl font-semibold">Fast Launches</h3>
                  <p className="text-gray-600 dark:text-gray-400">Quick and efficient token launch process to get your project off the ground.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                  <BarChart3 className="h-12 w-12 text-primary rotate-12" />
                  <h3 className="text-xl font-semibold">Analytics Dashboard</h3>
                  <p className="text-gray-600 dark:text-gray-400">Comprehensive analytics to track your token's performance and investor engagement.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transition-shadow">
                <CardContent className="flex flex-col items-center text-center p-6 space-y-4">
                  <Users className="h-12 w-12 text-primary scale-125" />
                  <h3 className="text-xl font-semibold">Community Building</h3>
                  <p className="text-gray-600 dark:text-gray-400">Tools and support to help you build and engage your token community.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white dark:bg-gray-900" id="featured-tokens">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Featured Tokens</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i} className="hover:shadow-2xl transition-shadow">
                  <CardContent className="p-6 flex flex-col">
                    <div className="flex items-center mb-4">
                      <Image src={`/token-${i}.png`} alt={`Token ${i}`} width={48} height={48} className="rounded-full" />
                      <div className="ml-4">
                        <h3 className="text-xl font-semibold">Token {i}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">ICO Ends in {7 - i} days</p>
                      </div>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 flex-1">
                      A brief description of Token {i} and its unique value proposition. Invest early and join the community.
                    </p>
                    <Button className="mt-4 self-start">View Details <ArrowRight className="ml-2 h-5 w-5" /></Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Create Your Token</h3>
                <p className="text-gray-600 dark:text-gray-400">Define your token's parameters and set up your project on StartToken.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Launch Your ICO</h3>
                <p className="text-gray-600 dark:text-gray-400">Set your ICO terms and launch your token sale to the public.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 hover:scale-105 transition-transform">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white text-2xl mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Manage & Grow</h3>
                <p className="text-gray-600 dark:text-gray-400">Use our tools to manage your token and grow your community post-launch.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-gradient-to-r from-primary to-secondary text-white">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Token?</h2>
            <p className="mb-8 max-w-2xl mx-auto">Join StartToken today and take the first step towards a successful token launch.</p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Input className="w-full sm:w-auto max-w-md" placeholder="Enter your email" type="email" />
              <Button type="submit" className="px-6 py-3">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </form>
            <p className="mt-4 text-sm">By signing up, you agree to our <Link className="underline underline-offset-2" href="#">Terms & Conditions</Link></p>
          </div>
        </section>
        <section className="w-full py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 lg:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Amazing platform!', 'Secured my investment.', 'Easy to use and reliable.'].map((testimonial, index) => (
                <Card key={index} className="p-6 hover:shadow-2xl transition-shadow">
                  <CardContent className="flex flex-col items-center text-center space-y-4">
                    <Image src={`/user-${index + 1}.jpg`} alt={`User ${index + 1}`} width={64} height={64} className="rounded-full" />
                    <p className="text-gray-600 dark:text-gray-400">"{testimonial}"</p>
                    <h4 className="text-lg font-semibold">User {index + 1}</h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 lg:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 StartToken. All rights reserved.</p>
          <nav className="flex gap-4 mt-2 sm:mt-0">
            <Link className="text-sm text-gray-500 dark:text-gray-400 hover:underline underline-offset-4 transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-500 dark:text-gray-400 hover:underline underline-offset-4 transition" href="#">
              Privacy
            </Link>
            <Link className="text-sm text-gray-500 dark:text-gray-400 hover:underline underline-offset-4 transition" href="#">
              Help
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}