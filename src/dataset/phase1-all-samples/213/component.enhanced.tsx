import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ChevronRight, Code, Layers, Zap, Sun, Moon, Twitter, DiscIcon as Discord, GitlabIcon as GitHub, Menu } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-b from-gray-50 dark:from-gray-900 to-secondary min-h-screen transition-colors duration-500">
        <header className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary dark:text-secondary">NFT Forge</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4 items-center">
              <li><a href="#features" className="hover:text-primary dark:hover:text-secondary transition-colors">Features</a></li>
              <li><a href="#chains" className="hover:text-primary dark:hover:text-secondary transition-colors">Supported Chains</a></li>
              <li><Button variant="outline" className="transition-transform transform hover:scale-105">Login</Button></li>
              <li>
                <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                  {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-800" />}
                </button>
              </li>
            </ul>
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2 mr-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-800" />}
            </button>
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-4">
                  <a href="#features" className="text-lg hover:text-primary dark:hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Features</a>
                  <a href="#chains" className="text-lg hover:text-primary dark:hover:text-secondary transition-colors" onClick={() => setIsMenuOpen(false)}>Supported Chains</a>
                  <Button variant="outline" className="transition-transform transform hover:scale-105" onClick={() => setIsMenuOpen(false)}>Login</Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          <section className="flex flex-col md:flex-row items-center justify-between mb-16">
            <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 animate-fade-in">Mint NFTs Across Multiple Blockchains</h2>
              <p className="text-lg md:text-xl mb-8 text-muted-foreground">Create, deploy, and manage your NFTs with ease on any supported blockchain</p>
              <Button size="lg" className="text-base md:text-lg px-6 md:px-8 animate-pulse">
                Start Minting <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image src="/nft-hero.png" alt="NFT Hero" width={500} height={500} className="rounded-lg shadow-lg animate-slide-in w-full max-w-md" />
            </div>
          </section>

          <section id="features" className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Why Choose NFT Forge?</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <FeatureCard
                icon={<Layers className="h-10 w-10 md:h-12 md:w-12 text-primary dark:text-secondary" />}
                title="Cross-Chain Support"
                description="Mint and manage NFTs across multiple blockchains from a single platform"
              />
              <FeatureCard
                icon={<Zap className="h-10 w-10 md:h-12 md:w-12 text-primary dark:text-secondary" />}
                title="Lightning Fast"
                description="Optimized minting process for quick and efficient NFT creation"
              />
              <FeatureCard
                icon={<Code className="h-10 w-10 md:h-12 md:w-12 text-primary dark:text-secondary" />}
                title="Developer Friendly"
                description="Robust APIs and SDKs for seamless integration into your projects"
              />
            </div>
          </section>

          <section id="chains" className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Supported Blockchains</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <ChainLogo name="Ethereum" src="/ethereum.svg" />
              <ChainLogo name="Polygon" src="/polygon.svg" />
              <ChainLogo name="Solana" src="/solana.svg" />
              <ChainLogo name="Binance Smart Chain" src="/bsc.svg" />
              <ChainLogo name="Avalanche" src="/avalanche.svg" />
              <ChainLogo name="Tezos" src="/tezos.svg" />
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Testimonials</h3>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <TestimonialCard
                name="Alice Johnson"
                role="Digital Artist"
                feedback="NFT Forge made it so easy to mint and manage my artwork across multiple blockchains. Highly recommended!"
                avatar="/avatars/alice.jpg"
              />
              <TestimonialCard
                name="Bob Smith"
                role="Blockchain Developer"
                feedback="The developer tools and APIs provided by NFT Forge are top-notch. Integration was seamless."
                avatar="/avatars/bob.jpg"
              />
              <TestimonialCard
                name="Charlie Davis"
                role="Collector"
                feedback="As a collector, I appreciate the fast and secure transactions. NFT Forge is my go-to platform."
                avatar="/avatars/charlie.jpg"
              />
            </div>
          </section>

          <section className="mb-16">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Subscribe to Our Newsletter</h3>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input placeholder="Enter your email" className="w-full sm:w-2/3 md:w-1/3" />
              <Button variant="primary" className="w-full sm:w-auto transform hover:scale-105 transition-transform">Subscribe</Button>
            </div>
          </section>

          <section className="text-center">
            <Card className="max-w-2xl mx-auto shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Ready to Forge Your NFTs?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Join thousands of creators and start minting your cross-chain NFTs today!</p>
                <Button size="lg" className="text-base md:text-lg px-6 md:px-8 animate-bounce">
                  Get Started for Free
                </Button>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://twitter.com" className="hover:text-primary dark:hover:text-secondary transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://discord.com" className="hover:text-primary dark:hover:text-secondary transition-colors">
              <Discord className="h-5 w-5" />
            </a>
            <a href="https://github.com" className="hover:text-primary dark:hover:text-secondary transition-colors">
              <GitHub className="h-5 w-5" />
            </a>
          </div>
          © 2024 NFT Forge. All rights reserved.
        </footer>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <Card className="hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2">
      <CardHeader>
        <div className="mb-4 flex justify-center">
          {icon}
        </div>
        <CardTitle className="text-center text-lg md:text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-center text-sm md:text-base">{description}</p>
      </CardContent>
    </Card>
  )
}

function ChainLogo({ name, src }) {
  return (
    <div className="text-center transform hover:scale-110 transition-transform">
      <Image src={src} alt={name} width={48} height={48} className="mx-auto mb-2 w-12 h-12 md:w-16 md:h-16" />
      <p className="text-xs md:text-sm">{name}</p>
    </div>
  )
}

function TestimonialCard({ name, role, feedback, avatar }) {
  return (
    <Card className="p-4 md:p-6 shadow-md hover:shadow-2xl transition-shadow duration-300">
      <div className="flex items-center mb-4">
        <Image src={avatar} alt={name} width={40} height={40} className="rounded-full mr-4" />
        <div>
          <p className="font-semibold text-sm md:text-base">{name}</p>
          <p className="text-xs md:text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">"{feedback}"</p>
    </Card>
  )
}

