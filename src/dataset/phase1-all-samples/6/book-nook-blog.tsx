import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, Search, Star, Menu, X, Moon, Sun } from 'lucide-react'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Component() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <header className="bg-white dark:bg-gray-800 shadow fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-amber-500 animate-bounce" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">BookNook</span>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {["Home", "Categories", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-amber-500 transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex items-center space-x-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost" className="md:hidden">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="top">
                <div className="grid gap-4 py-4">
                  <Input className="w-full" placeholder="Search reviews..." />
                </div>
              </SheetContent>
            </Sheet>
            <Input className="w-64 transition-all duration-200 hidden md:inline-flex" placeholder="Search reviews..." />
            <Button variant="ghost" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
              {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="sr-only">Toggle Theme</span>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="flex flex-col space-y-4">
                  {["Home", "Categories", "About", "Contact"].map((item) => (
                    <a key={item} href="#" className="text-gray-600 dark:text-gray-300 hover:text-amber-500 transition-colors duration-200">{item}</a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 pt-24 pb-12">
        <section className="mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">Welcome to BookNook</h1>
          <p className="text-gray-700 dark:text-gray-300 text-lg">Discover insightful reviews and the best reads of the month curated just for you.</p>
        </section>
        <section className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-6">Latest Reviews</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-xl transition-shadow duration-300 overflow-hidden transform hover:scale-105">
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
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Book Title {i}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-2">Author Name</p>
                    <div className="flex items-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button className="w-full hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors duration-200" variant="outline">
                          Read Full Review
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[425px]">
                        <DialogTitle>Review of Book Title {i}</DialogTitle>
                        <DialogDescription>
                          Detailed review content goes here. This section can include insights, analysis, and personal opinions about the book.
                        </DialogDescription>
                        <DialogClose asChild>
                          <Button className="mt-4" variant="default">Close</Button>
                        </DialogClose>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              ))}
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Categories</h2>
            <div className="flex flex-wrap gap-4">
              {["Fiction", "Non-Fiction", "Mystery", "Sci-Fi", "Romance", "Biography"].map((category) => (
                <Button key={category} variant="outline" className="text-left justify-start hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors duration-200">
                  {category}
                </Button>
              ))}
            </div>
          </div>
          <aside className="lg:w-1/3 mt-12 lg:mt-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">Best Reads of the Month</h2>
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
                      <h3 className="font-semibold text-gray-900 dark:text-white">Best Read Title {i}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Author Name</p>
                      <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full flex items-center justify-center hover:bg-amber-100 dark:hover:bg-amber-900 transition-colors duration-200">
                View All Best Reads
              </Button>
            </div>
          </aside>
        </section>
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow mt-12">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 dark:text-gray-400">&copy; 2024 BookNook. All rights reserved.</p>
          <div className="flex flex-wrap justify-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-500 transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-500 transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-amber-500 transition-colors duration-200">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

