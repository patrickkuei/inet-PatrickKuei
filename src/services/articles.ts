import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://3.112.59.180:33823/' }),
  endpoints: (builder) => ({
    getArticles: builder.query<
      string,
      {
        pagination: string
        page: number
        limit: number
        FLAG_UNLIMITED: boolean
      }
    >({
      query: ({ pagination, page, limit, FLAG_UNLIMITED }) => ({
        url: 'api/articles',
        param: {
          pagination,
          page,
          limit,
          FLAG_UNLIMITED,
        },
      }),
    }),
  }),
})

export const { useGetArticlesQuery } = articlesApi
