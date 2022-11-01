import styled from 'styled-components';
import SignSocialForm from './SignSocialForm';
import SignAccount from './SignAccount';
import SignupInput from './SignupInput';

const SignRightform = styled.article`
  font-size: var(--font-15);
  width: 316px;
  margin: 24px 0;

  @media screen and (max-width: 816px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default function SignRight() {
  return (
    <SignRightform>
      <SignSocialForm />
      <SignupInput />
      <SignAccount />
    </SignRightform>
  );
}
