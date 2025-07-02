"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Volume2, VolumeX, SkipBack, SkipForward, Play, Pause } from "lucide-react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  const currentTrack = {
    title: "Neon Lights",
    artist: "The Electron Band",
    album: "Digital Dreams",
    artwork: "/placeholder.svg?height=400&width=400",
    audioSrc: "/path-to-audio-file.mp3" // Replace with actual audio file path
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener('loadedmetadata', () => {
        setDuration(audioRef.current!.duration)
      })
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current!.currentTime)
      })
    }
  }, [])

  const togglePlayPause = () => {
    if (audioRef.current!.paused) {
      audioRef.current!.play()
      setIsPlaying(true)
    } else {
      audioRef.current!.pause()
      setIsPlaying(false)
    }
  }

  const handleVolumeChange = (newVolume: number[]) => {
    const volumeValue = newVolume[0]
    setVolume(volumeValue)
    audioRef.current!.volume = volumeValue
    setIsMuted(volumeValue === 0)
  }

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current!.volume = volume
      setIsMuted(false)
    } else {
      audioRef.current!.volume = 0
      setIsMuted(true)
    }
  }

  const handleSeek = (newTime: number[]) => {
    const timeValue = newTime[0]
    audioRef.current!.currentTime = timeValue
    setCurrentTime(timeValue)
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="w-full max-w-md mx-auto bg-background shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <img
          src={currentTrack.artwork}
          alt={`${currentTrack.album} cover`}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-2xl font-bold mb-1">{currentTrack.title}</h2>
        <p className="text-muted-foreground mb-4">{currentTrack.artist} - {currentTrack.album}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm">{formatTime(currentTime)}</span>
          <Slider
            max={duration}
            value={[currentTime]}
            onValueChange={handleSeek}
            className="w-[70%]"
            aria-label="Seek time"
          />
          <span className="text-sm">{formatTime(duration)}</span>
        </div>
        <div className="flex justify-between items-center mb-4">
          <Button variant="ghost" size="icon" aria-label="Previous track">
            <SkipBack className="h-6 w-6" />
          </Button>
          <Button onClick={togglePlayPause} variant="default" size="icon" className="h-12 w-12" aria-label={isPlaying ? "Pause" : "Play"}>
            {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
          </Button>
          <Button variant="ghost" size="icon" aria-label="Next track">
            <SkipForward className="h-6 w-6" />
          </Button>
        </div>
        <div className="flex items-center">
          <Button variant="ghost" size="icon" onClick={toggleMute} aria-label={isMuted ? "Unmute" : "Mute"}>
            {isMuted ? <VolumeX className="h-6 w-6" /> : <Volume2 className="h-6 w-6" />}
          </Button>
          <Slider
            max={1}
            step={0.01}
            value={[isMuted ? 0 : volume]}
            onValueChange={handleVolumeChange}
            className="w-[70%]"
            aria-label="Adjust volume"
          />
        </div>
      </div>
      <audio ref={audioRef} src={currentTrack.audioSrc} />
    </div>
  )
}