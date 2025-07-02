import { Video } from "@/components/ui/video"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function VideoTestimonials() {
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

  return (
    <section className="w-full py-12 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Hear from Our Satisfied Clients</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="overflow-hidden">
              <CardContent className="p-0">
                <Video
                  src={testimonial.video}
                  poster="/placeholder.svg?height=200&width=300"
                  className="w-full aspect-video object-cover"
                />
                <div className="p-4">
                  <blockquote className="text-sm mb-4">{testimonial.quote}</blockquote>
                  <div className="flex items-center">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}