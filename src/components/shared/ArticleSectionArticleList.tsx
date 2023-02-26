import moment from 'moment'
import { useRef, useState } from 'react'
import ArticleThumbnail from './ArticleThumbnail'
import PaginationSection from './PaginationSection'

import { useAppSelector } from '@inet/app/hooks'
import { useGetArticlesQuery } from '@inet/services/apiSlice'
import { ArticleCreatedWithin } from '@inet/services/types/articles/i-get-articles.query'
import { Pagination } from '@inet/services/types/shared/pagination'

type Props = {}

const ArticleSectionArticleList = ({}: Props) => {
  const [page, setPage] = useState(0)
  const [limit, setLimit] = useState(10)
  const currentMoment = useRef(moment())
  const createdWithin = useAppSelector(
    (state) => state.articleReducer.articleCreatedWithin,
  )
  const {
    data: response,
    error,
    isFetching,
  } = useGetArticlesQuery(
    createdWithin === ArticleCreatedWithin.All
      ? { pagination: Pagination.Basic, page, limit }
      : {
          pagination: Pagination.Basic,
          page,
          limit,
          createdWithin,
        },
  )

  const handlePageClick = (page: number) => {
    setPage(page)
  }

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(parseInt(event.target.value))
    setPage(0)
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
        currentPage={page}
        totalPages={response!.totalPages}
        onClick={handlePageClick}
        onLimitChange={handleLimitChange}
        currentLimit={limit}
      />
    </>
  )
}

export default ArticleSectionArticleList
