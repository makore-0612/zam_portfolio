import { useContext, useEffect, useRef } from 'react'
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ScrollContainerContext } from '../context/scrollContainer'
import useIsDesktop from '../hooks/useIsDesktop'
import Reveal from './Reveal'

// Scroll-linked reveal: as the element rises from the bottom of the screen it
// goes from transparent + blurred + shifted down to fully sharp. It's tied to
// the scroll position, so scrolling back up fades it out again.
//
// `distance` = how many px of scrolling the transition takes. Elements near the
// end of the page can't travel that far (the page runs out), so the distance is
// shortened for them and they always end up fully visible at the bottom.
//
// Mobile only: on PC it falls back to <Reveal> (a single fade-in, no blur).
export default function ScrollFade({ children, className = '', distance = 260, y = 40, blur = 8 }) {
  const outerRef = useRef(null)
  const container = useContext(ScrollContainerContext)
  const reduceMotion = useReducedMotion()
  const isDesktop = useIsDesktop()

  const progress = useMotionValue(0)
  const smooth = useSpring(progress, { stiffness: 260, damping: 40, restDelta: 0.001 })
  const translateY = useTransform(smooth, [0, 1], [y, 0])
  const filter = useTransform(smooth, v => (v >= 0.999 ? 'none' : `blur(${(1 - v) * blur}px)`))

  useEffect(() => {
    if (reduceMotion || isDesktop) return
    const el = outerRef.current
    const sc = container?.current
    if (!el || !sc) return

    let frame = 0
    const update = () => {
      frame = 0
      const viewH = sc.clientHeight
      const maxScroll = sc.scrollHeight - viewH
      // Element's top measured inside the scrollable content (scroll-independent)
      const top = el.getBoundingClientRect().top - sc.getBoundingClientRect().top + sc.scrollTop
      const travelled = viewH - (top - sc.scrollTop)   // px the element has risen above the bottom edge
      const reachable = viewH - top + maxScroll         // max it can ever rise
      const dist = Math.max(1, Math.min(distance, reachable))
      progress.set(Math.min(1, Math.max(0, travelled / dist)))
    }
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update) }

    const observer = new ResizeObserver(schedule)
    observer.observe(sc)
    if (sc.firstElementChild) observer.observe(sc.firstElementChild)
    sc.addEventListener('scroll', schedule, { passive: true })
    update()

    return () => {
      observer.disconnect()
      sc.removeEventListener('scroll', schedule)
      cancelAnimationFrame(frame)
    }
  }, [container, distance, progress, reduceMotion, isDesktop])

  if (isDesktop) return <Reveal className={className}>{children}</Reveal>
  if (reduceMotion) return <div className={className}>{children}</div>

  // Outer div is measured (never transformed); inner one is animated.
  return (
    <div ref={outerRef} className={className}>
      <motion.div style={{ opacity: smooth, y: translateY, filter }}>
        {children}
      </motion.div>
    </div>
  )
}
