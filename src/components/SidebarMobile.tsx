import React, { MouseEventHandler, ReactElement } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Button from './Button'
import ModalPortal from './ModalPortal'

type Props = {
  categories: Array<any>
  isSideBarOpen: Boolean
  SidebarMobileEntryComponent: ReactElement
  onDismiss: MouseEventHandler
}

const mockCurrentCommunity = 'popular'

function SidebarMobile({
  categories,
  isSideBarOpen,
  onDismiss,
  SidebarMobileEntryComponent,
}: Props) {
  return (
    <>
      {SidebarMobileEntryComponent}
      {isSideBarOpen && (
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
            <div className="flex space-x-4 mb-6">
              <Button
                className="w-1/2"
                title="login"
                size="medium"
                type="filled"
              />
              <Button
                className="w-1/2"
                title="sign up"
                size="medium"
                type="outline"
              />
            </div>
            <div className="mb-6 text-2xl font-bold">Article Catagory</div>
            <div className="w-full">
              <ul className="space-y-4">
                {categories.map((category) => (
                  <li
                    className={
                      mockCurrentCommunity === category.title
                        ? 'flex items-center py-1 px-2 rounded-lg text-white bg-primary-500'
                        : 'flex items-center py-1 px-2 rounded-lg hover:bg-primary-100'
                    }
                    key={uuidv4()}
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
