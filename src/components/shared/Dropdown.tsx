import React, { ReactElement } from 'react'

type Props = {
  customClassName?: String
  Toggle: ReactElement
  isOpened: Boolean
  children: ReactElement | ReactElement[]
}

export default function Dropdown({
  customClassName = '',
  Toggle,
  isOpened,
  children,
}: Props) {
  return (
    <div className={`relative ${customClassName}`}>
      {Toggle}
      {isOpened && (
        <div
          className={`bg-white shadow-drop rounded-lg absolute -right-6 ${customClassName}`}
        >
          <ul>{children}</ul>
        </div>
      )}
    </div>
  )
}
