import { Link } from 'react-router-dom';
import styled from 'styled-components';
import warningIcon from '../../images/warning_icon.svg';

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

    .email-input {
      width: 100%;
      margin: 0px;
      padding: 0.6em 0.7em;
      border: 1px solid var(--black-200);
      border-radius: 3px;
      background-color: var(--white);
      color: var(--black-900);
      font-size: var(--font-13);
      &:focus {
        border: 1px solid #38a9f0;
        box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
        color: var(--black-900);
        outline: 0;
      }
    }
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

    .password-input {
      width: 100%;
      margin: 0px;
      padding: 0.6em 0.7em;
      border: 1px solid var(--black-200);
      border-radius: 3px;
      background-color: var(--white);
      color: var(--black-900);
      font-size: var(--font-13);
      &:focus {
        border: 1px solid #38a9f0;
        box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
        color: var(--black-900);
        outline: 0;
      }
    }
  }
  p[class*='warning-ment'] {
    display: none;
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

export const Waring = styled.img`
  width: 18px;
  height: 18px;
  vertical-align: baseline;
  display: none;
  position: absolute;
  top: 50%;
  margin-top: -9px;
  right: 0.7em;
`;

function LoginInputForm() {
  return (
    <Inputbox>
      <form className="login_form">
        <div className="email">
          <label htmlFor="email" className="email-label">
            Email
          </label>
          <div className="email-inputbox">
            <input id="email" type="email" className="email-input" />
            <Waring src={warningIcon} />
          </div>
          <p className="warning-ment">
            The email is not a valid email address.
          </p>
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
            <input id="password" type="password" className="password-input" />
            <Waring src={warningIcon} />
          </div>
          <p className='warning-ment"'>
            The email is not a valid email address.
          </p>
        </div>
        <div className="login">
          <button className="login-btn">Log in</button>
          <p className='warning-ment"'>
            The email is not a valid email address.
          </p>
        </div>
      </form>
    </Inputbox>
  );
}

export default LoginInputForm;
