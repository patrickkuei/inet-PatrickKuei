import React, { ReactElement, Ref } from 'react'

type Props = {
  ref: Ref<HTMLDivElement>
  customClassName?: String
  Toggle: ReactElement
  isOpened: Boolean
  children: ReactElement | ReactElement[]
}

const Dropdown = React.forwardRef<HTMLDivElement, Props>(
  ({ customClassName = '', Toggle, isOpened, children }: Props, ref) => {
    return (
      <div ref={ref} className={`relative ${customClassName}`}>
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
  },
)

Dropdown.displayName = 'Dropdown'

export default Dropdown
