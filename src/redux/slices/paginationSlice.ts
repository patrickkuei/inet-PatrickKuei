import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type paginationState = {
  page: number
}

const initialState: paginationState = {
  page: 0,
}

export const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
      window.scrollTo(0, 0)
    },
  },
})

export const { setPage } = paginationSlice.actions

export default paginationSlice.reducer
