import Link from 'next/link'

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold text-blue-600">TranzKaro</Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="#features" className="text-gray-600 hover:text-blue-600 transition-colors">Features</Link></li>
            <li><Link href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</Link></li>
            <li><Link href="#book-now" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">Book Now</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

