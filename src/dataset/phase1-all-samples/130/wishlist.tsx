'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, Trash2 } from 'lucide-react'

interface Book {
  id: string
  title: string
  author: string
}

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<Book[]>([])
  const [newBook, setNewBook] = useState<Book>({ id: '', title: '', author: '' })

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
      setWishlist([...wishlist, { ...newBook, id: Date.now().toString() }])
      setNewBook({ id: '', title: '', author: '' })
    }
  }

  const removeFromWishlist = (id: string) => {
    setWishlist(wishlist.filter(book => book.id !== id))
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-center sm:text-left">BookNest Wishlist</h1>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl sm:text-2xl">Add a Book to Your Wishlist</CardTitle>
          <CardDescription className="text-sm sm:text-base">Enter the details of the book you'd like to add.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="title" className="text-sm sm:text-base">Title</Label>
              <Input
                id="title"
                placeholder="Enter book title"
                value={newBook.title}
                onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
                className="text-sm sm:text-base"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="author" className="text-sm sm:text-base">Author</Label>
              <Input
                id="author"
                placeholder="Enter author name"
                value={newBook.author}
                onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
                className="text-sm sm:text-base"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={addToWishlist} className="w-full sm:w-auto">Add to Wishlist</Button>
        </CardFooter>
      </Card>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {wishlist.map(book => (
          <Card key={book.id} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl">{book.title}</CardTitle>
              <CardDescription className="text-sm sm:text-base">{book.author}</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between mt-auto">
              <Button variant="outline" size="icon" className="w-12 h-12 sm:w-10 sm:h-10">
                <Heart className="h-6 w-6 sm:h-4 sm:w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => removeFromWishlist(book.id)}
                className="w-12 h-12 sm:w-10 sm:h-10"
              >
                <Trash2 className="h-6 w-6 sm:h-4 sm:w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

