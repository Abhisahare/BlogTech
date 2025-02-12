import { getAllPosts } from '@/utils/posts'
import ClientPage from './client-page'

export default function Page() {
  const posts = getAllPosts() // This runs on the server
  return <ClientPage initialPosts={posts} />
}