import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Book, ChevronDown, ChevronUp, Search, Filter } from 'lucide-react'

// Mock data for demonstration
const mockReviews = [
  { id: 1, title: "Great Fantasy Novel", author: "J.R.R. Tolkien", genre: "Fantasy", content: "An epic journey through Middle-earth..." },
  { id: 2, title: "Thrilling Mystery", author: "Agatha Christie", genre: "Mystery", content: "A puzzling case that kept me guessing..." },
  { id: 3, title: "Sci-Fi Adventure", author: "Isaac Asimov", genre: "Science Fiction", content: "An exploration of future technologies..." },
  { id: 4, title: "Romantic Classic", author: "Jane Austen", genre: "Romance", content: "A timeless tale of love and society..." },
  { id: 5, title: "Historical Fiction", author: "Hilary Mantel", genre: "Historical", content: "A vivid portrayal of Tudor England..." },
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
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)

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

  const FilterContent = () => (
    <>
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      {/* Genre Filter */}
      <div className="mb-4">
        <Button
          variant="ghost"
          className="w-full justify-between"
          onClick={() => setIsGenreExpanded(!isGenreExpanded)}
        >
          Genres
          {isGenreExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isGenreExpanded && (
          <ScrollArea className="h-40 w-full">
            {genres.map(genre => (
              <Button
                key={genre}
                variant={selectedGenres.includes(genre) ? "secondary" : "ghost"}
                className="w-full justify-start"
                onClick={() => toggleGenre(genre)}
              >
                {genre}
              </Button>
            ))}
          </ScrollArea>
        )}
      </div>

      <Separator className="my-4" />

      {/* Author Filter */}
      <div>
        <Button
          variant="ghost"
          className="w-full justify-between"
          onClick={() => setIsAuthorExpanded(!isAuthorExpanded)}
        >
          Authors
          {isAuthorExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isAuthorExpanded && (
          <>
            <div className="relative">
              <Search className="absolute left-2 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search authors"
                value={authorSearch}
                onChange={(e) => setAuthorSearch(e.target.value)}
                className="pl-8"
              />
            </div>
            <ScrollArea className="h-40 w-full mt-2">
              {filteredAuthors.map(author => (
                <Button
                  key={author}
                  variant={selectedAuthors.includes(author) ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => toggleAuthor(author)}
                >
                  {author}
                </Button>
              ))}
            </ScrollArea>
          </>
        )}
      </div>
    </>
  )

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Mobile Filter Button */}
      <div className="md:hidden p-4">
        <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] sm:w-[400px]">
            <FilterContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block w-64 bg-gray-100 p-4 overflow-auto">
        <FilterContent />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-auto">
        <h1 className="text-2xl font-bold mb-4">Book Reviews</h1>
        {filteredReviews.length === 0 ? (
          <p>No reviews match the selected filters.</p>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredReviews.map(review => (
              <div key={review.id} className="p-4 bg-white rounded shadow">
                <h2 className="text-xl font-semibold">{review.title}</h2>
                <p className="text-sm text-gray-600">
                  <Book className="inline-block mr-1 h-4 w-4" />
                  {review.author} | {review.genre}
                </p>
                <p className="mt-2">{review.content}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

