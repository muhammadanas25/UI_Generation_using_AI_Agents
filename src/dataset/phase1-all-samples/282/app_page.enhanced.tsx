'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { FiPlus, FiShoppingCart, FiSearch } from 'react-icons/fi'

type DataSet = {
  id: number
  title: string
  description: string
  price: number
  seller: string
  image?: string
}

export default function DataXMarketplace() {
  const [dataSets, setDataSets] = useState<DataSet[]>([
    { id: 1, title: "Global Temperature Data", description: "100 years of temperature data from around the world", price: 0.5, seller: "ClimateResearch", image: "/images/temperature.jpg" },
    { id: 2, title: "E-commerce User Behavior", description: "Anonymized user behavior data from a major e-commerce platform", price: 1.2, seller: "DataInsights", image: "/images/ecommerce.jpg" },
  ])
  const [newDataSet, setNewDataSet] = useState<Omit<DataSet, 'id'>>({ title: '', description: '', price: 0, seller: '', image: '' })
  const [search, setSearch] = useState('')

  const addDataSet = () => {
    if (newDataSet.title && newDataSet.description && newDataSet.price && newDataSet.seller) {
      setDataSets([...dataSets, { ...newDataSet, id: dataSets.length + 1 }])
      setNewDataSet({ title: '', description: '', price: 0, seller: '', image: '' })
    }
  }

  const buyDataSet = (id: number) => {
    alert(`Transaction initiated for dataset ${id}. In a real app, this would trigger a blockchain transaction.`)
  }

  const filteredDataSets = dataSets.filter(dataset =>
    dataset.title.toLowerCase().includes(search.toLowerCase()) ||
    dataset.description.toLowerCase().includes(search.toLowerCase()) ||
    dataset.seller.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-4 sm:p-6">
      <div className="container mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold text-center mb-6 sm:mb-8 text-indigo-600"
          initial={{ y: -250 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          DataX Marketplace
        </motion.h1>

        <div className="flex items-center mb-6 sm:mb-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search datasets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-10 pl-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm sm:text-base"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {filteredDataSets.map((dataSet) => (
            <motion.div
              key={dataSet.id}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Card>
                {dataSet.image && (
                  <img src={dataSet.image} alt={dataSet.title} className="w-full h-40 sm:h-48 object-cover rounded-t-lg" />
                )}
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{dataSet.title}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm text-gray-600">Seller: {dataSet.seller}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base text-gray-700">{dataSet.description}</p>
                  <p className="font-semibold text-indigo-600 mt-2 text-sm sm:text-base">Price: {dataSet.price} ETH</p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="secondary" className="flex items-center gap-2 text-sm" onClick={() => buyDataSet(dataSet.id)}>
                    <FiShoppingCart /> Buy
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-white">
            <CardHeader>
              <CardTitle className="text-xl sm:text-2xl">List New Dataset</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title" className="text-sm">Title</Label>
                  <Input
                    id="title"
                    value={newDataSet.title}
                    onChange={(e) => setNewDataSet({ ...newDataSet, title: e.target.value })}
                    placeholder="Enter dataset title"
                    className="focus:ring-indigo-500 text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="seller" className="text-sm">Seller Name</Label>
                  <Input
                    id="seller"
                    value={newDataSet.seller}
                    onChange={(e) => setNewDataSet({ ...newDataSet, seller: e.target.value })}
                    placeholder="Enter your name"
                    className="focus:ring-indigo-500 text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="price" className="text-sm">Price (ETH)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={newDataSet.price}
                    onChange={(e) => setNewDataSet({ ...newDataSet, price: parseFloat(e.target.value) })}
                    placeholder="0.0"
                    className="focus:ring-indigo-500 text-sm"
                  />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="image" className="text-sm">Image URL</Label>
                  <Input
                    id="image"
                    value={newDataSet.image || ''}
                    onChange={(e) => setNewDataSet({ ...newDataSet, image: e.target.value })}
                    placeholder="https://example.com/image.jpg"
                    className="focus:ring-indigo-500 text-sm"
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-1.5 mt-4">
                <Label htmlFor="description" className="text-sm">Description</Label>
                <textarea
                  id="description"
                  value={newDataSet.description}
                  onChange={(e) => setNewDataSet({ ...newDataSet, description: e.target.value })}
                  placeholder="Enter dataset description"
                  className="p-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                  rows={4}
                ></textarea>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button onClick={addDataSet} className="flex items-center gap-2 text-sm">
                <FiPlus /> List Dataset
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

