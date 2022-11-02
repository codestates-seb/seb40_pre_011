// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
import useInput from '../../hook/useInput';
import { EmailRegex, PasswordRegex } from './SignRegex';
import { TeamLink } from './SignLeft';
import {
  SignInput,
  Inputlabel,
  Robotlabel,
  RecapContainer,
} from './SignupInputStyle';
import SignTextInput from './InputText';
import LoginWarning, { WarningMent } from '../Login/LoginWarning';
import recaptcha from '../../images/reCAPTCHA_logo.png';

export default function SignupInput() {
  const [displayName, setDisplayName] = useInput('');
  const [email, setEmail, emailErr, setEmailErr, resetEmail] = useInput('');
  const [
    password,
    setPassword,
    // noPasswordErr,
    // setNoPasswordErr,
    passwordErr,
    setPasswordErr,
    // passlogicErr,
    // setPasslogicError,
    resetPassword,
  ] = useInput('');

  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // Change
  // const [displayName, setDisplayName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [checkBox, setCheckBox] = useState(false);

  // Error
  // const [noEmailErr, setNoEmailErr] = useState(false);
  // const [emailErr, setEmailErr] = useState(false);
  // const [noPasswordErr, setNoPasswordErr] = useState(false);
  // const [passwordErr, setPasswordErr] = useState(false);
  // const [passlogicErr, setPasslogicError] = useState(false);

  const SignupHandler = e => {
    e.preventDefault();

    if (password === '' && email === '') {
      setEmailErr(true);
      setPasswordErr(true);
    } else if (password === '') {
      setPasswordErr(true);
    } else if (EmailRegex.test(email)) {
      if (!password === '') {
        resetPassword();
        resetEmail();
      } else {
        setPasswordErr(true);
      }
    } else if (!EmailRegex.test(email)) {
      setEmailErr(true);
    } else if (!PasswordRegex.test(password)) {
      setPasswordErr(true);
    }

    // if (!email.length === 0) {
    //   if (!EmailRegex.test(e.target.value)) {
    //     setEmailErr(true);
    //   } else {
    //     setEmailErr(false);
    //   }
    //   setNoEmailErr(false);
    // } else {
    //   setNoEmailErr(true);
    // }

    // if (!password.length === 0) {
    //   if (!PasswordRegex.test(e.target.value)) {
    //     setPasslogicError(true);
    //     if (password.length < 8) {
    //       setPasswordErr(true);
    //     } else {
    //       setPasswordErr(false);
    //     }
    //   } else {
    //     setPasslogicError(false);
    //   }
    //   setNoPasswordErr(false);
    // } else {
    //   setNoPasswordErr(true);
    // }

    // const onDisplayNameChange = e => {
    //   setDisplayName(e.target.value);
    // };

    // const onEmailChange = e => {
    //   setEmail(e.target.value);

    //   if (e.target.value) {
    //     if (!EmailRegex.test(e.target.value)) {
    //       setEmailErr(false);
    //     } else {
    //       setEmailErr(true);
    //     }
    //     setNoEmailErr(true);
    //   } else {
    //     setNoEmailErr(false);
    //   }
    // };

    // const onPasswordChange = e => {
    //   setPassword(e.target.value);

    //   if (e.target.value) {
    //     if (!PasswordRegex.test(e.target.value)) {
    //       setPasslogicError(false);
    //       if (e.target.value.length < 8) {
    //         setPasswordErr(false);
    //       } else {
    //         setPasswordErr(true);
    //       }
    //     } else {
    //       setPasslogicError(true);
    //     }
    //     setNoPasswordErr(true);
    //   } else {
    //     setNoPasswordErr(false);
    //   }
    // };
  };

  return (
    <SignInput>
      <form className="Signup_form" onSubmit={SignupHandler}>
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
              type="email"
              value={email}
              event={e => setEmail(e)}
              valid={emailErr}
            />
            <LoginWarning focus={emailErr} />
          </div>
          {/* <WarningMent focus={noEmailErr}>Email cannot be empty.</WarningMent> */}
          <WarningMent focus={emailErr}>
            {email} is not a valid email address.
          </WarningMent>
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
          {/* <WarningMent focus={noPasswordErr}>
            Password cannot be empty.
          </WarningMent> */}
          {password.length < 8 && (
            <WarningMent focus={passwordErr}>
              Must contain at least {8 - password.length} more characters,
              including at least 1 letter and 1 number.
            </WarningMent>
          )}
          {/* <WarningMent focus={passlogicErr}>
            Must contain at least 1 letter and 1 number.
          </WarningMent> */}
          <p>
            Passwords must contain at least eight characters, including at least
            1 letter and 1 number.
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
      </form>
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
