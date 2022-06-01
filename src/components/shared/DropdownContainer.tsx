import React, { ReactElement, useCallback, useRef, useState } from 'react'
import useClickOutside from '../../hooks/use-click-outside'
import Button from './Button'
import Dropdown from './Dropdown'

type Props = {
  className: String
  toggleIcon: ReactElement
  children: ReactElement | ReactElement[]
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
      fillType="ghost"
      icon={toggleIcon}
      onClick={handleToggle}
    />
  )

  const wrapperRef = useRef<HTMLDivElement>(null)

  const handleOutsideClicked = useCallback(() => setIsOpened(false), [])

  useClickOutside(wrapperRef, handleOutsideClicked)

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
