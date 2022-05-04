import React, { MouseEventHandler } from 'react'
import animal from '../images/animal.jpg'
import chat from '../images/chat.jpg'
import food from '../images/food.jpg'
import popular from '../images/popular.jpg'
import travel from '../images/travel.jpg'
import Button from './shared/Button'

type Props = {
  onDismiss: MouseEventHandler
}

const mockCurrentCommunity = 'popular'

function SidebarMobile({ onDismiss }: Props) {
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
    <>
      <div
        className="w-full h-full bg-transparent-black absolute top-0 desktop:hidden"
        onClick={onDismiss}
      />
      <div className="w-80 h-full p-6 bg-white absolute top-0 desktop:hidden">
        <button
          className="absolute right-0 top-0"
          type="button"
          onClick={onDismiss}
        >
          （。人。）
        </button>
        <div className="flex space-x-4 mb-6">
          <Button className="w-1/2" title="login" size="medium" type="filled" />
          <Button
            className="w-1/2"
            title="sign up"
            size="medium"
            type="outline"
          />
        </div>
        <div className="mb-6 text-2xl font-bold">Article Catagory</div>
        <div className="w-full">
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
    </>
  )
}

export default SidebarMobile
