'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaSearch } from 'react-icons/fa'

interface SearchAndFilterProps {
  onSearch: (term: string) => void
  onFilterByTag?: (tag: string) => void
  tags?: string[]
}

export default function SearchAndFilter({ onSearch, onFilterByTag, tags = [] }: SearchAndFilterProps) {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              onSearch(e.target.value)
            }}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
        
        {tags && tags.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onFilterByTag?.(tag)}
                className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm"
              >
                {tag}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 