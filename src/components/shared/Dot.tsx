import clsx from 'clsx'

export interface IDotProps {
  className?: string
  overwrite?: boolean
}

export default function Dot({ className, overwrite }: IDotProps) {
  return (
    <span className={clsx(!overwrite && 'text-gray-400', className)}>•</span>
  )
}
