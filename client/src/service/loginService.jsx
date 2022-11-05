import axios from 'axios';

const login = (url, email, password) => {
  return axios
    .post(url, JSON.stringify({ email, password }), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    });
};

const logout = url => {
  return axios
    .get(url)
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    });
};

const refresh = (url, header) => {
  return axios
    .post(url, header)
    .then(data => {
      return data;
    })
    .catch(err => {
      return err;
    });
};

const loginService = {
  login,
  logout,
  refresh,
};
export default loginService;
