import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const asynclistFetch = createAsyncThunk('list/data', async page => {
  const data = await axios
    .get(
      `http://ec2-3-36-121-198.ap-northeast-2.compute.amazonaws.com:8080/content?page=${page}&size=10`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(res => {
      return res.data;
    });
  return data;
});

export const asynclistupFetch = createAsyncThunk('list/up', data => {
  axios.post(
    `http://ec2-3-36-121-198.ap-northeast-2.compute.amazonaws.com:8080/content?page=1&size=10`,
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
  axios.delete(
    `http://ec2-3-36-121-198.ap-northeast-2.compute.amazonaws.com:8080/content/${dataId}`,
    {
      contentId: dataId,
    },
  );
});

export const asyncEditFetch = createAsyncThunk('list/update', data => {
  axios.patch(
    `http://ec2-3-36-121-198.ap-northeast-2.compute.amazonaws.com:8080/content/${data[2]}`,
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
