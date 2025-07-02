import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Scissors, PaintBrush, Book, Menu, X, ShoppingCart, User } from "lucide-react"
import { Transition } from "@/components/ui/transition"

export default function CraftsyHomepage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary flex items-center">
            <img src="/logo.svg" alt="Craftsy Logo" className="h-8 w-8 mr-2" />
            Craftsy
          </Link>
          <nav className="hidden md:flex space-x-6 animate-fade-in">
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
              Project Kits
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
              Tools
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
              Guides
            </Link>
            <Link href="#" className="text-gray-600 hover:text-primary transition-colors duration-300">
              About
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Input type="search" placeholder="Search..." className="w-64 transition-transform duration-300 ease-in-out transform hover:scale-105" />
            <Button variant="outline" className="flex items-center space-x-2 transition-colors duration-300 hover:bg-gray-100">
              <User className="w-4 h-4" />
              <span>Sign In</span>
            </Button>
            <Button variant="default" className="flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Cart (0)</span>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600 hover:text-primary focus:outline-none transition-colors duration-300">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        <Transition show={isMobileMenuOpen}>
          <nav className="md:hidden bg-white shadow-md">
            <div className="px-4 pt-2 pb-4 space-y-2 animated-slide-down">
              <Link href="#" className="block text-gray-600 hover:text-primary transition-colors duration-300">
                Project Kits
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-primary transition-colors duration-300">
                Tools
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-primary transition-colors duration-300">
                Guides
              </Link>
              <Link href="#" className="block text-gray-600 hover:text-primary transition-colors duration-300">
                About
              </Link>
              <div className="mt-4 space-y-2">
                <Input type="search" placeholder="Search..." className="w-full" />
                <Button variant="outline" className="w-full flex items-center justify-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Sign In</span>
                </Button>
                <Button variant="default" className="w-full flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Cart (0)</span>
                </Button>
              </div>
            </div>
          </nav>
        </Transition>
      </header>

      <main className="flex-grow pt-20">
        <section className="bg-cover bg-center bg-no-repeat bg-[url('/hero-background.jpg')] text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center bg-black bg-opacity-50 py-10 rounded-lg">
            <h1 className="text-5xl font-bold mb-4 animate-slide-in">Welcome to Craftsy</h1>
            <p className="text-xl mb-8 animate-fade-in">Unleash your creativity with our DIY project kits and tools!</p>
            <Button size="lg" variant="secondary" className="animate-bounce transition-transform duration-300 hover:scale-105">
              Explore Projects
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-fade-in">Featured Project Kits</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Macramé Wall Hanging", price: "$29.99", img: "/kits/macrame-wall.jpg" },
                { title: "Resin Art Coasters", price: "$24.99", img: "/kits/resin-coasters.jpg" },
                { title: "Needle Felting Animals", price: "$34.99", img: "/kits/needle-felting.jpg" },
              ].map((kit, index) => (
                <Card key={index} className="transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle>{kit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={kit.img}
                      alt={kit.title}
                      className="w-full h-48 object-cover rounded-md mb-4 transition-transform duration-300 transform hover:rotate-3"
                    />
                    <p className="text-2xl font-bold">{kit.price}</p>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant="primary">
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-fade-in">Essential Crafting Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Precision Scissors", icon: Scissors, img: "/tools/scissors.jpg" },
                { title: "Acrylic Paint Set", icon: PaintBrush, img: "/tools/acrylic-paint.jpg" },
                { title: "Craft Glue Gun", icon: PaintBrush, img: "/tools/glue-gun.jpg" },
              ].map((tool, index) => (
                <Card key={index} className="transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <tool.icon className="w-6 h-6 mr-2 text-primary" />
                      {tool.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={tool.img}
                      alt={tool.title}
                      className="w-full h-36 object-cover rounded-md mb-4 transition-transform duration-300 transform hover:scale-105"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full transition-colors duration-300 hover:bg-primary hover:text-white">
                      Shop Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-primary animate-fade-in">Popular How-To Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Beginner's Guide to Knitting", img: "/guides/knitting.jpg" },
                { title: "Watercolor Painting Techniques", img: "/guides/watercolor.jpg" },
                { title: "DIY Home Decor Ideas", img: "/guides/home-decor.jpg" },
                { title: "Jewelry Making Basics", img: "/guides/jewelry-making.jpg" },
              ].map((guide, index) => (
                <Card key={index} className="transform transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-2xl">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Book className="w-5 h-5 mr-2 text-primary" />
                      {guide.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={guide.img}
                      alt={guide.title}
                      className="w-full h-32 object-cover rounded-md mb-4 transition-transform duration-300 transform hover:scale-105"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="w-full text-primary hover:underline transition-colors duration-300">
                      Read Guide
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Craftsy</h3>
              <p className="text-sm">
                Craftsy is your one-stop shop for all things DIY and crafting. We provide high-quality project kits,
                tools, and guides to help you unleash your creativity.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm hover:underline transition-colors duration-300">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline transition-colors duration-300">
                    Shipping & Returns
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline transition-colors duration-300">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm hover:underline transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-primary transition-colors duration-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6 hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors duration-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6 hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-white hover:text-primary transition-colors duration-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6 hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
              <form className="flex flex-col sm:flex-row">
                <Input type="email" placeholder="Your email" className="rounded-md sm:rounded-r-none mb-2 sm:mb-0 sm:mr-2" />
                <Button type="submit" className="rounded-md sm:rounded-l-none">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
            © 2023 Craftsy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}