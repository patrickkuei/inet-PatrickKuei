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
    <div className="w-screen h-screen bg-background-white">
      <div className="h-16 bg-white shadow-inet flex justify-around items-center">
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
        <div className="mx-8 relative desktop:hidden">
          <button type="button" onClick={onNavbarButtonClick}>
            <UserIcon />
          </button>
          {isNavMenuOpen ? (
            <div className="px-4 bg-white shadow-inet rounded-lg absolute -right-8 desktop:hidden">
              <ul>
                <li className="h-12 flex items-center">
                  <div className="w-8">
                    <SignUpIcon />
                  </div>
                  <span className="whitespace-nowrap">Sign Up</span>
                </li>
                <li className="h-12 flex items-center">
                  <div className="w-8">
                    <LoginIcon />
                  </div>
                  <span>Login</span>
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
