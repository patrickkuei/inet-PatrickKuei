import React from 'react'

const buttonClassNameMap = {
  small: {
    filled:
      'h-10 px-8 border-2 rounded-3xl border-primary-500 text-primary-500',
    elevated: '',
    outline:
      'h-10 px-8 border-2 rounded-3xl bg-primary-500 border-primary-500 text-white',
  },
  medium: {
    filled:
      'h-10 px-8 border-2 rounded-3xl border-primary-500 text-primary-500',
    elevated: '',
    outline:
      'h-10 px-8 border-2 rounded-3xl bg-primary-500 border-primary-500 text-white',
  },
  large: {
    filled:
      'h-10 px-8 border-2 rounded-3xl border-primary-500 text-primary-500',
    elevated: '',
    outline:
      'h-10 px-8 border-2 rounded-3xl bg-primary-500 border-primary-500 text-white',
  },
}

type Props = {
  title: string
  size: 'small' | 'medium' | 'large'
  type: 'filled' | 'elevated' | 'outline'
  width?: string
}

function Button({ title, size, type, width }: Props) {
  const defaultButtonClass = buttonClassNameMap[size][type]
  const className = width
    ? defaultButtonClass.concat(' ', width)
    : defaultButtonClass

  return (
    <button type="button" className={className}>
      {title}
    </button>
  )
}
Button.defaultProps = {
  width: undefined,
}
export default Button
