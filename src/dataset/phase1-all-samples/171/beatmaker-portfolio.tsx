import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Play, Music, Mic, Sliders, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BeatMakerPortfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="BeatMaker in studio"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10 text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white">BeatMaker</h1>
          <p className="text-xl md:text-2xl text-gray-200">Crafting Rhythms, Shaping Sounds</p>
          <Button size="lg" className="mt-4">
            Explore My Work
          </Button>
        </div>
      </section>

      {/* Featured Tracks Section */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Music className="mr-2" /> Featured Tracks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((track) => (
              <Card key={track}>
                <CardHeader>
                  <CardTitle>Track {track}</CardTitle>
                  <CardDescription>Genre • Released 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-w-16 aspect-h-9 bg-gray-100 rounded-md mb-4">
                    <div className="flex items-center justify-center">
                      <Play className="w-12 h-12 text-primary" />
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Listen Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Performances Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Mic className="mr-2" /> Live Performances
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((performance) => (
              <Card key={performance} className="overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={`/placeholder.svg?height=720&width=1280&text=Live+Performance+${performance}`}
                    alt={`Live Performance ${performance}`}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Live at Venue Name</h3>
                  <p className="text-muted-foreground">Date • Location</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Production Work Section */}
      <section className="py-16 px-4 md:px-8 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Sliders className="mr-2" /> Production Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((project) => (
              <Card key={project}>
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>Artist • Album</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={`/placeholder.svg?height=300&width=300&text=Album+Cover+${project}`}
                    alt={`Album Cover ${project}`}
                    width={300}
                    height={300}
                    className="rounded-md mb-4"
                  />
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <Mail className="mr-2" /> Get in Touch
          </h2>
          <p className="text-xl mb-8">
            Interested in collaborating or booking a session? Let's create something amazing together!
          </p>
          <Button size="lg">Contact Me</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 bg-muted">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} BeatMaker. All rights reserved.
          </p>
          <div className="mt-4 space-x-4">
            <Link href="#" className="text-primary hover:underline">
              Instagram
            </Link>
            <Link href="#" className="text-primary hover:underline">
              SoundCloud
            </Link>
            <Link href="#" className="text-primary hover:underline">
              Spotify
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}