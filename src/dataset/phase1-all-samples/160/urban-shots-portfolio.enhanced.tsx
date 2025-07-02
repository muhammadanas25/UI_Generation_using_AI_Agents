import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Twitter, Facebook, Menu, X, ChevronUp } from "lucide-react"
import Image from "next/image"

export default function Component() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const openModal = (image) => {
    setSelectedImage(image)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setSelectedImage(null)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900 shadow-md">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <a className="flex items-center space-x-2" href="/">
            <Image src="/logo.png" alt="UrbanShots Logo" width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">UrbanShots</span>
          </a>
          <nav className={`absolute top-16 left-0 w-full bg-white dark:bg-gray-900 md:static md:w-auto md:flex md:items-center ${menuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row md:space-x-6 p-4 md:p-0">
              <li>
                <a className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" href="#gallery" onClick={() => setMenuOpen(false)}>
                  Gallery
                </a>
              </li>
              <li>
                <a className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" href="#about" onClick={() => setMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" href="#services" onClick={() => setMenuOpen(false)}>
                  Services
                </a>
              </li>
              <li>
                <a className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" href="#contact" onClick={() => setMenuOpen(false)}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button className="md:hidden text-gray-700 dark:text-gray-300" onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-20 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container relative z-10 flex flex-col items-center text-center space-y-4 px-4 md:px-6">
            <h1 className="text-4xl font-bold text-white tracking-tighter sm:text-5xl md:text-6xl animate-fadeIn">
              Capturing Urban Life
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-200 md:text-xl animate-fadeIn delay-200">
              Street scenes, candid moments, and the pulse of the city through my lens.
            </p>
            <div className="space-x-4 animate-fadeIn delay-400">
              <Button className="transition-transform transform hover:scale-105">View Gallery</Button>
              <Button variant="outline" className="transition-transform transform hover:scale-105">
                Book a Session
              </Button>
            </div>
          </div>
        </section>
        <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-gray-800 dark:text-white">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="relative group">
                  <Image
                    src={`/gallery/photo-${i + 1}.jpg`}
                    alt={`Urban photo ${i + 1}`}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-60 shadow-lg transform group-hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => openModal(`/gallery/photo-${i + 1}.jpg`)}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg">View</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {modalOpen && selectedImage && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" onClick={closeModal}>
              <div className="relative">
                <Image src={selectedImage} alt="Selected" width={800} height={600} className="rounded-lg shadow-lg" />
                <button className="absolute top-2 right-2 text-white" onClick={closeModal}>
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
          )}
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <Image
                  src="/photographer.jpg"
                  alt="Photographer"
                  width={400}
                  height={400}
                  className="rounded-full object-cover shadow-lg animate-fadeIn"
                />
              </div>
              <div className="md:w-1/2 space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-800 dark:text-white">About UrbanShots</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Hi, I'm Alex, the eye behind UrbanShots. With over a decade of experience in urban photography, I've developed a keen sense for capturing the essence of city life. My work focuses on the interplay of light, architecture, and human interaction in urban environments.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  From bustling street corners to quiet alleyways, I strive to reveal the hidden stories of our cities through my lens. My photographs have been featured in galleries across the country and in several international publications.
                </p>
                <Button variant="outline" className="mt-4">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-gray-800 dark:text-white">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src="/icons/street-photography.svg" alt="Street Photography" width={60} height={60} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Street Photography</h3>
                <p className="text-gray-600 dark:text-gray-300">Candid shots that capture the essence of urban life.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src="/icons/urban-landscapes.svg" alt="Urban Landscapes" width={60} height={60} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Urban Landscapes</h3>
                <p className="text-gray-600 dark:text-gray-300">Stunning cityscapes and architectural photography.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src="/icons/event-coverage.svg" alt="Event Coverage" width={60} height={60} />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Event Coverage</h3>
                <p className="text-gray-600 dark:text-gray-300">Documenting urban events and gatherings.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center text-gray-800 dark:text-white">Get in Touch</h2>
            <form className="max-w-md mx-auto space-y-4" onSubmit={(e) => { e.preventDefault(); /* Handle form submission */ }}>
              <Input placeholder="Name" required className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100" />
              <Input type="email" placeholder="Email" required className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100" />
              <Textarea placeholder="Message" required className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100" />
              <Button type="submit" className="w-full transition-transform transform hover:scale-105">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 UrbanShots. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </footer>
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 p-3 bg-gray-800 text-white rounded-full shadow-lg hover:bg-gray-700 transition-colors hidden md:block"
      >
        <ChevronUp className="h-6 w-6" />
        <span className="sr-only">Back to top</span>
      </button>
    </div>
  )
}