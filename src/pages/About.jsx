import { useTranslation } from 'react-i18next'
import SplitText from '../components/SplitText'
import { education, experience } from '../data/profile'

function SectionHeader({ title }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <h2 className="text-white font-bold text-2xl whitespace-nowrap">{title}</h2>
      <div className="flex-1 border-t border-gray-700" />
    </div>
  )
}

export default function About() {
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 pb-12">

        <div className="flex justify-center py-10 pb-14">
          <SplitText
            text={t('about_page.title')}
            tag="h1"
            className="text-5xl md:text-8xl font-extrabold text-white pb-4"
            delay={35}
            duration={0.85}
            ease="power4.out"
            splitType="chars"
            from={{ opacity: 0, y: 60 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="0px"
            textAlign="center"
          />
        </div>

        {/* ── Education ── */}
        <section className="mb-14">
          <SectionHeader title={t('about_page.education')} />

          <div className="flex flex-col gap-8">
            {education.map(item => (
              <div key={item.id} className="flex items-start gap-5">
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
            ))}
          </div>
        </section>

        {/* ── Work Experience ── */}
        <section>
          <SectionHeader title={t('about_page.experience')} />

          <div className="flex flex-col gap-8">
            {experience.map(item => (
              <div key={item.id} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5">
                <div>
                  <h3 className="text-white font-bold text-3xl leading-snug">{item.title}</h3>
                  <p className="text-gray-400 text-md mt-1">{item.company}</p>
                  <p className="text-gray-400 text-md mt-0.5">{item[lang].location}</p>
                </div>

                <div className="bg-[#152032] rounded-2xl px-6 py-5">
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
            ))}
          </div>
        </section>
    </main>
  )
}
