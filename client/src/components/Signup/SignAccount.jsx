import { Link } from 'react-router-dom';
import LoginLogo from '../Login/LoginLogo';
import TalentLogo from '../../images/login_talent_icon.svg';
import { Account } from '../Login/LoginAccount';

export default function SignAccount() {
  return (
    <Account>
      <div className="account-box">
        <span>Already have an account? </span>
        <Link className="login-link" to="/login">
          Log in
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
