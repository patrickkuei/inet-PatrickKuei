import React, { MouseEventHandler } from 'react'
import { SearchIcon } from '../../icons'
import { ReactComponent as MainLogo } from '../../images/mainLogo.svg'
import { ReactComponent as MobileLogo } from '../../images/mobileLogo.svg'
import Button from '../shared/Button'
import DropdownContainer from '../shared/DropdownContainer'
import DropdownItemContainer from '../shared/DropdownItemContainer'
import Input from '../shared/Input'
import SidebarMobileContainer from './SidebarMobileContainer'

type Props = {
  user: { id: number; name: string; avatar: JSX.Element }
  onDropdownItemClick: MouseEventHandler
}

export default function Navbar({ user, onDropdownItemClick }: Props) {
  const dropdownToggleIcon = user.avatar
  return (
    <div className="h-16 min-w-94 px-6 py-2.5 gap-x-6 bg-white shadow-drop flex justify-between items-center desktop:px-16 desktop:py-2.5 desktop:gap-x-16">
      <SidebarMobileContainer />
      <div className="hidden desktop:block">
        <MainLogo className="w-20" />
      </div>
      <div className="desktop:hidden">
        <MobileLogo />
      </div>
      <Input
        type="text"
        placeholder="搜尋 INET"
        icon={<SearchIcon className="text-primary-200" />}
      />
      <DropdownContainer
        className="desktop:hidden"
        toggleIcon={dropdownToggleIcon}
      >
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
      </DropdownContainer>
      <div className="hidden desktop:flex desktop:space-x-4">
        <Button title="login" size="medium" fillType="filled" />
        <Button title="sign up" size="medium" fillType="outline" />
      </div>
    </div>
  )
}
