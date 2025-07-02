import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ShoppingCart, Search, Menu, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/placeholder.svg?height=32&width=32" alt="ToyPlanet Logo" width={32} height={32} />
            <span className="text-2xl font-bold text-primary">ToyPlanet</span>
          </Link>
          <nav className="ml-auto flex items-center space-x-4 sm:space-x-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block">
              Shop All
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block">
              Brands
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline-block">
              Sale
            </Link>
            <Button size="icon" variant="ghost">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>
            <Button size="icon" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </Button>
            <Button size="icon" variant="ghost" className="sm:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
                    Discover the Magic of Play
                  </h1>
                  <p className="max-w-[600px] text-primary-foreground md:text-xl">
                    Explore our world of toys and bring joy to every child's face. Find the perfect gift for all ages.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-background text-primary">Shop Now</Button>
                  <Button variant="outline" className="border-primary-foreground text-primary-foreground">
                    Learn More
                  </Button>
                </div>
              </div>
              <Image
                alt="Featured Toy"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                height="550"
                src="/placeholder.svg?height=550&width=550"
                width="550"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Shop by Age</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {["0-2 Years", "3-5 Years", "6-8 Years", "9+ Years"].map((age) => (
                <Link
                  key={age}
                  href="#"
                  className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Image
                    alt={`Toys for ${age}`}
                    className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-300"
                    height="400"
                    src="/placeholder.svg?height=400&width=400"
                    width="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-bold text-white mb-1">{age}</h3>
                    <span className="text-sm text-white/90 group-hover:underline">Shop Now</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Toys</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                "Interactive Robot",
                "Building Blocks Set",
                "Plush Teddy Bear",
                "Science Experiment Kit",
                "Art Supplies Bundle",
                "Remote Control Car",
                "Board Game Collection",
                "Musical Instrument Set",
              ].map((toy, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <Image
                    alt={toy}
                    className="object-cover w-full aspect-square group-hover:scale-105 transition-transform duration-300"
                    height="300"
                    src="/placeholder.svg?height=300&width=300"
                    width="300"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">{toy}</h3>
                    <p className="text-muted-foreground mb-2">$29.99</p>
                    <Button className="w-full">Add to Cart</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Stay Updated</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Subscribe to our newsletter for the latest toy releases, exclusive offers, and fun activities for kids.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Shop</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="#">
                    All Toys
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="#">
                    By Age
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="#">
                    By Brand
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="#">
                    Sale
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Company</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="#">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="#">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Support</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="#">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="#">
                    Shipping
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="#">
                    Returns
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-lg font-medium">Contact</h3>
              <ul className="space-y-1">
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="mailto:info@toyplanet.com">
                    info@toyplanet.com
                  </Link>
                </li>
                <li>
                  <Link className="text-sm hover:underline underline-offset-2" href="tel:+1234567890">
                    (123) 456-7890
                  </Link>
                </li>
                <li>
                  <address className="text-sm not-italic">
                    123 Toy Street
                    <br />
                    Playville, TP 12345
                  </address>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">© 2024 ToyPlanet. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link className="text-muted-foreground hover:text-primary" href="#">
                <span className="sr-only">Facebook</span>
                <svg
                  className=" h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link className="text-muted-foreground hover:text-primary" href="#">
                <span className="sr-only">Instagram</span>
                <svg
                  className=" h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link className="text-muted-foreground hover:text-primary" href="#">
                <span className="sr-only">Twitter</span>
                <svg
                  className=" h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}