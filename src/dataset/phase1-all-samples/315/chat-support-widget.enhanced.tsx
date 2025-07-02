'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MessageCircle, X, Send, PaperClip, Smile } from "lucide-react"
import { Transition } from '@headlessui/react'

type Message = {
  id: number
  text: string
  sender: 'user' | 'support'
  avatar?: string
}

export default function ChatSupportWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Welcome to our decentralized marketplace support! How can we help you today?", sender: 'support', avatar: '/avatars/support.png' }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, isOpen])

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        avatar: '/avatars/user.png'
      }
      setMessages([...messages, newMessage])
      setInputValue('')

      // Simulate a support response with typing indicator
      setIsTyping(true)
      setTimeout(() => {
        const supportResponse: Message = {
          id: messages.length + 2,
          text: "Thank you for your query. Our decentralized support team will get back to you shortly.",
          sender: 'support',
          avatar: '/avatars/support.png'
        }
        setMessages(prevMessages => [...prevMessages, supportResponse])
        setIsTyping(false)
      }, 1500)
    }
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Transition
        show={isOpen}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 translate-y-4 scale-95"
        enterTo="transform opacity-100 translate-y-0 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="transform opacity-100 translate-y-0 scale-100"
        leaveTo="transform opacity-0 translate-y-4 scale-95"
      >
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg w-80 sm:w-96 h-96 flex flex-col">
          <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-6 w-6 text-blue-500" />
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Support Chat</h2>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              <X className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </Button>
          </div>
          <ScrollArea className="flex-grow p-4 overflow-auto" ref={scrollRef}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                {message.sender === 'support' && (
                  <img src={message.avatar} alt="Support Avatar" className="w-8 h-8 rounded-full mr-2" />
                )}
                <div className="max-w-xs">
                  <div
                    className={`inline-block p-3 rounded-lg shadow ${
                      message.sender === 'user'
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
                {message.sender === 'user' && (
                  <img src={message.avatar} alt="User Avatar" className="w-8 h-8 rounded-full ml-2" />
                )}
              </div>
            ))}
            {isTyping && (
              <div className="mb-4 flex justify-start">
                <img src="/avatars/support.png" alt="Support Avatar" className="w-8 h-8 rounded-full mr-2" />
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </ScrollArea>
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex items-center space-x-2"
            >
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <PaperClip className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Button>
              <Input
                type="text"
                placeholder="Type your message..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-grow bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 rounded-full focus:ring-2 focus:ring-blue-500"
              />
              <Button type="submit" size="icon" className="hover:bg-blue-600 dark:hover:bg-blue-500 transition bg-blue-500">
                <Send className="h-5 w-5 text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <Smile className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Button>
            </form>
          </div>
        </div>
      </Transition>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 shadow-lg bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 transition flex items-center justify-center"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      )}
    </div>
  )
}