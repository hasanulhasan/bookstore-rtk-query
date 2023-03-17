import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isFeatured: false,
  search: ''
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    searchParam: (state, action) => {
      state.search = action.payload;
    },
    changeFeatured: (state, action) => {
      state.isFeatured = action.payload;
    }
  }
})

export default filterSlice.reducer;
export const { searchParam, changeFeatured } = filterSlice.actions