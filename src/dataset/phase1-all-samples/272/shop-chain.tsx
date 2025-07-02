"use client"

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Check, X } from "lucide-react"

// This would be your actual smart contract ABI
const CONTRACT_ABI = [
  "function verifyProduct(uint256 tokenId) public view returns (bool)"
]
const CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890" // Replace with your actual contract address

export default function ShopChain() {
  const [wallet, setWallet] = useState(null)
  const [provider, setProvider] = useState(null)
  const [verified, setVerified] = useState(false)

  useEffect(() => {
    const initProvider = async () => {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        setProvider(provider)
      }
    }
    initProvider()
  }, [])

  const connectWallet = async () => {
    if (provider) {
      try {
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        const address = await signer.getAddress()
        setWallet(address)
      } catch (error) {
        console.error("Failed to connect wallet:", error)
      }
    }
  }

  const verifyProduct = async () => {
    if (provider && wallet) {
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider)
      try {
        const result = await contract.verifyProduct(1) // Assuming token ID 1 for this example
        setVerified(result)
      } catch (error) {
        console.error("Failed to verify product:", error)
      }
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">ShopChain: Decentralized Ecommerce</h1>
      
      {!wallet ? (
        <Button onClick={connectWallet}>Connect Wallet</Button>
      ) : (
        <p className="mb-4">Connected Wallet: {wallet}</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Authentic Designer Handbag</CardTitle>
            <CardDescription>Limited Edition NFT-Verified Product</CardDescription>
          </CardHeader>
          <CardContent>
            <img src="/placeholder.svg?height=200&width=300" alt="Designer Handbag" className="w-full h-48 object-cover mb-4" />
            <p className="text-2xl font-bold mb-2">0.5 ETH</p>
            <Badge variant="secondary" className="mb-2">Limited Edition</Badge>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={verifyProduct} disabled={!wallet}>
              Verify Authenticity
            </Button>
            <Button>
              <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
            </Button>
          </CardFooter>
          {verified !== null && (
            <div className={`p-4 ${verified ? 'bg-green-100' : 'bg-red-100'} flex items-center justify-center`}>
              {verified ? (
                <>
                  <Check className="text-green-500 mr-2" />
                  <span className="text-green-700">Product Verified</span>
                </>
              ) : (
                <>
                  <X className="text-red-500 mr-2" />
                  <span className="text-red-700">Product Not Verified</span>
                </>
              )}
            </div>
          )}
        </Card>
      </div>
    </div>
  )
}