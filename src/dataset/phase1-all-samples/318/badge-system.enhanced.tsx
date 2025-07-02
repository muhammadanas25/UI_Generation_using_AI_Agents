"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Trophy, Medal, Star, Zap, Flame } from "lucide-react"
import { motion } from "framer-motion"

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
  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
    <Button
      variant="outline"
      className="h-20 w-20 rounded-full p-0 hover:bg-accent transition-transform duration-200"
      onClick={() => onClick(badge)}
    >
      <BadgeIcon icon={badge.icon} className="h-10 w-10 text-primary" />
      <span className="sr-only">{badge.name}</span>
    </Button>
  </motion.div>
)

const BadgeDetails = ({ badge }) => (
  <div className="flex flex-col items-center space-y-4 text-center">
    <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity }}>
      <BadgeIcon icon={badge.icon} className="h-16 w-16 text-primary" />
    </motion.div>
    <h3 className="text-2xl font-semibold">{badge.name}</h3>
    <Badge variant="secondary" className="px-4 py-1 text-sm">{badge.rarity}</Badge>
    <p className="text-md text-muted-foreground">{badge.description}</p>
    <Button variant="ghost" className="mt-4">Claim Reward</Button>
  </div>
)

export default function Component() {
  const [selectedBadge, setSelectedBadge] = useState(null)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Card className="w-full max-w-3xl mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-xl rounded-3xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Avatar className="h-24 w-24 border-4 border-white shadow-lg">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="User avatar" />
              <AvatarFallback>UN</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle className="text-white text-3xl">CryptoGamer2023</CardTitle>
          <CardDescription className="text-white text-lg">Level 42 | 1337 XP</CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-semibold mb-6 text-center text-white">🎖 NFT Achievements</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {badges.map((badge) => (
              <Dialog key={badge.id}>
                <DialogTrigger asChild>
                  <NFTBadge badge={badge} onClick={setSelectedBadge} />
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white rounded-xl p-6">
                  <DialogHeader>
                    <DialogTitle className="text-2xl">Badge Details</DialogTitle>
                    <DialogDescription className="text-gray-700">NFT Achievement Information</DialogDescription>
                  </DialogHeader>
                  {selectedBadge && <BadgeDetails badge={selectedBadge} />}
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}