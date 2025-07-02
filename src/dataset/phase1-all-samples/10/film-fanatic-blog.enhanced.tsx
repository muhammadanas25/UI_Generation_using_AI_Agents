"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Star, Menu, X, Search } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function FilmFanaticBlog() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60 transition-colors duration-300">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link className="flex items-center space-x-2" href="/">
            <Image src="/logo.svg" alt="FilmFanatic Logo" width={40} height={40} className="h-8 w-8 md:h-10 md:w-10" />
            <span className="font-bold text-lg md:text-xl text-gray-800 dark:text-white">FilmFanatic</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link className="relative group transition-colors hover:text-primary text-gray-700 dark:text-gray-300" href="/reviews">
              Reviews
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary scale-0 group-hover:scale-100 transition-transform"></span>
            </Link>
            <Link className="relative group transition-colors hover:text-primary text-gray-700 dark:text-gray-300" href="/ratings">
              Ratings
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary scale-0 group-hover:scale-100 transition-transform"></span>
            </Link>
            <Link className="relative group transition-colors hover:text-primary text-gray-700 dark:text-gray-300" href="/about">
              About
              <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-primary scale-0 group-hover:scale-100 transition-transform"></span>
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex">
              <Button variant="ghost" size="icon" className="relative">
                <Search className="w-5 h-5" />
                <span className="sr-only">Search Reviews</span>
              </Button>
            </div>
            <Button variant="outline" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(true)}>
              <Menu className="w-5 h-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>
        <Dialog open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <DialogContent className="fixed inset-0 bg-white dark:bg-gray-900 p-6 flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/logo.svg" alt="FilmFanatic Logo" width={40} height={40} className="h-8 w-8" />
                <span className="font-bold text-lg text-gray-800 dark:text-white">FilmFanatic</span>
              </Link>
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)}>
                <X className="w-5 h-5" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col space-y-4 text-lg">
              <Link href="/reviews" onClick={() => setIsMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                Reviews
              </Link>
              <Link href="/ratings" onClick={() => setIsMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                Ratings
              </Link>
              <Link href="/about" onClick={() => setIsMenuOpen(false)} className="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors">
                About
              </Link>
            </nav>
            <div className="mt-4">
              <Button className="w-full" variant="outline" leftIcon={<Search className="w-5 h-5" />}>
                Search Reviews
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-4 md:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-lg">
              Welcome to <span className="text-yellow-300">FilmFanatic</span>
            </h1>
            <p className="max-w-2xl text-base sm:text-lg md:text-xl drop-shadow-md">
              Your go-to source for honest movie reviews and ratings. Discover what's hot and what's not in the film industry.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 md:mt-6 w-full sm:w-auto">
              <Link href="/reviews" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto px-6 py-3 text-base transition-transform transform hover:scale-105" size="lg">
                  Latest Reviews
                </Button>
              </Link>
              <Link href="/ratings" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full sm:w-auto px-6 py-3 text-base transition-transform transform hover:scale-105" size="lg">
                  Top Rated
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-8 text-center">Featured Review</h2>
            <Card className="max-w-4xl mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl">Inception: A Mind-Bending Masterpiece</CardTitle>
                <CardDescription className="text-sm text-gray-500 dark:text-gray-400">By John Doe | July 16, 2010</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row items-center gap-6 animate-fade-in">
                  <div className="relative group w-full md:w-auto">
                    <Image
                      src="/inception-poster.jpg"
                      alt="Inception movie poster"
                      width={300}
                      height={400}
                      className="rounded-lg object-cover shadow-md transform transition-transform duration-300 group-hover:scale-105 w-full md:w-auto"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button variant="ghost" className="text-white flex items-center">
                        <Search className="w-5 h-5 mr-2" /> Preview
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4 w-full md:w-auto">
                    <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
                      Christopher Nolan's "Inception" is a visually stunning and intellectually stimulating sci-fi thriller
                      that challenges the boundaries of dreams and reality. The intricate plot and exceptional performances
                      make it a must-watch for any film enthusiast.
                    </p>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400" />
                      ))}
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">5.0 / 5.0</span>
                    </div>
                    <Button className="mt-2 w-full md:w-auto" size="lg">
                      Read Full Review
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-8 text-center">Top Reviews</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "The Shawshank Redemption", rating: 4.8, description: "An inspiring tale of hope and friendship." },
                { title: "The Godfather", rating: 4.7, description: "A masterpiece of family and power dynamics." },
                { title: "The Dark Knight", rating: 4.6, description: "A gripping portrayal of heroism and chaos." },
                { title: "Pulp Fiction", rating: 4.5, description: "A non-linear story that redefined modern cinema." },
                { title: "Fight Club", rating: 4.4, description: "A raw exploration of identity and consumerism." },
                { title: "Forrest Gump", rating: 4.9, description: "A heartfelt journey through pivotal moments in history." },
              ].map((movie, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl">{movie.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-500 dark:text-gray-400">Classic Must-Watch</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center mb-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= Math.round(movie.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600"
                            }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{movie.rating} / 5.0</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{movie.description}</p>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      Read Review
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="container px-4 md:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6 md:mb-8 text-center">Latest Ratings</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Dune", rating: 4.5 },
                { title: "No Time to Die", rating: 4.2 },
                { title: "The French Dispatch", rating: 4.0 },
                { title: "Last Night in Soho", rating: 3.8 },
                { title: "Tenet", rating: 4.3 },
                { title: "Joker", rating: 4.6 },
                { title: "Interstellar", rating: 4.7 },
                { title: "Avengers: Endgame", rating: 4.9 },
              ].map((movie, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-base md:text-lg">{movie.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${star <= Math.round(movie.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "fill-gray-300 text-gray-300 dark:fill-gray-600 dark:text-gray-600"
                            }`}
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">{movie.rating} / 5.0</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 bg-white dark:bg-gray-900 border-t transition-colors duration-300">
        <div className="container px-4 md:px-6 flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2023 FilmFanatic. All rights reserved.</p>
          <nav className="flex flex-wrap items-center justify-center space-x-4">
            <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="/terms">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="/privacy">
              Privacy
            </Link>
            <div className="flex items-center space-x-2">
              <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.325v21.351C0 23.403.597 24 1.325 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.696h-3.121V24h6.116C23.403 24 24 23.403 24 22.675V1.325C24 .597 23.403 0 22.675 0z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.555-2.005.959-3.127 1.184A4.916 4.916 0 0 0 16.616 3c-2.737 0-4.952 2.215-4.952 4.95 0 .388.044.765.127 1.124C7.691 8.875 4.066 6.88 1.64 3.161a4.822 4.822 0 0 0-.666 2.49c0 1.72.87 3.237 2.19 4.126a4.904 4.904 0 0 1-2.24-.619v.062c0 2.385 1.698 4.374 3.946 4.823a4.935 4.935 0 0 1-2.232.085c.63 1.965 2.445 3.392 4.6 3.431A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.058 0 14.01-7.497 14.01-13.986 0-.21-.005-.423-.014-.634A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-primary transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.976 1.248 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.976.975-2.242 1.248-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.976-.976-1.248-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.976-.975 2.242-1.248 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.775.129 4.66.395 3.678 1.377 2.696 2.36 2.43 3.475 2.373 4.752 2.315 6.032 2.3 6.456 2.3 12s.015 5.968.073 7.248c.057 1.277.323 2.392 1.305 3.374.982.982 2.097 1.248 3.374 1.305 1.28.058 1.704.073 7.248.073s5.968-.015 7.248-.073c1.277-.057 2.392-.323 3.374-1.305.982-.982 1.248-2.097 1.305-3.374.058-1.28.073-1.704.073-7.248s-.015-5.968-.073-7.248c-.057-1.277-.323-2.392-1.305-3.374C19.64.395 18.525.129 17.248.072 15.968.014 15.544 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </Link>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  )
}

