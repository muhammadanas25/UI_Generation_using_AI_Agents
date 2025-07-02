"use client"

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Check, X } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Tooltip } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

// This would be your actual smart contract ABI
const CONTRACT_ABI = [
  "function verifyProduct(uint256 tokenId) public view returns (bool)"
]
const CONTRACT_ADDRESS = "0x1234567890123456789012345678901234567890" // Replace with your actual contract address

export default function ShopChain() {
  const [wallet, setWallet] = useState(null)
  const [provider, setProvider] = useState(null)
  const [verified, setVerified] = useState(null)
  const [tokenId, setTokenId] = useState(1)
  const [cart, setCart] = useState([])

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
        const result = await contract.verifyProduct(tokenId)
        setVerified(result)
      } catch (error) {
        console.error("Failed to verify product:", error)
        setVerified(false)
      }
    }
  }

  const addToCart = () => {
    setCart([...cart, { id: tokenId, name: "Authentic Designer Handbag", price: "0.5 ETH" }])
  }

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300">
      <header className="bg-white shadow-md">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-indigo-600">ShopChain</h1>
          <div className="flex items-center space-x-4">
            {wallet ? (
              <Tooltip content="Wallet Connected">
                <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  {wallet.substring(0, 6)}...{wallet.substring(wallet.length - 4)}
                </span>
              </Tooltip>
            ) : (
              <Button variant="primary" onClick={connectWallet} className="animate-pulse">
                Connect Wallet
              </Button>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl font-extrabold text-indigo-700">Decentralized Ecommerce Platform</h2>
          <p className="mt-4 text-lg text-gray-700">Verify the authenticity of products using NFTs.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <Card className="shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle>Authentic Designer Handbag</CardTitle>
                <CardDescription>Limited Edition NFT-Verified Product</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="/handbag.png" alt="Designer Handbag" className="w-full h-48 object-cover rounded-lg mb-4" />
                <p className="text-2xl font-bold mb-2">0.5 ETH</p>
                <Badge variant="secondary" className="mb-2">Limited Edition</Badge>
                <Input 
                  type="number" 
                  min="1" 
                  value={tokenId} 
                  onChange={(e) => setTokenId(e.target.value)} 
                  className="mt-2" 
                  placeholder="Enter Token ID" 
                />
              </CardContent>
              <CardFooter className="flex flex-col space-y-2">
                <Button onClick={verifyProduct} disabled={!wallet} className="w-full">
                  Verify Authenticity
                </Button>
                <Button onClick={addToCart} className="w-full flex justify-center items-center">
                  <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                </Button>
              </CardFooter>
              {verified !== null && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`p-4 mt-4 rounded-lg flex items-center justify-center ${
                    verified ? 'bg-green-100' : 'bg-red-100'
                  }`}
                >
                  {verified ? (
                    <>
                      <Check className="text-green-500 mr-2" />
                      <span className="text-green-700 font-semibold">Product Verified</span>
                    </>
                  ) : (
                    <>
                      <X className="text-red-500 mr-2" />
                      <span className="text-red-700 font-semibold">Product Not Verified</span>
                    </>
                  )}
                </motion.div>
              )}
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-4">Your Cart</h3>
          {cart.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item, index) => (
                <Card key={index} className="flex justify-between items-center p-4">
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-gray-500">{item.price}</p>
                  </div>
                  <Button variant="destructive" size="sm">
                    Remove
                  </Button>
                </Card>
              ))}
              <Button className="w-full">Checkout</Button>
            </div>
          )}
        </motion.div>
      </main>

      <footer className="bg-white shadow-inner">
        <div className="container mx-auto p-4 text-center text-gray-600">
          &copy; {new Date().getFullYear()} ShopChain. All rights reserved.
        </div>
      </footer>
    </div>
  )
}