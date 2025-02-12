'use client'
import { motion } from 'framer-motion'
import PostGrid from '@/components/blog/PostGrid'
import AnimatedText from '@/components/ui/AnimatedText'
import { FaCode, FaLightbulb, FaBook } from 'react-icons/fa'

export default function Home() {
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
        <PostGrid />
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