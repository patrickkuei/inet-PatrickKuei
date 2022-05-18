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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }
  const DropdownToggle = (
    <Button
      size="small"
      type="ghost"
      icon={toggleIcon}
      onClick={handleToggleDropdown}
    />
  )

  return (
    <Dropdown
      customClassName={className}
      DropdownToggle={DropdownToggle}
      isDropdownOpen={isDropdownOpen}
    >
      {children}
    </Dropdown>
  )
}
