import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticleResponse } from './types/articles/i-article.view-model'
import { IGetArticlesQuery } from './types/articles/i-get-articles.query'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://3.112.59.180:33823/' }),
  endpoints: (builder) => ({
    getArticles: builder.query<IArticleResponse, IGetArticlesQuery>({
      query: (params) => ({
        url: 'api/articles',
        params,
      }),
    }),
  }),
})

export const { useGetArticlesQuery } = apiSlice
