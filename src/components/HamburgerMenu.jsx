import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const u = 'angeljza0612'
const d = 'gmail.com'

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const { t } = useTranslation()

  const close = () => setIsOpen(false)

  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  useEffect(() => { close() }, [location.pathname])

  const navLinks = [
    { label: t('menu.home'),     to: '/'         },
    { label: t('menu.projects'), to: '/projects' },
    { label: t('menu.about'),    to: '/about'    },
  ]

  return (
    <>
      <button
        onClick={() => setIsOpen(o => !o)}
        className="w-8 h-8 flex flex-col justify-center items-center gap-[5px]
                   rounded-md border border-gray-600 hover:border-gray-400
                   transition-colors cursor-pointer"
        aria-label="Open menu"
      >
        <span className="block w-4 h-px bg-gray-300" />
        <span className="block w-4 h-px bg-gray-300" />
        <span className="block w-4 h-px bg-gray-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-[#0B1120]/75 backdrop-blur-sm z-40"
              onClick={close}
            />

            <motion.div
              key="menu"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{ transformOrigin: 'top right' }}
              className="fixed top-4 right-4 z-50 bg-slate-100 rounded-3xl
                         p-7 w-72 md:w-80 flex flex-col gap-8 shadow-2xl"
            >
              <div className="flex justify-end">
                <button onClick={close} aria-label="Close menu"
                  className="w-8 h-8 flex flex-col justify-center items-center gap-[5px] rounded-md cursor-pointer">
                  <span className="block w-4 h-px bg-gray-700" />
                  <span className="block w-4 h-px bg-gray-700" />
                  <span className="block w-4 h-px bg-gray-700" />
                </button>
              </div>

              <nav className="flex flex-col gap-5">
                {navLinks.map(({ label, to }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={close}
                    className={`text-2xl font-bold transition-colors duration-150 ${
                      location.pathname === to
                        ? 'text-[#0B1120]'
                        : 'text-gray-400 hover:text-[#0B1120]'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-5">
                <a href={`mailto:${u}@${d}`} aria-label="Email"
                   className="text-gray-500 hover:text-[#0B1120] transition-colors">
                  <FiMail size={20} />
                </a>
                <a href="https://www.linkedin.com/in/%C3%A1ngel-zamora-072674378"
                   target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                   className="text-gray-500 hover:text-[#0B1120] transition-colors">
                  <FiLinkedin size={20} />
                </a>
                <a href="https://github.com/makore-0612"
                   target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                   className="text-gray-500 hover:text-[#0B1120] transition-colors">
                  <FiGithub size={20} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
