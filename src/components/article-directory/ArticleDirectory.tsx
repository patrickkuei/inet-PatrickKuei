import ArticleList from '@inet/components/shared/ArticleList'
import PaginationSection from '@inet/components/shared/PaginationSection'
import usePagination from '@inet/hooks/use-pagination'
import { useGetArticlesQuery } from '@inet/services/apiSlice'
import { IArticleCategoryViewModel } from '@inet/services/types/shared/i-article-category.view-model'
import ArticleDirectoryHeader from './ArticleDirectoryHeader'

interface IArticleDirectoryProps {
  category: IArticleCategoryViewModel
}

export default function ArticleDirectory({ category }: IArticleDirectoryProps) {
  const { page: currentPage, limit, updatePage, updateLimit } = usePagination()

  const { isFetching, data: response } = useGetArticlesQuery({
    categoryId: category.id,
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

  return (
    <div className="flex flex-col p-6 grow min-w-0 max-w-180 desktop:bg-white desktop:mx-12 desktop:py-6 desktop:px-8 desktop:rounded-lg">
      <ArticleDirectoryHeader category={category} />
      <div className="flex flex-col py-6 gap-5">
        <ArticleList isLoading={isFetching} articles={response?.data ?? []} />
        {!isFetching && !!response?.totalCount && (
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
