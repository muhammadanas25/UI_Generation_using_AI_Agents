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
import { Menu } from 'lucide-react'

function Model() {
  const gltf = useLoader(GLTFLoader, "/assets/3d/duck.glb")
  return <primitive object={gltf.scene} scale={[2, 2, 2]} />
}

export default function PortfolioHomepage() {
  const [activeTab, setActiveTab] = useState("projects")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 md:py-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Nina Architects</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              <li><a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a></li>
            </ul>
          </nav>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="md:hidden bg-white px-4 py-2">
            <ul className="flex flex-col space-y-2">
              <li><a href="#projects" className="text-gray-600 hover:text-gray-900 block py-1">Projects</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-gray-900 block py-1">About</a></li>
              <li><a href="#contact" className="text-gray-600 hover:text-gray-900 block py-1">Contact</a></li>
            </ul>
          </nav>
        )}
      </header>

      <main className="container mx-auto px-4 py-6 md:py-8">
        <section className="mb-8 md:mb-12">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Featured Project</h2>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-[300px] md:h-[400px]">
              <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <OrbitControls />
                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <Model />
                <Environment preset="studio" />
              </Canvas>
            </div>
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-2">Modern Eco-Home</h3>
              <p className="text-sm md:text-base text-gray-600">A sustainable living space that harmonizes with nature.</p>
            </div>
          </div>
        </section>

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-6 md:mb-8">
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="sketches">Sketches</TabsTrigger>
          </TabsList>
          <TabsContent value="projects">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <CardContent className="p-0">
                    <Image
                      src={`/placeholder.svg?height=300&width=400`}
                      alt={`Project ${i}`}
                      width={400}
                      height={300}
                      className="w-full h-40 md:h-48 object-cover"
                    />
                    <div className="p-3 md:p-4">
                      <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Project {i}</h3>
                      <p className="text-xs md:text-sm text-gray-600">A brief description of the project and its unique features.</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="sketches">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <Card key={i}>
                  <CardContent className="p-0">
                    <Image
                      src={`/placeholder.svg?height=300&width=400&text=Sketch ${i}`}
                      alt={`Sketch ${i}`}
                      width={400}
                      height={300}
                      className="w-full h-40 md:h-48 object-cover"
                    />
                    <div className="p-3 md:p-4">
                      <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">Sketch {i}</h3>
                      <p className="text-xs md:text-sm text-gray-600">Initial concept drawing for an upcoming project.</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-gray-900 text-white py-6 md:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h2 className="text-xl md:text-2xl font-bold mb-2 md:mb-4">Nina Architects</h2>
              <p className="text-sm md:text-base text-gray-400">Creating spaces that inspire and endure.</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Contact</h3>
              <p className="text-sm md:text-base text-gray-400">123 Architecture Lane<br />Design City, DC 12345<br />contact@nina-architects.com</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-lg font-semibold mb-2">Connect</h3>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

