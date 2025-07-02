import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Code, Layers, Zap, Menu, X } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-gradient-to-b from-background to-secondary min-h-screen">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">NFT Forge</h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-primary transition-colors">Features</a></li>
            <li><a href="#chains" className="hover:text-primary transition-colors">Supported Chains</a></li>
            <li><Button variant="outline">Login</Button></li>
          </ul>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav>
              <ul className="space-y-4">
                <li><a href="#features" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Features</a></li>
                <li><a href="#chains" className="block py-2 hover:text-primary transition-colors" onClick={() => setIsOpen(false)}>Supported Chains</a></li>
                <li><Button className="w-full" onClick={() => setIsOpen(false)}>Login</Button></li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mint NFTs Across Multiple Blockchains</h2>
          <p className="text-lg sm:text-xl mb-8 text-muted-foreground">Create, deploy, and manage your NFTs with ease on any supported blockchain</p>
          <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8">
            Start Minting <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        <section id="features" className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Why Choose NFT Forge?</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <FeatureCard
              icon={<Layers className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />}
              title="Cross-Chain Support"
              description="Mint and manage NFTs across multiple blockchains from a single platform"
            />
            <FeatureCard
              icon={<Zap className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />}
              title="Lightning Fast"
              description="Optimized minting process for quick and efficient NFT creation"
            />
            <FeatureCard
              icon={<Code className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />}
              title="Developer Friendly"
              description="Robust APIs and SDKs for seamless integration into your projects"
            />
          </div>
        </section>

        <section id="chains" className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Supported Blockchains</h3>
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
            <ChainLogo name="Ethereum" src="/placeholder.svg?height=64&width=64" />
            <ChainLogo name="Polygon" src="/placeholder.svg?height=64&width=64" />
            <ChainLogo name="Solana" src="/placeholder.svg?height=64&width=64" />
            <ChainLogo name="Binance Smart Chain" src="/placeholder.svg?height=64&width=64" />
          </div>
        </section>

        <section className="text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">Ready to Forge Your NFTs?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Join thousands of creators and start minting your cross-chain NFTs today!</p>
              <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8">
                Get Started for Free
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        © 2024 NFT Forge. All rights reserved.
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card>
      <CardHeader>
        <div className="mb-4">{icon}</div>
        <CardTitle className="text-lg sm:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm sm:text-base">{description}</p>
      </CardContent>
    </Card>
  )
}

function ChainLogo({ name, src }) {
  return (
    <div className="text-center">
      <img src={src} alt={name} className="w-12 h-12 sm:w-16 sm:h-16 mb-2" />
      <p className="text-xs sm:text-sm">{name}</p>
    </div>
  )
}

