import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, ShoppingCart, Star, Menu } from 'lucide-react'
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function ProductPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-bold">TechDownloads</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Products</Link></li>
              <li><Link href="#" className="hover:text-gray-300">About</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden mt-2 px-4">
            <ul className="flex flex-col space-y-2">
              <li><Link href="#" className="block py-2 hover:text-gray-300">Home</Link></li>
              <li><Link href="#" className="block py-2 hover:text-gray-300">Products</Link></li>
              <li><Link href="#" className="block py-2 hover:text-gray-300">About</Link></li>
              <li><Link href="#" className="block py-2 hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Product Image"
              width={400}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Pro Video Editor Suite</h2>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-sm sm:text-base text-gray-600">(128 reviews)</span>
            </div>
            <p className="text-lg sm:text-xl font-bold mb-4">$79.99</p>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Unlock your creativity with our Pro Video Editor Suite. This comprehensive package includes
              powerful tools for video editing, color grading, and special effects. Perfect for professionals
              and enthusiasts alike.
            </p>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Instant Delivery</CardTitle>
                <CardDescription>Get your software in seconds</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">
                  Upon purchase, you'll receive an email with your unique download link and license key.
                  Start editing right away!
                </p>
              </CardContent>
            </Card>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="w-full sm:w-auto">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                <Download className="mr-2 h-4 w-4" /> Download Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">Product Features</h3>
          <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
            <li>Advanced video editing tools</li>
            <li>Professional color grading suite</li>
            <li>Extensive library of transitions and effects</li>
            <li>Multi-track timeline editing</li>
            <li>4K and 8K resolution support</li>
            <li>Automatic updates for 1 year</li>
          </ul>
        </div>

        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-bold mb-4">System Requirements</h3>
          <Card>
            <CardContent className="grid sm:grid-cols-2 gap-4 pt-6">
              <div>
                <h4 className="font-bold text-base sm:text-lg">Windows:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                  <li>Windows 10 (64-bit)</li>
                  <li>8GB RAM (16GB recommended)</li>
                  <li>2GB free disk space</li>
                  <li>DirectX 11 compatible graphics card</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-base sm:text-lg mt-4 sm:mt-0">macOS:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm sm:text-base">
                  <li>macOS 10.15 or later</li>
                  <li>8GB RAM (16GB recommended)</li>
                  <li>2GB free disk space</li>
                  <li>Metal-compatible graphics card</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">About TechDownloads</h4>
              <p className="text-sm sm:text-base">We provide high-quality digital products for professionals and enthusiasts.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li><Link href="#" className="hover:text-gray-300">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-gray-300">Refund Policy</Link></li>
                <li><Link href="#" className="hover:text-gray-300">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Us</h4>
              <p className="text-sm sm:text-base">Email: support@techdownloads.com</p>
              <p className="text-sm sm:text-base">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 text-center text-sm sm:text-base">
            <p>&copy; 2023 TechDownloads. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

