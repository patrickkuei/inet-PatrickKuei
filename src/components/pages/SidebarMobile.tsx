import React, { MouseEventHandler, ReactElement } from 'react'
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
            <div className="mb-6 text-2xl font-bold">Article Catagory</div>
            <div className="w-full">
              <ul className="space-y-4">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={
                      mockCurrentCommunity === category.title
                        ? 'flex items-center py-1 px-2 rounded-lg text-white bg-primary-500'
                        : 'flex items-center py-1 px-2 rounded-lg hover:bg-primary-100'
                    }
                  >
                    <img
                      width={32}
                      height={32}
                      src={category.imgSrc}
                      alt="img"
                    />
                    <span className="ml-4">{category.title}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ModalPortal>
      )}
    </>
  )
}

export default SidebarMobile
