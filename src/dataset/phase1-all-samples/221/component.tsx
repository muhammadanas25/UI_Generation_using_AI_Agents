import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, HardDrive, Lock, Share2, Shield, Wifi, Menu } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function DataVaultLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <HardDrive className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">DataVault</span>
        </Link>
        <nav className="hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#pricing">
            Pricing
          </Link>
        </nav>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link className="text-lg font-medium hover:underline underline-offset-4" href="#features" onClick={() => setMobileMenuOpen(false)}>
                Features
              </Link>
              <Link className="text-lg font-medium hover:underline underline-offset-4" href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                How It Works
              </Link>
              <Link className="text-lg font-medium hover:underline underline-offset-4" href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Secure, Decentralized Storage with DataVault
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Store your data securely on the decentralized web. Powered by IPFS technology for ultimate privacy and
                  accessibility.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12">
              Why Choose DataVault?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Card>
                <CardHeader>
                  <Shield className="w-12 h-12 mb-4" />
                  <CardTitle>Decentralized Security</CardTitle>
                </CardHeader>
                <CardContent>
                  Your data is distributed across a network of nodes, eliminating single points of failure and enhancing
                  security.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Wifi className="w-12 h-12 mb-4" />
                  <CardTitle>Always Accessible</CardTitle>
                </CardHeader>
                <CardContent>
                  Access your files from anywhere, anytime. Our IPFS integration ensures your data is always available.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Lock className="w-12 h-12 mb-4" />
                  <CardTitle>End-to-End Encryption</CardTitle>
                </CardHeader>
                <CardContent>
                  Your files are encrypted before being distributed, ensuring only you have access to your data.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12">
              How DataVault Works
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">IPFS Integration</h3>
                <p className="text-gray-500 dark:text-gray-400">
                  DataVault leverages the InterPlanetary File System (IPFS) to store your data across a distributed network.
                  This means your files are broken into smaller pieces, encrypted, and stored on multiple nodes worldwide.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Share2 className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Distributed storage for enhanced reliability</span>
                  </li>
                  <li className="flex items-center">
                    <Database className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Content-addressed for efficient retrieval</span>
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>Immutable and tamper-proof data storage</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-200 dark:bg-gray-700 rounded-lg p-4 sm:p-6 overflow-x-auto">
                <pre className="text-sm whitespace-pre-wrap">
                  {`
1. Upload file to DataVault
2. File is encrypted
3. Encrypted file is split into chunks
4. Chunks are distributed across IPFS network
5. Receive unique content identifier (CID)
6. Use CID to retrieve file from any IPFS node
                  `}
                </pre>
              </div>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 sm:mb-12">
              Simple, Transparent Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For personal use</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$9.99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>100 GB Storage</li>
                    <li>End-to-end encryption</li>
                    <li>IPFS integration</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For power users</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$24.99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li>1 TB Storage</li>
                    <li>Priority support</li>
                    <li>Advanced sharing options</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Choose Plan</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For organizations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li>Unlimited storage</li>
                    <li>Dedicated support</li>
                    <li>Custom integration options</li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Secure Your Data?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join DataVault today and experience the future of decentralized storage.
                </p>
              </div>
              <Button size="lg" className="w-full sm:w-auto">Get Started Now</Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 DataVault. All rights reserved.</p>
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

