import React, { ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  overlay: Array<any>
  DropdownEntryComponent: ReactElement
  isDropdownOpen: Boolean
}

export default function Dropdown({
  overlay,
  DropdownEntryComponent,
  isDropdownOpen,
}: Props) {
  return (
    <div className="relative desktop:hidden">
      {DropdownEntryComponent}
      {isDropdownOpen && (
        <div className="bg-white shadow-drop rounded-lg absolute -right-6 desktop:hidden">
          <ul>
            {overlay.map((item) => (
              <li key={uuidv4()}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
