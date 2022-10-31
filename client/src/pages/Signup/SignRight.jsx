import styled from 'styled-components';
import SocialForm from '../../components/Login/SocialForm';
import SignAccount from './SignAccount';
import SignupInput from './SignupInput';

const SignRightform = styled.article`
  font-size: var(--font-15);
  width: 316px;
  margin-bottom: 24px;

  @media screen and (max-width: 816px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export default function SignRight() {
  return (
    <SignRightform>
      <SocialForm />
      <SignupInput />
      <SignAccount />
    </SignRightform>
  );
}
