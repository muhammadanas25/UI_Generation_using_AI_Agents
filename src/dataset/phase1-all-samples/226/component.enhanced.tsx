import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"
import { Menu } from 'lucide-react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 text-foreground">
      <header className="container mx-auto py-4 px-4 flex justify-between items-center shadow-md bg-white fixed top-0 left-0 right-0 z-50">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
            <AvatarImage src="/logo.svg" alt="CryptoDonor Logo" />
          </Avatar>
          <span className="text-lg sm:text-xl font-bold text-primary">CryptoDonor</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><a href="#features" className="text-gray-700 hover:text-primary transition-colors">Features</a></li>
            <li><a href="#compare" className="text-gray-700 hover:text-primary transition-colors">Compare</a></li>
            <li><a href="#cta" className="text-gray-700 hover:text-primary transition-colors">Get Started</a></li>
          </ul>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Button variant="ghost">Login</Button>
          <Button>Sign Up</Button>
        </div>
        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#compare" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Compare</a>
              <a href="#cta" className="text-lg font-medium" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
              <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>Login</Button>
              <Button className="w-full" onClick={() => setMobileMenuOpen(false)}>Sign Up</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      <main className="pt-16 sm:pt-20">
        <section className="container mx-auto py-12 sm:py-24 px-4 flex flex-col-reverse md:flex-row items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6">Empower Global Change with Crypto</h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 text-gray-700">CryptoDonor revolutionizes charitable giving through decentralized, transparent, and efficient crypto donations.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform">Start Donating</Button>
              <Button variant="outline" size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform">Learn More</Button>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <img src="/hero-image.svg" alt="CryptoDonor Illustration" className="w-full rounded-lg shadow-lg" />
          </motion.div>
        </section>

        <section id="features" className="bg-white py-12 sm:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-primary">Why Choose CryptoDonor?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
              {[
                { title: "Decentralized", description: "Direct peer-to-peer donations without intermediaries", icon: "/icons/decentralized.svg" },
                { title: "Transparent", description: "All transactions are recorded on the blockchain", icon: "/icons/transparent.svg" },
                { title: "Global Reach", description: "Support causes worldwide without currency barriers", icon: "/icons/global.svg" },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow hover:shadow-xl transition-shadow"
                >
                  <img src={feature.icon} alt={`${feature.title} Icon`} className="h-12 w-12 sm:h-16 sm:w-16 mb-4" />
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl sm:text-2xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="compare" className="py-12 sm:py-24 bg-gradient-to-t from-gray-200 to-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-primary">CryptoDonor vs Gitcoin</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow">
                <thead>
                  <tr>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 bg-gray-100 text-left text-base sm:text-lg font-semibold">Features</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 bg-gray-100 text-left text-base sm:text-lg font-semibold">CryptoDonor</th>
                    <th className="py-3 sm:py-4 px-4 sm:px-6 bg-gray-100 text-left text-base sm:text-lg font-semibold">Gitcoin</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Focus", crypto: "Individual donors & charities", gitcoin: "Open-source software development" },
                    { feature: "Cryptocurrencies", crypto: "Multiple", gitcoin: "Primarily Ethereum-based" },
                    { feature: "Platform Fees", crypto: "Lower", gitcoin: "Higher" },
                    { feature: "Donation Campaigns", crypto: "Customizable", gitcoin: "Fixed" },
                    { feature: "Funding Model", crypto: "Direct donations", gitcoin: "Quadratic funding" },
                  ].map((item, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base text-gray-700">{item.feature}</td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm">{item.crypto}</span>
                      </td>
                      <td className="py-3 sm:py-4 px-4 sm:px-6">
                        <span className="inline-block px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs sm:text-sm">{item.gitcoin}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-white py-12 sm:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center text-primary">What Our Donors Say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
              {[
                { name: "Jane Doe", comment: "CryptoDonor made my donations seamless and transparent. Truly a game-changer!" },
                { name: "John Smith", comment: "I love the decentralized approach. It gives me confidence that my contributions are making a real impact." },
                { name: "Alice Johnson", comment: "The platform is user-friendly and efficient. Highly recommend to anyone looking to donate crypto." },
              ].map((testimonial, index) => (
                <Card key={index} className="p-4 sm:p-6 bg-gray-50 shadow-md hover:shadow-lg transition-shadow">
                  <CardContent>
                    <p className="text-sm sm:text-base text-gray-700 mb-4">"{testimonial.comment}"</p>
                    <div className="flex items-center">
                      <Avatar className="h-8 w-8 sm:h-10 sm:w-10 mr-3 sm:mr-4">
                        <AvatarImage src={`/avatars/avatar${index + 1}.jpg`} alt={testimonial.name} />
                      </Avatar>
                      <span className="font-semibold text-sm sm:text-base text-gray-800">{testimonial.name}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="cta" className="bg-primary text-primary-foreground py-12 sm:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">Join CryptoDonor today and start supporting causes you care about with the power of cryptocurrency.</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform">Create an Account</Button>
              <Button size="lg" className="w-full sm:w-auto hover:scale-105 transition-transform">Contact Us</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-8 sm:py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4 sm:mb-6">
            <a href="#" className="hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932..." /></svg></a>
            <a href="#" className="hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.633 7.997a7.68..." /></svg></a>
            <a href="#" className="hover:text-primary transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0..." /></svg></a>
          </div>
          <p className="text-sm sm:text-base">&copy; 2023 CryptoDonor. All rights reserved.</p>
          <div className="mt-4 space-y-2 sm:space-y-0 sm:space-x-6">
            <a href="#" className="block sm:inline-block text-sm sm:text-base hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="block sm:inline-block text-sm sm:text-base hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="block sm:inline-block text-sm sm:text-base hover:text-primary transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

