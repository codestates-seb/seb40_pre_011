import styled from 'styled-components';
import github from '../../images/github_icon.svg';
import facebook from '../../images/facebook_icon.svg';
import google from '../../images/google_icon.svg';
import LoginLogo from './LoginLogo';

export const Social = styled.article`
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
  .google {
    color: var(--black-700);
    background-color: var(--white);
    &:hover {
      background-color: var(--black-025);
      color: var(--black-800);
    }
  }
  .facebook {
    color: #fff;
    background-color: #385499;
    border-color: transparent;
    &:hover {
      background-color: #314a86;
      color: #fff;
    }
  }

  .github {
    color: var(--white);
    background-color: var(--black-750);
    &:hover {
      background-color: var(--black-800);
      color: var(--white);
    }
  }
`;

export const SocialButton = styled.button`
  margin: 4px 0px;
  padding: 0.8em;
  border: 1px solid transparent;
  outline: none;
  flex: 1 auto;
  text-align: center;
  font-size: 13px;
  font-weight: normal;
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
`;

function SocialForm() {
  return (
    <Social>
      <SocialButton className="google">
        <LoginLogo logo={google} width="18px" height="18px" />
        <span> Log in with Google</span>
      </SocialButton>
      <SocialButton className="github">
        <LoginLogo logo={github} width="18px" height="18px" />
        <span> Log in with Github</span>
      </SocialButton>
      <SocialButton className="facebook">
        <LoginLogo logo={facebook} width="18px" height="18px" />
        <span> Log in with Facebook</span>
      </SocialButton>
    </Social>
  );
}

export default SocialForm;
