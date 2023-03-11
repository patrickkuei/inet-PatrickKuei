import { ChangeEvent, useState } from 'react'

export interface IUsePagination {
  page: number
  limit: number
  updatePage: (page: number) => void
  updateLimit: (nextLimit: number) => void
  handleLimitChange: (
    event: ChangeEvent<HTMLSelectElement>,
    totalCount: number,
  ) => void
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

  const handleLimitChange = (
    event: ChangeEvent<HTMLSelectElement>,
    totalCount: number,
  ): void => {
    const nextLimit = parseInt(event.target.value)
    updateLimit(nextLimit)

    const nextTotalPage = ~~(totalCount / nextLimit)

    if (page > nextTotalPage) {
      updatePage(nextTotalPage - 1)
    }
  }

  return {
    page,
    limit,
    updatePage,
    updateLimit,
    handleLimitChange,
  }
}

export default usePagination
