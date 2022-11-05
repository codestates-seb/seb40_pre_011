import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCookieToken } from '../storage/cookie';
import { refreshTokenAsync } from '../action/loginAsync';
import { loginActions } from '../reducer/loginSlice';

const useToken = () => {
  // accessToken eslint except
  const { isLogin } = useSelector(state => state.login);
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      const refresh = getCookieToken();
      // access token 만료 로직 추가
      const refreshHeader = {
        headers: {
          Authorization: `Bearer ${refresh}`,
        },
      };

      if (refresh) {
        dispatch(refreshTokenAsync({ url: '/refresh', refreshHeader }))
          .unwrap()
          .then(res => {
            if (res) {
              setLoading(true);
            }
          });
      } else {
        dispatch(loginActions.SET_LOGOUT())
          .unwrap()
          .then(() => {
            navigate('/login');
          });
      }
    }
  }, [dispatch]);

  return [isLogin, isLoading];
};

export default useToken;
