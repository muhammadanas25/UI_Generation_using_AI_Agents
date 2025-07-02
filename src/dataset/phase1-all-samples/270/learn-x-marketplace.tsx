import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, BookOpen, Users } from 'lucide-react'

// Mock data for courses
const courses = [
  { id: 1, title: "Introduction to Blockchain", instructor: "Alice Nakamoto", students: 1500, price: 0.5, image: "/placeholder.svg?height=200&width=300" },
  { id: 2, title: "Smart Contract Development", instructor: "Bob Buterin", students: 1200, price: 0.75, image: "/placeholder.svg?height=200&width=300" },
  { id: 3, title: "Decentralized Finance Fundamentals", instructor: "Charlie Hoskinson", students: 2000, price: 1, image: "/placeholder.svg?height=200&width=300" },
  { id: 4, title: "Cryptography Basics", instructor: "Diana Zheng", students: 800, price: 0.3, image: "/placeholder.svg?height=200&width=300" },
]

export default function LearnXMarketplace() {
  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <header className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">LearnX Marketplace</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">Decentralized Learning for the Future</p>
      </header>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 space-y-4 sm:space-y-0">
        <h2 className="text-xl sm:text-2xl font-semibold">Featured Courses</h2>
        <Button className="w-full sm:w-auto">
          <PlusCircle className="mr-2 h-4 w-4" /> Add New Course
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="flex flex-col h-full">
            <CardHeader className="p-0">
              <img src={course.image} alt={course.title} className="w-full h-40 sm:h-48 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent className="flex-grow p-3 sm:p-4">
              <CardTitle className="text-base sm:text-lg mb-1 sm:mb-2">{course.title}</CardTitle>
              <p className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">{course.instructor}</p>
              <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                <Users className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                <span>{course.students.toLocaleString()} students</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center p-3 sm:p-4 pt-0">
              <Badge variant="secondary" className="flex items-center text-xs sm:text-sm">
                <BookOpen className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                {course.price} ETH
              </Badge>
              <Button variant="outline" size="sm" className="text-xs sm:text-sm">Enroll Now</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

