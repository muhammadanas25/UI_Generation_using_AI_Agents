import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf } from 'lucide-react'

const EcoWearBadge = ({ className = "" }) => (
  <div className={`inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800 ${className}`}>
    <Leaf className="mr-1 h-3 w-3" />
    EcoWear
  </div>
)

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <EcoWearBadge className="text-xs sm:text-sm" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 sm:py-12">
        <section className="mb-12 sm:mb-16 text-center">
          <h1 className="mb-3 sm:mb-4 text-3xl sm:text-4xl font-bold">EcoWear Badge</h1>
          <p className="mb-6 sm:mb-8 text-lg sm:text-xl text-gray-600">Highlighting sustainable and eco-friendly products</p>
          <EcoWearBadge className="text-base sm:text-lg" />
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold">How it works</h2>
          <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Sustainable Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">
                  Products must be made from at least 70% sustainable or recycled materials.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Ethical Production</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">
                  Manufacturers must adhere to fair labor practices and maintain a low carbon footprint.
                </p>
              </CardContent>
            </Card>
            <Card className="sm:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Eco-Friendly Packaging</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">
                  Products should be packaged using minimal, recyclable, or biodegradable materials.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="mb-4 sm:mb-6 text-xl sm:text-2xl font-semibold">Example Product Listing</h2>
          <Card className="max-w-sm mx-auto">
            <CardHeader>
              <div className="relative h-48 w-full">
                <img
                  src="/placeholder.svg?height=200&width=300"
                  alt="Eco-friendly t-shirt"
                  className="absolute inset-0 h-full w-full rounded-t-lg object-cover"
                />
                <EcoWearBadge className="absolute left-2 top-2" />
              </div>
            </CardHeader>
            <CardContent>
              <h3 className="text-base sm:text-lg font-semibold">Organic Cotton T-Shirt</h3>
              <p className="text-sm sm:text-base text-gray-600">Made from 100% organic cotton</p>
            </CardContent>
            <CardFooter>
              <p className="text-base sm:text-lg font-bold">$29.99</p>
            </CardFooter>
          </Card>
        </section>

        <section className="text-center">
          <h2 className="mb-3 sm:mb-4 text-xl sm:text-2xl font-semibold">Are you a manufacturer?</h2>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600">
            Apply for the EcoWear badge and showcase your commitment to sustainability.
          </p>
          <Button size="lg" className="w-full sm:w-auto">Apply for EcoWear Badge</Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-4 sm:py-6 text-center text-xs sm:text-sm text-gray-600">
        <p>&copy; 2023 EcoWear. All rights reserved.</p>
      </footer>
    </div>
  )
}

