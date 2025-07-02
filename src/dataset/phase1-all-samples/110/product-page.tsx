import { Star, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="VitalityBoost Supplement"
            className="rounded-lg shadow-lg w-full h-auto"
            width={400}
            height={400}
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">VitalityBoost Ultimate Energy Complex</h1>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">(128 reviews)</span>
            </div>
            <p className="text-xl font-semibold mb-4">$39.99</p>
            <p className="mb-4">60 capsules (30-day supply)</p>
          </div>
          <div>
            <Button className="w-full mb-4">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Product Details</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">
                  VitalityBoost Ultimate Energy Complex is a premium health supplement designed to enhance your
                  energy levels, support overall well-being, and promote vitality.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Tabs defaultValue="benefits" className="mt-6 sm:mt-8">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="benefits">Health Benefits</TabsTrigger>
          <TabsTrigger value="dosage">Dosage</TabsTrigger>
          <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
        </TabsList>
        <TabsContent value="benefits">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Health Benefits</CardTitle>
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
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dosage Recommendations</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm sm:text-base mb-4">
                Take 2 capsules daily with a meal, preferably in the morning. Do not exceed the recommended
                dosage. For best results, use consistently for at least 30 days.
              </p>
              <p className="text-sm sm:text-base font-semibold">
                Caution: Consult with a healthcare professional before use if you are pregnant, nursing, have a
                medical condition, or are taking any medications.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="ingredients">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ingredients</CardTitle>
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

      <Card className="mt-6 sm:mt-8">
        <CardHeader>
          <CardTitle className="text-lg">Customer Reviews</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex items-center mb-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-sm font-semibold">Amazing Results!</span>
              </div>
              <p className="text-sm text-gray-600">
                I've been using VitalityBoost for a month now, and I can really feel the difference in my energy
                levels. Highly recommended!
              </p>
            </div>
            <div>
              <div className="flex items-center mb-1">
                <div className="flex">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <Star className="w-4 h-4 text-gray-300" />
                </div>
                <span className="ml-2 text-sm font-semibold">Good Product</span>
              </div>
              <p className="text-sm text-gray-600">
                I've noticed an improvement in my focus and overall well-being. The only reason I'm not giving 5
                stars is the price, but it's worth it.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full sm:w-auto">Read All Reviews</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

