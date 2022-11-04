import styled from 'styled-components';

const MainStyle = styled.main`
  max-width: 1264px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .Main {
    max-width: 780px;
    margin-right: 20px;
    width: 100%;
  }
  @media screen and (max-width: 1000px) {
    .asideRight {
      display: none;
    }
    .Main {
      width: 80%;
    }
  }
  @media screen and (max-width: 640px) {
    .Main {
      width: 100%;
    }
  }
`;

export default MainStyle;
