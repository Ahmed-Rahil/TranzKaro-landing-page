export default function HowItWorks() {
  const steps = [
    { title: "Say Hi", description: "Start a chat with our travel bot—it's as easy as texting your bestie." },
    { title: "Tell Us Your Plan", description: "Destination, date, preferences? We've got it covered." },
    { title: "Confirm & Pay", description: "Review your booking, tap to pay, and boom—you're done." },
    { title: "Ticket in Your Pocket", description: "Your ticket arrives instantly via SMS, email, and WhatsApp." }
  ]

  return (
    <section id="how-it-works" className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

