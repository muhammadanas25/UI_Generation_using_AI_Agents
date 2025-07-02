import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, FastForward, Rewind, ThumbsUp, MessageSquare, Share2 } from 'lucide-react'

export default function StreamingPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)

  const togglePlay = () => setIsPlaying(!isPlaying)

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Card className="w-full">
            <CardContent className="p-0">
              <div className="aspect-video bg-black relative">
                <video className="w-full h-full" poster="/placeholder.svg?height=400&width=600">
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <div className="flex items-center justify-between text-white">
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" onClick={togglePlay}>
                        {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Rewind className="h-6 w-6" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <FastForward className="h-6 w-6" />
                      </Button>
                    </div>
                    <Slider
                      value={[currentTime]}
                      max={100}
                      step={1}
                      className="w-full max-w-xs"
                      onValueChange={(value) => setCurrentTime(value[0])}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardHeader>
              <CardTitle>Decentralized Streaming: The Future of Content</CardTitle>
              <CardDescription>By CryptoCreator • 1.2M views • 2 days ago</CardDescription>
            </CardHeader>
            <CardFooter className="flex justify-between">
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <ThumbsUp className="mr-2 h-4 w-4" /> 45K
                </Button>
                <Button variant="outline" size="sm">
                  <MessageSquare className="mr-2 h-4 w-4" /> 3.2K
                </Button>
                <Button variant="outline" size="sm">
                  <Share2 className="mr-2 h-4 w-4" /> Share
                </Button>
              </div>
              <Button>Tip Creator</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Creator Info</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder-user.jpg" alt="@cryptocreator" />
                  <AvatarFallback>CC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">CryptoCreator</p>
                  <p className="text-xs text-muted-foreground">500K followers</p>
                </div>
              </div>
              <Button className="w-full mt-4">Follow</Button>
            </CardContent>
          </Card>
          <Card className="mt-4">
            <CardHeader>
              <CardTitle>Token Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">1,250 STREAM</p>
              <p className="text-sm text-muted-foreground">≈ $125.00 USD</p>
              <div className="mt-4 space-y-2">
                <Button className="w-full">Buy Tokens</Button>
                <Button variant="outline" className="w-full">Withdraw</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}