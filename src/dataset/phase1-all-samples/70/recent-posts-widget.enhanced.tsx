import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRightIcon } from "lucide-react"

interface Post {
  id: string
  title: string
  thumbnail: string
  slug: string
}

export default function RecentPostsWidget({ posts }: { posts: Post[] }) {
  return (
    <Card className="w-full max-w-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
      <CardHeader className="flex justify-between items-center border-b border-white/20 pb-4">
        <CardTitle className="text-2xl font-bold flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 20l9-16H3l9 16z" />
          </svg>
          Recent Adventures
        </CardTitle>
        <Link href="/posts" passHref>
          <Button variant="ghost" className="text-white hover:bg-white/20">
            View All <ChevronRightIcon className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li
              key={post.id}
              className="flex items-center space-x-4 p-2 rounded-md transition bg-white bg-opacity-10 hover:bg-opacity-20"
            >
              <Image
                src={post.thumbnail}
                alt={post.title}
                width={60}
                height={60}
                className="rounded-md object-cover shadow-md"
              />
              <Link href={`/posts/${post.slug}`} passHref>
                <a className="flex-1 text-sm font-medium hover:underline transition-colors duration-200">
                  {post.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}