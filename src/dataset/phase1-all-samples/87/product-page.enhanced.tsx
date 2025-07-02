import { useState } from 'react'
import { Star, ShoppingCart, ChevronDown, ChevronUp, Heart, ImageIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { motion, AnimatePresence } from 'framer-motion'

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('description')
  const [selectedImage, setSelectedImage] = useState('/placeholder.svg?height=400&width=400')
  const [isHovered, setIsHovered] = useState(false)

  const incrementQuantity = () => setQuantity(prev => prev + 1)
  const decrementQuantity = () => setQuantity(prev => prev > 1 ? prev - 1 : 1)

  const tabs = [
    { name: 'description', label: 'Description' },
    { name: 'ingredients', label: 'Ingredients' },
    { name: 'nutrition', label: 'Nutrition' },
    { name: 'reviews', label: 'Reviews' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        className="grid md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Product Images */}
        <div className="space-y-4">
          <motion.img
            src={selectedImage}
            alt="Organic Quinoa"
            className="w-full h-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => setIsHovered(true)}
          />
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <img
                key={i}
                src={`/placeholder.svg?height=100&width=100`}
                alt={`Thumbnail ${i}`}
                className={`w-full h-auto rounded-md cursor-pointer border ${selectedImage === `/placeholder.svg?height=100&width=100` ? 'border-primary' : 'border-transparent'} hover:border-primary transition-colors duration-300`}
                onClick={() => setSelectedImage(`/placeholder.svg?height=100&width=100`)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold">Organic Quinoa</h1>
          <div className="flex items-center space-x-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">(128 reviews)</span>
          </div>
          <p className="text-2xl font-bold text-primary">$12.99</p>
          <p className="text-muted-foreground">Premium organic quinoa sourced from sustainable farms.</p>
          <div className="flex items-center space-x-4">
            <div className="flex items-center border rounded-md">
              <Button variant="ghost" size="icon" onClick={decrementQuantity} aria-label="Decrease quantity">
                <ChevronDown className="h-4 w-4" />
              </Button>
              <span className="px-4">{quantity}</span>
              <Button variant="ghost" size="icon" onClick={incrementQuantity} aria-label="Increase quantity">
                <ChevronUp className="h-4 w-4" />
              </Button>
            </div>
            <Button className="flex-1 flex items-center justify-center hover:bg-primary-dark transition-colors duration-300">
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
            <Tooltip>
              <TooltipTrigger>
                <Button variant="ghost" className="p-2 hover:bg-gray-100 transition-colors duration-300">
                  <Heart className="h-5 w-5 text-red-500" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Wishlist</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </motion.div>

      {/* Product Tabs */}
      <div className="mt-12">
        <div className="border-b">
          <nav className="flex space-x-8" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`py-4 px-1 border-b-2 font-medium text-sm focus:outline-none transition-colors duration-300 ${
                  activeTab === tab.name
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-primary hover:border-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={activeTab}
            className="mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y:0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'description' && (
              <p className="text-lg text-muted-foreground">
                Our organic quinoa is a nutrient-packed superfood that's perfect for health-conscious food lovers. 
                Sourced from sustainable farms, this versatile grain is rich in protein, fiber, and essential amino acids. 
                Its light, fluffy texture and nutty flavor make it an excellent base for salads, sides, and main dishes.
              </p>
            )}

            {activeTab === 'ingredients' && (
              <ul className="list-disc pl-5 text-lg text-muted-foreground">
                <li>100% Organic Quinoa</li>
                <li>Water</li>
                <li>Packaging: Recyclable Material</li>
              </ul>
            )}

            {activeTab === 'nutrition' && (
              <Card>
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Nutrition Facts</h3>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[180px]">Nutrient</TableHead>
                        <TableHead>Amount Per Serving</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>Calories</TableCell>
                        <TableCell>120</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Total Fat</TableCell>
                        <TableCell>2g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Carbohydrates</TableCell>
                        <TableCell>21g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Protein</TableCell>
                        <TableCell>4g</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Fiber</TableCell>
                        <TableCell>3g</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-4">
                {[1, 2, 3].map((review) => (
                  <Card key={review} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-semibold">Great product!</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        This quinoa is fantastic! It cooks perfectly every time and has a wonderful flavor. 
                        I love that it's organic and sustainably sourced. Will definitely buy again!
                      </p>
                    </CardContent>
                  </Card>
                ))}
                <Button className="mt-4">Read All Reviews</Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((product) => (
            <Card key={product} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-4">
                <img
                  src="/placeholder.svg?height=200&width=200"
                  alt={`Related Product ${product}`}
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardHeader>
              <CardContent>
                <CardTitle className="text-lg font-semibold">Organic Product {product}</CardTitle>
                <CardDescription className="text-primary font-bold">$9.99</CardDescription>
                <Button className="mt-4 w-full flex items-center justify-center">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}