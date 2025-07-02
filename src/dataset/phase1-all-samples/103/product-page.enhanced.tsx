import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ShoppingCart, Star, Heart, HeartFilled } from "lucide-react"
import { useState } from "react"

export default function ProductPage() {
  const [liked, setLiked] = useState(false)

  const toggleLike = () => {
    setLiked(!liked)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold">TechDownloads</h1>
          <nav>
            <ul className="flex space-x-6 text-lg">
              <li><a href="#" className="hover:text-gray-300 transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Products</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-gray-300 transition-colors">Contact</a></li>
            </ul>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="p-2 hover:bg-indigo-700 rounded-full transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </Button>
            <Button variant="ghost" className="p-2 hover:bg-indigo-700 rounded-full transition-colors">
              <HeartFilled className={`w-6 h-6 ${liked ? 'text-red-500' : 'text-gray-300'}`} onClick={toggleLike} />
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="/product-image.svg"
              alt="Pro Video Editor Suite"
              className="w-full rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
            />
            <div className="flex space-x-4 mt-4">
              <img
                src="/thumbnail1.svg"
                alt="Thumbnail 1"
                className="w-20 h-20 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
              <img
                src="/thumbnail2.svg"
                alt="Thumbnail 2"
                className="w-20 h-20 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
              <img
                src="/thumbnail3.svg"
                alt="Thumbnail 3"
                className="w-20 h-20 rounded-md cursor-pointer hover:opacity-80 transition-opacity duration-200"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Pro Video Editor Suite</h2>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-gray-600">(128 reviews)</span>
            </div>
            <p className="text-2xl font-semibold text-indigo-600 mb-4">$79.99</p>
            <p className="text-gray-700 mb-6">
              Unlock your creativity with our Pro Video Editor Suite. This comprehensive package includes
              powerful tools for video editing, color grading, and special effects. Perfect for professionals
              and enthusiasts alike.
            </p>
            <Card className="mb-6 animate-fade-in">
              <CardHeader>
                <CardTitle>Instant Delivery</CardTitle>
                <CardDescription>Get your software in seconds</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Upon purchase, you'll receive an email with your unique download link and license key.
                  Start editing right away!
                </p>
              </CardContent>
            </Card>
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              <Button className="flex-1 flex items-center justify-center hover:bg-indigo-700 transition-colors">
                <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
              </Button>
              <Button variant="outline" className="flex-1 flex items-center justify-center hover:bg-gray-100 transition-colors">
                <Download className="mr-2 h-5 w-5" /> Download Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Product Features</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="list-disc pl-6 space-y-3 text-lg text-gray-700">
              <li>Advanced video editing tools</li>
              <li>Professional color grading suite</li>
              <li>Extensive library of transitions and effects</li>
              <li>Multi-track timeline editing</li>
              <li>4K and 8K resolution support</li>
              <li>Automatic updates for 1 year</li>
            </ul>
            <img
              src="/features-illustration.svg"
              alt="Features Illustration"
              className="w-full h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">System Requirements</h3>
          <Card className="animate-fade-in">
            <CardContent className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">Windows:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Windows 10 (64-bit)</li>
                  <li>8GB RAM (16GB recommended)</li>
                  <li>2GB free disk space</li>
                  <li>DirectX 11 compatible graphics card</li>
                </ul>
              </div>
              <div>
                <h4 className="text-2xl font-semibold text-gray-800 mb-3">macOS:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>macOS 10.15 or later</li>
                  <li>8GB RAM (16GB recommended)</li>
                  <li>2GB free disk space</li>
                  <li>Metal-compatible graphics card</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Related Products</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center">
                <img
                  src="/related1.svg"
                  alt="Related Product 1"
                  className="w-32 h-32 mb-4 rounded-full shadow-md"
                />
                <h4 className="text-xl font-semibold mb-2">Audio Master Pro</h4>
                <p className="text-gray-600 mb-4">$59.99</p>
                <Button className="w-full flex items-center justify-center">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center">
                <img
                  src="/related2.svg"
                  alt="Related Product 2"
                  className="w-32 h-32 mb-4 rounded-full shadow-md"
                />
                <h4 className="text-xl font-semibold mb-2">Graphic Design Suite</h4>
                <p className="text-gray-600 mb-4">$89.99</p>
                <Button className="w-full flex items-center justify-center">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="flex flex-col items-center">
                <img
                  src="/related3.svg"
                  alt="Related Product 3"
                  className="w-32 h-32 mb-4 rounded-full shadow-md"
                />
                <h4 className="text-xl font-semibold mb-2">Motion Graphics Pack</h4>
                <p className="text-gray-600 mb-4">$39.99</p>
                <Button className="w-full flex items-center justify-center">
                  <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-2xl font-bold mb-4">About TechDownloads</h4>
              <p className="text-gray-200">
                We provide high-quality digital products for professionals and enthusiasts. Elevate your creative projects with our cutting-edge tools.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors">Refund Policy</a></li>
                <li><a href="#" className="hover:text-gray-400 transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-4">Contact Us</h4>
              <p className="text-gray-200">Email: support@techdownloads.com</p>
              <p className="text-gray-200">Phone: (555) 123-4567</p>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.946 13.946 0 0 1 1.675 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.634A10.025 10.025 0 0 0 24 4.557z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.52 0-10 4.48-10 10A9.96 9.96 0 0 0 12 22a9.96 9.96 0 0 0 10-10c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8a7.99 7.99 0 0 1 5.66 2.34A7.99 7.99 0 0 1 20 12c0 4.41-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                  </svg>
                </a>
                <a href="#" className="hover:text-gray-400 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.372 0 0 5.372 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.42-1.305.763-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.22 0 4.61-2.805 5.625-5.475 5.92.43.37.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .317.216.694.825.576C20.565 21.795 24 17.3 24 12c0-6.628-5.372-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center border-t border-gray-700 pt-6">
            <p>&copy; 2023 TechDownloads. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}