import styled from 'styled-components';
import Header from '../../components/Header/Header';
import SignLeft from '../../components/Signup/SignLeft';
import SignRight from '../../components/Signup/SignRight';

const SignupStyle = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--black-050);
  color: var(--black-800);
  padding-top: 8rem;
  overflow: auto;
`;

export default function Signup() {
  return (
    <>
      <Header />
      <SignupStyle>
        <SignLeft />
        <SignRight />
      </SignupStyle>
    </>
  );
}
