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
    [signupAsync.fulfilled]: (state, action) => {
      // 수정 필
      state.loading = action.payload.Loading;
      state.signupSuccess = action.payload.SignupSuccess;
      state.signupError = action.payload.SignupError;
      state.rejectReason = action.payload.RejectReason;
      // console.log('here is state!');
      // console.log(
      //   state.loading,
      //   state.signupSuccess,
      //   state.signupError,
      //   state.rejectReason,
      // );
    },
    [signupAsync.rejected]: (state, action) => {
      state.loading = action.payload.Loading;
      state.signupError = action.payload.SignupError;
      state.signupDone = action.payload.SignupSuccess;
      state.rejectReason = action.payload.RejectReason;
    },
  },
});

export const signupActions = signupSlice.actions;

export default signupSlice.reducer;
