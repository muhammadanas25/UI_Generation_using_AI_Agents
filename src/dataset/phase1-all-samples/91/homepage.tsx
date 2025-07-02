import { Star, ChevronRight, Menu } from 'lucide-react'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-gray-900">Timeless</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6 text-sm font-medium text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Collections</a></li>
              <li><a href="#" className="hover:text-gray-900">About</a></li>
              <li><a href="#" className="hover:text-gray-900">Services</a></li>
              <li><a href="#" className="hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
          <button className="md:hidden">
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12 md:py-24 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Discover Timeless Elegance</h2>
            <p className="text-lg md:text-xl mb-8">Experience the pinnacle of watchmaking craftsmanship with our exquisite collection.</p>
            <a href="#" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-100">
              Explore Collection <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Luxury Watch"
              width={600}
              height={600}
              className="rounded-lg shadow-2xl w-full"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8 md:mb-12">Why Choose Timeless</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Unparalleled Craftsmanship', 'Exclusive Collections', 'Lifetime Warranty'].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-serif">{index + 1}</span>
                </div>
                <h4 className="text-xl font-semibold mb-2">{feature}</h4>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8 md:mb-12">Featured Timepieces</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Celestial Chronograph', price: '$12,500' },
              { name: 'Nautical Navigator', price: '$8,750' },
              { name: 'Regal Resonance', price: '$15,900' }
            ].map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=300&width=400&text=Watch+${index + 1}`}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-center mb-8 md:mb-12">What Our Clients Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'John D.', role: 'CEO' },
              { name: 'Sarah M.', role: 'Watch Collector' },
              { name: 'Robert L.', role: 'Entrepreneur' }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Image
                    src={`/placeholder.svg?height=50&width=50&text=Client+${index + 1}`}
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
                <p className="text-gray-600 mb-4">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4">About Timeless</h5>
              <p className="text-sm text-gray-400">Crafting exquisite timepieces since 1950. Our commitment to quality and precision is unmatched in the industry.</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
              <ul className="text-sm text-gray-400">
                <li className="mb-2"><a href="#" className="hover:text-white">Our Story</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Careers</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Press</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Customer Service</h5>
              <ul className="text-sm text-gray-400">
                <li className="mb-2"><a href="#" className="hover:text-white">Contact Us</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Shipping & Returns</a></li>
                <li className="mb-2"><a href="#" className="hover:text-white">Warranty</a></li>
                <li><a href="#" className="hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4">Newsletter</h5>
              <p className="text-sm text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
              <form className="flex flex-col sm:flex-row">
                <input type="email" placeholder="Enter your email" className="bg-gray-800 text-white px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:ring-2 focus:ring-blue-600 mb-2 sm:mb-0" />
                <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-b-md sm:rounded-r-md sm:rounded-b-none hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">Subscribe</button>
              </form>
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

