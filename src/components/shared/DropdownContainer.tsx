import React, { ReactElement, useState } from 'react'
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
      type="ghost"
      icon={toggleIcon}
      onClick={handleToggle}
    />
  )

  return (
    <Dropdown customClassName={className} Toggle={Toggle} isOpened={isOpened}>
      {children}
    </Dropdown>
  )
}
