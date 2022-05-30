import React, { MouseEventHandler, ReactElement } from 'react'

type ButtonSize = 'small' | 'medium' | 'large'
type FillType = 'filled' | 'elevated' | 'outline' | 'ghost'

const commonStyle =
  'flex justify-center items-center border rounded-3xl whitespace-nowrap'

const sizeMap: Record<ButtonSize, string> = {
  small: 'h-8 px-4',
  medium: 'h-10 px-8',
  large: 'h-16 px-8',
}
const iconSizeMap: Record<ButtonSize, string> = {
  small: 'h-8 w-8',
  medium: 'h-10 w-10',
  large: 'h-16 w-16 p-4',
}

const fillTypeMap: Record<FillType, string> = {
  filled: 'bg-primary-500 border-primary-500 text-white',
  elevated: 'text-primary-500 border-none shadow-1',
  outline: 'border-primary-500 text-primary-500',
  ghost: 'fill-primary-500 border-none',
}

type Props = {
  className?: string
  variant?: 'primary' | 'secondary' | 'custom'
  title?: string
  size?: ButtonSize
  type?: FillType
  icon?: ReactElement
  disabled?: boolean
  onClick?: MouseEventHandler
}

function Button({
  className: customClassName = '',
  variant = 'primary',
  title = '',
  size = 'medium',
  type = 'filled',
  icon,
  disabled = false,
  onClick,
}: Props) {
  const sizeValue = title ? sizeMap[size!] : iconSizeMap[size!]
  const className =
    variant === 'custom'
      ? customClassName
      : `${sizeValue} ${fillTypeMap[type!]} ${commonStyle} ${customClassName}`

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
      {title}
    </button>
  )
}

export default Button
