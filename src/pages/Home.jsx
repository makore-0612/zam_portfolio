import Hero from '../components/Hero'
import Bio from '../components/Bio'
import TechStack from '../components/TechStack'
import NavCards from '../components/NavCards'

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 pb-4">
      <Hero />
      <div className="w-4/5 md:w-300 h-1.5 mx-auto my-8 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <Bio />
      <TechStack />
      <div className="w-4/5 md:w-300 h-1.5 mx-auto my-8 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
      <NavCards />
    </main>
  )
}
