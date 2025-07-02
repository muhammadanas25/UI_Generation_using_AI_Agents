import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChartIcon, CoinsIcon, WalletIcon, InfoIcon, SunIcon, MoonIcon } from 'lucide-react'
import Image from 'next/image'
import { Tooltip } from "@/components/ui/tooltip"
import { motion } from 'framer-motion'

// Mock data for markets
const markets = [
  { symbol: 'ETH', supplyApy: 2.5, borrowApy: 3.5 },
  { symbol: 'DAI', supplyApy: 5.2, borrowApy: 7.8 },
  { symbol: 'USDC', supplyApy: 4.8, borrowApy: 6.5 },
]

export default function Component() {
  const [activeTab, setActiveTab] = useState('supply')
  const [amount, setAmount] = useState('')
  const [theme, setTheme] = useState('light')

  const handleAction = (action: 'supply' | 'borrow') => {
    console.log(`${action} ${amount} of selected asset`)
    // Here you would integrate with your smart contract to perform the action
    setAmount('')
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
    <motion.div 
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="bg-white dark:bg-gray-800 shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="LendChain Logo" width={40} height={40} className="mr-2"/>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">LendChain</h2>
          </div>
          <Button variant="ghost" onClick={toggleTheme} className="p-2">
            {theme === 'light' ? <MoonIcon className="h-5 w-5 text-gray-800" /> : <SunIcon className="h-5 w-5 text-yellow-400" />}
          </Button>
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <motion.h1 
          className="text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to LendChain
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle>Total Supply</CardTitle>
                <CardDescription>Your total supplied assets</CardDescription>
              </div>
              <BarChartIcon className="h-6 w-6 text-blue-500" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">$10,000</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle>Total Borrow</CardTitle>
                <CardDescription>Your total borrowed assets</CardDescription>
              </div>
              <BarChartIcon className="h-6 w-6 text-red-500" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">$5,000</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle>Interest Earned</CardTitle>
                <CardDescription>Total interest from supplies</CardDescription>
              </div>
              <BarChartIcon className="h-6 w-6 text-green-500" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">$250</p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader className="flex items-center justify-between">
              <div>
                <CardTitle>Interest Paid</CardTitle>
                <CardDescription>Total interest from borrows</CardDescription>
              </div>
              <BarChartIcon className="h-6 w-6 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">$175</p>
            </CardContent>
          </Card>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2 bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
            <TabsTrigger value="supply" className={`rounded-lg ${activeTab === 'supply' ? 'bg-white dark:bg-gray-800 shadow' : 'hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
              Supply Market
            </TabsTrigger>
            <TabsTrigger value="borrow" className={`rounded-lg ${activeTab === 'borrow' ? 'bg-white dark:bg-gray-800 shadow' : 'hover:bg-gray-300 dark:hover:bg-gray-600'}`}>
              Borrow Market
            </TabsTrigger>
          </TabsList>
          <TabsContent value="supply" className="mt-4">
            <Card className="transition-transform transform hover:-translate-y-1">
              <CardHeader className="flex items-center justify-between">
                <div>
                  <CardTitle>Supply Assets</CardTitle>
                  <CardDescription>Earn interest on your crypto assets</CardDescription>
                </div>
                <InfoIcon className="h-5 w-5 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {markets.map((market) => (
                    <motion.div 
                      key={market.symbol} 
                      className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="flex items-center gap-2">
                        <CoinsIcon className="h-5 w-5 text-blue-500" />
                        <span className="font-medium">{market.symbol}</span>
                      </div>
                      <Tooltip content={`${market.supplyApy}% Annual Percentage Yield`}>
                        <div className="text-sm text-gray-700 dark:text-gray-300">{market.supplyApy.toFixed(2)}% APY</div>
                      </Tooltip>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col md:flex-row w-full gap-4">
                  <div className="w-full">
                    <Label htmlFor="supplyAmount">Amount</Label>
                    <Input
                      type="number"
                      id="supplyAmount"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button 
                    onClick={() => handleAction('supply')} 
                    disabled={!amount}
                    className="mt-4 md:mt-0 transition-transform transform hover:scale-105"
                  >
                    Supply
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="borrow" className="mt-4">
            <Card className="transition-transform transform hover:-translate-y-1">
              <CardHeader className="flex items-center justify-between">
                <div>
                  <CardTitle>Borrow Assets</CardTitle>
                  <CardDescription>Borrow against your supplied collateral</CardDescription>
                </div>
                <InfoIcon className="h-5 w-5 text-gray-500" />
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {markets.map((market) => (
                    <motion.div 
                      key={market.symbol} 
                      className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="flex items-center gap-2">
                        <WalletIcon className="h-5 w-5 text-red-500" />
                        <span className="font-medium">{market.symbol}</span>
                      </div>
                      <Tooltip content={`${market.borrowApy}% Annual Percentage Yield`}>
                        <div className="text-sm text-gray-700 dark:text-gray-300">{market.borrowApy.toFixed(2)}% APY</div>
                      </Tooltip>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex flex-col md:flex-row w-full gap-4">
                  <div className="w-full">
                    <Label htmlFor="borrowAmount">Amount</Label>
                    <Input
                      type="number"
                      id="borrowAmount"
                      placeholder="Enter amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <Button 
                    onClick={() => handleAction('borrow')} 
                    disabled={!amount}
                    className="mt-4 md:mt-0 transition-transform transform hover:scale-105"
                  >
                    Borrow
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <Card className="hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="flex items-center justify-between">
            <div>
              <CardTitle>Your Assets</CardTitle>
              <CardDescription>Overview of your supplied and borrowed assets</CardDescription>
            </div>
            <InfoIcon className="h-5 w-5 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <CoinsIcon className="h-5 w-5 mr-1 text-green-500" />
                  Supplied
                </h3>
                <div className="space-y-2">
                  <motion.div 
                    className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <CoinsIcon className="h-5 w-5 text-blue-500" />
                      <span>ETH</span>
                    </div>
                    <div className="font-medium">5 ETH ($10,000)</div>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <CoinsIcon className="h-5 w-5 text-green-500" />
                      <span>DAI</span>
                    </div>
                    <div className="font-medium">1000 DAI ($1,000)</div>
                  </motion.div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 flex items-center">
                  <WalletIcon className="h-5 w-5 mr-1 text-red-500" />
                  Borrowed
                </h3>
                <div className="space-y-2">
                  <motion.div 
                    className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <WalletIcon className="h-5 w-5 text-red-500" />
                      <span>DAI</span>
                    </div>
                    <div className="font-medium">5000 DAI ($5,000)</div>
                  </motion.div>
                  <motion.div 
                    className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2">
                      <WalletIcon className="h-5 w-5 text-yellow-500" />
                      <span>USDC</span>
                    </div>
                    <div className="font-medium">3000 USDC ($3,000)</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}