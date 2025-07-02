import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Leaf, Recycle, ShoppingBag, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="bg-green-50 min-h-screen">
      <header className="bg-green-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2L2 7v11a5 5 0 005 5h10a5 5 0 005-5V7l-10-5z" />
            </svg>
            <h1 className="text-xl sm:text-2xl font-bold">EcoSustainable</h1>
          </Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="#" className="hover:text-green-300">Home</Link></li>
              <li><Link href="#" className="hover:text-green-300">About</Link></li>
              <li><Link href="#" className="hover:text-green-300">Categories</Link></li>
              <li><Link href="#" className="hover:text-green-300">Contact</Link></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="md:hidden bg-green-700 text-white py-4">
          <nav className="container mx-auto px-4">
            <ul className="space-y-2">
              <li><Link href="#" className="block hover:text-green-300">Home</Link></li>
              <li><Link href="#" className="block hover:text-green-300">About</Link></li>
              <li><Link href="#" className="block hover:text-green-300">Categories</Link></li>
              <li><Link href="#" className="block hover:text-green-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      )}

      <main className="container mx-auto px-4 pt-20 sm:pt-24 pb-12 flex-grow">
        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6 sm:mb-8 text-center">Featured Posts</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "10 Sustainable Fashion Brands You Need to Know",
                description: "Discover eco-friendly fashion brands that are revolutionizing the industry with their commitment to sustainability and style.",
                image: "/placeholder.svg?height=300&width=400",
                alt: "Sustainable Fashion"
              },
              {
                title: "Creating a Zero-Waste Kitchen: Tips and Tricks",
                description: "Learn how to transform your kitchen into a zero-waste zone with these practical tips and eco-friendly product swaps.",
                image: "/placeholder.svg?height=300&width=400",
                alt: "Zero Waste Kitchen"
              }
            ].map((post, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{post.description}</p>
                  <Button
                    variant="outline"
                    className="text-green-800 border-green-800 hover:bg-green-800 hover:text-white transition-colors duration-300 w-full sm:w-auto"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-6 sm:mb-8 text-center">Recent Articles</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: <Leaf className="w-8 h-8 text-green-600" />, title: "5 Easy Steps to Start Composting at Home", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
              { icon: <ShoppingBag className="w-8 h-8 text-green-600" />, title: "The Ultimate Guide to Sustainable Shopping", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
              { icon: <Recycle className="w-8 h-8 text-green-600" />, title: "Upcycling 101: Turning Trash into Treasure", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
            ].map((article, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {article.icon}
                  <h3 className="text-lg sm:text-xl font-semibold ml-2">{article.title}</h3>
                </div>
                <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">{article.description}</p>
                <Link href="#" className="text-green-800 hover:underline text-sm sm:text-base">Read more →</Link>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-green-100 rounded-lg p-6 sm:p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-4 text-center">Subscribe to Our Newsletter</h2>
          <p className="text-gray-700 mb-6 text-center text-sm sm:text-base">
            Stay updated with the latest eco-friendly tips, sustainable living ideas, and exclusive content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow w-full sm:w-auto"
              required
            />
            <Button
              className="bg-green-800 text-white hover:bg-green-700 transition-colors duration-300 w-full sm:w-auto"
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">About EcoSustainable</h3>
              <p className="text-sm sm:text-base">
                We're dedicated to promoting eco-conscious living and providing practical tips for a more sustainable
                lifestyle.
              </p>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="text-sm sm:text-base space-y-2">
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:underline">Terms of Service</Link></li>
                <li><Link href="#" className="hover:underline">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-6">
                <Link href="#" className="hover:text-green-300">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-green-300">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Link>
                <Link href="#" className="hover:text-green-300">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; 2023 EcoSustainable. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

