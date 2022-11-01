import React, { useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/Header/Header';
import Login from '../../components/Login/Login';

function LoginPage() {
  useEffect(() => {
    axios.get('/api/').then(data => console.log(data));
  });
  return (
    <>
      <Header />
      <Login />
    </>
  );
}

export default LoginPage;
