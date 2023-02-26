import { useAppSelector } from '@inet/app/hooks'
import clsx from 'clsx'

import ArticleSectionArticleList from './ArticleSectionArticleList'
import ArticleSectionFiler from './ArticleSectionFilter'

export default function Articles() {
  return (
    <div className="flex flex-col p-6 grow min-w-0 max-w-180 desktop:bg-white desktop:mx-12 desktop:py-6 desktop:px-8 desktop:rounded-lg">
      <div className="text-mobile5xl text-left font-bold desktop:text-5xl">
        Most Popular
      </div>
      <div className="flex mt-4 mb-5 gap-4 flex-wrap">
        <ArticleSectionFiler />
      </div>
      <div className={clsx('flex flex-col py-6 gap-5', false && 'border-t')}>
        <ArticleSectionArticleList />
      </div>
    </div>
  )
}
