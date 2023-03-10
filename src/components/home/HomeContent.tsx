import ArticleList from '@inet/components/shared/ArticleList'
import PaginationSection from '@inet/components/shared/PaginationSection'
import usePagination from '@inet/hooks/use-pagination'
import { useGetArticlesQuery } from '@inet/services/apiSlice'
import { ArticleCreatedWithin } from '@inet/services/types/articles/i-get-articles.query'
import { useState } from 'react'
import HomeFilter from './HomeFilter'

export default function HomeContent() {
  const [createdWithin, setCreatedWithin] = useState(ArticleCreatedWithin.All)

  const { page: currentPage, limit, updatePage, updateLimit } = usePagination()

  const { data: response, isFetching } = useGetArticlesQuery({
    createdWithin:
      createdWithin === ArticleCreatedWithin.All ? undefined : createdWithin,
    page: currentPage,
    limit,
  })

  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLimit = parseInt(event.target.value)
    updateLimit(nextLimit)

    const totalCount = response?.totalCount ?? 0
    const nextTotalPage = ~~(totalCount / nextLimit)

    if (currentPage > nextTotalPage) {
      updatePage(nextTotalPage - 1)
    }
  }

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
            currentPage={currentPage}
            totalPages={response?.totalPages ?? 0}
            onClick={updatePage}
            onLimitChange={handleLimitChange}
            currentLimit={limit}
          />
        )}
      </div>
    </div>
  )
}
