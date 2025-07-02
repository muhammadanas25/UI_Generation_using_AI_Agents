import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, ClockIcon, MenuIcon, SearchIcon } from 'lucide-react'
import { useState } from "react"

export default function BlogPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold text-primary sm:text-2xl">
            TechSage
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} absolute left-0 right-0 top-16 z-20 bg-background p-4 md:static md:block md:p-0`}>
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-4 md:space-y-0">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="container py-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="w-full md:w-2/3">
            <h1 className="mb-8 text-3xl font-bold sm:text-4xl">Latest Posts</h1>
            <div className="space-y-8">
              {[1, 2, 3].map((post) => (
                <Card key={post}>
                  <CardHeader>
                    <h2 className="text-xl font-semibold sm:text-2xl">
                      <Link href={`/post/${post}`}>The Future of AI in Web Development</Link>
                    </h2>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground sm:gap-4">
                      <span className="flex items-center">
                        <CalendarIcon className="mr-1 h-4 w-4" />
                        May 15, 2023
                      </span>
                      <span className="flex items-center">
                        <ClockIcon className="mr-1 h-4 w-4" />
                        5 min read
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground sm:text-base">
                      Artificial Intelligence is revolutionizing the way we build and interact with websites. In this post,
                      we explore the latest AI trends in web development and how they're shaping the future of the internet.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div className="flex flex-wrap gap-2">
                      <Badge>AI</Badge>
                      <Badge>Web Development</Badge>
                      <Badge>Future Tech</Badge>
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </div>
            <div className="mt-8">
              <Button variant="outline">Load More Posts</Button>
            </div>
          </div>
          <aside className="w-full md:w-1/3 md:pl-8">
            <Card>
              <CardHeader>
                <h2 className="text-xl font-semibold">About TechSage</h2>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="TechSage" />
                    <AvatarFallback>TS</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">John Doe</p>
                    <p className="text-sm text-muted-foreground">Tech Enthusiast & Blogger</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Exploring the cutting edge of technology and sharing insights on the latest trends in the tech world.
                </p>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <h2 className="text-xl font-semibold">Search</h2>
              </CardHeader>
              <CardContent>
                <form className="flex items-center space-x-2">
                  <Input type="search" placeholder="Search posts..." />
                  <Button type="submit" size="icon">
                    <SearchIcon className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </CardContent>
            </Card>
            <Card className="mt-6">
              <CardHeader>
                <h2 className="text-xl font-semibold">Categories</h2>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>
                    <Link href="/category/ai" className="text-muted-foreground hover:text-primary">
                      Artificial Intelligence
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/web-dev" className="text-muted-foreground hover:text-primary">
                      Web Development
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/cybersecurity" className="text-muted-foreground hover:text-primary">
                      Cybersecurity
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/data-science" className="text-muted-foreground hover:text-primary">
                      Data Science
                    </Link>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </aside>
        </div>
      </main>
    </div>
  )
}

