import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Star } from 'lucide-react'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ProductListing() {
  const filters = [
    {
      name: "Skin Type",
      options: ["Normal", "Dry", "Oily", "Combination", "Sensitive"],
    },
    {
      name: "Product Type",
      options: ["Cleanser", "Moisturizer", "Serum", "Sunscreen", "Mask"],
    },
    {
      name: "Brand",
      options: ["GlowBox", "Luminous", "Radiant", "Bloom", "Glow Up"],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">GlowBox</h1>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-4 md:py-8">
        <div className="flex flex-col gap-4 md:gap-8">
          <aside className="w-full md:w-64 space-y-2 md:space-y-4 flex flex-wrap md:flex-col gap-2">
            {filters.map((filter) => (
              <DropdownMenu key={filter.name}>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full md:w-auto justify-between">
                    {filter.name}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>Select {filter.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {filter.options.map((option, index) => (
                    <DropdownMenuCheckboxItem key={option} checked={index === 0}>
                      {option}
                    </DropdownMenuCheckboxItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          </aside>
          <section className="flex-grow">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6].map((product) => (
                <Card key={product} className="flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={`/placeholder.svg?height=200&width=300`}
                      alt={`Product ${product}`}
                      width={300}
                      height={200}
                      className="object-cover w-full h-40 md:h-48 rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="flex-grow p-3 md:p-4">
                    <CardTitle className="text-lg md:text-xl">Glow Serum</CardTitle>
                    <CardDescription className="text-sm md:text-base">Radiant skin in a bottle</CardDescription>
                    <div className="flex items-center mt-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-3 h-3 md:w-4 md:h-4 fill-current text-yellow-400" />
                      ))}
                      <span className="ml-2 text-xs md:text-sm text-gray-600">(120 reviews)</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-3 md:p-4">
                    <div className="flex justify-between items-center w-full">
                      <span className="text-base md:text-lg font-semibold">$29.99</span>
                      <Button size="sm" className="text-sm md:text-base">Add to Cart</Button>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>
        </div>
      </main>
      <footer className="bg-gray-100 py-4 mt-4 md:mt-8">
        <div className="container mx-auto px-4 text-center text-xs md:text-sm text-gray-600">
          © 2023 GlowBox. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

