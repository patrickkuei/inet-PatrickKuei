import clsx from 'clsx'
import { useState } from 'react'

import {
  ICategories,
  ICategory,
} from '@inet/services/types/articles/i-categories'

type Props = {
  categories: ICategories
}

export default function AriticleCagegory({ categories }: Props) {
  const [currentCommunity, setCurrentCommunity] = useState(categories[0].key)

  const handleCategoryClick = (community: string) => {
    setCurrentCommunity(community)
  }

  const getCategoryClassName = (category: ICategory): string => {
    const isActive = category.key === currentCommunity

    const colorClasses = isActive
      ? 'text-white bg-primary-500'
      : 'hover:bg-primary-100'

    return clsx(
      'flex items-center py-1 px-2 rounded-lg hover:cursor-pointer',
      colorClasses,
    )
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
              key={category.key}
              className={getCategoryClassName(category)}
              onClick={() => handleCategoryClick(category.key)}
            >
              <img
                width={32}
                height={32}
                src={category.imgSrc}
                alt={category.key}
              />
              <span className="ml-4">{category.key}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
