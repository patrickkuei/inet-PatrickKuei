import ArticleList from '@inet/components/shared/ArticleList'
import PaginationSection from '@inet/components/shared/PaginationSection'
import useGetArticlesQueryParams from '@inet/hooks/use-get-articles-query-params'
import { useGetArticlesQuery } from '@inet/services/apiSlice'
import { ArticleCreatedWithin } from '@inet/services/types/articles/i-get-articles.query'
import { useState } from 'react'
import HomeFilter from './HomeFilter'

export default function HomeContent() {
  const [createdWithin, setCreatedWithin] = useState(ArticleCreatedWithin.All)
  const { page, limit, updatePage, handleLimitChange } =
    useGetArticlesQueryParams()

  const { data: response, isFetching } = useGetArticlesQuery({
    createdWithin:
      createdWithin === ArticleCreatedWithin.All ? undefined : createdWithin,
    page,
    limit,
  })

  const isEmpty = !response?.totalCount

  return (
    <div className="flex flex-col p-6 grow min-w-0 max-w-180 desktop:bg-white desktop:mx-12 desktop:py-6 desktop:px-8 desktop:rounded-lg">
      <div className="text-mobile5xl text-left font-bold desktop:text-5xl">
        Most Popular
      </div>
      <HomeFilter
        createdWithin={createdWithin}
        onCreatedWithinChange={setCreatedWithin}
      />
      <div className="flex flex-col py-6 gap-5">
        <ArticleList isLoading={isFetching} articles={response?.data ?? []} />
        {!isFetching && !isEmpty && (
          <PaginationSection
            currentPage={page}
            totalPages={response?.totalPages ?? 0}
            onClick={updatePage}
            onLimitChange={(e) =>
              handleLimitChange(e, response?.totalCount ?? 0)
            }
            currentLimit={limit}
          />
        )}
      </div>
    </div>
  )
}
