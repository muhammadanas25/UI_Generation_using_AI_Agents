import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, PinIcon as Pinterest, Search, Twitter, Menu, X } from 'lucide-react'
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link className="flex items-center space-x-2" href="#">
            <MountainIcon className="h-6 w-6 text-[#a67c52] animate-pulse" />
            <span className="text-xl font-bold text-gray-800 dark:text-white">CraftCorner</span>
          </Link>
          <nav className="hidden lg:flex space-x-6">
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
              Home
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
              Tutorials
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
              Projects
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
              Supplies
            </Link>
            <Link className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
              About
            </Link>
          </nav>
          <div className="lg:hidden">
            <Button variant="ghost" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-white dark:bg-gray-800 px-4 pb-4 animate-fadeIn">
            <ul className="space-y-2 mt-2">
              <li>
                <Link className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
                  Home
                </Link>
              </li>
              <li>
                <Link className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
                  Supplies
                </Link>
              </li>
              <li>
                <Link className="block text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
                  About
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </header>
      <main className="flex-1 pt-16">
        <section className="w-full py-12 sm:py-20 bg-gradient-to-r from-[#f0e6d3] to-[#e0d5b8]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 dark:text-white drop-shadow-lg">
                Welcome to CraftCorner
              </h1>
              <p className="max-w-2xl text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
                Discover DIY tutorials, creative project ideas, and essential crafting supplies.
              </p>
              <div className="w-full max-w-md">
                <form className="flex flex-col sm:flex-row items-center">
                  <Input className="w-full sm:w-auto flex-1 mb-2 sm:mb-0 sm:mr-2" placeholder="Search tutorials, projects, or supplies" type="text" />
                  <Button type="submit" className="w-full sm:w-auto bg-[#a67c52] hover:bg-[#8b5e3c] transition-colors duration-200">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <FeatureCard
                imageSrc="/macrame-plant-hanger.jpg"
                alt="DIY Macrame Plant Hanger"
                title="DIY Macrame Plant Hanger"
                description="Learn how to create a beautiful macrame plant hanger for your home."
                linkText="Read Tutorial"
                linkHref="#"
              />
              <FeatureCard
                imageSrc="/upcycled-pallet-shelf.jpg"
                alt="Upcycled Pallet Wood Shelf"
                title="Upcycled Pallet Wood Shelf"
                description="Transform old pallets into a rustic and functional shelf for your home."
                linkText="View Project"
                linkHref="#"
              />
              <FeatureCard
                imageSrc="/knitting-supplies.jpg"
                alt="Essential Knitting Supplies"
                title="Essential Knitting Supplies"
                description="A comprehensive list of must-have supplies for beginner knitters."
                linkText="See Supply List"
                linkHref="#"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 sm:py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-3">
              <div className="md:col-span-2 space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">Latest Tutorials</h2>
                <div className="space-y-6">
                  <TutorialCard
                    imageSrc="/watercolor-painting.jpg"
                    alt="Watercolor Painting Basics"
                    title="Watercolor Painting Basics"
                    description="Master the fundamentals of watercolor painting with this beginner-friendly guide."
                    linkText="Read More"
                    linkHref="#"
                  />
                  <TutorialCard
                    imageSrc="/crochet-blanket.jpg"
                    alt="Crochet a Cozy Blanket"
                    title="Crochet a Cozy Blanket"
                    description="Step-by-step instructions for crocheting a warm and stylish blanket for your home."
                    linkText="Read More"
                    linkHref="#"
                  />
                  <TutorialCard
                    imageSrc="/wooden-jewelry-box.jpg"
                    alt="Wooden Jewelry Box"
                    title="Wooden Jewelry Box"
                    description="Create a personalized wooden jewelry box with this detailed tutorial."
                    linkText="Read More"
                    linkHref="#"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">Categories</h2>
                <ul className="space-y-3">
                  <li>
                    <Link className="flex items-center text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
                      <CraftIcon className="h-5 w-5 mr-2" />
                      Knitting & Crochet
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
                      <PaintbrushIcon className="h-5 w-5 mr-2" />
                      Painting & Drawing
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
                      <HammerIcon className="h-5 w-5 mr-2" />
                      Woodworking
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
                      <DiamondIcon className="h-5 w-5 mr-2" />
                      Jewelry Making
                    </Link>
                  </li>
                  <li>
                    <Link className="flex items-center text-gray-600 dark:text-gray-300 hover:text-[#a67c52] transition-colors duration-200" href="#">
                      <PaperIcon className="h-5 w-5 mr-2" />
                      Paper Crafts
                    </Link>
                  </li>
                </ul>
                <div className="mt-6">
                  <Image
                    alt="Craft Supplies"
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                    height="300"
                    src="/craft-supplies.jpg"
                    width="400"
                    layout="responsive"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="bg-white dark:bg-gray-800 py-8 transition-colors duration-300">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:justify-between sm:space-y-0">
              <p className="text-sm text-center sm:text-left text-gray-500 dark:text-gray-400">© 2024 CraftCorner. All rights reserved.</p>
              <nav className="flex flex-wrap justify-center space-x-4">
                <Link className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#a67c52] transition-colors duration-200" href="#">
                  Terms of Service
                </Link>
                <Link className="text-sm text-gray-500 dark:text-gray-400 hover:text-[#a67c52] transition-colors duration-200" href="#">
                  Privacy
                </Link>
              </nav>
              <div className="flex space-x-4">
                <Link className="text-gray-500 dark:text-gray-400 hover:text-[#a67c52] transition-colors duration-200" href="#">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link className="text-gray-500 dark:text-gray-400 hover:text-[#a67c52] transition-colors duration-200" href="#">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link className="text-gray-500 dark:text-gray-400 hover:text-[#a67c52] transition-colors duration-200" href="#">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link className="text-gray-500 dark:text-gray-400 hover:text-[#a67c52] transition-colors duration-200" href="#">
                  <Pinterest className="h-5 w-5" />
                  <span className="sr-only">Pinterest</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}

function FeatureCard({ imageSrc, alt, title, description, linkText, linkHref }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 hover:shadow-2xl transition-transform duration-300">
      <Image
        alt={alt}
        className="w-full h-48 object-cover"
        height="300"
        src={imageSrc}
        width="400"
        priority
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link className="inline-flex items-center text-[#a67c52] font-medium hover:underline transition-colors duration-200" href={linkHref}>
          {linkText}
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function TutorialCard({ imageSrc, alt, title, description, linkText, linkHref }) {
  return (
    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
      <Image
        alt={alt}
        className="w-full sm:w-24 h-48 sm:h-24 object-cover rounded-lg"
        height="100"
        src={imageSrc}
        width="100"
        layout="responsive"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        <Link className="inline-flex items-center text-[#a67c52] font-medium hover:underline transition-colors duration-200" href={linkHref}>
          {linkText}
          <ArrowRightIcon className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="transition-transform duration-200 transform group-hover:translate-x-1"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="transition-transform duration-300 transform hover:rotate-12 hover:scale-110"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 3l4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

function CraftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
    </svg>
  )
}

function PaintbrushIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 21v-4a4 4 0 00-4-4H4a4 4 0 00-4 4v4h16z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 10l-6 6m0 0l-6-6m6 6V4" />
    </svg>
  )
}

function HammerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 3l7 7-7 7M3 21l7-7" />
    </svg>
  )
}

function DiamondIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 6l-4 14-4-14" />
    </svg>
  )
}

function PaperIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="h-5 w-5"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h7l5 5v9a2 2 0 01-2 2z" />
    </svg>
  )
}

<style jsx global>{`
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  .animate-fadeIn {
    animation: fadeIn 0.5s ease-in-out;
  }
`}</style>

