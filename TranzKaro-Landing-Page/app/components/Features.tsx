import { Zap, Globe, Wallet, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: <Zap className="w-12 h-12 text-blue-600" />,
    title: "Instant Bookings, Zero Stress",
    description: "Forget the forms. Chat your way to the perfect ticket in seconds."
  },
  {
    icon: <Globe className="w-12 h-12 text-blue-600" />,
    title: "Routes That Take You Everywhere",
    description: "From buzzing cities to chill getaways, we cover it all—train, bus, you name it."
  },
  {
    icon: <Wallet className="w-12 h-12 text-blue-600" />,
    title: "Wallet-Friendly, Always",
    description: "Score exclusive discounts, cashback, and deals that'll keep your wallet happy."
  },
  {
    icon: <MessageCircle className="w-12 h-12 text-blue-600" />,
    title: "Chat is the New Click",
    description: "Tell us where you're going, and we'll handle the rest. Booking tickets has never been this smooth."
  }
]

export default function Features() {
  return (
    <section id="features" className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Why TranzKaro is a Game-Changer</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg transition-transform hover:scale-105">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

