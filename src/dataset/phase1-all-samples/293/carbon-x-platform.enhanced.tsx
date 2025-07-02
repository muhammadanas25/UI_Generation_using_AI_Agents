import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Wallet, ArrowLeftRight, Info, TreeDeciduous, Sun, Moon } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function CarbonXPlatform() {
  const [credits, setCredits] = useState(100)
  const [price, setPrice] = useState(25)
  const [theme, setTheme] = useState('light')

  const handleBuy = (amount: number) => {
    setCredits(credits + amount)
  }

  const handleSell = (amount: number) => {
    if (credits >= amount) {
      setCredits(credits - amount)
    }
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    if (theme === 'light') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-50 to-green-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md">
        <Link className="flex items-center space-x-2" href="#">
          <TreeDeciduous className="h-8 w-8 text-green-600 dark:text-green-400 animate-bounce" />
          <span className="text-xl font-bold text-green-700 dark:text-green-300">CarbonX</span>
        </Link>
        <nav className="flex items-center space-x-4 sm:space-x-6">
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#">
            Dashboard
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#">
            Market
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors" href="#">
            About
          </Link>
          <button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {theme === 'light' ? <Moon className="h-5 w-5 text-gray-800" /> : <Sun className="h-5 w-5 text-yellow-400" />}
          </button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <motion.div 
              className="mb-12 text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold text-green-700 dark:text-green-300">Welcome to CarbonX</h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Trade carbon credits easily and contribute to a sustainable future.</p>
              <Image src="/carbon-banner.svg" alt="CarbonX Banner" width={600} height={200} className="mx-auto mt-6" />
            </motion.div>
            <div className="grid gap-6 lg:grid-cols-[1fr_320px] lg:gap-12 xl:grid-cols-[1fr_400px]">
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="mb-4">
                  <TabsTrigger className="px-4 py-2" value="buy">Buy Credits</TabsTrigger>
                  <TabsTrigger className="px-4 py-2" value="sell">Sell Credits</TabsTrigger>
                  <TabsTrigger className="px-4 py-2" value="trade">Trade</TabsTrigger>
                </TabsList>
                <TabsContent value="buy">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="transition-transform"
                  >
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <Wallet className="h-5 w-5 text-green-600 dark:text-green-400" />
                          <span>Buy Carbon Credits</span>
                        </CardTitle>
                        <CardDescription>Purchase carbon credits to offset your emissions.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-1">
                          <Label htmlFor="buy-amount">Amount</Label>
                          <Input id="buy-amount" placeholder="Enter amount to buy" type="number" className="focus:ring-green-500 focus:border-green-500" />
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Current Price:</span>
                          <span className="font-semibold">${price} per credit</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-green-600 hover:bg-green-700 transition-colors" onClick={() => handleBuy(1)}>
                          Buy Credits
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </TabsContent>
                <TabsContent value="sell">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="transition-transform"
                  >
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <ArrowLeftRight className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                          <span>Sell Carbon Credits</span>
                        </CardTitle>
                        <CardDescription>Sell your unused carbon credits.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-1">
                          <Label htmlFor="sell-amount">Amount</Label>
                          <Input id="sell-amount" placeholder="Enter amount to sell" type="number" className="focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <span>Current Price:</span>
                          <span className="font-semibold">${price} per credit</span>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 transition-colors" onClick={() => handleSell(1)}>
                          Sell Credits
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </TabsContent>
                <TabsContent value="trade">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="transition-transform"
                  >
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                          <BarChart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                          <span>Trade Carbon Credits</span>
                        </CardTitle>
                        <CardDescription>Exchange carbon credits with other users.</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-1">
                          <Label htmlFor="trade-amount">Amount</Label>
                          <Input id="trade-amount" placeholder="Enter amount to trade" type="number" className="focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="trade-with">Trade with</Label>
                          <Input id="trade-with" placeholder="Enter user ID" className="focus:ring-purple-500 focus:border-purple-500" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-purple-600 hover:bg-purple-700 transition-colors">
                          Initiate Trade
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                </TabsContent>
              </Tabs>
              <div className="flex flex-col gap-6">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="transition-transform"
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>Your Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between py-2">
                        <span>Available Credits:</span>
                        <span className="font-bold text-green-700 dark:text-green-300">{credits}</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span>Total Value:</span>
                        <span className="font-bold text-green-700 dark:text-green-300">${credits * price}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                        <Info className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="transition-transform"
                >
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>Recent Transactions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center p-2 bg-green-50 dark:bg-gray-800 rounded">
                          <span>Bought 5 credits</span>
                          <span className="flex items-center text-green-600 dark:text-green-400">
                            <Sun className="h-4 w-4 mr-1" />
                            +$125
                          </span>
                        </li>
                        <li className="flex justify-between items-center p-2 bg-red-50 dark:bg-gray-800 rounded">
                          <span>Sold 2 credits</span>
                          <span className="flex items-center text-red-600 dark:text-red-400">
                            <Moon className="h-4 w-4 mr-1" />
                            -$50
                          </span>
                        </li>
                        <li className="flex justify-between items-center p-2 bg-blue-50 dark:bg-gray-800 rounded">
                          <span>Traded 3 credits</span>
                          <span className="flex items-center text-blue-600 dark:text-blue-400">
                            <ArrowLeftRight className="h-4 w-4 mr-1" />
                            ±$75
                          </span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 bg-white dark:bg-gray-900 shadow-t border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CarbonX. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition-colors" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-gray-700 dark:text-gray-300 hover:underline underline-offset-4 transition-colors" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}