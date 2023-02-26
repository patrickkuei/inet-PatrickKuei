import { ArticleCreatedWithin } from '@inet/services/types/articles/i-get-articles.query'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type articleState = {
  articleCreatedWithin: ArticleCreatedWithin
}

const initialState: articleState = {
  articleCreatedWithin: ArticleCreatedWithin.All,
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
  },
})

export const { setArticleCreatedWithin } = articleSlice.actions

export default articleSlice.reducer
