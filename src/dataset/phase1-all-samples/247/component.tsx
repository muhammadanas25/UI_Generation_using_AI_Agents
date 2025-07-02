import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChartIcon, CoinsIcon, WalletIcon } from 'lucide-react'

// Mock data for markets
const markets = [
  { symbol: 'ETH', supplyApy: 2.5, borrowApy: 3.5 },
  { symbol: 'DAI', supplyApy: 5.2, borrowApy: 7.8 },
  { symbol: 'USDC', supplyApy: 4.8, borrowApy: 6.5 },
]

export default function Component() {
  const [activeTab, setActiveTab] = useState('supply')
  const [amount, setAmount] = useState('')

  const handleAction = (action: 'supply' | 'borrow') => {
    console.log(`${action} ${amount} of selected asset`)
    // Here you would integrate with your smart contract to perform the action
    setAmount('')
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">LendChain</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total Supply</CardTitle>
            <CardDescription>Your total supplied assets</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$10,000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Borrow</CardTitle>
            <CardDescription>Your total borrowed assets</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">$5,000</p>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="supply">Supply Market</TabsTrigger>
          <TabsTrigger value="borrow">Borrow Market</TabsTrigger>
        </TabsList>
        <TabsContent value="supply">
          <Card>
            <CardHeader>
              <CardTitle>Supply Assets</CardTitle>
              <CardDescription>Earn interest on your crypto assets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {markets.map((market) => (
                  <div key={market.symbol} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <CoinsIcon className="h-5 w-5" />
                      <span>{market.symbol}</span>
                    </div>
                    <div>{market.supplyApy.toFixed(2)}% APY</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="supplyAmount">Amount</Label>
                  <Input
                    type="number"
                    id="supplyAmount"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <Button className="mt-auto" onClick={() => handleAction('supply')}>Supply</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="borrow">
          <Card>
            <CardHeader>
              <CardTitle>Borrow Assets</CardTitle>
              <CardDescription>Borrow against your supplied collateral</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {markets.map((market) => (
                  <div key={market.symbol} className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <WalletIcon className="h-5 w-5" />
                      <span>{market.symbol}</span>
                    </div>
                    <div>{market.borrowApy.toFixed(2)}% APY</div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full gap-4">
                <div className="grid w-full items-center gap-1.5">
                  <Label htmlFor="borrowAmount">Amount</Label>
                  <Input
                    type="number"
                    id="borrowAmount"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <Button className="mt-auto" onClick={() => handleAction('borrow')}>Borrow</Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Your Assets</CardTitle>
          <CardDescription>Overview of your supplied and borrowed assets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div>
              <h3 className="font-semibold mb-2">Supplied</h3>
              <div className="grid gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <CoinsIcon className="h-5 w-5" />
                    <span>ETH</span>
                  </div>
                  <div>5 ETH ($10,000)</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Borrowed</h3>
              <div className="grid gap-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <WalletIcon className="h-5 w-5" />
                    <span>DAI</span>
                  </div>
                  <div>5000 DAI ($5,000)</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}