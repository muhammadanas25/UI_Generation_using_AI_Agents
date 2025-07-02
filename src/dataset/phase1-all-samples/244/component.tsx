import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LockIcon, ShieldIcon, UserIcon, FileTextIcon, SearchIcon, RefreshCwIcon, Menu, X } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <FileTextIcon className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">MedChain</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </header>
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center py-4 bg-white shadow-md mt-16">
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4 py-2" href="#">
            Contact
          </Link>
        </nav>
      )}
      <main className="flex-1 mt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Secure Your Medical Records with MedChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 text-sm sm:text-base md:text-xl dark:text-gray-400">
                  MedChain is a decentralized platform that puts you in control of your medical records. Secure,
                  accessible, and always up-to-date.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12">Key Features</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <LockIcon className="w-8 h-8 sm:w-10 sm:h-10 mb-2" />
                  <CardTitle className="text-lg sm:text-xl">Secure Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Your medical records are encrypted and stored on a decentralized network, ensuring maximum security and
                    privacy.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <UserIcon className="w-8 h-8 sm:w-10 sm:h-10 mb-2" />
                  <CardTitle className="text-lg sm:text-xl">Patient Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">You have full control over who can access your medical records, granting and revoking permissions as
                    needed.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <SearchIcon className="w-8 h-8 sm:w-10 sm:h-10 mb-2" />
                  <CardTitle className="text-lg sm:text-xl">Easy Access</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Access your medical records anytime, anywhere, from any device. Share them securely with healthcare
                    providers when needed.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-center mb-8 sm:mb-12">How It Works</h2>
            <div className="grid gap-8 sm:gap-6 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <ShieldIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">1. Secure Your Account</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  Create your MedChain account with strong encryption to ensure your data remains private.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FileTextIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">2. Upload Your Records</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  Easily upload your existing medical records or connect with healthcare providers to import them
                  directly.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <RefreshCwIcon className="w-10 h-10 sm:w-12 sm:h-12 mb-4" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">3. Manage & Share</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                  Control access to your records, keep them updated, and share them securely with healthcare providers as
                  needed.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                  Take Control of Your Medical Records Today
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 text-sm sm:text-base md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Join MedChain and experience the future of secure, accessible, and patient-controlled medical record
                  management.
                </p>
              </div>
              <Button className="w-full sm:w-auto">Get Started with MedChain</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">© 2024 MedChain. All rights reserved.</p>
        <nav className="flex gap-4 sm:gap-6">
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

