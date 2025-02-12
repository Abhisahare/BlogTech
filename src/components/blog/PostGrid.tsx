'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { format } from 'date-fns'
import type { Post } from '@/utils/index'

interface PostGridProps {
  searchTerm?: string
  posts: Post[]  // Pass posts as props instead of fetching directly
}

export default function PostGrid({ searchTerm = '', posts }: PostGridProps) {
  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredPosts.map((post, index) => (
        <motion.div
          key={post.slug}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link href={`/blog/${post.slug}`} className="group">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform group-hover:-translate-y-1">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image || '/images/default-post.jpg'}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-600 mb-2">
                  {format(new Date(post.date), 'MMMM dd, yyyy')}
                </p>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600">
                  {post.title}
                </h3>
                <p className="text-gray-600 line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}