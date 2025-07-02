import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Headphones, Mic2, Search, Menu, X } from 'lucide-react'
import Link from "next/link"

export default function TuneTalesBlog() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold">TuneTales</h1>
            <nav className="hidden sm:block">
              <ul className="flex space-x-4">
                <li><Link href="#" className="hover:underline">Home</Link></li>
                <li><Link href="#" className="hover:underline">Reviews</Link></li>
                <li><Link href="#" className="hover:underline">Interviews</Link></li>
                <li><Link href="#" className="hover:underline">About</Link></li>
              </ul>
            </nav>
            <button
              className="sm:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <nav className="sm:hidden bg-primary text-primary-foreground">
          <ul className="container mx-auto px-4 py-2 space-y-2">
            <li><Link href="#" className="block hover:underline">Home</Link></li>
            <li><Link href="#" className="block hover:underline">Reviews</Link></li>
            <li><Link href="#" className="block hover:underline">Interviews</Link></li>
            <li><Link href="#" className="block hover:underline">About</Link></li>
          </ul>
        </nav>
      )}

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
          <div className="sm:w-2/3">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Latest Posts</h2>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Album Review: "Neon Dreams" by The Midnight Riders</CardTitle>
                  <CardDescription>A synth-wave masterpiece that takes you on a nostalgic journey</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">The Midnight Riders' latest album "Neon Dreams" is a testament to the enduring appeal of 80s-inspired synth-wave. With pulsating beats and soaring melodies, this album...</p>
                  <Button className="mt-4 w-full sm:w-auto">Read More</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">Interview: Rising Star Luna Echo on Her Debut Album</CardTitle>
                  <CardDescription>We sit down with the indie-pop sensation to discuss her creative process</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base">Luna Echo burst onto the scene with her hit single "Starlight Serenade," and now she's ready to share her full artistic vision with her debut album. We had the chance to chat with Luna about...</p>
                  <Button className="mt-4 w-full sm:w-auto">Read More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          <aside className="sm:w-1/3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Search</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input type="search" placeholder="Search articles..." />
                  <Button type="submit" size="icon">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="#" className="flex items-center text-sm hover:underline">
                      <Headphones className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span>"Echoes of Eternity" - A Progressive Rock Epic</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center text-sm hover:underline">
                      <Mic2 className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span>Backstage with The Neon Nights: Tour Exclusive</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="flex items-center text-sm hover:underline">
                      <Headphones className="mr-2 h-4 w-4 flex-shrink-0" />
                      <span>Jazz Fusion Redefined: "Cosmic Rhythms" Review</span>
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><Link href="#" className="text-sm hover:underline">Album Reviews</Link></li>
                  <li><Link href="#" className="text-sm hover:underline">Artist Interviews</Link></li>
                  <li><Link href="#" className="text-sm hover:underline">Concert Reviews</Link></li>
                  <li><Link href="#" className="text-sm hover:underline">Music News</Link></li>
                  <li><Link href="#" className="text-sm hover:underline">Genre Spotlights</Link></li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}

