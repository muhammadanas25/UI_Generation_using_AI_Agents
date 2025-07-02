import { ArrowDownIcon, ArrowUpIcon } from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

interface Transaction {
  id: string
  type: "buy" | "sell"
  amount: number
  price: number
  date: string
}

interface TokenCardProps {
  name: string
  symbol: string
  iconUrl: string
  holdings: number
  price: number
  priceChange: number
  transactions: Transaction[]
}

export default function TokenCard({
  name,
  symbol,
  iconUrl,
  holdings,
  price,
  priceChange,
  transactions,
}: TokenCardProps) {
  const [timeFrame, setTimeFrame] = useState<"1h" | "24h" | "7d">("24h")

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Avatar className="h-9 w-9">
            <AvatarImage src={iconUrl} alt={name} />
            <AvatarFallback>{symbol.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{symbol.toUpperCase()}</CardDescription>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold">${price.toFixed(2)}</div>
          <div className={priceChange >= 0 ? "text-green-600" : "text-red-600"}>
            {priceChange >= 0 ? <ArrowUpIcon className="inline h-4 w-4" /> : <ArrowDownIcon className="inline h-4 w-4" />}
            {Math.abs(priceChange).toFixed(2)}%
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mt-2 flex flex-col space-y-2">
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Your holdings:</span>
            <span className="font-medium">
              {holdings.toFixed(4)} {symbol.toUpperCase()}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-muted-foreground">Value:</span>
            <span className="font-medium">${(holdings * price).toFixed(2)}</span>
          </div>
        </div>
        <Separator className="my-4" />
        <div>
          <h4 className="mb-2 text-sm font-medium">Price change</h4>
          <div className="flex space-x-2">
            <Button
              variant={timeFrame === "1h" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeFrame("1h")}
            >
              1H
            </Button>
            <Button
              variant={timeFrame === "24h" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeFrame("24h")}
            >
              24H
            </Button>
            <Button
              variant={timeFrame === "7d" ? "default" : "outline"}
              size="sm"
              onClick={() => setTimeFrame("7d")}
            >
              7D
            </Button>
          </div>
        </div>
        <Separator className="my-4" />
        <div>
          <h4 className="mb-2 text-sm font-medium">Transaction History</h4>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            {transactions.map((transaction) => (
              <div key={transaction.id} className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">
                    {transaction.type === "buy" ? "Bought" : "Sold"} {transaction.amount.toFixed(4)} {symbol.toUpperCase()}
                  </p>
                  <p className="text-xs text-muted-foreground">{transaction.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">
                    ${(transaction.amount * transaction.price).toFixed(2)}
                  </p>
                  <p className="text-xs text-muted-foreground">${transaction.price.toFixed(2)} per token</p>
                </div>
              </div>
            ))}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  )
}