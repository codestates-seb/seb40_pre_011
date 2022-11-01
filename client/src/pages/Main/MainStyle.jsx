import styled from 'styled-components';

const MainStyle = styled.main`
  max-width: 1264px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .Main {
    width: 780px;
    margin-right: 20px;
  }
  @media screen and (max-width: 1000px) {
    .asideRight {
      display: none;
    }
  }
`;

export default MainStyle;
