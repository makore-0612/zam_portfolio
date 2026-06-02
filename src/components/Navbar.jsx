import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HamburgerMenu from './HamburgerMenu'

const BASE = import.meta.env.BASE_URL

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const toggle = () => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')

  return (
    <nav className="w-full max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
        <img
          src={`${BASE}images/logo.png`}
          alt="Ángel Zamora"
          className="w-9 h-9 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex flex-col leading-tight">
          <span className="text-white font-semibold text-sm">Ángel Zamora</span>
          <span className="text-gray-400 text-[10px] tracking-widest uppercase">
            {t('navbar.role')}
          </span>
        </div>
      </Link>

      <div className="flex items-center gap-2">
        <button
          onClick={toggle}
          className="border border-gray-600 text-gray-300 text-xs px-3 py-1 rounded-full
                     hover:border-white hover:text-white transition-colors cursor-pointer"
          aria-label="Toggle language"
        >
          {t('navbar.lang_toggle')}
        </button>
        <HamburgerMenu />
      </div>
    </nav>
  )
}
