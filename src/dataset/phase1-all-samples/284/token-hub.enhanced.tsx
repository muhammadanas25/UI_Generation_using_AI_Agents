"use client"

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { toast, Toaster } from "@/components/ui/toaster"
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Tooltip } from "@/components/ui/tooltip"

const tokenHubABI = [
  "function mint(address to, uint256 amount) public",
  "function balanceOf(address account) public view returns (uint256)",
  "function symbol() public view returns (string)"
]

const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE"

export default function TokenHub() {
  const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null)
  const [signer, setSigner] = useState<ethers.Signer | null>(null)
  const [contract, setContract] = useState<ethers.Contract | null>(null)
  const [address, setAddress] = useState<string>("")
  const [balance, setBalance] = useState<string>("0")
  const [amount, setAmount] = useState<string>("")
  const [symbol, setSymbol] = useState<string>("")

  useEffect(() => {
    const init = async () => {
      if (typeof window.ethereum !== 'undefined') {
        const web3Provider = new ethers.providers.Web3Provider(window.ethereum)
        setProvider(web3Provider)

        const tokenHubContract = new ethers.Contract(contractAddress, tokenHubABI, web3Provider)
        setContract(tokenHubContract)

        const tokenSymbol = await tokenHubContract.symbol()
        setSymbol(tokenSymbol)
      } else {
        toast({
          title: 'MetaMask Not Detected',
          description: 'Please install MetaMask to use TokenHub.',
          variant: 'destructive',
        })
      }
    }

    init()
  }, [])

  const connectWallet = async () => {
    if (provider) {
      try {
        await provider.send("eth_requestAccounts", [])
        const signer = provider.getSigner()
        setSigner(signer)
        const address = await signer.getAddress()
        setAddress(address)
        if (contract) {
          const balance = await contract.balanceOf(address)
          setBalance(ethers.utils.formatEther(balance))
        }
        toast({
          title: 'Wallet Connected',
          description: `Address: ${address}`,
          variant: 'success',
        })
      } catch (error) {
        toast({
          title: 'Connection Failed',
          description: 'Unable to connect wallet.',
          variant: 'destructive',
        })
        console.error(error)
      }
    }
  }

  const mintTokens = async () => {
    if (signer && contract) {
      try {
        const tx = await contract.connect(signer).mint(address, ethers.utils.parseEther(amount))
        toast({
          title: 'Minting Tokens',
          description: 'Please wait while your transaction is being processed.',
          variant: 'default',
        })
        await tx.wait()
        const newBalance = await contract.balanceOf(address)
        setBalance(ethers.utils.formatEther(newBalance))
        setAmount("")
        toast({
          title: 'Tokens Minted',
          description: `Successfully minted ${amount} ${symbol}.`,
          variant: 'success',
        })
      } catch (error) {
        toast({
          title: 'Minting Failed',
          description: 'There was an error minting your tokens.',
          variant: 'destructive',
        })
        console.error("Error minting tokens:", error)
      }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 p-4"
    >
      <Toaster />
      <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-2xl rounded-xl overflow-hidden">
        <CardHeader className="flex flex-col items-center">
          <Image src="/tokenhub-logo.svg" alt="TokenHub Logo" width={100} height={100} className="mb-4" />
          <CardTitle className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">TokenHub</CardTitle>
          <CardDescription className="text-gray-500 dark:text-gray-300">Mint and manage your own tokens</CardDescription>
        </CardHeader>
        <CardContent className="mt-4">
          {!address ? (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Tooltip content="Connect your Ethereum wallet to get started">
                <Button onClick={connectWallet} className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors duration-300">
                  Connect Wallet
                </Button>
              </Tooltip>
            </motion.div>
          ) : (
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex flex-col space-y-2"
              >
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-200">Address:</span>
                  <span className="font-mono text-sm text-gray-900 dark:text-gray-100 truncate max-w-[150px]">
                    {address}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700 dark:text-gray-200">Balance:</span>
                  <span className="text-gray-900 dark:text-gray-100">{balance} {symbol}</span>
                </div>
              </motion.div>
              <div className="space-y-1">
                <Label htmlFor="amount" className="text-gray-700 dark:text-gray-200">Amount to Mint</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="Enter amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="transition-all focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          )}
        </CardContent>
        {address && (
          <CardFooter>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={mintTokens}
                disabled={!address || !amount}
                className="w-full bg-purple-600 hover:bg-purple-700 transition-colors duration-300 disabled:opacity-50"
              >
                Mint Tokens
              </Button>
            </motion.div>
          </CardFooter>
        )}
      </Card>
    </motion.div>
  )
}