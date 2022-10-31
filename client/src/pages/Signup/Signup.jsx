import Header from '../../components/Header/Header';
// import SignupStyle from './SignupStyle';

import SignLeft from './SignLeft';
import { ReactComponent as GoogleLogo } from '../../images/google.svg';
import { ReactComponent as GithubLogo } from '../../images/github.svg';
import { ReactComponent as FacebookLogo } from '../../images/facebook.svg';

export default function Signup() {
  return (
    <>
      <Header />
      {/* <SignupStyle> */}
      <SignLeft />
      <div className="SignRight">
        <div className="socialSign">
          <button>
            <GoogleLogo />
            Sign up with Google
          </button>
          <button>
            <GithubLogo />
            Sign up with Github
          </button>
          <button>
            <FacebookLogo />
            Sign up with Facebook
          </button>
        </div>
        <div className="signForm">
          <div className="signInput" />
        </div>
      </div>
      {/* </SignupStyle> */}
    </>
  );
}
