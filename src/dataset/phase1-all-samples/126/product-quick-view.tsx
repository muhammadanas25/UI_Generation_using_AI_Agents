import { useState } from "react"
import { Star, Minus, Plus, X } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Component() {
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Quick View</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px] w-[95vw] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Product Quick View</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="aspect-square relative">
            <img
              alt="Product Image"
              className="object-cover rounded-lg w-full h-full"
              height="400"
              src="/placeholder.svg?height=400&width=400"
              width="400"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex justify-between items-start">
              <h2 className="text-xl sm:text-2xl font-bold">TechHaven Smart Watch</h2>
              <Button variant="ghost" size="icon" className="rounded-full -mt-2 -mr-2">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <div className="mt-2 flex items-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary" />
                ))}
              </div>
              <span className="ml-2 text-xs sm:text-sm text-gray-500">(128 reviews)</span>
            </div>
            <p className="mt-4 text-2xl sm:text-3xl font-bold">$299.99</p>
            <p className="mt-2 text-sm sm:text-base text-gray-600">
              Stay connected and track your fitness with our latest smartwatch. Features include heart rate monitoring,
              GPS, and a vibrant OLED display.
            </p>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-medium mb-2 text-sm sm:text-base">Color</h3>
                <RadioGroup defaultValue="black" className="flex gap-2">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="black" id="black" className="sr-only" />
                    <Label
                      htmlFor="black"
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-900 cursor-pointer ring-2 ring-offset-2 ring-transparent peer-checked:ring-black"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="silver" id="silver" className="sr-only" />
                    <Label
                      htmlFor="silver"
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gray-400 cursor-pointer ring-2 ring-offset-2 ring-transparent peer-checked:ring-black"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="rose-gold" id="rose-gold" className="sr-only" />
                    <Label
                      htmlFor="rose-gold"
                      className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-rose-300 cursor-pointer ring-2 ring-offset-2 ring-transparent peer-checked:ring-black"
                    />
                  </div>
                </RadioGroup>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-sm sm:text-base">Size</h3>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="38mm">38mm</SelectItem>
                    <SelectItem value="42mm">42mm</SelectItem>
                    <SelectItem value="44mm">44mm</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-sm sm:text-base">Quantity</h3>
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="icon" onClick={decrementQuantity} className="h-8 w-8 sm:h-10 sm:w-10">
                    <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="sr-only">Decrease quantity</span>
                  </Button>
                  <span className="w-8 sm:w-12 text-center text-sm sm:text-base">{quantity}</span>
                  <Button variant="outline" size="icon" onClick={incrementQuantity} className="h-8 w-8 sm:h-10 sm:w-10">
                    <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="sr-only">Increase quantity</span>
                  </Button>
                </div>
              </div>
            </div>
            <Button className="mt-6">Add to Cart</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

