import Image from 'next/image'
import Hero from './components/Hero'
import About from './components/About'
import Recipes from './components/Recipes'


export default function Home() {
  return (
    <main className="bg-heroBG min-h-[70vh] ">
      <section className='pt-28'>
        <Hero />
        <About />
        <Recipes />
      </section>
    </main>
  )
}
