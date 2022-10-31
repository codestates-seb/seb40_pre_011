import styled from 'styled-components';

const QuestMain = styled.main`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: var(--black-050);
  .maxwid {
    max-width: 1264px;
    margin: 0px auto;
    > button {
      width: 150px;
      height: 37px;
      border: none;
      border-radius: 3px;
      background-color: var(--blue-400);
      font-size: 13.6px;
      margin: 20px 0 50px;
      color: white;
      :hover {
        cursor: pointer;
        background-color: var(--blue-600);
      }
    }
  }
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media screen and (min-width: 1050px) {
      height: 130px;
    }
    > span {
      font-size: 27px;
      font-weight: 700;
    }
  }
  .content {
    margin-top: 10px;
    width: 860px;
    border: solid 1px var(--blue-200);
    background-color: var(--blue-050);
    padding: 25px;
  }
  .boxhead {
    font-size: 21px;
    font-weight: 400;
    margin-bottom: 8px;
  }
  .boxcontentend {
    margin-bottom: 15px;
  }
  .step {
    margin-bottom: 8px;
  }
  .steps {
    padding-left: 24px;
  }
  .steps > li {
    font-size: var(--font-13);
  }
  .boardbox {
    display: flex;
    border: solid 1px var(--black-400);
    padding: 24px;
  }
  .sc-label-head {
    font-size: 15px;
    font-weight: 500;
  }
  .boxheadcontent {
    margin-top: 6px;
    font-size: var(--font-13);
    margin-bottom: 7px;
  }
  #titleinput,
  #taginput {
    padding: 8px 10px;
    width: 100%;
    margin-bottom: 10px;
    height: 35px;
    border: 1px solid rgb(186, 191, 196);
    border-radius: 3px;
  }
  .box {
    margin: 10px 10px 10px 0;
    display: flex;
  }
  .boxtitle {
    width: 860px;
    padding: 20px;
    background-color: #fff;
    border: 1px solid rgb(186, 191, 196);
  }
  .boardaside {
    margin-left: 50px;
    width: 300px;
    .goodtitle {
      display: flex;
      align-items: center;
      padding: 12px;
      background-color: var(--black-050);
      border: 1px solid rgb(186, 191, 196);
      font-size: var(--font-15);
      font-weight: 500;
    }
  }
  .asideImg {
    width: 48px;
    height: 48px;
  }
  .content-p {
    display: flex;
    justify-content: center;
    padding: 16px;
    background-color: #fff;
    border: 1px solid rgb(186, 191, 196);
    > .cotent-p-box {
      margin: 0 8px;
    }
    > .cotent-p-box > p {
      margin-bottom: 12px;
      width: 191px;
      font-size: var(--font-12);
    }
  }
`;
export default QuestMain;
