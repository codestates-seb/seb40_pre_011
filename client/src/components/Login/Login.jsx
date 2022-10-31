import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LoginLogo from './LoginLogo';
import SocialForm from './SocialForm';
import overflow from '../../images/footer_logo.png';
import LoginInputForm from './LoginInputForm';
import LoginAccount from './LoginAccount';

const LoginContainer = styled.main`
  max-width: 100%;
  margin: 0px;
  background-color: var(--black-050);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginContent {
    width: 100%;
    height: 100%;
    max-width: 1264px;
    margin: 0px;
    background-color: transparent;
    border-left: 0px;
    border-right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;

    @media screen and (max-width: 816px) {
      padding-left: 16px;
      padding-right: 16px;
    }
  }
  .logobox {
    text-align: center;
    margin-bottom: 24px;
  }
  .logobox > a {
    text-decoration: none;
  }
  .contentItem {
    flex: 1 auto;
    max-width: 316px;

    @media screen and (max-width: 640px) {
      max-width: 267px;
    }
  }
`;

function Login() {
  return (
    <LoginContainer>
      <section className="loginContent">
        <article className="contentItem">
          <article className="logobox">
            <Link to="/">
              <LoginLogo logo={overflow} width="32" height="37" />
            </Link>
          </article>
          <SocialForm />
          <LoginInputForm />
          <LoginAccount />
        </article>
      </section>
    </LoginContainer>
  );
}

export default Login;
