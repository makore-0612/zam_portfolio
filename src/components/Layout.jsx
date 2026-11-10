import { Suspense, useEffect, useRef } from 'react'
import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, MotionConfig, motion } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import AnimatedBackground from './AnimatedBackground'
import { ScrollContainerContext } from '../context/scrollContainer'

export default function Layout() {
  const location = useLocation()
  const outlet = useOutlet()
  const scrollRef = useRef(null)
  const prevPathRef = useRef(location.pathname)

  // Going to a *different* page scrolls to top in AnimatePresence's
  // onExitComplete (below). This covers picking the page you're already on
  // (e.g. "Home" in the menu while on Home): glide back to the top.
  useEffect(() => {
    if (prevPathRef.current === location.pathname) {
      scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
    }
    prevPathRef.current = location.pathname
  }, [location.key, location.pathname])

  return (
    // reducedMotion="user": honours the OS "reduce motion" setting
    <MotionConfig reducedMotion="user">
      <AnimatedBackground />
      <div className="relative z-10 h-dvh flex flex-col">
        <Navbar />

        <ScrollContainerContext.Provider value={scrollRef}>
          <div ref={scrollRef} className="flex-1 overflow-y-auto overflow-x-hidden">
            <AnimatePresence
              mode="wait"
              initial={false}
              onExitComplete={() => scrollRef.current?.scrollTo({ top: 0 })}
            >
              <motion.div
                key={location.pathname}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Suspense fallback={null}>{outlet}</Suspense>
              </motion.div>
            </AnimatePresence>
          </div>
        </ScrollContainerContext.Provider>

        <Footer />
      </div>
    </MotionConfig>
  )
}
