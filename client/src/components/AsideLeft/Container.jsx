import styled from 'styled-components';

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  width: 164px;
  background-color: white;
  padding-top: 21px;
  border-right: 1px solid var(--black-150);
  height: 100vh;
  font-size: var(--font-13);
  color: var(--black-600);
  position: sticky;
  top: 50px;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;
export default Container;
