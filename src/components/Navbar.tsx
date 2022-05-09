import React, { MouseEventHandler } from 'react'
import { ReactComponent as LoginIcon } from '../icons/loginIcon.svg'
import { ReactComponent as MenuIcon } from '../icons/menuIcon.svg'
import { ReactComponent as SearchIcon } from '../icons/searchIcon.svg'
import { ReactComponent as SignUpIcon } from '../icons/signupIcon.svg'
import { ReactComponent as UserIcon } from '../icons/userIcon.svg'
import { ReactComponent as MainLogo } from '../images/mainLogo.svg'
import { ReactComponent as MobileLogo } from '../images/mobileLogo.svg'
import DropdownContainer from './DropdownContainer'
import ModalPortal from './ModalPortal'
import Button from './shared/Button'
import SidebarMobile from './SidebarMobile'

type Props = {
  isSideBarOpen: boolean
  onSidebarToggle: MouseEventHandler
}

export default function Navbar({ isSideBarOpen, onSidebarToggle }: Props) {
  const dropdownOverlay = [
    <Button
      variant="custom"
      title="Sign Up"
      icon={<SignUpIcon />}
      className="p-3 flex items-center gap-3 whitespace-nowrap"
    />,
    <Button
      variant="custom"
      title="Login"
      icon={<LoginIcon />}
      className="p-3 flex items-center gap-3 whitespace-nowrap"
    />,
  ]
  return (
    <>
      <div className="h-16 min-w-94 px-6 py-2.5 gap-x-6 bg-white shadow-drop flex justify-between items-center desktop:px-16 desktop:py-2.5 desktop:gap-x-16">
        <Button
          variant="custom"
          icon={<MenuIcon />}
          className="desktop:hidden"
          onClick={onSidebarToggle}
        />
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
        <DropdownContainer
          overlay={dropdownOverlay}
          renderDropdownEntry={(onDropdownToggle) => (
            <Button
              size="small"
              type="ghost"
              icon={<UserIcon />}
              onClick={onDropdownToggle}
            />
          )}
        />
        <div className="hidden desktop:flex desktop:space-x-4">
          <Button title="login" size="medium" type="filled" />
          <Button title="sign up" size="medium" type="outline" />
        </div>
      </div>
      {isSideBarOpen && (
        <ModalPortal>
          <SidebarMobile onDismiss={onSidebarToggle} />
        </ModalPortal>
      )}
    </>
  )
}
