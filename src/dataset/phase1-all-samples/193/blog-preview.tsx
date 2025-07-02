import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Define the structure of a blog post
interface BlogPost {
  id: number
  title: string
  excerpt: string
  imageUrl: string
  category: string
}

// Sample blog posts data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Art of Crafting Compelling Characters",
    excerpt: "Dive into the techniques that bring fictional personalities to life, captivating readers from page one.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Writing Tips"
  },
  {
    id: 2,
    title: "Worldbuilding: Creating Immersive Fictional Realms",
    excerpt: "Explore the elements that go into constructing believable and engaging fictional worlds for your stories.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Worldbuilding"
  },
  {
    id: 3,
    title: "Mastering Dialogue: Making Your Characters Speak",
    excerpt: "Learn the art of writing authentic, engaging dialogue that brings your characters and stories to life.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Writing Tips"
  },
  {
    id: 4,
    title: "The Hero's Journey: Crafting Epic Adventures",
    excerpt: "Understand the classic storytelling structure and how to apply it to create compelling narratives.",
    imageUrl: "/placeholder.svg?height=200&width=300",
    category: "Story Structure"
  }
]

export default function BlogPreviewSection() {
  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">Latest from Storyteller Ink</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <Image
                src={post.imageUrl}
                alt={post.title}
                width={300}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <Badge className="mb-2">{post.category}</Badge>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">{post.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}