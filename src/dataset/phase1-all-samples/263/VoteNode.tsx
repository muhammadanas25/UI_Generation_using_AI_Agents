"use client"

import { useState, useEffect } from "react"
import { useAccount, useContractRead, useContractWrite } from "wagmi"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ConnectButton } from "@rainbow-me/rainbowkit"

// Mock data for demonstration purposes
const proposals = [
  { id: 1, title: "Increase Staking Rewards", description: "Proposal to increase staking rewards by 2% for all token holders." },
  { id: 2, title: "Add New Governance Parameter", description: "Introduce a new parameter for adjusting the voting period length." },
  { id: 3, title: "Fund Community Development", description: "Allocate 100,000 tokens to fund community-driven development projects." },
]

export default function VoteNode() {
  const [selectedProposal, setSelectedProposal] = useState(null)
  const { address, isConnected } = useAccount()
  const [votingPower, setVotingPower] = useState(0)

  // Mock contract interactions
  const { data: votingResults } = useContractRead({
    address: "0x...",
    abi: [],
    functionName: "getVotingResults",
  })

  const { write: castVote } = useContractWrite({
    address: "0x...",
    abi: [],
    functionName: "castVote",
  })

  useEffect(() => {
    if (isConnected) {
      // Fetch voting power when connected
      setVotingPower(1000) // Mock value
    }
  }, [isConnected])

  const handleVote = (support) => {
    if (selectedProposal) {
      castVote({ args: [selectedProposal.id, support] })
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">VoteNode: Decentralized DAO Voting</h1>
      <div className="flex justify-between items-center mb-6">
        <ConnectButton />
        {isConnected && <p className="text-sm">Voting Power: {votingPower} tokens</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-xl font-semibold mb-4">Active Proposals</h2>
          {proposals.map((proposal) => (
            <Card key={proposal.id} className="mb-4">
              <CardHeader>
                <CardTitle>{proposal.title}</CardTitle>
                <CardDescription>{proposal.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button onClick={() => setSelectedProposal(proposal)}>Select</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-4">Voting Panel</h2>
          {selectedProposal ? (
            <Card>
              <CardHeader>
                <CardTitle>{selectedProposal.title}</CardTitle>
                <CardDescription>{selectedProposal.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p>Current Results:</p>
                  <Progress value={66} className="w-full" />
                  <p className="text-sm text-muted-foreground">66% in favor</p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button onClick={() => handleVote(true)} disabled={!isConnected}>
                  Vote For
                </Button>
                <Button onClick={() => handleVote(false)} disabled={!isConnected} variant="outline">
                  Vote Against
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <p>Select a proposal to vote</p>
          )}
        </div>
      </div>
    </div>
  )
}