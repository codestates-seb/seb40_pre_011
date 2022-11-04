import { createAsyncThunk } from '@reduxjs/toolkit';
import loginService from '../service/loginService';
import { removeCookieToken, setRefreshToken } from '../storage/cookie';

export const loginAsync = createAsyncThunk(
  'login/loginAsync',
  async ({ url, email, password }) => {
    const login = await loginService.login(url, email, password);

    console.log('here is AsyncThunk');
    if (login.status === 200) {
      // 200 logic
      console.log('200 logic');
      setRefreshToken(login.data.refresh);
      return login.data;
    }
    if (login.status === 201) {
      console.log('201 logic');
      console.log(login);
    } else if (login.status === 401) {
      console.log('401 logic');
      return login.data.access;
    } else if (login.status === 403) {
      console.log('403 logic');
      console.log(login);
    }
    return login.data;
  },
);

export const logoutAsync = createAsyncThunk('login/logoutAsync', async url => {
  const logout = await loginService.logout(url);

  if (logout.status === 200) {
    removeCookieToken();
    return logout.data.status;
  }
  if (logout.status === 401) {
    //
  }

  return logout.data;
});

export const refreshTokenAsync = createAsyncThunk(
  'login/refreshTokenAsync',
  async ({ url, header }) => {
    const refresh = await loginService.refresh(url, header);

    console.log(refresh);
  },
);
