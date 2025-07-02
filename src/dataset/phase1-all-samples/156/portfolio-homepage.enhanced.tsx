import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pencil, BookOpen, SmilePlus, Menu, X, GitHub, Twitter, Instagram } from "lucide-react"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-foreground transition-colors duration-300">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary flex items-center">
            <svg
              className="w-8 h-8 mr-2 animate-pulse"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            DoodleCraft
          </h1>
          <nav className="hidden md:flex space-x-6">
            <Button variant="ghost" className="hover:text-primary transition-colors duration-300">Home</Button>
            <Button variant="ghost" className="hover:text-primary transition-colors duration-300">Gallery</Button>
            <Button variant="ghost" className="hover:text-primary transition-colors duration-300">About</Button>
            <Button variant="ghost" className="hover:text-primary transition-colors duration-300">Contact</Button>
          </nav>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <ul className="flex flex-col space-y-2 p-4">
              <li><Button variant="ghost" className="w-full text-left hover:text-primary transition-colors duration-300">Home</Button></li>
              <li><Button variant="ghost" className="w-full text-left hover:text-primary transition-colors duration-300">Gallery</Button></li>
              <li><Button variant="ghost" className="w-full text-left hover:text-primary transition-colors duration-300">About</Button></li>
              <li><Button variant="ghost" className="w-full text-left hover:text-primary transition-colors duration-300">Contact</Button></li>
            </ul>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="container mx-auto py-24 px-4 flex flex-col-reverse md:flex-row items-center">
          <div className="md:w-1/2 animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-800">Bringing imagination to life through illustration</h2>
            <p className="text-xl mb-6 text-gray-600">Hand-drawn illustrations, whimsical comics, and enchanting children's book art</p>
            <Button size="lg" className="bg-primary hover:bg-primary-dark transition-colors duration-300 animate-bounce">Explore My Work</Button>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Card className="transform hover:scale-105 transition-transform duration-300 shadow-lg">
              <CardContent className="p-0">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Featured illustration" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="container mx-auto py-16 px-4">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-800">My Creations</h3>
          <Tabs defaultValue="illustrations" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-100 rounded-t-md">
              <TabsTrigger value="illustrations" className="flex items-center justify-center space-x-2">
                <Pencil className="h-5 w-5" />
                <span>Illustrations</span>
              </TabsTrigger>
              <TabsTrigger value="comics" className="flex items-center justify-center space-x-2">
                <BookOpen className="h-5 w-5" />
                <span>Comics</span>
              </TabsTrigger>
              <TabsTrigger value="childrens-books" className="flex items-center justify-center space-x-2">
                <SmilePlus className="h-5 w-5" />
                <span>Children's Books</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="illustrations">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="transform hover:scale-105 transition-transform duration-300 shadow-md">
                    <CardContent className="p-0">
                      <img 
                        src={`/placeholder.svg?height=200&width=300&text=Illustration ${i}`} 
                        alt={`Illustration ${i}`} 
                        className="w-full h-auto"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="comics">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="transform hover:scale-105 transition-transform duration-300 shadow-md">
                    <CardContent className="p-0">
                      <img 
                        src={`/placeholder.svg?height=200&width=300&text=Comic ${i}`} 
                        alt={`Comic ${i}`} 
                        className="w-full h-auto"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="childrens-books">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="transform hover:scale-105 transition-transform duration-300 shadow-md">
                    <CardContent className="p-0">
                      <img 
                        src={`/placeholder.svg?height=200&width=300&text=Children's Book ${i}`} 
                        alt={`Children's Book ${i}`} 
                        className="w-full h-auto"
                      />
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* About Section */}
        <section className="container mx-auto py-16 px-4 bg-gray-50">
          <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Card className="shadow-lg">
                <CardContent className="p-0">
                  <img 
                    src="/about-placeholder.svg?height=400&width=400" 
                    alt="About DoodleCraft" 
                    className="w-full h-auto rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
            <div className="md:w-1/2 md:pl-12 animate-fadeIn">
              <h3 className="text-3xl font-bold mb-4 text-gray-800">About DoodleCraft</h3>
              <p className="text-lg mb-6 text-gray-600">
                Hi there! I'm the artist behind DoodleCraft, bringing whimsical worlds to life through my illustrations, comics, and children's books. With a passion for storytelling and a love for vibrant colors, I create art that sparks joy and imagination in people of all ages.
              </p>
              <Button variant="outline" className="hover:bg-primary hover:text-white transition-colors duration-300">Learn More About Me</Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="container mx-auto py-16 px-4">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-3xl font-bold mb-4 text-gray-800">Get in Touch</h3>
            <p className="text-lg mb-6 text-gray-600">
              Interested in commissioning a piece or collaborating on a project? I'd love to hear from you!
            </p>
            <Button className="bg-primary hover:bg-primary-dark transition-colors duration-300">Contact Me</Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-secondary transition-colors duration-300"><GitHub className="w-6 h-6" /></a>
            <a href="#" className="hover:text-secondary transition-colors duration-300"><Twitter className="w-6 h-6" /></a>
            <a href="#" className="hover:text-secondary transition-colors duration-300"><Instagram className="w-6 h-6" /></a>
          </div>
          <p className="">&copy; 2023 DoodleCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}