import React, { ReactElement } from 'react'

type Props = {
  ref: any
  customClassName?: String
  Toggle: ReactElement
  isOpened: Boolean
  children: ReactElement | ReactElement[]
}

const Dropdown = React.forwardRef<HTMLDivElement, Props>(
  ({ customClassName = '', Toggle, isOpened, children }: Props, ref) => {
    return (
      <div className={`relative ${customClassName}`}>
        {Toggle}
        {isOpened && (
          <div
            ref={ref}
            className={`bg-white shadow-drop rounded-lg absolute -right-6 ${customClassName}`}
          >
            <ul>{children}</ul>
          </div>
        )}
      </div>
    )
  },
)

Dropdown.displayName = 'Dropdown'

export default Dropdown
