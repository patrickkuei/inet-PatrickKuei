import React, { MouseEventHandler, ReactElement } from 'react'
import AriticleCagegory from '../shared/AriticleCagegory'
import Button from '../shared/Button'
import ModalPortal from '../shared/ModalPortal'

type Props = {
  isLogin: boolean
  categories: Array<any>
  isOpened: Boolean
  Toggle: ReactElement
  onDismiss: MouseEventHandler
}

const mockCurrentCommunity = 'popular'

function SidebarMobile({
  isLogin,
  categories,
  isOpened,
  onDismiss,
  Toggle,
}: Props) {
  return (
    <>
      {Toggle}
      {isOpened && (
        <ModalPortal>
          <div
            className="w-full h-full bg-transparent-black absolute top-0 desktop:hidden"
            onClick={onDismiss}
          />
          <div className="w-80 h-full p-6 bg-white absolute top-0 desktop:hidden">
            <button
              className="absolute right-0 top-0"
              type="button"
              onClick={onDismiss}
            >
              （。人。）
            </button>
            {isLogin || (
              <div className="flex space-x-4 mb-6">
                <Button
                  className="w-1/2"
                  title="login"
                  size="medium"
                  fillType="filled"
                />
                <Button
                  className="w-1/2"
                  title="sign up"
                  size="medium"
                  fillType="outline"
                />
              </div>
            )}
            <AriticleCagegory categories={categories} />
          </div>
        </ModalPortal>
      )}
    </>
  )
}

export default SidebarMobile
