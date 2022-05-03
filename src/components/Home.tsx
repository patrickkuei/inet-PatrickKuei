import React, { MouseEventHandler } from 'react'
import { ReactComponent as LoginIcon } from '../icons/loginIcon.svg'
import { ReactComponent as MenuIcon } from '../icons/menuIcon.svg'
import { ReactComponent as SearchIcon } from '../icons/searchIcon.svg'
import { ReactComponent as SignUpIcon } from '../icons/signupIcon.svg'
import { ReactComponent as UserIcon } from '../icons/userIcon.svg'
import { ReactComponent as MainLogo } from '../images/mainLogo.svg'
import { ReactComponent as MobileLogo } from '../images/mobileLogo.svg'
import ModalPortal from './ModalPortal'
import Button from './shared/Button'
import SidebarMobile from './SidebarMobile'

type Props = {
  isSideBarOpen: boolean
  onMobileMenuClick: MouseEventHandler
  isNavMenuOpen: boolean
  onNavbarButtonClick: MouseEventHandler
}

export default function Home({
  isSideBarOpen,
  onMobileMenuClick,
  isNavMenuOpen,
  onNavbarButtonClick,
}: Props) {
  return (
    <div className="w-screen min-w-94 h-screen min-h-screen bg-background-white">
      <div className="h-16 min-w-94 px-6 py-2.5 gap-x-6 bg-white shadow-inet flex justify-between items-center desktop:px-16 desktop:py-2.5 desktop:gap-x-16">
        <button
          type="button"
          className="desktop:hidden"
          onClick={onMobileMenuClick}
        >
          <MenuIcon />
        </button>
        <div className="hidden desktop:block">
          <MainLogo className="w-20" />
        </div>
        <div className="desktop:hidden">
          <MobileLogo />
        </div>
        <div className="h-10 px-4 border-2 border-primary-200 rounded-lg focus-within:border-primary-500 flex flex-row items-center gap-x-2 grow desktop:max-w-120 desktop:grow">
          <input
            type="text"
            className="w-full h-full border-none outline-none placeholder:focus:text-primary-500"
            placeholder="搜尋 INET"
          />
          <SearchIcon className="w-5 h-5 text-primary-200" />
        </div>
        <div className="h-4 relative desktop:hidden">
          <button type="button" onClick={onNavbarButtonClick}>
            <UserIcon />
          </button>
          {isNavMenuOpen ? (
            <div className="bg-white shadow-inet rounded-lg absolute -right-6 desktop:hidden">
              <ul>
                <li className="p-4">
                  <button
                    type="button"
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    <SignUpIcon className="w-6 h-6" />
                    Sign Up
                  </button>
                </li>
                <li className="p-4">
                  <button
                    type="button"
                    className="flex items-center gap-3 whitespace-nowrap"
                  >
                    <LoginIcon className="w-6 h-6" />
                    Login
                  </button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
        <div className="hidden desktop:flex desktop:space-x-4">
          <Button title="login" size="medium" type="outline" />
          <Button title="sign up" size="medium" type="filled" />
        </div>
      </div>
      {isSideBarOpen ? (
        <ModalPortal>
          <SidebarMobile onMobileMenuClick={onMobileMenuClick} />
        </ModalPortal>
      ) : null}
    </div>
  )
}
