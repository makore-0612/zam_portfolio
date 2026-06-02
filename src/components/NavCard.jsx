export default function NavCard({ title, subtitle, imageSrc, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-[#111827] rounded-xl overflow-hidden
                 flex flex-row md:flex-col
                 hover:brightness-110 active:scale-95 transition-all duration-200
                 focus:outline-none focus:ring-2 focus:ring-gray-500"
    >
      {/* Image — left on mobile, top on desktop */}
      <div className="w-28 h-30 md:w-full md:h-60 flex-shrink-0">
        <img
          src={imageSrc}
          alt=""
          className="w-full h-full object-cover"
          style={{ minHeight: '6rem' }}
        />
      </div>

      {/* Text */}
      <div className="p-3 flex flex-col justify-center">
        <p className="text-white text-lg font-semibold leading-snug">{title}</p>
        <p className="text-gray-400 text-sm mt-1 leading-relaxed">{subtitle}</p>
      </div>
    </button>
  )
}
