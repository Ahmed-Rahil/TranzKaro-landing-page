import Link from 'next/link'

export default function CallToAction() {
  return (
    <section id="book-now" className="w-full py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-6">Start Your Next Adventure</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Life's too short to sweat over bookings. With TranzKaro, you can focus on making memories, not managing tickets.
        </p>
        <Link href="#" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
          Book Your Ride Now!
        </Link>
      </div>
    </section>
  )
}

