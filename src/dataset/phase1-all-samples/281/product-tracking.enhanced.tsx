import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Barcode, CheckCircle, TractorIcon as Farm, Leaf, Truck, Store, Download, Share2, Loader2 } from 'lucide-react'
import Image from 'next/image'

export default function ProductTracking() {
  const [productCode, setProductCode] = useState('')
  const [productData, setProductData] = useState(null)
  const [loading, setLoading] = useState(false)

  const fetchProductData = () => {
    if (!productCode) return
    setLoading(true)
    // Simulate API call delay
    setTimeout(() => {
      // This would typically be an API call to the blockchain
      setProductData({
        name: "Organic Apples",
        image: "/images/organic-apples.jpg",
        farm: "Green Acres Farm",
        harvestDate: "2024-09-15",
        distributor: "EcoFreight Logistics",
        retailer: "Nature's Best Market",
        organicCertification: "USDA Organic",
        timeline: [
          { date: "2024-09-15", event: "Harvested at Green Acres Farm" },
          { date: "2024-09-16", event: "Packed and prepared for shipment" },
          { date: "2024-09-18", event: "Picked up by EcoFreight Logistics" },
          { date: "2024-09-20", event: "Arrived at Nature's Best Market" },
          { date: "2024-09-21", event: "Available for purchase" },
        ]
      })
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-3xl shadow-lg transition-transform transform hover:scale-105 duration-300">
        <CardHeader className="bg-gradient-to-r from-green-400 to-blue-500 text-white">
          <CardTitle className="text-2xl sm:text-3xl font-bold flex items-center space-x-2">
            <Store className="h-6 w-6 sm:h-8 sm:w-8" />
            <span>FoodChain Tracker</span>
          </CardTitle>
          <CardDescription className="mt-2 text-sm sm:text-base">
            Verify the authenticity and journey of your organic products
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <Input
              type="text"
              placeholder="Enter product code"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              className="flex-1 w-full"
            />
            <Button onClick={fetchProductData} disabled={loading} className="w-full sm:w-auto flex items-center justify-center">
              {loading ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : <Barcode className="mr-2 h-4 w-4" />}
              {loading ? 'Scanning...' : 'Scan'}
            </Button>
          </div>

          {productData && (
            <div className="bg-white p-4 rounded-lg shadow-md animate-fade-in">
              <div className="flex flex-col md:flex-row items-center md:space-x-6">
                <Image
                  src={productData.image}
                  alt={productData.name}
                  width={150}
                  height={150}
                  className="rounded-md shadow-md w-full md:w-auto h-auto object-cover mb-4 md:mb-0"
                />
                <div className="w-full md:w-auto">
                  <h2 className="text-xl sm:text-2xl font-semibold text-center md:text-left">{productData.name}</h2>
                  <div className="flex justify-center md:justify-start">
                    <Badge variant="secondary" className="mt-2">
                      {productData.organicCertification}
                    </Badge>
                  </div>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <Farm className="h-5 w-5 text-green-500" />
                      <span className="text-sm">{productData.farm}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Leaf className="h-5 w-5 text-green-500" />
                      <span className="text-sm">Harvested: {productData.harvestDate}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Truck className="h-5 w-5 text-blue-500" />
                      <span className="text-sm">{productData.distributor}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Store className="h-5 w-5 text-purple-500" />
                      <span className="text-sm">{productData.retailer}</span>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <Button variant="outline" size="sm" className="flex items-center justify-center w-full sm:w-auto">
                      <Download className="mr-2 h-4 w-4" /> Download Report
                    </Button>
                    <Button variant="ghost" size="sm" className="flex items-center justify-center w-full sm:w-auto">
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Supply Chain Timeline</h3>
                <ul className="space-y-2">
                  {productData.timeline.map((event, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 animate-bounce" />
                      <div>
                        <p className="font-medium text-sm">{event.date}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{event.event}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="bg-gray-50">
          <p className="text-xs sm:text-sm text-gray-500 flex flex-col sm:flex-row justify-between items-center">
            <span className="text-center sm:text-left mb-2 sm:mb-0">All data is verified and stored on a decentralized blockchain network for maximum transparency and security.</span>
            <span className="text-center sm:text-right">© 2024 FoodChain</span>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

