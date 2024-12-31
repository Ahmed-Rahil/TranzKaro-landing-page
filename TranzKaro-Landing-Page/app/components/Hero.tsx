import Link from 'next/link'

export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 text-gray-800">Travel Smart, Travel Now!</h1>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">Your ticket to freedom, fun, and adventure. Booking tickets shouldn't feel like a chore—it should feel like the start of an adventure!</p>
        <Link href="#book-now" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors inline-block">Start Your Journey</Link>
      </div>
    </section>
  )
}

