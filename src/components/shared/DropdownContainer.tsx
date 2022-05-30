import React, { ReactElement, useEffect, useRef, useState } from 'react'
import Button from './Button'
import Dropdown from './Dropdown'

type Props = {
  className: String
  toggleIcon: ReactElement
  children: ReactElement | ReactElement[]
}

function useOutsideHandler(ref: React.MutableRefObject<any>, handler: any) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      event.stopPropagation()

      if (ref.current && !ref.current.contains(event.target)) {
        handler(event)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export default function DropdownContainer({
  className,
  toggleIcon,
  children,
}: Props) {
  const [isOpened, setIsOpened] = useState(false)

  const handleToggle = () => {
    setIsOpened((prev) => !prev)
  }
  const Toggle = (
    <Button
      size="small"
      type="ghost"
      icon={toggleIcon}
      onClick={handleToggle}
    />
  )

  const wrapperRef = useRef<HTMLDivElement>(null)
  useOutsideHandler(wrapperRef, (e: MouseEvent) => {
    setIsOpened(false)
  })

  return (
    <Dropdown
      ref={wrapperRef}
      customClassName={className}
      Toggle={Toggle}
      isOpened={isOpened}
    >
      {children}
    </Dropdown>
  )
}
