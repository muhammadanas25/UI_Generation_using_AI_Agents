import Link from 'next/link'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, ShoppingCart, Shovel, Menu, X, Sun, Moon, ShoppingBag, Search, ArrowUp } from 'lucide-react'
import { Dialog } from "@/components/ui/dialog"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''}`}>
      <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-green-800 text-white p-4 shadow-md fixed top-0 left-0 right-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <Leaf className="mr-2 animate-bounce" />
              GreenThumb
            </Link>
            <nav className="hidden md:flex">
              <ul className="flex space-x-6">
                <li>
                  <Link href="#plants" className="hover:text-green-400 transition-colors duration-200">
                    Plants
                  </Link>
                </li>
                <li>
                  <Link href="#tools" className="hover:text-green-400 transition-colors duration-200">
                    Tools
                  </Link>
                </li>
                <li>
                  <Link href="#tips" className="hover:text-green-400 transition-colors duration-200">
                    Tips
                  </Link>
                </li>
                <li>
                  <Button variant="ghost" size="icon" onClick={toggleTheme}>
                    {theme === 'light' ? <Moon /> : <Sun />}
                  </Button>
                </li>
              </ul>
            </nav>
            <div className="flex items-center space-x-2 md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'light' ? <Moon /> : <Sun />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(true)}>
                <Menu />
              </Button>
            </div>
          </div>
        </header>

        <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <Dialog.Content className="fixed top-0 left-0 w-full h-full bg-white dark:bg-gray-900 p-6">
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="text-2xl font-bold flex items-center">
                <Leaf className="mr-2 animate-bounce" />
                GreenThumb
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X />
              </Button>
            </div>
            <nav>
              <ul className="flex flex-col space-y-6 text-xl">
                <li>
                  <Link href="#plants" className="hover:text-green-400 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
                    Plants
                  </Link>
                </li>
                <li>
                  <Link href="#tools" className="hover:text-green-400 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
                    Tools
                  </Link>
                </li>
                <li>
                  <Link href="#tips" className="hover:text-green-400 transition-colors duration-200" onClick={() => setMobileMenuOpen(false)}>
                    Tips
                  </Link>
                </li>
              </ul>
            </nav>
          </Dialog.Content>
        </Dialog>

        <main className="flex-grow mt-16">
          <section className="bg-green-100 py-20 transition-transform duration-500 transform hover:scale-105">
            <div className="container mx-auto text-center">
              <h1 className="text-5xl font-extrabold mb-4 animate-pulse">Welcome to GreenThumb</h1>
              <p className="text-xl mb-8">Your one-stop shop for all your gardening needs</p>
              <Button size="lg" className="flex items-center justify-center animate-bounce">
                Shop Now
                <ShoppingCart className="ml-2" />
              </Button>
            </div>
          </section>

          <section id="plants" className="py-16">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Featured Plants</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Monstera Deliciosa', 'Fiddle Leaf Fig', 'Snake Plant'].map((plant) => (
                  <Card key={plant} className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>{plant}</CardTitle>
                      <CardDescription>Beautiful indoor plant</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={`/placeholder.svg?height=200&width=300&text=${plant}`}
                        alt={plant}
                        className="w-full h-48 object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full flex items-center justify-center" variant="secondary">
                        Add to Cart
                        <ShoppingCart className="ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="tools" className="bg-green-50 py-16">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Gardening Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {['Pruning Shears', 'Garden Trowel', 'Watering Can'].map((tool) => (
                  <Card key={tool} className="hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>{tool}</CardTitle>
                      <CardDescription>Essential gardening tool</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <img
                        src={`/placeholder.svg?height=200&width=300&text=${tool}`}
                        alt={tool}
                        className="w-full h-48 object-cover rounded-md transform hover:scale-105 transition-transform duration-300"
                      />
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full flex items-center justify-center" variant="secondary">
                        Add to Cart
                        <ShoppingBag className="ml-2" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section id="tips" className="py-16">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Gardening Tips</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'Watering Your Plants', content: 'Learn the best practices for watering your plants to keep them healthy and thriving.' },
                  { title: 'Soil Preparation', content: 'Discover how to prepare the perfect soil mix for your plants to ensure optimal growth.' },
                  { title: 'Pest Control', content: 'Find out natural and effective ways to keep pests away from your beloved plants.' },
                  { title: 'Pruning Techniques', content: 'Master the art of pruning to promote healthy growth and shape your plants beautifully.' },
                ].map((tip) => (
                  <Card key={tip.title} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle>{tip.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{tip.content}</p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full flex items-center justify-center">
                        Read More
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <section className="py-16 bg-green-100">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
              <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
                {[
                  { name: 'Emily R.', feedback: 'GreenThumb has everything I need to keep my garden thriving. Highly recommended!' },
                  { name: 'James T.', feedback: 'The quality of the tools is top-notch. My garden has never looked better.' },
                  { name: 'Sophia L.', feedback: 'Fantastic selection of plants and excellent customer service.' },
                ].map((testimonial) => (
                  <Card key={testimonial.name} className="flex-1 hover:shadow-xl transition-shadow duration-300">
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">"{testimonial.feedback}"</p>
                      <p className="font-semibold text-right">- {testimonial.name}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-green-800 text-white py-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About GreenThumb</h3>
              <p>Your trusted partner in creating beautiful gardens and green spaces since 2005.</p>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="hover:text-green-400 transition-colors duration-200">
                  <Sun />
                </Link>
                <Link href="#" className="hover:text-green-400 transition-colors duration-200">
                  <Moon />
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About Us</Link></li>
                <li><Link href="#" className="hover:underline">Contact</Link></li>
                <li><Link href="#" className="hover:underline">FAQs</Link></li>
                <li><Link href="#" className="hover:underline">Shipping & Returns</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="mb-4">Subscribe to our newsletter for gardening tips and exclusive offers.</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-l-md w-full text-black focus:outline-none"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-green-400 transition-colors duration-200">
                  <Sun />
                </Link>
                <Link href="#" className="hover:text-green-400 transition-colors duration-200">
                  <Moon />
                </Link>
                <Link href="#" className="hover:text-green-400 transition-colors duration-200">
                  <ShoppingCart />
                </Link>
              </div>
            </div>
          </div>
          <div className="container mx-auto mt-8 pt-8 border-t border-green-700 text-center relative">
            <p>&copy; 2023 GreenThumb. All rights reserved.</p>
            <Button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="absolute right-4 bottom-4 bg-green-600 hover:bg-green-700 p-3 rounded-full shadow-lg transition-colors duration-200"
              size="icon"
              aria-label="Back to top"
            >
              <ArrowUp />
            </Button>
          </div>
        </footer>
      </div>
    </div>
  )
}