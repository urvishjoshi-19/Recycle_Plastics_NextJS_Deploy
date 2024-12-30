'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bot, X, Send, Leaf, Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const quickActions = [
  { label: "What is Recykal?", action: "what_is_recykal" },
  { label: "How can I recycle plastic?", action: "recycle_plastic" },
  { label: "Explore waste management solutions", action: "explore_solutions" },
]

const EcoAI = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ type: 'user' | 'bot', content: string }[]>([])
  const [input, setInput] = useState('')
  const [isListening, setIsListening] = useState(false)
  const chatRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      console.log('Initializing chatbot with welcome message')
      setMessages([{ type: 'bot', content: "Hi, I'm EcoAI 🌱, your friendly waste management assistant! How can I help you today?" }])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    if (chatRef.current) {
      console.log('Scrolling to bottom of chat')
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (input.trim()) {
      console.log('User input:', input)
      setMessages(prev => [...prev, { type: 'user', content: input }])
      setInput('')
      
      try {
        const response = await fetch('/api/chatbot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input }),
        })
        console.log('API request sent with message:', input)
        const data = await response.json()
        console.log('API response:', data)
        setMessages(prev => [...prev, { type: 'bot', content: data.reply }])
      } catch (error) {
        console.error('Failed to fetch response:', error)
        setMessages(prev => [...prev, { type: 'bot', content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }])
      }
    } else {
      console.log('Input is empty; ignoring send action')
    }
  }

  const handleQuickAction = async (action: string) => {
    console.log('Quick action triggered:', action)
    setMessages(prev => [...prev, { type: 'user', content: action }])
    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: action }),
      })
      console.log('API request sent with quick action:', action)
      const data = await response.json()
      console.log('API response:', data)
      setMessages(prev => [...prev, { type: 'bot', content: data.reply }])
    } catch (error) {
      console.error('Failed to fetch response:', error)
      setMessages(prev => [...prev, { type: 'bot', content: "I'm sorry, I'm having trouble connecting right now. Please try again later." }])
    }
  }

  const handleVoiceInput = () => {
    console.log('Voice input triggered')
    if ('webkitSpeechRecognition' in window) {
      const recognition = new (window as any).webkitSpeechRecognition()
      recognition.onstart = () => {
        console.log('Voice recognition started')
        setIsListening(true)
      }
      recognition.onend = () => {
        console.log('Voice recognition ended')
        setIsListening(false)
      }
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        console.log('Voice recognition result:', transcript)
        setInput(transcript)
      }
      recognition.start()
    } else {
      console.warn('Voice recognition not supported in this browser')
      alert('Voice recognition is not supported in your browser.')
    }
  }

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-lg"
        >
          {isOpen ? <X size={24} /> : (
            <motion.div
              animate={{
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <Bot size={36} /> {/* Increased size from 24 to 36 */}
            </motion.div>
          )}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-4 w-[90vw] max-w-md h-[70vh] bg-gray-900 text-gray-100 rounded-lg shadow-xl overflow-hidden z-40 flex flex-col"
          >
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4 text-white font-bold flex items-center">
              <Bot size={24} className="mr-2" />
              <span>EcoAI - Powered by OpenAI's ChatGPT 4</span>
            </div>
            <div ref={chatRef} className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-2 rounded-lg ${message.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-800 text-gray-100'}`}>
                    {message.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4">
              <div className="flex flex-wrap gap-2 mb-2">
                {quickActions.map((action, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickAction(action.action)}
                    className="text-xs text-white border-white hover:bg-gray-600 bg-black"
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
              <div className="flex space-x-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="bg-gray-800 text-white placeholder-gray-400"
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                />
                <Button onClick={handleVoiceInput} variant="outline" className="text-white border-white hover:bg-gray-600 bg-black">
                  <Mic size={18} className={isListening ? 'text-red-500' : ''} />
                </Button>
                <Button onClick={handleSend} className="bg-blue-500 text-white hover:bg-blue-600">
                  <Send size={18} />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-0 right-0 w-24 h-24 pointer-events-none z-30">
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Leaf size={24} className="text-green-500" />
        </motion.div>
      </div>
    </>
  )
}

export default EcoAI
