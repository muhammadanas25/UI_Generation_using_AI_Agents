import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Wallet, Vote, ChevronRight, Sun, Moon, Info } from 'lucide-react'
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from 'next/image'

const connectWallet = async () => {
  console.log("Connecting wallet...")
}

const castVote = async (proposalId: number, support: boolean) => {
  console.log(`Voting ${support ? 'for' : 'against'} proposal ${proposalId}`)
}

export default function GovernChain() {
  const [isConnected, setIsConnected] = useState(false)
  const [votingPower, setVotingPower] = useState(0)
  const [theme, setTheme] = useState('light')

  const handleConnect = async () => {
    await connectWallet()
    setIsConnected(true)
    setVotingPower(100)
  }

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const proposals = [
    { id: 1, title: "Increase staking rewards", description: "Proposal to increase staking rewards by 2%", forVotes: 65, againstVotes: 35 },
    { id: 2, title: "Add new governance parameter", description: "Introduce a new parameter for adjusting protocol fees", forVotes: 48, againstVotes: 52 },
    { id: 3, title: "Fund community initiative", description: "Allocate 100,000 tokens to fund community-driven projects", forVotes: 80, againstVotes: 20 },
  ]

  return (
    <div className={theme === 'light' ? "min-h-screen bg-gray-100 text-gray-900" : "min-h-screen bg-gray-900 text-gray-100"}>
      <header className="flex justify-between items-center px-8 py-4 bg-primary shadow-md">
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="GovernChain Logo" width={40} height={40} className="rounded-full"/>
          <h1 className="text-2xl font-bold">GovernChain</h1>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" onClick={toggleTheme}>
            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button onClick={handleConnect} disabled={isConnected} className="flex items-center">
            {isConnected ? 'Connected' : 'Connect Wallet'}
            <Wallet className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </header>

      <main className="px-8 py-6">
        <section className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Decentralized Governance with Token-Weighted Voting</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">Empowering the community to make decisions that shape the future of our protocol.</p>
          <Image src="/governance.svg" alt="Governance Illustration" width={600} height={300} className="mx-auto mt-6"/>
        </section>

        {isConnected && (
          <Card className="mb-8 animate-fade-in">
            <CardHeader>
              <CardTitle>Your Voting Power</CardTitle>
              <CardDescription>Based on your token holdings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">{votingPower} votes</p>
            </CardContent>
          </Card>
        )}

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Active Proposals</h2>
            <Button variant="link">View All</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {proposals.map((proposal) => (
              <Card key={proposal.id} className="transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                <CardHeader className="flex justify-between items-start">
                  <div>
                    <CardTitle>{proposal.title}</CardTitle>
                    <CardDescription>{proposal.description}</CardDescription>
                  </div>
                  <Info className="h-5 w-5 text-gray-500 cursor-pointer" />
                </CardHeader>
                <CardContent>
                  <div className="mb-2">
                    <Progress value={proposal.forVotes} className="h-2 bg-green-500" />
                  </div>
                  <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                    <span>{proposal.forVotes}% For</span>
                    <span>{proposal.againstVotes}% Against</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
                  <Button variant="outline" onClick={() => castVote(proposal.id, true)} disabled={!isConnected} className="w-full sm:w-auto">
                    <Vote className="mr-2 h-4 w-4" />
                    Vote For
                  </Button>
                  <Button variant="outline" onClick={() => castVote(proposal.id, false)} disabled={!isConnected} className="w-full sm:w-auto">
                    <Vote className="mr-2 h-4 w-4" />
                    Vote Against
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="ghost" className="w-full sm:w-auto flex items-center justify-center">
                        Details
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogTitle>{proposal.title}</DialogTitle>
                      <DialogDescription>
                        {proposal.description}
                        <div className="mt-4">
                          <p><strong>For:</strong> {proposal.forVotes}%</p>
                          <p><strong>Against:</strong> {proposal.againstVotes}%</p>
                        </div>
                      </DialogDescription>
                      <div className="mt-4 flex justify-end">
                        <Button onClick={() => castVote(proposal.id, true)} disabled={!isConnected} className="mr-2">
                          <Vote className="mr-2 h-4 w-4" />
                          Vote For
                        </Button>
                        <Button onClick={() => castVote(proposal.id, false)} disabled={!isConnected}>
                          <Vote className="mr-2 h-4 w-4" />
                          Vote Against
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>

      <footer className="px-8 py-4 bg-primary text-center">
        <p className="text-sm text-gray-200">&copy; {new Date().getFullYear()} GovernChain. All rights reserved.</p>
      </footer>
    </div>
  )
}