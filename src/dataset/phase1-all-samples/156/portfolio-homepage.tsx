import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Pencil, BookOpen, SmilePlus } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="container mx-auto py-6 px-4">
        <nav className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">DoodleCraft</h1>
          <ul className="flex space-x-4">
            <li><Button variant="ghost">Home</Button></li>
            <li><Button variant="ghost">Gallery</Button></li>
            <li><Button variant="ghost">About</Button></li>
            <li><Button variant="ghost">Contact</Button></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Bringing imagination to life through illustration</h2>
            <p className="text-xl mb-6">Hand-drawn illustrations, whimsical comics, and enchanting children's book art</p>
            <Button size="lg">Explore My Work</Button>
          </div>
          <div className="md:w-1/2">
            <Card>
              <CardContent className="p-0">
                <img 
                  src="/placeholder.svg?height=400&width=600" 
                  alt="Featured illustration" 
                  className="w-full h-auto rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto py-12 px-4">
        <h3 className="text-3xl font-bold mb-8 text-center">My Creations</h3>
        <Tabs defaultValue="illustrations" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="illustrations">
              <Pencil className="mr-2 h-4 w-4" />
              Illustrations
            </TabsTrigger>
            <TabsTrigger value="comics">
              <BookOpen className="mr-2 h-4 w-4" />
              Comics
            </TabsTrigger>
            <TabsTrigger value="childrens-books">
              <SmilePlus className="mr-2 h-4 w-4" />
              Children's Books
            </TabsTrigger>
          </TabsList>
          <TabsContent value="illustrations">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
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
      <section className="container mx-auto py-12 px-4 bg-secondary">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">About DoodleCraft</h3>
          <p className="text-lg mb-6">
            Hi there! I'm the artist behind DoodleCraft, bringing whimsical worlds to life through my illustrations, comics, and children's books. With a passion for storytelling and a love for vibrant colors, I create art that sparks joy and imagination in people of all ages.
          </p>
          <Button variant="outline">Learn More About Me</Button>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-12 px-4">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
          <p className="text-lg mb-6">
            Interested in commissioning a piece or collaborating on a project? I'd love to hear from you!
          </p>
          <Button>Contact Me</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 DoodleCraft. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}