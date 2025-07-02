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
import { CoinIcon, ImageIcon } from "lucide-react"

export default function Component() {
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
        <Button variant="outline">Mint NFT</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Mint NFT</DialogTitle>
          <DialogDescription>
            Mint your unique NFT. Please review the details before confirming.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleMint}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="Awesome NFT"
                className="col-span-3"
                readOnly
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input
                id="description"
                defaultValue="A unique piece of digital art"
                className="col-span-3"
                readOnly
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Preview</Label>
              <div className="col-span-3 flex items-center justify-center bg-secondary p-2 rounded-md">
                <ImageIcon className="h-20 w-20 text-muted-foreground" />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="fee" className="text-right">
                Minting Fee
              </Label>
              <div className="col-span-3 flex items-center">
                <CoinIcon className="mr-2 h-4 w-4 text-muted-foreground" />
                <Input id="fee" defaultValue="0.05 ETH" className="w-24" readOnly />
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="supply" className="text-right">
                Supply
              </Label>
              <Input
                id="supply"
                defaultValue="1 of 100"
                className="col-span-3"
                readOnly
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" disabled={isMinting}>
              {isMinting ? "Minting..." : "Confirm & Mint"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}