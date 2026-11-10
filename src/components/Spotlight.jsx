import { useEffect, useRef } from 'react'

// Radial glow that follows the mouse inside its parent.
// The parent needs: `relative overflow-hidden group/spot`.
// Only reacts to a real mouse, and Tailwind's hover variants only apply on
// hover-capable devices, so it stays off on phones.
export default function Spotlight({ color = 'rgba(45, 212, 191, 0.13)', size = 380 }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const parent = el?.parentElement
    if (!parent) return

    const onMove = e => {
      if (e.pointerType !== 'mouse') return
      const rect = parent.getBoundingClientRect()
      el.style.setProperty('--spot-x', `${e.clientX - rect.left}px`)
      el.style.setProperty('--spot-y', `${e.clientY - rect.top}px`)
    }

    parent.addEventListener('pointermove', onMove)
    return () => parent.removeEventListener('pointermove', onMove)
  }, [])

  return (
    <span
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300
                 group-hover/spot:opacity-100"
      style={{
        background: `radial-gradient(${size}px circle at var(--spot-x, 50%) var(--spot-y, 50%), ${color}, transparent 70%)`,
      }}
    />
  )
}
