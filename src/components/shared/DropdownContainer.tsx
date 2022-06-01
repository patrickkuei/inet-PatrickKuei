import React, { ReactElement, useCallback, useRef, useState } from 'react'
import useClickOutside from '../../hooks/use-click-outside'
import Button from './Button'
import Dropdown from './Dropdown'

type Props = {
  className: String
  toggleIcon: ReactElement
  children: ReactElement | ReactElement[]
  isLogin: boolean
}

export default function DropdownContainer({
  className,
  toggleIcon,
  children,
  isLogin,
}: Props) {
  const [isOpened, setIsOpened] = useState(false)

  const handleToggle = () => {
    setIsOpened((prev) => !prev)
  }

  const toggleIconSize = isLogin ? 'medium' : 'small'
  const Toggle = (
    <Button
      size={toggleIconSize}
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
