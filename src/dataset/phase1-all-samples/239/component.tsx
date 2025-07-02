import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Database, Globe, Server, Shield, Zap } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Database className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">CDNChain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#comparison">
            Comparison
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary to-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Decentralized Content Delivery for the Web3 Era
                </h1>
                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                  CDNChain revolutionizes content delivery with blockchain technology, offering faster, more secure, and
                  censorship-resistant distribution.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-primary hover:bg-zinc-200" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Key Features of CDNChain
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <Globe className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Global Decentralized Network</CardTitle>
                </CardHeader>
                <CardContent>
                  Leverage a worldwide network of nodes for unparalleled content delivery speed and reliability.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Enhanced Security</CardTitle>
                </CardHeader>
                <CardContent>
                  Benefit from blockchain-based security measures, protecting your content from attacks and censorship.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="w-8 h-8 text-primary mb-2" />
                  <CardTitle>Lightning-Fast Delivery</CardTitle>
                </CardHeader>
                <CardContent>
                  Experience ultra-low latency content delivery, powered by our optimized peer-to-peer network.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              How CDNChain Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">1. Content Upload</h3>
                <p className="text-zinc-600">
                  Upload your content to the CDNChain network, where it's split into encrypted chunks and distributed across
                  the network.
                </p>
                <h3 className="text-2xl font-bold">2. Smart Contract Creation</h3>
                <p className="text-zinc-600">
                  A smart contract is created to manage content access, distribution, and node incentives.
                </p>
                <h3 className="text-2xl font-bold">3. Decentralized Delivery</h3>
                <p className="text-zinc-600">
                  Users request content, which is served from the nearest available nodes, ensuring fast and efficient
                  delivery.
                </p>
              </div>
              <div className="flex justify-center">
                <Server className="w-64 h-64 text-primary" />
              </div>
            </div>
          </div>
        </section>
        <section id="comparison" className="w-full py-12 md:py-24 lg:py-32 bg-zinc-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              CDNChain vs. Traditional CDNs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>CDNChain</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>✅ Decentralized infrastructure</p>
                  <p>✅ Censorship-resistant</p>
                  <p>✅ Token-based incentives for node operators</p>
                  <p>✅ Smart contract-managed content delivery</p>
                  <p>✅ Blockchain-level security</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Traditional CDNs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p>❌ Centralized infrastructure</p>
                  <p>❌ Vulnerable to censorship</p>
                  <p>❌ Fixed pricing models</p>
                  <p>❌ Centralized content management</p>
                  <p>❌ Standard web security measures</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32 bg-primary">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white mb-6">
              Join the Decentralized Content Revolution
            </h2>
            <p className="mx-auto max-w-[600px] text-zinc-200 md:text-xl mb-8">
              Experience the future of content delivery with CDNChain. Fast, secure, and censorship-resistant.
            </p>
            <Button className="bg-white text-primary hover:bg-zinc-200" size="lg">
              Get Started Now
            </Button>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-zinc-500">© 2024 CDNChain. All rights reserved.</p>
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