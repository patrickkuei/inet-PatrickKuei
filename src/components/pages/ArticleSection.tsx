import React from 'react'

type Props = {
  filter: JSX.Element
  articleList: JSX.Element
}

export default function Articles({ filter, articleList }: Props) {
  return (
    <div className="p-6 grow max-w-180 desktop:bg-white desktop:mx-12 desktop:py-6 desktop:px-8 desktop:rounded-lg">
      <div className="text-mobile5xl text-left font-bold desktop:text-5xl">
        Most Popular
      </div>
      <div className="flex mt-4 mb-5 gap-x-4">{filter}</div>
      <div className="py-6 border-t">{articleList}</div>
    </div>
  )
}
