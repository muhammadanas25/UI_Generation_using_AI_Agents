import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Wallet, ArrowLeftRight, Info } from 'lucide-react'

export default function CarbonXPlatform() {
  const [credits, setCredits] = useState(100)
  const [price, setPrice] = useState(25)

  const handleBuy = (amount: number) => {
    setCredits(credits + amount)
  }

  const handleSell = (amount: number) => {
    if (credits >= amount) {
      setCredits(credits - amount)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <TreeDeciduous className="h-6 w-6" />
          <span className="sr-only">CarbonX</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Market
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_300px] lg:gap-12 xl:grid-cols-[1fr_400px]">
              <Tabs defaultValue="buy" className="w-full">
                <TabsList>
                  <TabsTrigger value="buy">Buy Credits</TabsTrigger>
                  <TabsTrigger value="sell">Sell Credits</TabsTrigger>
                  <TabsTrigger value="trade">Trade</TabsTrigger>
                </TabsList>
                <TabsContent value="buy">
                  <Card>
                    <CardHeader>
                      <CardTitle>Buy Carbon Credits</CardTitle>
                      <CardDescription>Purchase carbon credits to offset your emissions.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="amount">Amount</Label>
                        <Input id="amount" placeholder="Enter amount to buy" type="number" />
                      </div>
                      <div className="text-sm text-muted-foreground">Current Price: ${price} per credit</div>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={() => handleBuy(1)}>Buy Credits</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="sell">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sell Carbon Credits</CardTitle>
                      <CardDescription>Sell your unused carbon credits.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="amount">Amount</Label>
                        <Input id="amount" placeholder="Enter amount to sell" type="number" />
                      </div>
                      <div className="text-sm text-muted-foreground">Current Price: ${price} per credit</div>
                    </CardContent>
                    <CardFooter>
                      <Button onClick={() => handleSell(1)}>Sell Credits</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                <TabsContent value="trade">
                  <Card>
                    <CardHeader>
                      <CardTitle>Trade Carbon Credits</CardTitle>
                      <CardDescription>Exchange carbon credits with other users.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="trade-amount">Amount</Label>
                        <Input id="trade-amount" placeholder="Enter amount to trade" type="number" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="trade-with">Trade with</Label>
                        <Input id="trade-with" placeholder="Enter user ID" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Initiate Trade</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
              <div className="flex flex-col gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Account</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between py-2">
                      <span>Available Credits:</span>
                      <span className="font-bold">{credits}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span>Total Value:</span>
                      <span className="font-bold">${credits * price}</span>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Transactions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li className="flex justify-between text-sm">
                        <span>Bought 5 credits</span>
                        <span className="text-green-600">+$125</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span>Sold 2 credits</span>
                        <span className="text-red-600">-$50</span>
                      </li>
                      <li className="flex justify-between text-sm">
                        <span>Traded 3 credits</span>
                        <span className="text-blue-600">±$75</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CarbonX. All rights reserved.</p>
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