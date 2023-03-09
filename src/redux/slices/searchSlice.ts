import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type searchState = {
  searchKeyword: string | undefined
  isGlobalSearch: boolean
}

const initialState: searchState = {
  searchKeyword: undefined,
  isGlobalSearch: true,
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchKeyword: (state, action: PayloadAction<string | undefined>) => {
      state.searchKeyword = action.payload
    },
    setIsGlobalSearch: (state, action: PayloadAction<boolean>) => {
      state.isGlobalSearch = action.payload
    },
  },
})

export const { setSearchKeyword, setIsGlobalSearch } = searchSlice.actions

export default searchSlice.reducer
