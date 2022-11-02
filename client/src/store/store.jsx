import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../reducer/loginSlice';

// Slice Append Here
const reducer = {
  login: loginSlice,
};

const store = configureStore({
  reducer,
});

export default store;
