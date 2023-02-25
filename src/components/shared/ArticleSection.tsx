import clsx from 'clsx'
import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { useGetArticlesQuery } from '../../services/apiSlice'
import { ArticleCreatedWithin } from '../../services/types/articles/i-get-articles.query'
import { Pagination } from '../../services/types/shared/pagination'
import ArticleSectionArticleList from './ArticleSectionArticleList'
import ArticleSectionFiler from './ArticleSectionFilter'

export default function Articles() {
  const createdWithin = useAppSelector(
    (state) => state.articleReducer.articleCreatedWithin,
  )
  const { data, error, isLoading } = useGetArticlesQuery(
    createdWithin === ArticleCreatedWithin.All
      ? { pagination: Pagination.Basic, page: 0, limit: 30 }
      : {
          pagination: Pagination.Basic,
          page: 0,
          limit: 30,
          createdWithin,
        },
  )

  return (
    <div className="p-6 grow min-w-0 max-w-180 desktop:bg-white desktop:mx-12 desktop:py-6 desktop:px-8 desktop:rounded-lg">
      <div className="text-mobile5xl text-left font-bold desktop:text-5xl">
        Most Popular
      </div>
      <div className="flex mt-4 mb-5 gap-4 flex-wrap">
        <ArticleSectionFiler />
      </div>
      <div className={clsx('flex flex-col py-6 gap-5', false && 'border-t')}>
        {isLoading ? (
          <div>...is loading</div>
        ) : (
          <ArticleSectionArticleList articles={data!.data} />
        )}
      </div>
    </div>
  )
}
