import React, { ReactElement } from 'react'

type Props = {
  type: string
  className?: string
  placeholder: string
  icon: ReactElement
}

const defaultInputClassName =
  'w-full h-full border-none outline-none placeholder:focus:text-primary-500'

export default function Input({
  type,
  className: customClassName = '',
  placeholder,
  icon,
}: Props) {
  const className = `${defaultInputClassName} ${customClassName}`

  return (
    <div className="h-10 px-4 border-2 border-primary-200 rounded-lg focus-within:border-primary-500 flex flex-row items-center gap-x-2 grow desktop:max-w-120 desktop:grow">
      <input type={type} className={className} placeholder={placeholder} />
      {icon}
    </div>
  )
}
