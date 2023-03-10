import clsx from 'clsx'
import { CSSProperties } from 'react'
import './Spinner.css'

export interface ISpinnerProps {
  className?: string
  size: SpinnerDotSize
}

type SpinnerDotSize = 'sm' | 'md' | 'lg'
const dotSizeMap: Record<SpinnerDotSize, number> = {
  sm: 6,
  md: 12,
  lg: 18,
}

const dotsCount = 8
const dotsIndexes = Array.from(Array(dotsCount).keys())

export default function Spinner({ className, size }: ISpinnerProps) {
  const dotSize = dotSizeMap[size]
  const dotsContainerSize = dotSize * 5

  const dotsContainerStyle: CSSProperties = {
    width: `${dotsContainerSize}px`,
    height: `${dotsContainerSize}px`,
  }

  const calcDotStyle = (index: number): CSSProperties => {
    const angle = (2 * Math.PI * (7 - index)) / 8
    const containerRadius = dotsContainerSize / 2
    const dotRadius = dotSize / 2
    const x = Math.cos(angle) * containerRadius + containerRadius - dotRadius
    const y = Math.sin(angle) * containerRadius + containerRadius - dotRadius
    const animationDelay = -0.2 * index

    return {
      width: `${dotSize}px`,
      height: `${dotSize}px`,
      left: `${x}px`,
      top: `${y}px`,
      animation: 'spinner-dot-scale-animation 0.8s alternate infinite',
      animationDelay: `${animationDelay}s`,
    }
  }

  return (
    <div className={clsx('flex items-center justify-center w-full', className)}>
      <div className="relative" style={dotsContainerStyle}>
        {dotsIndexes.map((i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary-500"
            style={calcDotStyle(i)}
          />
        ))}
      </div>
    </div>
  )
}
