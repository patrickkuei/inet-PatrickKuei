import React, { useState } from 'react'
import { ReactComponent as MenuIcon } from '../../icons/menuIcon.svg'
import animal from '../../images/animal.jpg'
import chat from '../../images/chat.jpg'
import food from '../../images/food.jpg'
import popular from '../../images/popular.jpg'
import travel from '../../images/travel.jpg'
import Button from '../shared/Button'
import SidebarMobile from './SidebarMobile'

const mockCategories = [
  {
    title: 'popular',
    imgSrc: popular,
  },
  {
    title: 'chat',
    imgSrc: chat,
  },
  {
    title: 'animal',
    imgSrc: animal,
  },
  {
    title: 'food',
    imgSrc: food,
  },
  {
    title: 'travel',
    imgSrc: travel,
  },
]

export default function SidebarMobileContainer() {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

  const handleToggleSidebar = () => {
    setIsSideBarOpen((prev) => !prev)
  }

  const SidebarMobileToggle = (
    <Button
      variant="custom"
      icon={<MenuIcon />}
      className="desktop:hidden"
      onClick={handleToggleSidebar}
    />
  )

  return (
    <SidebarMobile
      categories={mockCategories}
      isSideBarOpen={isSideBarOpen}
      onDismiss={handleToggleSidebar}
      SidebarMobileToggle={SidebarMobileToggle}
    />
  )
}
