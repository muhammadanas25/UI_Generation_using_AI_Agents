import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Search, Star, Menu, X, Moon, Sun } from "lucide-react"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { useTheme } from "next-themes"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-gray-100 transition-colors duration-300">
      <header className="bg-white shadow fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-amber-500 animate-bounce" />
            <span className="text-2xl font-bold text-gray-900">BookNook</span>
          </div>
          <nav className="hidden lg:flex">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">Categories</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">About</a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center space-x-2">
            <Input className="w-64 transition-all duration-200" placeholder="Search reviews..." />
            <Button size="icon" variant="ghost" className="hover:bg-amber-100 p-2 rounded">
              <Search className="h-4 w-4 text-gray-600" />
              <span className="sr-only">Search</span>
            </Button>
            <Button variant="ghost" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ? <Moon className="h-5 w-5 text-gray-600" /> : <Sun className="h-5 w-5 text-gray-600" />}
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <button className="lg:hidden p-2 rounded hover:bg-gray-200 transition-colors duration-200" onClick={() => setMobileMenuOpen(true)}>
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button className="self-end" onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-gray-600" />
              </button>
              <nav>
                <ul className="flex flex-col space-y-2">
                  <li>
                    <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">Home</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">Categories</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">About</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">Contact</a>
                  </li>
                </ul>
              </nav>
              <div className="flex items-center space-x-2">
                <Input className="w-full" placeholder="Search reviews..." />
                <Button size="icon" variant="ghost" className="hover:bg-amber-100 p-2 rounded">
                  <Search className="h-4 w-4 text-gray-600" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      <main className="container mx-auto px-4 py-24">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-fade-in">Welcome to BookNook</h1>
          <p className="text-gray-700 text-lg">Discover insightful reviews and the best reads of the month curated just for you.</p>
        </section>
        <section className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Latest Reviews</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:scale-105">
                  <img
                    alt="Book cover"
                    className="w-full h-48 object-cover"
                    height="200"
                    src={`/placeholder.svg?height=200&width=400`}
                    style={{
                      aspectRatio: "400/200",
                      objectFit: "cover",
                    }}
                    width="400"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Book Title {i}</h3>
                    <p className="text-gray-600 mb-2">Author Name</p>
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="mt-4 w-full hover:bg-amber-100 transition-colors duration-200" variant="outline">
                          Read Full Review
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-lg">
                        <DialogTitle>Review of Book Title {i}</DialogTitle>
                        <DialogDescription>
                          Detailed review content goes here. This section can include insights, analysis, and personal opinions about the book.
                        </DialogDescription>
                        <Button onClick={() => {}} className="mt-4" variant="primary">
                          Close
                        </Button>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Categories</h2>
            <div className="flex flex-wrap gap-4">
              {["Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Romance", "Biography"].map((category) => (
                <Button key={category} variant="outline" className="text-left justify-start hover:bg-amber-100 transition-colors duration-200">
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <aside className="lg:w-1/3">
            <div className="bg-white rounded-lg shadow p-6 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Best Reads of the Month</h2>
              <ul className="space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex items-center space-x-4">
                    <img
                      alt={`Best read ${i}`}
                      className="w-16 h-24 object-cover rounded"
                      height="96"
                      src={`/placeholder.svg?height=96&width=64`}
                      style={{
                        aspectRatio: "64/96",
                        objectFit: "cover",
                      }}
                      width="64"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">Best Read Title {i}</h3>
                      <p className="text-sm text-gray-600">Author Name</p>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full flex items-center justify-center hover:bg-amber-100 transition-colors duration-200">
                View All Best Reads
              </Button>
            </div>
          </aside>
        </section>
      </main>
      <footer className="bg-white shadow mt-12">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600">&copy; 2024 BookNook. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-amber-500 transition-colors duration-200">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}