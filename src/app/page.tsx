import { About, AnimatedBackground, Contact, Hero, Navigation, Projects, Skills } from '@/components'

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navigation />
      <main className="min-h-screen bg-transparent relative z-10">
        <div id="home">
          <Hero />
        </div>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
