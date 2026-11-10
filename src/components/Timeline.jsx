import { useContext, useRef } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ScrollContainerContext } from '../context/scrollContainer'
import ScrollFade from './ScrollFade'

// Vertical timeline whose teal line "draws" itself as you scroll through it.
export default function Timeline({ children }) {
  const ref = useRef(null)
  const container = useContext(ScrollContainerContext)
  const { scrollYProgress } = useScroll({
    target: ref,
    container,
    offset: ['start 80%', 'end 75%'],
  })
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <div ref={ref} className="relative pl-8">
      <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gray-800" />
      <motion.div
        style={{ scaleY }}
        className="absolute left-[10.5px] top-2 bottom-2 w-[2px] origin-top
                   shadow-[0_0_8px_rgba(45,212,191,0.5)]
                   bg-gradient-to-b from-teal-300 via-teal-400 to-teal-600"
      />
      <div className="flex flex-col gap-10">{children}</div>
    </div>
  )
}

export function TimelineItem({ children }) {
  return (
    <ScrollFade className="relative" blur={0} distance={50}>
      <span
        aria-hidden="true"
        className="absolute -left-[26.5px] top-2 w-3 h-3 rounded-full border-2 border-teal-400
                   bg-[#0B1120] shadow-[0_0_10px_rgba(45,212,191,0.6)]"
      />
      {children}
    </ScrollFade>
  )
}
