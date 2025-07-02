import { useState } from "react"
import { Video } from "@/components/ui/video"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import { Modal } from "@/components/ui/modal"
import { Button } from "@/components/ui/button"
import { FaPlay, FaQuoteLeft } from "react-icons/fa"

export default function VideoTestimonials() {
  const [open, setOpen] = useState(false)
  const [currentVideo, setCurrentVideo] = useState("")

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Independent Filmmaker",
      avatar: "/placeholder.svg?height=40&width=40",
      video: "/placeholder.svg?height=200&width=300",
      quote: "CineMagic transformed my vision into reality. Their tools are intuitive and powerful!",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "YouTube Content Creator",
      avatar: "/placeholder.svg?height=40&width=40",
      video: "/placeholder.svg?height=200&width=300",
      quote: "As a content creator, CineMagic has been a game-changer for my workflow.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Marketing Director",
      avatar: "/placeholder.svg?height=40&width=40",
      video: "/placeholder.svg?height=200&width=300",
      quote: "Our marketing videos have never looked better. CineMagic is a must-have tool!",
    },
  ]

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc)
    setOpen(true)
  }

  return (
    <section className="w-full py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 animate-fade-in">
          Hear from Our Satisfied Clients
        </h2>
        <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative">
                <Video
                  src={testimonial.video}
                  poster="/placeholder.svg?height=200&width=300"
                  className="w-full aspect-video object-cover"
                />
                <button
                  onClick={() => openModal(testimonial.video)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-3xl opacity-0 transition-opacity duration-300 hover:opacity-100"
                >
                  <FaPlay />
                </button>
              </div>
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-6 flex items-center">
                  <FaQuoteLeft className="mr-2 text-indigo-500" />
                  {testimonial.quote}
                </blockquote>
                <div className="flex items-center">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <Button
                  variant="secondary"
                  className="mt-4 w-full"
                  onClick={() => openModal(testimonial.video)}
                >
                  Watch Full Testimonial
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <div className="relative pb-9/16">
          <Video src={currentVideo} className="absolute top-0 left-0 w-full h-full" controls />
        </div>
      </Modal>
    </section>
  )
}