"use client"

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

// ABI for the TokenHub contract (this should be generated from your Solidity contract)
const tokenHubABI = [
  "function mint(address to, uint256 amount) public",
  "function balanceOf(address account) public view returns (uint256)",
  "function symbol() public view returns (string)"
]

const contractAddress = "YOUR_CONTRACT_ADDRESS_HERE" // Replace with your deployed contract address

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
        console.log('Please install MetaMask!')
      }
    }

    init()
  }, [])

  const connectWallet = async () => {
    if (provider) {
      await provider.send("eth_requestAccounts", [])
      const signer = provider.getSigner()
      setSigner(signer)
      const address = await signer.getAddress()
      setAddress(address)
      if (contract) {
        const balance = await contract.balanceOf(address)
        setBalance(ethers.utils.formatEther(balance))
      }
    }
  }

  const mintTokens = async () => {
    if (signer && contract) {
      try {
        const tx = await contract.connect(signer).mint(address, ethers.utils.parseEther(amount))
        await tx.wait()
        const newBalance = await contract.balanceOf(address)
        setBalance(ethers.utils.formatEther(newBalance))
        setAmount("")
      } catch (error) {
        console.error("Error minting tokens:", error)
      }
    }
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>TokenHub</CardTitle>
        <CardDescription>Mint and manage your own tokens</CardDescription>
      </CardHeader>
      <CardContent>
        {!address ? (
          <Button onClick={connectWallet} className="w-full">Connect Wallet</Button>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Address:</span>
              <span className="font-mono text-sm truncate">{address}</span>
            </div>
            <div className="flex justify-between">
              <span>Balance:</span>
              <span>{balance} {symbol}</span>
            </div>
            <div className="space-y-2">
              <Label htmlFor="amount">Amount to Mint</Label>
              <Input
                id="amount"
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={mintTokens} disabled={!address || !amount} className="w-full">
          Mint Tokens
        </Button>
      </CardFooter>
    </Card>
  )
}