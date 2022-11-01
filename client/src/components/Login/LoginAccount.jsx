import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LoginLogo from './LoginLogo';
import TalentLogo from '../../images/login_talent_icon.svg';

export const Account = styled.article`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 16px;
  margin-bottom: 24px;
  font-size: var(--font-13);
  .account-talent {
    margin-top: 14px;
  }

  a[class$='link'] {
    color: var(--blue-600);
    text-decoration: none;

    &:hover {
      color: var(--blue-500);
    }
  }
  .talent-icon {
    margin-bottom: -0.1em;
  }

  @media screen and (max-width: 640px) {
    .talent-icon {
      display: none;
    }
  }
`;

function LoginAccount() {
  return (
    <Account>
      <div className="account-box">
        <span>Don’t have an account? </span>
        <Link className="join-link" to="/join">
          sign up
        </Link>
      </div>
      <div className="account-talent">
        <span>Are you an employer? </span>
        <Link to="/" className="talent-link">
          Sign up on Talent <tab />
          <LoginLogo
            name="talent-icon"
            logo={TalentLogo}
            width="12px"
            height="12px"
          />
        </Link>
      </div>
    </Account>
  );
}

export default LoginAccount;
