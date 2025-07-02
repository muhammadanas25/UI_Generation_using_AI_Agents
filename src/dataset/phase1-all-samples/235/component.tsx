import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookIcon, FileTextIcon, LockIcon, SearchIcon } from 'lucide-react'

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">IPChain Dashboard</h1>

      <form onSubmit={handleSearch} className="mb-4 sm:mb-6">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="text"
            placeholder="Search intellectual property..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit" className="w-full sm:w-auto">
            <SearchIcon className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total IP Assets</CardTitle>
            <BookIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">1,234</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Registrations</CardTitle>
            <FileTextIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">56</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Secure Transactions</CardTitle>
            <LockIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl sm:text-2xl font-bold">789</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="myip" className="space-y-4">
        <TabsList className="w-full flex justify-start overflow-x-auto">
          <TabsTrigger value="myip" className="flex-shrink-0">My IP</TabsTrigger>
          <TabsTrigger value="marketplace" className="flex-shrink-0">Marketplace</TabsTrigger>
          <TabsTrigger value="transactions" className="flex-shrink-0">Transactions</TabsTrigger>
        </TabsList>
        <TabsContent value="myip" className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">My Intellectual Property</h2>
          {/* Add a list or grid of user's IP assets here */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle className="text-sm sm:text-base">IP Asset {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground">Description of IP Asset {item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="marketplace" className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">IP Marketplace</h2>
          {/* Add a list or grid of available IP for licensing/purchase */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <Card key={item}>
                <CardHeader>
                  <CardTitle className="text-sm sm:text-base">Marketplace Item {item}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-muted-foreground">Description of Marketplace Item {item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="transactions" className="space-y-4">
          <h2 className="text-lg sm:text-xl font-semibold">Recent Transactions</h2>
          {/* Add a table of recent transactions */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm sm:text-base">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-2">Date</th>
                  <th className="text-left p-2">Type</th>
                  <th className="text-left p-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((item) => (
                  <tr key={item} className="border-b">
                    <td className="p-2">2023-05-{item.toString().padStart(2, '0')}</td>
                    <td className="p-2">License</td>
                    <td className="p-2">$1,000</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

