import styled from 'styled-components';

const SignInput = styled.form`
  box-shadow: var(--bs-xl);
  padding: 24px;
  margin-bottom: 24px;
  background-color: var(--white);
  border-radius: 7px;
  margin-right: auto;
  margin-left: auto;

  p {
    color: var(--black-500);
    font-size: var(--font-12);
    margin: 4px 0;
  }

  .checkbox {
    color: var(--black-900);
    font-size: var(--font-12);
    margin: 40px 0;
  }

  .signup_btn {
    width: 100%;
    margin: 2px 0px;
    color: var(--white);
    background-color: var(--blue-500);
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);

    position: relative;
    padding: 0.8em;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: var(--font-13);
    font-weight: normal;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--white);
      background-color: var(--blue-600);
    }
  }
  .policy {
    color: var(--black-500);
    font-size: var(--font-12);
    margin-top: 32px;
  }
`;

const Inputlabel = styled.label`
  margin: 2px 0px;
  padding: 0px 2px;
  font-size: 15px;
  color: var(--black-900);
  font-weight: 600;
`;

const InputText = styled.input`
  width: 100%;
  padding: 0.6em 0.7em;
  border: 1px solid var(--black-200);
  border-radius: 3px;
  font-size: var(--font-13);
  border-radius: 3px;
  color: var(--black-900);

  &:focus {
    border: 1px solid var(--blue-400);
    outline: 4px solid var(--blue-100);
  }
`;

export default function SignupInput() {
  return (
    <SignInput>
      <div className="displayName">
        <Inputlabel>Display name</Inputlabel>
        <InputText id="name" type="text" />
      </div>
      <div className="Email">
        <Inputlabel>Email</Inputlabel>
        <InputText id="email" type="email" />
      </div>
      <div className="Password">
        <Inputlabel>Password</Inputlabel>
        <InputText id="password" type="password" />
        <p>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </p>
      </div>
      <div className="checkbox">
        <input id="receive_check" type="checkbox" />
        Opt-in to receive occasional product updates, user research invitations,
        company announcements, and digests.
      </div>
      <div className="signup">
        <button className="signup_btn">Sign up</button>
      </div>
      <div className="policy">
        By clicking “Sign up”, you agree to our <span> terms of service</span>,
        <span> privacy policy</span>and <span> cookie policy</span>
      </div>
    </SignInput>
  );
}
