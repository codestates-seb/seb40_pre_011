import styled from 'styled-components';

const AsideR = styled.aside`
  margin-top: 20px;
  width: 300px;
  border-radius: 5px;
  background-color: #fdf7e2;
  .title {
    display: flex;
    align-items: center;
    border: solid 1px var();
    background-color: #fbf3d5;
    padding-left: 5%;
    font-size: var(--font-12);
    font-weight: 700;
    height: 40px;
  }
  .content {
    display: flex;
    margin: 12px 0;
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
    padding-bottom: 10px;
  }
`;

export default AsideR;
