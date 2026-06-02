export default function DotGrid({ cols = 14, rows = 8, className = '' }) {
  const dots = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      dots.push(
        <circle
          key={`${r}-${c}`}
          cx={c * 18 + 9}
          cy={r * 18 + 9}
          r={1.5}
          fill="rgba(255,255,255,0.18)"
        />
      )
    }
  }
  return (
    <svg
      className={`absolute pointer-events-none select-none ${className}`}
      width={cols * 18}
      height={rows * 18}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {dots}
    </svg>
  )
}
