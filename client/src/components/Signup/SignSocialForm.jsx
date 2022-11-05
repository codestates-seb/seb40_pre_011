import github from '../../images/github_icon.svg';
import facebook from '../../images/facebook_icon.svg';
import google from '../../images/google_icon.svg';
import LoginLogo from '../Login/LoginLogo';
import { Social, SocialButton } from '../Login/SocialForm';

export default function SignSocialForm() {
  return (
    <Social>
      <SocialButton className="google">
        <LoginLogo logo={google} width="18" height="18" />
        <span> Sign up with Google</span>
      </SocialButton>
      <SocialButton className="github">
        <LoginLogo logo={github} width="18" height="18" />
        <span> Sign up with Github</span>
      </SocialButton>
      <SocialButton className="facebook">
        <LoginLogo logo={facebook} width="18" height="18" />
        <span> Sign up with Facebook</span>
      </SocialButton>
    </Social>
  );
}
