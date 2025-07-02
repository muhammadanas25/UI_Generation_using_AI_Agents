import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Headphones, Mic2, Search, Sun, Moon, Menu, X } from 'lucide-react'
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export default function TuneTalesBlog() {
  const [darkMode, setDarkMode] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-primary text-primary-foreground shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/logo.png" alt="TuneTales Logo" width={40} height={40} className="mr-2" />
              <h1 className="text-xl sm:text-2xl font-bold">TuneTales</h1>
            </div>
            <nav className={`absolute top-full left-0 w-full bg-primary text-primary-foreground sm:static sm:w-auto sm:bg-transparent sm:shadow-none ${menuOpen ? "block" : "hidden"} sm:block transition-all duration-300 ease-in-out`}>
              <ul className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 p-4 sm:p-0">
                <li><Link href="#" className="hover:underline transition block py-2 sm:py-0">Home</Link></li>
                <li><Link href="#" className="hover:underline transition block py-2 sm:py-0">Reviews</Link></li>
                <li><Link href="#" className="hover:underline transition block py-2 sm:py-0">Interviews</Link></li>
                <li><Link href="#" className="hover:underline transition block py-2 sm:py-0">About</Link></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={() => setDarkMode(!darkMode)} className="p-2">
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" className="sm:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <section className="mb-12">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image src="/hero.jpg" alt="Music Montage" layout="responsive" width={1600} height={600} className="object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4">
                <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4 text-center animate-fadeIn">Welcome to TuneTales</h2>
                <p className="text-sm sm:text-lg mb-4 sm:mb-6 text-center animate-fadeIn delay-200">Your ultimate destination for in-depth album reviews and exclusive artist interviews.</p>
                <Button size="lg" className="animate-fadeIn delay-400">Get Started</Button>
              </div>
            </div>
          </section>
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="w-full lg:w-3/4">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6">Latest Posts</h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Album Review: 'Neon Dreams' by The Midnight Riders",
                    description: "A synth-wave masterpiece that takes you on a nostalgic journey",
                    image: "/album1.jpg",
                    content: "The Midnight Riders' latest album 'Neon Dreams' is a testament to the enduring appeal of 80s-inspired synth-wave. With pulsating beats and soaring melodies, this album..."
                  },
                  {
                    title: "Interview: Rising Star Luna Echo on Her Debut Album",
                    description: "We sit down with the indie-pop sensation to discuss her creative process",
                    image: "/interview1.jpg",
                    content: "Luna Echo burst onto the scene with her hit single 'Starlight Serenade,' and now she's ready to share her full artistic vision with her debut album. We had the chance to chat with Luna about..."
                  },
                  {
                    title: "Jazz Fusion Redefined: 'Cosmic Rhythms' Review",
                    description: "Exploring the boundaries of jazz with innovative sounds",
                    image: "/album2.jpg",
                    content: "'Cosmic Rhythms' brings a fresh perspective to jazz fusion, blending traditional elements with modern experimentation. The album..."
                  },
                  {
                    title: "Backstage with The Neon Nights: Tour Exclusive",
                    description: "Behind-the-scenes insights from the band's latest tour",
                    image: "/interview2.jpg",
                    content: "Join us as we go backstage with The Neon Nights during their sold-out tour. Get exclusive access to their tour preparations, onstage moments, and personal anecdotes..."
                  }
                ].map((post, index) => (
                  <Card key={index} className="transform hover:scale-105 transition-transform duration-300">
                    <CardHeader>
                      <Image src={post.image} alt={post.title} width={600} height={400} className="rounded-t-lg" />
                      <CardTitle className="mt-4 text-lg sm:text-xl">{post.title}</CardTitle>
                      <CardDescription>{post.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">{post.content}</p>
                      <Button className="mt-4 w-full sm:w-auto">Read More</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            <aside className="w-full lg:w-1/4 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Search</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="flex">
                    <Input type="search" placeholder="Search articles..." className="flex-grow" />
                    <Button type="submit" size="icon" className="ml-2">
                      <Search className="h-5 w-5" />
                      <span className="sr-only">Search</span>
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Posts</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      { icon: Headphones, title: "'Echoes of Eternity' - A Progressive Rock Epic" },
                      { icon: Mic2, title: "Backstage with The Neon Nights: Tour Exclusive" },
                      { icon: Headphones, title: "Jazz Fusion Redefined: 'Cosmic Rhythms' Review" }
                    ].map((post, index) => (
                      <li key={index} className="flex items-start">
                        <post.icon className="mr-3 h-5 w-5 text-primary flex-shrink-0" />
                        <Link href="#" className="text-sm hover:underline transition">
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {["Album Reviews", "Artist Interviews", "Concert Reviews", "Music News", "Genre Spotlights"].map((category, index) => (
                      <li key={index}>
                        <Link href="#" className="text-sm hover:underline transition">
                          {category}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </aside>
          </div>
        </main>

        <footer className="bg-primary text-primary-foreground py-6">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; {new Date().getFullYear()} TuneTales. All rights reserved.</p>
            <div className="flex justify-center space-x-4 mt-4">
              {[
                { href: "#", path: "M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.737 0-4.95 2.213-4.95 4.95 0 .388.044.765.128 1.124C7.691 8.883 4.066 6.96 1.64 3.948a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.24-.62v.062c0 2.385 1.693 4.374 3.946 4.827a4.935 4.935 0 0 1-2.224.085c.63 1.953 2.445 3.377 4.6 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.634A10.012 10.012 0 0 0 24 4.557z" },
                { href: "#", path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 1.97.25 2.42.415a4.92 4.92 0 0 1 1.675 1.09 4.925 4.925 0 0 1 1.09 1.675c.165.45.357 1.214.415 2.42.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.25 1.97-.415 2.42a4.925 4.925 0 0 1-1.09 1.675 4.925 4.925 0 0 1-1.675 1.09c-.45.165-1.214.357-2.42.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-1.97-.25-2.42-.415a4.923 4.923 0 0 1-1.675-1.09 4.923 4.923 0 0 1-1.09-1.675c-.165-.45-.357-1.214-.415-2.42C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.058-1.206.25-1.97.415-2.42a4.92 4.92 0 0 1 1.09-1.675 4.92 4.92 0 0 1 1.675-1.09c.45-.165 1.214-.357 2.42-.415C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.633.308 3.678.64a6.554 6.554 0 0 0-2.38 1.545A6.554 6.554 0 0 0 .64 4.66c-.332.955-.509 2.097-.568 3.374C.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.236 2.419.568 3.374a6.554 6.554 0 0 0 1.545 2.38 6.554 6.554 0 0 0 2.38 1.545c.955.332 2.097.509 3.374.568 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.277-.059 2.419-.236 3.374-.568a6.554 6.554 0 0 0 2.38-1.545 6.554 6.554 0 0 0 1.545-2.38c.332-.955.509-2.097.568-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.236-2.419-.568-3.374a6.554 6.554 0 0 0-1.545-2.38A6.554 6.554 0 0 0 20.322.64c-.955-.332-2.097-.509-3.374-.568C15.668.013 15.259 0 12 0z M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z M18.406 5.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" },
                { href: "#", path: "M12 2.163c3.204 0 3.584.012 4.85.07 1.206.058 1.97.25 2.42.415a4.92 4.92 0 0 1 1.675 1.09 4.925 4.925 0 0 1 1.09 1.675c.165.45.357 1.214.415 2.42.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.058 1.206-.25 1.97-.415 2.42a4.925 4.925 0 0 1-1.09 1.675 4.925 4.925 0 0 1-1.675 1.09c-.45.165-1.214.357-2.42.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.058-1.97-.25-2.42-.415a4.923 4.923 0 0 1-1.675-1.09 4.923 4.923 0 0 1-1.09-1.675c-.165-.45-.357-1.214-.415-2.42C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.058-1.206.25-1.97.415-2.42a4.92 4.92 0 0 1 1.09-1.675 4.92 4.92 0 0 1 1.675-1.09c.45-.165 1.214-.357 2.42-.415C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.633.308 3.678.64a6.554 6.554 0 0 0-2.38 1.545A6.554 6.554 0 0 0 .64 4.66c-.332.955-.509 2.097-.568 3.374C.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.277.236 2.419.568 3.374a6.554 6.554 0 0 0 1.545 2.38 6.554 6.554 0 0 0 2.38 1.545c.955.332 2.097.509 3.374.568 1.28.059 1.689.072 4.948.072s3.668-.013 4.948-.072c1.277-.059 2.419-.236 3.374-.568a6.554 6.554 0 0 0 2.38-1.545 6.554 6.554 0 0 0 1.545-2.38c.332-.955.509-2.097.568-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.277-.236-2.419-.568-3.374a6.554 6.554 0 0 0-1.545-2.38A6.554 6.554 0 0 0 20.322.64c-.955-.332-2.097-.509-3.374-.568C15.668.013 15.259 0 12 0z M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8z M18.406 5.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" }
              ].map((social, index) => (
                <Link key={index} href={social.href} className="hover:text-secondary transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

