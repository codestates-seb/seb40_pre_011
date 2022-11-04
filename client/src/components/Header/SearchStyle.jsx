import styled from 'styled-components';

const Search = styled.form`
  position: absolute;
  top: 42.7273px;
  width: 100%;
  background-color: var(--white);
  border: 1px solid var(--black-100);
  border-radius: 5px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.06), 0 2px 6px hsla(0, 0%, 0%, 0.06),
    0 3px 8px hsla(0, 0%, 0%, 0.09);
  font-size: var(--font-13);

  .topform {
    display: flex;
    color: var(--black-500);
    padding: 12px 12px 0px 12px;
  }
  .form {
    flex-basis: 50%;
  }
  p {
    margin-bottom: 12px;
  }

  span {
    font-family: ui-monospace, 'Cascadia Mono', 'Segoe UI Mono',
      'Liberation Mono', Menlo, Monaco, Consolas, monospace;
    color: var(--black-700);
  }

  .bottomform {
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-color: var(--black-075);
    border-top-style: solid;
    border-top-width: 1px;
  }

  button {
    cursor: pointer;
    font-size: var(--font-11);
    padding: 0.6em;
    color: var(--powder-700);
    background-color: var(--powder-100);
    border: 0.5px solid var(--powder-500);
    border-radius: 3px;

    &:hover {
      background-color: var(--powder-300);
    }

    &:active {
      background-color: var(--powder-400);
      box-shadow: 0px 0px 0px 4px hsla(206, 100%, 40%, 0.15);
    }
  }
  /* @media screen and (max-width: 660px) {
    display: none;
  } */
`;

export default Search;
