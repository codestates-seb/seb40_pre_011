import { createSlice } from '@reduxjs/toolkit';
import asynclistFetch from '../action/asynclistFetch';

const listSlice = createSlice({
  name: 'content',
  initialState: {
    data: [],
    pageInfo: {},
  },
  reducers: {
    detail() {},
  },
  extraReducers: {
    [asynclistFetch.fulfilled]: (state, action) => {
      state.data = action.payload.data;
      state.pageInfo = action.payload.pageInfo;
    },
  },
});

export const DetailActions = listSlice.actions;

export default listSlice.reducer;
