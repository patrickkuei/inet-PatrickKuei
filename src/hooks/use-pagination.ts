import { ChangeEvent, useState } from 'react'

export interface IUsePagination {
  page: number
  limit: number
  updatePage: (page: number) => void
  updateLimit: (event: ChangeEvent<HTMLSelectElement>) => void
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
  }

  const updateLimit = (event: ChangeEvent<HTMLSelectElement>): void => {
    setLimit(parseInt(event.target.value))
    setPage(0)
  }

  return {
    page,
    limit,
    updatePage,
    updateLimit,
  }
}

export default usePagination
