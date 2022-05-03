import React from 'react'

const commonStyle = 'border-2 rounded-3xl whitespace-nowrap'

const sizeMap = {
  small: 'h-8 px-4',
  medium: 'h-10 px-8',
  large: 'h-16 px-8',
}

const fillTypeMap = {
  filled: 'bg-primary-500 border-primary-500 text-white',
  elevated: 'text-primary-500 border-none shadow-1',
  outline: 'border-primary-500 text-primary-500',
  ghost: 'text-primary-500 border-none',
}

type Props = {
  variant?: 'primary' | 'secondary'
  title: string
  size: 'small' | 'medium' | 'large'
  type: 'filled' | 'elevated' | 'outline' | 'ghost'
  width?: string
}

// eslint-disable-next-line no-unused-vars
function Button({ variant, title, size, type, width }: Props) {
  const className = `${sizeMap[size]} ${fillTypeMap[type]} ${commonStyle} ${width}`

  return (
    <button type="button" className={className}>
      {title}
    </button>
  )
}
Button.defaultProps = {
  variant: 'primary',
  width: '',
}
export default Button
