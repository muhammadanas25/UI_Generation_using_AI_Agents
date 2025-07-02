import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PlayCircle, Pause, Volume2, Linkedin, Twitter, Instagram } from "lucide-react"
import { useState } from "react"

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // Here you would actually play/pause the audio
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-200 to-pink-200 dark:from-purple-800 dark:to-pink-800 transition-colors duration-500">
      <header className="py-6 px-4 md:px-6 lg:px-8 text-center bg-white dark:bg-gray-900 shadow-md">
        <h1 className="text-5xl font-extrabold text-purple-600 dark:text-purple-300 mb-2 animate-fadeIn">VoiceVibes</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 animate-fadeIn">Bringing stories to life through voice</p>
        <div className="flex justify-center space-x-4 mt-4 animate-fadeIn">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <section className="mb-12 text-center animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hi, I'm VoiceVibes, a professional voice actor with over a decade of experience in bringing characters and stories to life. Whether it's for commercials, podcasts, or animated features, my voice aims to connect and resonate with diverse audiences.
          </p>
        </section>

        <Tabs defaultValue="samples" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white dark:bg-gray-900 rounded-lg shadow">
            <TabsTrigger value="samples" className="hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors">
              Audio Samples
            </TabsTrigger>
            <TabsTrigger value="commercial" className="hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors">
              Commercial Projects
            </TabsTrigger>
            <TabsTrigger value="podcast" className="hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors">
              Podcast Episodes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="samples">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["Narration", "Character Voice", "Commercial"].map((sample) => (
                <Card key={sample} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-purple-600 dark:text-purple-300">{sample}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Button variant="outline" size="icon" onClick={togglePlay} className="transition-transform transform hover:scale-110">
                        {isPlaying ? <Pause className="h-5 w-5" /> : <PlayCircle className="h-5 w-5" />}
                      </Button>
                      <Volume2 className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="commercial">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["TV Commercial", "Radio Ad", "Audiobook"].map((project) => (
                <Card key={project} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-purple-600 dark:text-purple-300">{project}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center">
                    <img
                      src={`/placeholder.svg?height=200&width=300&text=${project}`}
                      alt={project}
                      className="w-full h-48 object-cover rounded-md transform hover:scale-105 transition-transform"
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="podcast">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {["True Crime Diaries", "Tech Talk Today", "Mindful Moments"].map((podcast) => (
                <Card key={podcast} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-purple-600 dark:text-purple-300">{podcast}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-4">
                      <img
                        src={`/placeholder.svg?height=100&width=100&text=${podcast}`}
                        alt={podcast}
                        className="w-24 h-24 rounded-full object-cover border-2 border-purple-500"
                      />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Latest Episode</p>
                        <Button variant="outline" size="sm" className="mt-2 flex items-center hover:bg-purple-100 dark:hover:bg-purple-800 transition-colors" onClick={togglePlay}>
                          {isPlaying ? <Pause className="h-5 w-5 mr-2" /> : <PlayCircle className="h-5 w-5 mr-2" />}
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

        <section className="mt-16 text-center animate-fadeIn">
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Testimonials</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Card className="max-w-sm bg-gray-50 dark:bg-gray-800 shadow-md">
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">"VoiceVibes brought our characters to life with such authenticity!"</p>
                <p className="text-purple-600 dark:text-purple-300 font-semibold">- Creative Director, XYZ Studios</p>
              </CardContent>
            </Card>
            <Card className="max-w-sm bg-gray-50 dark:bg-gray-800 shadow-md">
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300 mb-4">"Exceptional voice talent that truly resonates with our audience."</p>
                <p className="text-purple-600 dark:text-purple-300 font-semibold">- Marketing Manager, ABC Corp</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="py-6 px-4 md:px-6 lg:px-8 bg-white dark:bg-gray-900 shadow-inner text-center animate-fadeIn">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Get in Touch</h2>
        <p className="mb-4 text-gray-600 dark:text-gray-300">Ready to bring your project to life? Let's collaborate!</p>
        <Button className="animate-pulse hover:bg-purple-600 dark:hover:bg-purple-400 transition-colors">Contact Me</Button>
      </footer>
    </div>
  )
}