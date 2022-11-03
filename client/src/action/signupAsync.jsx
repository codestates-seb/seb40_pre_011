import { createAsyncThunk } from '@reduxjs/toolkit';
import signupService from '../service/signupService';

const signupAsync = createAsyncThunk(
  '/signup',
  async ({ displayName, email, password }) => {
    const signup = await signupService.signup(displayName, email, password);
    return signup;
  },
);

export default signupAsync;
