import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, HardDrive, Share2, Upload, Menu } from 'lucide-react'
import { useState } from "react"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <a className="flex items-center justify-center" href="#">
          <HardDrive className="h-6 w-6" />
          <span className="ml-2 text-xl sm:text-2xl font-bold">PodChain</span>
        </a>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <Menu />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-14 lg:top-0 left-0 right-0 bg-white dark:bg-gray-800 lg:bg-transparent z-50 shadow-md lg:shadow-none p-4 lg:p-0 gap-4 lg:ml-auto`}>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to PodChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  The decentralized podcast hosting platform powered by IPFS. Host your podcasts with true ownership and
                  global distribution.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="w-full sm:w-auto">Get Started</Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Featured Podcasts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>Tech Talk {i}</CardTitle>
                    <CardDescription>The latest in tech news and innovations</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      alt={`Tech Talk ${i} cover`}
                      className="w-full h-48 object-cover rounded-md"
                      height="200"
                      src={`/placeholder.svg?height=200&width=400`}
                      style={{
                        aspectRatio: "400/200",
                        objectFit: "cover",
                      }}
                      width="400"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4">Why Choose PodChain?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <Database className="w-10 h-10 mb-2" />
                  <CardTitle>Decentralized Storage</CardTitle>
                </CardHeader>
                <CardContent>
                  Your podcasts are stored on the IPFS network, ensuring data persistence and censorship resistance.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Share2 className="w-10 h-10 mb-2" />
                  <CardTitle>Global Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  Leverage the power of IPFS for efficient content delivery to listeners worldwide.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Upload className="w-10 h-10 mb-2" />
                  <CardTitle>Easy Upload</CardTitle>
                </CardHeader>
                <CardContent>
                  Simple interface for uploading your podcast episodes directly to the decentralized network.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl">Start Hosting Today</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join the decentralized revolution and take control of your podcast distribution.
                </p>
              </div>
              <div>
                <Button size="lg" className="w-full sm:w-auto">Sign Up Now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 PodChain. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}

