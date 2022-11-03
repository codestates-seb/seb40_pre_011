import { configureStore } from '@reduxjs/toolkit';
import loginSlice from '../reducer/loginSlice';
import signupSlice from '../reducer/signupSlice';

// Slice Append Here
const reducer = {
  login: loginSlice,
  signup: signupSlice,
};

const store = configureStore({
  reducer,
});

export default store;
