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
                <form className="flex flex-col items-center w-full max-w-sm space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 dark:border-gray-700 focus:border-green-500 dark:focus:border-green-400"
                  />
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 transition-colors">
                    Subscribe
                  </Button>
                  <p className="text-sm text-gray-500 text-center">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white dark:bg-gray-800 border-t">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center space-y-4">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">© 2024 CleanGreen. All rights reserved.</p>
          <nav className="flex flex-wrap justify-center gap-4">
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-xs hover:underline underline-offset-4 text-gray-500 dark:text-gray-400 transition-colors">
              FAQ
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-3.594-1.555 4.92 4.92 0 0 0-4.792 6.049 13.978 13.978 0 0 1-10.15-5.145 4.92 4.92 0 0 0 1.524 6.573 4.883 4.883 0 0 1-2.23-.616v.061a4.92 4.92 0 0 0 3.94 4.824 4.912 4.912 0 0 1-2.22.084 4.92 4.92 0 0 0 4.6 3.415 9.863 9.863 0 0 1-6.115 2.107c-.398 0-.79-.023-1.175-.068a13.918 13.918 0 0 0 7.548 2.212c9.057 0 14.009-7.503 14.009-14.01 0-.213-.005-.425-.014-.636A9.982 9.982 0 0 0 24 4.557z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.338 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-2.242-1.25-3.608-1.312-1.266-.058-1.646-.07-4.85-.07zm0-2.163C8.741 0 8.332.013 7.052.07 5.772.128 4.904.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.904.128 5.772.07 7.052.013 8.332 0 8.741 0 12s.013 3.668.07 4.948c.058 1.28.263 2.148.56 2.912.306.788.717 1.458 1.384 2.125.667.667 1.337 1.078 2.126 1.384.764.297 1.632.502 2.912.56 1.28.057 1.689.07 4.948.07s3.668-.013 4.948-.07c1.28-.058 2.148-.263 2.912-.56.788-.306 1.458-.717 2.125-1.384.667-.667 1.078-1.337 1.384-2.126.297-.764.502-1.632.56-2.912.057-1.28.07-1.689.07-4.948s-.013-3.668-.07-4.948c-.058-1.28-.263-2.148-.56-2.912-.306-.788-.717-1.458-1.384-2.125C21.319 1.347 20.649.935 19.86.63c-.764-.297-1.632-.502-2.912-.56C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </Link>
            <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-green-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

