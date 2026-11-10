import { useTranslation } from 'react-i18next'
import Hero from '../components/Hero'
import Bio from '../components/Bio'
import TechStack from '../components/TechStack'
import NavCards from '../components/NavCards'
import NowSection from '../components/NowSection'
import { version } from '../../package.json'

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 pb-4">
      <Hero />
      <div className="w-4/5 md:w-[75rem] h-1.5 mx-auto my-8 bg-gradient-to-r from-transparent via-teal-400/35 to-transparent" />
      <Bio />
      <NowSection />
      <TechStack />
      <div className="w-4/5 md:w-[75rem] h-1.5 mx-auto my-8 bg-gradient-to-r from-transparent via-teal-400/35 to-transparent" />
      <NavCards />
      {/* Same style as the role typewriter under the name in the navbar */}
      <p className="text-center font-mono text-[10px] tracking-widest uppercase text-teal-400">
        {t('footer.version')} {version}
      </p>
    </main>
  )
}
