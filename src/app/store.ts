import articleReducer from '@inet/redux/slices/articleSlice'
import paginationReducer from '@inet/redux/slices/paginationSlice'
import searchReducer from '@inet/redux/slices/searchSlice'
import { apiSlice } from '@inet/services/apiSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    articleReducer,
    paginationReducer,
    searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
