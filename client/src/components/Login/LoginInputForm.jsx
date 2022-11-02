import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../../hook/useInput';
import LoginInput from './LoginInput';
import pattern from './LoginRegExp';
import LoginWarning, { WarningMent } from './LoginWarning';
import { loginAsync } from '../../action/loginAsync';

const Inputbox = styled.article`
  box-shadow: var(--bs-xl);
  padding: 23px;
  margin-bottom: 24px;
  background-color: var(--white);
  border-radius: 7px;
  margin-right: auto;
  margin-left: auto;

  .login_form {
    display: flex;
    flex-direction: column;
  }

  .email {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 6px 0px;
  }
  .email-label {
    margin: 3px 0px;
    cursor: pointer;
    color: var(--black-900);
    padding: 0px 2px;
    font-weight: 600;
    font-size: var(--font-15);
  }

  .email-inputbox {
    display: flex;
    position: relative;
    margin: 2px;
  }
  .password {
    margin: 6px 0px;
    display: flex;
    flex-direction: column;
  }
  .password > .password-label-box {
    display: flex;
    justify-content: space-between;
    margin: 3px 0px;
    .password-label {
      font-weight: 600;
      font-size: var(--font-15);
      padding: 0px 2px;
    }
    .forget-pwd {
      text-decoration: none;
      color: var(--blue-600);
      font-size: var(--font-12);

      &:hover {
        color: var(--blue-500);
      }
    }
  }
  .password-inputbox {
    display: flex;
    position: relative;
    margin: 2px;
  }

  .login {
    display: flex;
    margin: 6px 0px;
    flex-direction: column;
  }
  .login-btn {
    margin: 2px 0px;
    color: var(--white);
    background-color: var(--blue-500);
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);

    position: relative;
    padding: 0.8em;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: var(--font-13);
    font-weight: normal;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--white);
      background-color: var(--blue-600);
    }
  }
`;
function LoginInputForm() {
  const [email, setEmail, resetEmail, emailValid, setEmailValid] = useInput('');
  const [
    password,
    setPassword,
    resetPassword,
    passwordValid,
    setPasswordValid,
  ] = useInput('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginSendHandler = e => {
    e.preventDefault();

    if (password === '' && email === '') {
      setEmailValid(true);
      setPasswordValid(true);
    } else if (password === '') {
      setPasswordValid(true);
    } else if (pattern.test(email)) {
      if (!password === '') {
        resetPassword();
        resetEmail();

        dispatch(loginAsync('/member/', { email, password }))
          .unwrap()
          .then(() => {
            navigate('/');
          })
          .catch();
      } else {
        setPasswordValid(true);
      }
    } else if (!pattern.test(email)) {
      setEmailValid(true);
    }
  };

  return (
    <Inputbox>
      <form className="login_form" onSubmit={loginSendHandler}>
        <div className="email">
          <label htmlFor="email" className="email-label">
            Email
          </label>
          <div className="email-inputbox">
            <LoginInput
              id="email"
              value={email}
              event={e => setEmail(e)}
              valid={emailValid}
            />
            <LoginWarning focus={emailValid} />
          </div>
          <WarningMent focus={emailValid}>
            The email is not a valid email address.
          </WarningMent>
        </div>
        <div className="password">
          <div className="password-label-box">
            <label htmlFor="password" className="password-label">
              Password
            </label>
            <Link className="forget-pwd" to="/">
              Forgot password?
            </Link>
          </div>
          <div className="password-inputbox">
            <LoginInput
              id="password"
              type="password"
              value={password}
              event={e => setPassword(e)}
              valid={passwordValid}
            />
            <LoginWarning focus={passwordValid} />
          </div>
          <WarningMent focus={passwordValid}>
            Password cannot be empty.
          </WarningMent>
        </div>
        <div className="login">
          <button className="login-btn">Log in</button>
          {/* <p className='warning-ment"'>
            The email is not a valid email address.
          </p> */}
        </div>
      </form>
    </Inputbox>
  );
}

export default LoginInputForm;
