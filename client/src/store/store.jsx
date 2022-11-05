import { configureStore } from '@reduxjs/toolkit';
import litsSlice from '../reducer/listSlice';
import loginSlice from '../reducer/loginSlice';
import signupSlice from '../reducer/signupSlice';

// Slice Append Here
const reducer = {
  login: loginSlice,
  signup: signupSlice,
  content: litsSlice,
};

const store = configureStore({
  reducer,
});

export default store;
