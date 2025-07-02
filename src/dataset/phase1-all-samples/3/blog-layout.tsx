"use client";

import Link from "next/link"
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl md:text-2xl font-bold">DailyThoughts</Link>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><Link href="/about" className="hover:underline">About</Link></li>
              <li><Link href="/archive" className="hover:underline">Archive</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 flex flex-col md:flex-row">
        <article className="w-full md:w-2/3 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">The Art of Mindfulness</h1>
          <p className="text-muted-foreground mb-4">Published on May 15, 2023 by Jane Doe</p>
          <div className="prose max-w-none">
            <p>Mindfulness is the practice of being fully present and engaged in the moment, aware of your thoughts and feelings without distraction or judgment. In today's fast-paced world, it's becoming increasingly important to cultivate this skill...</p>
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">The Benefits of Mindfulness</h2>
            <p>Regular mindfulness practice has been shown to reduce stress, improve focus, and enhance overall well-being. Studies have demonstrated that mindfulness can lead to changes in the brain's structure and function, particularly in areas related to attention, emotion regulation, and self-awareness...</p>
            <h2 className="text-xl md:text-2xl font-semibold mt-6 mb-4">Getting Started with Mindfulness</h2>
            <p>Beginning a mindfulness practice doesn't have to be complicated. Here are some simple steps to get started:</p>
            <ol className="list-decimal list-inside">
              <li>Find a quiet space where you won't be disturbed</li>
              <li>Set aside 5-10 minutes to start</li>
              <li>Sit comfortably with your back straight</li>
              <li>Focus on your breath, noticing the sensation of inhaling and exhaling</li>
              <li>When your mind wanders, gently bring your attention back to your breath</li>
            </ol>
          </div>
        </article>

        <aside className="w-full md:w-1/3 md:pl-8">
          <div className="bg-muted p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold mb-4">Recent Posts</h2>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:underline">The Power of Positive Thinking</Link></li>
              <li><Link href="#" className="hover:underline">5 Tips for Better Sleep</Link></li>
              <li><Link href="#" className="hover:underline">Understanding Emotional Intelligence</Link></li>
              <li><Link href="#" className="hover:underline">The Benefits of Regular Exercise</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
            <form className="space-y-4">
              <Input type="email" placeholder="Enter your email" />
              <Button type="submit" className="w-full">Subscribe</Button>
            </form>
          </div>
        </aside>
      </main>

      <footer className="bg-muted mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left">&copy; 2023 DailyThoughts. All rights reserved.</p>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  )
}

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </Button>
      {isOpen && (
        <nav className="absolute left-0 right-0 top-16 bg-background border-b p-4">
          <ul className="space-y-2">
            <li><Link href="/about" className="block hover:underline">About</Link></li>
            <li><Link href="/archive" className="block hover:underline">Archive</Link></li>
            <li><Link href="/contact" className="block hover:underline">Contact</Link></li>
          </ul>
        </nav>
      )}
    </div>
  )
}


