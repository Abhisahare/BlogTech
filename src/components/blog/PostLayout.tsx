'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { format } from 'date-fns'
import { FaCalendar, FaUser } from 'react-icons/fa'

interface PostLayoutProps {
  title: string
  date: string
  excerpt: string
  content: string
  image: string
  author?: string
  tags?: string[]
}

export default function PostLayout({ 
  title, 
  date, 
  excerpt, 
  content, 
  image, 
  author = "Admin", 
  tags = [] 
}: PostLayoutProps) {
  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-6"
      >
        {/* Hero Image */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          <Image
            src={image || '/images/default-post.jpg'}
            alt={title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <FaCalendar />
            <time dateTime={date}>{format(new Date(date), 'MMMM dd, yyyy')}</time>
          </div>
          <div className="flex items-center gap-2">
            <FaUser />
            <span>{author}</span>
          </div>
        </div>

        {/* Title and Excerpt */}
        <div>
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-gray-600">{excerpt}</p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <span 
                key={tag} 
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none prose-headings:font-bold prose-a:text-blue-600"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </motion.div>
    </article>
  )
}