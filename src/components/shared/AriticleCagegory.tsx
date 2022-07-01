import React from 'react'

type Props = {
  categories: Array<any>
}

const mockCurrentCommunity = 'popular'

export default function AriticleCagegory({ categories }: Props) {
  return (
    <>
      <div className="mb-6 text-2xl font-bold uppercase whitespace-nowrap">
        board
      </div>
      <div className="w-full">
        <ul className="space-y-4">
          {categories.map((category, index) => (
            <li
              key={index}
              className={
                mockCurrentCommunity === category.title
                  ? 'flex items-center py-1 px-2 rounded-lg text-white bg-primary-500'
                  : 'flex items-center py-1 px-2 rounded-lg hover:bg-primary-100'
              }
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
