import React, { MouseEventHandler, useState } from 'react'
import Home from './Home'

type Props = {}

// eslint-disable-next-line no-empty-pattern
export default function HomeContainer({}: Props) {
  const [isSideBarOpen, setSideBarOpen] = useState<boolean>(false)

  const onMobileMenuClick: MouseEventHandler = () => {
    setSideBarOpen((prev) => !prev)
  }
  return (
    <Home isSideBarOpen={isSideBarOpen} onMobileMenuClick={onMobileMenuClick} />
  )
}
