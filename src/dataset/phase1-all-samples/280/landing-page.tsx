import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CarTaxiFrontIcon as Taxi, Coins, Users, ShieldCheck, ArrowRight, GithubIcon, TwitterIcon, Menu, X } from 'lucide-react'
import Link from "next/link"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between bg-primary shadow-md fixed top-0 w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <Taxi className="h-6 w-6 lg:h-8 lg:w-8 text-primary-foreground animate-pulse" />
          <span className="ml-2 text-xl lg:text-3xl font-bold text-primary-foreground">CabChain</span>
        </Link>
        <nav className="hidden lg:flex gap-6">
          <Link className="text-sm font-medium text-primary-foreground hover:text-secondary transition" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium text-primary-foreground hover:text-secondary transition" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-primary-foreground hover:text-secondary transition" href="#">
            Invest
          </Link>
          <Link className="text-sm font-medium text-primary-foreground hover:text-secondary transition" href="#">
            About
          </Link>
          <Button variant="secondary" size="sm">
            Get Started
          </Button>
        </nav>
        <div className="lg:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
            {isMenuOpen ? <X className="h-6 w-6 text-primary-foreground" /> : <Menu className="h-6 w-6 text-primary-foreground" />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-primary-foreground py-4 px-6 flex flex-col space-y-4 lg:hidden animate-slide-in">
            <Link className="text-sm font-medium text-primary hover:text-secondary" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium text-primary hover:text-secondary" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium text-primary hover:text-secondary" href="#">
              Invest
            </Link>
            <Link className="text-sm font-medium text-primary hover:text-secondary" href="#">
              About
            </Link>
            <Button variant="secondary" size="sm">
              Get Started
            </Button>
          </div>
        )}
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-primary to-secondary">
          <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground animate-fade-in">
              Decentralized Ride-Hailing with Tokenized Ownership
            </h1>
            <p className="mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-primary-foreground opacity-90 animate-slide-up">
              Experience the future of transportation with CabChain. Ride smart, invest smarter.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button variant="secondary" size="lg" className="animate-bounce">
                Get a Ride
              </Button>
              <Button variant="outline" size="lg">
                Invest Now
              </Button>
            </div>
            <div className="mt-12 flex space-x-4">
              <Link href="#" className="text-2xl text-primary-foreground hover:text-secondary transition">
                <GithubIcon />
              </Link>
              <Link href="#" className="text-2xl text-primary-foreground hover:text-secondary transition">
                <TwitterIcon />
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center text-primary-foreground mb-12 animate-fade-in">Key Features</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: Coins, title: "Tokenized Ownership", description: "Invest in fractionalized vehicle ownership through blockchain tokens." },
                { icon: Users, title: "Decentralized Platform", description: "Connect riders and drivers directly without intermediaries." },
                { icon: ShieldCheck, title: "Enhanced Security", description: "Blockchain-powered identity verification and secure payments." },
                { icon: Taxi, title: "Smart Matching", description: "AI-driven ride matching for optimal routes and reduced wait times." },
              ].map((feature, index) => (
                <Card key={index} className="hover:shadow-xl transform hover:scale-105 transition duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <feature.icon className="h-10 w-10 mb-4 text-secondary" />
                    <CardTitle className="text-xl text-center">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center text-primary-foreground mb-12 animate-fade-in">How It Works</h2>
            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
              {[
                { step: 1, title: "Sign Up", description: "Create an account as a rider or investor." },
                { step: 2, title: "Ride or Invest", description: "Book rides or purchase vehicle tokens." },
                { step: 3, title: "Earn Rewards", description: "Enjoy rides or earn from your investments." },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-primary-foreground mb-6 animate-pulse">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-secondary to-primary">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center text-primary-foreground mb-12 animate-fade-in">Join CabChain Today</h2>
            <div className="flex flex-col items-center justify-center space-y-6">
              <p className="max-w-2xl text-lg text-primary-foreground opacity-90 animate-slide-up">
                Be part of the future of transportation. Sign up now to start riding or investing.
              </p>
              <form className="w-full max-w-md flex flex-col items-center space-y-4 animate-fade-in">
                <div className="w-full flex flex-col sm:flex-row gap-4">
                  <Input placeholder="Enter your email" type="email" className="flex-1" />
                  <Button type="submit" className="w-full sm:w-auto flex items-center justify-center">
                    Join
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-primary-foreground">
                  By signing up, you agree to our{" "}
                  <Link className="underline underline-offset-2 hover:text-secondary transition" href="#">
                    Terms & Conditions
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary-foreground mt-auto">
        <div className="container mx-auto px-4 md:px-6 py-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs text-muted-foreground mb-4 sm:mb-0">© 2024 CabChain. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center sm:justify-end items-center space-x-4">
            <Link className="text-xs text-muted-foreground hover:text-secondary transition mb-2 sm:mb-0" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-muted-foreground hover:text-secondary transition mb-2 sm:mb-0" href="#">
              Privacy
            </Link>
            <Link className="text-xs text-muted-foreground hover:text-secondary transition flex items-center mb-2 sm:mb-0" href="#">
              <GithubIcon className="h-4 w-4 mr-1" />
              GitHub
            </Link>
            <Link className="text-xs text-muted-foreground hover:text-secondary transition flex items-center mb-2 sm:mb-0" href="#">
              <TwitterIcon className="h-4 w-4 mr-1" />
              Twitter
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

