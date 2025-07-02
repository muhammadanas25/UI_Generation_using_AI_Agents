import { Star, ShoppingCart, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function ProductPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/placeholder1.svg",
    "/placeholder2.svg",
    "/placeholder3.svg",
  ]

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="relative w-full md:w-1/2">
          <img
            src={images[currentImage]}
            alt="VitalityBoost Supplement"
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 transform hover:scale-105"
          />
          <button
            onClick={prevImage}
            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition"
          >
            <ChevronLeft className="w-4 h-4 text-gray-700" />
          </button>
          <button
            onClick={nextImage}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full hover:bg-opacity-100 transition"
          >
            <ChevronRight className="w-4 h-4 text-gray-700" />
          </button>
        </div>
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-2 text-green-700 animate-fadeIn">VitalityBoost Ultimate Energy Complex</h1>
          <div className="flex items-center mb-4">
            <div className="flex animate-pulse">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 animate-bounce" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600 animate-fadeIn">(128 reviews)</span>
          </div>
          <p className="text-2xl sm:text-3xl font-bold text-green-600 mb-4 transform hover:scale-105 transition">
            $39.99
          </p>
          <p className="mb-4 text-base sm:text-lg text-gray-700">60 capsules (30-day supply)</p>
          <Button className="w-full mb-4 flex items-center justify-center hover:bg-green-700 transition" variant="default">
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-gray-700">
                VitalityBoost Ultimate Energy Complex is a premium health supplement designed to enhance your
                energy levels, support overall well-being, and promote vitality. Formulated with natural ingredients
                to provide lasting energy without the crash.
              </p>
            </CardContent>
          </Card>
          <div className="mt-4">
            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Best Seller</span>
          </div>
        </div>
      </div>

      <Tabs defaultValue="benefits" className="mt-8 sm:mt-12">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="benefits" className="text-xs sm:text-sm transition-colors hover:bg-green-100">
            Health Benefits
          </TabsTrigger>
          <TabsTrigger value="dosage" className="text-xs sm:text-sm transition-colors hover:bg-green-100">
            Dosage
          </TabsTrigger>
          <TabsTrigger value="ingredients" className="text-xs sm:text-sm transition-colors hover:bg-green-100">
            Ingredients
          </TabsTrigger>
        </TabsList>
        <TabsContent value="benefits">
          <Card className="mt-4 animate-slideIn">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Health Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                <li>Boosts energy levels and reduces fatigue</li>
                <li>Enhances mental clarity and focus</li>
                <li>Supports immune system function</li>
                <li>Promotes overall vitality and well-being</li>
                <li>Aids in stress management</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="dosage">
          <Card className="mt-4 animate-slideIn">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Dosage Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base text-gray-700">
                Take 2 capsules daily with a meal, preferably in the morning. Do not exceed the recommended
                dosage. For best results, use consistently for at least 30 days.
              </p>
              <p className="mt-4 text-sm sm:text-base font-semibold text-red-600">
                Caution: Consult with a healthcare professional before use if you are pregnant, nursing, have a
                medical condition, or are taking any medications.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ingredients">
          <Card className="mt-4 animate-slideIn">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                <li>Vitamin B Complex (B1, B2, B3, B5, B6, B12)</li>
                <li>Ashwagandha Root Extract</li>
                <li>Rhodiola Rosea Extract</li>
                <li>Coenzyme Q10</li>
                <li>Green Tea Extract</li>
                <li>L-Theanine</li>
                <li>Magnesium</li>
                <li>Zinc</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="mt-8 sm:mt-12 shadow-lg hover:shadow-xl transition-shadow">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="flex mb-2 sm:mb-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="sm:ml-3 text-base sm:text-lg font-semibold text-green-700">Amazing Results!</span>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              I've been using VitalityBoost for a month now, and I can really feel the difference in my energy
              levels. Highly recommended!
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="flex mb-2 sm:mb-0">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
              </div>
              <span className="sm:ml-3 text-base sm:text-lg font-semibold text-green-700">Good Product</span>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              I've noticed an improvement in my focus and overall well-being. The only reason I'm not giving 5
              stars is the price, but it's worth it.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
              <div className="flex mb-2 sm:mb-0">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="sm:ml-3 text-base sm:text-lg font-semibold text-green-700">Life-Changing!</span>
            </div>
            <p className="text-sm sm:text-base text-gray-700">
              VitalityBoost has changed the way I approach my daily routine. More energy, better focus, and overall
              improved health. Couldn't be happier!
            </p>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="outline" className="w-full sm:w-auto flex items-center hover:bg-green-100 transition">
            Read All Reviews
          </Button>
        </CardFooter>
      </Card>

      <Card className="mt-8 sm:mt-12 p-4 sm:p-6 bg-green-50 rounded-lg shadow-inner">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">Related Products</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {[
              { name: "VitalityBoost Energy Booster", price: "$29.99", image: "/related1.svg" },
              { name: "VitalityBoost Immune Support", price: "$34.99", image: "/related2.svg" },
              { name: "VitalityBoost Focus Formula", price: "$27.99", image: "/related3.svg" }
            ].map((product, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto rounded-t-lg"
                />
                <CardContent>
                  <h2 className="text-base sm:text-lg font-semibold">{product.name}</h2>
                  <p className="text-sm sm:text-base text-gray-600">{product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full text-sm" variant="default">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

