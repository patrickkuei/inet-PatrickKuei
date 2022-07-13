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
  /**
   * @default 'button'
   */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
  /**
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'custom'
  title?: string
  /**
   * @default false
   */
  isSizeCustom?: boolean
  /**
   * @default 'medium'
   */
  size?: ButtonSize
  /**
   * @default 'filled'
   */
  fillType?: FillType
  icon?: ReactElement
  /**
   * @default false
   */
  disabled?: boolean
  onClick?: MouseEventHandler
}

function Button({
  className: customClassName = '',
  type = 'button',
  variant = 'primary',
  title = '',
  isSizeCustom = false,
  size = 'medium',
  fillType = 'filled',
  icon,
  disabled = false,
  onClick,
}: Props) {
  const sizeValue = title ? sizeMap[size] : iconSizeMap[size]
  const className =
    variant === 'custom'
      ? customClassName
      : isSizeCustom
      ? `${fillTypeMap[fillType]} ${commonStyle} ${customClassName}`
      : `${sizeValue} ${fillTypeMap[fillType]} ${commonStyle} ${customClassName}`

  return (
    <button
      type={type}
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
