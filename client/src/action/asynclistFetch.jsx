import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const asynclistFetch = createAsyncThunk('list/data', page => {
  const data = axios.get(`/content?page=${page}&size=10`).then(res => {
    return res.data;
  });
  return data;
});

export const asynclistupFetch = createAsyncThunk('list/up', data => {
  axios.post(`/content?page=1&size=10`, {
    memberId: 1,
    rec: 0,
    tags: data[2][0],
    title: data[0],
    body: data[1],
  });
});

export const asyncdeleteFetch = createAsyncThunk('list/delete', dataId => {
  axios.delete(`/content/${dataId}`, {
    contentId: dataId,
  });
});

export const asyncEditFetch = createAsyncThunk('list/update', data => {
  axios.patch(`/content/${data[2]}`, {
    contentId: data[2],
    title: data[0],
    body: data[1],
    tags: '태그',
  });
});
export default asynclistFetch;
