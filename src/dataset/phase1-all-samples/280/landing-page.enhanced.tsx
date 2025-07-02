import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Taxi, Coins, Users, ShieldCheck, ArrowRight, GithubIcon, TwitterIcon, Menu, X } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between bg-primary shadow-md fixed top-0 w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <Taxi className="h-8 w-8 text-primary-foreground animate-pulse" />
          <span className="ml-2 text-3xl font-bold text-primary-foreground">CabChain</span>
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
          <div className="absolute top-16 right-4 bg-primary-foreground rounded-md shadow-lg py-4 px-6 flex flex-col space-y-4 lg:hidden animate-slide-in">
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
            <h1 className="text-4xl font-extrabold text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in">
              Decentralized Ride-Hailing with Tokenized Ownership
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-primary-foreground opacity-90 animate-slide-up">
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
              <Card className="hover:shadow-xl transform hover:scale-105 transition duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Coins className="h-10 w-10 mb-4 text-secondary animate-spin-slow" />
                  <CardTitle className="text-xl">Tokenized Ownership</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Invest in fractionalized vehicle ownership through blockchain tokens.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transform hover:scale-105 transition duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Users className="h-10 w-10 mb-4 text-secondary" />
                  <CardTitle className="text-xl">Decentralized Platform</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Connect riders and drivers directly without intermediaries.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transform hover:scale-105 transition duration-300">
                <CardHeader className="flex flex-col items-center">
                  <ShieldCheck className="h-10 w-10 mb-4 text-secondary" />
                  <CardTitle className="text-xl">Enhanced Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Blockchain-powered identity verification and secure payments.</p>
                </CardContent>
              </Card>
              <Card className="hover:shadow-xl transform hover:scale-105 transition duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Taxi className="h-10 w-10 mb-4 text-secondary" />
                  <CardTitle className="text-xl">Smart Matching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">AI-driven ride matching for optimal routes and reduced wait times.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-muted">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center text-primary-foreground mb-12 animate-fade-in">How It Works</h2>
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-primary-foreground mb-6 animate-pulse">
                  1
                </div>
                <h3 className="text-2xl font-semibold">Sign Up</h3>
                <p className="mt-4 text-muted-foreground">Create an account as a rider or investor.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-primary-foreground mb-6">
                  2
                </div>
                <h3 className="text-2xl font-semibold">Ride or Invest</h3>
                <p className="mt-4 text-muted-foreground">Book rides or purchase vehicle tokens.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-secondary text-primary-foreground mb-6">
                  3
                </div>
                <h3 className="text-2xl font-semibold">Earn Rewards</h3>
                <p className="mt-4 text-muted-foreground">Enjoy rides or earn from your investments.</p>
              </div>
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
          <p className="text-xs text-muted-foreground">© 2024 CabChain. All rights reserved.</p>
          <nav className="flex items-center mt-4 sm:mt-0 space-x-4">
            <Link className="text-xs text-muted-foreground hover:text-secondary transition" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-muted-foreground hover:text-secondary transition" href="#">
              Privacy
            </Link>
            <Link className="text-xs text-muted-foreground hover:text-secondary transition flex items-center" href="#">
              <GithubIcon className="h-4 w-4 mr-1" />
              GitHub
            </Link>
            <Link className="text-xs text-muted-foreground hover:text-secondary transition flex items-center" href="#">
              <TwitterIcon className="h-4 w-4 mr-1" />
              Twitter
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}