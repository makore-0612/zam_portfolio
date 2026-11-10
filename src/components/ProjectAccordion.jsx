import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import Spotlight from './Spotlight'

export default function ProjectAccordion({ project }) {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'

  const { title, href, description, image, tools, tags, collaborators } = project


  return (
    <div
      className="group/spot relative bg-[#152032] rounded-2xl overflow-hidden
                 ring-1 ring-white/5 hover:ring-teal-400/30 transition-shadow duration-300"
    >
      <Spotlight />

      <div className="relative flex items-center justify-between px-6 py-5 gap-4">
        <div className="flex flex-col gap-2 min-w-0">
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-white font-bold text-lg
                       hover:text-teal-400 transition-colors duration-200"
          >
            {title[lang]}
            <span className="inline-block ml-1.5 text-base opacity-50 -translate-y-0.5 translate-x-0
                             group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-0.5
                             transition-all duration-200">
              ↗
            </span>
          </a>

          <div className="flex items-center gap-2.5">
            {tools.map(({ Icon, color, label }) => (
              <Icon
                key={label}
                title={label}
                aria-label={label}
                style={{ color, fontSize: '1.15rem' }}
                className="opacity-75 hover:opacity-100 hover:scale-110 transition-all duration-200"
              />
            ))}
          </div>
        </div>

        <button
          onClick={() => setIsOpen(o => !o)}
          aria-expanded={isOpen}
          className="flex-shrink-0 text-gray-400 text-sm font-semibold
                     hover:text-teal-300 transition-colors duration-200 cursor-pointer"
        >
          {isOpen ? t('projects_page.details_close') : t('projects_page.details_open')}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
            className="relative"
          >
            <div className="flex flex-col md:flex-row gap-5 px-6 pb-6">

              <div className="flex-shrink-0 w-full md:w-52 h-44 rounded-xl overflow-hidden bg-[#0d1a2b]">
                {image ? (
                  <img
                    src={image}
                    alt={title[lang]}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs">
                    image placeholder
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col justify-between gap-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {description[lang]}
                </p>
                {collaborators?.length > 0 && (
                  <p className="text-gray-400 text-sm">
                    {lang === 'es' ? 'En colaboración con ' : 'In collaboration with '}
                    {collaborators.map((c, i) => (
                      <span key={c.github}>
                        <a href={c.github} target="_blank" rel="noopener noreferrer"
                          className="text-teal-400 hover:underline">
                          {c.name}
                        </a>
                        {i < collaborators.length - 1 && ', '}
                      </span>
                    ))}
                  </p>
                )}


                <div className="flex flex-wrap gap-2">
                  {tags[lang].map(tag => (
                    <span key={tag}
                      className="bg-teal-600/90 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
