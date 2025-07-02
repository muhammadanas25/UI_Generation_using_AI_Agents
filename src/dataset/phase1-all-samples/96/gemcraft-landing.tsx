import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter, Menu } from 'lucide-react'
import { useState } from "react"

export default function GemCraftLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            GemCraft
          </Link>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
              <li><Link href="#products" className="block text-gray-600 hover:text-gray-800">Products</Link></li>
              <li><Link href="#story" className="block text-gray-600 hover:text-gray-800">Our Story</Link></li>
              <li><Link href="#contact" className="block text-gray-600 hover:text-gray-800">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Handcrafted Jewelry with a Story</h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">Each piece is a unique work of art, crafted with love and passion.</p>
            <Link
              href="#products"
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
            >
              Explore Our Collection
            </Link>
          </div>
        </section>

        <section id="products" className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 md:mb-12">Our Handmade Treasures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={`Jewelry item ${item}`}
                    width={400}
                    height={300}
                    className="w-full h-48 md:h-64 object-cover"
                  />
                  <div className="p-4 md:p-6">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">Exquisite Gem Necklace</h3>
                    <p className="text-sm md:text-base text-gray-600 mb-4">Handcrafted with care, this necklace features a stunning gemstone pendant.</p>
                    <Link
                      href="#"
                      className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="bg-gray-100 py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="w-full md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Artisan crafting jewelry"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-md w-full h-auto"
                />
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Crafting Journey</h2>
                <p className="text-sm md:text-base text-gray-600 mb-6">
                  At GemCraft, every piece tells a story. Our artisans pour their heart and soul into each creation,
                  combining traditional techniques with modern designs. From selecting the finest gemstones to the
                  final polish, we ensure that each piece is a true work of art.
                </p>
                <Link
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                >
                  Read More About Our Process
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8">Connect with Us</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Follow us on social media for behind-the-scenes content, new product announcements, and more!
            </p>
            <div className="flex justify-center space-x-6">
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                <Instagram className="w-6 h-6 md:w-8 md:h-8" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                <Facebook className="w-6 h-6 md:w-8 md:h-8" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-blue-600 transition duration-300">
                <Twitter className="w-6 h-6 md:w-8 md:h-8" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <Link href="/" className="text-2xl font-bold">
                GemCraft
              </Link>
              <p className="text-sm mt-2">Handcrafted jewelry with passion and precision.</p>
            </div>
            <nav>
              <ul className="flex flex-wrap justify-center md:justify-end space-x-4 md:space-x-6">
                <li><Link href="#" className="text-sm hover:text-gray-300 transition duration-300">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm hover:text-gray-300 transition duration-300">Terms of Service</Link></li>
                <li><Link href="#" className="text-sm hover:text-gray-300 transition duration-300">Contact Us</Link></li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} GemCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

