'use client'

import { useState, useEffect } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, ChevronsUpDownIcon as ChevronUpDown, Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" })
  const [searchTerm, setSearchTerm] = useState("")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sortedProducts = [...products].sort((a, b) => {
    if (sortConfig.key) {
      const aValue = a[sortConfig.key]
      const bValue = b[sortConfig.key]
      if (aValue < bValue) {
        return sortConfig.direction === "asc" ? -1 : 1
      }
      if (aValue > bValue) {
        return sortConfig.direction === "asc" ? 1 : -1
      }
    }
    return 0
  })

  const filteredProducts = sortedProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.provider.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const requestSort = key => {
    let direction = "asc"
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc"
    }
    setSortConfig({ key, direction })
  }

  const getSortIcon = key => {
    if (sortConfig.key !== key) {
      return <ChevronUpDown className="ml-2 h-4 w-4" />
    }
    if (sortConfig.direction === "asc") {
      return <ChevronUpDown className="ml-2 h-4 w-4 rotate-180" />
    }
    return <ChevronUpDown className="ml-2 h-4 w-4" />
  }

  return (
    <Card className="w-full max-w-6xl mx-auto p-4 shadow-lg rounded-lg transition-transform duration-300 hover:scale-105">
      <CardHeader className="mb-4">
        <CardTitle className="text-xl md:text-2xl font-bold text-center">MoneyMinds Financial Product Comparison</CardTitle>
        <CardDescription className="text-center text-gray-600 text-sm md:text-base">
          Compare our financial tools side by side to find the best fit for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <Input
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/3 mb-2 md:mb-0"
            icon={<Search className="w-4 h-4 text-gray-500" />}
          />
          <Button variant="secondary" className="flex items-center mt-2 md:mt-0">
            Filter
            <ChevronUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
        {isMobile ? (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <Card key={product.name} className="w-full">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <img src={`/placeholder.svg?height=24&width=24`} alt={product.name} className="w-6 h-6 mr-2" />
                    {product.name}
                  </CardTitle>
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
                  <div className="col-span-2 mt-2">
                    <Button size="sm" variant="primary" className="w-full transition-transform duration-300 hover:scale-105">
                      Select
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table className="min-w-full table-auto">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[250px] cursor-pointer" onClick={() => requestSort("name")}>
                    Product {getSortIcon("name")}
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("provider")}>
                    Provider {getSortIcon("provider")}
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("interestRate")}>
                    Interest Rate {getSortIcon("interestRate")}
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("minimumBalance")}>
                    Minimum Balance {getSortIcon("minimumBalance")}
                  </TableHead>
                  <TableHead className="cursor-pointer" onClick={() => requestSort("monthlyFee")}>
                    Monthly Fee {getSortIcon("monthlyFee")}
                  </TableHead>
                  <TableHead>ATM Access</TableHead>
                  <TableHead>Online Banking</TableHead>
                  <TableHead>Mobile App</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.name} className="hover:bg-gray-100 transition-colors duration-200">
                    <TableCell className="font-medium flex items-center">
                      <img src={`/placeholder.svg?height=24&width=24`} alt={product.name} className="w-6 h-6 mr-2" />
                      {product.name}
                    </TableCell>
                    <TableCell>{product.provider}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{product.interestRate}</Badge>
                    </TableCell>
                    <TableCell>{product.minimumBalance}</TableCell>
                    <TableCell>{product.monthlyFee}</TableCell>
                    <TableCell>
                      {product.atmAccess ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                    </TableCell>
                    <TableCell>
                      {product.onlineBanking ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                    </TableCell>
                    <TableCell>
                      {product.mobileApp ? <Check className="text-green-500" /> : <X className="text-red-500" />}
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="primary" className="transition-transform duration-300 hover:scale-105">
                        Select
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
        {filteredProducts.length === 0 && (
          <div className="text-center text-gray-500 py-4">
            No products found.
          </div>
        )}
      </CardContent>
    </Card>
  )
}

