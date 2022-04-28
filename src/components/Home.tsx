import React, { MouseEventHandler } from 'react'
// mobile
import { ReactComponent as MenuIcon } from '../icons/menuIcon.svg'
// desktop
import { ReactComponent as SearchIcon } from '../icons/searchIcon.svg'
import { ReactComponent as UserIcon } from '../icons/userIcon.svg'
import { ReactComponent as MainLogo } from '../images/mainLogo.svg'
import { ReactComponent as MobileLogo } from '../images/mobileLogo.svg'
import Portal from './Portal'
import Button from './shared/Button'
import SidebarMobile from './SidebarMobile'

type Props = {
  isSideBarOpen: boolean
  onMobileMenuClick: MouseEventHandler
}

export default function HomeContainer({
  isSideBarOpen,
  onMobileMenuClick,
}: Props) {
  return (
    <div className="w-screen h-screen bg-background-white">
      <div className="h-16 bg-white shadow-desktop flex justify-around items-center">
        <button
          type="button"
          className="mx-7 desktop:hidden"
          onClick={onMobileMenuClick}
        >
          <MenuIcon />
        </button>
        <div className="hidden desktop:block">
          <MainLogo className="h-6" />
        </div>
        <div className="mr-6 desktop:hidden">
          <MobileLogo />
        </div>
        <div className="h-10 grow relative desktop:w-120 desktop:grow-0">
          <input
            type="text"
            className="w-full h-full shirnk px-4 border-2 rounded-lg border-primary-200"
            placeholder="搜尋 INET"
          />
          <SearchIcon className="w-5 h-5 absolute right-3 top-2.5" />
        </div>
        <div className="mx-8 desktop:hidden">
          <UserIcon />
        </div>
        <div className="hidden desktop:flex desktop:space-x-4">
          <Button title="login" size="medium" type="outline" />
          <Button title="sign up" size="medium" type="filled" />
        </div>
      </div>
      {isSideBarOpen ? (
        <Portal>
          <SidebarMobile onMobileMenuClick={onMobileMenuClick} />
        </Portal>
      ) : null}
    </div>
  )
}
