import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import Recipes from './components/Recipes'
import SustainablilitySection from './components/Sustainablility'


export default function Home() {
  return (
    <main className="bg-heroBG min-h-[70vh] ">
      <section className=''>
        <Hero />
        <About />
        <Recipes />
        <SustainablilitySection />
      </section>
    </main>
  )
}
