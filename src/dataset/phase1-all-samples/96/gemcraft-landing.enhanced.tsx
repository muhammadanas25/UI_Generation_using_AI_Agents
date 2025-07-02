import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Twitter, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardBody, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

export default function GemCraftLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-3xl font-extrabold text-gray-900">
            GemCraft
          </Link>
          <nav>
            <ul className="flex space-x-8 text-lg">
              <li><Link href="#products" className="text-gray-700 hover:text-indigo-600 transition duration-300">Products</Link></li>
              <li><Link href="#story" className="text-gray-700 hover:text-indigo-600 transition duration-300">Our Story</Link></li>
              <li><Link href="#contact" className="text-gray-700 hover:text-indigo-600 transition duration-300">Contact</Link></li>
              <li><Link href="/shop" className="text-white bg-indigo-600 px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-300">Shop Now</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <motion.section
          className="relative bg-cover bg-center h-screen"
          style={{ backgroundImage: 'url("/hero-background.jpg")' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Handcrafted Jewelry with a Story
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              Each piece is a unique work of art, crafted with love and passion.
            </motion.p>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              <Button as={Link} href="#products" variant="default" className="px-6 py-3 text-lg font-semibold">
                Explore Our Collection
              </Button>
            </motion.div>
          </div>
        </motion.section>

        <section id="products" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Handmade Treasures</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <Card key={item} className="hover:shadow-2xl transition-shadow duration-300">
                  <CardHeader>
                    <Image
                      src={`/product-${item}.jpg`}
                      alt={`Jewelry item ${item}`}
                      width={400}
                      height={400}
                      className="w-full h-80 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardBody>
                    <CardTitle className="text-2xl font-semibold text-gray-800">Exquisite Gem Necklace</CardTitle>
                    <p className="text-gray-600 mt-2">Handcrafted with care, this necklace features a stunning gemstone pendant.</p>
                  </CardBody>
                  <CardFooter className="flex justify-between items-center">
                    <Button as={Link} href={`/products/${item}`} variant="outline" className="text-indigo-600">
                      Learn More
                    </Button>
                    <span className="text-lg font-bold text-gray-800">$120</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                className="md:w-1/2 mb-8 md:mb-0"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <Image
                  src="/artisan.jpg"
                  alt="Artisan crafting jewelry"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
              <motion.div
                className="md:w-1/2 md:pl-12"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Crafting Journey</h2>
                <p className="text-lg text-gray-600 mb-6">
                  At GemCraft, every piece tells a story. Our artisans pour their heart and soul into each creation,
                  combining traditional techniques with modern designs. From selecting the finest gemstones to the
                  final polish, we ensure that each piece is a true work of art.
                </p>
                <Button as={Link} href="/about" variant="secondary" className="mt-4">
                  Read More About Our Process
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="newsletter" className="bg-gray-100 py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Join Our Newsletter</h2>
            <p className="text-lg text-gray-600 mb-8">Stay updated with our latest creations and exclusive offers.</p>
            <form className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input type="email" placeholder="Enter your email" className="w-full sm:w-auto" />
              <Button type="submit" className="px-6 py-3 text-lg">
                Subscribe
              </Button>
            </form>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Connect with Us</h2>
            <p className="text-lg text-gray-600 mb-12">
              Follow us on social media for behind-the-scenes content, new product announcements, and more!
            </p>
            <div className="flex justify-center space-x-8 mb-12">
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <Instagram className="w-8 h-8" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <Facebook className="w-8 h-8" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <Twitter className="w-8 h-8" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <Mail className="w-8 h-8" />
                <span className="sr-only">Email</span>
              </Link>
              <Link href="#" className="text-gray-600 hover:text-indigo-600 transition duration-300">
                <Phone className="w-8 h-8" />
                <span className="sr-only">Phone</span>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-12">
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">contact@gemcraft.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">+1 (234) 567-890</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">123 Gem Street, Jewel City</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <Link href="/" className="text-2xl font-bold">
                GemCraft
              </Link>
              <p className="text-sm mt-2">Handcrafted jewelry with passion and precision.</p>
            </div>
            <nav className="mb-6 md:mb-0">
              <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
                <li><Link href="#" className="hover:text-gray-400 transition duration-300">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-gray-400 transition duration-300">Terms of Service</Link></li>
                <li><Link href="#" className="hover:text-gray-400 transition duration-300">Contact Us</Link></li>
              </ul>
            </nav>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                <Facebook className="w-5 h-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-300 transition duration-300">
                <Twitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} GemCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}