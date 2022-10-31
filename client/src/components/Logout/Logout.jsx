import styled from 'styled-components';
import LogoutForm from './LogoutForm';

const LogoutContainer = styled.main`
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: var(--black-050);
  margin: 0px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  .logout-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    max-width: 1264px;
    padding: 24px 16px;
  }
  @media screen and (max-width: 816px) {
  }
`;

function Logout() {
  return (
    <LogoutContainer>
      <section className="logout-content">
        <LogoutForm />
      </section>
    </LogoutContainer>
  );
}

export default Logout;
