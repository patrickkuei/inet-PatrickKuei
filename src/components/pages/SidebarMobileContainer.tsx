import React, { MouseEventHandler, ReactElement, useState } from 'react'
import animal from '../../images/animal.jpg'
import chat from '../../images/chat.jpg'
import food from '../../images/food.jpg'
import popular from '../../images/popular.jpg'
import travel from '../../images/travel.jpg'
import SidebarMobile from './SidebarMobile'

type Props = {
  renderSidebarMobileToggle: (onClick: MouseEventHandler) => ReactElement
}
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

export default function SidebarMobileContainer({
  renderSidebarMobileToggle,
}: Props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

  const handleToggleSidebar = () => {
    setIsSideBarOpen((prev) => !prev)
  }

  const SidebarMobileToggle = renderSidebarMobileToggle(handleToggleSidebar)

  return (
    <SidebarMobile
      categories={mockCategories}
      isSideBarOpen={isSideBarOpen}
      onDismiss={handleToggleSidebar}
      SidebarMobileToggle={SidebarMobileToggle}
    />
  )
}
