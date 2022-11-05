import styled from 'styled-components';

const DetailSection = styled.section`
  padding: 20px;
  max-width: 800px;
  width: 100%;
  header {
    font-size: var(--font-19);
    padding: 20px 0px;
  }
  .contentbody {
    position: relative;
    width: 100%;
    display: flex;
    border-bottom: 1px solid rgb(227, 230, 232);
    padding-bottom: 20px;
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
      max-width: 700px;
      width: 100%;
      > p {
        font-size: var(--font-13);
        margin: 10px 0px;
      }
      .tag {
        display: flex;
        margin: 26px 0px;
        padding: 4.8px 6px;
        border: none;
        color: rgb(57, 115, 157);
        background-color: rgb(225, 236, 244);
        border-radius: 3px;
        font-size: 12px;
        cursor: auto;
      }
      .contentdata {
        width: 100%;
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
      > div > button,
      > div > .update {
        text-decoration: none;
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
    .modal {
      display: flex;
      flex-direction: column;
      gap: 8px;
      position: absolute;
      bottom: -50px;
      width: 340px;
      padding: 12px;
      background: rgb(255, 255, 255);
      border-radius: 7px;
      border: var(--black-100) solid 2px;
      z-index: 100;
      box-shadow: rgb(0 0 0 / 6%) 0px 1px 3px, rgb(0 0 0 / 6%) 0px 2px 6px,
        rgb(0 0 0 / 9%) 0px 3px 8px;
      > p {
        margin-left: 2px;
        font-size: var(--font-13);
        font-weight: 600;
      }
      > input {
        padding: 8px;
        border: 1px solid var(--black-200);
        border-radius: 3px;
        font-size: var(--font-12);
        outline: none;
        &:focus {
          border: 1px solid #38a9f0;
          box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
          color: var(--black-900);
          outline: 0;
        }
      }
      > .modalbutton {
        padding: 0px;
        border: none;
        color: rgb(0, 116, 204);
        background-color: inherit;
        font-size: 13px;
        text-align: left;
      }
      ::after {
        content: '';
        position: absolute;
        border-style: solid;
        border-width: 0px 9px 11px;
        border-color: rgb(222, 222, 222) transparent;
        display: block;
        width: 0px;
        top: -11px;
        left: 10px;
      }
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
