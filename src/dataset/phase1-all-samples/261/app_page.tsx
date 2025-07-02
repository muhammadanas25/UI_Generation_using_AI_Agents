'use client'

import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { socialNodeChain } from '@/lib/socialNodeChain'

export default function SocialNodeApp() {
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState('')
  const [account, setAccount] = useState('')

  useEffect(() => {
    loadBlockchainData()
  }, [])

  async function loadBlockchainData() {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const signer = provider.getSigner()
    const address = await signer.getAddress()
    setAccount(address)

    // Load posts from the blockchain
    const fetchedPosts = await socialNodeChain.getPosts()
    setPosts(fetchedPosts)
  }

  async function connectWallet() {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' })
        loadBlockchainData()
      } catch (error) {
        console.error("User denied account access")
      }
    } else {
      console.log('Please install MetaMask!')
    }
  }

  async function createPost(event) {
    event.preventDefault()
    if (newPost.trim() !== '') {
      await socialNodeChain.createPost(newPost)
      setNewPost('')
      // Reload posts after creating a new one
      const updatedPosts = await socialNodeChain.getPosts()
      setPosts(updatedPosts)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">SocialNode</h1>
        {account ? (
          <div className="flex items-center space-x-2">
            <Avatar>
              <AvatarImage src={`https://avatars.dicebear.com/api/identicon/${account}.svg`} />
              <AvatarFallback>{account.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-600">{`${account.slice(0, 6)}...${account.slice(-4)}`}</span>
          </div>
        ) : (
          <Button onClick={connectWallet}>Connect Wallet</Button>
        )}
      </header>

      <form onSubmit={createPost} className="mb-6">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="What's on your mind?"
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            className="flex-grow"
          />
          <Button type="submit">Post</Button>
        </div>
      </form>

      <div className="space-y-4">
        {posts.map((post, index) => (
          <Card key={index}>
            <CardHeader className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src={`https://avatars.dicebear.com/api/identicon/${post.author}.svg`} />
                <AvatarFallback>{post.author.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{`${post.author.slice(0, 6)}...${post.author.slice(-4)}`}</p>
                <p className="text-sm text-gray-500">{new Date(post.timestamp * 1000).toLocaleString()}</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm">Like</Button>
              <Button variant="ghost" size="sm">Comment</Button>
              <Button variant="ghost" size="sm">Share</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}