import React from 'react'

type Props = {
  filter: JSX.Element
  articleList: JSX.Element
}

export default function Articles({ filter, articleList }: Props) {
  return (
    <div className="mx-12 py-6 px-8 bg-white grow max-w-180 rounded-lg">
      <div className="text-left text-5xl font-bold">Most Popular</div>
      <div className="flex mt-4 mb-5 gap-x-4">{filter}</div>
      <div className="py-6 border-t">{articleList}</div>
    </div>
  )
}
