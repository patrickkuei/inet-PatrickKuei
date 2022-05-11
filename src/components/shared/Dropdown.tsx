import { nanoid } from 'nanoid'
import React, { ReactElement } from 'react'

type Props = {
  overlay: Array<any>
  DropdownToggle: ReactElement
  isDropdownOpen: Boolean
}

export default function Dropdown({
  overlay,
  DropdownToggle,
  isDropdownOpen,
}: Props) {
  return (
    <div className="relative desktop:hidden">
      {DropdownToggle}
      {isDropdownOpen && (
        <div className="bg-white shadow-drop rounded-lg absolute -right-6 desktop:hidden">
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
