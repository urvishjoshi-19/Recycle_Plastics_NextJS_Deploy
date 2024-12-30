'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Plastic Recycling',
    excerpt: 'Exploring innovative technologies that are revolutionizing the plastic recycling industry...',
    author: 'John Doe',
    date: '2023-05-15',
    image: '/blog-1.jpg',
    category: 'Recycling Technology',
  },
  {
    id: 2,
    title: 'Corporate Sustainability: More Than Just a Trend',
    excerpt: 'How businesses are integrating sustainability into their core strategies and the impact it\'s having...',
    author: 'Jane Smith',
    date: '2023-06-02',
    image: '/blog-2.jpg',
    category: 'Corporate Social Responsibility',
  },
  {
    id: 3,
    title: 'The Circular Economy: A New Paradigm',
    excerpt: 'Understanding the principles of circular economy and its potential to transform industries...',
    author: 'Mike Johnson',
    date: '2023-06-20',
    image: '/blog-3.jpg',
    category: 'Sustainability',
  },
]

export default function BlogSection() {
  const [filter, setFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post => 
    (filter === 'All' || post.category === filter) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <section className="mb-16">
      <h2 className="mb-4 text-3xl font-bold text-center text-secondary">Our Blogs</h2>
      <p className="mb-8 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
        Stay updated with the latest insights, innovations, and sustainability efforts in the recycling industry through our blog posts.
      </p>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row justify-center">
        <Input
          placeholder="Search blogs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-xs"
        />
        <Select onValueChange={(value) => setFilter(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Sustainability">Sustainability</SelectItem>
            <SelectItem value="Recycling Technology">Recycling Technology</SelectItem>
            <SelectItem value="Corporate Social Responsibility">Corporate Social Responsibility</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="bg-card">
            <Image src={post.image} alt={post.title} width={400} height={200} className="h-48 w-full object-cover" />
            <CardHeader>
              <CardTitle className="text-primary">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                {post.author} • {post.date}
              </div>
              <Button variant="outline">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

