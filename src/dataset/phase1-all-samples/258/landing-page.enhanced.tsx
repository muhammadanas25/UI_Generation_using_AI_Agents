import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Car, ChevronRight, Coins, Globe, Share2, Users, Key, Lock, Book, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-16 flex items-center shadow-md bg-white fixed top-0 w-full z-50">
        <Link className="flex items-center justify-center" href="#">
          <Car className="h-8 w-8 text-primary animate-bounce" />
          <span className="ml-2 text-3xl font-extrabold text-primary">RideChain</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#">
            About
          </Link>
          <Link className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors" href="#">
            Contact
          </Link>
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
        </nav>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
              <div className="flex flex-col space-y-6 text-center lg:text-left lg:w-1/2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary animate-fadeInUp">
                  Decentralized Car Sharing with Tokenized Ownership
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Join the future of mobility. Share, earn, and own a piece of the RideChain network with our secure and transparent platform.
                </p>
                <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                  <Button size="lg" className="flex items-center hover:scale-105 transition-transform">
                    Get Started
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="flex items-center hover:scale-105 transition-transform">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="lg:w-1/2 flex justify-center">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96">
                  <Image
                    src="/car-hero.png"
                    alt="RideChain Car"
                    layout="fill"
                    objectFit="contain"
                    className="animate-pulse-slow"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-foreground rounded-full blur-3xl opacity-30 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">Why Choose RideChain?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-muted/10 rounded-xl hover:shadow-lg transition-shadow">
                <Coins className="h-12 w-12 text-primary mb-4 animate-bounce" />
                <h3 className="text-xl font-semibold mb-2">Tokenized Ownership</h3>
                <p className="text-muted-foreground">
                  Own a piece of the network and earn rewards as RideChain grows, providing you with a passive income stream.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-muted/10 rounded-xl hover:shadow-lg transition-shadow">
                <Globe className="h-12 w-12 text-primary mb-4 animate-spin-slow" />
                <h3 className="text-xl font-semibold mb-2">Decentralized Platform</h3>
                <p className="text-muted-foreground">
                  Experience a community-driven and transparent platform with no central authority controlling the network.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-muted/10 rounded-xl hover:shadow-lg transition-shadow">
                <Share2 className="h-12 w-12 text-primary mb-4 animate-pulse" />
                <h3 className="text-xl font-semibold mb-2">Seamless Sharing</h3>
                <p className="text-muted-foreground">
                  Utilize our easy-to-use app for booking and sharing vehicles, making mobility accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4 animate-bounce">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Sign Up & Verify</h3>
                <p className="text-muted-foreground">
                  Create an account and complete the verification process to join the RideChain community.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4 animate-bounce">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Browse & Book</h3>
                <p className="text-muted-foreground">
                  Find available cars in your area and book your ride with just a few taps on our app.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full mb-4 animate-bounce">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Drive & Earn</h3>
                <p className="text-muted-foreground">
                  Enjoy your ride and earn tokens for participating in the RideChain network, rewarding your contribution.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-primary mb-12">What Our Users Say</h2>
            <div className="flex overflow-x-auto space-x-6 pb-4">
              <div className="min-w-[300px] p-6 bg-white rounded-xl shadow-md flex-shrink-0 animate-slideIn">
                <div className="flex items-center mb-4">
                  <Image src="/user1.jpg" alt="User 1" width={50} height={50} className="rounded-full" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Jane Doe</h4>
                    <p className="text-sm text-muted-foreground">CEO, AutoDrive</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "RideChain has revolutionized how we share cars. The tokenized ownership model is innovative and rewarding."
                </p>
                <Star className="h-5 w-5 text-yellow-400 mt-4" />
              </div>
              <div className="min-w-[300px] p-6 bg-white rounded-xl shadow-md flex-shrink-0 animate-slideIn delay-200">
                <div className="flex items-center mb-4">
                  <Image src="/user2.jpg" alt="User 2" width={50} height={50} className="rounded-full" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">John Smith</h4>
                    <p className="text-sm text-muted-foreground">Freelancer</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "The seamless booking process and earning tokens while sharing cars is a game-changer for my daily commute."
                </p>
                <Star className="h-5 w-5 text-yellow-400 mt-4" />
              </div>
              <div className="min-w-[300px] p-6 bg-white rounded-xl shadow-md flex-shrink-0 animate-slideIn delay-400">
                <div className="flex items-center mb-4">
                  <Image src="/user3.jpg" alt="User 3" width={50} height={50} className="rounded-full" />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold">Alice Johnson</h4>
                    <p className="text-sm text-muted-foreground">Entrepreneur</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  "RideChain's decentralized platform ensures transparency and trust, making car sharing safer and more efficient."
                </p>
                <Star className="h-5 w-5 text-yellow-400 mt-4" />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 md:py-24 lg:py-32 bg-primary/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-primary animate-fadeInUp">
                  Join the RideChain Revolution
                </h2>
                <p className="max-w-2xl text-muted-foreground text-lg sm:text-xl">
                  Be part of the future of decentralized mobility. Sign up now to get early access, exclusive rewards, and become a stakeholder in the RideChain network.
                </p>
              </div>
              <div className="w-full max-w-md">
                <form className="flex flex-col sm:flex-row items-center gap-4">
                  <Input className="flex-1" placeholder="Enter your email" type="email" required />
                  <Button type="submit" className="w-full sm:w-auto">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2">
                  By subscribing, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">© 2024 RideChain. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs text-muted-foreground hover:text-primary transition-colors" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-muted-foreground hover:text-primary transition-colors" href="#">
              Privacy
            </Link>
            <Link className="text-xs text-muted-foreground hover:text-primary transition-colors" href="#">
              Careers
            </Link>
            <Link className="text-xs text-muted-foreground hover:text-primary transition-colors" href="#">
              Blog
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}