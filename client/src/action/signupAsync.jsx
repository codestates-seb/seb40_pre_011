import { createAsyncThunk } from '@reduxjs/toolkit';
import signupService from '../service/signupService';

const signupAsync = createAsyncThunk(
  '/signup',
  async ({ displayName, email, password }) => {
    // async = 하나만 받음
    const signup = await signupService.signup(displayName, email, password);

    // 201 -> 정상처리: return data -> reducer로 감
    // 401 -> 회원가입 실패
    // 보내줄 데이터 구분
    if (signup.status === 201) {
      return { displayName, email, password };
    } else if (signup.status === 401) {
      return;
    }
  },
);

export default signupAsync;
