import React, { useState } from 'react'

import { ICategories } from '../../services/types/articles/i-categories'

type Props = {
  categories: ICategories
}

export default function AriticleCagegory({ categories }: Props) {
  const [currentCommunity, setCurrentCommunity] = useState('popular')

  const handleCategoryClick = (category: string) => {
    setCurrentCommunity(category)
  }

  return (
    <>
      <div className="mb-6 text-2xl font-bold uppercase whitespace-nowrap">
        board
      </div>
      <div className="w-full">
        <ul className="space-y-4">
          {categories.map((category) => (
            <li
              key={category.title}
              className={
                currentCommunity === category.title
                  ? 'flex items-center py-1 px-2 rounded-lg text-white bg-primary-500 hover:cursor-pointer'
                  : 'flex items-center py-1 px-2 rounded-lg hover:bg-primary-100 hover:cursor-pointer'
              }
              onClick={() => handleCategoryClick(category.title)}
            >
              <img width={32} height={32} src={category.imgSrc} alt="img" />
              <span className="ml-4">{category.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
