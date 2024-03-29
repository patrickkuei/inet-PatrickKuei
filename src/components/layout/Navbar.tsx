import Button from '@inet/components/shared/Button'
import DropdownContainer from '@inet/components/shared/DropdownContainer'
import DropdownItemContainer from '@inet/components/shared/DropdownItemContainer'
import Input from '@inet/components/shared/Input'
import { SearchIcon } from '@inet/icons'
import { ReactComponent as MainLogo } from '@inet/images/mainLogo.svg'
import { ReactComponent as MobileLogo } from '@inet/images/mobileLogo.svg'
import { MouseEventHandler } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import NavbarActionContainer from './NavbarActionsContainer'
import SidebarMobileContainer from './SidebarMobileContainer'

type Props = {
  isLogin: boolean
  user: { id: number; name: string; avatar: JSX.Element }
  onDropdownItemClick: MouseEventHandler
}

export default function Navbar({ isLogin, user, onDropdownItemClick }: Props) {
  const userAvatar = user.avatar

  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const handleSearchInputSubmit = (searchKeyword: string) => {
    if (searchKeyword) {
      navigate(`/search?keyword=${searchKeyword}`)
    }
  }

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
        placeholder="Search in INET"
        defaultValue={searchParams.get('keyword') ?? ''}
        suffix={
          <Button
            variant="custom"
            icon={<SearchIcon className="fill-primary-200" />}
            size="small"
            fillType="ghost"
          />
        }
        onSubmit={handleSearchInputSubmit}
        onSuffixClick={handleSearchInputSubmit}
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
