import { nanoid } from 'nanoid'
import React, { ReactElement } from 'react'

type Props = {
  customClassName?: String
  overlay: Array<any>
  DropdownToggle: ReactElement
  isDropdownOpen: Boolean
}

export default function Dropdown({
  customClassName = '',
  overlay,
  DropdownToggle,
  isDropdownOpen,
}: Props) {
  return (
    <div className={`relative ${customClassName}`}>
      {DropdownToggle}
      {isDropdownOpen && (
        <div
          className={`bg-white shadow-drop rounded-lg absolute -right-6 ${customClassName}`}
        >
          <ul>
            {overlay.map((item) => (
              <li key={nanoid()}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

Dropdown.defaultProps = {
  customClassName: '',
}
