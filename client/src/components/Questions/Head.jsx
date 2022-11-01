import styled from 'styled-components';

const Head = styled.section`
  padding: 16px 0px 16px 24px;
  .head {
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
  }
  .buttons {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    /* border-bottom: 0.2px solid var(--black-100); */
    button {
      cursor: pointer;
      padding: 10px;
      color: var(--black-500);
      background-color: #fff;
      border: 1px solid var(--black-350);
    }
    .Newest {
      border-radius: 3px 0px 0px 3px;
    }
    .Votes {
      border-radius: 0px 3px 3px 0px;
    }
    #clicked {
      color: var(--black-700);
      background-color: var(--black-075);
    }
  }
  .askbutton {
    border: none;
    border-radius: 5px;
    color: white;
    background-color: var(--blue-400);
    padding: 10.4px;
    font-size: var(--font-13);
    text-decoration: none;
    :hover {
      cursor: pointer;
      background-color: var(--blue-600);
    }
  }
  .title {
    font-size: 27px;
  }
`;

export default Head;
