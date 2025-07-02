import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dumbbell, ShoppingCart, Menu, Search, User, Heart } from "lucide-react"
import { useState } from "react"

export default function FitFreakLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white shadow-md">
        <div className="container flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-primary" />
            <span className="font-extrabold text-2xl text-primary">FitFreak</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition">
              Shop
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition">
              About
            </Link>
            <Link href="#" className="text-sm font-medium text-gray-700 hover:text-primary transition">
              Contact
            </Link>
            <div className="relative">
              <Input
                className="hidden md:block w-64"
                placeholder="Search for products..."
                type="text"
                icon={<Search className="h-5 w-5 text-gray-400" />}
              />
            </div>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                3
              </span>
              <span className="sr-only">Shopping Cart</span>
            </Button>
            <Button variant="ghost">
              <Heart className="h-6 w-6" />
              <span className="sr-only">Wishlist</span>
            </Button>
            <Button variant="ghost">
              <User className="h-6 w-6" />
              <span className="sr-only">Account</span>
            </Button>
            <Button size="icon" variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <nav className="px-4 pt-2 pb-4 space-y-1">
              <Link href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Shop
              </Link>
              <Link href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
                About
              </Link>
              <Link href="#" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100 rounded">
                Contact
              </Link>
              <Input className="w-full mt-2" placeholder="Search..." type="text" />
            </nav>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section className="w-full py-16 bg-cover bg-center" style={{ backgroundImage: "url('/fitness-bg.jpg')" }}>
          <div className="container px-4 md:px-6 flex flex-col items-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeInUp">Unleash Your Inner FitFreak</h1>
            <p className="text-lg md:text-2xl mb-8 max-w-2xl animate-fadeInUp delay-200">
              Discover the latest fitness gear, workout clothing, and accessories to elevate your training.
            </p>
            <div className="space-x-4">
              <Button className="animate-bounce">Shop Now</Button>
              <Button variant="outline" className="hover:bg-primary hover:text-white transition">Learn More</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <div key={item} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
                  <img
                    src={`/product-${item}.jpg`}
                    alt="Product"
                    className="object-cover w-full h-64 transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="flex items-center space-x-2">
                      <span>Quick View</span>
                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </Button>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="text-lg font-semibold mb-2">Product Name {item}</h3>
                    <p className="text-gray-600">$99.99</p>
                    <div className="mt-2 flex items-center">
                      <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.377 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.98 9.397c-.784-.57-.38-1.81.588-1.81h4.177a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                      <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.377 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.98 9.397c-.784-.57-.38-1.81.588-1.81h4.177a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                      <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.377 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.98 9.397c-.784-.57-.38-1.81.588-1.81h4.177a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                      <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.377 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.98 9.397c-.784-.57-.38-1.81.588-1.81h4.177a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                      <svg className="h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.177c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.538 1.118L10 13.347l-3.377 2.455c-.783.57-1.838-.197-1.538-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.98 9.397c-.784-.57-.38-1.81.588-1.81h4.177a1 1 0 00.95-.69l1.286-3.97z" />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-12">
              <Button variant="outline">View All Products</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Workout Gear', 'Clothing', 'Accessories'].map((category) => (
                <div key={category} className="relative group overflow-hidden rounded-lg shadow-lg">
                  <img
                    src={`/category-${category.toLowerCase()}.jpg`}
                    alt={category}
                    className="object-cover w-full h-80 transform group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="text-2xl font-bold text-white">{category}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-6 text-center">
              <h2 className="text-4xl font-bold">Join the FitFreak Community</h2>
              <p className="max-w-2xl text-lg">
                Subscribe to our newsletter for exclusive deals, fitness tips, and new product releases.
              </p>
              <form className="w-full max-w-md flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Input
                  className="flex-1"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button type="submit" variant="secondary" className="w-full sm:w-auto">
                  Subscribe
                </Button>
              </form>
              <div className="mt-4">
                <img src="/community-graphic.png" alt="Community" className="w-32 h-32" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-8 bg-gray-800 text-gray-300">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Workout Gear</Link></li>
                <li><Link href="#" className="hover:text-white transition">Clothing</Link></li>
                <li><Link href="#" className="hover:text-white transition">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
                <li><Link href="#" className="hover:text-white transition">Press</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Help Center</Link></li>
                <li><Link href="#" className="hover:text-white transition">Returns</Link></li>
                <li><Link href="#" className="hover:text-white transition">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#" className="hover:text-white transition">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">© 2024 FitFreak. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-white transition">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-white transition">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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