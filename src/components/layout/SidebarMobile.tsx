import { MouseEventHandler, ReactElement } from 'react'

import AriticleCagegory from '@inet/components/shared/AriticleCagegory'
import Button from '@inet/components/shared/Button'
import ModalPortal from '@inet/components/shared/ModalPortal'
import { CrossIcon } from '@inet/icons'

type Props = {
  isLogin: boolean
  isOpened: Boolean
  Toggle: ReactElement
  onDismiss: MouseEventHandler
}

function SidebarMobile({ isLogin, isOpened, onDismiss, Toggle }: Props) {
  const stopPropagation: MouseEventHandler = (e) => {
    e.stopPropagation()
  }

  return (
    <>
      {Toggle}
      {isOpened && (
        <ModalPortal>
          <div
            className="w-full h-full bg-transparent-black fixed top-0 desktop:hidden"
            onClick={onDismiss}
          >
            <div
              className="w-80 h-full relative p-6 bg-white z-10"
              onClick={stopPropagation}
            >
              <button
                className="absolute right-2 top-2 p-2 rounded-lg hover:bg-primary-100 hover:cursor-pointer"
                type="button"
                onClick={onDismiss}
              >
                <CrossIcon />
              </button>
              {isLogin || (
                <div className="flex space-x-4 mb-6">
                  <Button
                    className="w-1/2"
                    title="login"
                    size="medium"
                    fillType="filled"
                    onClick={onDismiss}
                  />
                  <Button
                    className="w-1/2"
                    title="sign up"
                    size="medium"
                    fillType="outline"
                  />
                </div>
              )}
              <AriticleCagegory />
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  )
}

export default SidebarMobile
