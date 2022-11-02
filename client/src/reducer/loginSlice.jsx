import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLogin: false,
  },
  reducers: {
    login() {},

    logout() {},
  },
  extraReducers: {},
});

export const loginActions = loginSlice.actions;

export default loginSlice.reducer;
