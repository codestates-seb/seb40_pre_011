import { TeamLink } from './SignLeft';
import {
  SignInput,
  Inputlabel,
  InputText,
  Robotlabel,
  RecapContainer,
} from './SignupInputStyle';
import { Waring } from '../Login/LoginInputForm';
import warningIcon from '../../images/warning_icon.svg';
import recaptcha from '../../images/reCAPTCHA_logo.png';

export default function SignupInput() {
  return (
    <SignInput>
      <div className="displayName">
        <Inputlabel>Display name</Inputlabel>
        <div className="inputbox">
          <InputText id="name" type="text" />
        </div>
      </div>
      <div className="Email">
        <Inputlabel>Email</Inputlabel>
        <div className="inputbox">
          <InputText id="email" type="email" />
          <Waring src={warningIcon} />
        </div>
        <p className="warning-ment">Email cannot be empty.</p>
        <p className="warning-ment">{}is not a valid email address.</p>
      </div>
      <div className="Password">
        <Inputlabel>Password</Inputlabel>
        <div className="inputbox">
          <InputText id="password" type="password" />
          <Waring src={warningIcon} />
        </div>
        <p className="warning-ment">Password cannot be empty.</p>
        <p className="warning-ment">
          Please add one of the following things to make your password stronger:
          <li>number</li>
        </p>
        <p className="warning-ment">
          Must contain at least {} more characters.
        </p>
        <p className="warning-ment">
          Please add one of the following things to make your password stronger:
          <li>letters</li>
        </p>
        <p>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </p>
      </div>
      <div className="checkform">
        <div className="robotcheck">
          <Robotlabel>
            <input id="robotcheckbox" type="checkbox" />
            <span className="imnotrobot">I&apos;m not a robot</span>
          </Robotlabel>
          <RecapContainer>
            <img src={recaptcha} width="24" alt="" />
            <span>reCAPTCHA</span>
            <div>
              <p className="recatfooter"> Privacy - Terms </p>
            </div>
          </RecapContainer>
        </div>
        <p className="warning-ment">CAPTCHA response required.</p>
      </div>
      <div className="checkbox">
        <input id="receive_check" type="checkbox" />
        <div className="checkbox_text">
          Opt-in to receive occasional product updates, user research
          invitations,company announcements, and digests.
        </div>
      </div>
      <div className="signup">
        <button className="signup_btn">Sign up</button>
      </div>
      <div className="policy">
        <span>By clicking “Sign up”, you agree to our </span>
        <TeamLink
          onClick={() =>
            window.open(
              'https://stackoverflow.com/legal/terms-of-service/public',
              '_blank',
            )
          }
        >
          terms of service
        </TeamLink>
        <span>, </span>
        <TeamLink
          onClick={() =>
            window.open(
              'https://stackoverflow.com/legal/privacy-policy',
              '_blank',
            )
          }
        >
          privacy policy
        </TeamLink>
        <span> and </span>
        <TeamLink
          onClick={() =>
            window.open(
              'https://stackoverflow.com/legal/cookie-policy',
              '_blank',
            )
          }
        >
          cookie policy
        </TeamLink>
      </div>
    </SignInput>
  );
}
