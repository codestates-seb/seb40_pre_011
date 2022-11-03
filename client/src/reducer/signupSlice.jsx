import { createSlice } from '@reduxjs/toolkit';
import signupAsync from '../action/signupAsync';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    signupError: '',
    signupDone: '',
    rejectReason: '',
  },
  reducers: {},
  extraReducers: {
    [signupAsync.pending]: state => {
      state.loading = true;
      state.signupDone = false;
    },
    [signupAsync.fulfilled]: (state, action) => {
      // action값을 기준으로 처리
      console.log(action.payload);
      state.loading = false;
      state.signupDone = true;
      state.rejectReason = '';
    },
    [signupAsync.rejected]: (state, action) => {
      state.signupError = true;
      state.signupDone = false;
      state.rejectReason = action.error;
    },
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice.reducer;
