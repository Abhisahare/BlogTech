'use client'
import { motion } from 'framer-motion'
import AnimatedText from '@/components/ui/AnimatedText'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <AnimatedText 
        text="About Us"
        className="text-5xl font-bold text-center mb-12"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto prose lg:prose-xl"
      >
        <p className="text-xl text-gray-600 mb-6">
          Welcome to our blog, where we share insights, stories, and knowledge about technology
          and development.
        </p>
        
        <div className="grid gap-8 mt-12">
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p>
              To provide valuable content that helps developers and tech enthusiasts stay
              informed and grow their skills.
            </p>
          </motion.div>
    
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p>
              Building a community of knowledge sharing and continuous learning in the
              tech industry.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}