"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Star, Zap, Flame } from "lucide-react"

// Mock data for NFT badges
const badges = [
  { id: 1, name: "Early Adopter", icon: Star, description: "One of the first 1000 users on the platform", rarity: "Legendary" },
  { id: 2, name: "Champion", icon: Trophy, description: "Won a major tournament", rarity: "Epic" },
  { id: 3, name: "Streak Master", icon: Flame, description: "Maintained a 30-day login streak", rarity: "Rare" },
  { id: 4, name: "Power Player", icon: Zap, description: "Reached level 50 in any game", rarity: "Uncommon" },
  { id: 5, name: "Collector", icon: Medal, description: "Collected 100 unique items across all games", rarity: "Common" },
]

const BadgeIcon = ({ icon: Icon, ...props }) => <Icon {...props} />

const NFTBadge = ({ badge, onClick }) => (
  <Button
    variant="outline"
    className="h-20 w-20 rounded-full p-0 hover:bg-accent"
    onClick={() => onClick(badge)}
  >
    <BadgeIcon icon={badge.icon} className="h-10 w-10" />
    <span className="sr-only">{badge.name}</span>
  </Button>
)

const BadgeDetails = ({ badge }) => (
  <div className="flex flex-col items-center space-y-2 text-center">
    <BadgeIcon icon={badge.icon} className="h-16 w-16 text-primary" />
    <h3 className="text-lg font-semibold">{badge.name}</h3>
    <Badge variant="secondary">{badge.rarity}</Badge>
    <p className="text-sm text-muted-foreground">{badge.description}</p>
  </div>
)

export default function Component() {
  const [selectedBadge, setSelectedBadge] = useState(null)

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader className="text-center">
        <div className="flex justify-center mb-4">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User avatar" />
            <AvatarFallback>UN</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle>CryptoGamer2023</CardTitle>
        <CardDescription>Level 42 | 1337 XP</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-xl font-semibold mb-4 text-center">NFT Achievements</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {badges.map((badge) => (
            <Dialog key={badge.id}>
              <DialogTrigger asChild>
                <NFTBadge badge={badge} onClick={setSelectedBadge} />
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Badge Details</DialogTitle>
                  <DialogDescription>NFT Achievement Information</DialogDescription>
                </DialogHeader>
                {selectedBadge && <BadgeDetails badge={selectedBadge} />}
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}