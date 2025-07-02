import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dumbbell, Flame, Zap, Menu, X, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { Dialog } from "@/components/ui/dialog"

export default function TrainWithMeHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [successModalOpen, setSuccessModalOpen] = useState(false)
  const [selectedStory, setSelectedStory] = useState(null)

  const successStories = [
    {
      name: "Sarah M.",
      achievement: "Lost 30 lbs in 3 months",
      testimonial:
        "TrainWithMe's personalized approach and motivating challenges helped me achieve my weight loss goals. I've never felt better!",
      image: "/sarah-before-after.jpg",
    },
    {
      name: "John D.",
      achievement: "Gained 20 lbs of muscle",
      testimonial:
        "The strength training guides were top-notch. I can lift more than I ever thought possible thanks to TrainWithMe.",
      image: "/john-before-after.jpg",
    },
    {
      name: "Emily R.",
      achievement: "Completed her first marathon",
      testimonial:
        "The endurance challenges pushed me beyond my limits. Finishing the marathon was a dream come true!",
      image: "/emily-before-after.jpg",
    },
  ]

  const openSuccessModal = (story) => {
    setSelectedStory(story)
    setSuccessModalOpen(true)
  }

  const closeSuccessModal = () => {
    setSuccessModalOpen(false)
    setSelectedStory(null)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition duration-300">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="#" className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-blue-500 animate-pulse" />
            <span className="text-xl font-bold text-gray-800">TrainWithMe</span>
          </Link>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-blue-500 transition duration-200"
            >
              Home
            </Link>
            <Link
              href="#challenges"
              className="text-sm font-medium text-gray-700 hover:text-blue-500 transition duration-200"
            >
              Challenges
            </Link>
            <Link
              href="#guides"
              className="text-sm font-medium text-gray-700 hover:text-blue-500 transition duration-200"
            >
              Guides
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-gray-700 hover:text-blue-500 transition duration-200"
            >
              Testimonials
            </Link>
            <Button variant="ghost" size="sm" className="ml-4 flex items-center">
              Sign Up <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </nav>
          <button
            className="md:hidden text-gray-700 hover:text-blue-500 transition duration-200"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <Dialog.Content className="fixed top-0 left-0 w-3/4 h-full bg-white shadow-lg p-6 animate-slide-in">
            <div className="flex justify-between items-center mb-8">
              <Link href="#" className="flex items-center space-x-2">
                <Dumbbell className="h-8 w-8 text-blue-500 animate-pulse" />
                <span className="text-xl font-bold text-gray-800">TrainWithMe</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="w-6 h-6 text-gray-700 hover:text-blue-500 transition duration-200" />
              </button>
            </div>
            <nav className="flex flex-col space-y-4">
              <Link href="#" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-200">
                Home
              </Link>
              <Link href="#challenges" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-200">
                Challenges
              </Link>
              <Link href="#guides" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-200">
                Guides
              </Link>
              <Link href="#testimonials" className="text-lg font-medium text-gray-700 hover:text-blue-500 transition duration-200">
                Testimonials
              </Link>
              <Button variant="ghost" size="sm" className="mt-4 flex items-center justify-center">
                Sign Up <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </nav>
          </Dialog.Content>
        </Dialog>
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center text-white">
            <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
                Transform Your Body, Transform Your Life
              </h1>
              <p className="text-lg md:text-2xl">
                Join TrainWithMe and embark on a fitness journey that will challenge you, inspire you, and help you achieve your goals.
              </p>
              <div className="flex justify-center space-x-4 mt-8">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 transition duration-200" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 transition duration-200" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="challenges" className="w-full py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-slide-up">Fitness Challenges</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Flame className="w-12 h-12 text-orange-500 mb-4" />
                  <CardTitle className="text-xl font-semibold">30-Day Fat Burn</CardTitle>
                  <CardDescription className="text-center text-gray-600">
                    Torch calories and sculpt your body in just 30 days.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                  <p className="text-gray-700">High-intensity workouts designed to maximize fat loss and build lean muscle.</p>
                </CardContent>
                <CardFooter className="mt-6">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 transition duration-200" onClick={() => alert("Joined 30-Day Fat Burn Challenge!")}>
                    Join Challenge
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Zap className="w-12 h-12 text-yellow-500 mb-4" />
                  <CardTitle className="text-xl font-semibold">Strength Builder</CardTitle>
                  <CardDescription className="text-center text-gray-600">
                    Increase your strength and power over 8 weeks.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                  <p className="text-gray-700">Progressive overload training to help you lift heavier and get stronger.</p>
                </CardContent>
                <CardFooter className="mt-6">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 transition duration-200" onClick={() => alert("Joined Strength Builder Challenge!")}>
                    Join Challenge
                  </Button>
                </CardFooter>
              </Card>
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex flex-col items-center">
                  <Dumbbell className="w-12 h-12 text-blue-500 mb-4" />
                  <CardTitle className="text-xl font-semibold">Full Body Recomp</CardTitle>
                  <CardDescription className="text-center text-gray-600">
                    Transform your physique in 12 weeks.
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                  <p className="text-gray-700">Balanced program of strength training and cardio for total body transformation.</p>
                </CardContent>
                <CardFooter className="mt-6">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 transition duration-200" onClick={() => alert("Joined Full Body Recomp Challenge!")}>
                    Join Challenge
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section id="guides" className="w-full py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-slide-up">Workout Guides</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="flex items-center space-x-6 hover:shadow-lg transition-shadow duration-300">
                <Image src="/weightlifting-guide.jpg" alt="Weightlifting Guide" width={100} height={100} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                <div>
                  <CardTitle className="text-lg font-semibold">Beginner's Guide to Weightlifting</CardTitle>
                  <CardDescription className="text-gray-600">Learn proper form and technique for fundamental lifts.</CardDescription>
                  <Button variant="link" className="text-blue-500 hover:underline mt-2" onClick={() => alert("Downloaded Beginner's Guide to Weightlifting")}>
                    Download Guide
                  </Button>
                </div>
              </Card>
              <Card className="flex items-center space-x-6 hover:shadow-lg transition-shadow duration-300">
                <Image src="/hiit-routines.jpg" alt="HIIT Routines" width={100} height={100} className="w-24 h-24 object-cover rounded-lg shadow-md" />
                <div>
                  <CardTitle className="text-lg font-semibold">Advanced HIIT Routines</CardTitle>
                  <CardDescription className="text-gray-600">Take your high-intensity interval training to the next level.</CardDescription>
                  <Button variant="link" className="text-blue-500 hover:underline mt-2" onClick={() => alert("Downloaded Advanced HIIT Routines")}>
                    Download Guide
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 animate-slide-up">Success Stories</h2>
            <div className="space-y-8">
              {successStories.map((story, index) => (
                <Card
                  key={index}
                  className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                  onClick={() => openSuccessModal(story)}
                >
                  <Image
                    src={story.image}
                    alt={`Before and after picture of ${story.name}`}
                    width={200}
                    height={200}
                    className="w-40 h-40 object-cover rounded-lg shadow-md"
                  />
                  <div className="flex-1">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{story.name}</CardTitle>
                      <CardDescription className="text-gray-600">{story.achievement}</CardDescription>
                    </CardHeader>
                    <CardContent className="mt-2">
                      <p className="text-gray-700 line-clamp-2">{story.testimonial}</p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          {/* Success Story Modal */}
          {selectedStory && (
            <Dialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
              <Dialog.Content className="max-w-lg p-6 bg-white rounded-lg shadow-lg animate-fade-in">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">{selectedStory.name}</h3>
                  <button onClick={closeSuccessModal}>
                    <X className="w-6 h-6 text-gray-700 hover:text-blue-500 transition duration-200" />
                  </button>
                </div>
                <Image
                  src={selectedStory.image}
                  alt={`Before and after picture of ${selectedStory.name}`}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <p className="text-gray-700">{selectedStory.testimonial}</p>
              </Dialog.Content>
            </Dialog>
          )}
        </section>
        <section className="w-full py-20 bg-gradient-to-r from-indigo-700 to-purple-600 text-white">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform?</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto">
              Join TrainWithMe today and start your journey to a healthier, stronger you.
            </p>
            <Button className="bg-white text-indigo-600 hover:bg-gray-100 transition duration-200" size="lg">
              Start Your Free Trial
            </Button>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white shadow-inner">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">© 2024 TrainWithMe. All rights reserved.</p>
          <nav className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-500 transition duration-200">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-blue-500 transition duration-200">
              Privacy
            </Link>
            <div className="flex space-x-2">
              <Link href="#" className="text-gray-500 hover:text-blue-500 transition duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-7.03H7.9v-2.85h2.54V9.41c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.75l-.44 2.85h-2.31v7.03C18.34 21.12 22 16.99 22 12z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-blue-500 transition duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.52 0-10 4.48-10 10 0 4.99 3.66 9.12 8.44 9.88v-7.03H7.9v-2.85h2.54V9.41c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.76-1.61 1.54v1.85h2.75l-.44 2.85h-2.31v7.03C18.34 21.12 22 16.99 22 12c0-5.52-4.48-10-10-10z" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}