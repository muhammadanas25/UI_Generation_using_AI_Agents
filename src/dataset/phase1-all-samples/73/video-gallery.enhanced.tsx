import Image from "next/image"
import { Play, Search, ChevronDown, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { useState } from "react"

export default function VideoGallery() {
  const [searchQuery, setSearchQuery] = useState("")
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-6 sm:py-8">
      <div className="flex flex-col items-center mb-6 space-y-4 sm:space-y-0 sm:flex-row sm:justify-between">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-500 text-center sm:text-left">
          FrameByFrame: Behind the Scenes
        </h2>
        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
          <Input
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full sm:w-64"
            icon={<Search className="h-5 w-5 text-gray-400" />}
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center w-full sm:w-auto justify-center">
                Sort By <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Most Popular</DropdownMenuItem>
              <DropdownMenuItem>Newest</DropdownMenuItem>
              <DropdownMenuItem>Trending</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {filteredVideos.map((video, index) => (
          <Card key={index} className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <Image
              src={video.thumbnail}
              alt={video.title}
              width={300}
              height={169}
              className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button variant="secondary" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                <Play className="h-4 w-4 sm:h-6 sm:w-6 text-amber-500" />
                <span className="sr-only">Play video</span>
              </Button>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black to-transparent">
              <h3 className="text-white font-semibold mb-1 text-sm sm:text-base line-clamp-1">{video.title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-gray-300 text-xs sm:text-sm">{video.views} views</p>
                <button className="text-gray-300 hover:text-amber-500 transition-colors">
                  <Heart className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="sr-only">Like video</span>
                </button>
              </div>
            </div>
            <span className="absolute top-2 right-2 bg-amber-500 text-black text-xs font-bold px-2 py-1 rounded">NEW</span>
          </Card>
        ))}
      </div>
    </div>
  )
}

const videos = [
  {
    title: "Behind the Scenes: Lighting Setup",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "24K",
  },
  {
    title: "Director's Commentary: Opening Scene",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "18K",
  },
  {
    title: "Special Effects Breakdown",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "32K",
  },
  {
    title: "Actor Interview: Getting into Character",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "15K",
  },
  {
    title: "Costume Design Process",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "21K",
  },
  {
    title: "Storyboard to Screen Comparison",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "28K",
  },
  {
    title: "On-Location Filming Challenges",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "19K",
  },
  {
    title: "Sound Design: Creating Atmosphere",
    thumbnail: "/placeholder.svg?height=169&width=300",
    views: "22K",
  },
]

