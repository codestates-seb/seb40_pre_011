import styled from 'styled-components';

const DetailSection = styled.section`
  padding: 20px;
  width: 800px;
  header {
    font-size: var(--font-19);
    padding: 20px 0px;
  }
  .contentbody {
    display: flex;
    border-bottom: 1px solid rgb(227, 230, 232);
    margin-bottom: 20px;
    aside {
      padding-top: 15px;
      padding-right: 16px;
      > span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--font-21);
        color: var(--black-500);
        margin: 20px 6px;
      }
    }
    .upbutton,
    .downbutton {
      cursor: pointer;
    }
    .BDC {
      > p {
        font-size: var(--font-13);
        margin: 10px 0px;
      }
    }
    .BDC-bottom {
      display: flex;
      justify-content: space-between;
      margin: 16px 0px;
      > aside > .day {
        display: flex;
        justify-content: start;
        font-size: var(--font-12);
        margin: 0;
      }
      > aside > div {
        display: flex;
        height: 30px;
        align-items: end;
        justify-content: end;
        font-size: var(--font-13);
        color: var(--blue-600);
      }
      > div > button {
        cursor: pointer;
        padding-right: 10px;
        border: none;
        background-color: inherit;
        color: var(--black-400);
        font-size: var(--font-13);
        :hover {
          color: var(--black-600);
        }
      }
    }
    .userdata {
      width: 190px;
      padding: 5px 7px;
      height: auto;
      background-color: var(--blue-100);
      border-radius: 3px;
    }
  }
  .answerboard {
    width: 720px;
    .answerheader {
      font-size: var(--font-19);
    }
    .AB {
      margin-top: 20px;
    }
  }
  .answerbutton {
    width: 180px;
    height: 35px;
    font-size: var(--font-13);
    color: white;
    background-color: var(--blue-400);
    border: none;
    border-radius: 3px;
    margin-top: 30px;
    :hover {
      cursor: pointer;
      background-color: var(--blue-600);
    }
  }
`;
export default DetailSection;
