'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold"
            >
              Blog
            </motion.div>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {['Home', 'Blog', 'About'].map((item) => (
              <Link 
                key={item} 
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
              >
                <motion.span
                  whileHover={{ y: -2 }}
                  className="text-gray-600 hover:text-black"
                >
                  {item}
                </motion.span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </motion.header>
  )
}