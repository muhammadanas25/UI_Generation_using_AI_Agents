import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(100)

  const togglePlay = () => setIsPlaying(!isPlaying)

  return (
    <div className="w-full max-w-md mx-auto bg-background shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="w-16 h-16 sm:w-20 sm:h-20">
            <AvatarImage src="/placeholder.svg?height=80&width=80" alt="Album cover" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg sm:text-2xl font-bold">Song Title</h2>
            <p className="text-sm sm:text-base text-muted-foreground">Artist Name</p>
          </div>
        </div>
        <Slider
          className="mt-4"
          value={[currentTime]}
          max={100}
          step={1}
          onValueChange={(value) => setCurrentTime(value[0])}
        />
        <div className="flex justify-between text-sm mt-1">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(100)}</span>
        </div>
        <div className="flex items-center justify-center space-x-4 mt-4">
          <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
            <SkipBack className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Button variant="outline" size="icon" className="h-10 w-10 sm:h-12 sm:w-12" onClick={togglePlay}>
            {isPlaying ? <Pause className="h-5 w-5 sm:h-6 sm:w-6" /> : <Play className="h-5 w-5 sm:h-6 sm:w-6" />}
          </Button>
          <Button variant="outline" size="icon" className="h-8 w-8 sm:h-10 sm:w-10">
            <SkipForward className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-2 mt-4">
          <Volume2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
          <Slider
            className="w-full"
            value={[volume]}
            max={100}
            step={1}
            onValueChange={(value) => setVolume(value[0])}
          />
        </div>
      </div>
      <div className="bg-muted p-4">
        <Button className="w-full text-sm sm:text-base py-2 sm:py-3" variant="outline">
          Tip Artist 5 TuneX Tokens
        </Button>
      </div>
    </div>
  )
}

function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

