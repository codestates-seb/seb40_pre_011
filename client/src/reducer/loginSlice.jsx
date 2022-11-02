import { createSlice } from '@reduxjs/toolkit';
import { loginAsync, logoutAsync } from '../action/loginAsync';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
  },
  reducers: {},
  extraReducers: {
    [loginAsync.fulfilled]: state => {
      state.isLogin = true;
    },
    [loginAsync.rejected]: state => {
      state.isLogin = false;
    },
    [logoutAsync.fulfilled]: state => {
      state.isLogin = false;
    },
    [logoutAsync.rejected]: state => {
      state.isLogin = false;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
