import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookIcon, FileTextIcon, LockIcon, SearchIcon, PlusIcon, InformationCircleIcon } from 'lucide-react'
import { Modal } from "@/components/ui/modal"
import { Transition } from "@headlessui/react"

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <BookIcon className="h-6 w-6 text-blue-500" />
            <span className="text-xl font-bold text-blue-600">IPChain</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="relative group">
              <InformationCircleIcon className="h-5 w-5" />
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 text-white text-xs rounded px-2 py-1">
                Learn More
              </span>
            </Button>
            <Button onClick={() => setIsModalOpen(true)} className="flex items-center">
              <PlusIcon className="mr-2 h-4 w-4" /> Add IP
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-8 animate-fadeIn">IPChain Dashboard</h1>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex flex-col md:flex-row gap-2">
            <Input
              type="text"
              placeholder="Search intellectual property..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow transition-transform duration-300 transform focus:scale-105"
            />
            <Button type="submit" className="flex items-center justify-center transition bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">
              <SearchIcon className="mr-2 h-4 w-4" /> Search
            </Button>
          </div>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-medium text-gray-700">Total IP Assets</CardTitle>
              <BookIcon className="h-6 w-6 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-blue-600">1,234</div>
              <div className="mt-2 text-sm text-gray-500">All registered intellectual properties</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-medium text-gray-700">Pending Registrations</CardTitle>
              <FileTextIcon className="h-6 w-6 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-600">56</div>
              <div className="mt-2 text-sm text-gray-500">Awaiting approval</div>
            </CardContent>
          </Card>
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="flex flex-row items-center justify-between pb-3">
              <CardTitle className="text-sm font-medium text-gray-700">Secure Transactions</CardTitle>
              <LockIcon className="h-6 w-6 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-600">789</div>
              <div className="mt-2 text-sm text-gray-500">Transactions secured on the blockchain</div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="myip" className="space-y-6">
          <TabsList className="flex justify-center space-x-2 bg-white rounded-lg shadow p-2">
            <TabsTrigger value="myip" className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-blue-50 focus:ring-2 focus:ring-blue-300 transition">
              <BookIcon className="h-5 w-5 mr-2" /> My IP
            </TabsTrigger>
            <TabsTrigger value="marketplace" className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-blue-50 focus:ring-2 focus:ring-blue-300 transition">
              <FileTextIcon className="h-5 w-5 mr-2" /> Marketplace
            </TabsTrigger>
            <TabsTrigger value="transactions" className="flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-blue-50 focus:ring-2 focus:ring-blue-300 transition">
              <LockIcon className="h-5 w-5 mr-2" /> Transactions
            </TabsTrigger>
          </TabsList>
          <TabsContent value="myip" className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">My Intellectual Property</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example IP Card */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Patent on AI Technology</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Registered on April 2023</p>
                  <Button variant="outline" className="mt-2 w-full">View Details</Button>
                </CardContent>
              </Card>
              {/* Add more IP cards as needed */}
            </div>
          </TabsContent>
          <TabsContent value="marketplace" className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">IP Marketplace</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Example Marketplace Card */}
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle>Trademark for Smart Devices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Available for licensing</p>
                  <Button className="mt-2 w-full">License Now</Button>
                </CardContent>
              </Card>
              {/* Add more marketplace cards as needed */}
            </div>
          </TabsContent>
          <TabsContent value="transactions" className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-100 transition">
                    <td className="px-6 py-4 whitespace-nowrap">AI Patent</td>
                    <td className="px-6 py-4 whitespace-nowrap">License</td>
                    <td className="px-6 py-4 whitespace-nowrap">May 10, 2024</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Completed
                      </span>
                    </td>
                  </tr>
                  {/* Add more transaction rows as needed */}
                </tbody>
              </table>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Add IP Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Transition appear show={isModalOpen} enter="transition ease-out duration-300" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition ease-in duration-200" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h3 className="text-lg font-semibold mb-4">Add New Intellectual Property</h3>
            <form>
              <div className="mb-4">
                <Label htmlFor="ipName" className="block text-sm font-medium text-gray-700">IP Name</Label>
                <Input id="ipName" type="text" placeholder="Enter IP name" className="mt-1" />
              </div>
              <div className="mb-4">
                <Label htmlFor="ipType" className="block text-sm font-medium text-gray-700">IP Type</Label>
                <Input id="ipType" type="text" placeholder="e.g., Patent, Trademark" className="mt-1" />
              </div>
              <div className="mb-4">
                <Label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</Label>
                <textarea id="description" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Provide a brief description"></textarea>
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Add IP</Button>
              </div>
            </form>
          </div>
        </Transition>
      </Modal>
    </div>
  )
}