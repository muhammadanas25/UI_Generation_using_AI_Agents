import { useState, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, FastForward, Rewind, ThumbsUp, MessageSquare, Share2, Download, Settings } from 'lucide-react'
import { motion } from 'framer-motion'

export default function StreamingPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const videoRef = useRef(null)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play()
      } else {
        videoRef.current.pause()
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="w-full shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-video bg-black">
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      poster="/placeholder.svg?height=400&width=600"
                    >
                      <source src="/placeholder-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 flex flex-col"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                  >
                    <div className="flex items-center justify-between text-white mb-2">
                      <div className="flex space-x-3">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-gray-700 p-2 rounded-full transition-colors duration-200"
                          onClick={togglePlay}
                        >
                          {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-gray-700 p-2 rounded-full transition-colors duration-200"
                        >
                          <Rewind className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-gray-700 p-2 rounded-full transition-colors duration-200"
                        >
                          <FastForward className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="hover:bg-gray-700 p-2 rounded-full transition-colors duration-200"
                        >
                          <Settings className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="flex items-center space-x-2">
                        <ThumbsUp className="h-5 w-5" />
                        <span>45K</span>
                        <MessageSquare className="h-5 w-5" />
                        <span>3.2K</span>
                      </div>
                    </div>
                    <Slider
                      value={[currentTime]}
                      max={100}
                      step={1}
                      className="w-full"
                      onValueChange={(value) => setCurrentTime(value[0])}
                    />
                  </motion.div>
                </div>
              </CardContent>
              <CardHeader className="bg-gray-850">
                <CardTitle className="text-xl">Decentralized Streaming: The Future of Content</CardTitle>
                <CardDescription className="text-sm">By CryptoCreator • 1.2M views • 2 days ago</CardDescription>
              </CardHeader>
              <CardFooter className="flex flex-col lg:flex-row justify-between items-center bg-gray-850 space-y-4 lg:space-y-0">
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 hover:bg-gray-700 transition-colors duration-200">
                    <ThumbsUp className="h-4 w-4" /> <span>45K</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 hover:bg-gray-700 transition-colors duration-200">
                    <MessageSquare className="h-4 w-4" /> <span>3.2K</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 hover:bg-gray-700 transition-colors duration-200">
                    <Share2 className="h-4 w-4" /> <span>Share</span>
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center space-x-2 hover:bg-gray-700 transition-colors duration-200">
                    <Download className="h-4 w-4" /> <span>Download</span>
                  </Button>
                </div>
                <Button className="flex items-center space-x-2 hover:bg-indigo-600 transition-colors duration-200">
                  <span>Tip Creator</span>
                </Button>
              </CardFooter>
            </Card>
            <Card className="mt-6 shadow-lg transform hover:translate-y-[-5px] transition-transform duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/user1.jpg" alt="@user1" />
                      <AvatarFallback>U1</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">UserOne</p>
                      <p className="text-sm">Great video! Really enjoyed the insights.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/user2.jpg" alt="@user2" />
                      <AvatarFallback>U2</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold">UserTwo</p>
                      <p className="text-sm">Looking forward to more content like this.</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/current-user.jpg" alt="@currentuser" />
                      <AvatarFallback>CU</AvatarFallback>
                    </Avatar>
                    <Input placeholder="Add a comment..." className="bg-gray-700 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle>Creator Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <Avatar className="h-14 w-14">
                    <AvatarImage src="/placeholder-user.jpg" alt="@cryptocreator" />
                    <AvatarFallback>CC</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-md font-medium">CryptoCreator</p>
                    <p className="text-xs text-muted-foreground">500K followers</p>
                  </div>
                </div>
                <Button className="w-full mt-4 hover:bg-indigo-600 transition-colors duration-200">Follow</Button>
              </CardContent>
            </Card>
            <Card className="shadow-lg transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle>Token Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">1,250 STREAM</p>
                <p className="text-sm text-muted-foreground">≈ $125.00 USD</p>
                <div className="mt-4 space-y-2">
                  <Button className="w-full hover:bg-green-600 transition-colors duration-200">Buy Tokens</Button>
                  <Button variant="outline" className="w-full hover:bg-red-600 transition-colors duration-200">Withdraw</Button>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-lg transform hover:scale-105 transition-transform duration-300">
              <CardHeader>
                <CardTitle>Related Creators</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/creator1.jpg" alt="@creator1" />
                      <AvatarFallback>C1</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">CreatorOne</p>
                      <p className="text-xs text-muted-foreground">300K followers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/creator2.jpg" alt="@creator2" />
                      <AvatarFallback>C2</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">CreatorTwo</p>
                      <p className="text-xs text-muted-foreground">450K followers</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/creator3.jpg" alt="@creator3" />
                      <AvatarFallback>C3</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">CreatorThree</p>
                      <p className="text-xs text-muted-foreground">600K followers</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}