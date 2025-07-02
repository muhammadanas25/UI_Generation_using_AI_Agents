"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Toast, ToastProvider, toast } from "@/components/ui/toast"
import { Loader2, BriefcaseIcon, WalletIcon } from "lucide-react"

const connectWallet = () => {
  console.log("Connecting wallet...")
}

const postJobToBlockchain = (job) => {
  console.log("Posting job to blockchain:", job)
}

export default function JobChain() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Blockchain Developer",
      company: "CryptoTech",
      description: "Seeking an experienced blockchain developer to build decentralized applications...",
    },
    {
      id: 2,
      title: "Smart Contract Auditor",
      company: "SecureChain",
      description: "Looking for a detail-oriented smart contract auditor to ensure security and compliance...",
    },
  ])
  const [newJob, setNewJob] = useState({ title: "", company: "", description: "" })
  const [isPosting, setIsPosting] = useState(false)

  const handleConnectWallet = () => {
    connectWallet()
    setWalletConnected(true)
    toast({
      title: "Wallet Connected",
      description: "Your wallet has been successfully connected.",
    })
  }

  const handlePostJob = (e) => {
    e.preventDefault()
    setIsPosting(true)
    const job = { ...newJob, id: jobs.length + 1 }
    postJobToBlockchain(job)
    setJobs([...jobs, job])
    setNewJob({ title: "", company: "", description: "" })
    setIsPosting(false)
    toast({
      title: "Job Posted",
      description: "Your job has been posted successfully.",
    })
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <BriefcaseIcon className="h-8 w-8 text-indigo-600 mr-2" />
                <h1 className="text-2xl font-bold text-indigo-600">JobChain</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Button
                  onClick={handleConnectWallet}
                  variant={walletConnected ? "default" : "primary"}
                  disabled={walletConnected}
                  className="flex items-center space-x-2"
                >
                  <WalletIcon className="h-5 w-5" />
                  {walletConnected ? "Wallet Connected" : "Connect Wallet"}
                </Button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex-grow max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
          <section className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col md:flex-row items-center md:space-x-6 animate-fade-in">
              <div className="flex-shrink-0">
                <BriefcaseIcon className="h-16 w-16 text-indigo-600" />
              </div>
              <div className="mt-4 md:mt-0 text-center md:text-left">
                <h2 className="text-3xl font-semibold text-gray-800">Decentralized Job Board</h2>
                <p className="mt-2 text-gray-600">
                  Connect with employers and job seekers through the power of blockchain technology.
                </p>
                <Button className="mt-4">Get Started</Button>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-gray-700">Job Listings</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary">Filter</Button>
                </DialogTrigger>
                <DialogContent>
                  <h3 className="text-lg font-bold">Filter Jobs</h3>
                  {/* Filter form can be added here */}
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((job) => (
                <Card
                  key={job.id}
                  className="transform hover:scale-105 transition-transform duration-300 shadow-lg"
                >
                  <CardHeader>
                    <CardTitle className="text-indigo-600">{job.title}</CardTitle>
                    <CardDescription className="text-gray-500">{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{job.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      Apply
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6 text-gray-700">Post a New Job</h2>
            <form onSubmit={handlePostJob} className="bg-white p-6 rounded-lg shadow-md space-y-6">
              <div>
                <Label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Job Title
                </Label>
                <Input
                  id="title"
                  value={newJob.title}
                  onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
                  required
                  className="mt-1 block w-full"
                  placeholder="e.g., Frontend Developer"
                />
              </div>
              <div>
                <Label htmlFor="company" className="block text-sm font-medium text-gray-700">
                  Company
                </Label>
                <Input
                  id="company"
                  value={newJob.company}
                  onChange={(e) => setNewJob({ ...newJob, company: e.target.value })}
                  required
                  className="mt-1 block w-full"
                  placeholder="e.g., TechCorp"
                />
              </div>
              <div>
                <Label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Job Description
                </Label>
                <Textarea
                  id="description"
                  value={newJob.description}
                  onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
                  required
                  className="mt-1 block w-full"
                  rows={4}
                  placeholder="Provide a detailed description of the job..."
                />
              </div>
              <div className="flex justify-end">
                <Button type="submit" disabled={!walletConnected || isPosting} className="flex items-center space-x-2">
                  {isPosting && <Loader2 className="animate-spin h-5 w-5" />}
                  <span>Post Job</span>
                </Button>
              </div>
            </form>
          </section>
        </main>

        <footer className="bg-white shadow mt-12">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <p className="text-sm text-gray-600">&copy; 2024 JobChain. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                {/* SVG Icon for Twitter */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724 9.864 9.864 0 0 1-3.127 1.195 4.916 4.916 0 0 0-8.384 4.482A13.944 13.944 0 0 1 1.671 3.149a4.916 4.916 0 0 0 1.523 6.573 4.903 4.903 0 0 1-2.23-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.918 4.918 0 0 0 4.588 3.417A9.867 9.867 0 0 1 0 19.54a13.94 13.94 0 0 0 7.548 2.212c9.056 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634A10.012 10.012 0 0 0 24 4.557z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                {/* SVG Icon for LinkedIn */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.068-1.872-3.068-1.874 0-2.161 1.46-2.161 2.968v5.703h-3v-10h2.881v1.367h.041c.401-.758 1.38-1.557 2.839-1.557 3.038 0 3.603 2.0 3.603 4.6v5.73z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-indigo-600 transition-colors">
                {/* SVG Icon for GitHub */}
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.416 7.86 10.938.575.106.785-.25.785-.556 0-.275-.01-1.19-.015-2.08-3.2.697-3.88-1.54-3.88-1.54-.522-1.326-1.276-1.68-1.276-1.68-1.04-.714.08-.7.08-.7 1.147.08 1.75 1.184 1.75 1.184 1.02 1.742 2.68 1.237 3.33.945.103-.734.4-1.237.727-1.522-2.56-.29-5.24-1.28-5.24-5.686 0-1.258.45-2.287 1.18-3.095-.12-.29-.51-1.46.112-3.04 0 0 .96-.31 3.15 1.18a10.91 10.91 0 012.88-.388c.98.005 1.97.133 2.88.388 2.18-1.49 3.14-1.18 3.14-1.18.625 1.58.235 2.75.115 3.04.74.808 1.18 1.837 1.18 3.095 0 4.42-2.68 5.39-5.25 5.68.41.35.78 1.04.78 2.1 0 1.52-.02 2.74-.02 3.11 0 .31.21.67.79.56A11.5 11.5 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>

        <Toast />
      </div>
    </ToastProvider>
  )
}