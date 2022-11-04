import { configureStore } from '@reduxjs/toolkit';
import litsSlice from '../reducer/listSlice';
import loginSlice from '../reducer/loginSlice';

// Slice Append Here
const reducer = {
  login: loginSlice,
  content: litsSlice,
};

const store = configureStore({
  reducer,
});

export default store;
