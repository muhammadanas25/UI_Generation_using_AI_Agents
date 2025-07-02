"use client"

import { useState, useEffect } from "react"
import { useAccount, useContractRead, useContractWrite } from "wagmi"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { Modal } from "@/components/ui/modal"
import { Toast, useToast } from "@/components/ui/toast"
import { IconCheck, IconX, IconVote } from "@/components/icons"
import Image from "next/image"

const proposals = [
  { id: 1, title: "Increase Staking Rewards", description: "Proposal to increase staking rewards by 2% for all token holders." },
  { id: 2, title: "Add New Governance Parameter", description: "Introduce a new parameter for adjusting the voting period length." },
  { id: 3, title: "Fund Community Development", description: "Allocate 100,000 tokens to fund community-driven development projects." },
]

export default function VoteNode() {
  const [selectedProposal, setSelectedProposal] = useState(null)
  const { address, isConnected } = useAccount()
  const [votingPower, setVotingPower] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [voteSupport, setVoteSupport] = useState(true)
  const toast = useToast()

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
      setVotingPower(1000) // Mock value
    }
  }, [isConnected])

  const handleVote = (support) => {
    setVoteSupport(support)
    setIsModalOpen(true)
  }

  const confirmVote = () => {
    if (selectedProposal) {
      castVote({ args: [selectedProposal.id, voteSupport] })
      setIsModalOpen(false)
      toast({
        title: "Vote Cast",
        description: `You have voted ${voteSupport ? "for" : "against"} "${selectedProposal.title}".`,
        variant: "success",
        icon: voteSupport ? <IconCheck /> : <IconX />,
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-indigo-600">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center p-4">
          <div className="flex items-center space-x-2">
            <Image src="/votenode-logo.svg" alt="VoteNode Logo" width={40} height={40} />
            <h1 className="text-2xl font-bold text-indigo-700">VoteNode</h1>
          </div>
          <ConnectButton />
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-white">Decentralized DAO Voting Platform</h2>
          <p className="mt-4 text-lg text-indigo-200">
            Empowering token governance through transparent and secure voting mechanisms.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 space-y-4 lg:space-y-0">
          {isConnected && (
            <p className="text-lg text-white">
              <span className="font-semibold">Voting Power:</span> {votingPower} tokens
            </p>
          )}
          <div className="flex space-x-4">
            <Button variant="secondary" className="flex items-center space-x-2">
              <IconVote className="w-5 h-5" />
              <span>Create Proposal</span>
            </Button>
            <Button variant="outline" className="flex items-center space-x-2">
              <span>Refresh</span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Active Proposals */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Active Proposals</h3>
            {proposals.map((proposal) => (
              <Card key={proposal.id} className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1">
                <CardHeader className="flex items-center space-x-4">
                  <IconVote className="w-8 h-8 text-indigo-500" />
                  <div>
                    <CardTitle className="text-xl text-indigo-700">{proposal.title}</CardTitle>
                    <CardDescription className="text-sm text-indigo-400">{proposal.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-end">
                  <Button onClick={() => setSelectedProposal(proposal)} className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                    Select
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          {/* Voting Panel */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Voting Panel</h3>
            {selectedProposal ? (
              <Card className="bg-white shadow-lg animate-fadeIn">
                <CardHeader className="flex items-center space-x-4">
                  <IconVote className="w-8 h-8 text-indigo-500" />
                  <div>
                    <CardTitle className="text-xl text-indigo-700">{selectedProposal.title}</CardTitle>
                    <CardDescription className="text-sm text-indigo-400">{selectedProposal.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="py-4">
                  <div className="space-y-2">
                    <p className="text-indigo-600 font-medium">Current Results:</p>
                    <Progress value={66} className="w-full bg-indigo-100 rounded-full">
                      <span className="text-sm text-indigo-700">66% in favor</span>
                    </Progress>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button onClick={() => handleVote(true)} disabled={!isConnected} className="bg-green-500 hover:bg-green-600 transition-colors duration-200">
                    Vote For
                  </Button>
                  <Button onClick={() => handleVote(false)} disabled={!isConnected} variant="outline" className="border-red-500 text-red-500 hover:bg-red-50 transition-colors duration-200">
                    Vote Against
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="p-6 bg-indigo-100 rounded-lg shadow-inner">
                <p className="text-indigo-600">Select a proposal to vote</p>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white shadow-inner">
        <div className="container mx-auto p-4 flex justify-between items-center">
          <p className="text-sm text-indigo-600">&copy; 2024 VoteNode. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">About</a>
            <a href="#" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">Contact</a>
            <a href="#" className="text-indigo-500 hover:text-indigo-700 transition-colors duration-200">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Vote Confirmation Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-indigo-700 mb-4">Confirm Your Vote</h3>
          <p className="mb-4">Are you sure you want to vote {voteSupport ? "for" : "against"} this proposal?</p>
          <div className="flex justify-end space-x-4">
            <Button onClick={() => setIsModalOpen(false)} variant="outline" className="border-gray-500 text-gray-500 hover:bg-gray-50">
              Cancel
            </Button>
            <Button onClick={confirmVote} className={`bg-${voteSupport ? "green" : "red"}-500 hover:bg-${voteSupport ? "green" : "red"}-600 transition-colors duration-200`}>
              Confirm
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}