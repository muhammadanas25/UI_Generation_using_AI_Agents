import Link from "next/link"
import { ShoppingCart, Menu, ChevronRight, Leaf, Droplet, Shield } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6" />
          <span className="sr-only">CleanGreen</span>
        </Link>
        <NavigationMenu className="hidden md:flex ml-auto">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Products</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                        href="#"
                      >
                        <Leaf className="h-6 w-6" />
                        <div className="mb-2 mt-4 text-lg font-medium">Non-Toxic Solutions</div>
                        <p className="text-sm leading-tight text-muted-foreground">
                          Discover our range of eco-friendly, non-toxic cleaning products.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">All-Purpose Cleaners</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Versatile cleaners for multiple surfaces.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Specialty Cleaners</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Targeted solutions for specific cleaning needs.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        href="#"
                      >
                        <div className="text-sm font-medium leading-none">Bundles</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Save with our curated cleaning kits.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">About</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className="font-medium">Contact</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button variant="ghost" size="icon" className="ml-auto md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <Button size="icon" className="ml-4">
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Open cart</span>
        </Button>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Clean Home, Clean Planet
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Discover our range of eco-friendly, non-toxic cleaning solutions for a healthier home and environment.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Shop Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Products</h2>
            <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="All-Purpose Cleaner"
                  className="object-cover w-full h-60"
                  width="300"
                  height="300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">All-Purpose Cleaner</h3>
                  <p className="text-sm text-gray-500">Effective on multiple surfaces</p>
                  <Button className="mt-2">Add to Cart</Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Glass Cleaner"
                  className="object-cover w-full h-60"
                  width="300"
                  height="300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Glass Cleaner</h3>
                  <p className="text-sm text-gray-500">Streak-free shine</p>
                  <Button className="mt-2">Add to Cart</Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Bathroom Cleaner"
                  className="object-cover w-full h-60"
                  width="300"
                  height="300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Bathroom Cleaner</h3>
                  <p className="text-sm text-gray-500">Powerful and safe</p>
                  <Button className="mt-2">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cleaning Bundles</h2>
            <p className="mt-4 text-gray-500 md:text-xl">Save more with our curated cleaning kits</p>
            <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Starter Kit"
                  className="object-cover w-full h-60"
                  width="300"
                  height="300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Starter Kit</h3>
                  <p className="text-sm text-gray-500">Perfect for new homes</p>
                  <Button className="mt-2">Add to Cart</Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Kitchen Bundle"
                  className="object-cover w-full h-60"
                  width="300"
                  height="300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Kitchen Bundle</h3>
                  <p className="text-sm text-gray-500">Keep your kitchen sparkling</p>
                  <Button className="mt-2">Add to Cart</Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  src="/placeholder.svg?height=300&width=300"
                  alt="Complete Home Kit"
                  className="object-cover w-full h-60"
                  width="300"
                  height="300"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">Complete Home Kit</h3>
                  <p className="text-sm text-gray-500">Everything you need for a clean home</p>
                  <Button className="mt-2">Add to Cart</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
              Our Commitment to Sustainability
            </h2>
            <div className="grid gap-6 mt-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Leaf className="h-12 w-12 text-green-500 mb-4" />
                <h3 className="font-semibold text-lg">Eco-Friendly Ingredients</h3>
                <p className="text-sm text-gray-500">We use plant-based, biodegradable ingredients in all our products.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Droplet className="h-12 w-12 text-blue-500 mb-4" />
                <h3 className="font-semibold text-lg">Water Conservation</h3>
                <p className="text-sm text-gray-500">Our products are designed to be effective with minimal water usage.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-purple-500 mb-4" />
                <h3 className="font-semibold text-lg">Safe for Your Family</h3>
                <p className="text-sm text-gray-500">All our products are non-toxic and safe for use around children and pets.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Green Community
                </h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Subscribe to our newsletter for eco-friendly cleaning tips, exclusive offers, and updates on new products.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <Input className="flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CleanGreen. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 mt-4 sm:mt-0">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

