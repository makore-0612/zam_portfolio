import { useTranslation } from 'react-i18next'
import SplitText from '../components/SplitText'
import ScrollFade from '../components/ScrollFade'
import Spotlight from '../components/Spotlight'
import Timeline, { TimelineItem } from '../components/Timeline'
import { prof, education, experience } from '../data/profile'

function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-white font-bold text-2xl whitespace-nowrap">{title}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-teal-400/60 via-gray-700 to-transparent" />
    </div>
  )
}

export default function About() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 pb-12">
        {/* ── Header & Intro ── */}
        <div className="py-12 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 items-center">
            
            <div className="w-full min-h-[120px] md:min-h-[200px] flex items-center">
              <SplitText
                text={t('about_page.title')}
                tag="h1"
                className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-none"
                delay={35}
                duration={0.85}
                ease="power4.out"
                splitType="chars"
                from={{ opacity: 0, y: 60 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="0px"
                textAlign="left"
              />
            </div>
            
            <ScrollFade className="flex flex-col justify-center">
              {prof && prof[lang] && (
                <p className="text-gray-300 text-base md:text-lg leading-relaxed border-l-2 border-teal-400/60 pl-4 md:pl-6">
                  {prof[lang]}
                </p>
              )}
            </ScrollFade>

          </div>
        </div>

        {/* ── Education ── */}
        <section className="mb-14">
          <ScrollFade><SectionHeader title={t('about_page.education')} /></ScrollFade>

          <Timeline>
            {education.map(item => (
              <TimelineItem key={item.id}>
              <div className="flex items-start gap-5">
                <a
                  href={item.logoHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 hover:opacity-80 transition-opacity"
                >
                  <img src={item.logo} alt={item.logoAlt} className="w-16 h-16 object-contain" />
                </a>

                <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                  <div>
                    <h3 className="text-white font-bold text-xl leading-snug">
                      {item[lang].degree}
                    </h3>
                    <p className="text-gray-400 text-sm mt-0.5">{item.institution}</p>
                    <p className="text-white text-sm mt-2">{item[lang].note}</p>
                  </div>
                  <span className="text-gray-400 text-sm whitespace-nowrap flex-shrink-0 sm:pt-1">
                    {item[lang].period}
                  </span>
                </div>
              </div>
              </TimelineItem>
            ))}
          </Timeline>
        </section>

        {/* ── Work Experience ── */}
        <section>
          <ScrollFade><SectionHeader title={t('about_page.experience')} /></ScrollFade>

          <Timeline>
            {experience.map(item => (
              <TimelineItem key={item.id}>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5">
                <div>
                  <h3 className="text-white font-bold text-3xl leading-snug">{item.title}</h3>
                  <p className="text-gray-400 text-md mt-1">{item.company}</p>
                  <p className="text-gray-400 text-md mt-0.5">{item[lang].location}</p>
                </div>

                <div className="group/spot relative overflow-hidden bg-[#152032] rounded-2xl px-6 py-5
                                ring-1 ring-white/5 hover:ring-teal-400/30 transition-shadow duration-300">
                  <Spotlight />
                  <p className="text-white text-sm font-medium mb-3 leading-snug">
                    {item[lang].summary}
                  </p>
                  <ul className="flex flex-col gap-2">
                    {item[lang].bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-2 text-gray-300 text-sm leading-relaxed">
                        <span className="text-gray-500 flex-shrink-0 mt-0.5">·</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              </TimelineItem>
            ))}
          </Timeline>
        </section>

        <ScrollFade className="mt-14 mb-4 text-center">
          <p className="text-gray-400 text-sm">
            {t('about_page.cv_text')}{' '}
            <a
              href={`${import.meta.env.BASE_URL}docs/curriculum.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4 decoration-teal-400/60
                         hover:text-teal-300 transition-colors"
            >
              {t('about_page.cv_link')}
            </a>
          </p>
        </ScrollFade>
    </main>
  )
}
