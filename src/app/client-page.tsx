'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import PostGrid from '@/components/blog/PostGrid'
import AnimatedText from '@/components/ui/AnimatedText'
import SearchAndFilter from '@/components/blog/SearchAndFilter'
import { FaCode, FaLightbulb, FaBook } from 'react-icons/fa'
import type { Post } from '@/utils/index'

interface ClientPageProps {
  initialPosts: Post[]
}

export default function ClientPage({ initialPosts }: ClientPageProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const tags = Array.from(new Set(initialPosts.flatMap(post => post.tags || [])))

  return (
    <div className="container mx-auto px-4">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <AnimatedText
          text="TechInsights Blog"
          className="text-6xl font-bold text-center mb-8"
        />
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12"
        >
          Exploring the latest in web development, programming tips, and tech insights
        </motion.p>
        
        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
          <Feature 
            icon={<FaCode className="text-4xl text-blue-500" />}
            title="Coding Tutorials"
            description="Step-by-step guides to help you master modern web development"
          />
          <Feature 
            icon={<FaLightbulb className="text-4xl text-yellow-500" />}
            title="Best Practices"
            description="Learn industry standards and professional techniques"
          />
          <Feature 
            icon={<FaBook className="text-4xl text-green-500" />}
            title="In-Depth Articles"
            description="Comprehensive coverage of important tech topics"
          />
        </div>
      </section>
      
      {/* Latest Posts Section */}
      <section className="py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Latest Articles</h2>
        <SearchAndFilter 
          onSearch={setSearchTerm}
          onFilterByTag={(tag) => setSearchTerm(tag)}
          tags={tags}
        />
        <PostGrid posts={initialPosts} searchTerm={searchTerm} />
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 mb-8">Get the latest articles and tech insights delivered to your inbox.</p>
          <form className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

const Feature = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    className="text-center p-6 rounded-lg bg-white shadow-lg"
  >
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
) 