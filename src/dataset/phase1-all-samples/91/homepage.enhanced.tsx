import { Star, ChevronRight, Menu, X, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from 'shadcn/ui'

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-serif font-bold text-gray-900">Timeless</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-sm font-medium text-gray-600">
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-300">Collections</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-300">About</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-900 transition-colors duration-300">Contact</a></li>
              <li>
                <Button variant="icon" className="p-2 hover:bg-gray-200 transition-colors duration-300">
                  <ShoppingCart className="w-5 h-5 text-gray-600" />
                </Button>
              </li>
            </ul>
          </nav>
          <div className="md:hidden">
            <Button variant="icon" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="w-6 h-6 text-gray-600" />
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute top-16 left-0 w-full animate-slide-down">
            <div className="px-4 py-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-serif font-bold text-gray-900">Timeless</h2>
                <Button variant="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6 text-gray-600" />
                </Button>
              </div>
              <ul className="flex flex-col space-y-4 text-sm font-medium text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors duration-300">Collections</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors duration-300">Services</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors duration-300">Contact</a></li>
                <li>
                  <Button variant="icon" className="p-2 hover:bg-gray-200 transition-colors duration-300">
                    <ShoppingCart className="w-5 h-5 text-gray-600" />
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white pt-24">
        <div className="container mx-auto px-4 py-24 flex flex-col-reverse lg:flex-row items-center">
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0">
            <h2 className="text-5xl font-serif font-bold mb-6 animate-fade-in">Discover Timeless Elegance</h2>
            <p className="text-xl mb-8 animate-fade-in delay-200">Experience the pinnacle of watchmaking craftsmanship with our exquisite collection.</p>
            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100 transition-transform transform hover:scale-105 animate-button">
              Explore Collection <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=600"
                alt="Luxury Watch"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 right-4 bg-white bg-opacity-75 rounded-full p-2 animate-pulse">
                <Star className="w-6 h-6 text-yellow-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Why Choose Timeless</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Star className="w-12 h-12 text-blue-600" />, title: 'Unparalleled Craftsmanship', description: 'Our watches are crafted with the finest materials and attention to detail.' },
              { icon: <Star className="w-12 h-12 text-blue-600" />, title: 'Exclusive Collections', description: 'Discover unique designs that stand out and make a statement.' },
              { icon: <Star className="w-12 h-12 text-blue-600" />, title: 'Lifetime Warranty', description: 'We stand by our products with a comprehensive lifetime warranty.' }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors duration-300">
                <div className="flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">Featured Timepieces</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Celestial Chronograph', price: '$12,500', image: '/placeholder.svg?height=300&width=400&text=Watch+1' },
              { name: 'Nautical Navigator', price: '$8,750', image: '/placeholder.svg?height=300&width=400&text=Watch+2' },
              { name: 'Regal Resonance', price: '$15,900', image: '/placeholder.svg?height=300&width=400&text=Watch+3' }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    New
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-4">Precision-engineered for those who value both style and functionality.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300">View Details <ChevronRight className="inline-block ml-1 w-4 h-4" /></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-serif font-bold text-center mb-12">What Our Clients Say</h3>
          <div className="flex overflow-x-auto space-x-8">
            {[
              { name: 'John D.', role: 'CEO', image: '/placeholder.svg?height=50&width=50&text=JD', testimonial: '“Timeless offers unmatched quality and design. My watch is a masterpiece!”' },
              { name: 'Sarah M.', role: 'Watch Collector', image: '/placeholder.svg?height=50&width=50&text=SM', testimonial: '“Each timepiece is a work of art. Highly recommended!”' },
              { name: 'Robert L.', role: 'Entrepreneur', image: '/placeholder.svg?height=50&width=50&text=RL', testimonial: '“Exceptional service and exquisite watches. A perfect combination.”' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 min-w-[300px] hover:bg-gray-100 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-serif font-bold mb-6">Stay Updated</h3>
          <p className="text-lg mb-8">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <input type="email" placeholder="Enter your email" className="w-full md:w-1/3 bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600" />
            <Button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 transition-colors duration-300">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">About Timeless</h5>
              <p className="text-sm text-gray-400">Crafting exquisite timepieces since 1950. Our commitment to quality and precision is unmatched in the industry.</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="text-sm text-gray-400">
                <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Our Story</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Careers</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Customer Service</h5>
              <ul className="text-sm text-gray-400">
                <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Contact Us</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Shipping & Returns</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white transition-colors duration-300">Warranty</a></li>
                <li><a href="#" className="hover:text-white transition-colors duration-300">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Follow Us</h5>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.28 4.28 0 00-7.3 3.9A12.14 12.14 0 013 4.89a4.28 4.28 0 001.32 5.72 4.24 4.24 0 01-1.94-.54v.05a4.28 4.28 0 003.44 4.2 4.3 4.3 0 01-1.93.07 4.28 4.28 0 003.99 2.97A8.6 8.6 0 012 19.54a12.13 12.13 0 006.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.38-.01-.57A8.7 8.7 0 0024 4.59a8.4 8.4 0 01-2.54.7z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.88 8.15 6.84 9.46.5.09.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.09 2.94.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6c.85.004 1.71.114 2.51.336 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.012 2.42-.012 2.75 0 .27.18.58.69.48A10 10 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.88 8.15 6.84 9.46.5.09.68-.22.68-.48 0-.24-.01-.86-.01-1.69-2.78.61-3.37-1.34-3.37-1.34-.45-1.15-1.11-1.46-1.11-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.54 2.36 1.09 2.94.83.09-.64.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6c.85.004 1.71.114 2.51.336 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.012 2.42-.012 2.75 0 .27.18.58.69.48A10 10 0 0022 12c0-5.5-4.46-9.96-9.96-9.96z"/>
                  </svg>
                </a>
              </div>
              <p>&copy; 2024 Timeless. All rights reserved.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 Timeless. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}