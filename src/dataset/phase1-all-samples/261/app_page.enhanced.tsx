'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { socialNodeChain } from '@/lib/socialNodeChain'
import { motion } from 'framer-motion'
import { Tooltip } from "@/components/ui/tooltip"
import { Loader } from "@/components/ui/loader"
import { ToastProvider, toast } from "@/components/ui/toast"

export default function SocialNodeApp() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')
  const [account, setAccount] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    loadBlockchainData()
  }, [])

  async function loadBlockchainData() {
    if (typeof window.ethereum === 'undefined') {
      toast({
        title: "Wallet Not Found",
        description: "Please install MetaMask to use SocialNode.",
        variant: "destructive",
      })
      return
    }
    setLoading(true)
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const signer = provider.getSigner()
      const address = await signer.getAddress()
      setAccount(address)

      // Load posts from the blockchain
      const fetchedPosts = await socialNodeChain.getPosts()
      setPosts(fetchedPosts)
    } catch (error) {
      console.error("Error loading blockchain data:", error)
      toast({
        title: "Error",
        description: "Failed to load blockchain data.",
        variant: "destructive",
      })
    }
    setLoading(false)
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        loadBlockchainData()
        toast({
          title: "Wallet Connected",
          description: "Your wallet has been successfully connected.",
          variant: "default",
        })
      } catch (error) {
        console.error("User denied account access")
        toast({
          title: "Connection Failed",
          description: "Unable to connect your wallet.",
          variant: "destructive",
        })
      }
    } else {
      toast({
        title: "MetaMask Required",
        description: "Please install MetaMask to use SocialNode.",
        variant: "destructive",
      })
    }
  }

  async function createPost(event) {
    event.preventDefault()
    if (newPost.trim() === '') {
      toast({
        title: "Empty Post",
        description: "Please enter some content before posting.",
        variant: "warning",
      })
      return
    }
    setLoading(true)
    try {
      await socialNodeChain.createPost(newPost)
      setNewPost('')
      // Reload posts after creating a new one
      const updatedPosts = await socialNodeChain.getPosts()
      setPosts(updatedPosts)
      toast({
        title: "Post Created",
        description: "Your post has been successfully created.",
        variant: "default",
      })
    } catch (error) {
      console.error("Error creating post:", error)
      toast({
        title: "Error",
        description: "Failed to create post.",
        variant: "destructive",
      })
    }
    setLoading(false)
  }

  return (
    <ToastProvider>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400 transition-colors duration-300">SocialNode</h1>
            {account ? (
              <div className="flex items-center space-x-3">
                <Avatar>
                  <AvatarImage src={`https://avatars.dicebear.com/api/identicon/${account}.svg`} />
                  <AvatarFallback>{account.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {`${account.slice(0, 6)}...${account.slice(-4)}`}
                </span>
                <Button variant="outline" size="sm" onClick={connectWallet}>
                  Refresh
                </Button>
              </div>
            ) : (
              <Button onClick={connectWallet} className="animate-pulse">
                Connect Wallet
              </Button>
            )}
          </div>
        </header>

        <main className="container mx-auto px-4 py-6">
          <form onSubmit={createPost} className="mb-8">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Input
                type="text"
                placeholder="What's on your mind?"
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                className="flex-grow"
              />
              <Button type="submit" disabled={loading}>
                {loading ? <Loader className="w-4 h-4 mr-2" /> : null}
                Post
              </Button>
            </div>
          </form>

          {loading && (
            <div className="flex justify-center my-10">
              <Loader />
            </div>
          )}

          <div className="space-y-6">
            {posts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="transition-transform transform hover:-translate-y-1 hover:shadow-lg">
                  <CardHeader className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={`https://avatars.dicebear.com/api/identicon/${post.author}.svg`} />
                      <AvatarFallback>{post.author.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-200">
                        {`${post.author.slice(0, 6)}...${post.author.slice(-4)}`}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {new Date(post.timestamp * 1000).toLocaleString()}
                      </p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{post.content}</p>
                  </CardContent>
                  <CardFooter className="flex space-x-4">
                    <Tooltip content="Like">
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                        <span>Like</span>
                      </Button>
                    </Tooltip>
                    <Tooltip content="Comment">
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M18 10c0 3.866-3.582 7-8 7a8.96 8.96 0 01-4-.872V17a1 1 0 11-2 0v-2a1 1 0 011-1h2a8.96 8.96 0 01-.872-4A8.96 8.96 0 0110 2a8.96 8.96 0 014 .872V3a1 1 0 012 0v2a1 1 0 01-1 1h-2a8.96 8.96 0 01.872 4z" />
                        </svg>
                        <span>Comment</span>
                      </Button>
                    </Tooltip>
                    <Tooltip content="Share">
                      <Button variant="ghost" size="sm" className="flex items-center space-x-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M15 8a3 3 0 10-2.236 5.764l-4.737 2.368a3 3 0 10-.964.964l2.368 4.737A3 3 0 0012 17a3 3 0 100-6 3 3 0 002.236 1.236l4.737-2.368A3 3 0 0015 8z" />
                        </svg>
                        <span>Share</span>
                      </Button>
                    </Tooltip>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </main>
      </div>
    </ToastProvider>
  )
}