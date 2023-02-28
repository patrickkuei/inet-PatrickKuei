import { ReactElement, useCallback, useRef } from 'react'

import useClickOutside from '@inet/hooks/use-click-outside'
import useToggle from '@inet/hooks/use-toggle'
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
  const { isOpened, handleToggle, setIsOpened } = useToggle()

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
      className={className}
      Toggle={Toggle}
      isOpened={isOpened}
    >
      {children}
    </Dropdown>
  )
}
