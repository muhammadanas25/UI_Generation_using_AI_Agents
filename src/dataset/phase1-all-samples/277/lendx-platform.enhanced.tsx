import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Wallet, Users, ArrowRight, Menu, X } from 'lucide-react'
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Image from 'next/image'

export default function Component() {
  const [connectedWallet, setConnectedWallet] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleConnectWallet = () => {
    // In a real application, this would connect to a Web3 wallet
    setConnectedWallet(true)
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-20 flex items-center justify-between bg-primary shadow-md fixed w-full z-50">
        <a className="flex items-center justify-center" href="#">
          <BarChart className="h-8 w-8 text-primary-foreground" />
          <span className="ml-2 text-3xl font-extrabold text-primary-foreground">LendX</span>
        </a>
        <nav className="hidden md:flex gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-200" href="#">
            Pools
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-200" href="#">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4 transition-colors duration-200" href="#">
            About
          </a>
          <Button variant="ghost" className="ml-4" onClick={handleConnectWallet}>
            {connectedWallet ? 'Wallet Connected' : 'Connect Wallet'}
          </Button>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </Button>
          <Dialog open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <DialogContent className="p-4">
              <div className="flex justify-between items-center mb-4">
                <a className="flex items-center justify-center" href="#">
                  <BarChart className="h-6 w-6 text-primary-foreground" />
                  <span className="ml-2 text-2xl font-bold text-primary-foreground">LendX</span>
                </a>
                <Button variant="ghost" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <nav className="flex flex-col gap-4">
                <a className="text-lg font-medium hover:underline underline-offset-4 transition-colors duration-200" href="#">
                  Pools
                </a>
                <a className="text-lg font-medium hover:underline underline-offset-4 transition-colors duration-200" href="#">
                  How It Works
                </a>
                <a className="text-lg font-medium hover:underline underline-offset-4 transition-colors duration-200" href="#">
                  About
                </a>
                <Button variant="ghost" onClick={handleConnectWallet}>
                  {connectedWallet ? 'Wallet Connected' : 'Connect Wallet'}
                </Button>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </header>
      <main className="flex-1 pt-20">
        <section className="w-full py-20 bg-gradient-to-r from-primary to-secondary animate-fade-in">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground drop-shadow-lg">
                Decentralized Micro-Lending Platform
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground opacity-90">
                Empower communities through smart contract-powered lending pools. Lend, borrow, and grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={handleConnectWallet} variant="secondary" className="flex items-center justify-center">
                  <Wallet className="mr-2" />
                  {connectedWallet ? 'Wallet Connected' : 'Connect Wallet'}
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <ArrowRight className="mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <Image
                src="/hero-illustration.svg"
                alt="Decentralized Lending"
                width={500}
                height={500}
                className="animate-slide-in"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Available Lending Pools</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardHeader>
                  <Image src="/icons/business.svg" alt="Small Business Boost" width={40} height={40} />
                  <CardTitle className="mt-4">Small Business Boost</CardTitle>
                  <CardDescription>Support local entrepreneurs</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-2xl font-bold text-primary">5.2% APY</p>
                  <p>Total Pool Size: <span className="font-medium">$50,000</span></p>
                  <p>Min. Contribution: <span className="font-medium">$10</span></p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="primary">Invest Now</Button>
                </CardFooter>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardHeader>
                  <Image src="/icons/education.svg" alt="Education Fund" width={40} height={40} />
                  <CardTitle className="mt-4">Education Fund</CardTitle>
                  <CardDescription>Invest in the future of learning</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-2xl font-bold text-primary">4.8% APY</p>
                  <p>Total Pool Size: <span className="font-medium">$75,000</span></p>
                  <p>Min. Contribution: <span className="font-medium">$25</span></p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="primary">Invest Now</Button>
                </CardFooter>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardHeader>
                  <Image src="/icons/energy.svg" alt="Green Energy Projects" width={40} height={40} />
                  <CardTitle className="mt-4">Green Energy Projects</CardTitle>
                  <CardDescription>Fund sustainable initiatives</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-2xl font-bold text-primary">6.1% APY</p>
                  <p>Total Pool Size: <span className="font-medium">$100,000</span></p>
                  <p>Min. Contribution: <span className="font-medium">$50</span></p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant="primary">Invest Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Your Dashboard</h2>
            <Tabs defaultValue="investments" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid grid-cols-2 bg-primary-foreground rounded-t-md">
                <TabsTrigger value="investments" className="py-2 px-4 text-white font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  Your Investments
                </TabsTrigger>
                <TabsTrigger value="loans" className="py-2 px-4 text-white font-semibold hover:bg-primary hover:text-primary-foreground transition-colors duration-200">
                  Your Loans
                </TabsTrigger>
              </TabsList>
              <TabsContent value="investments" className="p-4 bg-white shadow-md rounded-b-md">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Overview</CardTitle>
                    <CardDescription>Manage your lending portfolio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-muted-foreground">Total Invested</p>
                      <p className="text-xl font-bold">$1,250.00</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-muted-foreground">Current Returns</p>
                      <p className="text-xl font-bold text-green-500">+$78.35 (6.27%)</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="secondary">View Detailed Report</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="loans" className="p-4 bg-white shadow-md rounded-b-md">
                <Card>
                  <CardHeader>
                    <CardTitle>Loan Status</CardTitle>
                    <CardDescription>Manage your borrowed funds</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-muted-foreground">Total Borrowed</p>
                      <p className="text-xl font-bold">$500.00</p>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm font-medium text-muted-foreground">Next Payment Due</p>
                      <p className="text-xl font-bold">$52.50 (April 15, 2023)</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="secondary">Make a Payment</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-16 bg-secondary">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground">Join Our Community</h2>
              <p className="text-lg sm:text-xl text-primary-foreground opacity-90">
                Stay updated with the latest news and updates from LendX.
              </p>
              <Input placeholder="Enter your email" className="w-full max-w-md" />
              <Button variant="primary" className="mt-4">Subscribe</Button>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <Image
                src="/community-illustration.svg"
                alt="Community"
                width={500}
                height={500}
                className="animate-slide-in"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full bg-primary text-primary-foreground shadow-inner">
        <p className="text-xs text-center sm:text-left">© 2023 LendX. All rights reserved.</p>
        <nav className="flex gap-4 sm:ml-auto justify-center sm:justify-start">
          <a className="text-xs hover:underline underline-offset-4 transition-colors duration-200" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4 transition-colors duration-200" href="#">
            Privacy
          </a>
          <a className="text-xs hover:underline underline-offset-4 transition-colors duration-200" href="#">
            Contact
          </a>
        </nav>
      </footer>
    </div>
  )
}