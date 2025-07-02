import Link from "next/link"
import { ShoppingCart, Menu, Facebook, Twitter, Instagram } from 'lucide-react'
import Image from "next/image";
import { useState } from "react";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    // Add your subscription logic here
    setSubscribed(true);
    setTimeout(() => setSubscribed(false), 5000); // Hide message after 5 seconds
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold text-primary">TinyTots</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-4 sm:space-x-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Shop
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </button>
            <button className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 w-9 md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full bg-cover bg-center py-12 sm:py-20 md:py-32 relative" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container relative z-10 px-4 md:px-6 text-center text-white">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeInUp">
              Welcome to TinyTots
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg md:text-xl lg:text-2xl mb-8 animate-fadeInUp delay-200">
              Discover adorable and high-quality baby products for your little ones.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fadeInUp delay-400">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base sm:text-lg font-semibold text-primary-foreground shadow-lg transition-transform transform hover:scale-105 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Shop Now
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-primary px-6 py-3 text-base sm:text-lg font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-8 sm:mb-12">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              <Link href="#" className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <Image
                  src="/toys.jpg"
                  alt="Baby Toys"
                  className="w-full h-48 sm:h-64 object-cover transition-transform group-hover:scale-110"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Toys</h3>
                </div>
              </Link>
              <Link href="#" className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <Image
                  src="/clothes.jpg"
                  alt="Baby Clothes"
                  className="w-full h-48 sm:h-64 object-cover transition-transform group-hover:scale-110"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Clothes</h3>
                </div>
              </Link>
              <Link href="#" className="relative group overflow-hidden rounded-lg shadow-lg transform hover:scale-105 transition-transform">
                <Image
                  src="/gear.jpg"
                  alt="Baby Gear"
                  className="w-full h-48 sm:h-64 object-cover transition-transform group-hover:scale-110"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">Baby Gear</h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 md:py-24 bg-white dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-4">Join the TinyTots Family</h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
                Subscribe to our newsletter for exclusive offers and parenting tips.
              </p>
              <form onSubmit={handleSubscribe} className="w-full max-w-md flex flex-col sm:flex-row items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 mb-4 sm:mb-0 sm:mr-4 rounded-md border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-semibold rounded-md shadow-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Subscribe
                </button>
              </form>
              {subscribed && (
                <p className="mt-4 text-green-600 dark:text-green-400 animate-fadeIn">Thank you for subscribing!</p>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full bg-gray-100 dark:bg-gray-800 py-8">
        <div className="container px-4 md:px-6 flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            © 2023 TinyTots. All rights reserved.
          </p>
          <nav className="flex flex-wrap justify-center items-center space-x-4">
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              Contact Us
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

