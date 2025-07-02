'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Trash2, Plus, Book, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface Book {
  id: string
  title: string
  author: string
  image?: string
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<Book[]>([])
  const [newBook, setNewBook] = useState<Book>({ id: '', title: '', author: '', image: '' })
  const [isAdding, setIsAdding] = useState(false)

  useEffect(() => {
    const storedWishlist = localStorage.getItem('bookNestWishlist')
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('bookNestWishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = () => {
    if (newBook.title && newBook.author) {
      setIsAdding(true)
      const bookToAdd = {
        ...newBook,
        id: Date.now().toString(),
        image: newBook.image || `https://via.placeholder.com/150?text=${encodeURIComponent(newBook.title)}`
      }
      setWishlist([...wishlist, bookToAdd])
      setNewBook({ id: '', title: '', author: '', image: '' })
      setTimeout(() => setIsAdding(false), 500)
    }
  }

  const removeFromWishlist = (id: string) => {
    if (confirm('Are you sure you want to remove this book from your wishlist?')) {
      setWishlist(wishlist.filter(book => book.id !== id))
    }
  }

  const clearWishlist = () => {
    if (confirm('Are you sure you want to clear your entire wishlist?')) {
      setWishlist([])
    }
  }

  return (
    <div className="container mx-auto p-4">
      <header className="flex flex-col items-center mb-8">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-indigo-600 flex items-center text-center">
          <Book className="mr-2 h-6 w-6 sm:h-8 sm:w-8" />
          BookNest Wishlist
        </h1>
        <p className="text-gray-600 mt-2 text-sm sm:text-base text-center">Save and manage your favorite books for future purchase</p>
      </header>

      <Card className="mb-6 shadow-lg transform transition-transform hover:scale-105">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">Add a Book to Your Wishlist</CardTitle>
          <CardDescription className="text-sm sm:text-base">Enter the details of the book you'd like to add.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title" className="text-sm sm:text-base">Title</Label>
              <Input
                id="title"
                placeholder="Enter book title"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                className="focus:border-indigo-500 text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="author" className="text-sm sm:text-base">Author</Label>
              <Input
                id="author"
                placeholder="Enter author name"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                className="focus:border-indigo-500 text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="image" className="text-sm sm:text-base">Cover Image URL</Label>
              <Input
                id="image"
                placeholder="Enter image URL (optional)"
                value={newBook.image}
                onChange={(e) => setNewBook({ ...newBook, image: e.target.value })}
                className="focus:border-indigo-500 text-sm sm:text-base"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button
            onClick={addToWishlist}
            disabled={!newBook.title || !newBook.author || isAdding}
            className="flex items-center w-full sm:w-auto"
          >
            <Plus className="mr-2 h-4 w-4" />
            {isAdding ? 'Adding...' : 'Add to Wishlist'}
          </Button>
        </CardFooter>
      </Card>

      {wishlist.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 space-y-2 sm:space-y-0">
          <h2 className="text-xl sm:text-2xl font-semibold flex items-center">
            <Star className="mr-2 text-yellow-500 h-5 w-5 sm:h-6 sm:w-6" />
            Your Wishlist
          </h2>
          <Button variant="destructive" size="sm" onClick={clearWishlist} className="w-full sm:w-auto">
            Clear All
          </Button>
        </div>
      )}

      <AnimatePresence>
        <motion.div
          className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {wishlist.map(book => (
            <motion.div
              key={book.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="hover:shadow-2xl transition-shadow">
                <CardHeader className="flex flex-col sm:flex-row items-center">
                  <img
                    src={book.image}
                    alt={`${book.title} cover`}
                    className="w-24 h-36 object-cover rounded-md mb-4 sm:mb-0 sm:mr-4"
                  />
                  <div className="text-center sm:text-left">
                    <CardTitle className="text-base sm:text-lg">{book.title}</CardTitle>
                    <CardDescription className="text-gray-500 text-sm">{book.author}</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-center sm:justify-end space-x-2">
                  <Button variant="secondary" size="icon" aria-label="Favorite" className="w-12 h-12 sm:w-10 sm:h-10">
                    <Heart className="h-6 w-6 sm:h-4 sm:w-4 text-red-500" />
                  </Button>
                  <Button variant="destructive" size="icon" aria-label="Remove" onClick={() => removeFromWishlist(book.id)} className="w-12 h-12 sm:w-10 sm:h-10">
                    <Trash2 className="h-6 w-6 sm:h-4 sm:w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {wishlist.length === 0 && (
        <div className="flex flex-col items-center mt-10">
          <Book className="h-12 w-12 text-gray-300 mb-4" />
          <p className="text-gray-500 text-center text-sm sm:text-base">Your wishlist is empty. Start adding some books!</p>
        </div>
      )}
    </div>
  )
}

