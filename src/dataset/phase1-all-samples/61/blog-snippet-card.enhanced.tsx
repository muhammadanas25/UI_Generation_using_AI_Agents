import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export default function Component() {
  return (
    <div className="p-4 md:p-6 lg:p-8 flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-sm md:max-w-md mx-auto bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden transform hover:-translate-y-1 hover:scale-105">
        <div className="relative w-full h-40 md:h-48">
          <Image
            src="/images/ai-web-development.jpg"
            alt="AI in Web Development"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <CardHeader className="p-4">
          <CardTitle className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">The Future of AI in Web Development</CardTitle>
          <div className="flex items-center mt-2">
            <Avatar className="h-8 w-8 md:h-10 md:w-10">
              <AvatarImage src="/avatars/jane-doe.jpg" alt="Jane Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="ml-3">
              <p className="text-xs md:text-sm font-medium text-gray-700">Jane Doe</p>
              <p className="text-xs md:text-sm text-gray-500">Oct 10, 2023</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 pb-4">
          <p className="text-sm md:text-base text-gray-600">
            Artificial Intelligence is revolutionizing the way we build and interact with websites. From intelligent chatbots to personalized user experiences, AI is shaping the future of web development. In this post, we explore the latest trends and technologies that are...
          </p>
        </CardContent>
        <CardFooter className="px-4 pb-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Button variant="default" className="w-full md:w-auto transition-transform transform hover:scale-105">Read More</Button>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" aria-label="Like">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
              </svg>
            </Button>
            <Button variant="ghost" size="icon" aria-label="Bookmark">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600 hover:text-blue-500 transition-colors duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v10a2 2 0 01-2 2h-14a2 2 0 01-2-2v-10a2 2 0 012-2h2" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 12v8" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16h8" />
              </svg>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

