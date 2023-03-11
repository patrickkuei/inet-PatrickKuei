import usePagination, { IUsePagination } from '@inet/hooks/use-pagination'
import { useSearchParams } from 'react-router-dom'

export interface IUseGetArticlesQueryParams extends IUsePagination {
  keyword: string | undefined
  updateKeyword: (keyword: string) => void
}

export const KEYWORD_PARAM_KEY = 'keyword'

const useGetArticlesQueryParams = (): IUseGetArticlesQueryParams => {
  const [searchParams, setSearchParams] = useSearchParams()
  const keyword = searchParams.get(KEYWORD_PARAM_KEY) ?? undefined

  const updateKeyword = (value: string) => {
    if (value) {
      searchParams.set(KEYWORD_PARAM_KEY, value)
    } else {
      searchParams.delete(KEYWORD_PARAM_KEY)
    }
    setSearchParams(searchParams)
  }

  const pagination = usePagination()

  return {
    ...pagination,
    keyword,
    updateKeyword,
  }
}

export default useGetArticlesQueryParams
