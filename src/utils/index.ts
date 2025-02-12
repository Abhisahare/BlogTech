export interface Post {
    slug: string
    title: string
    date: string
    excerpt: string
    content: string
    image: string
    tags?: string[]
    author?: string
  }