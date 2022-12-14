import styled from 'styled-components';

const Side = styled.div`
  ul > .pub {
    cursor: text;
  }
  ul > li {
    list-style: none;
    padding: 8px;
    margin-bottom: 3px;
    cursor: pointer;
    &:hover {
      color: var(--black-900);
    }
  }

  .public {
    padding-left: 28px;
  }

  .question {
    background-color: var(--black-050);
    color: var(--black-900);
    border-right: 3px solid var(--orange-400);
  }

  .ad {
    cursor: text;
    border-left: 1px solid var(--black-100);
    border-top: 1px solid var(--black-100);
    border-bottom: 1px solid var(--black-100);
    margin-left: 2px;
  }
  .adimg {
    cursor: default;
    margin-left: 5px;
  }
  svg {
    margin-right: 3px;
  }

  button {
    width: 140px;
    height: 29px;
    border-style: none;
    border-radius: 4px;
    font-size: var(--font-11);
    margin-bottom: 5px;
    &:active {
      outline: 4px solid var(--black-100);
    }
  }

  .creatbut {
    cursor: pointer;
    background-color: var(--orange-400);
    color: white;
  }

  .whybut {
    cursor: pointer;
    background-color: white;
    color: var(--black-500);

    &:hover {
      background-color: var(--black-050);
    }
  }

  .team {
    cursor: text;
    font-size: var(--font-11);
  }
`;
export default Side;
