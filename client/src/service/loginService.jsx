import axios from 'axios';

const login = (url, info) => {
  return axios.post(url, JSON.stringify(info), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

const logout = url => {
  return axios.get(url).then(localStorage.removeItem('user')).catch();
};

const loginService = {
  login,
  logout,
};
export default loginService;
