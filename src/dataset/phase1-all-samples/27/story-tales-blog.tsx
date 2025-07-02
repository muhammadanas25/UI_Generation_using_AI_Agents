'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { BookOpen, Feather, BookText, Twitter, Facebook, Instagram, Menu, X } from 'lucide-react'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold">StoryTales</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Books</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden border-t">
            <ul className="flex flex-col items-center space-y-2 py-4">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Books</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Featured Excerpt</CardTitle>
              <CardDescription>From "The Whispers of Autumn"</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="italic">
                "The leaves rustled beneath her feet, each step a whisper of memories long forgotten. Sarah paused, her hand resting on the rough bark of an ancient oak. In that moment, she could almost hear the stories it held, tales of love and loss etched into its very core..."
              </p>
              <Button className="mt-4">Read More</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Feather className="mr-2" />
                Writing Tip of the Day
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Show, Don't Tell</h3>
              <p>Instead of simply stating emotions, try to describe them through actions and sensory details. This brings your characters to life and immerses readers in the story.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <BookText className="mr-2" />
                Literary Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="font-semibold mb-2">Symbolism in "To Kill a Mockingbird"</h3>
              <p>Harper Lee's use of the mockingbird as a symbol of innocence and harmlessness is central to the novel's themes of injustice and the loss of childhood innocence...</p>
              <Button variant="outline" className="mt-4">Read Full Analysis</Button>
            </CardContent>
          </Card>
        </div>

        <aside className="lg:w-1/3 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>About the Author</CardTitle>
            </CardHeader>
            <CardContent>
              <img src="/placeholder.svg?height=150&width=150" alt="Author" className="rounded-full mx-auto mb-4 w-32 h-32 md:w-40 md:h-40" />
              <p>Jane Doe is an award-winning author of contemporary fiction. With a passion for storytelling and a keen eye for human nature, Jane weaves tales that touch the heart and stir the soul.</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subscribe to Newsletter</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input type="email" placeholder="Enter your email" />
                <Button className="w-full">Subscribe</Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Follow Me</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-primary hover:text-primary-foreground"><Twitter /></a>
                <a href="#" className="text-primary hover:text-primary-foreground"><Facebook /></a>
                <a href="#" className="text-primary hover:text-primary-foreground"><Instagram /></a>
              </div>
            </CardContent>
          </Card>
        </aside>
      </main>

      <footer className="border-t mt-8">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          © 2023 StoryTales by Jane Doe. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

