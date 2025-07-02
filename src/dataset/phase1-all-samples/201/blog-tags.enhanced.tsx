"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { AnimatePresence, motion } from "framer-motion"
import { SearchIcon, XIcon } from "lucide-react"

interface Tag {
  id: string
  name: string
  count: number
}

const tags: Tag[] = [
  { id: "1", name: "Data Analysis", count: 15 },
  { id: "2", name: "Machine Learning", count: 12 },
  { id: "3", name: "Visualization", count: 10 },
  { id: "4", name: "Big Data", count: 8 },
  { id: "5", name: "AI", count: 7 },
  { id: "6", name: "Statistics", count: 6 },
  { id: "7", name: "Python", count: 5 },
  { id: "8", name: "R", count: 4 },
  { id: "9", name: "Data Mining", count: 3 },
  { id: "10", name: "Deep Learning", count: 3 },
]

export default function BlogTags() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleTag = (tagId: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tagId)
        ? prevTags.filter((id) => id !== tagId)
        : [...prevTags, tagId]
    )
  }

  const clearAll = () => {
    setSelectedTags([])
  }

  const filteredTags = tags.filter((tag) =>
    tag.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <section className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800 dark:text-gray-100">Popular Tags</h2>
      
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 space-y-4 sm:space-y-0">
        <div className="relative w-full sm:w-1/2">
          <Input
            placeholder="Search tags..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pr-10"
          />
          <SearchIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        {selectedTags.length > 0 && (
          <Button variant="destructive" size="icon" onClick={clearAll} className="flex items-center">
            <XIcon className="w-4 h-4" />
            <span className="ml-2">Clear All</span>
          </Button>
        )}
      </div>

      <ScrollArea className="w-full rounded-md border border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2 p-4">
          <AnimatePresence initial={false}>
            {filteredTags.map((tag) => (
              <Tooltip key={tag.id} trigger="hover">
                <TooltipTrigger>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Badge
                      variant={selectedTags.includes(tag.id) ? "default" : "secondary"}
                      className={`cursor-pointer transition-colors duration-200 ${
                        selectedTags.includes(tag.id)
                          ? "bg-blue-600 text-white hover:bg-blue-700"
                          : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600"
                      }`}
                      onClick={() => toggleTag(tag.id)}
                    >
                      {tag.name} ({tag.count})
                    </Badge>
                  </motion.div>
                </TooltipTrigger>
                <TooltipContent>
                  <span>{tag.name} related posts: {tag.count}</span>
                </TooltipContent>
              </Tooltip>
            ))}
          </AnimatePresence>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <motion.div
        className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-md transition-colors duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: selectedTags.length > 0 ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-200">Selected Tags:</h3>
        <div className="flex flex-wrap gap-2">
          {selectedTags.length > 0 ? (
            selectedTags.map((tagId) => {
              const tag = tags.find((t) => t.id === tagId)
              return tag ? (
                <Badge key={tag.id} variant="primary" className="bg-blue-500 text-white">
                  {tag.name}
                </Badge>
              ) : null
            })
          ) : (
            <p className="text-gray-500 dark:text-gray-400">No tags selected</p>
          )}
        </div>
      </motion.div>
    </section>
  )
}