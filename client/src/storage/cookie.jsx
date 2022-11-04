import { Cookies } from 'react-cookie';

const cookie = new Cookies();

export const setRefreshToken = refreshToken => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 1);

  return cookie.set('refresh_token', refreshToken, {
    sameSite: 'strict',
    path: '/',
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  return cookie.get('refresh_token');
};

export const removeCookieToken = () => {
  return cookie.remove('refresh_token', { sameSite: 'strict', path: '/' });
};
