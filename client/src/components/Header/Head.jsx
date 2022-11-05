import styled from 'styled-components';

const Head = styled.header`
  border-top: solid 3px var(--orange-400);
  background-color: var(--powder-050);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 2px 4px var(--black-075);
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0px;
  z-index: 5;
  .logobar {
    &:hover {
      background-color: var(--black-075);
    }
  }
  .ham {
    display: none;
  }
  > .nav {
    color: var(--black-500);
    padding: 10px;
    margin-right: 10px;
    font-size: var(--font-13);
    text-decoration: none;
    margin: 0px 2px;
    :hover {
      color: var(--black-800);
      background-color: var(--black-075);
      border-radius: 25%;
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
    position: relative;

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

  .focusInputbox {
    display: flex;
    align-items: center;
    border-radius: 5px;
    max-width: 800px;
    width: 50%;
    border: solid 1px #38a9f0;
    margin-right: 8px;
    background-color: var(--white);
    position: relative;
    box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);

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

  .arrow {
    position: absolute;
    left: 50%;
    top: 120%;
    content: '';
    transform: rotate(45deg);
    border-radius: 1.5px;
    background: var(--white);
    width: 12px;
    height: 12px;
    box-shadow: -1px -1px 1px 0 hsl(0deg 0% 0% / 12%);
  }

  .search.click {
    display: block;
  }

  .search.no {
    display: none;
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
  .loginToolbar {
    height: 100%;

    > ol {
      display: flex;
      list-style: none;
      justify-content: space-evenly;
      line-height: 50px;
      .toolbar_user {
        padding: 0px 12px;
        > a {
          text-decoration: none;
        }
      }
      > li {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 10px;
        position: relative;
        &:hover {
          color: var(--black-800);
          background-color: var(--black-075);
        }
      }
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
