import React, { MouseEventHandler, ReactElement } from 'react'

// eslint-disable-next-line operator-linebreak
const commonStyle =
  'flex justify-center items-center border rounded-3xl whitespace-nowrap'

const sizeMap = {
  small: 'h-8 px-4',
  medium: 'h-10 px-8',
  large: 'h-16 px-8',
}
const iconSizeMap = {
  small: 'h-8 w-8 p-2',
  medium: 'h-10 w-10 p-3',
  large: 'h-16 w-16 p-4',
}

const fillTypeMap = {
  filled: 'bg-primary-500 border-primary-500 text-white',
  elevated: 'text-primary-500 border-none shadow-1',
  outline: 'border-primary-500 text-primary-500',
  ghost: 'text-primary-500 border-none',
}

type Props = {
  variant?: 'primary' | 'secondary'
  title?: string
  size: 'small' | 'medium' | 'large'
  type: 'filled' | 'elevated' | 'outline' | 'ghost'
  width?: string
  icon?: ReactElement
  onClick?: MouseEventHandler
}

// eslint-disable-next-line no-unused-vars
function Button({ variant, title, size, type, width, icon, onClick }: Props) {
  const sizeValue = title ? sizeMap[size] : iconSizeMap[size]
  const className = `${sizeValue} ${fillTypeMap[type]} ${commonStyle} ${width}`

  const children = icon ? (
    <>
      {icon}
      {title}
    </>
  ) : (
    title
  )

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}
Button.defaultProps = {
  variant: 'primary',
  title: '',
  width: '',
  icon: '',
  onClick: undefined,
}
export default Button
