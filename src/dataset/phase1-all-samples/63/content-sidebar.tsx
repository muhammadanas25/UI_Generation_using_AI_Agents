import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin } from 'lucide-react'

export default function Component() {
  return (
    <aside className="w-full space-y-6 px-4 md:px-0 md:w-64 lg:w-80">
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl md:text-lg">Related Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3 md:space-y-2">
            <li>
              <Link href="#" className="text-base md:text-sm hover:underline">
                The Art of Mindfulness: A Daily Practice
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base md:text-sm hover:underline">
                Embracing Change: Turning Challenges into Opportunities
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base md:text-sm hover:underline">
                Finding Balance in a Busy World
              </Link>
            </li>
            <li>
              <Link href="#" className="text-base md:text-sm hover:underline">
                The Power of Gratitude: Transform Your Perspective
              </Link>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-xl md:text-lg">About the Author</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
            <Avatar className="w-24 h-24 md:w-16 md:h-16">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Author" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-center sm:text-left">
              <h3 className="text-lg md:text-base font-semibold">Jane Doe</h3>
              <p className="text-sm text-muted-foreground">Mindfulness Coach & Writer</p>
            </div>
          </div>
          <p className="text-base md:text-sm">
            Jane Doe is a certified mindfulness coach and prolific writer with over a decade of experience in helping
            people find balance and purpose in their daily lives.
          </p>
          <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-2">
            <Button variant="outline" size="icon" className="w-12 h-12 sm:w-10 sm:h-10">
              <Facebook className="h-6 w-6 sm:h-4 sm:w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="w-12 h-12 sm:w-10 sm:h-10">
              <Twitter className="h-6 w-6 sm:h-4 sm:w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
            <Button variant="outline" size="icon" className="w-12 h-12 sm:w-10 sm:h-10">
              <Linkedin className="h-6 w-6 sm:h-4 sm:w-4" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </aside>
  )
}

