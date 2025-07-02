"use client"

import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useLoader } from "@react-three/fiber"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Menu, Transition } from "@headlessui/react"
import { MenuIcon, XIcon, SunIcon, MoonIcon } from "@heroicons/react/outline"
import { useTheme } from "next-themes"

function Model() {
  const gltf = useLoader(GLTFLoader, "/assets/3d/duck.glb")
  return <primitive object={gltf.scene} scale={[2, 2, 2]} />
}

export default function PortfolioHomepage() {
  const [activeTab, setActiveTab] = useState("projects")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useState(() => setMounted(true), [])

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500">
      <header className="bg-white dark:bg-gray-800 shadow-sm fixed w-full z-10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-500">Nina Architects</h1>
          <nav className="hidden md:flex space-x-6">
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Projects</a>
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">About</a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">Contact</a>
            <Button variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {mounted && (theme === 'dark' ? (
                <SunIcon className="w-5 h-5 text-yellow-500" />
              ) : (
                <MoonIcon className="w-5 h-5 text-gray-800" />
              ))}
              <span className="sr-only">Toggle Theme</span>
            </Button>
          </nav>
          <div className="md:hidden flex items-center">
            <Button variant="ghost" onClick={() => {}}>
              {mounted && (
                <Button variant="ghost">
                  <MenuIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
                </Button>
              )}
            </Button>
            <Menu as="div" className="relative">
              <Menu.Button>
                <MenuIcon className="w-6 h-6 text-gray-600 dark:text-gray-300" />
              </Menu.Button>
              <Transition
                enter="transition ease-out duration-200"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-150"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#projects" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                        Projects
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#about" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                        About
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a href="#contact" className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 ${active ? 'bg-gray-100 dark:bg-gray-700' : ''}`}>
                        Contact
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    <Button variant="ghost" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                      {theme === 'dark' ? (
                        <SunIcon className="w-5 h-5 inline mr-2 text-yellow-500" />
                      ) : (
                        <MoonIcon className="w-5 h-5 inline mr-2 text-gray-800" />
                      )}
                      Toggle Theme
                    </Button>
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-24">
        <section className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-in">Welcome to Nina Architects</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">Designing innovative and sustainable architectural solutions that blend aesthetics with functionality.</p>
          <Button className="mt-6">Explore Our Work</Button>
        </section>

        <section id="featured" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Featured Project</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="h-[400px]">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <OrbitControls enableZoom={true} />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Model />
                <Environment preset="studio" />
              </Canvas>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">Modern Eco-Home</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">A sustainable living space that harmonizes with nature.</p>
              <Button variant="primary">View Project</Button>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="flex space-x-4 mb-8 justify-center">
              <TabsTrigger value="projects" className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">Projects</TabsTrigger>
              <TabsTrigger value="sketches" className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">Sketches</TabsTrigger>
              <TabsTrigger value="3dmodels" className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200">3D Models</TabsTrigger>
            </TabsList>
            <TabsContent value="projects">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="relative h-48">
                        <Image
                          src={`/placeholder.svg?height=300&width=400`}
                          alt={`Project ${i}`}
                          layout="fill"
                          objectFit="cover"
                          className="transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Project {i}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">A brief description of the project and its unique features.</p>
                        <Button variant="outline">Learn More</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="sketches">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="relative h-48">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=Sketch+${i}`}
                          alt={`Sketch ${i}`}
                          layout="fill"
                          objectFit="cover"
                          className="transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">Sketch {i}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Initial concept drawing for an upcoming project.</p>
                        <Button variant="outline">View Sketch</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="3dmodels">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Card key={i} className="hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-0">
                      <div className="relative h-48">
                        <Image
                          src={`/placeholder.svg?height=300&width=400&text=3D+Model+${i}`}
                          alt={`3D Model ${i}`}
                          layout="fill"
                          objectFit="cover"
                          className="transform hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">3D Model {i}</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">Interactive 3D model of the project.</p>
                        <Button variant="outline">View Model</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        <section id="about" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">About Us</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <Image
                src="/architect-team.jpg"
                alt="Architect Team"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-gray-700 dark:text-gray-300 mb-4">Nina Architects is dedicated to creating sustainable and innovative architectural designs that meet the unique needs of our clients. Our team combines creativity with technical expertise to deliver projects that stand the test of time.</p>
              <Button variant="primary">Our Story</Button>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-900 dark:text-white">Get in Touch</h2>
          <form className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white" required></textarea>
            </div>
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-2xl font-bold mb-4">Nina Architects</h2>
              <p className="text-gray-400">Creating spaces that inspire and endure.</p>
            </div>
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-gray-400">123 Architecture Lane<br />Design City, DC 12345<br /><a href="mailto:contact@nina-architects.com" className="text-gray-300 hover:text-white transition-colors duration-300">contact@nina-architects.com</a></p>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" aria-label="Facebook">
                  <svg className="w-5 h-5 fill-current text-gray-300 hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" aria-label="Instagram">
                  <svg className="w-5 h-5 fill-current text-gray-300 hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" aria-label="Twitter">
                  <svg className="w-5 h-5 fill-current text-gray-300 hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-current text-gray-300 hover:text-white transition-colors duration-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.868 0-2.154 1.46-2.154 2.96v5.7h-3v-10h2.88v1.367h.041c.401-.758 1.38-1.56 2.84-1.56 3.041 0 3.604 2.001 3.604 4.6v5.598z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500">
            &copy; {new Date().getFullYear()} Nina Architects. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}