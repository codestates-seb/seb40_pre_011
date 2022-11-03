import styled from 'styled-components';

export const SignInput = styled.form`
  box-shadow: var(--bs-xl);
  padding: 24px;
  margin-bottom: 24px;
  background-color: var(--white);
  border-radius: 7px;
  margin-right: auto;
  margin-left: auto;

  .passment {
    color: var(--black-500);
    font-size: var(--font-12);
    margin: 4px 0;
    margin-bottom: 15px;
  }

  .displayName {
    margin-bottom: 15px;
  }

  .Email {
    margin-bottom: 15px;
  }

  .inputbox {
    margin-top: 5px;
    position: relative;
  }

  .warning-ment.ok {
    color: var(--red-500);
    display: none;
  }

  .warning-ment.error {
    color: var(--red-500);
  }

  .checkform {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 6px 0;
    padding: 8px 0 2px;
    width: 100%;
    height: 156px;
    background-color: var(--black-050);
    border: 1px solid var(--black-075);
    border-radius: 3px;
    text-align: center;

    .robotcheck {
      display: flex;
      flex-direction: column;
      width: 156px;
      height: 136px;
      background-color: #f9f9f9;
      color: black;
      border: 1px solid #d3d3d3;
      border-radius: 3px;
      box-shadow: 0 0 4px 1px rgb(0 0 0 / 8%);
      font-family: Roboto, helvetica, arial, sans-serif;
    }
  }

  .checkbox {
    color: var(--black-900);
    font-size: var(--font-12);
    margin: 15px 0;
    height: 53px;
    display: flex;
    align-items: flex-start;
  }

  .signup_btn {
    width: 100%;
    margin: 2px 0px;
    color: var(--white);
    background-color: var(--blue-500);
    box-shadow: inset 0 1px 0 0 hsl(0deg 0% 100% / 40%);

    position: relative;
    padding: 0.8em;
    border: 1px solid transparent;
    border-radius: 3px;
    font-size: var(--font-13);
    font-weight: normal;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: var(--white);
      background-color: var(--blue-600);
    }
  }
  .policy {
    color: var(--black-500);
    font-size: var(--font-12);
    margin-top: 32px;
  }

  input[type='checkbox'] {
    margin-right: 5px;
  }
`;

export const Inputlabel = styled.label`
  margin: 2px 0px;
  padding: 0px 2px;
  font-size: 15px;
  color: var(--black-900);
  font-weight: 600;
`;

export const Robotlabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;

  #robotcheckbox {
    appearance: none;
    border-radius: 2px;
    background-color: var(--white);
    border: 2px solid var(--black-200);
    width: 24px;
    height: 24px;

    &:checked {
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' width='48px' height='48px'%3E%3Cpath fill='%2343A047' d='M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z'/%3E%3C/svg%3E%0A");
      background-size: 100%;
      background-color: #f9f9f9;
      border: none;
    }
  }

  .imnotrobot {
    font-size: 14px;
    line-height: 17px;
    font-weight: 400;
    margin-right: 5px;
    width: 95px;
  }
`;

export const RecapContainer = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  span {
    color: var(--black-700);
    font-size: 10px;
    font-weight: 400;
    margin-left: 5px;
  }

  p {
    font-size: 8px;
  }
`;
