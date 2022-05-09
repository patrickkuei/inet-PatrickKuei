import React, { MouseEventHandler, ReactElement, useState } from 'react'
import Dropdown from './Dropdown'

type Props = {
  overlay: Array<any>
  // eslint-disable-next-line no-unused-vars
  renderDropdownEntry: (onClick: MouseEventHandler) => ReactElement
}

export default function DropdownContainer({
  overlay,
  renderDropdownEntry,
}: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev)
  }
  const DropdownEntryComponent = renderDropdownEntry(handleDropdownToggle)

  return (
    <Dropdown
      overlay={overlay}
      DropdownEntryComponent={DropdownEntryComponent}
      isDropdownOpen={isDropdownOpen}
    />
  )
}
