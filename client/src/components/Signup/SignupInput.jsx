import { useState } from 'react';
import { EmailRegex, PasswordRegex } from './SignRegex';
import { TeamLink } from './SignLeft';
import {
  SignInput,
  Inputlabel,
  InputText,
  Robotlabel,
  RecapContainer,
} from './SignupInputStyle';
import { Warning } from '../Login/LoginWarning';
import warningIcon from '../../images/warning_icon.svg';
import recaptcha from '../../images/reCAPTCHA_logo.png';

export default function SignupInput() {
  // Change
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkBox, setCheckBox] = useState(false);

  // Error
  const [noEmailErr, setNoEmailErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [noPasswordErr, setNoPasswordErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [passlogicErr, setPasslogicError] = useState(false);

  const onDisplayNameChange = e => {
    setDisplayName(e.target.value);
  };

  const onEmailChange = e => {
    setEmail(e.target.value);

    if (e.target.value) {
      if (!EmailRegex.test(e.target.value)) {
        setEmailErr(false);
      } else {
        setEmailErr(true);
      }
      setNoEmailErr(true);
    } else {
      setNoEmailErr(false);
    }
  };

  const onPasswordChange = e => {
    setPassword(e.target.value);

    if (e.target.value) {
      if (!PasswordRegex.test(e.target.value)) {
        setPasslogicError(false);
        if (e.target.value.length < 8) {
          setPasswordErr(false);
        } else {
          setPasswordErr(true);
        }
      } else {
        setPasslogicError(true);
      }
      setNoPasswordErr(true);
    } else {
      setNoPasswordErr(false);
    }
  };

  const onCheckboxChange = () => {
    setCheckBox(!checkBox);
  };

  return (
    <SignInput>
      <div className="displayName">
        <Inputlabel>Display name</Inputlabel>
        <div className="inputbox">
          <InputText
            id="displayName"
            type="text"
            value={displayName}
            onChange={onDisplayNameChange}
          />
        </div>
      </div>
      <div className="Email">
        <Inputlabel>Email</Inputlabel>
        <div className="inputbox">
          <InputText
            id="email"
            type="email"
            value={email}
            onChange={onEmailChange}
          />
          <Warning src={warningIcon} />
        </div>
        <p className={`warning-ment ${noEmailErr ? 'ok' : 'error'}`}>
          Email cannot be empty.
        </p>
        <p className={`warning-ment ${emailErr ? 'ok' : 'error'}`}>
          {email} is not a valid email address.
        </p>
      </div>
      <div className="Password">
        <Inputlabel>Password</Inputlabel>
        <div className="inputbox">
          <InputText
            id="password"
            type="password"
            value={password}
            onChange={onPasswordChange}
          />
          <Warning src={warningIcon} />
        </div>
        <p className={`warning-ment ${noPasswordErr ? 'ok' : 'error'}`}>
          Password cannot be empty.
        </p>
        {password.length < 8 && (
          <p className={`warning-ment ${passwordErr ? 'ok' : 'error'}`}>
            Must contain at least {8 - password.length} more characters,
            including at least 1 letter and 1 number.
          </p>
        )}
        <p className={`warning-ment ${passlogicErr ? 'ok' : 'error'}`}>
          Must contain at least 1 letter and 1 number.
        </p>
        <p>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </p>
      </div>
      <div className="checkform">
        <div className="robotcheck">
          <Robotlabel>
            <input
              id="robotcheckbox"
              type="checkbox"
              value={checkBox}
              onChange={onCheckboxChange}
            />
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
        <p className={`warning-ment ${checkBox ? 'ok' : 'error'}`}>
          CAPTCHA response required.
        </p>
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
