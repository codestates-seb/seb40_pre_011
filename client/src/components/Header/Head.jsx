import styled from 'styled-components';

const Head = styled.header`
  /* border-top: solid 3px var(--orange-400); */
  background-color: var(--powder-050);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px var(--black-075);
  width: 100%;
  height: 50px;
  /* position: sticky; */
  position: fixed;
  top: 0px;
  z-index: 5;
  .ham {
    display: none;
  }
  > .nav {
    color: var(--black-500);
    padding: 10px;
    font-size: var(--font-13);
    text-decoration: none;
    :hover {
      color: var(--black-800);
    }
  }
  > .inputbox {
    display: flex;
    align-items: center;
    border-radius: 5px;
    max-width: 800px;
    width: 50%;
    border: solid 1px var(--black-200);
    margin-right: 8px;
    background-color: var(--white);
    img {
      cursor: text;
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
    input {
      outline: none;
      border: none;
      width: 94%;
      padding: 9px;
      border-radius: 5px;
    }
  }
  .Login {
    background-color: var(--blue-100);
    border: solid 1px var(--blue-500);
    color: var(--blue-500);
    border-radius: 5px;
    padding: 9px;
    margin-right: 6px;
    :hover {
      cursor: pointer;
      background-color: var(--blue-300);
      border: solid 1px var(--blue-500);
      color: var(--blue-500);
    }
  }
  .SignUp {
    background-color: var(--blue-500);
    border: solid 1px var(--blue-100);
    color: var(--black-025);
    border-radius: 5px;
    padding: 9px;
    margin-right: 6px;
    position: relative;
    :hover {
      cursor: pointer;
      background-color: var(--blue-700);
      border: solid 1px var(--blue-300);
      color: var(--black-025);
    }
  }
  @media screen and (max-width: 1000px) {
    .About {
      display: none;
    }
    .Teams {
      display: none;
    }
  }

  @media screen and (max-width: 640px) {
    .inputbox {
      margin-left: 20%;
      width: 24px;
      height: 24px;
      border: none;
      background-color: var(--powder-050);
      > img {
        cursor: pointer;
        fill: var(--black-800);
      }
      > input {
        display: none;
      }
    }
  }

  @media screen and (max-width: 500px) {
    .logobar {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .ham {
      cursor: pointer;
      display: block;
      margin-right: 10px;
    }
    .Products {
      display: none;
    }
  }
`;
export default Head;
