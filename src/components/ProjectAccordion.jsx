import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export default function ProjectAccordion({ project }) {
  const [isOpen, setIsOpen] = useState(false)
  const { t, i18n } = useTranslation()
  const lang = i18n.language.startsWith('es') ? 'es' : 'en'

  const { title, href, description, image, tools, tags } = project

  return (
    <div className="bg-[#152032] rounded-2xl overflow-hidden">

      <div className="flex items-center justify-between px-6 py-5 gap-4">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1.5 text-white font-bold text-lg
                     hover:text-teal-400 transition-colors duration-200"
        >
          {title[lang]}
          <span className="text-base opacity-0 -translate-y-0.5 translate-x-0
                           group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-0.5
                           transition-all duration-200">
            ↗
          </span>
        </a>

        <button
          onClick={() => setIsOpen(o => !o)}
          className="flex-shrink-0 text-gray-400 text-sm font-semibold
                     hover:text-white transition-colors duration-200 cursor-pointer"
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
          >
            <div className="flex flex-col md:flex-row gap-5 px-6 pb-6">

              <div className="flex-shrink-0 w-full md:w-52 h-44 rounded-xl overflow-hidden bg-[#0d1a2b]">
                {image ? (
                  <img src={image} alt={title[lang]} className="w-full h-full object-cover" />
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

                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                  <div>
                    <p className="text-white font-bold text-sm mb-2">
                      {t('projects_page.tools_label')}
                    </p>
                    <div className="flex items-center gap-3">
                      {tools.map(({ Icon, color, label }) => (
                        <Icon key={label} title={label} style={{ color, fontSize: '1.75rem' }} />
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 justify-start sm:justify-end">
                    {tags[lang].map(tag => (
                      <span key={tag}
                        className="bg-teal-600 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
