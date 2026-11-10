import { createContext } from 'react'

// Ref to the element that actually scrolls (Layout's inner div, not window).
// Scroll-linked animations (useScroll) need it as their `container`.
export const ScrollContainerContext = createContext(null)
