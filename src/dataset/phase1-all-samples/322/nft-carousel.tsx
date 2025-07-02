import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Badge } from "@/components/ui/badge"
import { EthereumIcon } from "lucide-react"

// Mock data for NFT collections
const nftCollections = [
  {
    id: 1,
    name: "Bored Ape Yacht Club",
    creator: "Yuga Labs",
    floorPrice: 30.5,
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    id: 2,
    name: "CryptoPunks",
    creator: "Larva Labs",
    floorPrice: 50.2,
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    id: 3,
    name: "Doodles",
    creator: "Doodles",
    floorPrice: 5.8,
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    id: 4,
    name: "Azuki",
    creator: "Chiru Labs",
    floorPrice: 15.3,
    image: "/placeholder.svg?height=400&width=400"
  },
  {
    id: 5,
    name: "Art Blocks",
    creator: "Art Blocks",
    floorPrice: 0.25,
    image: "/placeholder.svg?height=400&width=400"
  }
]

export default function Component() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Top NFT Collections</h2>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
        onSelect={(index) => setActiveIndex(index)}
      >
        <CarouselContent>
          {nftCollections.map((collection, index) => (
            <CarouselItem key={collection.id} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-48 object-cover"
                      />
                      <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">
                        #{index + 1}
                      </Badge>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-lg mb-1">{collection.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">by {collection.creator}</p>
                      <div className="flex items-center">
                        <EthereumIcon className="w-4 h-4 mr-1" />
                        <span className="font-medium">{collection.floorPrice} ETH</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center mt-4">
        {nftCollections.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === activeIndex ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  )
}