import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Menu } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            HomeDIY
          </Link>
          <nav className="hidden md:flex space-x-4">
            <Link href="/tutorials" className="text-gray-600 hover:text-gray-800">
              Tutorials
            </Link>
            <Link href="/tips" className="text-gray-600 hover:text-gray-800">
              Design Tips
            </Link>
            <Link href="/before-after" className="text-gray-600 hover:text-gray-800">
              Before & After
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <form className="hidden md:block">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                <Input placeholder="Search" className="pl-8" />
              </div>
            </form>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>10 Budget-Friendly Kitchen Makeover Ideas</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Kitchen makeover"
                    className="w-full h-48 md:h-64 object-cover rounded-md mb-4"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "350/200",
                      objectFit: "cover",
                    }}
                    width="350"
                  />
                  <p className="text-gray-600">
                    Transform your kitchen without breaking the bank with these clever and affordable ideas...
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage alt="Sarah Johnson" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">Sarah Johnson</span>
                  </div>
                  <Badge>Tutorial</Badge>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Before & After: A Stunning Living Room Transformation</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Living room transformation"
                    className="w-full h-48 md:h-64 object-cover rounded-md mb-4"
                    height="200"
                    src="/placeholder.svg"
                    style={{
                      aspectRatio: "350/200",
                      objectFit: "cover",
                    }}
                    width="350"
                  />
                  <p className="text-gray-600">
                    See how this dated living room was transformed into a modern, cozy space...
                  </p>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage alt="Mike Thompson" src="/placeholder-avatar.jpg" />
                      <AvatarFallback>MT</AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-gray-600">Mike Thompson</span>
                  </div>
                  <Badge>Before & After</Badge>
                </CardFooter>
              </Card>
            </div>
          </div>
          <aside className="lg:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle>Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/category/tutorials" className="text-blue-600 hover:underline">
                      Tutorials
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/design-tips" className="text-blue-600 hover:underline">
                      Design Tips
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/before-after" className="text-blue-600 hover:underline">
                      Before & After
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/diy-projects" className="text-blue-600 hover:underline">
                      DIY Projects
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Popular Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-4">
                    <img
                      alt="DIY Shelving"
                      className="w-16 h-16 rounded object-cover"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div>
                      <h3 className="font-semibold">5 Easy DIY Shelving Ideas</h3>
                      <p className="text-sm text-gray-600">1.2k views</p>
                    </div>
                  </li>
                  <li className="flex items-center space-x-4">
                    <img
                      alt="Paint Colors"
                      className="w-16 h-16 rounded object-cover"
                      height="64"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "64/64",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div>
                      <h3 className="font-semibold">Choosing the Perfect Paint Colors</h3>
                      <p className="text-sm text-gray-600">980 views</p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl font-bold">HomeDIY</h2>
              <p className="text-sm">Your go-to source for home renovation inspiration</p>
            </div>
            <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-center md:text-left">
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
              <Link href="/privacy" className="hover:text-gray-300">
                Privacy Policy
              </Link>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 HomeDIY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

