import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CopyIcon, SearchIcon } from "@/components/icons"
import { Tooltip } from "@/components/ui/tooltip"

const transactions = [
  { id: "TRX001", status: "completed" },
  { id: "TRX002", status: "pending" },
  { id: "TRX003", status: "completed" },
  { id: "TRX004", status: "failed" },
  { id: "TRX005", status: "completed" },
  { id: "TRX006", status: "pending" },
  { id: "TRX007", status: "failed" },
  { id: "TRX008", status: "completed" },
  { id: "TRX009", status: "pending" },
  { id: "TRX010", status: "completed" },
]

export default function RecentTransactions() {
  const [filter, setFilter] = useState("")

  const filteredTransactions = transactions.filter(transaction =>
    transaction.id.toLowerCase().includes(filter.toLowerCase()) ||
    transaction.status.toLowerCase().includes(filter.toLowerCase())
  )

  const copyToClipboard = (id) => {
    navigator.clipboard.writeText(id)
  }

  return (
    <Card className="w-full max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <CardHeader className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
        <CardTitle className="text-2xl font-bold text-gray-800">Recent Transactions</CardTitle>
        <div className="mt-4 sm:mt-0 w-full sm:w-64 relative">
          <Input
            placeholder="Search transactions..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <SearchIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <Table className="min-w-full divide-y divide-gray-200">
          <TableHeader>
            <TableRow>
              <TableHead className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Transaction ID</TableHead>
              <TableHead className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id} className="hover:bg-gray-50 transition-colors">
                <TableCell className="px-6 py-4 whitespace-nowrap flex items-center space-x-2">
                  <span className="font-medium text-blue-600">{transaction.id}</span>
                  <Tooltip content="Copy Transaction ID">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => copyToClipboard(transaction.id)}
                      className="p-1 hover:bg-gray-200 rounded"
                      aria-label="Copy Transaction ID"
                    >
                      <CopyIcon className="w-4 h-4 text-gray-500" />
                    </Button>
                  </Tooltip>
                </TableCell>
                <TableCell className="px-6 py-4 whitespace-nowrap">
                  <Badge
                    variant={
                      transaction.status === "completed"
                        ? "success"
                        : transaction.status === "pending"
                        ? "warning"
                        : "destructive"
                    }
                    className="capitalize cursor-pointer hover:opacity-80 transition-opacity"
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            {filteredTransactions.length === 0 && (
              <TableRow>
                <TableCell colSpan={2} className="px-6 py-4 text-center text-gray-500">
                  No transactions found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className="flex justify-end mt-4">
        <Button
          variant="primary"
          className="bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 rounded-md transition-colors"
        >
          View All Transactions
        </Button>
      </CardFooter>
    </Card>
  )
}