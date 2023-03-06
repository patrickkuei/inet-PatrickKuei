import moment from 'moment'
import { useRef } from 'react'
import ArticleThumbnail from './ArticleThumbnail'
import PaginationSection from './PaginationSection'

import { useAppSelector } from '@inet/app/hooks'
import usePagination from '@inet/hooks/use-pagination'
import { useGetArticlesQuery } from '@inet/services/apiSlice'
import { ArticleCreatedWithin } from '@inet/services/types/articles/i-get-articles.query'
import { Pagination } from '@inet/services/types/shared/pagination'

type Props = {}

const ArticleSectionArticleList = ({}: Props) => {
  const { page: currentPage, updatePage, limit, updateLimit } = usePagination()
  const currentMoment = useRef(moment())
  const createdWithin = useAppSelector(
    (state) => state.articleReducer.articleCreatedWithin,
  )

  const handlePageClick = (page: number) => {
    updatePage(page)
  }

  const { id: currentCategoryId } = useAppSelector(
    (state) => state.articleReducer.currentCategory,
  )

  const {
    data: response,
    error,
    isFetching,
    isLoading,
  } = useGetArticlesQuery({
    pagination: Pagination.Basic,
    page: currentPage,
    limit,
    createdWithin:
      createdWithin === ArticleCreatedWithin.All ? undefined : createdWithin,
    categoryId: currentCategoryId === 0 ? undefined : currentCategoryId,
  })

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLimit = parseInt(event.target.value)

    updateLimit(nextLimit)

    const { totalCount } = response!
    const nextTotalPage = ~~(totalCount / nextLimit)

    if (currentPage > nextTotalPage) {
      updatePage(nextTotalPage - 1)
    }
  }

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
        currentPage={currentPage}
        totalPages={response!.totalPages}
        onClick={handlePageClick}
        onLimitChange={handleLimitChange}
        currentLimit={limit}
      />
    </>
  )
}

export default ArticleSectionArticleList
