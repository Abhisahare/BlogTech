'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

interface PostCardProps {
  title: string
  excerpt: string
  slug: string
  date: string
  imageUrl?: string
}

export default function PostCard({ title, excerpt, slug, date, imageUrl }: PostCardProps) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/blog/${slug}`}>
        <div className="relative h-48 w-full">
          <Image
            src={imageUrl || '/images/default-post.jpg'}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{excerpt}</p>
        </div>
      </Link>
    </motion.div>
  )
}