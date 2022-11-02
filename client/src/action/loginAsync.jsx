import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '../service/loginService';

export const loginAsync = createAsyncThunk(
  'login/loginAsync',
  async (url, info) => {
    const login = await loginService.login(url, info);

    return login.data;
  },
);

export const logoutAsync = createAsyncThunk('login/logoutAsync', async url => {
  const logout = await loginService.logout(url);

  return logout.data;
});
