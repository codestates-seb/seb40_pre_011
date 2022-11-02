import { createAsyncThunk } from '@reduxjs/toolkit';

export const loginAsync = createAsyncThunk();

export const logoutAsync = createAsyncThunk();

const loginService = {
  loginAsync,
  logoutAsync,
};

export default loginService;
