import styled from 'styled-components';

const DetailMain = styled.main`
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  > div {
    max-width: 1100px;
    width: 90%;
    padding: 24px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1000px) {
      width: 80%;
    }
    @media screen and (max-width: 640px) {
      width: 100%;
    }
    .boardcontent {
      width: 100%;
      display: flex;
      height: auto;
    }
  }
`;

export default DetailMain;
