import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Cube, Shield, Zap, Globe, ChevronRight, User, Chat, Heart, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
        <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white dark:bg-gray-800 shadow-md">
          <Link className="flex items-center justify-center" href="#">
            <Cube className="h-6 w-6 text-primary dark:text-primary-400" />
            <span className="ml-2 text-2xl font-bold text-primary dark:text-primary-400">DappX</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-200 dark:text-gray-200" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-200 dark:text-gray-200" href="#">
              Ecosystem
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-200 dark:text-gray-200" href="#">
              Developers
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-200 dark:text-gray-200" href="#">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            {darkMode ? <Moon className="h-5 w-5 text-gray-200" /> : <Sun className="h-5 w-5 text-yellow-500" />}
          </div>
        </header>
        <main className="flex-1">
          <section className="w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/10 via-primary/5 to-background">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-6 animate-fadeIn">
                  <div className="space-y-3">
                    <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl text-primary dark:text-primary-300">
                      Explore the Decentralized Web with DappX
                    </h1>
                    <p className="max-w-xl text-muted-foreground md:text-xl">
                      Your gateway to decentralized applications. Secure, fast, and user-friendly.
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button className="inline-flex items-center justify-center transition-transform transform hover:scale-105" size="lg">
                      Get Started
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button className="inline-flex items-center justify-center border border-primary dark:border-primary-400 hover:bg-primary/20 transition" size="lg" variant="outline">
                      Learn More
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] animate-pulse">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-foreground rounded-full blur-3xl opacity-30 animate-rotate" />
                    <img
                      alt="DappX Browser"
                      className="relative rounded-2xl border border-primary/10 bg-background dark:bg-gray-800 object-cover w-full h-full shadow-lg hover:scale-105 transition-transform duration-300"
                      height="400"
                      src="/placeholder.svg?height=400&width=400"
                      style={{
                        aspectRatio: "1 / 1",
                        objectFit: "cover",
                      }}
                      width="400"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-muted/50 dark:bg-gray-800">
            <div className="container px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-primary dark:text-primary-300">Key Features</h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Shield className="h-12 w-12 text-primary dark:text-primary-400" />
                  <h3 className="mt-4 text-xl font-semibold text-center text-primary dark:text-primary-300">Secure Wallet</h3>
                  <p className="mt-2 text-muted-foreground text-center">
                    Built-in wallet with advanced encryption to keep your assets safe.
                  </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Globe className="h-12 w-12 text-primary dark:text-primary-400" />
                  <h3 className="mt-4 text-xl font-semibold text-center text-primary dark:text-primary-300">DApp Aggregator</h3>
                  <p className="mt-2 text-muted-foreground text-center">
                    Access hundreds of decentralized applications in one place.
                  </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Zap className="h-12 w-12 text-primary dark:text-primary-400" />
                  <h3 className="mt-4 text-xl font-semibold text-center text-primary dark:text-primary-300">Fast Transactions</h3>
                  <p className="mt-2 text-muted-foreground text-center">
                    Lightning-fast transactions with optimized gas fees.
                  </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <User className="h-12 w-12 text-primary dark:text-primary-400" />
                  <h3 className="mt-4 text-xl font-semibold text-center text-primary dark:text-primary-300">User Friendly</h3>
                  <p className="mt-2 text-muted-foreground text-center">
                    Intuitive design making blockchain accessible to everyone.
                  </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Chat className="h-12 w-12 text-primary dark:text-primary-400" />
                  <h3 className="mt-4 text-xl font-semibold text-center text-primary dark:text-primary-300">Community Support</h3>
                  <p className="mt-2 text-muted-foreground text-center">
                    Join a vibrant community of developers and users.
                  </p>
                </div>
                <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <Heart className="h-12 w-12 text-primary dark:text-primary-400" />
                  <h3 className="mt-4 text-xl font-semibold text-center text-primary dark:text-primary-300">Loved by Users</h3>
                  <p className="mt-2 text-muted-foreground text-center">
                    Trusted and loved by thousands of users worldwide.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-background via-primary/10 to-background dark:from-gray-900 dark:to-gray-800">
            <div className="container px-4 md:px-6">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="flex flex-col space-y-6 animate-fadeIn">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary dark:text-primary-300">Join the DappX Community</h2>
                  <p className="max-w-xl text-muted-foreground md:text-xl">
                    Be part of the decentralized revolution. Sign up for updates and early access.
                  </p>
                  <form className="flex flex-col sm:flex-row gap-4">
                    <Input className="flex-1" placeholder="Enter your email" type="email" />
                    <Button className="w-full sm:w-auto transition-transform transform hover:scale-105" type="submit">
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground">
                    By subscribing, you agree to our <Link href="#" className="underline">Terms of Service</Link> and <Link href="#" className="underline">Privacy Policy</Link>.
                  </p>
                </div>
                <div className="flex justify-center">
                  <img
                    src="/community.svg"
                    alt="Community Illustration"
                    className="w-full max-w-md rounded-lg shadow-lg animate-float"
                  />
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <p className="text-xs text-muted-foreground">© 2024 DappX. All rights reserved.</p>
          <nav className="flex gap-4 sm:ml-auto">
            <Link className="text-xs hover:underline underline-offset-4 transition-colors duration-200 dark:text-gray-200" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4 transition-colors duration-200 dark:text-gray-200" href="#">
              Privacy
            </Link>
          </nav>
        </footer>
      </div>
      <style jsx global>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-rotate {
          animation: rotate 10s linear infinite;
        }
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
      `}</style>
    </div>
  )
}