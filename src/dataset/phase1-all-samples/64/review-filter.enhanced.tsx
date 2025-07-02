import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Book, ChevronDown, ChevronUp, Search, X } from 'lucide-react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useSwipeable } from 'react-swipeable';

// Mock data for demonstration
const mockReviews = [
  { id: 1, title: "Great Fantasy Novel", author: "J.R.R. Tolkien", genre: "Fantasy", content: "An epic journey through Middle-earth...", image: "/images/lord_of_the_rings.jpg" },
  { id: 2, title: "Thrilling Mystery", author: "Agatha Christie", genre: "Mystery", content: "A puzzling case that kept me guessing...", image: "/images/murder_on_the_orient_express.jpg" },
  { id: 3, title: "Sci-Fi Adventure", author: "Isaac Asimov", genre: "Science Fiction", content: "An exploration of future technologies...", image: "/images/foundation.jpg" },
  { id: 4, title: "Romantic Classic", author: "Jane Austen", genre: "Romance", content: "A timeless tale of love and society...", image: "/images/pride_and_prejudice.jpg" },
  { id: 5, title: "Historical Fiction", author: "Hilary Mantel", genre: "Historical", content: "A vivid portrayal of Tudor England...", image: "/images/wolf_hall.jpg" },
]

const genres = ["Fantasy", "Mystery", "Science Fiction", "Romance", "Historical"]
const authors = ["J.R.R. Tolkien", "Agatha Christie", "Isaac Asimov", "Jane Austen", "Hilary Mantel"]

export default function ReviewFilter() {
  const [selectedGenres, setSelectedGenres] = useState<string[]>([])
  const [selectedAuthors, setSelectedAuthors] = useState<string[]>([])
  const [filteredReviews, setFilteredReviews] = useState(mockReviews)
  const [authorSearch, setAuthorSearch] = useState("")
  const [isGenreExpanded, setIsGenreExpanded] = useState(true)
  const [isAuthorExpanded, setIsAuthorExpanded] = useState(true)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  useEffect(() => {
    const filtered = mockReviews.filter(review =>
      (selectedGenres.length === 0 || selectedGenres.includes(review.genre)) &&
      (selectedAuthors.length === 0 || selectedAuthors.includes(review.author))
    )
    setFilteredReviews(filtered)
  }, [selectedGenres, selectedAuthors])

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev =>
      prev.includes(genre) ? prev.filter(g => g !== genre) : [...prev, genre]
    )
  }

  const toggleAuthor = (author: string) => {
    setSelectedAuthors(prev =>
      prev.includes(author) ? prev.filter(a => a !== author) : [...prev, author]
    )
  }

  const filteredAuthors = authors.filter(author =>
    author.toLowerCase().includes(authorSearch.toLowerCase())
  )

  const clearFilters = () => {
    setSelectedGenres([])
    setSelectedAuthors([])
    setAuthorSearch("")
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIsSidebarOpen(false),
    trackMouse: true
  });

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Mobile Sidebar Toggle */}
      <div className="md:hidden flex justify-between items-center p-4 bg-gray-100">
        <h2 className="text-xl font-bold">Book Reviews</h2>
        <Button variant="outline" onClick={() => setIsSidebarOpen(true)}>
          <Book className="h-5 w-5 mr-2" />
          Filters
        </Button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {(isSidebarOpen || true) && (
          <motion.div
            {...swipeHandlers}
            className="w-4/5 max-w-xs md:w-72 bg-white p-4 md:p-6 shadow-md overflow-auto fixed md:static top-0 left-0 h-full z-50 transform md:transform-none transition-transform duration-300"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
          >
            <div className="hidden md:flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Filters</h2>
              <Button variant="ghost" onClick={clearFilters}>
                Clear All
              </Button>
            </div>

            <div className="flex flex-col space-y-6">
              {/* Genre Filter */}
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                  onClick={() => setIsGenreExpanded(!isGenreExpanded)}
                >
                  <span className="font-semibold">Genres</span>
                  {isGenreExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </Button>
                <AnimatePresence>
                  {isGenreExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-2"
                    >
                      <ScrollArea className="h-48">
                        {genres.map(genre => (
                          <Button
                            key={genre}
                            variant={selectedGenres.includes(genre) ? "default" : "ghost"}
                            className={`w-full justify-start mb-1 ${selectedGenres.includes(genre) ? 'bg-blue-500 text-white' : ''}`}
                            onClick={() => toggleGenre(genre)}
                          >
                            {genre}
                          </Button>
                        ))}
                      </ScrollArea>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Separator />

              {/* Author Filter */}
              <div>
                <Button
                  variant="ghost"
                  className="w-full justify-between"
                  onClick={() => setIsAuthorExpanded(!isAuthorExpanded)}
                >
                  <span className="font-semibold">Authors</span>
                  {isAuthorExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </Button>
                <AnimatePresence>
                  {isAuthorExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="mt-2"
                    >
                      <div className="relative">
                        <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          placeholder="Search authors"
                          value={authorSearch}
                          onChange={(e) => setAuthorSearch(e.target.value)}
                          className="pl-10"
                        />
                      </div>
                      <ScrollArea className="h-48 mt-2">
                        {filteredAuthors.map(author => (
                          <Button
                            key={author}
                            variant={selectedAuthors.includes(author) ? "default" : "ghost"}
                            className={`w-full justify-start mb-1 ${selectedAuthors.includes(author) ? 'bg-green-500 text-white' : ''}`}
                            onClick={() => toggleAuthor(author)}
                          >
                            {author}
                          </Button>
                        ))}
                      </ScrollArea>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button variant="destructive" className="mt-4" onClick={clearFilters}>
                <X className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>

            {/* Close Sidebar on Mobile */}
            <div className="md:hidden mt-4">
              <Button variant="outline" className="w-full" onClick={() => setIsSidebarOpen(false)}>
                Close Filters
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black opacity-50 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>
      )}

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 ml-0 md:ml-72 overflow-auto bg-gray-50">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
          <h1 className="text-3xl font-bold">Book Reviews</h1>
          <Input
            placeholder="Search reviews..."
            className="mt-4 md:mt-0 md:w-1/3"
          />
        </div>
        {filteredReviews.length === 0 ? (
          <p className="text-center text-gray-600">No reviews match the selected filters.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {filteredReviews.map(review => (
              <motion.div
                key={review.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Image src={review.image} alt={review.title} width={400} height={300} className="w-full h-40 sm:h-48 object-cover" />
                <div className="p-3 sm:p-4">
                  <h2 className="text-lg sm:text-xl font-semibold mb-2">{review.title}</h2>
                  <p className="text-xs sm:text-sm text-gray-600 flex items-center">
                    <Book className="h-4 w-4 sm:h-5 sm:w-5 mr-1" />
                    {review.author} | {review.genre}
                  </p>
                  <p className="mt-2 text-sm sm:text-base text-gray-700">{review.content.slice(0, 100)}...</p>
                  <div className="mt-3 sm:mt-4 flex justify-between items-center">
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                    <div className="flex items-center">
                      <span className="text-yellow-400 mr-1">★</span>
                      <span className="text-sm">4.5</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

