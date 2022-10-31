import styled from 'styled-components';

const MainStyle = styled.main`
  max-width: 1264px;
  width: 100%;
  height: 2000px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  .asideleft {
    flex-grow: 1;
  }
  .Main {
    flex-grow: 5;
    margin-right: 20px;
  }
  .asideRight {
    flex-grow: 3;
  }
  @media screen and (max-width: 1000px) {
    .asideRight {
      display: none;
    }
  }
`;

export default MainStyle;
