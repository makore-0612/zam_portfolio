import { useTranslation } from 'react-i18next'

const BASE = import.meta.env.BASE_URL

export default function Bio() {
  const { t } = useTranslation()

  return (
    <section className="flex flex-row items-center gap-4 py-5">
      <img
        src={`${BASE}images/profile-pic.jpg`}
        alt="Ángel Zamora"
        className="w-35 h-35 md:w-45 md:h-45 rounded-full object-cover flex-shrink-0"
      />
      <div className="flex flex-col gap-2">
        <p className="text-white font-semibold text-md md:text-3xl leading-snug">
          {t('bio.primary')}
        </p>
        <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
          {t('bio.secondary')}
        </p>
      </div>
    </section>
  )
}
