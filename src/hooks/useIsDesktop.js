import { useSyncExternalStore } from 'react'

// "PC" = wide screen + a real mouse. Tablets/phones (touch) count as mobile,
// even in landscape.
const DESKTOP_QUERY = '(min-width: 768px) and (hover: hover) and (pointer: fine)'

const subscribe = callback => {
  const mql = window.matchMedia(DESKTOP_QUERY)
  mql.addEventListener('change', callback)
  return () => mql.removeEventListener('change', callback)
}
const getSnapshot = () => window.matchMedia(DESKTOP_QUERY).matches

export default function useIsDesktop() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
