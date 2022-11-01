import styled from 'styled-components';

const Pagenav = styled.nav`
  width: 100%;
  padding-bottom: 100px;
  padding-right: 24px;
  > ul {
    gap: 5px;
    display: flex;
    justify-content: end;
    > li {
      list-style: none;
      .Prev,
      .Next,
      .buttons {
        border: 1px solid var(--black-100);
        background-color: #fff;
        color: #3b4045;
        border-radius: 3px;
        font-size: var(--font-13);
        width: 30px;
        height: 30px;
        :hover {
          cursor: pointer;
          background-color: rgb(206, 203, 203);
        }
        :active {
          color: white;
          border-color: var(--orange-400);
          background-color: var(--orange-400);
        }
      }
      .Prev,
      .Next {
        width: 50px;
      }
      .active {
        border-radius: 3px;
        font-size: var(--font-13);
        width: 30px;
        height: 30px;
        color: white;
        border-color: var(--orange-400);
        background-color: var(--orange-400);
        border: none;
        outline: none;
      }
    }
  }
`;

export default Pagenav;
