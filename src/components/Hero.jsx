import { useTranslation } from 'react-i18next'
import DotGrid from './DotGrid'
import SplitText from './SplitText'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative pt-6 pb-4">
      <DotGrid cols={20} rows={10} className="hidden md:block top-0 right-0" />

      <div className="hidden md:block absolute top-18 right-60 w-40 md:w-50 pointer-events-none select-none z-10">
        <img
          src={`${BASE}images/hero-decoration.png`}
          alt=""
          className="md:w-full opacity-80"
        />
      </div>

      <div className="relative z-20 pt-2 flex flex-col items-start">
        <SplitText
          text={t('hero.line1')}
          tag="p"
          className="text-white text-3xl md:text-4xl font-normal leading-snug"
          delay={100}
          duration={1.2}
          ease="power3.out"
          splitType="words"
          from={{ opacity: 0, y: 28 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="0px"
          textAlign="left"
        />
        <div className="mt-1">
          <SplitText
            text={t('hero.line2')}
            tag="h1"
            className="text-white text-8xl md:text-9xl font-extrabold leading-none tracking-tight pb-5"
            delay={80}
            duration={1.5}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="left"
          />
        </div>
      </div>
    </section>
  )
}
