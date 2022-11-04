import { createSlice } from '@reduxjs/toolkit';
import {
  loginAsync,
  logoutAsync,
  refreshTokenAsync,
} from '../action/loginAsync';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
    accessToken: null,
    userId: '',
    userEmail: '',
    // expireTime : null,
  },
  reducers: {
    SET_TOKEN(state, action) {
      state.isLogin = action.payload && true;
      state.accessToken = action.payload && action.payload;
    },
    SET_LOGOUT(state) {
      state.isLogin = false;
      state.accessToken = null;
    },
  },
  extraReducers: {
    [loginAsync.fulfilled]: (state, action) => {
      const { code, accessToken, name, email } = action.payload;
      if (code === 200) {
        state.isLogin = true;
        state.accessToken = accessToken;
        state.userId = name;
        state.userEmail = email;
      }
    },
    [loginAsync.rejected]: state => {
      state.isLogin = false;
      state.accessToken = null;
      state.userNick = '';
      state.userEmail = '';
    },
    [logoutAsync.fulfilled]: (state, action) => {
      state.isLogin = action.payload === 200 ? false : state.isLogin;
      state.accessToken = action.payload === 200 ? null : state.accessToken;
    },
    // [logoutAsync.rejected]: state => {
    //   state.accessToken
    // },
    [refreshTokenAsync.fulfilled]: (state, action) => {
      console.log(action);
      state.isLogin = action.payload && true;
      state.accessToken = action.payload;
    },
    [refreshTokenAsync.rejected]: (state, action) => {
      console.log(action);
      state.isLogin = false;
      state.accessToken = null;
    },
  },
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
