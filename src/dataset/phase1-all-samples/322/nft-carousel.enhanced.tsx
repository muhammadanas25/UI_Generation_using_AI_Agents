import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { EthereumIcon, HeartIcon, ArrowRightIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

// Mock data for NFT collections
const nftCollections = [
  {
    id: 1,
    name: "Bored Ape Yacht Club",
    creator: "Yuga Labs",
    floorPrice: 30.5,
    image: "/placeholder.svg?height=400&width=400",
    likes: 1200,
    volume: 5000
  },
  {
    id: 2,
    name: "CryptoPunks",
    creator: "Larva Labs",
    floorPrice: 50.2,
    image: "/placeholder.svg?height=400&width=400",
    likes: 1500,
    volume: 7500
  },
  {
    id: 3,
    name: "Doodles",
    creator: "Doodles",
    floorPrice: 5.8,
    image: "/placeholder.svg?height=400&width=400",
    likes: 800,
    volume: 3000
  },
  {
    id: 4,
    name: "Azuki",
    creator: "Chiru Labs",
    floorPrice: 15.3,
    image: "/placeholder.svg?height=400&width=400",
    likes: 950,
    volume: 4200
  },
  {
    id: 5,
    name: "Art Blocks",
    creator: "Art Blocks",
    floorPrice: 0.25,
    image: "/placeholder.svg?height=400&width=400",
    likes: 600,
    volume: 2500
  }
]

export default function Component() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800 dark:text-gray-100">Top NFT Collections</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        onSelect={(index) => setActiveIndex(index)}
      >
        <CarouselContent className="flex space-x-4 overflow-hidden">
          {nftCollections.map((collection, index) => (
            <CarouselItem key={collection.id} className="relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105 duration-300">
              <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="relative">
                    <Image
                      src={collection.image}
                      alt={collection.name}
                      width={400}
                      height={400}
                      className="w-full h-64 object-cover"
                      placeholder="blur"
                      blurDataURL="/placeholder.svg"
                    />
                    <Badge className="absolute top-2 left-2 bg-primary text-primary-foreground">
                      #{index + 1}
                    </Badge>
                    <div className="absolute bottom-2 left-2 flex space-x-2">
                      <Button variant="ghost" size="icon" className="p-2 bg-black bg-opacity-50 text-white hover:bg-opacity-70">
                        <HeartIcon className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="p-2 bg-black bg-opacity-50 text-white hover:bg-opacity-70">
                        <ArrowRightIcon className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-800">
                    <h3 className="font-semibold text-xl text-gray-800 dark:text-gray-100 mb-1">{collection.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">by {collection.creator}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <EthereumIcon className="w-5 h-5 text-gray-700 dark:text-gray-300 mr-1" />
                        <span className="font-medium text-gray-700 dark:text-gray-300">{collection.floorPrice} ETH</span>
                      </div>
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <HeartIcon className="w-4 h-4 mr-1" />
                        <span>{collection.likes}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Button variant="default" className="w-full flex items-center justify-center">
                        View Collection
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
          &#10094;
        </CarouselPrevious>
        <CarouselNext className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors">
          &#10095;
        </CarouselNext>
      </Carousel>
      <div className="flex justify-center mt-6 space-x-2">
        {nftCollections.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full transition-colors duration-300 ${
              index === activeIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  )
}