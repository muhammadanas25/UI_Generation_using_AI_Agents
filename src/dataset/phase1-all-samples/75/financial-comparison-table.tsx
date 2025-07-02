'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X } from 'lucide-react'

const products = [
  {
    name: "Basic Savings Account",
    provider: "MoneyMinds Bank",
    interestRate: "0.5%",
    minimumBalance: "$0",
    monthlyFee: "$0",
    atmAccess: true,
    onlineBanking: true,
    mobileApp: true,
  },
  {
    name: "Premium Checking Account",
    provider: "MoneyMinds Bank",
    interestRate: "0.1%",
    minimumBalance: "$1,500",
    monthlyFee: "$12",
    atmAccess: true,
    onlineBanking: true,
    mobileApp: true,
  },
  {
    name: "High-Yield Savings Account",
    provider: "MoneyMinds Online",
    interestRate: "1.5%",
    minimumBalance: "$100",
    monthlyFee: "$0",
    atmAccess: false,
    onlineBanking: true,
    mobileApp: true,
  },
  {
    name: "Cash Management Account",
    provider: "MoneyMinds Invest",
    interestRate: "0.8%",
    minimumBalance: "$0",
    monthlyFee: "$0",
    atmAccess: true,
    onlineBanking: true,
    mobileApp: true,
  },
]

export default function FinancialComparisonTable() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)
    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl">MoneyMinds Financial Product Comparison</CardTitle>
        <CardDescription className="text-sm md:text-base">Compare our financial tools side by side to find the best fit for you.</CardDescription>
      </CardHeader>
      <CardContent>
        {isMobile ? (
          <div className="space-y-6">
            {products.map((product) => (
              <Card key={product.name} className="w-full">
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription>{product.provider}</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-2 text-sm">
                  <div>Interest Rate:</div>
                  <div><Badge variant="secondary">{product.interestRate}</Badge></div>
                  <div>Minimum Balance:</div>
                  <div>{product.minimumBalance}</div>
                  <div>Monthly Fee:</div>
                  <div>{product.monthlyFee}</div>
                  <div>ATM Access:</div>
                  <div>{product.atmAccess ? <Check className="text-green-500" /> : <X className="text-red-500" />}</div>
                  <div>Online Banking:</div>
                  <div>{product.onlineBanking ? <Check className="text-green-500" /> : <X className="text-red-500" />}</div>
                  <div>Mobile App:</div>
                  <div>{product.mobileApp ? <Check className="text-green-500" /> : <X className="text-red-500" />}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px]">Product</TableHead>
                  <TableHead>Provider</TableHead>
                  <TableHead>Interest Rate</TableHead>
                  <TableHead>Minimum Balance</TableHead>
                  <TableHead>Monthly Fee</TableHead>
                  <TableHead>ATM Access</TableHead>
                  <TableHead>Online Banking</TableHead>
                  <TableHead>Mobile App</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.name}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.provider}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{product.interestRate}</Badge>
                    </TableCell>
                    <TableCell>{product.minimumBalance}</TableCell>
                    <TableCell>{product.monthlyFee}</TableCell>
                    <TableCell>{product.atmAccess ? <Check className="text-green-500" /> : <X className="text-red-500" />}</TableCell>
                    <TableCell>{product.onlineBanking ? <Check className="text-green-500" /> : <X className="text-red-500" />}</TableCell>
                    <TableCell>{product.mobileApp ? <Check className="text-green-500" /> : <X className="text-red-500" />}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

