import useGetArticlesQueryParams from '@inet/hooks/use-get-articles-query-params'
import { useGetArticlesQuery } from '@inet/services/apiSlice'
import ArticleList from '../shared/ArticleList'
import PaginationSection from '../shared/PaginationSection'
import GlobalSearchResultHeader from './GlobalSearchResultHeader'

export default function GlobalSearchResult() {
  const { page, limit, updatePage, handleLimitChange, keyword } =
    useGetArticlesQueryParams()

  const { isFetching, data: response } = useGetArticlesQuery({
    page,
    limit,
    keyword,
  })

  return (
    <div className="flex flex-col p-6 grow min-w-0 max-w-180 desktop:bg-white desktop:mx-12 desktop:py-6 desktop:px-8 desktop:rounded-lg">
      <GlobalSearchResultHeader
        keyword={keyword ?? ''}
        totalCount={response?.totalCount ?? 0}
      />
      <div className="flex flex-col py-4 gap-5">
        <ArticleList
          isLoading={isFetching}
          articles={response?.data ?? []}
          searchKeyword={keyword}
        />
        {!isFetching && !!response?.totalCount && (
          <PaginationSection
            currentPage={page}
            totalPages={response?.totalPages ?? 0}
            onClick={updatePage}
            onLimitChange={(e) =>
              handleLimitChange(e, response?.data.length ?? 0)
            }
            currentLimit={limit}
          />
        )}
      </div>
    </div>
  )
}
