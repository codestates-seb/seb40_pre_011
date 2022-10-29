import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 164px;
  background: white;
  padding-top: 21px;
  border-right: 1px solid var(--black-150);
  height: 85vh;
  font-size: var(--font-13);
  color: var(--black-600);
  position: sticky;
  top: 7.5%;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;
export default Container;
