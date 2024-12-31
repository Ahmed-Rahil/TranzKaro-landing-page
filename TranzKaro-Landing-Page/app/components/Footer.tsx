import Link from 'next/link'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">TranzKaro</Link>
            <p className="text-gray-600 mt-2">Travel Smart, Travel Now!</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Instagram className="w-6 h-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Twitter className="w-6 h-6" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Facebook className="w-6 h-6" />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} TranzKaro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

