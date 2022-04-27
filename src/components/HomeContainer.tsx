import React from 'react'
import Home from './Home'

type Props = {onMobileMenuClick: Function}

// eslint-disable-next-line no-empty-pattern
export default function HomeContainer({ onMobileMenuClick }: Props) {
  return (
    <Home onMobileMenuClick={onMobileMenuClick} />
  )
}
