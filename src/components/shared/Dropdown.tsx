import React, { ReactElement } from 'react'

type Props = {
  customClassName?: String
  DropdownToggle: ReactElement
  isDropdownOpen: Boolean
  children: ReactElement | ReactElement[]
}

export default function Dropdown({
  customClassName = '',
  DropdownToggle,
  isDropdownOpen,
  children,
}: Props) {
  return (
    <div className={`relative ${customClassName}`}>
      {DropdownToggle}
      {isDropdownOpen && (
        <div
          className={`bg-white shadow-drop rounded-lg absolute -right-6 ${customClassName}`}
        >
          <ul>{children}</ul>
        </div>
      )}
    </div>
  )
}
