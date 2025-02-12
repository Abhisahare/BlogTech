import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold mb-4">Post Not Found</h2>
      <p className="text-gray-600 mb-8">
        The post you&apos;re looking for doesn&apos;t exist or has been removed.
      </p>
      <Link 
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Return Home
      </Link>
    </div>
  )
} 