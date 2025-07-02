import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, BookOpen, Users, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Transition } from "@headlessui/react"

const courses = [
  { id: 1, title: "Introduction to Blockchain", instructor: "Alice Nakamoto", students: 1500, price: 0.5, image: "/placeholder.svg?height=200&width=300" },
  { id: 2, title: "Smart Contract Development", instructor: "Bob Buterin", students: 1200, price: 0.75, image: "/placeholder.svg?height=200&width=300" },
  { id: 3, title: "Decentralized Finance Fundamentals", instructor: "Charlie Hoskinson", students: 2000, price: 1, image: "/placeholder.svg?height=200&width=300" },
  { id: 4, title: "Cryptography Basics", instructor: "Diana Zheng", students: 800, price: 0.3, image: "/placeholder.svg?height=200&width=300" },
]

export default function LearnXMarketplace() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-100">
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">LearnX</h1>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Courses</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 transition">Contact</a>
          </div>
        </div>
      </nav>

      <header className="bg-indigo-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-4 animate-fadeInDown">Empower Your Learning with Blockchain</h2>
          <p className="text-xl mb-8 animate-fadeInUp">Join the decentralized marketplace for educational courses</p>
          <Button variant="ghost" size="lg" className="mx-auto flex items-center">
            <BookOpen className="mr-2" /> Explore Courses
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center w-full md:w-1/2 mb-4 md:mb-0">
            <Search className="w-5 h-5 text-gray-500 mr-2" />
            <Input
              placeholder="Search for courses or instructors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="flex items-center">
              <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" /> Add New Course
                </Button>
              </DialogTrigger>
              <Transition appear show={isModalOpen} enter="transition duration-200" enterFrom="opacity-0 scale-95" enterTo="opacity-100 scale-100" leave="transition duration-150" leaveFrom="opacity-100 scale-100" leaveTo="opacity-0 scale-95">
                <DialogContent className="max-w-lg">
                  <DialogTitle className="text-2xl mb-4">Add New Course</DialogTitle>
                  <DialogDescription className="mb-4">
                    Fill in the details of the new course.
                  </DialogDescription>
                  <form className="space-y-4">
                    <Input placeholder="Course Title" />
                    <Input placeholder="Instructor Name" />
                    <Input type="number" placeholder="Price (ETH)" />
                    <Input type="url" placeholder="Course Image URL" />
                    <div className="flex justify-end space-x-2">
                      <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                      <Button>Add Course</Button>
                    </div>
                  </form>
                </DialogContent>
              </Transition>
            </Dialog>
          </div>
        </div>

        <section>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-indigo-600">Featured Courses</h2>
            <Badge variant="secondary" className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>Top Rated</span>
            </Badge>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCourses.map(course => (
              <Card key={course.id} className="transform hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                <CardHeader className="p-0">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl font-semibold mb-2">{course.title}</CardTitle>
                  <p className="text-sm text-gray-600 mb-2">Instructor: {course.instructor}</p>
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <Users className="mr-1 h-4 w-4" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <Badge variant="indigo" className="inline-flex items-center">
                    <BookOpen className="mr-1 h-4 w-4" />
                    {course.price} ETH
                  </Badge>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <Button variant="secondary" size="sm" className="flex items-center">
                    <BookOpen className="mr-2 h-4 w-4" /> Enroll Now
                  </Button>
                  <Badge variant="ghost" className="capitalize">
                    Blockchain
                  </Badge>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-white shadow-inner">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} LearnX. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}