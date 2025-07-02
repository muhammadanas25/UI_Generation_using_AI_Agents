import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Check } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <header className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-2 sm:mb-4">GlowBoxMonthly</h1>
          <p className="text-lg sm:text-xl text-gray-600">Discover your perfect beauty routine, one box at a time.</p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {[
            {
              title: "Starter Glow",
              price: "$19.99",
              description: "Perfect for beauty beginners",
              features: ["3-4 sample-sized products", "Monthly beauty tips", "Access to community forums"],
            },
            {
              title: "Radiant Glow",
              price: "$34.99",
              description: "Our most popular plan",
              features: ["5-6 full-sized products", "Exclusive beauty tutorials", "Early access to new products", "Free shipping"],
            },
            {
              title: "Ultimate Glow",
              price: "$49.99",
              description: "For the beauty enthusiast",
              features: ["7-8 full-sized premium products", "Personalized beauty consultation", "Luxury beauty tool each quarter", "Priority shipping"],
            },
          ].map((tier, index) => (
            <Card key={index} className={`${index === 1 ? "border-purple-400 border-2" : ""} flex flex-col`}>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold text-purple-700">{tier.title}</CardTitle>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">{tier.price}<span className="text-base font-normal text-gray-600">/month</span></p>
                <ul className="space-y-2">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Subscribe Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-4 sm:mb-6 text-center">This Month's Glow Box</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Radiant Serum", brand: "GlowUp" },
              { name: "Hydrating Mask", brand: "MoistMaster" },
              { name: "Illuminating Powder", brand: "ShineOn" },
              { name: "Gentle Cleanser", brand: "PureSkin" },
            ].map((product, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg shadow-md p-2 sm:p-4 mb-2">
                  <img
                    src={`/placeholder.svg?height=150&width=150`}
                    alt={product.name}
                    className="w-full h-auto object-cover rounded"
                  />
                </div>
                <h3 className="font-semibold text-purple-700 text-sm sm:text-base">{product.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{product.brand}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 mb-3 sm:mb-4">Why Choose GlowBoxMonthly?</h2>
          <div className="flex justify-center mb-3 sm:mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">Join thousands of happy subscribers and transform your beauty routine!</p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <Badge className="text-xs sm:text-sm py-1 px-2 sm:px-3 bg-purple-100 text-purple-800">Cruelty-Free</Badge>
            <Badge className="text-xs sm:text-sm py-1 px-2 sm:px-3 bg-purple-100 text-purple-800">Vegan Options</Badge>
            <Badge className="text-xs sm:text-sm py-1 px-2 sm:px-3 bg-purple-100 text-purple-800">Eco-Friendly</Badge>
            <Badge className="text-xs sm:text-sm py-1 px-2 sm:px-3 bg-purple-100 text-purple-800">Dermatologist Approved</Badge>
          </div>
        </section>
      </div>
    </div>
  )
}

