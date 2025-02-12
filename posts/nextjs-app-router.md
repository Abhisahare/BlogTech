git ---
title: "Understanding Next.js App Router"
date: "2024-03-20"
excerpt: "Learn how to use the new App Router in Next.js 13+ for better routing and layouts"
image: "/images/nextjs-router.jpg"
tags: ["Next.js", "Routing", "Web Development"]
author: "John Doe"
---

The App Router is a powerful new feature in Next.js 13+. Let's explore how to use it effectively.

## Key Features

1. File-based routing
2. Nested layouts
3. Server components
4. Loading states
5. Error handling

## Basic Usage

Create your routes using the file system:

- `app/page.tsx` - Home page
- `app/about/page.tsx` - About page
- `app/blog/[slug]/page.tsx` - Dynamic blog posts

## Best Practices

Always consider performance and user experience when structuring your routes. 

// app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
})

export { handler as GET, handler as POST }

import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(() => import('../components/Heavy'))

import Image from 'next/image'

export default function OptimizedImage() {
  return (
    <Image
      src="/hero.jpg"
      alt="Hero"
      width={1200}
      height={600}
      priority
    />
  )
} 