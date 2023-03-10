import ArticleDirectory from '@inet/components/article-directory/ArticleDirectory'
import Spinner from '@inet/components/shared/Spinner'
import { useGetArticleCategoriesQuery } from '@inet/services/apiSlice'
import { useMemo } from 'react'
import { Navigate, useParams } from 'react-router-dom'

export default function ArticleDirectoryPage() {
  const { categoryCode } = useParams()

  const { isLoading, data: categories } = useGetArticleCategoriesQuery()

  const category = useMemo(
    () => categories?.find((category) => category.code === categoryCode),
    [categoryCode, categories],
  )

  return isLoading ? (
    <Spinner size="md" />
  ) : category ? (
    <ArticleDirectory key={categoryCode} category={category} />
  ) : (
    <Navigate to="/popular" replace={true} />
  )
}
