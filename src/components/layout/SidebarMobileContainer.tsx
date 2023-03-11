import Button from '@inet/components/shared/Button'
import useToggle from '@inet/hooks/use-toggle'
import { MenuIcon } from '@inet/icons'
import SidebarMobile from './SidebarMobile'

type Props = {
  isLogin: boolean
}

export default function SidebarMobileContainer({ isLogin }: Props) {
  const [isOpened, handleToggle] = useToggle()

  const Toggle = (
    <Button
      variant="custom"
      icon={<MenuIcon />}
      className="desktop:hidden"
      onClick={handleToggle}
    />
  )

  return (
    <SidebarMobile
      isLogin={isLogin}
      isOpened={isOpened}
      onDismiss={handleToggle}
      Toggle={Toggle}
    />
  )
}
