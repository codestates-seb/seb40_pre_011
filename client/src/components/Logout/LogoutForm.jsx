import { Link } from 'react-router-dom';
import styled from 'styled-components';
import askLogo from '../../images/logout_ask_icon.svg';
import mathoverflow from '../../images/logout_math_icon.svg';
import serverfault from '../../images/logout_server_icon.svg';
import stackapp from '../../images/logout_stack_icon.svg';
import stackexchange from '../../images/logout_exchange_icon.svg';
import stackoverflow from '../../images/footer_logo.png';
import superuser from '../../images/logout_user_icon.svg';
import LoginLogo from '../Login/LoginLogo';

const ContentItem = styled.article`
  .ment-box {
    max-width: 526px;
    text-align: center;
    /* var(--font-21) */
    font-size: 1.3rem;
    margin-bottom: 24px;
    margin-left: auto;
    margin-right: auto;
  }
  .logout-form {
    max-width: 316px;
    box-shadow: var(--bs-xl);
    margin-bottom: 24px;
    background-color: var(--white);
    border-radius: 7px;
    margin-left: auto;
    margin-right: auto;
    padding: 24px;
  }
  .link-list {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0px;
    padding: 0px;
    font-size: var(--font-15);
    padding-bottom: 12px;
    margin-bottom: 16px;
    border-color: var(--black-100);
    border-bottom-style: solid;
    border-bottom-width: 1px;

    > li {
      /* margin: 4px 0px; */
      padding: 0px;
    }
    a {
      text-decoration: none;
      color: var(--blue-600);
      cursor: pointer;
      display: flex;
      .logout_logo {
        margin: 4px;
      }
      .link-ment {
        margin: 4px;
      }
      &:hover {
        color: var(--blue-500);
      }
    }
  }
  .device-all-logout {
    margin-bottom: 16px;
    font-size: var(--font-12);
    display: flex;

    > input {
      margin-right: 4px;
    }
    .device-label {
      cursor: pointer;
    }
  }
  .logout-box {
    display: flex;
  }
  .logout-btn {
    margin: 2px;
    color: var(--white);
    background-color: var(--blue-500);
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);
    position: relative;
    padding: 0.8em;
    border: 1px solid transparent;
    border-radius: 3px;
    outline: none;
    font-size: 13px;
    font-weight: normal;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: var(--white);
      background-color: var(--blue-600);
    }
  }
  .logout-cancel {
    margin: 2px;
    position: relative;
    padding: 0.8em;
    color: var(--blue-600);
    border: 1px solid transparent;
    border-radius: 3px;
    background-color: transparent;
    text-decoration: none;
    font-size: var(--font-13);
    font-weight: normal;
    text-align: center;
    &:hover {
      color: var(--blue-700);
      background-color: var(--blue-050);
    }
  }
  .logout-ment {
    text-align: left;
    color: hsl(210, 8%, 45%);
    font-size: var(--font-12);
    margin-top: 32px;
  }
  @media screen and (max-width: 640px) {
    .ment-box {
      max-width: 445px;
    }
    .logout-form {
      max-width: 267px;
    }
  }
`;

function LogoutForm() {
  return (
    <ContentItem>
      <article className="ment-box">
        <span>
          Clicking “Log out” will log you out of the following domains on this
          device:
        </span>
      </article>
      {/* 나중에 반복문으로 수정 */}
      <form className="logout-form">
        <ul className="link-list">
          <li>
            <Link to="/">
              <LoginLogo
                name="logout_logo"
                logo={askLogo}
                width="18px"
                height="18px"
              />
              <div className="link-ment">askubuntu.com</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <LoginLogo
                name="logout_logo"
                logo={mathoverflow}
                width="18px"
                height="18px"
              />
              <div className="link-ment">mathoverflow.net</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <LoginLogo
                name="logout_logo"
                logo={serverfault}
                width="18px"
                height="18px"
              />
              <div className="link-ment">serverfault.com</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <LoginLogo
                name="logout_logo"
                logo={stackapp}
                width="18px"
                height="18px"
              />
              <div className="link-ment">stackapps.com</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <LoginLogo
                name="logout_logo"
                logo={stackexchange}
                width="18px"
                height="18px"
              />
              <div className="link-ment">stackexchange.com</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <LoginLogo
                name="logout_logo"
                logo={stackoverflow}
                width="18px"
                height="18px"
              />
              <div className="link-ment">stackoverflow.com</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <LoginLogo
                name="logout_logo"
                logo={superuser}
                width="18px"
                height="18px"
              />
              <div className="link-ment">superuser.com</div>
            </Link>
          </li>
        </ul>
        <article className="device-all-logout">
          <input type="checkbox" id="device" />
          <label className="device-label" htmlFor="device">
            Log out on all devices
          </label>
        </article>
        <article className="logout-box">
          <button className="logout-btn">Log out</button>
          <Link to="/" className="logout-cancel">
            Cancel
          </Link>
        </article>
        <article className="logout-ment">
          <span>
            If you’re on a shared computer, remember to log out of your Open ID
            provider (Facebook, Google, Stack Exchange, etc.) as well.
          </span>
        </article>
      </form>
    </ContentItem>
  );
}

export default LogoutForm;
