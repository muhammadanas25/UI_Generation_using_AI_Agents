'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, ChevronUp, ChevronsUpDown, Copy, RefreshCw } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip } from "@/components/ui/tooltip"
import { toast } from 'react-toastify'

const leaderboardData = Array.from({ length: 100 }, (_, i) => ({
  rank: i + 1,
  address: `0x${Math.random().toString(16).substr(2, 40)}`,
  totalValueLocked: Math.floor(Math.random() * 10000000),
  rewardsEarned: Math.floor(Math.random() * 100000),
  poolsParticipated: Math.floor(Math.random() * 10) + 1,
}))

type SortKey = 'rank' | 'totalValueLocked' | 'rewardsEarned' | 'poolsParticipated'

export default function LeaderboardComponent() {
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortKey, setSortKey] = useState<SortKey>('rank')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')
  const [poolFilter, setPoolFilter] = useState('all')
  const [isLoading, setIsLoading] = useState(false)

  const itemsPerPage = 10

  const filteredData = leaderboardData
    .filter(item => 
      item.address.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (poolFilter === 'all' || (poolFilter === '6+' ? item.poolsParticipated >= 6 : item.poolsParticipated.toString() === poolFilter))
    )
    .sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return sortOrder === 'asc' ? -1 : 1
      if (a[sortKey] > b[sortKey]) return sortOrder === 'asc' ? 1 : -1
      return 0
    })

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const totalPages = Math.ceil(filteredData.length / itemsPerPage)

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortKey(key)
      setSortOrder('asc')
    }
  }

  const handleCopy = (address: string) => {
    navigator.clipboard.writeText(address)
    toast.success('Address copied to clipboard!')
  }

  const handleRefresh = () => {
    setIsLoading(true)
    // Simulate data refresh
    setTimeout(() => {
      // In real scenario, fetch new data here
      toast.success('Leaderboard refreshed!')
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    // Reset to first page when filters change
    setCurrentPage(1)
  }, [searchTerm, poolFilter, sortKey, sortOrder])

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-gray-50 to-white shadow-lg rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h1 className="text-4xl font-extrabold text-indigo-600 flex items-center">
          <span className="mr-2">🏆</span> Top Liquidity Providers
        </h1>
        <Button
          variant="secondary"
          onClick={handleRefresh}
          className="mt-4 sm:mt-0 flex items-center space-x-2"
          disabled={isLoading}
        >
          <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
          <span>Refresh</span>
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0 sm:space-x-4">
        <Input
          type="text"
          placeholder="Search by address"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-64 transition focus:ring-2 focus:ring-indigo-500"
        />
        <Select value={poolFilter} onValueChange={setPoolFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Filter by pools" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Pools</SelectItem>
            {[1, 2, 3, 4, 5].map(num => (
              <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Pool' : 'Pools'}</SelectItem>
            ))}
            <SelectItem value="6+">6+ Pools</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="overflow-x-auto">
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHeader>
            <TableRow>
              <TableHead className="w-16">
                <Button
                  variant="ghost"
                  onClick={() => handleSort('rank')}
                  className="flex items-center space-x-1"
                >
                  <span>Rank</span>
                  {sortKey === 'rank' && (sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
                  {sortKey !== 'rank' && <ChevronsUpDown className="h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead className="flex-1">Address</TableHead>
              <TableHead className="text-right">
                <Button
                  variant="ghost"
                  onClick={() => handleSort('totalValueLocked')}
                  className="flex items-center space-x-1"
                >
                  <span>Total Value Locked</span>
                  {sortKey === 'totalValueLocked' && (sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
                  {sortKey !== 'totalValueLocked' && <ChevronsUpDown className="h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead className="text-right">
                <Button
                  variant="ghost"
                  onClick={() => handleSort('rewardsEarned')}
                  className="flex items-center space-x-1"
                >
                  <span>Rewards Earned</span>
                  {sortKey === 'rewardsEarned' && (sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
                  {sortKey !== 'rewardsEarned' && <ChevronsUpDown className="h-4 w-4" />}
                </Button>
              </TableHead>
              <TableHead className="text-center">
                <Button
                  variant="ghost"
                  onClick={() => handleSort('poolsParticipated')}
                  className="flex items-center space-x-1"
                >
                  <span>Pools</span>
                  {sortKey === 'poolsParticipated' && (sortOrder === 'asc' ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
                  {sortKey !== 'poolsParticipated' && <ChevronsUpDown className="h-4 w-4" />}
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedData.map((item) => (
              <TableRow
                key={item.address}
                className="hover:bg-gray-100 transition bg-white"
              >
                <TableCell className="font-semibold text-center">{item.rank}</TableCell>
                <TableCell className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-mono">
                    {item.address.slice(2,4).toUpperCase()}
                  </div>
                  <span className="font-mono break-words">{item.address}</span>
                  <Tooltip content="Copy Address">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleCopy(item.address)}
                      className="ml-2 hover:text-indigo-600 transition"
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  </Tooltip>
                </TableCell>
                <TableCell className="text-right text-green-600 font-medium transition">
                  ${item.totalValueLocked.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-yellow-500 font-medium transition">
                  ${item.rewardsEarned.toLocaleString()}
                </TableCell>
                <TableCell className="text-center">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-indigo-100 text-indigo-800">
                    {item.poolsParticipated}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mt-6">
        <div className="text-sm text-gray-500 mb-4 sm:mb-0">
          Showing {((currentPage - 1) * itemsPerPage) + 1} - {Math.min(currentPage * itemsPerPage, filteredData.length)} of {filteredData.length}
        </div>
        <div className="flex space-x-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="transition hover:bg-indigo-50"
          >
            Previous
          </Button>
          <span className="text-sm text-gray-700 self-center">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="transition hover:bg-indigo-50"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}