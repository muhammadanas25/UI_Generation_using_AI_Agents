import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface BlogPost {
  id: number
  title: string
  excerpt: string
  imageUrl: string
  category: string
  link: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Crafting Compelling Characters",
    excerpt: "Dive into the techniques that bring fictional personalities to life, captivating readers from page one.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Writing Tips",
    link: "/blog/crafting-compelling-characters"
  },
  {
    id: 2,
    title: "Worldbuilding: Creating Immersive Fictional Realms",
    excerpt: "Explore the elements that go into constructing believable and engaging fictional worlds for your stories.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Worldbuilding",
    link: "/blog/worldbuilding-immersive-realms"
  },
  {
    id: 3,
    title: "Mastering Dialogue: Making Your Characters Speak",
    excerpt: "Learn the art of writing authentic, engaging dialogue that brings your characters and stories to life.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Writing Tips",
    link: "/blog/mastering-dialogue"
  },
  {
    id: 4,
    title: "The Hero's Journey: Crafting Epic Adventures",
    excerpt: "Understand the classic storytelling structure and how to apply it to create compelling narratives.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Story Structure",
    link: "/blog/heros-journey-epic-adventures"
  }
]

export default function BlogPreviewSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-800 dark:text-gray-100">
          Latest from Storyteller Ink
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white dark:bg-gray-800 transform hover:scale-105"
            >
              <div className="relative">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-110"
                />
                <span className="absolute top-4 left-4 bg-indigo-500 text-white text-sm px-3 py-1 rounded-full shadow">
                  {post.category}
                </span>
              </div>
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-4">
                  <Button 
                    variant="default" 
                    className="w-full" 
                    onClick={() => window.location.href = post.link}
                  >
                    Read More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}