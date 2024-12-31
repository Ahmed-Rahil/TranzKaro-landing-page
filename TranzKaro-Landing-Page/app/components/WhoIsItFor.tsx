import { Star, Zap, Briefcase, Compass } from 'lucide-react'

const userTypes = [
  { icon: <Star className="w-8 h-8 text-blue-600" />, title: "The Planners", description: "Plan ahead, save your routes, and enjoy stress-free trips." },
  { icon: <Zap className="w-8 h-8 text-blue-600" />, title: "The Spontaneous Souls", description: "Feeling adventurous? Book on the fly and hit the road." },
  { icon: <Briefcase className="w-8 h-8 text-blue-600" />, title: "The Hustlers", description: "Affordable travel for those chasing big dreams (and deadlines)." },
  { icon: <Compass className="w-8 h-8 text-blue-600" />, title: "The Wanderers", description: "Explore, experience, and escape—your next journey starts here." }
]

export default function WhoIsItFor() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Who's TranzKaro For?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {userTypes.map((type, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm transition-transform hover:scale-105">
              <div className="mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{type.title}</h3>
              <p className="text-gray-600">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

