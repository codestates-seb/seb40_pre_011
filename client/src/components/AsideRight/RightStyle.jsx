import styled from 'styled-components';

const RightStyle = styled.aside`
  margin-top: 20px;
  width: 300px;
  height: 22%;
  border-radius: 5px;

  .title {
    display: flex;
    align-items: center;
    background-color: #fbf3d5;
    padding-left: 5%;
    font-size: var(--font-12);
    font-weight: 700;
    height: 40px;
  }
  .content {
    display: flex;
    background-color: #fdf7e2;
    padding: 12px 0;
  }
  .content > .left {
    width: 16px;
    height: 16px;
    margin-left: 5%;
    margin-right: 5px;
  }
  .content > div {
    font-size: 13px;
  }
  .end {
    padding: 10;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export default RightStyle;
