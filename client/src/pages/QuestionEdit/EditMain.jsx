import styled from 'styled-components';

const EditMain = styled.main`
  max-width: 1264px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  .box {
    padding: 20px;
    display: flex;
    flex-direction: column;
    max-width: 800px;
  }
  #titleinput,
  #taginput,
  #bodyinput {
    padding: 8px 10px;
    width: 100%;
    margin-bottom: 10px;
    height: 35px;
    border: 1px solid rgb(186, 191, 196);
    border-radius: 3px;
    &:focus {
      border: 1px solid #38a9f0;
      box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
      color: var(--black-900);
      outline: 0;
    }
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

    .on {
      margin-top: -5px;
      margin-bottom: 10px;
      color: rgb(208, 57, 62);
      font-size: var(--font-12);
    }
    .no {
      display: none;
    }
    .inputbox {
      .notitle,
      .titleinput,
      .warningtitle {
        position: absolute;
      }
    }
  }
  .buttons > .editbutton {
    width: 90px;
    height: 32px;
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
  .cancle {
    text-decoration: none;
    padding: 10px;
    margin-left: 10px;
    border: none;
    border-radius: 3px;
    background-color: inherit;
    color: var(--blue-600);
    font-size: var(--font-13);
    :hover {
      cursor: pointer;
      background-color: var(--blue-100);
    }
  }
  .boxheadcontent {
    margin-top: 6px;
    font-size: var(--font-13);
    margin-bottom: 7px;
  }
  .bodybox {
    padding: 8px 10px;
    width: 100%;
    margin-bottom: 10px;
    border: 1px solid rgb(186, 191, 196);
    border-radius: 3px;
    > #bodyinput:focus {
      border: 1px solid #38a9f0;
      box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
      color: var(--black-900);
      outline: 0;
    }
  }
  #notitle {
    padding: 8px 10px;
    width: 100%;
    margin-bottom: 10px;
    height: 35px;
    border: 1px solid rgb(186, 191, 196);
    border-radius: 3px;
    &:focus {
      border: 1px solid var(--red-500);
      box-shadow: 0px 0px 0px 4px hsla(358, 62%, 47%, 0.15);
      color: var(--black-900);
      outline: 0;
    }
  }
`;

export default EditMain;
