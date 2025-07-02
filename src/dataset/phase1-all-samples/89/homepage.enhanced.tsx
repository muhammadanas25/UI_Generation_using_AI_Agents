import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronRight, Mail, MapPin, Phone, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <header className="bg-primary text-primary-foreground shadow-md fixed w-full z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Image src="/logo.svg" alt="PetPaws Logo" width={40} height={40} className="mr-2" />
            PetPaws
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li><Link href="#" className="hover:text-secondary transition-colors">Shop</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">About</Link></li>
              <li><Link href="#" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-primary text-primary-foreground absolute top-full left-0 w-full animate-slide-down">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <Button variant="ghost" onClick={() => setMobileMenuOpen(false)} className="self-end">
                <X className="w-6 h-6" />
              </Button>
              <Link href="#" className="hover:text-secondary transition-colors">Shop</Link>
              <Link href="#" className="hover:text-secondary transition-colors">About</Link>
              <Link href="#" className="hover:text-secondary transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow pt-20">
        <section className="bg-cover bg-center bg-no-repeat py-24" style={{ backgroundImage: 'url(/hero-bg.jpg)' }}>
          <div className="container mx-auto px-4 text-center text-white">
            <h1 className="text-5xl font-extrabold mb-4 animate-fade-in">Welcome to PetPaws</h1>
            <p className="text-2xl mb-8 animate-fade-in delay-200">Your one-stop shop for all pet supplies</p>
            <Button size="lg" className="animate-bounce">
              Shop Now
            </Button>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Shop by Pet</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {["Dogs", "Cats", "Fish", "Birds"].map((pet) => (
                <Card key={pet} className="text-center hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <Image
                      src={`/categories/${pet.toLowerCase()}.png`}
                      alt={pet}
                      width={100}
                      height={100}
                      className="mx-auto mb-4 w-24 h-24 object-contain"
                    />
                    <h3 className="text-xl font-semibold">{pet}</h3>
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button variant="outline" className="hover:bg-secondary hover:text-primary transition-colors flex items-center">
                      Shop {pet}
                      <ChevronRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Trending Products</h2>
            <div className="carousel relative">
              <div className="flex overflow-x-auto space-x-8 snap-x snap-mandatory">
                {[
                  { name: "Cozy Pet Bed", price: "$39.99", image: "/products/pet-bed.jpg" },
                  { name: "Interactive Toy", price: "$24.99", image: "/products/toy.jpg" },
                  { name: "Gourmet Pet Food", price: "$29.99", image: "/products/pet-food.jpg" },
                  { name: "Stylish Collar", price: "$19.99", image: "/products/collar.jpg" },
                ].map((product) => (
                  <Card key={product.name} className="w-80 snap-start">
                    <CardHeader>
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-t-lg"
                      />
                    </CardHeader>
                    <CardContent>
                      <CardTitle>{product.name}</CardTitle>
                      <p className="text-muted-foreground">{product.price}</p>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full transition-transform transform hover:scale-105">Add to Cart</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              <div className="absolute inset-y-0 left-0 flex items-center">
                <Button variant="ghost" className="bg-white bg-opacity-50 hover:bg-opacity-75">
                  <ChevronRight className="w-6 h-6 transform rotate-90" />
                </Button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center">
                <Button variant="ghost" className="bg-white bg-opacity-50 hover:bg-opacity-75">
                  <ChevronRight className="w-6 h-6 transform -rotate-90" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Subscribe to PetPaws</h2>
            <div className="max-w-md mx-auto text-center">
              <p className="mb-6">Get the latest updates on new products, special offers, and pet care tips!</p>
              <form className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="w-full sm:w-auto">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PetPaws</h3>
              <p>Your trusted partner in providing the best for your pets.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:underline">About Us</Link></li>
                <li><Link href="#" className="hover:underline">FAQs</Link></li>
                <li><Link href="#" className="hover:underline">Shipping & Returns</Link></li>
                <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  (123) 456-7890
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  info@petpaws.com
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  123 Pet Street, Pawsville
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-secondary transition-colors">
                  <Image src="/icons/facebook.svg" alt="Facebook" width={24} height={24} />
                </Link>
                <Link href="#" className="hover:text-secondary transition-colors">
                  <Image src="/icons/instagram.svg" alt="Instagram" width={24} height={24} />
                </Link>
                <Link href="#" className="hover:text-secondary transition-colors">
                  <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
                </Link>
                <Link href="#" className="hover:text-secondary transition-colors">
                  <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-primary-foreground pt-6 text-center">
            <p>&copy; 2023 PetPaws. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}