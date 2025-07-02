'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"

type DataSet = {
  id: number
  title: string
  description: string
  price: number
  seller: string
}

export default function DataXMarketplace() {
  const [dataSets, setDataSets] = useState<DataSet[]>([
    { id: 1, title: "Global Temperature Data", description: "100 years of temperature data from around the world", price: 0.5, seller: "ClimateResearch" },
    { id: 2, title: "E-commerce User Behavior", description: "Anonymized user behavior data from a major e-commerce platform", price: 1.2, seller: "DataInsights" },
  ])
  const [newDataSet, setNewDataSet] = useState<Omit<DataSet, 'id'>>({ title: '', description: '', price: 0, seller: '' })

  const addDataSet = () => {
    setDataSets([...dataSets, { ...newDataSet, id: dataSets.length + 1 }])
    setNewDataSet({ title: '', description: '', price: 0, seller: '' })
  }

  const buyDataSet = (id: number) => {
    alert(`Transaction initiated for dataset ${id}. In a real app, this would trigger a blockchain transaction.`)
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">DataX Marketplace</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {dataSets.map((dataSet) => (
          <Card key={dataSet.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">{dataSet.title}</CardTitle>
              <CardDescription className="text-sm">Seller: {dataSet.seller}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-sm sm:text-base">{dataSet.description}</p>
              <p className="font-bold mt-2 text-sm sm:text-base">Price: {dataSet.price} ETH</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => buyDataSet(dataSet.id)} className="w-full sm:w-auto">Buy Dataset</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">List New Dataset</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={newDataSet.title}
                onChange={(e) => setNewDataSet({ ...newDataSet, title: e.target.value })}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                value={newDataSet.description}
                onChange={(e) => setNewDataSet({ ...newDataSet, description: e.target.value })}
                rows={3}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="price">Price (ETH)</Label>
              <Input
                id="price"
                type="number"
                value={newDataSet.price}
                onChange={(e) => setNewDataSet({ ...newDataSet, price: parseFloat(e.target.value) })}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="seller">Seller Name</Label>
              <Input
                id="seller"
                value={newDataSet.seller}
                onChange={(e) => setNewDataSet({ ...newDataSet, seller: e.target.value })}
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={addDataSet} className="w-full sm:w-auto">List Dataset</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

