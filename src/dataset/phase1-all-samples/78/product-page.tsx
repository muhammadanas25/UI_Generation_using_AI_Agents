import { Star, ShoppingCart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ProductPage() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="GlowNaturals Radiance Serum"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold">GlowNaturals Radiance Serum</h1>
          <p className="text-base sm:text-lg text-gray-600">
            Unlock your skin's natural radiance with our powerful, all-natural serum.
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-xl sm:text-2xl font-bold">$49.99</span>
            <Badge>20% OFF</Badge>
          </div>
          <Button size="lg" className="w-full">
            <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
          </Button>
        </div>
      </div>

      <div className="mt-8 sm:mt-12 grid md:grid-cols-2 gap-6 md:gap-8">
        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Key Ingredients</h2>
            <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-sm sm:text-base">
              <li>Hyaluronic Acid - Hydrates and plumps skin</li>
              <li>Vitamin C - Brightens and evens skin tone</li>
              <li>Niacinamide - Reduces pores and improves texture</li>
              <li>Jojoba Oil - Nourishes and balances skin</li>
              <li>Green Tea Extract - Protects against free radicals</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4 sm:p-6">
            <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Customer Reviews</h2>
            <div className="space-y-3 sm:space-y-4">
              {[
                { name: "Sarah L.", rating: 5, comment: "Amazing product! My skin has never looked better." },
                { name: "Michael R.", rating: 4, comment: "Great serum, saw results in just a few weeks." },
                { name: "Emily T.", rating: 5, comment: "Love how it makes my skin feel. Will buy again!" },
              ].map((review, index) => (
                <div key={index} className="border-b pb-3 sm:pb-4 last:border-b-0">
                  <div className="flex flex-wrap items-center space-x-2">
                    <span className="font-semibold text-sm sm:text-base">{review.name}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 sm:w-4 sm:h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">{review.comment}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

