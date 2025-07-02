import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Mail, Mic, PlayCircle, Video, Twitter, LinkedIn, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function TalkMasterHomepage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Handle form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Message sent!")
    }, 2000)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
        <div className="container mx-auto px-4 lg:px-6 h-20 flex items-center justify-between">
          <Link className="flex items-center space-x-2" href="#">
            <Mic className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">TalkMaster</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200" href="#engagements">
              Engagements
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200" href="#keynotes">
              Keynotes
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200" href="#media">
              Media
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200" href="#contact">
              Contact
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200">
              <LinkedIn className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-indigo-600 transition-colors duration-200">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1 mt-20">
        <section className="w-full py-20 bg-gradient-to-r from-indigo-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <Image src="/hero-background.jpg" alt="Background" layout="fill" objectFit="cover" />
          </div>
          <div className="container relative z-10 px-4 md:px-6 text-center">
            <div className="flex flex-col items-center space-y-6">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white animate-fadeInDown">
                TalkMaster
              </h1>
              <p className="max-w-2xl text-lg sm:text-xl md:text-2xl text-white opacity-90">
                Inspiring audiences worldwide with powerful keynotes and engaging presentations.
              </p>
              <div className="flex space-x-4">
                <Button className="px-6 py-3 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 transition-colors duration-200">
                  Book Now
                </Button>
                <Button variant="outline" className="px-6 py-3 text-white border-white hover:bg-indigo-600 hover:border-indigo-600 focus:ring-indigo-500 transition-colors duration-200">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="engagements" className="w-full py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">Upcoming Engagements</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <EngagementCard
                title="Future of Tech Conference"
                date="June 15, 2024"
                location="San Francisco, CA"
                description="Discussing the impact of AI on the future of work."
                image="/engagement1.jpg"
              />
              <EngagementCard
                title="Global Leadership Summit"
                date="July 22, 2024"
                location="London, UK"
                description="Keynote on 'Leading in Times of Uncertainty'"
                image="/engagement2.jpg"
              />
              <EngagementCard
                title="Innovation Expo"
                date="August 10, 2024"
                location="Tokyo, Japan"
                description="Panel discussion on emerging technologies"
                image="/engagement3.jpg"
              />
            </div>
          </div>
        </section>
        <section id="keynotes" className="w-full py-20">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">Featured Keynotes</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <KeynoteCard
                title="The Power of Communication"
                description="Learn how effective communication can transform your personal and professional life."
                image="/keynote1.jpg"
              />
              <KeynoteCard
                title="Innovation at the Edge"
                description="Discover strategies for fostering innovation in your organization."
                image="/keynote2.jpg"
              />
            </div>
          </div>
        </section>
        <section id="media" className="w-full py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 text-center">Media Appearances</h2>
            <div className="grid gap-8 md:grid-cols-3">
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
        <section id="contact" className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-6 text-center">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    className="mt-1 block w-full px-4 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  ></textarea>
                </div>
                <div className="text-center">
                  <Button type="submit" className="w-full px-6 py-3 bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 transition-colors duration-200" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-8 bg-gray-100 dark:bg-gray-900">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-between space-y-4 sm:space-y-0 sm:flex-row">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 TalkMaster. All rights reserved.</p>
          <nav className="flex space-x-4">
            <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors duration-200" href="#">
              Terms of Service
            </Link>
            <Link className="text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors duration-200" href="#">
              Privacy
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors duration-200">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors duration-200">
              <LinkedIn className="h-5 w-5" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 transition-colors duration-200">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function EngagementCard({ title, date, location, description, image }) {
  return (
    <Card className="transform hover:translate-y-2 transition-transform duration-200 shadow-lg hover:shadow-indigo-500/50">
      <div className="relative h-48">
        <Image
          alt={title}
          className="object-cover rounded-t-lg"
          layout="fill"
          src={image}
        />
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-500 dark:text-gray-400">{date} • {location}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

function KeynoteCard({ title, description, image }) {
  return (
    <Card className="flex flex-col h-full transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-indigo-500/50">
      <div className="relative h-56">
        <Image
          alt={title}
          className="object-cover rounded-t-lg"
          layout="fill"
          src={image}
        />
      </div>
      <CardHeader className="space-y-1">
        <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </CardContent>
      <div className="p-4">
        <Button className="w-full bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500 transition-colors duration-200">
          Learn More
        </Button>
      </div>
    </Card>
  )
}

function MediaCard({ title, type, link }) {
  const renderIcon = () => {
    switch (type) {
      case 'video':
        return <Video className="mr-2 h-5 w-5 text-indigo-600" />
      case 'audio':
        return <PlayCircle className="mr-2 h-5 w-5 text-indigo-600" />
      case 'article':
        return <Calendar className="mr-2 h-5 w-5 text-indigo-600" />
      default:
        return null
    }
  }

  return (
    <Card className="flex flex-col justify-between transform hover:shadow-indigo-500/50 transition-shadow duration-200 shadow-lg">
      <CardHeader className="flex items-center">
        <CardTitle className="flex items-center text-xl font-semibold text-gray-800 dark:text-white">
          {renderIcon()}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Link className="inline-flex items-center text-indigo-600 hover:underline mt-4" href={link} target="_blank" rel="noopener noreferrer">
          View {type}
          <span className="ml-2">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l5 5m0 0l-5 5m5-5H3" />
            </svg>
          </span>
        </Link>
      </CardContent>
    </Card>
  )
}