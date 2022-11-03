import axios from 'axios';

const signup = (displayName, eamil, password) => {
  return axios
    .post(
      'http://localhost:3000/signup',
      { displayName, eamil, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(res => {
      return res;
    })
    .catch(err => {
      return err;
    });
};

const signupService = {
  signup,
};
export default signupService;
