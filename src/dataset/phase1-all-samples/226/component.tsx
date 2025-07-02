import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 text-primary"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <span className="text-lg sm:text-xl font-bold">CryptoDonor</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="#features" className="hover:text-primary">Features</a></li>
            <li><a href="#compare" className="hover:text-primary">Compare</a></li>
            <li><a href="#cta" className="hover:text-primary">Get Started</a></li>
          </ul>
        </nav>
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
            </nav>
          </SheetContent>
        </Sheet>
      </header>

      <main>
        <section className="container mx-auto py-12 sm:py-20 px-4 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Empower Global Change with Crypto</h1>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">CryptoDonor revolutionizes charitable giving through decentralized, transparent, and efficient crypto donations.</p>
          <Button size="lg" className="w-full sm:w-auto">Start Donating</Button>
        </section>

        <section id="features" className="bg-secondary py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">Why Choose CryptoDonor?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { title: "Decentralized", description: "Direct peer-to-peer donations without intermediaries" },
                { title: "Transparent", description: "All transactions are recorded on the blockchain" },
                { title: "Global Reach", description: "Support causes worldwide without currency barriers" },
              ].map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="compare" className="py-12 sm:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">CryptoDonor vs Gitcoin</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>CryptoDonor</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Focus on individual donors and charities</li>
                    <li>Support for multiple cryptocurrencies</li>
                    <li>Lower platform fees</li>
                    <li>Customizable donation campaigns</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Gitcoin</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Focus on open-source software development</li>
                    <li>Primarily Ethereum-based</li>
                    <li>Quadratic funding model</li>
                    <li>Community-driven grant programs</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="cta" className="bg-primary text-primary-foreground py-12 sm:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Make a Difference?</h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">Join CryptoDonor today and start supporting causes you care about with the power of cryptocurrency.</p>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">Create an Account</Button>
          </div>
        </section>
      </main>

      <footer className="bg-secondary py-8 sm:py-10">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 CryptoDonor. All rights reserved.</p>
          <div className="mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
            <a href="#" className="block sm:inline-block hover:text-primary">Privacy Policy</a>
            <a href="#" className="block sm:inline-block hover:text-primary">Terms of Service</a>
            <a href="#" className="block sm:inline-block hover:text-primary">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

