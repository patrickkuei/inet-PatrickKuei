import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type searchState = {
  searchKeyword: string | undefined
}

const initialState: searchState = {
  searchKeyword: undefined,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string | undefined>) => {
      state.searchKeyword = action.payload
    },
  },
})

export const { setSearchKeyword } = searchSlice.actions

export default searchSlice.reducer
