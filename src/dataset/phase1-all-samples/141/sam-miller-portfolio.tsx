import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Component() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="container mx-auto py-6 px-4 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold">Sam Miller</h1>
        <p className="text-lg sm:text-xl text-muted-foreground mt-2">Graphic Designer & Illustrator</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Me</h2>
          <p className="text-base sm:text-lg max-w-2xl">
            Hi, I'm Sam! I'm a passionate graphic designer and illustrator with over 5 years of experience creating
            stunning visuals for brands and individuals. My work combines creativity with strategic thinking to deliver
            impactful designs that resonate with audiences.
          </p>
        </section>

        <Tabs defaultValue="illustrations" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="illustrations">Illustrations</TabsTrigger>
            <TabsTrigger value="branding">Branding</TabsTrigger>
          </TabsList>
          <TabsContent value="illustrations" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={`illustration-${i}`}>
                  <CardContent className="p-0">
                    <img
                      src={`/placeholder.svg?height=300&width=400&text=Illustration ${i}`}
                      alt={`Illustration ${i}`}
                      className="w-full h-auto object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-base sm:text-lg font-semibold">Illustration Project {i}</h3>
                      <p className="text-sm text-muted-foreground">Digital Illustration</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="branding" className="mt-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[1, 2, 3, 4].map((i) => (
                <Card key={`branding-${i}`}>
                  <CardContent className="p-0">
                    <img
                      src={`/placeholder.svg?height=300&width=400&text=Branding ${i}`}
                      alt={`Branding Project ${i}`}
                      className="w-full h-auto object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <h3 className="text-base sm:text-lg font-semibold">Branding Project {i}</h3>
                      <p className="text-sm text-muted-foreground">Logo & Identity Design</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-base sm:text-lg mb-4">
            Interested in working together? I'm always open to new projects and collaborations.
          </p>
          <Button className="w-full sm:w-auto">Contact Me</Button>
        </section>
      </main>

      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm sm:text-base">&copy; 2023 Sam Miller. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

