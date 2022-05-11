import React, { MouseEventHandler, ReactElement, useState } from 'react'
import animal from '../../images/animal.jpg'
import chat from '../../images/chat.jpg'
import food from '../../images/food.jpg'
import popular from '../../images/popular.jpg'
import travel from '../../images/travel.jpg'
import SidebarMobile from './SidebarMobile'

type Props = {
  // eslint-disable-next-line no-unused-vars
  renderSidebarMobileEntry: (onClick: MouseEventHandler) => ReactElement
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
  renderSidebarMobileEntry,
}: Props) {
  const [isSideBarOpen, setIsSideBarOpen] = useState<boolean>(false)

  const handleSidebarToggle = () => {
    setIsSideBarOpen((prev) => !prev)
  }

  const SidebarMobileEntryComponent =
    renderSidebarMobileEntry(handleSidebarToggle)

  return (
    <SidebarMobile
      categories={mockCategories}
      isSideBarOpen={isSideBarOpen}
      onDismiss={handleSidebarToggle}
      SidebarMobileEntryComponent={SidebarMobileEntryComponent}
    />
  )
}
