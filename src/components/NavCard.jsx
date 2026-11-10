import Spotlight from './Spotlight'

export default function NavCard({ title, subtitle, imageSrc, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group/spot relative w-full text-left bg-[#111827] rounded-xl overflow-hidden
                 flex flex-row md:flex-col cursor-pointer
                 ring-1 ring-white/5 hover:ring-teal-400/40 hover:-translate-y-1
                 hover:shadow-[0_12px_40px_-12px_rgba(45,212,191,0.35)]
                 active:scale-95 transition-all duration-300
                 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400"
    >
      {/* Image — left on mobile, top on desktop */}
      <div className="w-28 h-30 md:w-full md:h-60 flex-shrink-0 overflow-hidden">
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover transition-transform duration-500
                     group-hover/spot:scale-105"
          style={{ minHeight: '6rem' }}
        />
      </div>

      {/* Text */}
      <div className="p-3 flex flex-col justify-center">
        <p className="text-white text-lg font-semibold leading-snug transition-colors duration-300
                      group-hover/spot:text-teal-300">
          {title}
        </p>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">{subtitle}</p>
      </div>

      <Spotlight />
    </button>
  )
}
