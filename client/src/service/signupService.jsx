import axios from 'axios';

const signup = (displayName, email, password) => {
  return axios
    .post(
      'http://localhost:3001/signup',
      { displayName, email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(() => {
      // eslint-disable-next-line no-alert
      alert('Successssssssssssssssssss');
      console.log('성공!');
    })
    .catch(error => {
      if (error.message === 'Request failed with status code 500') {
        // eslint-disable-next-line no-alert
        alert('Errorrrrrrrrrrrrrrrrrrrrr');
      }
      console.log(error);
    });
};

const signupService = {
  signup,
};
export default signupService;
