import Image from "next/image"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Facebook, Twitter, Linkedin, Search } from 'lucide-react'
import { motion } from "framer-motion"

export default function Sidebar() {
  return (
    <aside className="w-full md:w-64 lg:w-80 space-y-6 p-4">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="flex items-center justify-between text-lg sm:text-xl">
              Related Posts
              <Button variant="ghost" size="icon" aria-label="Refresh">
                <Search className="h-5 w-5" />
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4 sm:space-y-2">
              {[1, 2, 3, 4].map((index) => (
                <li key={index} className="flex items-center space-x-3 sm:space-x-2">
                  <Image
                    src={`/post-thumbnail-${index}.jpg`}
                    alt="Post Thumbnail"
                    width={60}
                    height={60}
                    className="rounded w-[60px] h-[60px] sm:w-[40px] sm:h-[40px] object-cover"
                  />
                  <Link href="#" className="text-base sm:text-sm hover:underline transition-colors duration-200">
                    {index === 1 && "The Art of Mindfulness: A Daily Practice"}
                    {index === 2 && "Embracing Change: Turning Challenges into Opportunities"}
                    {index === 3 && "Finding Balance in a Busy World"}
                    {index === 4 && "The Power of Gratitude: Transform Your Perspective"}
                  </Link>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">About the Author</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Avatar className="w-24 h-24 sm:w-16 sm:h-16">
                <AvatarImage src="/author.jpg" alt="Author" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-xl sm:text-lg">Jane Doe</h3>
                <p className="text-base sm:text-sm text-muted-foreground">Mindfulness Coach & Writer</p>
              </div>
            </div>
            <p className="text-base sm:text-sm">
              Jane Doe is a certified mindfulness coach and prolific writer with over a decade of experience in helping
              people find balance and purpose in their daily lives.
            </p>
            <div className="flex justify-center sm:justify-start space-x-4 sm:space-x-2">
              {["Facebook", "Twitter", "LinkedIn"].map((social) => (
                <Button
                  key={social}
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 sm:w-10 sm:h-10 hover:bg-blue-50 transition-colors duration-200"
                  aria-label={social}
                >
                  {social === "Facebook" && <Facebook className="h-6 w-6 sm:h-4 sm:w-4" />}
                  {social === "Twitter" && <Twitter className="h-6 w-6 sm:h-4 sm:w-4" />}
                  {social === "LinkedIn" && <Linkedin className="h-6 w-6 sm:h-4 sm:w-4" />}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl">Subscribe</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-base sm:text-sm">
              Stay updated with the latest insights and posts from Jane. Subscribe to the newsletter to receive updates directly in your inbox.
            </p>
            <form className="flex flex-col space-y-3 sm:space-y-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 sm:py-2 border rounded text-base sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button className="w-full py-3 sm:py-2 text-base sm:text-sm">Subscribe</Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </aside>
  )
}

