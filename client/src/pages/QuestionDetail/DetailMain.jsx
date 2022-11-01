import styled from 'styled-components';

const DetailMain = styled.main`
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  > div {
    width: 1100px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    .boardcontent {
      display: flex;
      height: auto;
    }
  }
`;

export default DetailMain;
