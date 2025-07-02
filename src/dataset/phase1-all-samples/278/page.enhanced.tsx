import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Coins, ShieldCheck, Zap, Users, ArrowRight, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <header className="px-4 lg:px-6 h-20 flex items-center justify-between shadow-md fixed w-full bg-white dark:bg-gray-900 z-50 transition-colors duration-500">
          <Link className="flex items-center justify-center" href="#">
            <Coins className="h-8 w-8 text-primary" />
            <span className="ml-2 text-xl font-extrabold text-primary">LoyalChain</span>
          </Link>
          <nav className="flex items-center space-x-4 sm:space-x-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300" href="#">
              How It Works
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-300" href="#">
              Partners
            </Link>
            <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </nav>
        </header>
        <main className="flex-1 pt-20">
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 transition-colors duration-500">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <Image src="/loyalchain-banner.png" alt="LoyalChain Banner" width={300} height={150} className="animate-fade-in" />
                <div className="space-y-4">
                  <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 dark:text-white transition-colors duration-500">
                    Revolutionize Customer Loyalty with LoyalChain
                  </h1>
                  <p className="mx-auto max-w-2xl text-gray-600 md:text-xl dark:text-gray-300 transition-colors duration-500">
                    Empower your business with blockchain-based loyalty tokens. Reward customers, increase engagement, and build lasting relationships.
                  </p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="transform hover:scale-105 transition-transform duration-300">Get Started</Button>
                  <Button variant="outline" className="transform hover:scale-105 transition-transform duration-300">Learn More</Button>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
            <div className="container px-4 md:px-6">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-gray-800 dark:text-white transition-colors duration-500">Key Features</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <ShieldCheck className="w-12 h-12 mb-4 text-primary" />
                    <CardTitle>Secure & Transparent</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Blockchain technology ensures your loyalty program is secure, transparent, and tamper-proof.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <Zap className="w-12 h-12 mb-4 text-primary" />
                    <CardTitle>Instant Rewards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Customers receive tokens instantly, providing immediate gratification and encouraging repeat business.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <Users className="w-12 h-12 mb-4 text-primary" />
                    <CardTitle>Cross-Platform Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Easily integrate with existing systems and partner with other businesses to expand your loyalty network.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <Image src="/analytics.svg" alt="Analytics" className="w-12 h-12 mb-4 text-primary" width={48} height={48} />
                    <CardTitle>Advanced Analytics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Gain insights into customer behavior and program performance with our comprehensive analytics tools.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <Image src="/mobile-app.svg" alt="Mobile App" className="w-12 h-12 mb-4 text-primary" width={48} height={48} />
                    <CardTitle>Mobile Friendly</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Our platform is optimized for mobile devices, ensuring a seamless experience for your customers on the go.
                    </CardDescription>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                  <CardHeader className="flex flex-col items-center">
                    <Image src="/security.svg" alt="Security" className="w-12 h-12 mb-4 text-primary" width={48} height={48} />
                    <CardTitle>Enhanced Security</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 dark:text-gray-300">
                      Protect your data with our top-tier security measures, ensuring peace of mind for both you and your customers.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-gray-800 dark:text-white transition-colors duration-500">How It Works</h2>
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white text-3xl font-bold mb-6 animate-bounce">
                    1
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white transition-colors duration-500">Customer Purchase</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Customers make a purchase at your business or through your platform, earning loyalty tokens instantly.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white text-3xl font-bold mb-6 animate-bounce delay-200">
                    2
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white transition-colors duration-500">Token Issuance</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    LoyalChain automatically issues loyalty tokens to the customer's digital wallet, ensuring secure and transparent tracking.
                  </p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-white text-3xl font-bold mb-6 animate-bounce delay-400">
                    3
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-white transition-colors duration-500">Redeem & Repeat</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Customers can redeem tokens for rewards, discounts, or exclusive offers, encouraging repeat business and loyalty.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
            <div className="container px-4 md:px-6">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-gray-800 dark:text-white transition-colors duration-500">Testimonials</h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="p-6 bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">"LoyalChain has transformed our customer loyalty program. The blockchain integration is seamless and our customers love the instant rewards."</p>
                    <div className="flex items-center">
                      <Image src="/avatar1.jpg" alt="Avatar" className="rounded-full mr-4" width={40} height={40} />
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Jane Doe</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">CEO, RetailCorp</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6 bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">"The analytics dashboard provides us with invaluable insights into customer behavior. Highly recommend LoyalChain!"</p>
                    <div className="flex items-center">
                      <Image src="/avatar2.jpg" alt="Avatar" className="rounded-full mr-4" width={40} height={40} />
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">John Smith</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Marketing Manager, Foodies</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="p-6 bg-white dark:bg-gray-700 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">"Integrating LoyalChain with our existing systems was a breeze. The support team is fantastic!"</p>
                    <div className="flex items-center">
                      <Image src="/avatar3.jpg" alt="Avatar" className="rounded-full mr-4" width={40} height={40} />
                      <div>
                        <p className="font-semibold text-gray-800 dark:text-white">Emily Clark</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">CTO, TechSolutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32">
            <div className="container px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="space-y-4">
                  <h2 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-800 dark:text-white transition-colors duration-500">
                    Ready to Transform Your Loyalty Program?
                  </h2>
                  <p className="mx-auto max-w-2xl text-gray-600 md:text-xl dark:text-gray-300 transition-colors duration-500">
                    Join LoyalChain today and start rewarding your customers with blockchain-powered loyalty tokens.
                  </p>
                </div>
                <Button className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-300">
                  Get Started Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>
          <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
            <div className="container px-4 md:px-6">
              <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-gray-800 dark:text-white transition-colors duration-500">Subscribe to Our Newsletter</h2>
              <div className="flex flex-col items-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full max-w-md px-4 py-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                />
                <Button className="w-full max-w-md">Subscribe</Button>
              </div>
            </div>
          </section>
        </main>
        <footer className="flex flex-col gap-6 sm:flex-row py-10 w-full shrink-0 items-center px-4 md:px-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-500">
          <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 LoyalChain. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm hover:underline underline-offset-4 transition-colors duration-300 text-gray-500 dark:text-gray-400" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 transition-colors duration-300 text-gray-500 dark:text-gray-400" href="#">
              Privacy
            </Link>
            <Link className="text-sm hover:underline underline-offset-4 transition-colors duration-300 text-gray-500 dark:text-gray-400" href="#">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="#" aria-label="Facebook">
              <Image src="/facebook.svg" alt="Facebook" width={24} height={24} />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Image src="/twitter.svg" alt="Twitter" width={24} height={24} />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Image src="/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}