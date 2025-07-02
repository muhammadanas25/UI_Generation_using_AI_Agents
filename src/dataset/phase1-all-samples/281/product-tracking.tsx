import { useState } from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Barcode, CheckCircle, TractorIcon as Farm, Leaf, Truck, Store } from 'lucide-react'

export default function ProductTracking() {
  const [productCode, setProductCode] = useState('')
  const [productData, setProductData] = useState(null)

  const fetchProductData = () => {
    // This would typically be an API call to the blockchain
    setProductData({
      name: "Organic Apples",
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
  }

  return (
    <div className="container mx-auto p-4 max-w-2xl sm:p-6 md:p-8">
      <Card className="p-4 sm:p-6">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl font-bold">FoodChain Tracker</CardTitle>
          <CardDescription className="text-sm sm:text-base">Verify the authenticity and journey of your organic products</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 mb-4">
            <Input
              type="text"
              placeholder="Enter product code"
              value={productCode}
              onChange={(e) => setProductCode(e.target.value)}
              className="w-full"
            />
            <Button onClick={fetchProductData} className="w-full sm:w-auto">
              <Barcode className="mr-2 h-4 w-4" /> Scan
            </Button>
          </div>

          {productData && (
            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold">{productData.name}</h2>
                <Badge variant="secondary">{productData.organicCertification}</Badge>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Farm className="h-5 w-5 text-green-500" />
                  <span>{productData.farm}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Leaf className="h-5 w-5 text-green-500" />
                  <span>Harvested: {productData.harvestDate}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-blue-500" />
                  <span>{productData.distributor}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Store className="h-5 w-5 text-purple-500" />
                  <span>{productData.retailer}</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Supply Chain Timeline</h3>
                <ul className="space-y-4">
                  {productData.timeline.map((event, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-sm sm:text-base">{event.date}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{event.event}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <p className="text-xs sm:text-sm text-gray-500">
            All data is verified and stored on a decentralized blockchain network for maximum transparency and security.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

