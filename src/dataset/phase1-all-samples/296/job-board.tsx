"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"

// Placeholder function for wallet connection
const connectWallet = () => {
  console.log("Connecting wallet...")
  // In a real implementation, this would interact with a blockchain wallet
}

// Placeholder function for posting a job
const postJobToBlockchain = (job) => {
  console.log("Posting job to blockchain:", job)
  // In a real implementation, this would interact with a smart contract
}

export default function JobChain() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [jobs, setJobs] = useState([
    { id: 1, title: "Blockchain Developer", company: "CryptoTech", description: "Seeking an experienced blockchain developer..." },
    { id: 2, title: "Smart Contract Auditor", company: "SecureChain", description: "Looking for a detail-oriented smart contract auditor..." },
  ])
  const [newJob, setNewJob] = useState({ title: "", company: "", description: "" })

  const handleConnectWallet = () => {
    connectWallet()
    setWalletConnected(true)
  }

  const handlePostJob = (e) => {
    e.preventDefault()
    const job = { ...newJob, id: jobs.length + 1 }
    postJobToBlockchain(job)
    setJobs([...jobs, job])
    setNewJob({ title: "", company: "", description: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-4">
      <header className="max-w-4xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">JobChain</h1>
          <Button onClick={handleConnectWallet} disabled={walletConnected}>
            {walletConnected ? "Wallet Connected" : "Connect Wallet"}
          </Button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Job Listings</h2>
          <div className="space-y-4">
            {jobs.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <CardTitle>{job.title}</CardTitle>
                  <CardDescription>{job.company}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{job.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">Apply</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Post a New Job</h2>
          <form onSubmit={handlePostJob} className="space-y-4">
            <div>
              <Label htmlFor="title">Job Title</Label>
              <Input
                id="title"
                value={newJob.title}
                onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={newJob.company}
                onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Job Description</Label>
              <Textarea
                id="description"
                value={newJob.description}
                onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                required
              />
            </div>
            <Button type="submit" disabled={!walletConnected}>
              Post Job
            </Button>
          </form>
        </section>
      </main>
    </div>
  )
}