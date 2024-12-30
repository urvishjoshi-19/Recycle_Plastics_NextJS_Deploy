'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function ClientForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Submitted email:', email)
    setEmail('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Subscribe</Button>
    </form>
  )
}

