import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const useLogin = () => {
  const isLogin = useSelector(state => state.login.isLogin);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isLogin) {
      setLoading(true);
    }
  }, []);

  return { isLogin, loading };
};

export default useLogin;
