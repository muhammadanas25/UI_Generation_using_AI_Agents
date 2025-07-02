import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayCircle, Pause, Volume2 } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // Here you would actually play/pause the audio
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900">
      <header className="py-6 px-4 md:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold mb-2">VoiceVibes</h1>
        <p className="text-xl text-muted-foreground">Bringing stories to life through voice</p>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="samples" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="samples">Audio Samples</TabsTrigger>
            <TabsTrigger value="commercial">Commercial Projects</TabsTrigger>
            <TabsTrigger value="podcast">Podcast Episodes</TabsTrigger>
          </TabsList>
          <TabsContent value="samples">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["Narration", "Character Voice", "Commercial"].map((sample) => (
                <Card key={sample}>
                  <CardHeader>
                    <CardTitle>{sample}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="icon" onClick={togglePlay}>
                        {isPlaying ? <Pause className="h-4 w-4" /> : <PlayCircle className="h-4 w-4" />}
                      </Button>
                      <Volume2 className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="commercial">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["TV Commercial", "Radio Ad", "Audiobook"].map((project) => (
                <Card key={project}>
                  <CardHeader>
                    <CardTitle>{project}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <img
                      src={`/placeholder.svg?height=100&width=200&text=${project}`}
                      alt={project}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="podcast">
            <div className="grid gap-6 md:grid-cols-2">
              {["True Crime Diaries", "Tech Talk Today", "Mindful Moments"].map((podcast) => (
                <Card key={podcast}>
                  <CardHeader>
                    <CardTitle>{podcast}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <img
                        src={`/placeholder.svg?height=80&width=80&text=${podcast}`}
                        alt={podcast}
                        className="w-20 h-20 rounded-md"
                      />
                      <div>
                        <p className="text-sm text-muted-foreground">Latest Episode</p>
                        <Button variant="outline" size="sm" className="mt-2" onClick={togglePlay}>
                          {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <PlayCircle className="h-4 w-4 mr-2" />}
                          Listen Now
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="py-6 px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-4">Ready to bring your project to life? Let's collaborate!</p>
        <Button>Contact Me</Button>
      </footer>
    </div>
  )
}