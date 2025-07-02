import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Mail, Mic, PlayCircle, Video } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TalkMasterHomepage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Mic className="h-6 w-6" />
          <span className="sr-only">TalkMaster</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#engagements">
            Engagements
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#keynotes">
            Keynotes
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#media">
            Media
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  TalkMaster
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Inspiring audiences worldwide with powerful keynotes and engaging presentations.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Book Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="engagements" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Upcoming Engagements</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <EngagementCard
                title="Future of Tech Conference"
                date="June 15, 2024"
                location="San Francisco, CA"
                description="Discussing the impact of AI on the future of work."
              />
              <EngagementCard
                title="Global Leadership Summit"
                date="July 22, 2024"
                location="London, UK"
                description="Keynote on 'Leading in Times of Uncertainty'"
              />
              <EngagementCard
                title="Innovation Expo"
                date="August 10, 2024"
                location="Tokyo, Japan"
                description="Panel discussion on emerging technologies"
              />
            </div>
          </div>
        </section>
        <section id="keynotes" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Keynotes</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <KeynoteCard
                title="The Power of Communication"
                description="Learn how effective communication can transform your personal and professional life."
                image="/placeholder.svg?height=400&width=600"
              />
              <KeynoteCard
                title="Innovation at the Edge"
                description="Discover strategies for fostering innovation in your organization."
                image="/placeholder.svg?height=400&width=600"
              />
            </div>
          </div>
        </section>
        <section id="media" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Media Appearances</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <MediaCard
                title="TED Talk: The Future of Work"
                type="video"
                link="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              />
              <MediaCard
                title="Leadership Insights Podcast"
                type="audio"
                link="https://example.com/podcast"
              />
              <MediaCard
                title="Forbes: '10 Public Speaking Tips'"
                type="article"
                link="https://example.com/article"
              />
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Interested in booking TalkMaster for your next event? Contact us now!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button className="w-full" size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 TalkMaster. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function EngagementCard({ title, date, location, description }: { title: string; date: string; location: string; description: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{date} - {location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

function KeynoteCard({ title, description, image }: { title: string; description: string; image: string }) {
  return (
    <Card>
      <Image
        alt={title}
        className="aspect-video object-cover"
        height={400}
        src={image}
        width={600}
      />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

function MediaCard({ title, type, link }: { title: string; type: 'video' | 'audio' | 'article'; link: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          {type === 'video' && <Video className="mr-2 h-4 w-4" />}
          {type === 'audio' && <PlayCircle className="mr-2 h-4 w-4" />}
          {type === 'article' && <Calendar className="mr-2 h-4 w-4" />}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Link className="text-blue-500 hover:underline" href={link} target="_blank" rel="noopener noreferrer">
          View {type}
        </Link>
      </CardContent>
    </Card>
  )
}