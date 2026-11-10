import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import HamburgerMenu from './HamburgerMenu'
import Typewriter from './Typewriter'

const BASE = import.meta.env.BASE_URL

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const toggle = () => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')

  return (
    <header className="relative border-b border-gray-800/80">
      {/* Glass background lives on its own layer: putting backdrop-blur on the
          <header> itself would trap the menu's `position: fixed` overlay/panel
          inside the header box (and under the page content). */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[#0B1120]/70 backdrop-blur-md" />
      <nav className="w-full max-w-6xl mx-auto px-4 py-3 flex items-center justify-between ">
        <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <img
            src={`${BASE}images/logo.png`}
            alt="Ángel Zamora"
            className="w-9 h-9 rounded-full object-cover flex-shrink-0"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-semibold text-sm">Ángel Zamora</span>
            <Typewriter
              words={t('navbar.roles', { returnObjects: true })}
              startDelay={800}
              prefix=""
              className="text-[10px] tracking-widest uppercase min-h-[15px] whitespace-nowrap"
            />
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
    </header>
  )
}
