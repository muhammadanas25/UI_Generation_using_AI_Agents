import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Instagram, Twitter, Menu, X, ChevronUp } from 'lucide-react'

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showBackToTop, setShowBackToTop] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBackToTop(true)
    } else {
      setShowBackToTop(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100 transition-colors duration-500">
      <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <h1 className="text-xl sm:text-2xl font-bold text-green-800 flex items-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l4 8h8l-6 4 2 8-6-4-6 4 2-8-6-4h8l4-8z" />
              </svg>
              PlantParenting
            </h1>
          </Link>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              <li><Link href="#" className="text-green-700 hover:text-green-900 transition-colors duration-300">Home</Link></li>
              <li><Link href="#" className="text-green-700 hover:text-green-900 transition-colors duration-300">Care Guides</Link></li>
              <li><Link href="#" className="text-green-700 hover:text-green-900 transition-colors duration-300">Indoor Gardening</Link></li>
              <li><Link href="#" className="text-green-700 hover:text-green-900 transition-colors duration-300">Green Living</Link></li>
            </ul>
          </nav>
          <button className="md:hidden text-green-700" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="md:hidden bg-white shadow-md">
            <ul className="flex flex-col space-y-4 px-4 py-4">
              <li><Link href="#" className="text-green-700 hover:text-green-900 transition-colors duration-300">Home</Link></li>
              <li><Link href="#" className="text-green-700 hover:text-green-900 transition-colors duration-300">Care Guides</Link></li>
              <li><Link href="#" className="text-green-700 hover:text-green-900 transition-colors duration-300">Indoor Gardening</Link></li>
              <li><Link href="#" className="text-green-700 hover:text-green-900 transition-colors duration-300">Green Living</Link></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-20 sm:py-24">
        <section className="mb-12 sm:mb-16">
          <Card className="bg-white shadow-lg transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-6 sm:p-8 flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-6 md:mb-0">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-green-800 mb-4 animate-fadeInUp">Welcome to PlantParenting</h2>
                <p className="text-green-700 mb-6">Discover the joy of nurturing plants and creating your own indoor oasis. Our expert guides and tips will help you become a confident plant parent in no time!</p>
                <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white transition-colors duration-300">Get Started</Button>
              </div>
              <div className="md:w-1/2 relative mt-6 md:mt-0">
                <img
                  alt="Indoor plants"
                  className="object-cover w-full h-64 sm:h-80 rounded-lg shadow-lg transform hover:scale-110 transition-transform duration-500"
                  src="/indoor-plants.jpg"
                />
                <div className="absolute inset-0 bg-green-800 opacity-0 hover:opacity-25 transition-opacity duration-300 rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-6 sm:mb-8">Recent Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: "5 Low-Maintenance Plants for Beginners", category: "Care Guides" },
              { title: "Creating a Thriving Herb Garden Indoors", category: "Indoor Gardening" },
              { title: "How to Propagate Succulents", category: "Care Guides" },
              { title: "The Benefits of Plants in Your Home Office", category: "Green Living" },
              { title: "Understanding Plant Light Requirements", category: "Care Guides" },
              { title: "Eco-Friendly Pest Control for Houseplants", category: "Green Living" },
            ].map((post, index) => (
              <Card key={index} className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl font-semibold text-green-800">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt={post.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-md mb-4 transform hover:scale-105 transition-transform duration-300"
                    src={`/placeholder.svg?height=300&width=400`}
                  />
                  <p className="text-sm text-green-600">{post.category}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full hover:bg-green-100 transition-colors duration-300">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 sm:mb-16">
          <Card className="bg-green-100 shadow-inner">
            <CardContent className="p-6 sm:p-8 text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-green-800 mb-4">Join Our Newsletter</h2>
              <p className="text-green-700 mb-6">Get the latest plant care tips and green living advice delivered to your inbox!</p>
              <form className="flex flex-col sm:flex-row justify-center gap-4">
                <Input type="email" placeholder="Enter your email" className="flex-grow" />
                <Button type="submit" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white transition-colors duration-300">Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="bg-green-800 text-white py-8">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-center sm:text-left mb-4 sm:mb-0">&copy; 2023 PlantParenting. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-green-300 transition-colors duration-300">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-green-300 transition-colors duration-300">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="hover:text-green-300 transition-colors duration-300">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-green-600 hover:bg-green-700 text-white p-2 sm:p-3 rounded-full shadow-lg transition-colors duration-300 flex items-center justify-center"
            aria-label="Back to Top"
          >
            <ChevronUp size={20} />
          </button>
        )}
      </footer>
    </div>
  )
}

