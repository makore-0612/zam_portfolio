import { useTranslation } from 'react-i18next'
import ProjectAccordion from '../components/ProjectAccordion'
import Reveal from '../components/Reveal'
import SplitText from '../components/SplitText'
import { projects } from '../data/projects'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <main className="flex-1 w-full max-w-6xl mx-auto px-4 pb-10">
      <div className="flex justify-center py-10 pb-8">
        <SplitText
          text={t('projects_page.title')}
          tag="h1"
          className="text-7xl md:text-9xl font-extrabold text-white pb-5"
          delay={55}
          duration={0.9}
          ease="power4.out"
          splitType="chars"
          from={{ opacity: 0, y: 60 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="0px"
          textAlign="center"
        />
      </div>

      <Reveal delay={0.3}>
        <p className="text-center text-gray-400 text-base md:text-lg mb-6">
          {t('projects_page.click_hint')}
        </p>
      </Reveal>

      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={0.4 + i * 0.1}>
            <ProjectAccordion project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10 mb-4 text-center">
        <p className="text-gray-400 text-sm">
          {t('projects_page.more_text')}{' '}
          <a
            href="https://github.com/makore-0612?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 decoration-teal-400/60
                       hover:text-teal-300 transition-colors"
          >
            {t('projects_page.more_link')}
          </a>
        </p>
      </Reveal>
    </main>
  )
}
