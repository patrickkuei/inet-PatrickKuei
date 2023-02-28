import { CancelIcon } from '@inet/icons'
import clsx from 'clsx'
import { forwardRef, LegacyRef, ReactElement, Ref, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from './Button'

type Props = {
  type: string
  className?: string
  placeholder: string
  suffix: ReactElement
  onSubmit?: () => void
  onCancelClick?: () => void
}

const defaultInputClassName =
  'h-10 px-4 border border-primary-200 rounded-lg focus-within:border-primary-500 flex flex-row items-center gap-x-2 grow desktop:max-w-120 desktop:grow'

const useInputValue = (
  onSubmit: (() => void) | undefined,
  onCancelClick: (() => void) | undefined,
) => {
  const [searchParams] = useSearchParams()
  const [value, setValue] = useState(searchParams.get('keyword') ?? '')
  const [shouldShowCancel, setShouldShowCancel] = useState(Boolean(value))

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = event.target

    setValue(newValue)

    if (newValue.length > 0) {
      setShouldShowCancel(true)
    } else {
      setShouldShowCancel(false)
    }
  }

  const handleCancelClick = () => {
    setValue('')
    setShouldShowCancel(false)
    onCancelClick && onCancelClick()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit && onSubmit()
    }
  }

  return {
    value,
    shouldShowCancel,
    handleChange,
    handleKeyDown,
    handleCancelClick,
  }
}

const Input = (
  {
    type,
    className: customClassName = '',
    placeholder,
    suffix,
    onSubmit,
    onCancelClick,
  }: Props,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  const className = `${defaultInputClassName} ${customClassName}`
  const {
    value,
    shouldShowCancel,
    handleChange,
    handleKeyDown,
    handleCancelClick,
  } = useInputValue(onSubmit, onCancelClick)

  return (
    <div className={className}>
      <>
        <div className="flex flex-col grow h-full py-px">
          {shouldShowCancel ? (
            <label className="text-left text-primary-500 h-2/4 text-xs">
              Search in INET
            </label>
          ) : null}
          <input
            ref={ref}
            value={value}
            type={type}
            className={clsx(
              'grow border-none outline-none placeholder:focus:text-primary-500',
              shouldShowCancel ? 'h-full' : 'h-2/4',
            )}
            placeholder={placeholder}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </div>
        {shouldShowCancel ? (
          <Button
            variant="custom"
            icon={<CancelIcon className="fill-primary-200" />}
            size="small"
            fillType="ghost"
            className="h-6 border-r border-solid rounded-none border-primary-200 pr-1.5"
            onClick={handleCancelClick}
          />
        ) : null}
      </>
      {suffix}
    </div>
  )
}

export default forwardRef<HTMLInputElement, Props>(Input)
