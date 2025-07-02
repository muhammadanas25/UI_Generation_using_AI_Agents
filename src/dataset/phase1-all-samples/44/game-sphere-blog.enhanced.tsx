import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Gamepad2, Trophy, Calendar, Search, Sun, Moon, Menu, X } from 'lucide-react'
import { useState } from "react"

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <header className="border-b shadow-md bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <Gamepad2 className="mr-2 h-6 w-6 sm:h-8 sm:w-8" />
              GameSphere
            </h1>
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Home</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Reviews</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Esports</a></li>
                <li><a href="#" className="hover:text-primary transition-colors duration-200">Previews</a></li>
              </ul>
            </nav>
            <div className="flex items-center space-x-4">
              <Input
                placeholder="Search games..."
                type="search"
                className="hidden md:block w-48"
                icon={<Search className="h-4 w-4 text-muted-foreground" />}
              />
              <Button variant="ghost" onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button variant="ghost" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
          {isMenuOpen && (
            <nav className="md:hidden border-t">
              <ul className="py-2">
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Home</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Reviews</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Esports</a></li>
                <li><a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Previews</a></li>
              </ul>
            </nav>
          )}
        </header>

        <main className="container mx-auto px-4 py-6 sm:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="lg:col-span-2">
              <Card className="mb-6 sm:mb-8 transform hover:scale-105 transition-transform duration-300 shadow-lg">
                <CardContent className="p-0">
                  <img
                    src="/featured-game.jpg"
                    alt="Featured Game"
                    className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-t-md"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl font-bold">Elden Ring: The Definitive Review</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mt-2 text-sm sm:text-base">
                    Dive into the intricate world of Elden Ring as we explore its vast landscapes, challenging combat, and rich lore in our comprehensive review.
                  </p>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button variant="primary" className="w-full sm:w-auto flex items-center justify-center">
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { title: "Top 5 FPS Games of 2023", type: "Review", icon: <Gamepad2 className="h-4 w-4 mr-1" /> },
                  { title: "LoL Worlds 2023: Group Stage Recap", type: "Esports", icon: <Trophy className="h-4 w-4 mr-1" /> },
                  { title: "Starfield: What We Know So Far", type: "Preview", icon: <Calendar className="h-4 w-4 mr-1" /> },
                  { title: "The Rise of Indie Games in the Industry", type: "Feature", icon: <Gamepad2 className="h-4 w-4 mr-1" /> },
                ].map((article, index) => (
                  <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <img
                        src={`/articles/article-${index + 1}.jpg`}
                        alt={article.title}
                        className="w-full h-32 sm:h-40 object-cover rounded-t-md"
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle className="text-lg sm:text-xl font-semibold">{article.title}</CardTitle>
                    </CardHeader>
                    <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                      <Badge variant="outline" className="flex items-center bg-gray-100 dark:bg-gray-700">
                        {article.icon}
                        <span className="ml-1">{article.type}</span>
                      </Badge>
                      <Button variant="ghost" size="sm" className="w-full sm:w-auto flex items-center justify-center">
                        Read <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 p-4 rounded-t-md">
                  <CardTitle>Popular Posts</CardTitle>
                  <Button variant="ghost" size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-4">
                    {["The Last of Us Part II Review", "Cyberpunk 2077: One Year Later", "Top 10 RPGs of All Time"].map((post, index) => (
                      <li key={index} className="flex items-center space-x-3 hover:bg-gray-50 dark:hover:bg-gray-800 p-2 rounded-md transition-colors duration-200">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={`/avatars/avatar-${index + 1}.jpg`} />
                          <AvatarFallback>{index + 1}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-medium">{post}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gray-100 dark:bg-gray-700 p-4 rounded-t-md">
                  <CardTitle>Newsletter</CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <form className="space-y-4">
                    <Input
                      placeholder="Enter your email"
                      type="email"
                      required
                      className="focus:ring-primary focus:border-primary"
                    />
                    <Button variant="primary" className="w-full">
                      Subscribe
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader className="bg-gray-100 dark:bg-gray-700 p-4 rounded-t-md">
                  <CardTitle>Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="p-4 flex justify-center space-x-4">
                  <Button variant="ghost" className="p-2 hover:bg-blue-100 dark:hover:bg-blue-800 rounded-full transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.38 4.482A13.945 13.945 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.574 4.897 4.897 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.945 13.945 0 0 0 7.548 2.212c9.057 0 14.01-7.496 14.01-13.986 0-.21 0-.423-.015-.634A10.012 10.012 0 0 0 24 4.557z" />
                    </svg>
                  </Button>
                  <Button variant="ghost" className="p-2 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-full transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C8.741 0 6 2.741 6 6c0 2.146 1.198 4.038 2.918 5.252A6.978 6.978 0 0 0 4 17.5V21h4v-3.5a6.978 6.978 0 0 0 3.918-1.248C16.802 10.038 18 8.146 18 6c0-3.259-2.741-6-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 13v-3.5a5.978 5.978 0 0 0-3.918 1.248A5.978 5.978 0 0 1 12 14c-3.309 0-6 2.691-6 6h12z" />
                    </svg>
                  </Button>
                  <Button variant="ghost" className="p-2 hover:bg-red-100 dark:hover:bg-red-800 rounded-full transition-colors duration-200">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.371 0 0 5.371 0 12c0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.404c1.02.005 2.045.138 3 .404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.694.825.576C20.565 21.796 24 17.3 24 12c0-6.629-5.371-12-12-12z" />
                    </svg>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        <footer className="border-t mt-8 sm:mt-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
            © 2023 GameSphere. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  )
}

