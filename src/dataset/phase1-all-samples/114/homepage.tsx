import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, ShoppingCart, Shovel, Menu } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-green-800 text-white p-4">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center mb-4 sm:mb-0">
            <Leaf className="mr-2" />
            GreenThumb
          </Link>
          <nav className="w-full sm:w-auto">
            <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 items-center">
              <li><Link href="#plants" className="hover:underline block py-2 sm:py-0">Plants</Link></li>
              <li><Link href="#tools" className="hover:underline block py-2 sm:py-0">Tools</Link></li>
              <li><Link href="#tips" className="hover:underline block py-2 sm:py-0">Tips</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        <section className="bg-green-100 py-12 sm:py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to GreenThumb</h1>
            <p className="text-lg sm:text-xl mb-8">Your one-stop shop for all your gardening needs</p>
            <Button size="lg">
              Shop Now
              <ShoppingCart className="ml-2" />
            </Button>
          </div>
        </section>

        <section id="plants" className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Featured Plants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Monstera Deliciosa', 'Fiddle Leaf Fig', 'Snake Plant'].map((plant) => (
                <Card key={plant}>
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">{plant}</CardTitle>
                    <CardDescription>Beautiful indoor plant</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=${plant}`}
                      alt={plant}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="tools" className="bg-green-50 py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Gardening Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {['Pruning Shears', 'Garden Trowel', 'Watering Can'].map((tool) => (
                <Card key={tool}>
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">{tool}</CardTitle>
                    <CardDescription>Essential gardening tool</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=${tool}`}
                      alt={tool}
                      className="w-full h-48 object-cover rounded-md"
                    />
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Add to Cart</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="tips" className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Gardening Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: 'Watering Your Plants', content: 'Learn the best practices for watering your plants to keep them healthy and thriving.' },
                { title: 'Soil Preparation', content: 'Discover how to prepare the perfect soil mix for your plants to ensure optimal growth.' },
                { title: 'Pest Control', content: 'Find out natural and effective ways to keep pests away from your beloved plants.' },
                { title: 'Pruning Techniques', content: 'Master the art of pruning to promote healthy growth and shape your plants beautifully.' },
              ].map((tip) => (
                <Card key={tip.title}>
                  <CardHeader>
                    <CardTitle className="text-xl sm:text-2xl">{tip.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{tip.content}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Read More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About GreenThumb</h3>
            <p>Your trusted partner in creating beautiful gardens and green spaces since 2005.</p>
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
            <div className="flex flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-t-md sm:rounded-l-md sm:rounded-t-none w-full text-black mb-2 sm:mb-0"
              />
              <Button className="rounded-b-md sm:rounded-l-none sm:rounded-r-md">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-8 border-t border-green-700 text-center px-4">
          <p>&copy; 2023 GreenThumb. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

