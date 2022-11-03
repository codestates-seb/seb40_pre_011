import { createSlice } from '@reduxjs/toolkit';
import signupAsync from '../action/signupAsync';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    loading: false,
    signupError: false,
    signupSuccess: false,
    errorMessage: '',
  },
  reducers: {},
  extraReducers: {
    [signupAsync.pending]: state => {
      state.loading = true;
    },
    [signupAsync.fulfilled]: state => {
      state.loading = false;
      state.signupSuccess = true;
    },
    [signupAsync.rejected]: (state, action) => {
      state.loading = false;
      state.signupError = true;
      state.signupDone = false;
      state.rejectReason = action.error;
    },
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice.reducer;
