import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import signupAsync from '../../action/signupAsync';
import useInput from '../../hook/useInput';
import { EmailRegex, PasswordRegex } from './SignRegex';
import { TeamLink } from './SignLeft';
import {
  SignInput,
  Inputlabel,
  Robotlabel,
  RecapContainer,
} from './SignupInputStyle';
import SignTextInput from '../Login/LoginInput';
import LoginWarning, { WarningMent } from '../Login/LoginWarning';
import recaptcha from '../../images/reCAPTCHA_logo.png';

export default function SignupInput() {
  const [displayName, setDisplayName] = useInput('');
  const [
    email,
    setEmail,
    resetEmail,
    emailErr,
    setEmailErr,
    emailErrMent,
    setEmailErrMent,
  ] = useInput('');
  const [
    password,
    setPassword,
    resetPassword,
    passwordErr,
    setPasswordErr,
    passwordErrMent,
    setPasswordErrMent,
  ] = useInput('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignupHandler = useCallback(
    e => {
      e.preventDefault();

      if (
        email.length !== 0 &&
        password.length !== 0 &&
        EmailRegex.test(email) === true &&
        PasswordRegex.test(password) === true
      ) {
        dispatch(signupAsync({ url: '/signup', displayName, email, password }))
          .unwrap()
          .then(() => {
            navigate('/login');
          })
          .catch();
        // 중복될 때 login 페이지로 못 가게! then안에서 if문으로 처리(401일때 navigate 안되게...unwrap쓰고, catch 안됨)
      }

      const errMsg = [
        `Email cannot be empty.`,
        `${email} is not a valid email address.`,
        `Password cannot be empty.`,
        `Must contain at least ${
          8 - password.length
        } more characters, including at least 1 letter and 1 number.`,
        `Must contain at least 1 letter and 1 number.`,
      ];

      if (password === '' && email === '') {
        setEmailErr(true);
        setPasswordErr(true);
        setEmailErrMent(errMsg[0]);
        setPasswordErrMent(errMsg[2]);
        resetEmail();
        resetPassword();
      } else if (password === '') {
        setPasswordErr(true);
        setPasswordErrMent(errMsg[2]);
        if (email !== '') {
          if (!EmailRegex.test(email)) {
            setEmailErr(true);
            setEmailErrMent(errMsg[1]);
          } else {
            setEmailErr(false);
          }
        }
      } else if (email === '') {
        setEmailErr(true);
        setEmailErrMent(errMsg[0]);
        if (password !== '') {
          if (!PasswordRegex.test(password)) {
            setPasswordErr(true);
            if (password.length < 8) {
              setPasswordErrMent(errMsg[3]);
            } else {
              setPasswordErrMent(errMsg[4]);
            }
          } else {
            setPasswordErr(false);
          }
        }
      } else if (EmailRegex.test(email)) {
        setEmailErr(false);
        if (!PasswordRegex.test(password)) {
          setPasswordErr(true);
          if (password.length < 8) {
            setPasswordErrMent(errMsg[3]);
          } else {
            setPasswordErrMent(errMsg[4]);
          }
        } else {
          setPasswordErr(false);
        }
      } else if (!EmailRegex.test(email)) {
        setEmailErr(true);
        setEmailErrMent(errMsg[1]);
        if (!PasswordRegex.test(password)) {
          if (password.length < 8) {
            setPasswordErr(true);
            setPasswordErrMent(errMsg[3]);
          } else {
            setPasswordErr(true);
            setPasswordErrMent(errMsg[4]);
          }
        } else {
          setPasswordErr(false);
        }
      }
    },
    [displayName, email, password],
  );

  return (
    <SignInput onSubmit={SignupHandler}>
      <div className="displayName">
        <Inputlabel>Display name</Inputlabel>
        <div className="inputbox">
          <SignTextInput
            id="displayName"
            type="text"
            value={displayName}
            event={e => setDisplayName(e)}
          />
        </div>
      </div>
      <div className="Email">
        <Inputlabel>Email</Inputlabel>
        <div className="inputbox">
          <SignTextInput
            id="email"
            value={email}
            event={e => setEmail(e)}
            valid={emailErr}
          />
          <LoginWarning focus={emailErr} />
        </div>
        <WarningMent focus={emailErr}>{emailErrMent}</WarningMent>
      </div>
      <div className="Password">
        <Inputlabel>Password</Inputlabel>
        <div className="inputbox">
          <SignTextInput
            id="password"
            type="password"
            value={password}
            event={e => setPassword(e)}
            valid={passwordErr}
          />
          <LoginWarning focus={passwordErr} />
        </div>
        <WarningMent focus={passwordErr}>{passwordErrMent}</WarningMent>
        <p className="passment">
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
