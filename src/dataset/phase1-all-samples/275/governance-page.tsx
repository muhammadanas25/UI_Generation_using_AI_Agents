import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wallet, Vote, ChevronRight } from 'lucide-react'

// Placeholder function for Web3 wallet connection
const connectWallet = async () => {
  // Implementation would go here
  console.log("Connecting wallet...")
}

// Placeholder function for casting a vote
const castVote = async (proposalId: number, support: boolean) => {
  // Implementation would go here
  console.log(`Voting ${support ? 'for' : 'against'} proposal ${proposalId}`)
}

export default function Component() {
  const [isConnected, setIsConnected] = useState(false)
  const [votingPower, setVotingPower] = useState(0)

  const handleConnect = async () => {
    await connectWallet()
    setIsConnected(true)
    setVotingPower(100) // This would be fetched from the blockchain in a real implementation
  }

  const proposals = [
    { id: 1, title: "Increase staking rewards", description: "Proposal to increase staking rewards by 2%", forVotes: 65, againstVotes: 35 },
    { id: 2, title: "Add new governance parameter", description: "Introduce a new parameter for adjusting protocol fees", forVotes: 48, againstVotes: 52 },
    { id: 3, title: "Fund community initiative", description: "Allocate 100,000 tokens to fund community-driven projects", forVotes: 80, againstVotes: 20 },
  ]

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-primary">GovernChain</h1>
        <Button onClick={handleConnect} disabled={isConnected}>
          {isConnected ? 'Connected' : 'Connect Wallet'}
          <Wallet className="ml-2 h-4 w-4" />
        </Button>
      </header>

      {isConnected && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Voting Power</CardTitle>
            <CardDescription>Based on your token holdings</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{votingPower} votes</p>
          </CardContent>
        </Card>
      )}

      <h2 className="text-2xl font-semibold mb-4">Active Proposals</h2>
      <div className="space-y-4">
        {proposals.map((proposal) => (
          <Card key={proposal.id}>
            <CardHeader>
              <CardTitle>{proposal.title}</CardTitle>
              <CardDescription>{proposal.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <Progress value={proposal.forVotes} className="h-2" />
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{proposal.forVotes}% For</span>
                <span>{proposal.againstVotes}% Against</span>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" onClick={() => castVote(proposal.id, true)} disabled={!isConnected}>
                <Vote className="mr-2 h-4 w-4" />
                Vote For
              </Button>
              <Button variant="outline" onClick={() => castVote(proposal.id, false)} disabled={!isConnected}>
                <Vote className="mr-2 h-4 w-4" />
                Vote Against
              </Button>
              <Button variant="ghost">
                Details
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}