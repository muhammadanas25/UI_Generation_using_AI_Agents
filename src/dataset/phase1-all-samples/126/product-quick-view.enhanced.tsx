import { useState } from "react"
import { Star, Minus, Plus, X, Heart, Share2 } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Transition } from "@headlessui/react"

export default function Component() {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState("/placeholder.svg?height=400&width=400")

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1))

  const images = [
    "/placeholder.svg?height=400&width=400",
    "/placeholder2.svg?height=400&width=400",
    "/placeholder3.svg?height=400&width=400",
  ]

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="px-4 py-2 transition-transform transform hover:scale-105 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary">
          Quick View
        </Button>
      </DialogTrigger>
      <Transition appear show as={Fragment}>
        <DialogContent className="sm:max-w-[700px] p-6 bg-white rounded-xl shadow-lg relative overflow-hidden">
          <DialogHeader>
            <DialogTitle className="sr-only">Product Quick View</DialogTitle>
          </DialogHeader>
          <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors" aria-label="Close">
            <X className="h-6 w-6" />
          </button>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <img
                alt="Product Image"
                className="object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
                height="400"
                src={selectedImage}
                width="400"
              />
              <div className="flex mt-4 space-x-2">
                {images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-16 h-16 border rounded-lg overflow-hidden hover:border-primary transition-border ${
                      selectedImage === img ? "border-primary" : "border-gray-300"
                    }`}
                  >
                    <img src={img} alt={`Thumbnail ${index + 1}`} className="object-cover w-full h-full" />
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between items-start">
                <h2 className="text-2xl font-bold text-gray-800">TechHaven Smart Watch</h2>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                    <Heart className="h-5 w-5 text-red-500" />
                    <span className="sr-only">Add to Wishlist</span>
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-100">
                    <Share2 className="h-5 w-5 text-gray-600" />
                    <span className="sr-only">Share</span>
                  </Button>
                </div>
              </div>
              <div className="mt-2 flex items-center">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-500">(128 reviews)</span>
              </div>
              <p className="mt-4 text-3xl font-bold text-gray-900 transition-transform transform hover:text-primary">$299.99</p>
              <p className="mt-2 text-gray-600">
                Stay connected and track your fitness with our latest smartwatch. Features include heart rate monitoring,
                GPS, and a vibrant OLED display.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <h3 className="font-medium mb-2 text-gray-700">Color</h3>
                  <RadioGroup defaultValue="black" className="flex gap-3">
                    <div className="flex items-center">
                      <RadioGroupItem value="black" id="black" className="sr-only" />
                      <Label
                        htmlFor="black"
                        className="w-10 h-10 rounded-full bg-gray-900 cursor-pointer border-2 border-transparent transition-transform transform hover:scale-110 peer-checked:border-primary"
                      />
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="silver" id="silver" className="sr-only" />
                      <Label
                        htmlFor="silver"
                        className="w-10 h-10 rounded-full bg-gray-400 cursor-pointer border-2 border-transparent transition-transform transform hover:scale-110 peer-checked:border-primary"
                      />
                    </div>
                    <div className="flex items-center">
                      <RadioGroupItem value="rose-gold" id="rose-gold" className="sr-only" />
                      <Label
                        htmlFor="rose-gold"
                        className="w-10 h-10 rounded-full bg-rose-300 cursor-pointer border-2 border-transparent transition-transform transform hover:scale-110 peer-checked:border-primary"
                      />
                    </div>
                  </RadioGroup>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-gray-700">Size</h3>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border border-gray-200 rounded-md">
                      <SelectItem value="38mm">38mm</SelectItem>
                      <SelectItem value="42mm">42mm</SelectItem>
                      <SelectItem value="44mm">44mm</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-gray-700">Quantity</h3>
                  <div className="flex items-center space-x-3">
                    <Button variant="outline" size="icon" onClick={decrementQuantity} className="hover:bg-gray-100">
                      <Minus className="h-5 w-5" />
                      <span className="sr-only">Decrease quantity</span>
                    </Button>
                    <span className="w-12 text-center text-gray-700">{quantity}</span>
                    <Button variant="outline" size="icon" onClick={incrementQuantity} className="hover:bg-gray-100">
                      <Plus className="h-5 w-5" />
                      <span className="sr-only">Increase quantity</span>
                    </Button>
                  </div>
                </div>
              </div>
              <Button className="mt-6 bg-primary text-white hover:bg-primary-dark transition-colors flex items-center justify-center">
                Add to Cart
              </Button>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-500 opacity-10 pointer-events-none"></div>
        </DialogContent>
      </Transition>
    </Dialog>
  )
}