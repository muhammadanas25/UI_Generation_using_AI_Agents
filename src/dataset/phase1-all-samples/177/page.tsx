import Image from 'next/image'
import Link from 'next/link'
import { CalendarDays, Mail, Phone, Play } from 'lucide-react'

export default function ActorPortfolio() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">StageCraft</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="#about" className="hover:text-gray-300">About</Link></li>
              <li><Link href="#reels" className="hover:text-gray-300">Reels</Link></li>
              <li><Link href="#performances" className="hover:text-gray-300">Performances</Link></li>
              <li><Link href="#contact" className="hover:text-gray-300">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <Image
                src="/placeholder.svg?height=600&width=400"
                alt="StageCraft Headshot"
                width={400}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-4xl font-bold mb-4">About StageCraft</h2>
              <p className="text-lg mb-6">
                StageCraft is a versatile actor with a passion for bringing characters to life. With experience in
                theater, film, and television, StageCraft has captivated audiences with powerful performances and
                a dynamic range.
              </p>
              <Link
                href="#contact"
                className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>

        <section id="reels" className="py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Acting Reels</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((reel) => (
                <div key={reel} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-gray-300 relative">
                    <Play className="absolute inset-0 m-auto text-white w-16 h-16 opacity-75" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold mb-2">Reel Title {reel}</h3>
                    <p className="text-sm text-gray-600">A brief description of the reel and its highlights.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="performances" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center">Upcoming Performances</h2>
            <div className="space-y-6">
              {[
                { title: "Hamlet", date: "June 15-30, 2023", venue: "City Theater" },
                { title: "A Streetcar Named Desire", date: "July 10-25, 2023", venue: "Community Playhouse" },
                { title: "The Importance of Being Earnest", date: "August 5-20, 2023", venue: "Shakespeare in the Park" },
              ].map((performance, index) => (
                <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-xl mb-2">{performance.title}</h3>
                  <p className="flex items-center text-gray-600 mb-2">
                    <CalendarDays className="mr-2 h-5 w-5" />
                    {performance.date}
                  </p>
                  <p className="text-gray-600">{performance.venue}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
          <div className="flex flex-col items-center space-y-4">
            <p className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              stagecraft@example.com
            </p>
            <p className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              (123) 456-7890
            </p>
            <p className="text-center mt-6">
              © {new Date().getFullYear()} StageCraft. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}