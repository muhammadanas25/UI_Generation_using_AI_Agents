import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, PinIcon as Pinterest, Search, Twitter, Menu, X } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">CraftCorner</span>
        </Link>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-14 left-0 right-0 bg-white md:top-0 flex-col md:flex-row gap-4 p-4 md:p-0 shadow-md md:shadow-none`}>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Tutorials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Supplies
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#f0e6d3]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to CraftCorner
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                  Discover DIY tutorials, creative project ideas, and essential crafting supplies.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Search tutorials, projects, or supplies" type="text" />
                  <Button type="submit" className="bg-[#a67c52] text-white">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
              <div className="space-y-4">
                <Image
                  alt="DIY Macrame Plant Hanger"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">DIY Macrame Plant Hanger</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Learn how to create a beautiful macrame plant hanger for your home.
                  </p>
                  <Link className="inline-flex items-center text-sm font-medium hover:underline" href="#">
                    Read Tutorial
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <Image
                  alt="Upcycled Pallet Wood Shelf"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Upcycled Pallet Wood Shelf</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Transform old pallets into a rustic and functional shelf for your home.
                  </p>
                  <Link className="inline-flex items-center text-sm font-medium hover:underline" href="#">
                    View Project
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4">
                <Image
                  alt="Essential Knitting Supplies"
                  className="aspect-[4/3] overflow-hidden rounded-lg object-cover object-center"
                  height="300"
                  src="/placeholder.svg"
                  width="400"
                />
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Essential Knitting Supplies</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    A comprehensive list of must-have supplies for beginner knitters.
                  </p>
                  <Link className="inline-flex items-center text-sm font-medium hover:underline" href="#">
                    See Supply List
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-3">
              <div className="space-y-4 col-span-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">Latest Tutorials</h2>
                <div className="grid gap-6">
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <Image
                      alt="Watercolor Painting Basics"
                      className="aspect-square overflow-hidden rounded-lg object-cover object-center w-full sm:w-[100px]"
                      height="100"
                      src="/placeholder.svg"
                      width="100"
                    />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Watercolor Painting Basics</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Master the fundamentals of watercolor painting with this beginner-friendly guide.
                      </p>
                      <Link className="inline-flex items-center text-sm font-medium hover:underline" href="#">
                        Read More
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <Image
                      alt="Crochet a Cozy Blanket"
                      className="aspect-square overflow-hidden rounded-lg object-cover object-center w-full sm:w-[100px]"
                      height="100"
                      src="/placeholder.svg"
                      width="100"
                    />
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Crochet a Cozy Blanket</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Step-by-step instructions for crocheting a warm and stylish blanket for your home.
                      </p>
                      <Link className="inline-flex items-center text-sm font-medium hover:underline" href="#">
                        Read More
                        <ArrowRightIcon className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter">Categories</h2>
                <ul className="space-y-2">
                  <li>
                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                      Knitting & Crochet
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                      Painting & Drawing
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                      Woodworking
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                      Jewelry Making
                    </Link>
                  </li>
                  <li>
                    <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
                      Paper Crafts
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 CraftCorner. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Link>
          <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Link>
          <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="#">
            <Pinterest className="h-5 w-5" />
            <span className="sr-only">Pinterest</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

