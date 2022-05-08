/* eslint-disable no-unused-vars */
import React, { MouseEventHandler, ReactElement, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

type Props = {
  overlay: Array<any>
  render: (onClick: MouseEventHandler) => ReactElement
}

export default function Dropdown({ overlay, render }: Props) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <div className="relative desktop:hidden">
      {render(handleDropdownToggle)}
      {isDropdownOpen ? (
        <div className="bg-white shadow-drop rounded-lg absolute -right-6 desktop:hidden">
          <ul>
            {overlay.map((item) => (
              <li key={uuidv4()}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  )
}
