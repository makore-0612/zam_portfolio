import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import NavCard from './NavCard'
import Reveal from './Reveal'

const BASE = import.meta.env.BASE_URL

export default function NavCards() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <section className="flex flex-col md:grid md:grid-cols-2 gap-3 pb-6">
      <Reveal>
      <NavCard
        title={t('nav_cards.projects_title')}
        subtitle={t('nav_cards.projects_subtitle')}
        imageSrc={`${BASE}images/bg-texture.png`}
        onClick={() => navigate('/projects')}
      />
      </Reveal>
      <Reveal delay={0.12}>
      <NavCard
        title={t('nav_cards.about_title')}
        subtitle={t('nav_cards.about_subtitle')}
        imageSrc={`${BASE}images/navcard-decoration.jpg`}
        onClick={() => navigate('/about')}
      />
      </Reveal>
    </section>
  )
}
