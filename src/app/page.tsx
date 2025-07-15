import { About, Contact, Hero, Navigation, Projects, Skills } from '@/components'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white dark:bg-gray-900">
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
