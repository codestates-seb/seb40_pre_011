import { createAsyncThunk } from '@reduxjs/toolkit';
import signupService from '../service/signupService';

const signupAsync = createAsyncThunk(
  '/signup',
  async ({ displayName, email, password }) => {
    const signup = await signupService.signup(displayName, email, password);
    console.log('here is signup');
    console.log(signup);

    if (signup.status === 201) {
      return {
        Loading: false,
        SignupError: false,
        SignupSuccess: true,
        RejectReason: null,
      };
    }
    if (signup.status === 401) {
      return {
        Loading: false,
        SignupError: true,
        SignupSuccess: false,
        RejectReason: '중복된 email',
      };
    }
    return signup; // 수정 필
  },
);

export default signupAsync;
