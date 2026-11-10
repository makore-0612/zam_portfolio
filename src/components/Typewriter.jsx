import { useEffect, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

// Types each word, pauses, deletes it, and moves on to the next one.
export default function Typewriter({
  words,
  startDelay = 1200,
  typeSpeed = 70,
  deleteSpeed = 35,
  pause = 1800,
  prefix = '> ',
  className = '',
}) {
  const reduceMotion = useReducedMotion()
  const [started, setStarted] = useState(false)
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (reduceMotion || !words.length) return

    let timeout
    const word = words[index % words.length]

    if (!started) {
      timeout = setTimeout(() => setStarted(true), startDelay)
    } else if (!deleting && text === word) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false)
        setIndex(i => (i + 1) % words.length)
      }, 300)
    } else {
      timeout = setTimeout(
        () => setText(deleting ? text.slice(0, -1) : word.slice(0, text.length + 1)),
        deleting ? deleteSpeed : typeSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [words, index, text, deleting, started, reduceMotion, startDelay, typeSpeed, deleteSpeed, pause])

  return (
    <span className={`font-mono ${className}`} aria-label={words.join(', ')}>
      {prefix && <span className="text-gray-500" aria-hidden="true">{prefix}</span>}
      <span className="text-teal-400" aria-hidden="true">{reduceMotion ? words[0] : text}</span>
      <span className="text-teal-300 animate-pulse" aria-hidden="true">▍</span>
    </span>
  )
}
