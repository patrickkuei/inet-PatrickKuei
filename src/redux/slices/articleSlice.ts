import {
  ArticleCreatedWithin,
  IGetArticlesQuery,
} from '@inet/services/types/articles/i-get-articles.query'
import { IArticleCategoryViewModel } from '@inet/services/types/shared/i-article-category.view-model'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type articleState = {
  articleCreatedWithin: ArticleCreatedWithin
  currentCategory: IArticleCategoryViewModel
  articleParams: IGetArticlesQuery
}

const initialState: articleState = {
  articleCreatedWithin: ArticleCreatedWithin.All,
  currentCategory: {
    code: 'popular',
    id: 0,
    imageUrl: '',
  },
  articleParams: {},
}

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setArticleCreatedWithin: (
      state,
      action: PayloadAction<ArticleCreatedWithin>,
    ) => {
      state.articleCreatedWithin = action.payload
    },
    setArticleCategory: (
      state,
      action: PayloadAction<IArticleCategoryViewModel>,
    ) => {
      state.currentCategory = action.payload
    },
    setArticleParams: (state, action: PayloadAction<IGetArticlesQuery>) => {
      state.articleParams = action.payload
    },
  },
})

export const { setArticleCreatedWithin, setArticleCategory, setArticleParams } =
  articleSlice.actions

export default articleSlice.reducer
