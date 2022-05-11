import React, { MouseEventHandler, ReactElement, useState } from 'react'
import Dropdown from './Dropdown'

type Props = {
  overlay: Array<any>
  // eslint-disable-next-line no-unused-vars
  renderDropdownToggle: (onClick: MouseEventHandler) => ReactElement
}

export default function DropdownContainer({
  overlay,
  renderDropdownToggle,
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleToggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }
  const DropdownToggle = renderDropdownToggle(handleToggleDropdown)

  return (
    <Dropdown
      overlay={overlay}
      DropdownToggle={DropdownToggle}
      isDropdownOpen={isDropdownOpen}
    />
  )
}
