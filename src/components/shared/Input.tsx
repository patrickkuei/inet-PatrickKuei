import useToggle from '@inet/hooks/use-toggle'
import { CancelIcon } from '@inet/icons'
import clsx from 'clsx'
import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  ReactElement,
  useMemo,
  useState,
} from 'react'
import Button from './Button'

type Props = {
  type: string
  className?: string
  placeholder: string
  defaultValue?: string
  suffix: ReactElement
  onSubmit?: (value: string) => void
  onClear?: () => void
  onSuffixClick?: (value: string) => void
  clearButtonClass?: string
  clearButtonIconClass?: string
}

interface IUseInputValue {
  value: string
  isClearable: boolean
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleClearClick: () => void
}

const useInputValue = (
  defaultValue: string | undefined,
  onClear: Props['onClear'],
): IUseInputValue => {
  const [value, setValue] = useState(defaultValue || '')

  const isClearable = useMemo(() => !!value, [value])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value: newValue } = event.target
    setValue(newValue)
  }

  const handleClearClick = () => {
    setValue('')
    onClear?.()
  }

  return {
    value,
    isClearable,
    handleChange,
    handleClearClick,
  }
}

const Input = (
  {
    type,
    className: customClassName = '',
    placeholder,
    defaultValue,
    suffix,
    onSubmit,
    onClear,
    onSuffixClick,
    clearButtonIconClass: customClearButtonIconClassName = '',
    clearButtonClass: customClearButtonClassName = '',
  }: Props,
  ref: ForwardedRef<HTMLInputElement> | undefined,
) => {
  const { value, isClearable, handleChange, handleClearClick } = useInputValue(
    defaultValue,
    onClear,
  )

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit?.(value)
    }
  }

  const handleSuffixClick = () => {
    onSuffixClick?.(value)
  }

  const [focus, handleFocusChange] = useToggle()

  return (
    <div
      className={clsx(
        'h-10 px-4 border border-primary-200 rounded-lg focus-within:border-primary-500 flex flex-row items-center gap-x-2 grow desktop:max-w-120 desktop:grow',
        customClassName,
      )}
    >
      <div className="flex flex-col grow h-full py-px justify-center relative">
        <label
          className={clsx(
            'text-left pointer-events-none transition-all absolute',
            focus || isClearable
              ? 'text-xs text-primary-500 mb-5'
              : 'text-gray-300',
          )}
        >
          {placeholder}
        </label>
        <input
          ref={ref}
          value={value}
          type={type}
          className={clsx(
            'grow border-none outline-none placeholder:opacity-0 transition-all',
            (focus || isClearable) && 'pt-3',
          )}
          placeholder={placeholder}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocusChange}
          onBlur={handleFocusChange}
        />
      </div>
      {isClearable && (
        <Button
          variant="custom"
          icon={
            <CancelIcon
              className={clsx(
                'fill-primary-200',
                customClearButtonIconClassName,
              )}
            />
          }
          size="small"
          fillType="ghost"
          className={clsx(
            'h-6 border-r border-solid rounded-none border-primary-200 pr-1.5',
            customClearButtonClassName,
          )}
          onClick={handleClearClick}
        />
      )}
      <span
        className="shrink-0 flex items-center justify-center"
        onClick={handleSuffixClick}
      >
        {suffix}
      </span>
    </div>
  )
}

export default forwardRef<HTMLInputElement, Props>(Input)
