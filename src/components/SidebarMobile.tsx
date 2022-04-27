import React from 'react'
import Button from './shared/Button'

import { ReactComponent as Animal } from '../images/animal.svg'
import { ReactComponent as Chat } from '../images/chat.svg'
import { ReactComponent as Food } from '../images/food.svg'
import { ReactComponent as Travel } from '../images/travel.svg'
import { ReactComponent as MobileLogo } from '../images/mobileLogo.svg'

type Props = {}

const mockCurrentCommunity = 'popular'

// eslint-disable-next-line no-unused-vars
function SidebarMobile(props: Props) {
  const mockCommunities = [
    {
      title: 'popular',
      icon: <MobileLogo />,
    },
    {
      title: 'chat',
      icon: <Chat />,
    },
    {
      title: 'animal',
      icon: <Animal />,
    },
    {
      title: 'food',
      icon: <Food />,
    },
    {
      title: 'travel',
      icon: <Travel />,
    },
  ]

  return (
    <div className="w-80 h-full p-6 bg-white absolute top-0 desktop:hidden">
      <div className="space-x-4 mb-6">
        <Button title="login" size="medium" type="filled" />
        <Button title="sign up" size="medium" type="outline" />
      </div>
      <div className="mb-6  text-left text-2xl font-bold">Communities</div>
      <div className="w-full text-left">
        <ul className="space-y-4">
          {mockCommunities.map((community) => (
            <li
              className={mockCurrentCommunity === community.title
                ? 'flex items-center py-1 px-2 rounded-lg text-white bg-primary-500'
                : 'flex items-center py-1 px-2 rounded-lg hover:bg-primary-100'}
              key={community.title}
            >
              {community.icon}
              <span className="ml-4">{community.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SidebarMobile
