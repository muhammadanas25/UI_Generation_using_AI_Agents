import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { CheckCircle, ArrowRight, LockIcon, BarChart3Icon, ZapIcon, Menu, X } from 'lucide-react'
import Image from "next/image"
import { useState } from "react"

export default function VoteChainLanding() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 transition-colors duration-300">
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white shadow-md fixed top-0 w-full z-50">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <LockIcon className="h-6 w-6 text-primary" />
          <span>VoteChain</span>
        </div>
        <nav className="ml-auto hidden md:flex gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4 transition duration-200" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 transition duration-200" href="#">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 transition duration-200" href="#">
            Pricing
          </a>
          <Button className="ml-4">Get Started</Button>
        </nav>
        <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden ml-auto">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <a className="text-lg font-medium hover:underline underline-offset-4 transition duration-200" href="#" onClick={() => setMenuOpen(false)}>
                Features
              </a>
              <a className="text-lg font-medium hover:underline underline-offset-4 transition duration-200" href="#" onClick={() => setMenuOpen(false)}>
                How It Works
              </a>
              <a className="text-lg font-medium hover:underline underline-offset-4 transition duration-200" href="#" onClick={() => setMenuOpen(false)}>
                Pricing
              </a>
              <Button className="mt-4" onClick={() => setMenuOpen(false)}>Get Started</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-12 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-100">
          <div className="container mx-auto px-4 md:px-6 flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1 space-y-4 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fade-in-up">
                Secure Web3 Voting for the Digital Age
              </h1>
              <p className="mx-auto lg:mx-0 max-w-lg text-gray-600 text-sm sm:text-base md:text-lg dark:text-gray-400">
                VoteChain revolutionizes decision-making with blockchain technology. Transparent, secure, and
                decentralized voting for organizations of all sizes.
              </p>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto transition transform hover:scale-105">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto transition transform hover:scale-105">Learn More</Button>
              </div>
            </div>
            <div className="flex-1 w-full max-w-md lg:max-w-full">
              <Image src="/hero-illustration.svg" alt="Voting Illustration" width={500} height={500} className="w-full h-auto animate-fade-in-right" />
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card className="hover:shadow-xl transform hover:scale-105 transition duration-300">
                <CardHeader className="flex flex-col items-center">
                  <LockIcon className="w-12 h-12 text-primary mb-4 animate-bounce" />
                  <CardTitle>Blockchain Security</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Immutable and transparent voting records secured by blockchain technology.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transform hover:scale-105 transition duration-300">
                <CardHeader className="flex flex-col items-center">
                  <ZapIcon className="w-12 h-12 text-primary mb-4 animate-bounce" />
                  <CardTitle>Instant Results</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Real-time vote counting and result verification for immediate insights.
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transform hover:scale-105 transition duration-300">
                <CardHeader className="flex flex-col items-center">
                  <BarChart3Icon className="w-12 h-12 text-primary mb-4 animate-bounce" />
                  <CardTitle>Advanced Analytics</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  Comprehensive voting data analysis and visualization tools.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12">VoteChain vs Competitors</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
                <thead>
                  <tr>
                    <th className="py-3 px-4 sm:px-6 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">Features</th>
                    <th className="py-3 px-4 sm:px-6 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">VoteChain</th>
                    <th className="py-3 px-4 sm:px-6 bg-gray-100 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">Snapshot</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="hover:bg-gray-50 transition duration-200">
                    <td className="py-2 sm:py-4 px-4 sm:px-6">Blockchain-based security</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6 text-center"><CheckCircle className="text-green-500 mx-auto h-5 w-5" /></td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6 text-center"><X className="text-red-500 mx-auto h-5 w-5" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition duration-200">
                    <td className="py-2 sm:py-4 px-4 sm:px-6">Instant result verification</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6 text-center"><CheckCircle className="text-green-500 mx-auto h-5 w-5" /></td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6 text-center"><X className="text-red-500 mx-auto h-5 w-5" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition duration-200">
                    <td className="py-2 sm:py-4 px-4 sm:px-6">Advanced analytics dashboard</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6 text-center"><CheckCircle className="text-green-500 mx-auto h-5 w-5" /></td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6 text-center"><X className="text-red-500 mx-auto h-5 w-5" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition duration-200">
                    <td className="py-2 sm:py-4 px-4 sm:px-6">Multi-chain support</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6 text-center"><CheckCircle className="text-green-500 mx-auto h-5 w-5" /></td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6 text-center"><X className="text-red-500 mx-auto h-5 w-5" /></td>
                  </tr>
                  <tr className="hover:bg-gray-50 transition duration-200">
                    <td className="py-2 sm:py-4 px-4 sm:px-6">Customizable voting mechanisms</td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6 text-center"><CheckCircle className="text-green-500 mx-auto h-5 w-5" /></td>
                    <td className="py-2 sm:py-4 px-4 sm:px-6 text-center"><X className="text-red-500 mx-auto h-5 w-5" /></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-center mb-8 sm:mb-12">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-xl transition duration-300">
                <div className="rounded-full bg-primary text-primary-foreground w-16 h-16 flex items-center justify-center mb-4 animate-pulse">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Create a Proposal</h3>
                <p className="text-sm sm:text-base text-gray-500">Set up your voting proposal with custom parameters and options.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-xl transition duration-300">
                <div className="rounded-full bg-primary text-primary-foreground w-16 h-16 flex items-center justify-center mb-4 animate-pulse">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Voters Participate</h3>
                <p className="text-sm sm:text-base text-gray-500">Eligible voters cast their votes securely through Web3 wallets.</p>
              </div>
              <div className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow hover:shadow-xl transition duration-300">
                <div className="rounded-full bg-primary text-primary-foreground w-16 h-16 flex items-center justify-center mb-4 animate-pulse">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">Results Verified</h3>
                <p className="text-sm sm:text-base text-gray-500">Votes are tallied in real-time with blockchain-backed verification.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 lg:py-32 bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter animate-fade-in-up">
                  Ready to Revolutionize Your Voting Process?
                </h2>
                <p className="mx-auto max-w-xl text-gray-200 text-sm sm:text-base md:text-lg">
                  Join VoteChain today and experience the future of decentralized decision-making.
                </p>
              </div>
              <Button className="w-full sm:w-auto flex items-center justify-center bg-white text-gray-900 hover:bg-gray-200 transition duration-300">
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white shadow-inner py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-xs text-gray-500 mb-4 sm:mb-0">© 2024 VoteChain. All rights reserved.</p>
            <nav className="flex flex-wrap justify-center sm:justify-end gap-4">
              <a className="text-xs hover:underline underline-offset-4 transition duration-200" href="#">
                Terms of Service
              </a>
              <a className="text-xs hover:underline underline-offset-4 transition duration-200" href="#">
                Privacy Policy
              </a>
              <div className="flex gap-2">
                <a href="#" className="text-gray-500 hover:text-gray-700 transition duration-200">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35C.598 0 0 .597 0 1.333v21.334C0 23.403.597 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.667V1.333C24 .597 23.403 0 22.675 0z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition duration-200">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.205 11.385.6.111.82-.261.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.73.084-.73 1.205.084 1.838 1.235 1.838 1.235 1.07 1.835 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.044.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.12 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .315.216.69.825.57C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-700 transition duration-200">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.012.24 2.466.403a4.92 4.92 0 011.675 1.092 4.92 4.92 0 011.092 1.675c.163.454.347 1.26.403 2.466.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.24 2.012-.403 2.466a4.92 4.92 0 01-1.092 1.675 4.92 4.92 0 01-1.675 1.092c-.454.163-1.26.347-2.466.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.012-.24-2.466-.403a4.92 4.92 0 01-1.675-1.092 4.92 4.92 0 01-1.092-1.675c-.163-.454-.347-1.26-.403-2.466C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.056-1.206.24-2.012.403-2.466a4.92 4.92 0 011.092-1.675 4.92 4.92 0 011.675-1.092c.454-.163 1.26-.347 2.466-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.77.131 4.588.336 3.678.708a6.838 6.838 0 00-2.464 1.62A6.838 6.838 0 00.708 4.92c-.372.91-.577 2.092-.636 3.374C0 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.282.264 2.464.636 3.374a6.838 6.838 0 001.62 2.464 6.838 6.838 0 002.464 1.62c.91.372 2.092.577 3.374.636C8.332 24 8.741 24 12 24s3.668-.013 4.948-.072c1.282-.059 2.464-.264 3.374-.636a6.838 6.838 0 002.464-1.62 6.838 6.838 0 001.62-2.464c.372-.91.577-2.092.636-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.282-.264-2.464-.636-3.374a6.838 6.838 0 00-1.62-2.464A6.838 6.838 0 0019.322.708c-.91-.372-2.092-.577-3.374-.636C15.668 0 15.259 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998z" />
                    <circle cx="18.406" cy="5.594" r="1.44" />
                  </svg>
                </a>
              </div>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

