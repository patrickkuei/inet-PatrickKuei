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
  small: 'h-8 w-8 p-2',
  medium: 'h-10 w-10 p-3',
  large: 'h-16 w-16 p-4',
}

const fillTypeMap: Record<FillType, string> = {
  filled: 'bg-primary-500 border-primary-500 text-white',
  elevated: 'text-primary-500 border-none shadow-1',
  outline: 'border-primary-500 text-primary-500',
  ghost: 'text-primary-500 border-none',
}

type Props = {
  className?: string
  variant?: 'primary' | 'secondary'
  title?: string
  size: ButtonSize
  type: FillType
  icon?: ReactElement
  onClick?: MouseEventHandler
}

function Button({
  className: customClassName,
  // eslint-disable-next-line no-unused-vars
  variant,
  title,
  size,
  type,
  icon,
  onClick,
}: Props) {
  const sizeValue = title ? sizeMap[size] : iconSizeMap[size]
  const className = `${sizeValue} ${fillTypeMap[type]} ${commonStyle} ${customClassName}`

  return (
    <button type="button" className={className} onClick={onClick}>
      {icon}
      {title}
    </button>
  )
}

Button.defaultProps = {
  className: '',
  variant: 'primary',
  title: '',
  icon: '',
  onClick: undefined,
}

export default Button
