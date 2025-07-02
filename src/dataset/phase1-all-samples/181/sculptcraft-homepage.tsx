import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Mail, Instagram, Twitter } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Featured Sculpture"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">SculptCraft</h1>
            <p className="text-xl md:text-2xl text-white mb-8">Bringing Stone to Life</p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Explore Gallery
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">About the Artist</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <img
            src="/placeholder.svg?height=400&width=400"
            alt="Artist Portrait"
            className="w-64 h-64 rounded-full object-cover"
          />
          <div className="flex-1">
            <p className="text-lg mb-4">
              SculptCraft is the creative vision of renowned sculptor Jane Doe. With over 15 years of experience, Jane
              has honed her craft to perfection, transforming raw stone into breathtaking works of art that captivate
              and inspire.
            </p>
            <p className="text-lg">
              Her unique approach combines traditional sculpting techniques with modern themes, resulting in pieces that
              are both timeless and contemporary. Jane's work has been featured in galleries worldwide and has earned
              her numerous accolades in the art community.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Gallery</h2>
          <Tabs defaultValue="sculptures" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="sculptures">Sculptures</TabsTrigger>
              <TabsTrigger value="installations">Installations</TabsTrigger>
            </TabsList>
            <TabsContent value="sculptures">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <img
                        src={`/placeholder.svg?height=300&width=400&text=Sculpture ${i}`}
                        alt={`Sculpture ${i}`}
                        className="w-full h-64 object-cover rounded-md mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2">Sculpture Title {i}</h3>
                      <p className="text-sm text-muted-foreground">
                        A brief description of the sculpture and its significance.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="installations">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((i) => (
                  <Card key={i}>
                    <CardContent className="p-4">
                      <img
                        src={`/placeholder.svg?height=400&width=600&text=Installation ${i}`}
                        alt={`Installation ${i}`}
                        className="w-full h-80 object-cover rounded-md mb-4"
                      />
                      <h3 className="text-xl font-semibold mb-2">Installation Title {i}</h3>
                      <p className="text-sm text-muted-foreground">
                        An overview of the installation, its location, and the concept behind it.
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Behind the Scenes Section */}
      <section className="py-16 px-4 md:px-8 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Behind the Scenes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src="/placeholder.svg?height=400&width=600&text=Work in Progress"
              alt="Work in Progress"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">The Creative Process</h3>
            <p className="text-sm text-muted-foreground">
              Get a glimpse into Jane's studio and witness the transformation of raw materials into stunning sculptures.
            </p>
          </div>
          <div>
            <img
              src="/placeholder.svg?height=400&width=600&text=Tools of the Trade"
              alt="Tools of the Trade"
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Tools and Techniques</h3>
            <p className="text-sm text-muted-foreground">
              Explore the various tools and techniques Jane employs to bring her artistic vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8 bg-primary text-primary-foreground">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="text-lg mb-8">
            Interested in commissioning a piece or have questions about SculptCraft's work? Don't hesitate to reach out!
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="secondary" size="lg">
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Button>
            <Button variant="secondary" size="lg">
              <Instagram className="mr-2 h-4 w-4" /> Instagram
            </Button>
            <Button variant="secondary" size="lg">
              <Twitter className="mr-2 h-4 w-4" /> Twitter
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-background text-center">
        <p className="text-sm text-muted-foreground">
          © 2024 SculptCraft. All rights reserved. Designed with passion by Jane Doe.
        </p>
      </footer>
    </div>
  )
}