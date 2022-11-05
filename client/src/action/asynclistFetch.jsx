import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const asynclistFetch = createAsyncThunk('list/data', async page => {
  const data = await axios.get(`/content?page=${page}&size=10`).then(res => {
    return res.data;
  });
  return data;
});

export const asynclistupFetch = createAsyncThunk('list/up', data => {
  axios.post(
    `/content?page=1&size=10`,
    JSON.stringify({
      id: 1,
      rec: 0,
      tags: data[2][0],
      title: data[0],
      body: data[1],
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
});

export const asyncdeleteFetch = createAsyncThunk('list/delete', dataId => {
  axios.delete(`/content/${dataId}`, {
    contentId: dataId,
  });
});

export const asyncEditFetch = createAsyncThunk('list/update', data => {
  axios.patch(
    `/content/${data[2]}`,
    JSON.stringify({
      contentId: data[2],
      title: data[0],
      body: data[1],
      tags: data[3],
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
});
export default asynclistFetch;
