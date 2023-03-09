import { useAppDispatch, useAppSelector } from '@inet/app/hooks'
import useGetPathName from '@inet/hooks/use-get-path-name'
import { CancelIcon } from '@inet/icons'
import {
  setIsGlobalSearch,
  setSearchKeyword,
} from '@inet/redux/slices/searchSlice'
import clsx from 'clsx'
import { forwardRef, LegacyRef, ReactElement, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Button from './Button'

type Props = {
  type: string
  className?: string
  placeholder: string
  suffix: ReactElement
  onSubmit?: () => void
  onCancelClick?: () => void
  cancelButtonClass?: string
  cancelButtonIconClass?: string
  isGlobalSearchInput: boolean
}

const useInputValue = (
  onCancelClick: (() => void) | undefined,
  shouldUpdateInput: boolean,
) => {
  const dispatch = useAppDispatch()

  const [value, setValue] = useState('')
  const [shouldShowCancel, setShouldShowCancel] = useState(false)

  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword')

  useEffect(() => {
    if (!shouldUpdateInput) {
      return
    }

    setValue(keyword ?? '')
    dispatch(setSearchKeyword(keyword ?? undefined))
    setShouldShowCancel(Boolean(keyword))
  }, [keyword, shouldUpdateInput])

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

  return {
    value,
    shouldShowCancel,
    handleChange,
    handleCancelClick,
  }
}

const useUpdateSearchMode = (
  isGlobalSearchInput: boolean,
): { shouldUpdateInput: boolean } => {
  const dispatch = useAppDispatch()

  const currentCategoryName = useGetPathName('category', 1)
  const nextIsGlobalSearch = currentCategoryName === 'popular'
  const isGlobalSearch = useAppSelector(
    (state) => state.searchReducer.isGlobalSearch,
  )

  useEffect(() => {
    if (isGlobalSearch !== nextIsGlobalSearch) {
      dispatch(setIsGlobalSearch(nextIsGlobalSearch))
    }
  }, [currentCategoryName])

  return { shouldUpdateInput: nextIsGlobalSearch === isGlobalSearchInput }
}

const Input = (
  {
    type,
    className: customClassName = '',
    placeholder,
    suffix,
    onSubmit,
    onCancelClick,
    cancelButtonIconClass: customCancelButtonIconClassName = '',
    cancelButtonClass: customCancelButtonClassName = '',
    isGlobalSearchInput,
  }: Props,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  const { shouldUpdateInput } = useUpdateSearchMode(isGlobalSearchInput)

  const { value, shouldShowCancel, handleChange, handleCancelClick } =
    useInputValue(onCancelClick, shouldUpdateInput)

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit && onSubmit()
    }
  }

  return (
    <div
      className={clsx(
        'h-10 px-4 border border-primary-200 rounded-lg focus-within:border-primary-500 flex flex-row items-center gap-x-2 grow desktop:max-w-120 desktop:grow',
        customClassName,
      )}
    >
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
            icon={
              <CancelIcon
                className={clsx(
                  'fill-primary-200',
                  customCancelButtonIconClassName,
                )}
              />
            }
            size="small"
            fillType="ghost"
            className={clsx(
              'h-6 border-r border-solid rounded-none border-primary-200 pr-1.5',
              customCancelButtonClassName,
            )}
            onClick={handleCancelClick}
          />
        ) : null}
      </>
      {suffix}
    </div>
  )
}

export default forwardRef<HTMLInputElement, Props>(Input)
