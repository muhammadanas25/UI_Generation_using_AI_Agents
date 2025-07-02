import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Wallet, Users, ArrowRight } from 'lucide-react'

export default function Component() {
  const [connectedWallet, setConnectedWallet] = useState(false)

  const handleConnectWallet = () => {
    // In a real application, this would connect to a Web3 wallet
    setConnectedWallet(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a className="flex items-center justify-center" href="#">
          <BarChart className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">LendX</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pools
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            How It Works
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-primary-foreground">
                  Decentralized Micro-Lending Platform
                </h1>
                <p className="mx-auto max-w-[700px] text-primary-foreground md:text-xl">
                  Empower communities through smart contract-powered lending pools. Lend, borrow, and grow together.
                </p>
              </div>
              <div className="space-x-4">
                <Button onClick={handleConnectWallet} variant="secondary">
                  {connectedWallet ? 'Wallet Connected' : 'Connect Wallet'}
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Available Lending Pools</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Small Business Boost</CardTitle>
                  <CardDescription>Support local entrepreneurs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">5.2% APY</p>
                  <p>Total Pool Size: $50,000</p>
                  <p>Min. Contribution: $10</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Invest Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Education Fund</CardTitle>
                  <CardDescription>Invest in the future of learning</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">4.8% APY</p>
                  <p>Total Pool Size: $75,000</p>
                  <p>Min. Contribution: $25</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Invest Now</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Green Energy Projects</CardTitle>
                  <CardDescription>Fund sustainable initiatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">6.1% APY</p>
                  <p>Total Pool Size: $100,000</p>
                  <p>Min. Contribution: $50</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Invest Now</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">Your Dashboard</h2>
            <Tabs defaultValue="investments" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="investments">Your Investments</TabsTrigger>
                <TabsTrigger value="loans">Your Loans</TabsTrigger>
              </TabsList>
              <TabsContent value="investments">
                <Card>
                  <CardHeader>
                    <CardTitle>Investment Overview</CardTitle>
                    <CardDescription>Manage your lending portfolio</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Total Invested</p>
                      <p className="text-2xl font-bold">$1,250.00</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Current Returns</p>
                      <p className="text-xl font-bold text-green-500">+$78.35 (6.27%)</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">View Detailed Report</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="loans">
                <Card>
                  <CardHeader>
                    <CardTitle>Loan Status</CardTitle>
                    <CardDescription>Manage your borrowed funds</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Total Borrowed</p>
                      <p className="text-2xl font-bold">$500.00</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">Next Payment Due</p>
                      <p className="text-xl font-bold">$52.50 (April 15, 2023)</p>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Make a Payment</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 LendX. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}