import { useTranslation } from 'react-i18next'
import SocialLinks from './SocialLinks'
import { EMAIL } from '../data/social'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-gray-800 mt-auto">
      <div className="w-full max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-gray-500 text-sm">© 2026</span>

        <a
          href={`mailto:${EMAIL}`}
          className="text-gray-400 text-sm hover:text-white transition-colors"
        >
          {t('footer.contact')}
        </a>

        <SocialLinks />
      </div>
    </footer>
  )
}
