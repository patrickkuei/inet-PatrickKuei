import { ArticleCreatedWithin } from '@inet/services/types/articles/i-get-articles.query'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type articleState = {
  articleCreatedWithin: ArticleCreatedWithin
  currentCategory: string
}

const initialState: articleState = {
  articleCreatedWithin: ArticleCreatedWithin.All,
  currentCategory: 'popular',
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
    setArticleCategory: (state, action: PayloadAction<string>) => {
      state.currentCategory = action.payload
    },
  },
})

export const { setArticleCreatedWithin, setArticleCategory } =
  articleSlice.actions

export default articleSlice.reducer
