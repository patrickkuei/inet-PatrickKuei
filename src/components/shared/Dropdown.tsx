import React, { ReactElement, Ref } from 'react'

type Props = {
  ref: Ref<HTMLDivElement>
  className?: String
  Toggle: ReactElement
  isOpened: Boolean
  children: ReactElement | ReactElement[]
}

const Dropdown = React.forwardRef<HTMLDivElement, Props>(
  ({ className = '', Toggle, isOpened, children }: Props, ref) => {
    return (
      <div ref={ref} className={`relative ${className}`}>
        {Toggle}
        {isOpened && (
          <div
            className={`bg-white shadow-drop rounded-lg absolute -right-6 ${className}`}
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
