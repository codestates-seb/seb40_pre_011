import axios from 'axios';

const signup = (displayName, email, password) => {
  return axios
    .post(
      'http://ec2-3-36-121-198.ap-northeast-2.compute.amazonaws.com:8080/signup',
      { displayName, email, password },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
    .then(data => {
      // eslint-disable-next-line no-alert
      alert('Successssssssssssssssssss');
      // console.log('성공!');
      return data;
    })
    .catch(error => {
      if (error.message === 'Request failed with status code 500') {
        // eslint-disable-next-line no-alert
        alert('Errorrrrrrrrrrrrrrrrrrrrr');
      }
      // console.log(error);
      return error;
    });
};

const signupService = {
  signup,
};
export default signupService;
