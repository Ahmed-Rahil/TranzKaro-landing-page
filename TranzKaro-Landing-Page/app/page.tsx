import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import WhoIsItFor from './components/WhoIsItFor'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <WhoIsItFor />
      <CallToAction />
      <Footer />
    </main>
  )
}

