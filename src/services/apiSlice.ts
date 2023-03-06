import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IArticleResponse } from './types/articles/i-article.view-model'
import { IGetArticlesQuery } from './types/articles/i-get-articles.query'
import { IArticleCategoriesResponse } from './types/shared/i-article-category.view-model'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://3.112.59.180:33823/api/' }),
  endpoints: (builder) => ({
    getArticles: builder.query<IArticleResponse, IGetArticlesQuery>({
      query: (params) => ({
        url: 'articles',
        params,
      }),
    }),
    getArticleCategories: builder.query<IArticleCategoriesResponse, void>({
      query: () => 'article-categories',
    }),
  }),
})

export const { useGetArticlesQuery, useGetArticleCategoriesQuery } = apiSlice
