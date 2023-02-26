import { ReactElement } from 'react'

type Props = {
  type: string
  className?: string
  placeholder: string
  icon: ReactElement
}

const defaultInputClassName =
  'h-10 px-4 border border-primary-200 rounded-lg focus-within:border-primary-500 flex flex-row items-center gap-x-2 grow desktop:max-w-120 desktop:grow'

export default function Input({
  type,
  className: customClassName = '',
  placeholder,
  icon,
}: Props) {
  const className = `${defaultInputClassName} ${customClassName}`

  return (
    <div className={className}>
      <input
        type={type}
        className="w-full h-full border-none outline-none placeholder:focus:text-primary-500"
        placeholder={placeholder}
      />
      {icon}
    </div>
  )
}
