import { Star, ShoppingCart, Heart, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip } from "@/components/ui/tooltip"

export default function ProductPage() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/product1.jpg",
    "/product2.jpg",
    "/product3.jpg",
  ]

  const reviews = [
    { name: "Sarah L.", rating: 5, comment: "Amazing product! My skin has never looked better." },
    { name: "Michael R.", rating: 4, comment: "Great serum, saw results in just a few weeks." },
    { name: "Emily T.", rating: 5, comment: "Love how it makes my skin feel. Will buy again!" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-green-600">GlowNaturals</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="text-gray-700 hover:text-green-600 transition">Home</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-600 transition">Products</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-600 transition">About</a></li>
              <li><a href="#" className="text-gray-700 hover:text-green-600 transition">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="relative">
            <img
              src={images[currentImage]}
              alt="GlowNaturals Radiance Serum"
              className="rounded-lg shadow-lg w-full transition transform hover:scale-105 duration-300"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full ${currentImage === index ? 'bg-green-600' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <Tooltip content="Add to Wishlist">
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow hover:bg-green-50 transition">
                <Heart className="w-5 h-5 text-red-500" />
              </button>
            </Tooltip>
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-800">GlowNaturals Radiance Serum</h1>
            <p className="text-lg text-gray-600">
              Unlock your skin's natural radiance with our powerful, all-natural serum.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-green-600">$49.99</span>
              <Badge className="bg-green-100 text-green-800">20% OFF</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <label htmlFor="quantity" className="text-gray-700">Quantity:</label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min="1"
                defaultValue="1"
                className="w-16 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button size="lg" className="flex-1 flex items-center justify-center bg-green-600 hover:bg-green-700 transition">
                <ShoppingCart className="mr-2 h-5 w-5" /> Buy Now
              </Button>
              <Button size="lg" variant="outline" className="flex-1 flex items-center justify-center hover:bg-green-50 transition">
                <Heart className="mr-2 h-5 w-5 text-red-500" /> Add to Wishlist
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Share:</span>
              <a href="#" className="text-gray-600 hover:text-green-600 transition"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 12a4 4 0 118 0 4 4 0 01-8 0zm-3 0a7 7 0 1114 0 7 7 0 01-14 0zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/></svg></a>
              <a href="#" className="text-gray-600 hover:text-blue-600 transition"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.633 7.997a7.992 7.992 0 01-2.287.631 4.082 4.082 0 001.804-2.245 7.91 7.91 0 01-2.605.996A4.07 4.07 0 0014.616 6c-2.267 0-4.11 1.843-4.11 4.11 0 .322.036.636.105.936A11.627 11.627 0 013 5.127a4.107 4.107 0 001.27 5.473 4.077 4.077 0 01-1.86-.513v.05c0 2.002 1.43 3.669 3.325 4.037a4.096 4.096 0 01-1.853.07 4.08 4.08 0 003.817 2.839A8.204 8.204 0 012 18.407 11.616 11.616 0 008.29 20c7.547 0 11.675-6.254 11.675-11.675 0-.178-.004-.355-.012-.53A8.364 8.364 0 0024 5.565a8.19 8.19 0 01-2.367.651z"/></svg></a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-12">
          <Card className="animate-fadeIn">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Key Ingredients</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Hyaluronic Acid - Hydrates and plumps skin</li>
                <li>Vitamin C - Brightens and evens skin tone</li>
                <li>Niacinamide - Reduces pores and improves texture</li>
                <li>Jojoba Oil - Nourishes and balances skin</li>
                <li>Green Tea Extract - Protects against free radicals</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="animate-fadeIn">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-800">{review.name}</span>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${i < review.rating ? "text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 mt-2">{review.comment}</p>
                  </div>
                ))}
                <Button variant="link" className="text-green-600 hover:underline">
                  Read more reviews
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <section className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Related Products</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1,2,3,4].map((item) => (
              <Card key={item} className="hover:shadow-lg transition">
                <CardContent className="p-4">
                  <img src={`/related${item}.jpg`} alt={`Related Product ${item}`} className="rounded-lg mb-4 w-full h-40 object-cover" />
                  <h3 className="text-xl font-semibold mb-2">Product {item}</h3>
                  <p className="text-gray-600 mb-4">Description of related product {item}.</p>
                  <Button size="sm" className="w-full bg-green-600 hover:bg-green-700 transition">
                    <ShoppingCart className="mr-2 h-4 w-4" /> Buy Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white shadow mt-16">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700">&copy; {new Date().getFullYear()} GlowNaturals. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-green-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.396 2.824 8.157 6.844 9.46.5.092.682-.217.682-.483 0-.237-.01-.868-.015-1.703-2.782.605-3.369-1.34-3.369-1.34-.454-1.153-1.11-1.458-1.11-1.458-.907-.62.069-.608.069-.608 1.002.07 1.531 1.028 1.531 1.028.892 1.53 2.341 1.089 2.91.833.092-.647.35-1.089.636-1.338-2.22-.253-4.555-1.11-4.555-4.944 0-1.091.39-1.984 1.029-2.682-.103-.254-.446-1.28.098-2.664 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.384.202 2.41.1 2.664.64.698 1.028 1.591 1.028 2.682 0 3.842-2.337 4.687-4.566 4.936.359.309.678.918.678 1.85 0 1.336-.012 2.416-.012 2.747 0 .268.18.58.688.482A10.013 10.013 0 0022 12c0-5.523-4.477-10-10-10z"/></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8a8.18 8.18 0 01-2.357.645A4.118 4.118 0 0020.447 6c-.884.52-1.863.899-2.916 1.098A4.092 4.092 0 0013.85 4c-2.267 0-4.11 1.843-4.11 4.11 0 .322.036.636.105.936A11.627 11.627 0 013 5.127a4.107 4.107 0 001.27 5.473 4.077 4.077 0 01-1.86-.513v.05c0 2.002 1.43 3.669 3.325 4.037a4.096 4.096 0 01-1.853.07 4.08 4.08 0 003.817 2.839A8.204 8.204 0 012 18.407 11.616 11.616 0 008.29 20c7.547 0 11.675-6.254 11.675-11.675 0-.178-.004-.355-.012-.53A8.364 8.364 0 0024 5.565a8.19 8.19 0 01-2.367.651z"/></svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-red-600 transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.417.403a4.92 4.92 0 011.675 1.097 4.92 4.92 0 011.097 1.675c.163.447.349 1.247.403 2.417.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.417a4.92 4.92 0 01-1.097 1.675 4.92 4.92 0 01-1.675 1.097c-.447.163-1.247.349-2.417.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.417-.403a4.92 4.92 0 01-1.675-1.097 4.92 4.92 0 01-1.097-1.675c-.163-.447-.349-1.247-.403-2.417C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.417a4.92 4.92 0 011.097-1.675 4.92 4.92 0 011.675-1.097c.447-.163 1.247-.349 2.417-.403C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.833.33 4.09.582a6.92 6.92 0 00-2.5 1.64A6.92 6.92 0 00.582 4.09c-.252.743-.45 1.681-.51 2.962C.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.258 2.219.51 2.962a6.92 6.92 0 001.64 2.5 6.92 6.92 0 002.5 1.64c.743.252 1.681.45 2.962.51 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.281-.059 2.219-.258 2.962-.51a6.92 6.92 0 002.5-1.64 6.92 6.92 0 001.64-2.5c.252-.743.45-1.681.51-2.962.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.258-2.219-.51-2.962a6.92 6.92 0 00-1.64-2.5A6.92 6.92 0 0019.91.582c-.743-.252-1.681-.45-2.962-.51C15.668.013 15.259 0 12 0z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}