import { ArrowDownIcon, ArrowUpIcon, TrendUpIcon, TrendDownIcon } from "lucide-react"
import { useState } from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

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
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="w-full max-w-md mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-shadow duration-300"
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12">
              <AvatarImage src={iconUrl} alt={name} />
              <AvatarFallback>{symbol.slice(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-lg font-semibold">{name}</CardTitle>
              <CardDescription className="text-sm text-gray-500">{symbol.toUpperCase()}</CardDescription>
            </div>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">${price.toFixed(2)}</div>
            <div className={`flex items-center ${priceChange >= 0 ? "text-green-600" : "text-red-600"}`}>
              {priceChange >= 0 ? <ArrowUpIcon className="h-5 w-5 mr-1" /> : <ArrowDownIcon className="h-5 w-5 mr-1" />}
              {Math.abs(priceChange).toFixed(2)}%
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-4 flex flex-col space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Your Holdings:</span>
              <span className="font-medium">
                {holdings.toFixed(4)} {symbol.toUpperCase()}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-gray-500">Value:</span>
              <span className="font-medium">${(holdings * price).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">24H Change:</span>
              <div className={`flex items-center ${priceChange >= 0 ? "text-green-500" : "text-red-500"}`}>
                {priceChange >= 0 ? <TrendUpIcon className="h-5 w-5 mr-1 animate-bounce" /> : <TrendDownIcon className="h-5 w-5 mr-1 animate-bounce" />}
                {priceChange >= 0 ? "Increase" : "Decrease"}
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div>
            <h4 className="mb-3 text-sm font-medium">Price Change</h4>
            <div className="flex space-x-2">
              <Button
                variant={timeFrame === "1h" ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeFrame("1h")}
                className="transition-transform transform hover:scale-105"
              >
                1H
              </Button>
              <Button
                variant={timeFrame === "24h" ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeFrame("24h")}
                className="transition-transform transform hover:scale-105"
              >
                24H
              </Button>
              <Button
                variant={timeFrame === "7d" ? "default" : "outline"}
                size="sm"
                onClick={() => setTimeFrame("7d")}
                className="transition-transform transform hover:scale-105"
              >
                7D
              </Button>
            </div>
          </div>
          <Separator className="my-6" />
          <div>
            <h4 className="mb-3 text-sm font-medium">Transaction History</h4>
            <ScrollArea className="h-48 w-full rounded-md border dark:border-gray-700 p-4">
              {transactions.length > 0 ? (
                transactions.map((transaction) => (
                  <TooltipProvider key={transaction.id}>
                    <Tooltip>
                      <TooltipTrigger>
                        <div className="mb-4 p-2 bg-gray-100 dark:bg-gray-700 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm font-medium">
                                {transaction.type === "buy" ? "Bought" : "Sold"} {transaction.amount.toFixed(4)} {symbol.toUpperCase()}
                              </p>
                              <p className="text-xs text-gray-500">{transaction.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium">
                                ${(transaction.amount * transaction.price).toFixed(2)}
                              </p>
                              <p className="text-xs text-gray-500">${transaction.price.toFixed(2)} per token</p>
                            </div>
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                        {transaction.type === "buy" ? "Purchase" : "Sale"} of {transaction.amount.toFixed(4)} {symbol.toUpperCase()} at ${transaction.price.toFixed(2)} each on {transaction.date}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))
              ) : (
                <p className="text-center text-gray-500">No transactions available.</p>
              )}
            </ScrollArea>
          </div>
        </CardContent>
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 flex justify-end space-x-2">
          <Button variant="ghost" size="sm" className="transition-transform transform hover:scale-105">
            View Details
          </Button>
          <Button variant="primary" size="sm" className="transition-transform transform hover:scale-105">
            Trade
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}