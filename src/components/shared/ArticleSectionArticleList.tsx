import moment from 'moment'
import { useRef, useState } from 'react'
import ArticleThumbnail from './ArticleThumbnail'
import PaginationSection from './PaginationSection'

import { useAppDispatch, useAppSelector } from '@inet/app/hooks'
import usePagination from '@inet/hooks/use-pagination'
import { setPage } from '@inet/redux/slices/paginationSlice'
import { useGetArticlesQuery } from '@inet/services/apiSlice'
import { ArticleCreatedWithin } from '@inet/services/types/articles/i-get-articles.query'
import { Pagination } from '@inet/services/types/shared/pagination'

type Props = {}

const ArticleSectionArticleList = ({}: Props) => {
  const dispatch = useAppDispatch()
  const { limit, updateLimit } = usePagination()
  const currentMoment = useRef(moment())
  const createdWithin = useAppSelector(
    (state) => state.articleReducer.articleCreatedWithin,
  )
  const page = useAppSelector((state) => state.paginationReducer.page)

  const handlePageClick = (page: number) => {
    dispatch(setPage(page))
  }

  const { id: currentCategoryId } = useAppSelector(
    (state) => state.articleReducer.currentCategory,
  )

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
    categoryId: currentCategoryId === 0 ? undefined : currentCategoryId,
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
        onClick={handlePageClick}
        onLimitChange={updateLimit}
        currentLimit={limit}
      />
    </>
  )
}

export default ArticleSectionArticleList
