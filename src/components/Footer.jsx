import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const u = 'angeljza0612'
const d = 'gmail.com'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="border-t border-gray-800 mt-auto">
      <div className="w-full max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <span className="text-gray-500 text-sm">© 2026</span>

        <a
          href={`mailto:${u}@${d}`}
          className="text-gray-400 text-sm hover:text-white transition-colors"
        >
          {t('footer.contact')}
        </a>

        <div className="flex items-center gap-3">
          <a href={`mailto:${u}@${d}`} aria-label="Email"
             className="text-gray-400 hover:text-white transition-colors">
            <FiMail size={20} />
          </a>
          <a href="https://www.linkedin.com/in/%C3%A1ngel-zamora-072674378"
             target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
             className="text-gray-400 hover:text-white transition-colors">
            <FiLinkedin size={20} />
          </a>
          <a href="https://github.com/makore-0612"
             target="_blank" rel="noopener noreferrer" aria-label="GitHub"
             className="text-gray-400 hover:text-white transition-colors">
            <FiGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  )
}
