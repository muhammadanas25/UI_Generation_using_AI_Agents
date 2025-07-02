import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { StarIcon, Menu, X, ChevronDown, MailIcon, Twitter, Facebook, Instagram } from "lucide-react"
import { Dialog } from "@/components/ui/dialog"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="px-4 lg:px-6 py-4 flex items-center justify-between bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 right-0 z-50">
        <Link className="flex items-center justify-center" href="#">
          <span className="sr-only">RentMyStyle</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-8 w-8 text-primary"
          >
            <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
          </svg>
          <span className="ml-2 text-2xl font-extrabold text-primary">RentMyStyle</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          <Link className="text-sm font-medium hover:text-primary transition-colors duration-300" href="#how-it-works">
            How It Works
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors duration-300" href="#collections">
            Collections
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors duration-300" href="#pricing">
            Pricing
          </Link>
          <Button variant="ghost" className="ml-4">
            Sign In
          </Button>
          <Button className="ml-2">Join Now</Button>
        </nav>
        <button className="md:hidden" onClick={() => setIsMenuOpen(true)}>
          <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        </button>
        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />
          <Dialog.Content className="fixed top-0 right-0 w-3/4 max-w-xs bg-white dark:bg-gray-800 h-full p-6 shadow-lg flex flex-col">
            <div className="flex justify-between items-center mb-8">
              <span className="text-2xl font-bold text-primary">Menu</span>
              <button onClick={() => setIsMenuOpen(false)}>
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              <Link className="text-lg font-medium hover:text-primary transition-colors duration-300" href="#how-it-works" onClick={() => setIsMenuOpen(false)}>
                How It Works
              </Link>
              <Link className="text-lg font-medium hover:text-primary transition-colors duration-300" href="#collections" onClick={() => setIsMenuOpen(false)}>
                Collections
              </Link>
              <Link className="text-lg font-medium hover:text-primary transition-colors duration-300" href="#pricing" onClick={() => setIsMenuOpen(false)}>
                Pricing
              </Link>
              <Button variant="ghost" className="mt-4">
                Sign In
              </Button>
              <Button className="mt-2">Join Now</Button>
            </nav>
          </Dialog.Content>
        </Dialog>
      </header>
      <main className="flex-1 mt-20">
        <section className="w-full py-24 lg:py-32 bg-gradient-to-r from-indigo-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/hero-background.jpg" alt="Fashionable Clothing" className="w-full h-full object-cover" />
          </div>
          <div className="container relative z-10 px-4 md:px-6 text-center text-white">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg animate-fade-in-up">
              Rent Your Style, Own Your Look
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-lg animate-fade-in-up delay-200">
              Access designer clothing for any occasion. Sustainable fashion at your fingertips.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Button className="px-6 py-3 text-lg hover:bg-purple-700 transition-colors duration-300 animate-bounce">
                Get Started
              </Button>
              <Button variant="outline" className="px-6 py-3 text-lg hover:bg-white hover:text-purple-700 transition-colors duration-300">
                Learn More
              </Button>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">Membership Tiers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { name: "Basic", price: "$59/mo", items: 3, features: ["3 items per month", "Free shipping", "Unlimited swaps"], recommended: false },
                { name: "Premium", price: "$89/mo", items: 5, features: ["5 items per month", "Free shipping", "Unlimited swaps", "Access to premium brands"], recommended: true },
                { name: "Luxe", price: "$129/mo", items: 7, features: ["7 items per month", "Free shipping", "Unlimited swaps", "Access to luxury brands", "Priority customer support"], recommended: false },
              ].map((tier) => (
                <Card key={tier.name} className={`flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl ${tier.recommended ? 'border-2 border-purple-500' : ''}`}>
                  {tier.recommended && <Badge className="absolute top-4 right-4 bg-purple-500 text-white">Recommended</Badge>}
                  <CardHeader>
                    <CardTitle className="text-xl md:text-2xl">{tier.name}</CardTitle>
                    <CardDescription className="text-2xl md:text-3xl font-bold">{tier.price}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <ul className="list-disc list-inside space-y-2">
                      {tier.features.map((feature) => (
                        <li key={feature} className="text-gray-600 dark:text-gray-300">{feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full" variant={tier.recommended ? "default" : "outline"}>Choose {tier.name}</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="collections" className="w-full py-16 lg:py-24">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">Featured Collections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { name: "Summer Chic", image: "/collections/summer-chic.jpg" },
                { name: "Office Elegance", image: "/collections/office-elegance.jpg" },
                { name: "Night Out Glam", image: "/collections/night-out-glam.jpg" },
              ].map((collection) => (
                <Card key={collection.name} className="overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                  <div className="relative">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Button variant="ghost" className="text-white">View Collection</Button>
                    </div>
                  </div>
                  <CardHeader className="mt-4">
                    <CardTitle className="text-xl">{collection.name}</CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: 1, title: "Choose Your Plan", description: "Select a membership tier that fits your style needs.", icon: "Category" },
                { step: 2, title: "Build Your Closet", description: "Browse our collections and add items to your virtual closet.", icon: "ShoppingBag" },
                { step: 3, title: "Wear & Return", description: "Enjoy your rented items, then return them for free. Repeat!", icon: "Repeat" },
              ].map((item) => (
                <div key={item.step} className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-700 rounded-lg shadow transition-transform transform hover:scale-105">
                  <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center mb-4">
                    {item.icon === "Category" && <Category className="w-6 h-6 text-white" />}
                    {item.icon === "ShoppingBag" && <ShoppingBag className="w-6 h-6 text-white" />}
                    {item.icon === "Repeat" && <Repeat className="w-6 h-6 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-16 lg:py-24 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-white">What Our Customers Say</h2>
            <div className="relative">
              <div className="swiper-container">
                <div className="swiper-wrapper">
                  {[
                    { name: "Alice Johnson", avatar: "/avatars/alice.jpg", quote: "RentMyStyle has transformed my wardrobe. I always have something new to wear!" },
                    { name: "Mark Thompson", avatar: "/avatars/mark.jpg", quote: "The quality of clothes and customer service is outstanding. Highly recommended!" },
                    { name: "Sarah Lee", avatar: "/avatars/sarah.jpg", quote: "I love the flexibility and variety. It's like having a new closet every month!" },
                  ].map((testimonial) => (
                    <div key={testimonial.name} className="swiper-slide">
                      <Card className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 shadow-lg transition-transform transform hover:scale-105">
                        <Avatar className="mb-4">
                          <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                          <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <CardContent className="text-center">
                          <p className="text-gray-600 dark:text-gray-300 mb-4">"{testimonial.quote}"</p>
                          <div className="flex justify-center text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <StarIcon key={i} className="w-4 h-4" />
                            ))}
                          </div>
                        </CardContent>
                        <CardHeader>
                          <CardTitle>{testimonial.name}</CardTitle>
                        </CardHeader>
                      </Card>
                    </div>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-16 lg:py-24 bg-gradient-to-r from-indigo-500 to-purple-600">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">Stay Updated</h2>
            <p className="text-lg sm:text-xl text-gray-200 mb-8">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <form className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-auto px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-300"
              />
              <Button className="px-6 py-2 rounded-full">Subscribe</Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full py-8 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 RentMyStyle. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link className="text-sm hover:text-purple-500 transition-colors duration-300" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm hover:text-purple-500 transition-colors duration-300" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-purple-500 transition-colors duration-300">
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-500 transition-colors duration-300">
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-500 transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-purple-500 transition-colors duration-300">
              <MailIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function Category(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7h18M3 12h18M3 17h18" />
    </svg>
  )
}

function ShoppingBag(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 7V6a6 6 0 1112 0v1m-6 14a2 2 0 100-4 2 2 0 000 4zm0-8a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  )
}

function Repeat(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 1l4 4-4 4M7 23l-4-4 4-4M3 12h7m7 0h7" />
    </svg>
  )
}