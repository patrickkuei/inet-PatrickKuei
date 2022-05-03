import React, { MouseEventHandler, useEffect, useRef } from 'react'
import animal from '../images/animal.jpg'
import chat from '../images/chat.jpg'
import food from '../images/food.jpg'
import popular from '../images/popular.jpg'
import travel from '../images/travel.jpg'
import Button from './shared/Button'

type Props = {
  onMobileMenuClick: MouseEventHandler
}

const mockCurrentCommunity = 'popular'

function useOutsideHandler(ref: React.MutableRefObject<any>, handler: any) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        handler(event)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

function SidebarMobile({ onMobileMenuClick }: Props) {
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

  const wrapperRef = useRef(null)
  useOutsideHandler(wrapperRef, onMobileMenuClick)

  return (
    <>
      <div className="w-full h-full bg-transparent-black absolute top-0 desktop:hidden" />
      <div
        ref={wrapperRef}
        className="w-80 h-full p-6 bg-white absolute top-0 desktop:hidden"
      >
        <button
          className="absolute right-0 top-0"
          type="button"
          onClick={onMobileMenuClick}
        >
          （。人。）
        </button>
        <div className="flex space-x-4 mb-6">
          <Button width="w-1/2" title="login" size="medium" type="filled" />
          <Button width="w-1/2" title="sign up" size="medium" type="outline" />
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
