'use client'

import { useState, useEffect } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ArrowUpDown, Search, Loader2, RefreshCcw } from "lucide-react"
import { Bitcoin, Ethereum, Tether, UsdCoin, Dai } from "lucide-react"
import { Card, CardHeader, CardTitle, CardBody } from "@/components/ui/card"
import { Tooltip } from "@/components/ui/tooltip"

type Asset = {
  name: string
  icon: React.ReactNode
  lendingAPY: number
  borrowingAPY: number
}

const assets: Asset[] = [
  { name: 'Bitcoin', icon: <Bitcoin className="h-6 w-6 text-yellow-500" />, lendingAPY: 3.5, borrowingAPY: 5.2 },
  { name: 'Ethereum', icon: <Ethereum className="h-6 w-6 text-blue-500" />, lendingAPY: 4.2, borrowingAPY: 6.1 },
  { name: 'USDT', icon: <Tether className="h-6 w-6 text-green-500" />, lendingAPY: 8.5, borrowingAPY: 10.3 },
  { name: 'USDC', icon: <UsdCoin className="h-6 w-6 text-green-600" />, lendingAPY: 8.2, borrowingAPY: 9.8 },
  { name: 'DAI', icon: <Dai className="h-6 w-6 text-indigo-500" />, lendingAPY: 7.9, borrowingAPY: 9.5 },
]

export default function DeFiRatesTable() {
  const [sortColumn, setSortColumn] = useState<'name' | 'lendingAPY' | 'borrowingAPY'>('name')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc')
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<Asset[]>([])

  useEffect(() => {
    // Simulate API call to fetch live data
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500))
      setData(assets)
      setLoading(false)
    }
    fetchData()
  }, [])

  const handleSort = (column: 'name' | 'lendingAPY' | 'borrowingAPY') => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortColumn(column)
      setSortDirection('asc')
    }
  }

  const sortedData = [...data].sort((a, b) => {
    if (sortColumn === 'name') {
      return sortDirection === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    } else {
      return sortDirection === 'asc'
        ? a[sortColumn] - b[sortColumn]
        : b[sortColumn] - a[sortColumn]
    }
  })

  const filteredData = sortedData.filter(asset =>
    asset.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getAPYColor = (apy: number) => {
    if (apy < 5) return 'text-yellow-600'
    if (apy < 8) return 'text-green-600'
    return 'text-blue-600'
  }

  const refreshData = () => {
    setLoading(true)
    setTimeout(() => {
      setData(assets)
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-6 space-y-6">
      <Card className="shadow-lg transition-transform transform hover:scale-101">
        <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0">
          <CardTitle className="text-3xl font-semibold text-center sm:text-left">Live DeFi Rates</CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={refreshData}>
              <RefreshCcw className="h-4 w-4 animate-spin-slow" />
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Search assets..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
          </div>
        </CardHeader>
        <CardBody>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort('name')}
                        className="flex items-center space-x-1"
                      >
                        <span>Asset</span>
                        <ArrowUpDown className={`h-4 w-4 transition-transform ${sortColumn === 'name' ? (sortDirection === 'asc' ? 'rotate-0' : 'rotate-180') : 'rotate-0'}`} />
                      </Button>
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort('lendingAPY')}
                        className="flex items-center space-x-1"
                      >
                        <span>Lending APY</span>
                        <ArrowUpDown className={`h-4 w-4 transition-transform ${sortColumn === 'lendingAPY' ? (sortDirection === 'asc' ? 'rotate-0' : 'rotate-180') : 'rotate-0'}`} />
                      </Button>
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      <Button
                        variant="ghost"
                        onClick={() => handleSort('borrowingAPY')}
                        className="flex items-center space-x-1"
                      >
                        <span>Borrowing APY</span>
                        <ArrowUpDown className={`h-4 w-4 transition-transform ${sortColumn === 'borrowingAPY' ? (sortDirection === 'asc' ? 'rotate-0' : 'rotate-180') : 'rotate-0'}`} />
                      </Button>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((asset) => (
                    <tr key={asset.name} className="hover:bg-gray-100 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-3">
                        <Tooltip content={asset.name}>
                          {asset.icon}
                        </Tooltip>
                        <span className="font-medium text-gray-700">{asset.name}</span>
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-right ${getAPYColor(asset.lendingAPY)}`}>
                        {asset.lendingAPY.toFixed(2)}%
                      </td>
                      <td className={`px-6 py-4 whitespace-nowrap text-right ${getAPYColor(asset.borrowingAPY)}`}>
                        {asset.borrowingAPY.toFixed(2)}%
                      </td>
                    </tr>
                  ))}
                  {filteredData.length === 0 && (
                    <tr>
                      <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
                        No assets found.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  )
}