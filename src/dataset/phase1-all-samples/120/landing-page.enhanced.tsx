import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Clock, Leaf, Recycle, Search, ShoppingCart, Instagram, Facebook, Twitter } from "lucide-react"
import { useState } from "react"
import { Dialog } from "@/components/ui/dialog"

export default function LandingPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-amber-50 overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Image
              src="/placeholder.svg?height=32&width=32"
              width={32}
              height={32}
              alt="RetroRevive logo"
              className="h-8 w-8"
            />
            <span className="ml-2 text-2xl font-bold text-amber-900">RetroRevive</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-amber-900 transition" href="#">
              Shop
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-amber-900 transition" href="#">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-amber-900 transition" href="#">
              Sustainability
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 text-amber-900 transition" href="#">
              Contact
            </Link>
            <Button variant="ghost" className="p-2 text-amber-900 hover:bg-amber-100 rounded-full">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" className="p-2 text-amber-900 hover:bg-amber-100 rounded-full">
              <ShoppingCart className="h-5 w-5" />
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-amber-100 relative">
          <div className="absolute inset-0">
            <Image
              src="/hero-background.jpg"
              alt="Vintage fashion background"
              layout="fill"
              objectFit="cover"
              quality={75}
              className="opacity-20"
            />
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-amber-900 animate-fadeIn">
                  Revive Your Style, Sustainably
                </h1>
                <p className="mx-auto max-w-[700px] text-amber-800 md:text-xl">
                  Discover timeless fashion with a modern twist. Shop our curated collection of vintage clothing and
                  accessories.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-amber-600 text-white hover:bg-amber-700 transition">Shop Now</Button>
                <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-100 transition">
                  Learn More
                </Button>
              </div>
              <div className="mt-6">
                <a href="#featured" className="animate-bounce">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="featured" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-amber-900">
              Featured Styles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition">
                  <Image
                    src={`/featured-${item}.jpg`}
                    alt={`Featured item ${item}`}
                    width={300}
                    height={400}
                    className="object-cover w-full h-[400px] transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button className="bg-white text-amber-900 hover:bg-amber-100 mb-2">View Item</Button>
                    <Button variant="outline" className="border-white text-white hover:bg-amber-100">
                      Add to Cart
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-amber-900">
              Our Commitment to Sustainability
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Recycle className="h-12 w-12 text-amber-600 mb-4 animate-bounce" />
                <h3 className="text-xl font-bold mb-2 text-amber-900">Circular Fashion</h3>
                <p className="text-amber-800">We promote the reuse and recycling of clothing to reduce waste.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Leaf className="h-12 w-12 text-amber-600 mb-4 animate-pulse" />
                <h3 className="text-xl font-bold mb-2 text-amber-900">Eco-Friendly Practices</h3>
                <p className="text-amber-800">Our operations prioritize minimal environmental impact.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Clock className="h-12 w-12 text-amber-600 mb-4 animate-spin-slow" />
                <h3 className="text-xl font-bold mb-2 text-amber-900">Timeless Style</h3>
                <p className="text-amber-800">We curate pieces that stand the test of time, reducing fast fashion.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-amber-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-amber-900">
                  Join the RetroRevive Community
                </h2>
                <p className="mx-auto max-w-[600px] text-amber-800 md:text-xl">
                  Subscribe to our newsletter for exclusive offers, style tips, and sustainability insights.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row sm:space-x-2" onSubmit={(e) => { e.preventDefault(); setIsOpen(true); }}>
                  <input
                    className="flex h-10 w-full rounded-md border border-amber-300 bg-white px-3 py-2 text-sm placeholder:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition"
                    placeholder="Enter your email"
                    type="email"
                    required
                  />
                  <Button type="submit" className="bg-amber-600 text-white hover:bg-amber-700 transition mt-2 sm:mt-0">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-amber-300 bg-white">
        <p className="text-xs text-amber-800">© 2024 RetroRevive. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-xs hover:underline underline-offset-4 text-amber-800 transition" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-amber-800 transition" href="#">
            Privacy
          </Link>
          <div className="flex gap-2">
            <a href="#" className="text-amber-800 hover:text-amber-600 transition">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="text-amber-800 hover:text-amber-600 transition">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="text-amber-800 hover:text-amber-600 transition">
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </footer>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Content className="p-6">
          <Dialog.Title className="text-lg font-bold mb-4">Thank You for Subscribing!</Dialog.Title>
          <Dialog.Description className="mb-4">
            You have successfully subscribed to the RetroRevive newsletter.
          </Dialog.Description>
          <Button onClick={() => setIsOpen(false)}>Close</Button>
        </Dialog.Content>
      </Dialog>
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-pulse {
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}