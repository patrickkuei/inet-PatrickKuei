import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticleViewModel } from './types/articles/i-article.view-model'
import { IGetArticlesQuery } from './types/articles/i-get-articles.query'

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://3.112.59.180:33823/' }),
  endpoints: (builder) => ({
    getArticles: builder.query<IArticleViewModel[], IGetArticlesQuery>({
      query: (params) => ({
        url: 'api/articles',
        params,
      }),
    }),
  }),
})

export const { useGetArticlesQuery } = articlesApi
