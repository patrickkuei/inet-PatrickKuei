import React, { MouseEventHandler, ReactElement, useState } from 'react'
import Dropdown from './Dropdown'

type Props = {
  className: String
  renderDropdownToggle: (onClick: MouseEventHandler) => ReactElement
  children: ReactElement | ReactElement[]
}

export default function DropdownContainer({
  className,
  renderDropdownToggle,
  children,
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }
  const DropdownToggle = renderDropdownToggle(handleToggleDropdown)

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
