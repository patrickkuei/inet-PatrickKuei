import React, { MouseEventHandler } from 'react'
import { ReactComponent as SearchIcon } from '../../icons/searchIcon.svg'
import { ReactComponent as MainLogo } from '../../images/mainLogo.svg'
import { ReactComponent as MobileLogo } from '../../images/mobileLogo.svg'
import DropdownContainer from '../shared/DropdownContainer'
import DropdownItemContainer from '../shared/DropdownItemContainer'
import Input from '../shared/Input'
import NavbarActionContainer from './NavbarActionsContainer'
import SidebarMobileContainer from './SidebarMobileContainer'

type Props = {
  isLogin: boolean
  user: { id: number; name: string; avatar: JSX.Element }
  onDropdownItemClick: MouseEventHandler
}

export default function Navbar({ isLogin, user, onDropdownItemClick }: Props) {
  const userAvatar = user.avatar
  return (
    <div className="h-16 min-w-94 px-6 py-2.5 gap-x-6 bg-white shadow-drop flex justify-between items-center desktop:px-16 desktop:py-2.5 desktop:gap-x-16">
      <SidebarMobileContainer isLogin={isLogin} />
      <div className="hidden desktop:block">
        <MainLogo className="w-20" />
      </div>
      <div className="desktop:hidden">
        <MobileLogo />
      </div>
      <Input
        type="text"
        placeholder="搜尋 INET"
        icon={<SearchIcon className="fill-primary-200" />}
      />
      <DropdownContainer
        className="desktop:hidden"
        toggleIcon={userAvatar}
        isLogin={isLogin}
      >
        {isLogin ? (
          <>
            <DropdownItemContainer
              title="Publish Artical"
              icon="edit"
              className="desktop:hidden"
              linkTo="editArtical"
            />
            <DropdownItemContainer
              title="Personal Info"
              icon="user"
              linkTo="userInfo"
            />
            <DropdownItemContainer
              title="My Collection"
              icon="bookmark"
              linkTo="bookmark"
            />
            <DropdownItemContainer
              title="History"
              icon="history"
              linkTo="history"
            />
            <DropdownItemContainer
              title="Account Setting"
              icon="setting"
              linkTo="setting"
            />
            <DropdownItemContainer
              title="Log out"
              icon="logOut"
              onClick={onDropdownItemClick}
            />
          </>
        ) : (
          <>
            <DropdownItemContainer
              title="Sign Up"
              icon="signup"
              onClick={onDropdownItemClick}
            />
            <DropdownItemContainer
              title="Login"
              icon="login"
              onClick={onDropdownItemClick}
            />
          </>
        )}
      </DropdownContainer>
      <NavbarActionContainer isLogin={isLogin} avatar={userAvatar} />
    </div>
  )
}
