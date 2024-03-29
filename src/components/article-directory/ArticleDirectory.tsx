import ArticleList from '@inet/components/shared/ArticleList'
import PaginationSection from '@inet/components/shared/PaginationSection'
import useGetArticlesQueryParams from '@inet/hooks/use-get-articles-query-params'
import { useGetArticlesQuery } from '@inet/services/apiSlice'
import { IArticleCategoryViewModel } from '@inet/services/types/shared/i-article-category.view-model'
import ArticleDirectoryHeader from './ArticleDirectoryHeader'
import ArticleDirectorySearchSummary from './ArticleDirectorySearchSummary'

export interface IArticleDirectoryProps {
  category: IArticleCategoryViewModel
}

export default function ArticleDirectory({ category }: IArticleDirectoryProps) {
  const { page, limit, updatePage, handleLimitChange, keyword, updateKeyword } =
    useGetArticlesQueryParams()

  const { isFetching, data: response } = useGetArticlesQuery({
    categoryId: category.id,
    page,
    limit,
    keyword,
  })

  const totalCount = response?.totalCount ?? 0

  return (
    <div className="flex flex-col p-6 grow min-w-0 max-w-180 desktop:bg-white desktop:mx-12 desktop:py-6 desktop:px-8 desktop:rounded-lg">
      <ArticleDirectoryHeader
        category={category}
        defaultKeyword={keyword}
        onSearch={updateKeyword}
      />
      {!isFetching && totalCount > 0 && (
        <ArticleDirectorySearchSummary
          keyword={keyword ?? ''}
          totalCount={totalCount}
        />
      )}
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
