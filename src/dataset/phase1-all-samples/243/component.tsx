import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plane, Hotel, Shield, Globe, Zap, Users } from "lucide-react"
import Link from "next/link"

export default function TravelChainLanding() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Plane className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">TravelChain</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Decentralized Travel Booking with TravelChain
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                  Experience the future of travel with blockchain-powered hotel and flight bookings. Secure, transparent, and rewarding.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white text-black" placeholder="Enter your email" type="email" />
                  <Button className="bg-white text-black hover:bg-gray-200" type="submit">
                    Join Waitlist
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  By signing up, you agree to our Terms & Conditions and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Why Choose TravelChain?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">Secure Transactions</h3>
                <p className="text-gray-600">Blockchain-powered bookings ensure your data and payments are always secure.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 mb-4 text-green-600" />
                <h3 className="text-xl font-bold mb-2">Global Accessibility</h3>
                <p className="text-gray-600">Access a worldwide network of accommodations and flights without intermediaries.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-yellow-600" />
                <h3 className="text-xl font-bold mb-2">Instant Rewards</h3>
                <p className="text-gray-600">Earn and redeem TravelTokens for discounts and exclusive perks.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">How TravelChain Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <p className="text-xl">Connect your Web3 wallet</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <p className="text-xl">Search for hotels or flights</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <p className="text-xl">Book with crypto or fiat</p>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <p className="text-xl">Receive instant confirmation and rewards</p>
                </div>
              </div>
              <div className="bg-gray-200 p-6 rounded-lg">
                <div className="aspect-video rounded-md overflow-hidden">
                  <img
                    alt="TravelChain platform demo"
                    className="object-cover w-full h-full"
                    height="300"
                    src="/placeholder.svg?height=300&width=400"
                    width="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">What Our Users Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"TravelChain revolutionized how I book my trips. The transparency and rewards are unmatched!"</p>
                <p className="font-bold">- Alice, Crypto Enthusiast</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"As a frequent traveler, the security of blockchain-based bookings gives me peace of mind."</p>
                <p className="font-bold">- Bob, Business Traveler</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="text-gray-600 mb-4">"The global accessibility of TravelChain has opened up a world of new destinations for me."</p>
                <p className="font-bold">- Charlie, Adventure Seeker</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Transform Your Travel Experience?</h2>
                <p className="mx-auto max-w-[700px] text-blue-100 md:text-xl">
                  Join the TravelChain revolution and enjoy secure, rewarding, and decentralized travel bookings.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1 bg-white text-black" placeholder="Enter your email" type="email" />
                  <Button className="bg-white text-blue-600 hover:bg-blue-50" type="submit">
                    Get Early Access
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 TravelChain. All rights reserved.</p>
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