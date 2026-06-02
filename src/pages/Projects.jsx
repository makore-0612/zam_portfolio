import { useTranslation } from 'react-i18next'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectAccordion from '../components/ProjectAccordion'
import SplitText from '../components/SplitText'
import { projects } from '../data/projects'

export default function Projects() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 pb-10">
        <div className="flex justify-center py-10 pb-14">
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

        <div className="flex flex-col gap-4">
          {projects.map(project => (
            <ProjectAccordion key={project.id} project={project} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
