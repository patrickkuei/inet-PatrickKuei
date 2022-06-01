import React, { useState } from 'react'
import { MenuIcon } from '../../icons'
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
      categories={mockCategories}
      isOpened={isOpened}
      onDismiss={handleToggle}
      Toggle={Toggle}
    />
  )
}
