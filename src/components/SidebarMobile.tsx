import React from 'react'
import animal from '../images/animal.jpg'
import chat from '../images/chat.jpg'
import food from '../images/food.jpg'
import popular from '../images/popular.jpg'
import travel from '../images/travel.jpg'
import Button from './shared/Button'

type Props = {}

const mockCurrentCommunity = 'popular'

// eslint-disable-next-line no-unused-vars
function SidebarMobile(props: Props) {
  const mockCommunities = [
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
              className={
                mockCurrentCommunity === community.title
                  ? 'flex items-center py-1 px-2 rounded-lg text-white bg-primary-500'
                  : 'flex items-center py-1 px-2 rounded-lg hover:bg-primary-100'
              }
              key={community.title}
            >
              <img width={32} height={32} src={community.imgSrc} alt="img" />

              <span className="ml-4">{community.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SidebarMobile
