import Button from '@inet/components/shared/Button'
import DropdownContainer from '@inet/components/shared/DropdownContainer'
import DropdownItemContainer from '@inet/components/shared/DropdownItemContainer'
import { EditIcon } from '@inet/icons'
import { MouseEventHandler, ReactElement } from 'react'

type Props = {
  isLogin: boolean
  avatar: ReactElement
  onLogOutClick: MouseEventHandler
}

export default function NavbarAction({
  isLogin,
  avatar,
  onLogOutClick,
}: Props) {
  return isLogin ? (
    <>
      <div className="hidden desktop:flex desktop:items-center desktop:space-x-9">
        <Button icon={<EditIcon />} size="small" fillType="ghost" />
        <DropdownContainer
          className="hidden desktop:block"
          toggleIcon={avatar}
          isLogin={isLogin}
        >
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
            onClick={onLogOutClick}
          />
        </DropdownContainer>
      </div>
    </>
  ) : (
    <>
      <div className="hidden desktop:flex desktop:space-x-4">
        <Button title="login" size="medium" fillType="filled" />
        <Button title="sign up" size="medium" fillType="outline" />
      </div>
    </>
  )
}
