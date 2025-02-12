import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { getAllPosts, getPostBySlug } from '@/utils/posts'
import { format } from 'date-fns'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
          <div className="text-gray-600 mb-8">
            {format(new Date(post.date), 'MMMM dd, yyyy')}
          </div>
          
          <div 
            className="prose lg:prose-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>
      </div>
    </article>
  )
}