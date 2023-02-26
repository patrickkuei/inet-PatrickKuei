import moment from 'moment'
import { useRef, useState } from 'react'
import ArticleThumbnail from './ArticleThumbnail'
import PaginationSection from './PaginationSection'

import { useAppSelector } from '@inet/app/hooks'
import usePagination from '@inet/hooks/use-pagination'
import { useGetArticlesQuery } from '@inet/services/apiSlice'
import { ArticleCreatedWithin } from '@inet/services/types/articles/i-get-articles.query'
import { Pagination } from '@inet/services/types/shared/pagination'

type Props = {}

const ArticleSectionArticleList = ({}: Props) => {
  const currentMoment = useRef(moment())
  const createdWithin = useAppSelector(
    (state) => state.articleReducer.articleCreatedWithin,
  )

  const { page, limit, updatePage, updateLimit } = usePagination()

  const {
    data: response,
    error,
    isFetching,
  } = useGetArticlesQuery({
    pagination: Pagination.Basic,
    page,
    limit,
    createdWithin:
      createdWithin === ArticleCreatedWithin.All ? undefined : createdWithin,
  })

  return isFetching ? (
    <div>...is loading</div>
  ) : response!.data.length < 1 ? (
    <span className="text-tiny text-gray-500">no article</span>
  ) : (
    <>
      {response!.data.map((article) => {
        const createdAtDuration = moment
          .duration(-currentMoment.current.diff(moment(article.createdAt)))
          .humanize(true)

        return (
          <ArticleThumbnail
            key={article.id}
            article={article}
            createdAtDuration={createdAtDuration}
          />
        )
      })}
      <PaginationSection
        currentPage={page}
        totalPages={response!.totalPages}
        onClick={updatePage}
        onLimitChange={updateLimit}
        currentLimit={limit}
      />
    </>
  )
}

export default ArticleSectionArticleList
