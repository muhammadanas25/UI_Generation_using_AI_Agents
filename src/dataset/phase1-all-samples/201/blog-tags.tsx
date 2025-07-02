"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

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

  const toggleTag = (tagId: string) => {
    setSelectedTags((prevTags) =>
      prevTags.includes(tagId)
        ? prevTags.filter((id) => id !== tagId)
        : [...prevTags, tagId]
    )
  }

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Popular Tags</h2>
      <ScrollArea className="w-full rounded-md border">
        <div className="flex flex-wrap gap-2 p-3 sm:p-4">
          {tags.map((tag) => (
            <Badge
              key={tag.id}
              variant={selectedTags.includes(tag.id) ? "default" : "secondary"}
              className="cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground text-sm sm:text-base"
              onClick={() => toggleTag(tag.id)}
            >
              {tag.name} ({tag.count})
            </Badge>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="mt-3 sm:mt-4">
        <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">Selected Tags:</h3>
        <p className="text-sm sm:text-base text-muted-foreground">
          {selectedTags.length > 0
            ? tags
              .filter((tag) => selectedTags.includes(tag.id))
              .map((tag) => tag.name)
              .join(", ")
            : "No tags selected"}
        </p>
      </div>
    </section>
  )
}

