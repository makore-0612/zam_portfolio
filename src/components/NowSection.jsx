import { useTranslation } from 'react-i18next'
import Reveal from './Reveal'
import Spotlight from './Spotlight'
import { now } from '../data/now'

const text = (value, lang) => (typeof value === 'string' ? value : value[lang] ?? value.en)

export default function NowSection() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language?.startsWith('es') ? 'es' : 'en'

  return (
    <section className="pb-6">
      <Reveal>
        <h2 className="font-mono text-xs tracking-widest uppercase text-gray-500 mb-3">
          <span className="text-teal-400">//</span> {t('now.title')}
        </h2>
      </Reveal>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-3">
        {now.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.1}>
            <article
              className="group/spot relative h-full bg-[#111827] rounded-xl overflow-hidden
                         flex items-center gap-4 p-3
                         ring-1 ring-white/5 hover:ring-teal-400/40 transition-all duration-300"
            >
              <img
                src={item.image}
                alt=""
                className="w-20 h-20 rounded-lg object-cover flex-shrink-0 shadow-lg
                           transition-transform duration-500 group-hover/spot:scale-105"
              />
              <div className="flex flex-col min-w-0">
                <span className="font-mono text-[10px] tracking-widest uppercase text-teal-400">
                  {t(`now.${item.label}`)}
                </span>
                <p className="text-white font-semibold leading-snug mt-1">
                  {text(item.title, lang)}
                </p>
                <p className="text-gray-400 text-sm leading-snug">
                  {text(item.subtitle, lang)}
                </p>
              </div>
              <Spotlight />
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
