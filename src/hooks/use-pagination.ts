import { useState } from 'react'

export interface IUsePagination {
  page: number
  limit: number
  updatePage: (page: number) => void
  updateLimit: (nextLimit: number) => void
}

export interface IUsePaginationOptions {
  /**
   * @default 0
   */
  page?: number
  /**
   * @default 10
   */
  limit?: number
}

function usePagination({
  page: defaultPage = 0,
  limit: defaultLiimt = 10,
}: IUsePaginationOptions = {}): IUsePagination {
  const [page, setPage] = useState(defaultPage)
  const [limit, setLimit] = useState(defaultLiimt)

  const updatePage = (page: number): void => {
    setPage(page)
    window.scrollTo(0, 0)
  }

  const updateLimit = (nextLimit: number): void => {
    setLimit(nextLimit)
    setPage(0)
    window.scrollTo(0, 0)
  }

  let x = 1

  return {
    page,
    limit,
    updatePage,
    updateLimit,
  }
}

export default usePagination
