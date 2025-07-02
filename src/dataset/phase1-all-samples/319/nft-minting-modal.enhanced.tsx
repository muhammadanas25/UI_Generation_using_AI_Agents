"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CoinIcon, ImageIcon, XIcon } from "lucide-react"
import { Card, CardHeader, CardBody, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function MintNFTModal() {
  const [isMinting, setIsMinting] = useState(false)

  const handleMint = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsMinting(true)
    // Simulate minting process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsMinting(false)
    // Here you would typically call your minting function
    console.log("NFT minted!")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="hover:bg-primary hover:text-white transition-colors duration-200">
          Mint NFT
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-6 rounded-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <DialogHeader className="flex justify-between items-center">
            <div>
              <DialogTitle className="text-2xl font-bold">Mint NFT</DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground">
                Mint your unique NFT. Review the details before confirming.
              </DialogDescription>
            </div>
            <DialogTrigger asChild>
              <Button variant="ghost" className="p-1 hover:bg-gray-200 rounded-full">
                <XIcon className="h-5 w-5" />
              </Button>
            </DialogTrigger>
          </DialogHeader>
          <Card className="mt-4">
            <CardHeader className="flex justify-center">
              <div className="relative w-24 h-24">
                <ImageIcon className="absolute inset-0 w-full h-full text-muted-foreground" />
                {/* Replace with actual image preview */}
              </div>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleMint} className="space-y-4">
                <div className="flex flex-col md:flex-row items-center">
                  <Label htmlFor="name" className="w-full md:w-1/3 text-right pr-4">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Awesome NFT"
                    className="w-full md:w-2/3"
                    readOnly
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <Label htmlFor="description" className="w-full md:w-1/3 text-right pr-4">
                    Description
                  </Label>
                  <Input
                    id="description"
                    defaultValue="A unique piece of digital art"
                    className="w-full md:w-2/3"
                    readOnly
                  />
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <Label className="w-full md:w-1/3 text-right pr-4">Preview</Label>
                  <div className="w-full md:w-2/3 flex items-center justify-center bg-secondary p-4 rounded-md transition-transform transform hover:scale-105">
                    <ImageIcon className="h-20 w-20 text-muted-foreground" />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <Label htmlFor="fee" className="w-full md:w-1/3 text-right pr-4">
                    Minting Fee
                  </Label>
                  <div className="w-full md:w-2/3 flex items-center">
                    <CoinIcon className="mr-2 h-5 w-5 text-muted-foreground" />
                    <Input id="fee" defaultValue="0.05 ETH" className="w-24" readOnly />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row items-center">
                  <Label htmlFor="supply" className="w-full md:w-1/3 text-right pr-4">
                    Supply
                  </Label>
                  <Input
                    id="supply"
                    defaultValue="1 of 100"
                    className="w-full md:w-2/3"
                    readOnly
                  />
                </div>
                <CardFooter className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={isMinting}
                    className={`w-full md:w-auto ${
                      isMinting ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-primary-dark"
                    } transition-colors duration-200`}
                  >
                    {isMinting ? "Minting..." : "Confirm & Mint"}
                  </Button>
                </CardFooter>
              </form>
            </CardBody>
          </Card>
        </motion.div>
      </DialogContent>
    </Dialog>
  )
}