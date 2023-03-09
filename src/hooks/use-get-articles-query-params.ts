import { useAppSelector } from '@inet/app/hooks'
import {
  ArticleCreatedWithin,
  IGetArticlesQuery,
} from '@inet/services/types/articles/i-get-articles.query'
import { useSearchParams } from 'react-router-dom'

const useGetArticlesQueryParams = (
  page: number,
  limit: number,
): IGetArticlesQuery => {
  const createdWithin = useAppSelector(
    (state) => state.articleReducer.articleCreatedWithin,
  )

  const { id: currentCategoryId } = useAppSelector(
    (state) => state.articleReducer.currentCategory,
  )

  const [searchParams] = useSearchParams()
  const keyword = searchParams.get('keyword') ?? undefined

  return {
    page,
    limit,
    createdWithin:
      createdWithin === ArticleCreatedWithin.All ? undefined : createdWithin,
    categoryId: currentCategoryId === 0 ? undefined : currentCategoryId,
    keyword,
  }
}

export default useGetArticlesQueryParams
