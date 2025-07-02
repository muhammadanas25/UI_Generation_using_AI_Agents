import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Gamepad2, Trophy, Calendar, Menu, X } from 'lucide-react'

export default function GameSphere() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary">GameSphere</h1>
          <nav className="hidden sm:block">
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-primary">Home</a></li>
              <li><a href="#" className="hover:text-primary">Reviews</a></li>
              <li><a href="#" className="hover:text-primary">Esports</a></li>
              <li><a href="#" className="hover:text-primary">Previews</a></li>
            </ul>
          </nav>
          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="sm:hidden border-t">
            <ul className="py-2">
              <li><a href="#" className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground">Home</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground">Reviews</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground">Esports</a></li>
              <li><a href="#" className="block px-4 py-2 hover:bg-accent hover:text-accent-foreground">Previews</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="lg:col-span-2">
            <Card className="mb-6 sm:mb-8">
              <CardContent className="p-0">
                <img src="/placeholder.svg?height=400&width=800" alt="Featured Game" className="w-full h-48 sm:h-64 object-cover" />
              </CardContent>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl font-bold">Elden Ring: The Definitive Review</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground">Dive into the intricate world of Elden Ring as we explore its vast landscapes, challenging combat, and rich lore in our comprehensive review.</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full sm:w-auto">Read More <ArrowRight className="ml-2 h-4 w-4" /></Button>
              </CardFooter>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: "Top 5 FPS Games of 2023", type: "review", icon: <Gamepad2 className="h-4 w-4" /> },
                { title: "LoL Worlds 2023: Group Stage Recap", type: "esports", icon: <Trophy className="h-4 w-4" /> },
                { title: "Starfield: What We Know So Far", type: "preview", icon: <Calendar className="h-4 w-4" /> },
                { title: "The Rise of Indie Games in the Industry", type: "feature", icon: <Gamepad2 className="h-4 w-4" /> },
              ].map((article, index) => (
                <Card key={index}>
                  <CardContent className="p-0">
                    <img src={`/placeholder.svg?height=200&width=400&text=${article.title}`} alt={article.title} className="w-full h-32 sm:h-40 object-cover" />
                  </CardContent>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg font-semibold">{article.title}</CardTitle>
                  </CardHeader>
                  <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-2 sm:space-y-0">
                    <Badge variant="outline" className="flex items-center">
                      {article.icon}
                      <span className="ml-1">{article.type}</span>
                    </Badge>
                    <Button variant="ghost" size="sm">Read</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Popular Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {["The Last of Us Part II Review", "Cyberpunk 2077: One Year Later", "Top 10 RPGs of All Time"].map((post, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={`/placeholder.svg?text=${index + 1}`} />
                        <AvatarFallback>{index + 1}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{post}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Newsletter</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Enter your email" type="email" />
                  <Button className="w-full">Subscribe</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="border-t mt-8 sm:mt-12">
        <div className="container mx-auto px-4 py-4 sm:py-6 text-center text-xs sm:text-sm text-muted-foreground">
          © 2023 GameSphere. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

