import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Post {
  id: string
  title: string
  thumbnail: string
  slug: string
}

export default function RecentPostsWidget({ posts }: { posts: Post[] }) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-xl font-bold">Recent Adventures</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="flex items-center space-x-4">
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={60}
                height={60}
                className="rounded-md object-cover"
              />
              <Link
                href={`/posts/${post.slug}`}
                className="flex-1 hover:underline line-clamp-2 text-sm font-medium"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}