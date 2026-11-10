import { Suspense, lazy } from 'react'
import useIsDesktop from '../hooks/useIsDesktop'

// Loaded on demand: phones never download the WebGL code at all.
const Balatro = lazy(() => import('./Balatro'))

export default function AnimatedBackground() {
  const isDesktop = useIsDesktop()
  if (!isDesktop) return null

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 pointer-events-none">
      <Suspense fallback={null}>
        <Balatro
          color1="#1E3A66"
          color2="#152032"
          color3="#0B1120"
          swirl={0}
          pixelSize={0}
          mouseInteraction={false}
          lighting={0}
          speed={0.1}
          scale={3}
          detail={4}
          crt={1}
        />
      </Suspense>
      {/* Darkening veil so text stays readable over the paint */}
      <div className="absolute inset-0 bg-[#0B1120]/35" />
    </div>
  )
}
