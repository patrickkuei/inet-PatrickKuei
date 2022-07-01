import React, { useState } from 'react'
import { MenuIcon } from '../../icons'
import Button from '../shared/Button'
import SidebarMobile from './SidebarMobile'

import articleCategories from '../../mockData/articleCategories'

type Props = {
  isLogin: boolean
}

export default function SidebarMobileContainer({ isLogin }: Props) {
  const [isOpened, setIsOpened] = useState<boolean>(false)

  const handleToggle = () => {
    setIsOpened((prev) => !prev)
  }

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
      categories={articleCategories}
      isOpened={isOpened}
      onDismiss={handleToggle}
      Toggle={Toggle}
    />
  )
}
